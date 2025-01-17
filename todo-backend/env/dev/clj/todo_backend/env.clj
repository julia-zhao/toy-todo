(ns todo-backend.env
  (:require
    [selmer.parser :as parser]
    [clojure.tools.logging :as log]
    [todo-backend.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[todo-backend started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[todo-backend has shut down successfully]=-"))
   :middleware wrap-dev})
