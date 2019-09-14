goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__26761 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__26762 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__26762;

try{try{var seq__26763 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__26764 = null;
var count__26765 = (0);
var i__26766 = (0);
while(true){
if((i__26766 < count__26765)){
var vec__26773 = chunk__26764.cljs$core$IIndexed$_nth$arity$2(null,i__26766);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26773,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26773,(1),null);
var temp__5733__auto___26832 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___26832)){
var effect_fn_26833 = temp__5733__auto___26832;
(effect_fn_26833.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26833.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26833.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26834 = seq__26763;
var G__26835 = chunk__26764;
var G__26836 = count__26765;
var G__26837 = (i__26766 + (1));
seq__26763 = G__26834;
chunk__26764 = G__26835;
count__26765 = G__26836;
i__26766 = G__26837;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26763);
if(temp__5735__auto__){
var seq__26763__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26763__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__26763__$1);
var G__26838 = cljs.core.chunk_rest(seq__26763__$1);
var G__26839 = c__4550__auto__;
var G__26840 = cljs.core.count(c__4550__auto__);
var G__26841 = (0);
seq__26763 = G__26838;
chunk__26764 = G__26839;
count__26765 = G__26840;
i__26766 = G__26841;
continue;
} else {
var vec__26776 = cljs.core.first(seq__26763__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26776,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26776,(1),null);
var temp__5733__auto___26842 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___26842)){
var effect_fn_26843 = temp__5733__auto___26842;
(effect_fn_26843.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26843.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26843.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26844 = cljs.core.next(seq__26763__$1);
var G__26845 = null;
var G__26846 = (0);
var G__26847 = (0);
seq__26763 = G__26844;
chunk__26764 = G__26845;
count__26765 = G__26846;
i__26766 = G__26847;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26448__auto___26848 = re_frame.interop.now();
var duration__26449__auto___26849 = (end__26448__auto___26848 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26449__auto___26849,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26448__auto___26848);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__26761;
}} else {
var seq__26779 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__26780 = null;
var count__26781 = (0);
var i__26782 = (0);
while(true){
if((i__26782 < count__26781)){
var vec__26789 = chunk__26780.cljs$core$IIndexed$_nth$arity$2(null,i__26782);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26789,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26789,(1),null);
var temp__5733__auto___26850 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___26850)){
var effect_fn_26851 = temp__5733__auto___26850;
(effect_fn_26851.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26851.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26851.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26852 = seq__26779;
var G__26853 = chunk__26780;
var G__26854 = count__26781;
var G__26855 = (i__26782 + (1));
seq__26779 = G__26852;
chunk__26780 = G__26853;
count__26781 = G__26854;
i__26782 = G__26855;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26779);
if(temp__5735__auto__){
var seq__26779__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26779__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__26779__$1);
var G__26857 = cljs.core.chunk_rest(seq__26779__$1);
var G__26858 = c__4550__auto__;
var G__26859 = cljs.core.count(c__4550__auto__);
var G__26860 = (0);
seq__26779 = G__26857;
chunk__26780 = G__26858;
count__26781 = G__26859;
i__26782 = G__26860;
continue;
} else {
var vec__26793 = cljs.core.first(seq__26779__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26793,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26793,(1),null);
var temp__5733__auto___26862 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___26862)){
var effect_fn_26863 = temp__5733__auto___26862;
(effect_fn_26863.cljs$core$IFn$_invoke$arity$1 ? effect_fn_26863.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_26863.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__26864 = cljs.core.next(seq__26779__$1);
var G__26865 = null;
var G__26866 = (0);
var G__26867 = (0);
seq__26779 = G__26864;
chunk__26780 = G__26865;
count__26781 = G__26866;
i__26782 = G__26867;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__26796 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26797 = null;
var count__26798 = (0);
var i__26799 = (0);
while(true){
if((i__26799 < count__26798)){
var map__26804 = chunk__26797.cljs$core$IIndexed$_nth$arity$2(null,i__26799);
var map__26804__$1 = (((((!((map__26804 == null))))?(((((map__26804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26804):map__26804);
var effect = map__26804__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26804__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26804__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__26796,chunk__26797,count__26798,i__26799,map__26804,map__26804__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__26796,chunk__26797,count__26798,i__26799,map__26804,map__26804__$1,effect,ms,dispatch))
,ms);
}


var G__26870 = seq__26796;
var G__26871 = chunk__26797;
var G__26872 = count__26798;
var G__26873 = (i__26799 + (1));
seq__26796 = G__26870;
chunk__26797 = G__26871;
count__26798 = G__26872;
i__26799 = G__26873;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26796);
if(temp__5735__auto__){
var seq__26796__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26796__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__26796__$1);
var G__26874 = cljs.core.chunk_rest(seq__26796__$1);
var G__26875 = c__4550__auto__;
var G__26876 = cljs.core.count(c__4550__auto__);
var G__26877 = (0);
seq__26796 = G__26874;
chunk__26797 = G__26875;
count__26798 = G__26876;
i__26799 = G__26877;
continue;
} else {
var map__26807 = cljs.core.first(seq__26796__$1);
var map__26807__$1 = (((((!((map__26807 == null))))?(((((map__26807.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26807.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26807):map__26807);
var effect = map__26807__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26807__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26807__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__26796,chunk__26797,count__26798,i__26799,map__26807,map__26807__$1,effect,ms,dispatch,seq__26796__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__26796,chunk__26797,count__26798,i__26799,map__26807,map__26807__$1,effect,ms,dispatch,seq__26796__$1,temp__5735__auto__))
,ms);
}


var G__26878 = cljs.core.next(seq__26796__$1);
var G__26879 = null;
var G__26880 = (0);
var G__26881 = (0);
seq__26796 = G__26878;
chunk__26797 = G__26879;
count__26798 = G__26880;
i__26799 = G__26881;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__26811 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__26812 = null;
var count__26813 = (0);
var i__26814 = (0);
while(true){
if((i__26814 < count__26813)){
var event = chunk__26812.cljs$core$IIndexed$_nth$arity$2(null,i__26814);
re_frame.router.dispatch(event);


var G__26884 = seq__26811;
var G__26885 = chunk__26812;
var G__26886 = count__26813;
var G__26887 = (i__26814 + (1));
seq__26811 = G__26884;
chunk__26812 = G__26885;
count__26813 = G__26886;
i__26814 = G__26887;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26811);
if(temp__5735__auto__){
var seq__26811__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26811__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__26811__$1);
var G__26888 = cljs.core.chunk_rest(seq__26811__$1);
var G__26889 = c__4550__auto__;
var G__26890 = cljs.core.count(c__4550__auto__);
var G__26891 = (0);
seq__26811 = G__26888;
chunk__26812 = G__26889;
count__26813 = G__26890;
i__26814 = G__26891;
continue;
} else {
var event = cljs.core.first(seq__26811__$1);
re_frame.router.dispatch(event);


var G__26892 = cljs.core.next(seq__26811__$1);
var G__26893 = null;
var G__26894 = (0);
var G__26895 = (0);
seq__26811 = G__26892;
chunk__26812 = G__26893;
count__26813 = G__26894;
i__26814 = G__26895;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__26816 = cljs.core.seq(value);
var chunk__26817 = null;
var count__26818 = (0);
var i__26819 = (0);
while(true){
if((i__26819 < count__26818)){
var event = chunk__26817.cljs$core$IIndexed$_nth$arity$2(null,i__26819);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__26896 = seq__26816;
var G__26897 = chunk__26817;
var G__26898 = count__26818;
var G__26899 = (i__26819 + (1));
seq__26816 = G__26896;
chunk__26817 = G__26897;
count__26818 = G__26898;
i__26819 = G__26899;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__26816);
if(temp__5735__auto__){
var seq__26816__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26816__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__26816__$1);
var G__26900 = cljs.core.chunk_rest(seq__26816__$1);
var G__26901 = c__4550__auto__;
var G__26902 = cljs.core.count(c__4550__auto__);
var G__26903 = (0);
seq__26816 = G__26900;
chunk__26817 = G__26901;
count__26818 = G__26902;
i__26819 = G__26903;
continue;
} else {
var event = cljs.core.first(seq__26816__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__26904 = cljs.core.next(seq__26816__$1);
var G__26905 = null;
var G__26906 = (0);
var G__26907 = (0);
seq__26816 = G__26904;
chunk__26817 = G__26905;
count__26818 = G__26906;
i__26819 = G__26907;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
