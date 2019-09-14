goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__27903){
var map__27904 = p__27903;
var map__27904__$1 = (((((!((map__27904 == null))))?(((((map__27904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27904):map__27904);
var m = map__27904__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27904__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27904__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27910_28099 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27911_28100 = null;
var count__27912_28101 = (0);
var i__27913_28102 = (0);
while(true){
if((i__27913_28102 < count__27912_28101)){
var f_28103 = chunk__27911_28100.cljs$core$IIndexed$_nth$arity$2(null,i__27913_28102);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28103], 0));


var G__28104 = seq__27910_28099;
var G__28105 = chunk__27911_28100;
var G__28106 = count__27912_28101;
var G__28107 = (i__27913_28102 + (1));
seq__27910_28099 = G__28104;
chunk__27911_28100 = G__28105;
count__27912_28101 = G__28106;
i__27913_28102 = G__28107;
continue;
} else {
var temp__5735__auto___28108 = cljs.core.seq(seq__27910_28099);
if(temp__5735__auto___28108){
var seq__27910_28109__$1 = temp__5735__auto___28108;
if(cljs.core.chunked_seq_QMARK_(seq__27910_28109__$1)){
var c__4550__auto___28110 = cljs.core.chunk_first(seq__27910_28109__$1);
var G__28111 = cljs.core.chunk_rest(seq__27910_28109__$1);
var G__28112 = c__4550__auto___28110;
var G__28113 = cljs.core.count(c__4550__auto___28110);
var G__28114 = (0);
seq__27910_28099 = G__28111;
chunk__27911_28100 = G__28112;
count__27912_28101 = G__28113;
i__27913_28102 = G__28114;
continue;
} else {
var f_28115 = cljs.core.first(seq__27910_28109__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_28115], 0));


var G__28116 = cljs.core.next(seq__27910_28109__$1);
var G__28117 = null;
var G__28118 = (0);
var G__28119 = (0);
seq__27910_28099 = G__28116;
chunk__27911_28100 = G__28117;
count__27912_28101 = G__28118;
i__27913_28102 = G__28119;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28120 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_28120], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_28120)))?cljs.core.second(arglists_28120):arglists_28120)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__27917_28127 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__27918_28128 = null;
var count__27919_28129 = (0);
var i__27920_28130 = (0);
while(true){
if((i__27920_28130 < count__27919_28129)){
var vec__27957_28132 = chunk__27918_28128.cljs$core$IIndexed$_nth$arity$2(null,i__27920_28130);
var name_28133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27957_28132,(0),null);
var map__27960_28134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27957_28132,(1),null);
var map__27960_28135__$1 = (((((!((map__27960_28134 == null))))?(((((map__27960_28134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27960_28134.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27960_28134):map__27960_28134);
var doc_28136 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27960_28135__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27960_28135__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28133], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28137], 0));

if(cljs.core.truth_(doc_28136)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28136], 0));
} else {
}


var G__28139 = seq__27917_28127;
var G__28140 = chunk__27918_28128;
var G__28141 = count__27919_28129;
var G__28142 = (i__27920_28130 + (1));
seq__27917_28127 = G__28139;
chunk__27918_28128 = G__28140;
count__27919_28129 = G__28141;
i__27920_28130 = G__28142;
continue;
} else {
var temp__5735__auto___28143 = cljs.core.seq(seq__27917_28127);
if(temp__5735__auto___28143){
var seq__27917_28144__$1 = temp__5735__auto___28143;
if(cljs.core.chunked_seq_QMARK_(seq__27917_28144__$1)){
var c__4550__auto___28145 = cljs.core.chunk_first(seq__27917_28144__$1);
var G__28146 = cljs.core.chunk_rest(seq__27917_28144__$1);
var G__28147 = c__4550__auto___28145;
var G__28148 = cljs.core.count(c__4550__auto___28145);
var G__28149 = (0);
seq__27917_28127 = G__28146;
chunk__27918_28128 = G__28147;
count__27919_28129 = G__28148;
i__27920_28130 = G__28149;
continue;
} else {
var vec__27962_28152 = cljs.core.first(seq__27917_28144__$1);
var name_28153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27962_28152,(0),null);
var map__27965_28154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27962_28152,(1),null);
var map__27965_28155__$1 = (((((!((map__27965_28154 == null))))?(((((map__27965_28154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27965_28154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27965_28154):map__27965_28154);
var doc_28156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27965_28155__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_28157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27965_28155__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_28153], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_28157], 0));

if(cljs.core.truth_(doc_28156)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_28156], 0));
} else {
}


