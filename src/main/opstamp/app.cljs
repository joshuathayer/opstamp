(ns opstamp.app
  (:require [re-frame.core :as rf]
            [reagent.core :as reagent]))


;; 1. Event Dispatch
;;    make a view, dispatch an event in a click handler

(defn counter
  [id]
  (let [counter-value @(rf/subscribe [::counter id])]
    [:div {:on-click #(rf/dispatch [:inc-counter id])
           :style    {:padding    10
                      :margin     "10px 0"
                      }}
     (str "Counter " (name id) ": ")
     counter-value]))


(defn opinput
  []
  (let [val @(rf/subscribe [::input])]
    [:input {:type     "text"
             :on-change   #(rf/dispatch [:opinput (-> % .-target .-value)])
             :style    {:padding    20
                        :margin     "10px 0"
                        :width "100%"
                        :cursor     "pointer"}}]))

(defn decoded-op
  []
  (let [val @(rf/subscribe [::decoded])]
    [:div {:style    {:padding    20
                      :margin     "10px 0"
                      :background "rgba(0,0,0,0.05)"
                      :width "100%"
}}
     val]))

(defn dated-op
  []
  (let [val @(rf/subscribe [::dated])]
    [:div {:style    {:padding    20
                      :margin     "10px 0"
                      :background "rgba(0,0,0,0.05)"
                      :width "100%"
                      }}
     (if val
       (.toUTCString val))]))


;; 2. Event Handling
;;    register a handler for a given event.
;;
;;    - handlers are identified by keyword.
;;    - simple method:   `reg-event-db` is passed `db` as 1st argument.
;;      advanced method: `reg-event-fx` is passed 'co-effects' map as 1st argument of which `:db` is one key.

(defn timestamp-date [ts]
  (if (and (> ts 1000000000)
           (< ts 2000000000))
    (js/Date. (* ts 1000))))

(defn decode [optime]
  (if (re-matches #"^[0-9]+$" optime)
    (last (take 33 (iterate #(/ % 2) (js/parseInt optime))))
    nil))

(rf/reg-event-db :opinput
                 (fn [db [_ newop]]
                   (let [decoded (decode newop)
                         dated   (timestamp-date decoded)]
                     (-> db
                         (assoc-in [::op-input] newop)
                         (assoc-in [::decoded] decoded)
                         (assoc-in [::dated] dated)))))

(rf/reg-event-db :inc-counter
                 (fn [db [_ counter-id]]
                   (update-in db [::counters counter-id] inc)))


(rf/reg-event-db :initialize
                 ;; we'll call this once, at the beginning, to set up the db.
                 (constantly {::op-input ""
                              ::counters {"A" 0
                                          "B" 0
                                          "C" 0}}))

;; 3. Queries
;;    make a query for every kind of 'read' into the db.
;;
;;    - queries are identified by keyword.
;;    - queries can (optionally) take parameters.
;;    - `db` is passed as 1st arg to function.
;;      vector of [query-id & args] is passed as 2nd arg.

(rf/reg-sub ::counter
            (fn [db [_ counter-id]]
              (get-in db [::counters counter-id])))

(rf/reg-sub ::input
            (fn [db [_ counter-id]]
              (get-in db [::op-input])))

(rf/reg-sub ::decoded
            (fn [db [_ counter-id]]
              (get-in db [::decoded])))

(rf/reg-sub ::dated
            (fn [db [_ counter-id]]
              (get-in db [::dated])))

;; 4. Views
;;    Use reagent to create views.
;;
;;    - use `re-frame.core/subscribe` to read queries
;;    - use `reagent/atom` for local state (not shown here)

(defn root-view
  "Render the page"
  []
  [:div
   {:style {:max-width 300
            :margin    "50px auto"
            :font-size 16}}
   [:h3 "MongoDB oplog timestamp conversion"]
   [:h4 "64 bit timestamp"]
   (opinput)
   [:h4 "Unix timestamp"]
   (decoded-op)
   [:h4 "Datestring"]
   (dated-op)])

(defn ^:export render []
  (reagent/render [root-view]
                  (js/document.getElementById "root")))

(defn ^:export init []
  (rf/dispatch-sync [:initialize])

  (render))
