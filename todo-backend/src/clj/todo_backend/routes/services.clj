(ns todo-backend.routes.services
  (:require
    [reitit.swagger :as swagger]
    [reitit.swagger-ui :as swagger-ui]
    [reitit.ring.coercion :as coercion]
    [reitit.coercion.spec :as spec-coercion]
    [reitit.ring.middleware.muuntaja :as muuntaja]
    [reitit.ring.middleware.multipart :as multipart]
    [reitit.ring.middleware.parameters :as parameters]
    [todo-backend.middleware.formats :as formats]
    [todo-backend.middleware.exception :as exception]
    [todo-backend.db.core :as db]
    [ring.util.http-response :refer :all]
    [clojure.java.io :as io]))

(defn service-routes []
  ["/api"
   {:coercion spec-coercion/coercion
    :muuntaja formats/instance
    :swagger {:id ::api}
    :middleware [;; query-params & form-params
                 parameters/parameters-middleware
                 ;; content-negotiation
                 muuntaja/format-negotiate-middleware
                 ;; encoding response body
                 muuntaja/format-response-middleware
                 ;; exception handling
                 exception/exception-middleware
                 ;; decoding request body
                 muuntaja/format-request-middleware
                 ;; coercing response bodys
                 coercion/coerce-response-middleware
                 ;; coercing request parameters
                 coercion/coerce-request-middleware
                 ;; multipart
                 multipart/multipart-middleware]}

   ;; swagger documentation
   ["" {:no-doc true
        :swagger {:info {:title "my-api"
                         :description "https://cljdoc.org/d/metosin/reitit"}}}

    ["/swagger.json"
     {:get (swagger/create-swagger-handler)}]

    ["/api-docs/*"
     {:get (swagger-ui/create-swagger-ui-handler
            {:url "/api/swagger.json"
             :config {:validator-url nil}})}]]

   ["/ping"
    {:get (constantly (ok {:message "pong"}))}]

   ["/todos"
    [""
     {:get {:handler (fn [_]
                       (prn (db/get-todos))
                       {:status 200
                        :body (db/get-todos)})}
      :post {:parameters {:body {:item string? :completed boolean?}}
             :handler (fn [{{{:keys [item completed]} :body} :parameters}]
                        (db/create-todo! {:item item :completed completed})
                        {:status 200
                         :headers {"content-type" "application/json"}
                         :body "\"json\""})}
      :put {:parameters {:body {:id int? :completed boolean?}}
            :handler (fn [{{{:keys [id completed]} :body} :parameters}]
                       (db/update-todo-status! {:id id :completed completed})
                       {:status 200
                        :headers {"content-type" "application/json"}
                        :body "\"json\""})}
      :delete {:parameters {:body {:id int?}}
               :handler (fn [{{{:keys [id]} :body} :parameters}]
                          (db/delete-todo! {:id id})
                          {:status 200})}}]
    ["/all"
     {:delete {:handler (fn [_]
                          {:status 200
                           :body (db/delete-completed-todos!)})}}]
    
    ["/id"
     {:get {:parameters {:path {:id int?}}
            :handler (fn [{{{:keys [id]} :path} :parameters}]
                       {:status 200
                        :body (db/get-todo {:id id})})
            }}]
    ]
   
   ["/math"
    {:swagger {:tags ["math"]}}

    ["/plus"
     {:get {:summary "plus with spec query parameters"
            :parameters {:query {:x int?, :y int?}}
            :responses {200 {:body {:total pos-int?}}}
            :handler (fn [{{{:keys [x y]} :query} :parameters}]
                       {:status 200
                        :body {:total (+ x y)}})}
      :post {:summary "plus with spec body parameters"
             :parameters {:body {:x int?, :y int?}}
             :responses {200 {:body {:total pos-int?}}}
             :handler (fn [{{{:keys [x y]} :body} :parameters}]
                        {:status 200
                         :body {:total (+ x y)}})}}]]

   ["/files"
    {:swagger {:tags ["files"]}}

    ["/upload"
     {:post {:summary "upload a file"
             :parameters {:multipart {:file multipart/temp-file-part}}
             :responses {200 {:body {:name string?, :size int?}}}
             :handler (fn [{{{:keys [file]} :multipart} :parameters}]
                        {:status 200
                         :body {:name (:filename file)
                                :size (:size file)}})}}]

    ["/download"
     {:get {:summary "downloads a file"
            :swagger {:produces ["image/png"]}
            :handler (fn [_]
                       {:status 200
                        :headers {"Content-Type" "image/png"}
                        :body (-> "public/img/warning_clojure.png"
                                  (io/resource)
                                  (io/input-stream))})}}]]])