var G__28158 = cljs.core.next(seq__27917_28144__$1);
var G__28159 = null;
var G__28160 = (0);
var G__28161 = (0);
seq__27917_28127 = G__28158;
chunk__27918_28128 = G__28159;
count__27919_28129 = G__28160;
i__27920_28130 = G__28161;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__27969 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27970 = null;
var count__27971 = (0);
var i__27972 = (0);
while(true){
if((i__27972 < count__27971)){
var role = chunk__27970.cljs$core$IIndexed$_nth$arity$2(null,i__27972);
var temp__5735__auto___28162__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28162__$1)){
var spec_28163 = temp__5735__auto___28162__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_28163)], 0));
} else {
}


var G__28167 = seq__27969;
var G__28168 = chunk__27970;
var G__28169 = count__27971;
var G__28170 = (i__27972 + (1));
seq__27969 = G__28167;
chunk__27970 = G__28168;
count__27971 = G__28169;
i__27972 = G__28170;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__27969);
if(temp__5735__auto____$1){
var seq__27969__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__27969__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27969__$1);
var G__28182 = cljs.core.chunk_rest(seq__27969__$1);
var G__28183 = c__4550__auto__;
var G__28184 = cljs.core.count(c__4550__auto__);
var G__28185 = (0);
seq__27969 = G__28182;
chunk__27970 = G__28183;
count__27971 = G__28184;
i__27972 = G__28185;
continue;
} else {
var role = cljs.core.first(seq__27969__$1);
var temp__5735__auto___28186__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___28186__$2)){
var spec_28187 = temp__5735__auto___28186__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_28187)], 0));
} else {
}


