goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__33387 = coll;
var G__33388 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__33387,G__33388) : shadow.dom.lazy_native_coll_seq.call(null,G__33387,G__33388));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__33418 = arguments.length;
switch (G__33418) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__33426 = arguments.length;
switch (G__33426) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__33433 = arguments.length;
switch (G__33433) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__33441 = arguments.length;
switch (G__33441) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__33447 = arguments.length;
switch (G__33447) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__33450 = document;
var G__33451 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33450,G__33451);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__33452 = shadow.dom.dom_node(parent);
var G__33453 = shadow.dom.dom_node(el);
return goog.dom.contains(G__33452,G__33453);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__33457 = shadow.dom.dom_node(el);
var G__33458 = cls;
return goog.dom.classlist.add(G__33457,G__33458);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__33461 = shadow.dom.dom_node(el);
var G__33462 = cls;
return goog.dom.classlist.remove(G__33461,G__33462);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__33466 = arguments.length;
switch (G__33466) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__33469 = shadow.dom.dom_node(el);
var G__33470 = cls;
return goog.dom.classlist.toggle(G__33469,G__33470);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e33476){if((e33476 instanceof Object)){
var e = e33476;
return console.log("didnt support attachEvent",el,e);
} else {
throw e33476;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__33483 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__33484 = null;
var count__33485 = (0);
var i__33486 = (0);
while(true){
if((i__33486 < count__33485)){
var el = chunk__33484.cljs$core$IIndexed$_nth$arity$2(null,i__33486);
var handler_34087__$1 = ((function (seq__33483,chunk__33484,count__33485,i__33486,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33483,chunk__33484,count__33485,i__33486,el))
;
var G__33495_34088 = el;
var G__33496_34089 = cljs.core.name(ev);
var G__33497_34090 = handler_34087__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33495_34088,G__33496_34089,G__33497_34090) : shadow.dom.dom_listen.call(null,G__33495_34088,G__33496_34089,G__33497_34090));


var G__34092 = seq__33483;
var G__34093 = chunk__33484;
var G__34094 = count__33485;
var G__34095 = (i__33486 + (1));
seq__33483 = G__34092;
chunk__33484 = G__34093;
count__33485 = G__34094;
i__33486 = G__34095;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33483);
if(temp__5735__auto__){
var seq__33483__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33483__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33483__$1);
var G__34096 = cljs.core.chunk_rest(seq__33483__$1);
var G__34097 = c__4550__auto__;
var G__34098 = cljs.core.count(c__4550__auto__);
var G__34099 = (0);
seq__33483 = G__34096;
chunk__33484 = G__34097;
count__33485 = G__34098;
i__33486 = G__34099;
continue;
} else {
var el = cljs.core.first(seq__33483__$1);
var handler_34100__$1 = ((function (seq__33483,chunk__33484,count__33485,i__33486,el,seq__33483__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__33483,chunk__33484,count__33485,i__33486,el,seq__33483__$1,temp__5735__auto__))
;
var G__33499_34102 = el;
var G__33500_34103 = cljs.core.name(ev);
var G__33501_34104 = handler_34100__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33499_34102,G__33500_34103,G__33501_34104) : shadow.dom.dom_listen.call(null,G__33499_34102,G__33500_34103,G__33501_34104));


var G__34105 = cljs.core.next(seq__33483__$1);
var G__34106 = null;
var G__34107 = (0);
var G__34108 = (0);
seq__33483 = G__34105;
chunk__33484 = G__34106;
count__33485 = G__34107;
i__33486 = G__34108;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__33504 = arguments.length;
switch (G__33504) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__33506 = shadow.dom.dom_node(el);
var G__33507 = cljs.core.name(ev);
var G__33508 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33506,G__33507,G__33508) : shadow.dom.dom_listen.call(null,G__33506,G__33507,G__33508));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__33510 = shadow.dom.dom_node(el);
var G__33511 = cljs.core.name(ev);
var G__33512 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__33510,G__33511,G__33512) : shadow.dom.dom_listen_remove.call(null,G__33510,G__33511,G__33512));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__33515 = cljs.core.seq(events);
var chunk__33516 = null;
var count__33517 = (0);
var i__33518 = (0);
while(true){
if((i__33518 < count__33517)){
var vec__33531 = chunk__33516.cljs$core$IIndexed$_nth$arity$2(null,i__33518);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33531,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33531,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34115 = seq__33515;
var G__34116 = chunk__33516;
var G__34117 = count__33517;
var G__34118 = (i__33518 + (1));
seq__33515 = G__34115;
chunk__33516 = G__34116;
count__33517 = G__34117;
i__33518 = G__34118;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33515);
if(temp__5735__auto__){
var seq__33515__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33515__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33515__$1);
var G__34120 = cljs.core.chunk_rest(seq__33515__$1);
var G__34121 = c__4550__auto__;
var G__34122 = cljs.core.count(c__4550__auto__);
var G__34123 = (0);
seq__33515 = G__34120;
chunk__33516 = G__34121;
count__33517 = G__34122;
i__33518 = G__34123;
continue;
} else {
var vec__33535 = cljs.core.first(seq__33515__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33535,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33535,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__34125 = cljs.core.next(seq__33515__$1);
var G__34126 = null;
var G__34127 = (0);
var G__34128 = (0);
seq__33515 = G__34125;
chunk__33516 = G__34126;
count__33517 = G__34127;
i__33518 = G__34128;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__33541 = cljs.core.seq(styles);
var chunk__33542 = null;
var count__33543 = (0);
var i__33544 = (0);
while(true){
if((i__33544 < count__33543)){
var vec__33561 = chunk__33542.cljs$core$IIndexed$_nth$arity$2(null,i__33544);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33561,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33561,(1),null);
var G__33564_34132 = dom;
var G__33565_34133 = cljs.core.name(k);
var G__33566_34134 = (((v == null))?"":v);
goog.style.setStyle(G__33564_34132,G__33565_34133,G__33566_34134);


var G__34135 = seq__33541;
var G__34136 = chunk__33542;
var G__34137 = count__33543;
var G__34138 = (i__33544 + (1));
seq__33541 = G__34135;
chunk__33542 = G__34136;
count__33543 = G__34137;
i__33544 = G__34138;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33541);
if(temp__5735__auto__){
var seq__33541__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33541__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33541__$1);
var G__34139 = cljs.core.chunk_rest(seq__33541__$1);
var G__34140 = c__4550__auto__;
var G__34141 = cljs.core.count(c__4550__auto__);
var G__34142 = (0);
seq__33541 = G__34139;
chunk__33542 = G__34140;
count__33543 = G__34141;
i__33544 = G__34142;
continue;
} else {
var vec__33569 = cljs.core.first(seq__33541__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33569,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33569,(1),null);
var G__33572_34144 = dom;
var G__33573_34145 = cljs.core.name(k);
var G__33574_34146 = (((v == null))?"":v);
goog.style.setStyle(G__33572_34144,G__33573_34145,G__33574_34146);


var G__34147 = cljs.core.next(seq__33541__$1);
var G__34148 = null;
var G__34149 = (0);
var G__34150 = (0);
seq__33541 = G__34147;
chunk__33542 = G__34148;
count__33543 = G__34149;
i__33544 = G__34150;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__33577_34153 = key;
var G__33577_34154__$1 = (((G__33577_34153 instanceof cljs.core.Keyword))?G__33577_34153.fqn:null);
switch (G__33577_34154__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_34160 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_34160,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_34160,"aria-");
}
})())){
el.setAttribute(ks_34160,value);
} else {
(el[ks_34160] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__33586 = shadow.dom.dom_node(el);
var G__33587 = cls;
return goog.dom.classlist.contains(G__33586,G__33587);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__33591){
var map__33593 = p__33591;
var map__33593__$1 = (((((!((map__33593 == null))))?(((((map__33593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33593):map__33593);
var props = map__33593__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33593__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__33596 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33596,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33596,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33596,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__33601 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__33601,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__33601;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__33607 = arguments.length;
switch (G__33607) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__33616){
var vec__33617 = p__33616;
var seq__33618 = cljs.core.seq(vec__33617);
var first__33619 = cljs.core.first(seq__33618);
var seq__33618__$1 = cljs.core.next(seq__33618);
var nn = first__33619;
var first__33619__$1 = cljs.core.first(seq__33618__$1);
var seq__33618__$2 = cljs.core.next(seq__33618__$1);
var np = first__33619__$1;
var nc = seq__33618__$2;
var node = vec__33617;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33620 = nn;
var G__33621 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33620,G__33621) : create_fn.call(null,G__33620,G__33621));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__33622 = nn;
var G__33623 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__33622,G__33623) : create_fn.call(null,G__33622,G__33623));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__33624 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33624,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33624,(1),null);
var seq__33627_34187 = cljs.core.seq(node_children);
var chunk__33628_34188 = null;
var count__33629_34189 = (0);
var i__33630_34190 = (0);
while(true){
if((i__33630_34190 < count__33629_34189)){
var child_struct_34192 = chunk__33628_34188.cljs$core$IIndexed$_nth$arity$2(null,i__33630_34190);
var children_34193 = shadow.dom.dom_node(child_struct_34192);
if(cljs.core.seq_QMARK_(children_34193)){
var seq__33652_34194 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34193));
var chunk__33654_34195 = null;
var count__33655_34196 = (0);
var i__33656_34197 = (0);
while(true){
if((i__33656_34197 < count__33655_34196)){
var child_34199 = chunk__33654_34195.cljs$core$IIndexed$_nth$arity$2(null,i__33656_34197);
if(cljs.core.truth_(child_34199)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34199);


var G__34200 = seq__33652_34194;
var G__34201 = chunk__33654_34195;
var G__34202 = count__33655_34196;
var G__34203 = (i__33656_34197 + (1));
seq__33652_34194 = G__34200;
chunk__33654_34195 = G__34201;
count__33655_34196 = G__34202;
i__33656_34197 = G__34203;
continue;
} else {
var G__34206 = seq__33652_34194;
var G__34207 = chunk__33654_34195;
var G__34208 = count__33655_34196;
var G__34209 = (i__33656_34197 + (1));
seq__33652_34194 = G__34206;
chunk__33654_34195 = G__34207;
count__33655_34196 = G__34208;
i__33656_34197 = G__34209;
continue;
}
} else {
var temp__5735__auto___34211 = cljs.core.seq(seq__33652_34194);
if(temp__5735__auto___34211){
var seq__33652_34212__$1 = temp__5735__auto___34211;
if(cljs.core.chunked_seq_QMARK_(seq__33652_34212__$1)){
var c__4550__auto___34213 = cljs.core.chunk_first(seq__33652_34212__$1);
var G__34214 = cljs.core.chunk_rest(seq__33652_34212__$1);
var G__34215 = c__4550__auto___34213;
var G__34216 = cljs.core.count(c__4550__auto___34213);
var G__34217 = (0);
seq__33652_34194 = G__34214;
chunk__33654_34195 = G__34215;
count__33655_34196 = G__34216;
i__33656_34197 = G__34217;
continue;
} else {
var child_34218 = cljs.core.first(seq__33652_34212__$1);
if(cljs.core.truth_(child_34218)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34218);


var G__34219 = cljs.core.next(seq__33652_34212__$1);
var G__34220 = null;
var G__34221 = (0);
var G__34222 = (0);
seq__33652_34194 = G__34219;
chunk__33654_34195 = G__34220;
count__33655_34196 = G__34221;
i__33656_34197 = G__34222;
continue;
} else {
var G__34224 = cljs.core.next(seq__33652_34212__$1);
var G__34225 = null;
var G__34226 = (0);
var G__34227 = (0);
seq__33652_34194 = G__34224;
chunk__33654_34195 = G__34225;
count__33655_34196 = G__34226;
i__33656_34197 = G__34227;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34193);
}


var G__34229 = seq__33627_34187;
var G__34230 = chunk__33628_34188;
var G__34231 = count__33629_34189;
var G__34232 = (i__33630_34190 + (1));
seq__33627_34187 = G__34229;
chunk__33628_34188 = G__34230;
count__33629_34189 = G__34231;
i__33630_34190 = G__34232;
continue;
} else {
var temp__5735__auto___34233 = cljs.core.seq(seq__33627_34187);
if(temp__5735__auto___34233){
var seq__33627_34234__$1 = temp__5735__auto___34233;
if(cljs.core.chunked_seq_QMARK_(seq__33627_34234__$1)){
var c__4550__auto___34235 = cljs.core.chunk_first(seq__33627_34234__$1);
var G__34236 = cljs.core.chunk_rest(seq__33627_34234__$1);
var G__34237 = c__4550__auto___34235;
var G__34238 = cljs.core.count(c__4550__auto___34235);
var G__34239 = (0);
seq__33627_34187 = G__34236;
chunk__33628_34188 = G__34237;
count__33629_34189 = G__34238;
i__33630_34190 = G__34239;
continue;
} else {
var child_struct_34241 = cljs.core.first(seq__33627_34234__$1);
var children_34242 = shadow.dom.dom_node(child_struct_34241);
if(cljs.core.seq_QMARK_(children_34242)){
var seq__33664_34243 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_34242));
var chunk__33666_34244 = null;
var count__33667_34245 = (0);
var i__33668_34246 = (0);
while(true){
if((i__33668_34246 < count__33667_34245)){
var child_34248 = chunk__33666_34244.cljs$core$IIndexed$_nth$arity$2(null,i__33668_34246);
if(cljs.core.truth_(child_34248)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34248);


var G__34249 = seq__33664_34243;
var G__34250 = chunk__33666_34244;
var G__34251 = count__33667_34245;
var G__34252 = (i__33668_34246 + (1));
seq__33664_34243 = G__34249;
chunk__33666_34244 = G__34250;
count__33667_34245 = G__34251;
i__33668_34246 = G__34252;
continue;
} else {
var G__34254 = seq__33664_34243;
var G__34255 = chunk__33666_34244;
var G__34256 = count__33667_34245;
var G__34257 = (i__33668_34246 + (1));
seq__33664_34243 = G__34254;
chunk__33666_34244 = G__34255;
count__33667_34245 = G__34256;
i__33668_34246 = G__34257;
continue;
}
} else {
var temp__5735__auto___34258__$1 = cljs.core.seq(seq__33664_34243);
if(temp__5735__auto___34258__$1){
var seq__33664_34260__$1 = temp__5735__auto___34258__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33664_34260__$1)){
var c__4550__auto___34261 = cljs.core.chunk_first(seq__33664_34260__$1);
var G__34262 = cljs.core.chunk_rest(seq__33664_34260__$1);
var G__34263 = c__4550__auto___34261;
var G__34264 = cljs.core.count(c__4550__auto___34261);
var G__34265 = (0);
seq__33664_34243 = G__34262;
chunk__33666_34244 = G__34263;
count__33667_34245 = G__34264;
i__33668_34246 = G__34265;
continue;
} else {
var child_34266 = cljs.core.first(seq__33664_34260__$1);
if(cljs.core.truth_(child_34266)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_34266);


var G__34271 = cljs.core.next(seq__33664_34260__$1);
var G__34272 = null;
var G__34273 = (0);
var G__34274 = (0);
seq__33664_34243 = G__34271;
chunk__33666_34244 = G__34272;
count__33667_34245 = G__34273;
i__33668_34246 = G__34274;
continue;
} else {
var G__34276 = cljs.core.next(seq__33664_34260__$1);
var G__34277 = null;
var G__34278 = (0);
var G__34279 = (0);
seq__33664_34243 = G__34276;
chunk__33666_34244 = G__34277;
count__33667_34245 = G__34278;
i__33668_34246 = G__34279;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_34242);
}


var G__34281 = cljs.core.next(seq__33627_34234__$1);
var G__34282 = null;
var G__34283 = (0);
var G__34284 = (0);
seq__33627_34187 = G__34281;
chunk__33628_34188 = G__34282;
count__33629_34189 = G__34283;
i__33630_34190 = G__34284;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__33684 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__33684);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__33690 = cljs.core.seq(node);
var chunk__33691 = null;
var count__33692 = (0);
var i__33693 = (0);
while(true){
if((i__33693 < count__33692)){
var n = chunk__33691.cljs$core$IIndexed$_nth$arity$2(null,i__33693);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34292 = seq__33690;
var G__34293 = chunk__33691;
var G__34294 = count__33692;
var G__34295 = (i__33693 + (1));
seq__33690 = G__34292;
chunk__33691 = G__34293;
count__33692 = G__34294;
i__33693 = G__34295;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33690);
if(temp__5735__auto__){
var seq__33690__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33690__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33690__$1);
var G__34297 = cljs.core.chunk_rest(seq__33690__$1);
var G__34298 = c__4550__auto__;
var G__34299 = cljs.core.count(c__4550__auto__);
var G__34300 = (0);
seq__33690 = G__34297;
chunk__33691 = G__34298;
count__33692 = G__34299;
i__33693 = G__34300;
continue;
} else {
var n = cljs.core.first(seq__33690__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__34301 = cljs.core.next(seq__33690__$1);
var G__34302 = null;
var G__34303 = (0);
var G__34304 = (0);
seq__33690 = G__34301;
chunk__33691 = G__34302;
count__33692 = G__34303;
i__33693 = G__34304;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__33701 = shadow.dom.dom_node(new$);
var G__33702 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__33701,G__33702);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__33708 = arguments.length;
switch (G__33708) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__33714 = arguments.length;
switch (G__33714) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__33726 = arguments.length;
switch (G__33726) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34322 = arguments.length;
var i__4731__auto___34323 = (0);
while(true){
if((i__4731__auto___34323 < len__4730__auto___34322)){
args__4736__auto__.push((arguments[i__4731__auto___34323]));

var G__34324 = (i__4731__auto___34323 + (1));
i__4731__auto___34323 = G__34324;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__33731_34325 = cljs.core.seq(nodes);
var chunk__33732_34326 = null;
var count__33733_34327 = (0);
var i__33734_34328 = (0);
while(true){
if((i__33734_34328 < count__33733_34327)){
var node_34329 = chunk__33732_34326.cljs$core$IIndexed$_nth$arity$2(null,i__33734_34328);
fragment.appendChild(shadow.dom._to_dom(node_34329));


var G__34330 = seq__33731_34325;
var G__34331 = chunk__33732_34326;
var G__34332 = count__33733_34327;
var G__34333 = (i__33734_34328 + (1));
seq__33731_34325 = G__34330;
chunk__33732_34326 = G__34331;
count__33733_34327 = G__34332;
i__33734_34328 = G__34333;
continue;
} else {
var temp__5735__auto___34334 = cljs.core.seq(seq__33731_34325);
if(temp__5735__auto___34334){
var seq__33731_34335__$1 = temp__5735__auto___34334;
if(cljs.core.chunked_seq_QMARK_(seq__33731_34335__$1)){
var c__4550__auto___34336 = cljs.core.chunk_first(seq__33731_34335__$1);
var G__34337 = cljs.core.chunk_rest(seq__33731_34335__$1);
var G__34338 = c__4550__auto___34336;
var G__34339 = cljs.core.count(c__4550__auto___34336);
var G__34340 = (0);
seq__33731_34325 = G__34337;
chunk__33732_34326 = G__34338;
count__33733_34327 = G__34339;
i__33734_34328 = G__34340;
continue;
} else {
var node_34341 = cljs.core.first(seq__33731_34335__$1);
fragment.appendChild(shadow.dom._to_dom(node_34341));


var G__34342 = cljs.core.next(seq__33731_34335__$1);
var G__34343 = null;
var G__34344 = (0);
var G__34345 = (0);
seq__33731_34325 = G__34342;
chunk__33732_34326 = G__34343;
count__33733_34327 = G__34344;
i__33734_34328 = G__34345;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq33727){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq33727));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__33738_34349 = cljs.core.seq(scripts);
var chunk__33739_34350 = null;
var count__33740_34351 = (0);
var i__33741_34352 = (0);
while(true){
if((i__33741_34352 < count__33740_34351)){
var vec__33748_34353 = chunk__33739_34350.cljs$core$IIndexed$_nth$arity$2(null,i__33741_34352);
var script_tag_34354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33748_34353,(0),null);
var script_body_34355 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33748_34353,(1),null);
eval(script_body_34355);


var G__34356 = seq__33738_34349;
var G__34357 = chunk__33739_34350;
var G__34358 = count__33740_34351;
var G__34359 = (i__33741_34352 + (1));
seq__33738_34349 = G__34356;
chunk__33739_34350 = G__34357;
count__33740_34351 = G__34358;
i__33741_34352 = G__34359;
continue;
} else {
var temp__5735__auto___34360 = cljs.core.seq(seq__33738_34349);
if(temp__5735__auto___34360){
var seq__33738_34361__$1 = temp__5735__auto___34360;
if(cljs.core.chunked_seq_QMARK_(seq__33738_34361__$1)){
var c__4550__auto___34362 = cljs.core.chunk_first(seq__33738_34361__$1);
var G__34363 = cljs.core.chunk_rest(seq__33738_34361__$1);
var G__34364 = c__4550__auto___34362;
var G__34365 = cljs.core.count(c__4550__auto___34362);
var G__34366 = (0);
seq__33738_34349 = G__34363;
chunk__33739_34350 = G__34364;
count__33740_34351 = G__34365;
i__33741_34352 = G__34366;
continue;
} else {
var vec__33751_34367 = cljs.core.first(seq__33738_34361__$1);
var script_tag_34368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33751_34367,(0),null);
var script_body_34369 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33751_34367,(1),null);
eval(script_body_34369);


var G__34370 = cljs.core.next(seq__33738_34361__$1);
var G__34371 = null;
var G__34372 = (0);
var G__34373 = (0);
seq__33738_34349 = G__34370;
chunk__33739_34350 = G__34371;
count__33740_34351 = G__34372;
i__33741_34352 = G__34373;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__33754){
var vec__33755 = p__33754;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33755,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33755,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__33759 = shadow.dom.dom_node(el);
var G__33760 = cls;
return goog.dom.getAncestorByClass(G__33759,G__33760);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__33765 = arguments.length;
switch (G__33765) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__33768 = shadow.dom.dom_node(el);
var G__33769 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__33768,G__33769);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__33772 = shadow.dom.dom_node(el);
var G__33773 = cljs.core.name(tag);
var G__33774 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__33772,G__33773,G__33774);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__33779 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__33779);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__33780 = shadow.dom.dom_node(dom);
var G__33781 = value;
return goog.dom.forms.setValue(G__33780,G__33781);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__33791 = cljs.core.seq(style_keys);
var chunk__33792 = null;
var count__33793 = (0);
var i__33794 = (0);
while(true){
if((i__33794 < count__33793)){
var it = chunk__33792.cljs$core$IIndexed$_nth$arity$2(null,i__33794);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34378 = seq__33791;
var G__34379 = chunk__33792;
var G__34380 = count__33793;
var G__34381 = (i__33794 + (1));
seq__33791 = G__34378;
chunk__33792 = G__34379;
count__33793 = G__34380;
i__33794 = G__34381;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__33791);
if(temp__5735__auto__){
var seq__33791__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33791__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33791__$1);
var G__34382 = cljs.core.chunk_rest(seq__33791__$1);
var G__34383 = c__4550__auto__;
var G__34384 = cljs.core.count(c__4550__auto__);
var G__34385 = (0);
seq__33791 = G__34382;
chunk__33792 = G__34383;
count__33793 = G__34384;
i__33794 = G__34385;
continue;
} else {
var it = cljs.core.first(seq__33791__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__34386 = cljs.core.next(seq__33791__$1);
var G__34387 = null;
var G__34388 = (0);
var G__34389 = (0);
seq__33791 = G__34386;
chunk__33792 = G__34387;
count__33793 = G__34388;
i__33794 = G__34389;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33804,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33817 = k33804;
var G__33817__$1 = (((G__33817 instanceof cljs.core.Keyword))?G__33817.fqn:null);
switch (G__33817__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33804,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33821){
var vec__33823 = p__33821;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33823,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33823,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33803){
var self__ = this;
var G__33803__$1 = this;
return (new cljs.core.RecordIter((0),G__33803__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33833 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33833(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33805,other33806){
var self__ = this;
var this33805__$1 = this;
return (((!((other33806 == null)))) && ((this33805__$1.constructor === other33806.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33805__$1.x,other33806.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33805__$1.y,other33806.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33805__$1.__extmap,other33806.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33803){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33834 = cljs.core.keyword_identical_QMARK_;
var expr__33835 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33837 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__33838 = expr__33835;
return (pred__33834.cljs$core$IFn$_invoke$arity$2 ? pred__33834.cljs$core$IFn$_invoke$arity$2(G__33837,G__33838) : pred__33834.call(null,G__33837,G__33838));
})())){
return (new shadow.dom.Coordinate(G__33803,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33839 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__33840 = expr__33835;
return (pred__33834.cljs$core$IFn$_invoke$arity$2 ? pred__33834.cljs$core$IFn$_invoke$arity$2(G__33839,G__33840) : pred__33834.call(null,G__33839,G__33840));
})())){
return (new shadow.dom.Coordinate(self__.x,G__33803,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33803),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33803){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__33803,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__33810){
var extmap__4424__auto__ = (function (){var G__33843 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33810,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__33810)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33843);
} else {
return G__33843;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__33810),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__33810),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__33844 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__33844);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__33845 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__33845);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__33846 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__33846);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k33848,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__33856 = k33848;
var G__33856__$1 = (((G__33856 instanceof cljs.core.Keyword))?G__33856.fqn:null);
switch (G__33856__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k33848,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__33858){
var vec__33860 = p__33858;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33860,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33860,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33847){
var self__ = this;
var G__33847__$1 = this;
return (new cljs.core.RecordIter((0),G__33847__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__33874 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__33874(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this33849,other33850){
var self__ = this;
var this33849__$1 = this;
return (((!((other33850 == null)))) && ((this33849__$1.constructor === other33850.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33849__$1.w,other33850.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33849__$1.h,other33850.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this33849__$1.__extmap,other33850.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__33847){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__33882 = cljs.core.keyword_identical_QMARK_;
var expr__33883 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__33885 = new cljs.core.Keyword(null,"w","w",354169001);
var G__33886 = expr__33883;
return (pred__33882.cljs$core$IFn$_invoke$arity$2 ? pred__33882.cljs$core$IFn$_invoke$arity$2(G__33885,G__33886) : pred__33882.call(null,G__33885,G__33886));
})())){
return (new shadow.dom.Size(G__33847,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__33887 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__33888 = expr__33883;
return (pred__33882.cljs$core$IFn$_invoke$arity$2 ? pred__33882.cljs$core$IFn$_invoke$arity$2(G__33887,G__33888) : pred__33882.call(null,G__33887,G__33888));
})())){
return (new shadow.dom.Size(self__.w,G__33847,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__33847),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__33847){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__33847,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__33851){
var extmap__4424__auto__ = (function (){var G__33894 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__33851,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__33851)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__33894);
} else {
return G__33894;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__33851),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__33851),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__33898 = shadow.dom.dom_node(el);
return goog.style.getSize(G__33898);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__34419 = (i + (1));
var G__34420 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34419;
ret = G__34420;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__33907){
var vec__33908 = p__33907;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33908,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33908,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__33916 = arguments.length;
switch (G__33916) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33924_34424 = new_node;
var G__33925_34425 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33924_34424,G__33925_34425);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33927_34426 = new_node;
var G__33928_34427 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33927_34426,G__33928_34427);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34428 = ps;
var G__34429 = (i + (1));
el__$1 = G__34428;
i = G__34429;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33933 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33933);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33936 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33936);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33939 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33939);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33941 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33941,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33941,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33941,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33945_34436 = cljs.core.seq(props);
var chunk__33946_34437 = null;
var count__33947_34438 = (0);
var i__33948_34439 = (0);
while(true){
if((i__33948_34439 < count__33947_34438)){
var vec__33960_34440 = chunk__33946_34437.cljs$core$IIndexed$_nth$arity$2(null,i__33948_34439);
var k_34441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33960_34440,(0),null);
var v_34442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33960_34440,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34441);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34441),v_34442);


var G__34444 = seq__33945_34436;
var G__34445 = chunk__33946_34437;
var G__34446 = count__33947_34438;
var G__34447 = (i__33948_34439 + (1));
seq__33945_34436 = G__34444;
chunk__33946_34437 = G__34445;
count__33947_34438 = G__34446;
i__33948_34439 = G__34447;
continue;
} else {
var temp__5735__auto___34448 = cljs.core.seq(seq__33945_34436);
if(temp__5735__auto___34448){
var seq__33945_34449__$1 = temp__5735__auto___34448;
if(cljs.core.chunked_seq_QMARK_(seq__33945_34449__$1)){
var c__4550__auto___34450 = cljs.core.chunk_first(seq__33945_34449__$1);
var G__34452 = cljs.core.chunk_rest(seq__33945_34449__$1);
var G__34453 = c__4550__auto___34450;
var G__34454 = cljs.core.count(c__4550__auto___34450);
var G__34455 = (0);
seq__33945_34436 = G__34452;
chunk__33946_34437 = G__34453;
count__33947_34438 = G__34454;
i__33948_34439 = G__34455;
continue;
} else {
var vec__33964_34459 = cljs.core.first(seq__33945_34449__$1);
var k_34460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33964_34459,(0),null);
var v_34461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33964_34459,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34460);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34460),v_34461);


