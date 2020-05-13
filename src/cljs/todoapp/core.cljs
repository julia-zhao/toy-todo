(ns todoapp.core
  (:require
   [re-frame.core :as rf]
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rdom]
   [reagent.session :as session]
   [reitit.frontend :as reitit]
   [clerk.core :as clerk]
   [accountant.core :as accountant]))
;; -------------------------
;; Routes
(def router
  (reitit/router
   [["/" :index]
    ["/items"
     ["" :items]
     ["/:item-id" :item]]
    ["/about" :about]]))

(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))

;; -------------------------
;; Page components
(defn home-page []
  (fn []
    [:span.main
     [:h1 "Welcome to TODO APP"]
     [:ul
      [:li [:a {:href (path-for :items)} "tasks for today"]]]]))

(let [num-tasks (atom 1) task-list (atom [])]
;; a form for the user to submit
  (let [task-name (atom "")]
    (defn add-todo []
      [:div
       [:div
        [:input {:type "text"
                 :placeholder "Please enter details of the task to insert."
                 :value @task-name
                 :on-change #(reset! task-name (-> % .-target .-value))}]]
       [:div
        [:input {:type "button"
                 :value "+ add a new task"
                 :on-click (fn []
                             (if (not (= @task-name ""))
                               (do
                                 (swap! task-list #(conj @task-list (assoc {} :task @task-name :finished false)))
                                 (swap! num-tasks inc)
                                 (reset! task-name ""))
                               ()))}]]]))
  (defn delete-chkbx []
    [:div
     [:input {:type "button"
              :value "delete all checked boxes"
              :on-click (fn []
                          ;(js/alert (filter #(false? (get-in @task-list [% :finished])) (range 1 @num-tasks)))
                          (js/alert (filter #(false? (get-in % [:finished])) @task-list))
                          (reset! task-list (filter #(false? (get-in % [:finished])) @task-list))
                          (reset! num-tasks (count @task-list))
                          (js/alert @num-tasks)
                          (js/alert (get-in @task-list [0 :task]))
                          ;(js/alert (map #(get % [:finished]) @task-list))
                          )}]])
  
  ;;turns false <-> true
  (defn toggle [index]
    (swap! task-list update-in [index :finished] not))

  (defn todo-item [item-id {:keys [task finished]}]
    [:ul
     [:input {:type "checkbox"
              :checked finished
              :on-change #(toggle item-id)}]
     [:a {:href (path-for :item {:item-id item-id})} task]])

  (defn items-page []
    [:div
     [:h1 "You have " (dec @num-tasks) " tasks."]
     [:ul (doall (for [[item-id task] (map-indexed list @task-list)]
                   ^{:key item-id}
                   [todo-item item-id task]))]
     [add-todo]]))


(defn item-page []
  (fn []
    (let [routing-data (session/get :route)
          item (get-in routing-data [:route-params :item-id])]
      [:span.main
       [:h1 (str "TASK " item)]
       [:p [:a {:href (path-for :items)} "Back to the list of tasks"]]])))


(defn about-page []
  (fn [] [:span.main
          [:h1 "About TODO APP"]]))

;; -------------------------
;; Translate routes -> page components

(defn page-for [route]
  (case route
    :index #'home-page
    :about #'about-page
    :items #'items-page
    :item #'item-page))

;; -------------------------
;; Page mounting component

(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div
       [:header
        [:p [:a {:href (path-for :index)} "Home"] " | "
         [:a {:href (path-for :about)} "About todoapp"]]]
       [page]
       [:footer
        [:p "todoapp was generated by the "
         [:a {:href "https://github.com/reagent-project/reagent-template"} "Reagent Template"] "."]]])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (rdom/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (clerk/initialize!)
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (let [match (reitit/match-by-path router path)
            current-page (:name (:data  match))
            route-params (:path-params match)]
        (reagent/after-render clerk/after-render!)
        (session/put! :route {:current-page (page-for current-page)
                              :route-params route-params})
        (clerk/navigate-page! path)))
    :path-exists?
    (fn [path]
      (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))
