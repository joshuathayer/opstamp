goog.provide('reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__25832 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__25833 = true;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__25833;

try{var G__25834 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__25835 = container;
var G__25836 = ((function (G__25834,G__25835,_STAR_always_update_STAR__orig_val__25832,_STAR_always_update_STAR__temp_val__25833){
return (function (){
var _STAR_always_update_STAR__orig_val__25837 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__25839 = false;
reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__25839;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__25837;
}});})(G__25834,G__25835,_STAR_always_update_STAR__orig_val__25832,_STAR_always_update_STAR__temp_val__25833))
;
return module$node_modules$react_dom$index.render(G__25834,G__25835,G__25836);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__25832;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__25851 = arguments.length;
switch (G__25851) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__25853_25859 = cljs.core.seq(cljs.core.vals(cljs.core.deref(reagent.dom.roots)));
var chunk__25854_25860 = null;
var count__25855_25861 = (0);
var i__25856_25862 = (0);
while(true){
if((i__25856_25862 < count__25855_25861)){
var v_25863 = chunk__25854_25860.cljs$core$IIndexed$_nth$arity$2(null,i__25856_25862);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_25863);


var G__25866 = seq__25853_25859;
var G__25867 = chunk__25854_25860;
var G__25868 = count__25855_25861;
var G__25869 = (i__25856_25862 + (1));
seq__25853_25859 = G__25866;
chunk__25854_25860 = G__25867;
count__25855_25861 = G__25868;
i__25856_25862 = G__25869;
continue;
} else {
var temp__5735__auto___25870 = cljs.core.seq(seq__25853_25859);
if(temp__5735__auto___25870){
var seq__25853_25874__$1 = temp__5735__auto___25870;
if(cljs.core.chunked_seq_QMARK_(seq__25853_25874__$1)){
var c__4550__auto___25876 = cljs.core.chunk_first(seq__25853_25874__$1);
var G__25877 = cljs.core.chunk_rest(seq__25853_25874__$1);
var G__25878 = c__4550__auto___25876;
var G__25879 = cljs.core.count(c__4550__auto___25876);
var G__25880 = (0);
seq__25853_25859 = G__25877;
chunk__25854_25860 = G__25878;
count__25855_25861 = G__25879;
i__25856_25862 = G__25880;
continue;
} else {
var v_25881 = cljs.core.first(seq__25853_25874__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_25881);


var G__25882 = cljs.core.next(seq__25853_25874__$1);
var G__25883 = null;
var G__25884 = (0);
var G__25885 = (0);
seq__25853_25859 = G__25882;
chunk__25854_25860 = G__25883;
count__25855_25861 = G__25884;
i__25856_25862 = G__25885;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=reagent.dom.js.map