var G__34462 = cljs.core.next(seq__33945_34449__$1);
var G__34463 = null;
var G__34464 = (0);
var G__34465 = (0);
seq__33945_34436 = G__34462;
chunk__33946_34437 = G__34463;
count__33947_34438 = G__34464;
i__33948_34439 = G__34465;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33970 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33970,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33970,(1),null);
var seq__33973_34466 = cljs.core.seq(node_children);
var chunk__33975_34467 = null;
var count__33976_34468 = (0);
var i__33977_34469 = (0);
while(true){
if((i__33977_34469 < count__33976_34468)){
var child_struct_34470 = chunk__33975_34467.cljs$core$IIndexed$_nth$arity$2(null,i__33977_34469);
if((!((child_struct_34470 == null)))){
if(typeof child_struct_34470 === 'string'){
var text_34471 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34471),child_struct_34470].join(''));
} else {
var children_34472 = shadow.dom.svg_node(child_struct_34470);
if(cljs.core.seq_QMARK_(children_34472)){
var seq__34005_34473 = cljs.core.seq(children_34472);
var chunk__34007_34474 = null;
var count__34008_34475 = (0);
var i__34009_34476 = (0);
while(true){
if((i__34009_34476 < count__34008_34475)){
var child_34477 = chunk__34007_34474.cljs$core$IIndexed$_nth$arity$2(null,i__34009_34476);
if(cljs.core.truth_(child_34477)){
node.appendChild(child_34477);


var G__34478 = seq__34005_34473;
var G__34479 = chunk__34007_34474;
var G__34480 = count__34008_34475;
var G__34481 = (i__34009_34476 + (1));
seq__34005_34473 = G__34478;
chunk__34007_34474 = G__34479;
count__34008_34475 = G__34480;
i__34009_34476 = G__34481;
continue;
} else {
var G__34482 = seq__34005_34473;
var G__34483 = chunk__34007_34474;
var G__34484 = count__34008_34475;
var G__34485 = (i__34009_34476 + (1));
seq__34005_34473 = G__34482;
chunk__34007_34474 = G__34483;
count__34008_34475 = G__34484;
i__34009_34476 = G__34485;
continue;
}
} else {
var temp__5735__auto___34486 = cljs.core.seq(seq__34005_34473);
if(temp__5735__auto___34486){
var seq__34005_34488__$1 = temp__5735__auto___34486;
if(cljs.core.chunked_seq_QMARK_(seq__34005_34488__$1)){
var c__4550__auto___34489 = cljs.core.chunk_first(seq__34005_34488__$1);
var G__34490 = cljs.core.chunk_rest(seq__34005_34488__$1);
var G__34491 = c__4550__auto___34489;
var G__34492 = cljs.core.count(c__4550__auto___34489);
var G__34493 = (0);
seq__34005_34473 = G__34490;
chunk__34007_34474 = G__34491;
count__34008_34475 = G__34492;
i__34009_34476 = G__34493;
continue;
} else {
var child_34494 = cljs.core.first(seq__34005_34488__$1);
if(cljs.core.truth_(child_34494)){
node.appendChild(child_34494);


var G__34495 = cljs.core.next(seq__34005_34488__$1);
var G__34496 = null;
var G__34497 = (0);
var G__34498 = (0);
seq__34005_34473 = G__34495;
chunk__34007_34474 = G__34496;
count__34008_34475 = G__34497;
i__34009_34476 = G__34498;
continue;
} else {
var G__34499 = cljs.core.next(seq__34005_34488__$1);
var G__34500 = null;
var G__34501 = (0);
var G__34502 = (0);
seq__34005_34473 = G__34499;
chunk__34007_34474 = G__34500;
count__34008_34475 = G__34501;
i__34009_34476 = G__34502;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34472);
}
}


var G__34503 = seq__33973_34466;
var G__34504 = chunk__33975_34467;
var G__34505 = count__33976_34468;
var G__34506 = (i__33977_34469 + (1));
seq__33973_34466 = G__34503;
chunk__33975_34467 = G__34504;
count__33976_34468 = G__34505;
i__33977_34469 = G__34506;
continue;
} else {
var G__34507 = seq__33973_34466;
var G__34508 = chunk__33975_34467;
var G__34509 = count__33976_34468;
var G__34510 = (i__33977_34469 + (1));
seq__33973_34466 = G__34507;
chunk__33975_34467 = G__34508;
count__33976_34468 = G__34509;
i__33977_34469 = G__34510;
continue;
}
} else {
var temp__5735__auto___34511 = cljs.core.seq(seq__33973_34466);
if(temp__5735__auto___34511){
var seq__33973_34512__$1 = temp__5735__auto___34511;
if(cljs.core.chunked_seq_QMARK_(seq__33973_34512__$1)){
var c__4550__auto___34513 = cljs.core.chunk_first(seq__33973_34512__$1);
var G__34514 = cljs.core.chunk_rest(seq__33973_34512__$1);
var G__34515 = c__4550__auto___34513;
var G__34516 = cljs.core.count(c__4550__auto___34513);
var G__34517 = (0);
seq__33973_34466 = G__34514;
chunk__33975_34467 = G__34515;
count__33976_34468 = G__34516;
i__33977_34469 = G__34517;
continue;
} else {
var child_struct_34518 = cljs.core.first(seq__33973_34512__$1);
if((!((child_struct_34518 == null)))){
if(typeof child_struct_34518 === 'string'){
var text_34519 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34519),child_struct_34518].join(''));
} else {
var children_34520 = shadow.dom.svg_node(child_struct_34518);
if(cljs.core.seq_QMARK_(children_34520)){
var seq__34011_34521 = cljs.core.seq(children_34520);
var chunk__34013_34522 = null;
var count__34014_34523 = (0);
var i__34015_34524 = (0);
while(true){
if((i__34015_34524 < count__34014_34523)){
var child_34525 = chunk__34013_34522.cljs$core$IIndexed$_nth$arity$2(null,i__34015_34524);
if(cljs.core.truth_(child_34525)){
node.appendChild(child_34525);


var G__34529 = seq__34011_34521;
var G__34530 = chunk__34013_34522;
var G__34531 = count__34014_34523;
var G__34532 = (i__34015_34524 + (1));
seq__34011_34521 = G__34529;
chunk__34013_34522 = G__34530;
count__34014_34523 = G__34531;
i__34015_34524 = G__34532;
continue;
} else {
var G__34535 = seq__34011_34521;
var G__34536 = chunk__34013_34522;
var G__34537 = count__34014_34523;
var G__34538 = (i__34015_34524 + (1));
seq__34011_34521 = G__34535;
chunk__34013_34522 = G__34536;
count__34014_34523 = G__34537;
i__34015_34524 = G__34538;
continue;
}
} else {
var temp__5735__auto___34541__$1 = cljs.core.seq(seq__34011_34521);
if(temp__5735__auto___34541__$1){
var seq__34011_34542__$1 = temp__5735__auto___34541__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34011_34542__$1)){
var c__4550__auto___34543 = cljs.core.chunk_first(seq__34011_34542__$1);
var G__34544 = cljs.core.chunk_rest(seq__34011_34542__$1);
var G__34545 = c__4550__auto___34543;
var G__34546 = cljs.core.count(c__4550__auto___34543);
var G__34547 = (0);
seq__34011_34521 = G__34544;
chunk__34013_34522 = G__34545;
count__34014_34523 = G__34546;
i__34015_34524 = G__34547;
continue;
} else {
var child_34548 = cljs.core.first(seq__34011_34542__$1);
if(cljs.core.truth_(child_34548)){
node.appendChild(child_34548);


var G__34549 = cljs.core.next(seq__34011_34542__$1);
var G__34550 = null;
var G__34551 = (0);
var G__34552 = (0);
seq__34011_34521 = G__34549;
chunk__34013_34522 = G__34550;
count__34014_34523 = G__34551;
i__34015_34524 = G__34552;
continue;
} else {
var G__34553 = cljs.core.next(seq__34011_34542__$1);
var G__34554 = null;
var G__34555 = (0);
var G__34556 = (0);
seq__34011_34521 = G__34553;
chunk__34013_34522 = G__34554;
count__34014_34523 = G__34555;
i__34015_34524 = G__34556;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34520);
}
}


var G__34557 = cljs.core.next(seq__33973_34512__$1);
var G__34558 = null;
var G__34559 = (0);
var G__34560 = (0);
seq__33973_34466 = G__34557;
chunk__33975_34467 = G__34558;
count__33976_34468 = G__34559;
i__33977_34469 = G__34560;
continue;
} else {
var G__34561 = cljs.core.next(seq__33973_34512__$1);
var G__34562 = null;
var G__34563 = (0);
var G__34564 = (0);
seq__33973_34466 = G__34561;
chunk__33975_34467 = G__34562;
count__33976_34468 = G__34563;
i__33977_34469 = G__34564;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__34017_34565 = shadow.dom._to_svg;
var G__34018_34566 = "string";
var G__34019_34567 = ((function (G__34017_34565,G__34018_34566){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__34017_34565,G__34018_34566))
;
goog.object.set(G__34017_34565,G__34018_34566,G__34019_34567);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__34020_34568 = shadow.dom._to_svg;
var G__34021_34569 = "null";
var G__34022_34570 = ((function (G__34020_34568,G__34021_34569){
return (function (_){
return null;
});})(G__34020_34568,G__34021_34569))
;
goog.object.set(G__34020_34568,G__34021_34569,G__34022_34570);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34571 = arguments.length;
var i__4731__auto___34572 = (0);
while(true){
if((i__4731__auto___34572 < len__4730__auto___34571)){
args__4736__auto__.push((arguments[i__4731__auto___34572]));

var G__34573 = (i__4731__auto___34572 + (1));
i__4731__auto___34572 = G__34573;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq34024){
var G__34025 = cljs.core.first(seq34024);
var seq34024__$1 = cljs.core.next(seq34024);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34025,seq34024__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__34034 = arguments.length;
switch (G__34034) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__34039_34577 = shadow.dom.dom_node(el);
var G__34040_34578 = cljs.core.name(event);
var G__34041_34579 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__34039_34577,G__34040_34578,G__34041_34579) : shadow.dom.dom_listen.call(null,G__34039_34577,G__34040_34578,G__34041_34579));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__30594__auto___34580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto___34580,buf,chan,event_fn){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto___34580,buf,chan,event_fn){
return (function (state_34046){
var state_val_34047 = (state_34046[(1)]);
if((state_val_34047 === (1))){
var state_34046__$1 = state_34046;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34046__$1,(2),once_or_cleanup);
} else {
if((state_val_34047 === (2))){
var inst_34043 = (state_34046[(2)]);
var inst_34044 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_34046__$1 = (function (){var statearr_34050 = state_34046;
(statearr_34050[(7)] = inst_34043);

return statearr_34050;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34046__$1,inst_34044);
} else {
return null;
}
}
});})(c__30594__auto___34580,buf,chan,event_fn))
;
return ((function (switch__30275__auto__,c__30594__auto___34580,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__30276__auto__ = null;
var shadow$dom$state_machine__30276__auto____0 = (function (){
var statearr_34052 = [null,null,null,null,null,null,null,null];
(statearr_34052[(0)] = shadow$dom$state_machine__30276__auto__);

(statearr_34052[(1)] = (1));

return statearr_34052;
});
var shadow$dom$state_machine__30276__auto____1 = (function (state_34046){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_34046);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e34053){if((e34053 instanceof Object)){
var ex__30279__auto__ = e34053;
var statearr_34054_34581 = state_34046;
(statearr_34054_34581[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34053;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34582 = state_34046;
state_34046 = G__34582;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
shadow$dom$state_machine__30276__auto__ = function(state_34046){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30276__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30276__auto____1.call(this,state_34046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30276__auto____0;
shadow$dom$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30276__auto____1;
return shadow$dom$state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto___34580,buf,chan,event_fn))
})();
var state__30596__auto__ = (function (){var statearr_34056 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_34056[(6)] = c__30594__auto___34580);

return statearr_34056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto___34580,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
