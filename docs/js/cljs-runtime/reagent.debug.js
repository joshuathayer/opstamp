goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__25481__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25481 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25482__i = 0, G__25482__a = new Array(arguments.length -  0);
while (G__25482__i < G__25482__a.length) {G__25482__a[G__25482__i] = arguments[G__25482__i + 0]; ++G__25482__i;}
  args = new cljs.core.IndexedSeq(G__25482__a,0,null);
} 
return G__25481__delegate.call(this,args);};
G__25481.cljs$lang$maxFixedArity = 0;
G__25481.cljs$lang$applyTo = (function (arglist__25483){
var args = cljs.core.seq(arglist__25483);
return G__25481__delegate(args);
});
G__25481.cljs$core$IFn$_invoke$arity$variadic = G__25481__delegate;
return G__25481;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__25484__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25484 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25485__i = 0, G__25485__a = new Array(arguments.length -  0);
while (G__25485__i < G__25485__a.length) {G__25485__a[G__25485__i] = arguments[G__25485__i + 0]; ++G__25485__i;}
  args = new cljs.core.IndexedSeq(G__25485__a,0,null);
} 
return G__25484__delegate.call(this,args);};
G__25484.cljs$lang$maxFixedArity = 0;
G__25484.cljs$lang$applyTo = (function (arglist__25486){
var args = cljs.core.seq(arglist__25486);
return G__25484__delegate(args);
});
G__25484.cljs$core$IFn$_invoke$arity$variadic = G__25484__delegate;
return G__25484;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
