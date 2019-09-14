goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35514 = arguments.length;
var i__4731__auto___35515 = (0);
while(true){
if((i__4731__auto___35515 < len__4730__auto___35514)){
args__4736__auto__.push((arguments[i__4731__auto___35515]));

var G__35516 = (i__4731__auto___35515 + (1));
i__4731__auto___35515 = G__35516;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35348){
var G__35349 = cljs.core.first(seq35348);
var seq35348__$1 = cljs.core.next(seq35348);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35349,seq35348__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35359){
var map__35360 = p__35359;
var map__35360__$1 = (((((!((map__35360 == null))))?(((((map__35360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35360):map__35360);
var src = map__35360__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35360__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35360__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35364 = cljs.core.seq(sources);
var chunk__35365 = null;
var count__35366 = (0);
var i__35367 = (0);
while(true){
if((i__35367 < count__35366)){
var map__35374 = chunk__35365.cljs$core$IIndexed$_nth$arity$2(null,i__35367);
var map__35374__$1 = (((((!((map__35374 == null))))?(((((map__35374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35374):map__35374);
var src = map__35374__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35374__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35374__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35374__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35374__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35378){var e_35517 = e35378;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35517);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35517.message)].join('')));
}

var G__35518 = seq__35364;
var G__35519 = chunk__35365;
var G__35520 = count__35366;
var G__35521 = (i__35367 + (1));
seq__35364 = G__35518;
chunk__35365 = G__35519;
count__35366 = G__35520;
i__35367 = G__35521;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35364);
if(temp__5735__auto__){
var seq__35364__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35364__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35364__$1);
var G__35522 = cljs.core.chunk_rest(seq__35364__$1);
var G__35523 = c__4550__auto__;
var G__35524 = cljs.core.count(c__4550__auto__);
var G__35525 = (0);
seq__35364 = G__35522;
chunk__35365 = G__35523;
count__35366 = G__35524;
i__35367 = G__35525;
continue;
} else {
var map__35379 = cljs.core.first(seq__35364__$1);
var map__35379__$1 = (((((!((map__35379 == null))))?(((((map__35379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35379):map__35379);
var src = map__35379__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35379__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35379__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35379__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35379__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35381){var e_35526 = e35381;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_35526);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_35526.message)].join('')));
}

var G__35527 = cljs.core.next(seq__35364__$1);
var G__35528 = null;
var G__35529 = (0);
var G__35530 = (0);
seq__35364 = G__35527;
chunk__35365 = G__35528;
count__35366 = G__35529;
i__35367 = G__35530;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35384 = cljs.core.seq(js_requires);
var chunk__35385 = null;
var count__35386 = (0);
var i__35387 = (0);
while(true){
if((i__35387 < count__35386)){
var js_ns = chunk__35385.cljs$core$IIndexed$_nth$arity$2(null,i__35387);
var require_str_35531 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35531);


var G__35532 = seq__35384;
var G__35533 = chunk__35385;
var G__35534 = count__35386;
var G__35535 = (i__35387 + (1));
seq__35384 = G__35532;
chunk__35385 = G__35533;
count__35386 = G__35534;
i__35387 = G__35535;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35384);
if(temp__5735__auto__){
var seq__35384__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35384__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35384__$1);
var G__35536 = cljs.core.chunk_rest(seq__35384__$1);
var G__35537 = c__4550__auto__;
var G__35538 = cljs.core.count(c__4550__auto__);
var G__35539 = (0);
seq__35384 = G__35536;
chunk__35385 = G__35537;
count__35386 = G__35538;
i__35387 = G__35539;
continue;
} else {
var js_ns = cljs.core.first(seq__35384__$1);
var require_str_35540 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_35540);


var G__35541 = cljs.core.next(seq__35384__$1);
var G__35542 = null;
var G__35543 = (0);
var G__35544 = (0);
seq__35384 = G__35541;
chunk__35385 = G__35542;
count__35386 = G__35543;
i__35387 = G__35544;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35388 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35388) : callback.call(null,G__35388));
} else {
var G__35389 = shadow.cljs.devtools.client.env.files_url();
var G__35390 = ((function (G__35389){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__35389))
;
var G__35391 = "POST";
var G__35392 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35393 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35389,G__35390,G__35391,G__35392,G__35393);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35395){
var map__35396 = p__35395;
var map__35396__$1 = (((((!((map__35396 == null))))?(((((map__35396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35396.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35396):map__35396);
var msg = map__35396__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35396__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35396__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35398 = info;
var map__35398__$1 = (((((!((map__35398 == null))))?(((((map__35398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35398):map__35398);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35398__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35398__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__35398,map__35398__$1,sources,compiled,map__35396,map__35396__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35400(s__35401){
return (new cljs.core.LazySeq(null,((function (map__35398,map__35398__$1,sources,compiled,map__35396,map__35396__$1,msg,info,reload_info){
return (function (){
var s__35401__$1 = s__35401;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35401__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35406 = cljs.core.first(xs__6292__auto__);
var map__35406__$1 = (((((!((map__35406 == null))))?(((((map__35406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35406):map__35406);
var src = map__35406__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35406__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35406__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__35401__$1,map__35406,map__35406__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35398,map__35398__$1,sources,compiled,map__35396,map__35396__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35400_$_iter__35402(s__35403){
return (new cljs.core.LazySeq(null,((function (s__35401__$1,map__35406,map__35406__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35398,map__35398__$1,sources,compiled,map__35396,map__35396__$1,msg,info,reload_info){
return (function (){
var s__35403__$1 = s__35403;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35403__$1);
if(temp__5735__auto____$1){
var s__35403__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35403__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35403__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35405 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35404 = (0);
while(true){
if((i__35404 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35404);
cljs.core.chunk_append(b__35405,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__35545 = (i__35404 + (1));
i__35404 = G__35545;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35405),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35400_$_iter__35402(cljs.core.chunk_rest(s__35403__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35405),null);
}
} else {
var warning = cljs.core.first(s__35403__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35400_$_iter__35402(cljs.core.rest(s__35403__$2)));
}
} else {
return null;
}
break;
}
});})(s__35401__$1,map__35406,map__35406__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35398,map__35398__$1,sources,compiled,map__35396,map__35396__$1,msg,info,reload_info))
,null,null));
});})(s__35401__$1,map__35406,map__35406__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35398,map__35398__$1,sources,compiled,map__35396,map__35396__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35400(cljs.core.rest(s__35401__$1)));
} else {
var G__35546 = cljs.core.rest(s__35401__$1);
s__35401__$1 = G__35546;
continue;
}
} else {
var G__35547 = cljs.core.rest(s__35401__$1);
s__35401__$1 = G__35547;
continue;
}
} else {
return null;
}
break;
}
});})(map__35398,map__35398__$1,sources,compiled,map__35396,map__35396__$1,msg,info,reload_info))
,null,null));
});})(map__35398,map__35398__$1,sources,compiled,map__35396,map__35396__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__35408_35548 = cljs.core.seq(warnings);
var chunk__35409_35549 = null;
var count__35410_35550 = (0);
var i__35411_35551 = (0);
while(true){
if((i__35411_35551 < count__35410_35550)){
var map__35418_35552 = chunk__35409_35549.cljs$core$IIndexed$_nth$arity$2(null,i__35411_35551);
var map__35418_35553__$1 = (((((!((map__35418_35552 == null))))?(((((map__35418_35552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35418_35552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35418_35552):map__35418_35552);
var w_35554 = map__35418_35553__$1;
var msg_35555__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35418_35553__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35418_35553__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35418_35553__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35418_35553__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35558)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35556),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35557),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35555__$1)].join(''));


var G__35559 = seq__35408_35548;
var G__35560 = chunk__35409_35549;
var G__35561 = count__35410_35550;
var G__35562 = (i__35411_35551 + (1));
seq__35408_35548 = G__35559;
chunk__35409_35549 = G__35560;
count__35410_35550 = G__35561;
i__35411_35551 = G__35562;
continue;
} else {
var temp__5735__auto___35563 = cljs.core.seq(seq__35408_35548);
if(temp__5735__auto___35563){
var seq__35408_35564__$1 = temp__5735__auto___35563;
if(cljs.core.chunked_seq_QMARK_(seq__35408_35564__$1)){
var c__4550__auto___35565 = cljs.core.chunk_first(seq__35408_35564__$1);
var G__35566 = cljs.core.chunk_rest(seq__35408_35564__$1);
var G__35567 = c__4550__auto___35565;
var G__35568 = cljs.core.count(c__4550__auto___35565);
var G__35569 = (0);
seq__35408_35548 = G__35566;
chunk__35409_35549 = G__35567;
count__35410_35550 = G__35568;
i__35411_35551 = G__35569;
continue;
} else {
var map__35420_35570 = cljs.core.first(seq__35408_35564__$1);
var map__35420_35571__$1 = (((((!((map__35420_35570 == null))))?(((((map__35420_35570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35420_35570.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35420_35570):map__35420_35570);
var w_35572 = map__35420_35571__$1;
var msg_35573__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35420_35571__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_35574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35420_35571__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_35575 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35420_35571__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_35576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35420_35571__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_35576)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_35574),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_35575),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_35573__$1)].join(''));


var G__35577 = cljs.core.next(seq__35408_35564__$1);
var G__35578 = null;
var G__35579 = (0);
var G__35580 = (0);
seq__35408_35548 = G__35577;
chunk__35409_35549 = G__35578;
count__35410_35550 = G__35579;
i__35411_35551 = G__35580;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35398,map__35398__$1,sources,compiled,warnings,map__35396,map__35396__$1,msg,info,reload_info){
return (function (p__35422){
var map__35423 = p__35422;
var map__35423__$1 = (((((!((map__35423 == null))))?(((((map__35423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35423):map__35423);
var src = map__35423__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35423__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35423__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__35398,map__35398__$1,sources,compiled,warnings,map__35396,map__35396__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35398,map__35398__$1,sources,compiled,warnings,map__35396,map__35396__$1,msg,info,reload_info){
return (function (p__35425){
var map__35426 = p__35425;
var map__35426__$1 = (((((!((map__35426 == null))))?(((((map__35426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35426):map__35426);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35426__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__35398,map__35398__$1,sources,compiled,warnings,map__35396,map__35396__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__35398,map__35398__$1,sources,compiled,warnings,map__35396,map__35396__$1,msg,info,reload_info){
return (function (p__35428){
var map__35429 = p__35428;
var map__35429__$1 = (((((!((map__35429 == null))))?(((((map__35429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35429):map__35429);
var rc = map__35429__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35429__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__35398,map__35398__$1,sources,compiled,warnings,map__35396,map__35396__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__35398,map__35398__$1,sources,compiled,warnings,map__35396,map__35396__$1,msg,info,reload_info){
return (function (p1__35394_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35394_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__35398,map__35398__$1,sources,compiled,warnings,map__35396,map__35396__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35431){
var map__35432 = p__35431;
var map__35432__$1 = (((((!((map__35432 == null))))?(((((map__35432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35432):map__35432);
var msg = map__35432__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35432__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35434 = cljs.core.seq(updates);
var chunk__35436 = null;
var count__35437 = (0);
var i__35438 = (0);
while(true){
if((i__35438 < count__35437)){
var path = chunk__35436.cljs$core$IIndexed$_nth$arity$2(null,i__35438);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35464_35581 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35467_35582 = null;
var count__35468_35583 = (0);
var i__35469_35584 = (0);
while(true){
if((i__35469_35584 < count__35468_35583)){
var node_35585 = chunk__35467_35582.cljs$core$IIndexed$_nth$arity$2(null,i__35469_35584);
var path_match_35586 = shadow.cljs.devtools.client.browser.match_paths(node_35585.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35586)){
var new_link_35587 = (function (){var G__35474 = node_35585.cloneNode(true);
G__35474.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35586),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35474;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35586], 0));

goog.dom.insertSiblingAfter(new_link_35587,node_35585);

goog.dom.removeNode(node_35585);


var G__35588 = seq__35464_35581;
var G__35589 = chunk__35467_35582;
var G__35590 = count__35468_35583;
var G__35591 = (i__35469_35584 + (1));
seq__35464_35581 = G__35588;
chunk__35467_35582 = G__35589;
count__35468_35583 = G__35590;
i__35469_35584 = G__35591;
continue;
} else {
var G__35592 = seq__35464_35581;
var G__35593 = chunk__35467_35582;
var G__35594 = count__35468_35583;
var G__35595 = (i__35469_35584 + (1));
seq__35464_35581 = G__35592;
chunk__35467_35582 = G__35593;
count__35468_35583 = G__35594;
i__35469_35584 = G__35595;
continue;
}
} else {
var temp__5735__auto___35596 = cljs.core.seq(seq__35464_35581);
if(temp__5735__auto___35596){
var seq__35464_35597__$1 = temp__5735__auto___35596;
if(cljs.core.chunked_seq_QMARK_(seq__35464_35597__$1)){
var c__4550__auto___35598 = cljs.core.chunk_first(seq__35464_35597__$1);
var G__35599 = cljs.core.chunk_rest(seq__35464_35597__$1);
var G__35600 = c__4550__auto___35598;
var G__35601 = cljs.core.count(c__4550__auto___35598);
var G__35602 = (0);
seq__35464_35581 = G__35599;
chunk__35467_35582 = G__35600;
count__35468_35583 = G__35601;
i__35469_35584 = G__35602;
continue;
} else {
var node_35603 = cljs.core.first(seq__35464_35597__$1);
var path_match_35604 = shadow.cljs.devtools.client.browser.match_paths(node_35603.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35604)){
var new_link_35605 = (function (){var G__35475 = node_35603.cloneNode(true);
G__35475.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35604),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35475;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35604], 0));

goog.dom.insertSiblingAfter(new_link_35605,node_35603);

goog.dom.removeNode(node_35603);


var G__35606 = cljs.core.next(seq__35464_35597__$1);
var G__35607 = null;
var G__35608 = (0);
var G__35609 = (0);
seq__35464_35581 = G__35606;
chunk__35467_35582 = G__35607;
count__35468_35583 = G__35608;
i__35469_35584 = G__35609;
continue;
} else {
var G__35610 = cljs.core.next(seq__35464_35597__$1);
var G__35611 = null;
var G__35612 = (0);
var G__35613 = (0);
seq__35464_35581 = G__35610;
chunk__35467_35582 = G__35611;
count__35468_35583 = G__35612;
i__35469_35584 = G__35613;
continue;
}
}
} else {
}
}
break;
}


var G__35614 = seq__35434;
var G__35615 = chunk__35436;
var G__35616 = count__35437;
var G__35617 = (i__35438 + (1));
seq__35434 = G__35614;
chunk__35436 = G__35615;
count__35437 = G__35616;
i__35438 = G__35617;
continue;
} else {
var G__35618 = seq__35434;
var G__35619 = chunk__35436;
var G__35620 = count__35437;
var G__35621 = (i__35438 + (1));
seq__35434 = G__35618;
chunk__35436 = G__35619;
count__35437 = G__35620;
i__35438 = G__35621;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35434);
if(temp__5735__auto__){
var seq__35434__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35434__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35434__$1);
var G__35622 = cljs.core.chunk_rest(seq__35434__$1);
var G__35623 = c__4550__auto__;
var G__35624 = cljs.core.count(c__4550__auto__);
var G__35625 = (0);
seq__35434 = G__35622;
chunk__35436 = G__35623;
count__35437 = G__35624;
i__35438 = G__35625;
continue;
} else {
var path = cljs.core.first(seq__35434__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__35476_35626 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__35479_35627 = null;
var count__35480_35628 = (0);
var i__35481_35629 = (0);
while(true){
if((i__35481_35629 < count__35480_35628)){
var node_35630 = chunk__35479_35627.cljs$core$IIndexed$_nth$arity$2(null,i__35481_35629);
var path_match_35631 = shadow.cljs.devtools.client.browser.match_paths(node_35630.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35631)){
var new_link_35632 = (function (){var G__35486 = node_35630.cloneNode(true);
G__35486.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35631),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35486;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35631], 0));

goog.dom.insertSiblingAfter(new_link_35632,node_35630);

goog.dom.removeNode(node_35630);


var G__35633 = seq__35476_35626;
var G__35634 = chunk__35479_35627;
var G__35635 = count__35480_35628;
var G__35636 = (i__35481_35629 + (1));
seq__35476_35626 = G__35633;
chunk__35479_35627 = G__35634;
count__35480_35628 = G__35635;
i__35481_35629 = G__35636;
continue;
} else {
var G__35637 = seq__35476_35626;
var G__35638 = chunk__35479_35627;
var G__35639 = count__35480_35628;
var G__35640 = (i__35481_35629 + (1));
seq__35476_35626 = G__35637;
chunk__35479_35627 = G__35638;
count__35480_35628 = G__35639;
i__35481_35629 = G__35640;
continue;
}
} else {
var temp__5735__auto___35641__$1 = cljs.core.seq(seq__35476_35626);
if(temp__5735__auto___35641__$1){
var seq__35476_35642__$1 = temp__5735__auto___35641__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35476_35642__$1)){
var c__4550__auto___35643 = cljs.core.chunk_first(seq__35476_35642__$1);
var G__35644 = cljs.core.chunk_rest(seq__35476_35642__$1);
var G__35645 = c__4550__auto___35643;
var G__35646 = cljs.core.count(c__4550__auto___35643);
var G__35647 = (0);
seq__35476_35626 = G__35644;
chunk__35479_35627 = G__35645;
count__35480_35628 = G__35646;
i__35481_35629 = G__35647;
continue;
} else {
var node_35648 = cljs.core.first(seq__35476_35642__$1);
var path_match_35649 = shadow.cljs.devtools.client.browser.match_paths(node_35648.getAttribute("href"),path);
if(cljs.core.truth_(path_match_35649)){
var new_link_35650 = (function (){var G__35487 = node_35648.cloneNode(true);
G__35487.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_35649),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__35487;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_35649], 0));

goog.dom.insertSiblingAfter(new_link_35650,node_35648);

goog.dom.removeNode(node_35648);


var G__35651 = cljs.core.next(seq__35476_35642__$1);
var G__35652 = null;
var G__35653 = (0);
var G__35654 = (0);
seq__35476_35626 = G__35651;
chunk__35479_35627 = G__35652;
count__35480_35628 = G__35653;
i__35481_35629 = G__35654;
continue;
} else {
var G__35655 = cljs.core.next(seq__35476_35642__$1);
var G__35656 = null;
var G__35657 = (0);
var G__35658 = (0);
seq__35476_35626 = G__35655;
chunk__35479_35627 = G__35656;
count__35480_35628 = G__35657;
i__35481_35629 = G__35658;
continue;
}
}
} else {
}
}
break;
}


var G__35659 = cljs.core.next(seq__35434__$1);
var G__35660 = null;
var G__35661 = (0);
var G__35662 = (0);
seq__35434 = G__35659;
chunk__35436 = G__35660;
count__35437 = G__35661;
i__35438 = G__35662;
continue;
} else {
var G__35663 = cljs.core.next(seq__35434__$1);
var G__35664 = null;
var G__35665 = (0);
var G__35666 = (0);
seq__35434 = G__35663;
chunk__35436 = G__35664;
count__35437 = G__35665;
i__35438 = G__35666;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__35488){
var map__35489 = p__35488;
var map__35489__$1 = (((((!((map__35489 == null))))?(((((map__35489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35489):map__35489);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35489__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35489__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__35489,map__35489__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__35489,map__35489__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__35491,done){
var map__35492 = p__35491;
var map__35492__$1 = (((((!((map__35492 == null))))?(((((map__35492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35492):map__35492);
var msg = map__35492__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35492__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35492__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35492__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35492__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__35492,map__35492__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__35494){
var map__35495 = p__35494;
var map__35495__$1 = (((((!((map__35495 == null))))?(((((map__35495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35495):map__35495);
var src = map__35495__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35495__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__35492,map__35492__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__35492,map__35492__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e35497){var e = e35497;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__35492,map__35492__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__35498,done){
var map__35499 = p__35498;
var map__35499__$1 = (((((!((map__35499 == null))))?(((((map__35499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35499):map__35499);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35499__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35499__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__35499,map__35499__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__35499,map__35499__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__35501){
var map__35502 = p__35501;
var map__35502__$1 = (((((!((map__35502 == null))))?(((((map__35502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35502):map__35502);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35502__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35502__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__35504,done){
var map__35505 = p__35504;
var map__35505__$1 = (((((!((map__35505 == null))))?(((((map__35505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35505):map__35505);
var msg = map__35505__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35505__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__35507_35667 = type;
var G__35507_35668__$1 = (((G__35507_35667 instanceof cljs.core.Keyword))?G__35507_35667.fqn:null);
switch (G__35507_35668__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__35508 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__35509 = ((function (G__35508){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__35508))
;
var G__35510 = "POST";
var G__35511 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__35512 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35508,G__35509,G__35510,G__35511,G__35512);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e35513){var e = e35513;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___35670 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___35670)){
var s_35671 = temp__5735__auto___35670;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_35671.onclose = ((function (s_35671,temp__5735__auto___35670){
return (function (e){
return null;
});})(s_35671,temp__5735__auto___35670))
;

s_35671.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