var G__28189 = cljs.core.next(seq__27969__$1);
var G__28190 = null;
var G__28191 = (0);
var G__28192 = (0);
seq__27969 = G__28189;
chunk__27970 = G__28190;
count__27971 = G__28191;
i__27972 = G__28192;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__28201 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__28202 = cljs.core.ex_cause(t);
via = G__28201;
t = G__28202;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__27996 = datafied_throwable;
var map__27996__$1 = (((((!((map__27996 == null))))?(((((map__27996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27996):map__27996);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27996__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27996__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27996__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27998 = cljs.core.last(via);
var map__27998__$1 = (((((!((map__27998 == null))))?(((((map__27998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27998):map__27998);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27998__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27998__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27998__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__28000 = data;
var map__28000__$1 = (((((!((map__28000 == null))))?(((((map__28000.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28000.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28000):map__28000);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28000__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28000__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28000__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__28002 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__28002__$1 = (((((!((map__28002 == null))))?(((((map__28002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28002):map__28002);
var top_data = map__28002__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28002__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__28007 = phase;
var G__28007__$1 = (((G__28007 instanceof cljs.core.Keyword))?G__28007.fqn:null);
switch (G__28007__$1) {
case "read-source":
var map__28008 = data;
var map__28008__$1 = (((((!((map__28008 == null))))?(((((map__28008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28008):map__28008);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28008__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28008__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__28011 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__28011__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28011,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28011);
var G__28011__$2 = (cljs.core.truth_((function (){var fexpr__28016 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28016.cljs$core$IFn$_invoke$arity$1 ? fexpr__28016.cljs$core$IFn$_invoke$arity$1(source) : fexpr__28016.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28011__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28011__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28011__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28011__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__28017 = top_data;
var G__28017__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28017,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__28017);
var G__28017__$2 = (cljs.core.truth_((function (){var fexpr__28022 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28022.cljs$core$IFn$_invoke$arity$1 ? fexpr__28022.cljs$core$IFn$_invoke$arity$1(source) : fexpr__28022.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__28017__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__28017__$1);
var G__28017__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28017__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28017__$2);
var G__28017__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28017__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28017__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28017__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28017__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__28026 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28026,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28026,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28026,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28026,(3),null);
var G__28029 = top_data;
var G__28029__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28029,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__28029);
var G__28029__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28029__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__28029__$1);
var G__28029__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28029__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__28029__$2);
var G__28029__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28029__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__28029__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28029__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__28029__$4;
}

break;
case "execution":
var vec__28031 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28031,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28031,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28031,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28031,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__28031,source__$1,method,file,line,G__28007,G__28007__$1,map__27996,map__27996__$1,via,trace,phase,map__27998,map__27998__$1,type,message,data,map__28000,map__28000__$1,problems,fn,caller,map__28002,map__28002__$1,top_data,source){
return (function (p1__27995_SHARP_){
var or__4131__auto__ = (p1__27995_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__28039 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__28039.cljs$core$IFn$_invoke$arity$1 ? fexpr__28039.cljs$core$IFn$_invoke$arity$1(p1__27995_SHARP_) : fexpr__28039.call(null,p1__27995_SHARP_));
}
});})(vec__28031,source__$1,method,file,line,G__28007,G__28007__$1,map__27996,map__27996__$1,via,trace,phase,map__27998,map__27998__$1,type,message,data,map__28000,map__28000__$1,problems,fn,caller,map__28002,map__28002__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__28040 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__28040__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28040,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__28040);
var G__28040__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28040__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__28040__$1);
var G__28040__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28040__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__28040__$2);
var G__28040__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28040__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__28040__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28040__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__28040__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28007__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__28048){
var map__28049 = p__28048;
var map__28049__$1 = (((((!((map__28049 == null))))?(((((map__28049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28049):map__28049);
var triage_data = map__28049__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28049__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28049__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28049__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28049__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28049__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28049__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28049__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28049__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__28052 = phase;
var G__28052__$1 = (((G__28052 instanceof cljs.core.Keyword))?G__28052.fqn:null);
switch (G__28052__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__28053 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__28054 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28055 = loc;
var G__28056 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28057_28253 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28058_28254 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28059_28255 = true;
var _STAR_print_fn_STAR__temp_val__28060_28256 = ((function (_STAR_print_newline_STAR__orig_val__28057_28253,_STAR_print_fn_STAR__orig_val__28058_28254,_STAR_print_newline_STAR__temp_val__28059_28255,sb__4661__auto__,G__28053,G__28054,G__28055,G__28052,G__28052__$1,loc,class_name,simple_class,cause_type,format,map__28049,map__28049__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28057_28253,_STAR_print_fn_STAR__orig_val__28058_28254,_STAR_print_newline_STAR__temp_val__28059_28255,sb__4661__auto__,G__28053,G__28054,G__28055,G__28052,G__28052__$1,loc,class_name,simple_class,cause_type,format,map__28049,map__28049__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28059_28255;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28060_28256;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28057_28253,_STAR_print_fn_STAR__orig_val__28058_28254,_STAR_print_newline_STAR__temp_val__28059_28255,_STAR_print_fn_STAR__temp_val__28060_28256,sb__4661__auto__,G__28053,G__28054,G__28055,G__28052,G__28052__$1,loc,class_name,simple_class,cause_type,format,map__28049,map__28049__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__28057_28253,_STAR_print_fn_STAR__orig_val__28058_28254,_STAR_print_newline_STAR__temp_val__28059_28255,_STAR_print_fn_STAR__temp_val__28060_28256,sb__4661__auto__,G__28053,G__28054,G__28055,G__28052,G__28052__$1,loc,class_name,simple_class,cause_type,format,map__28049,map__28049__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28045_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__28045_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28057_28253,_STAR_print_fn_STAR__orig_val__28058_28254,_STAR_print_newline_STAR__temp_val__28059_28255,_STAR_print_fn_STAR__temp_val__28060_28256,sb__4661__auto__,G__28053,G__28054,G__28055,G__28052,G__28052__$1,loc,class_name,simple_class,cause_type,format,map__28049,map__28049__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28057_28253,_STAR_print_fn_STAR__orig_val__28058_28254,_STAR_print_newline_STAR__temp_val__28059_28255,_STAR_print_fn_STAR__temp_val__28060_28256,sb__4661__auto__,G__28053,G__28054,G__28055,G__28052,G__28052__$1,loc,class_name,simple_class,cause_type,format,map__28049,map__28049__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28058_28254;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28057_28253;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__28053,G__28054,G__28055,G__28056) : format.call(null,G__28053,G__28054,G__28055,G__28056));

break;
case "macroexpansion":
var G__28070 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__28071 = cause_type;
var G__28072 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28073 = loc;
var G__28074 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28070,G__28071,G__28072,G__28073,G__28074) : format.call(null,G__28070,G__28071,G__28072,G__28073,G__28074));

break;
case "compile-syntax-check":
var G__28075 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__28076 = cause_type;
var G__28077 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28078 = loc;
var G__28079 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28075,G__28076,G__28077,G__28078,G__28079) : format.call(null,G__28075,G__28076,G__28077,G__28078,G__28079));

break;
case "compilation":
var G__28080 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__28081 = cause_type;
var G__28082 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28083 = loc;
var G__28084 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28080,G__28081,G__28082,G__28083,G__28084) : format.call(null,G__28080,G__28081,G__28082,G__28083,G__28084));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__28085 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__28086 = symbol;
var G__28087 = loc;
var G__28088 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__28089_28276 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__28090_28277 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__28091_28278 = true;
var _STAR_print_fn_STAR__temp_val__28092_28279 = ((function (_STAR_print_newline_STAR__orig_val__28089_28276,_STAR_print_fn_STAR__orig_val__28090_28277,_STAR_print_newline_STAR__temp_val__28091_28278,sb__4661__auto__,G__28085,G__28086,G__28087,G__28052,G__28052__$1,loc,class_name,simple_class,cause_type,format,map__28049,map__28049__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__28089_28276,_STAR_print_fn_STAR__orig_val__28090_28277,_STAR_print_newline_STAR__temp_val__28091_28278,sb__4661__auto__,G__28085,G__28086,G__28087,G__28052,G__28052__$1,loc,class_name,simple_class,cause_type,format,map__28049,map__28049__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__28091_28278;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__28092_28279;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__28089_28276,_STAR_print_fn_STAR__orig_val__28090_28277,_STAR_print_newline_STAR__temp_val__28091_28278,_STAR_print_fn_STAR__temp_val__28092_28279,sb__4661__auto__,G__28085,G__28086,G__28087,G__28052,G__28052__$1,loc,class_name,simple_class,cause_type,format,map__28049,map__28049__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__28089_28276,_STAR_print_fn_STAR__orig_val__28090_28277,_STAR_print_newline_STAR__temp_val__28091_28278,_STAR_print_fn_STAR__temp_val__28092_28279,sb__4661__auto__,G__28085,G__28086,G__28087,G__28052,G__28052__$1,loc,class_name,simple_class,cause_type,format,map__28049,map__28049__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__28046_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__28046_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__28089_28276,_STAR_print_fn_STAR__orig_val__28090_28277,_STAR_print_newline_STAR__temp_val__28091_28278,_STAR_print_fn_STAR__temp_val__28092_28279,sb__4661__auto__,G__28085,G__28086,G__28087,G__28052,G__28052__$1,loc,class_name,simple_class,cause_type,format,map__28049,map__28049__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__28089_28276,_STAR_print_fn_STAR__orig_val__28090_28277,_STAR_print_newline_STAR__temp_val__28091_28278,_STAR_print_fn_STAR__temp_val__28092_28279,sb__4661__auto__,G__28085,G__28086,G__28087,G__28052,G__28052__$1,loc,class_name,simple_class,cause_type,format,map__28049,map__28049__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__28090_28277;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__28089_28276;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__28085,G__28086,G__28087,G__28088) : format.call(null,G__28085,G__28086,G__28087,G__28088));
} else {
var G__28093 = "Execution error%s at %s(%s).\n%s\n";
var G__28094 = cause_type;
var G__28095 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__28096 = loc;
var G__28097 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__28093,G__28094,G__28095,G__28096,G__28097) : format.call(null,G__28093,G__28094,G__28095,G__28096,G__28097));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28052__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
