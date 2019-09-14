goog.provide('opstamp.app');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
opstamp.app.counter = (function opstamp$app$counter(id){
var counter_value = cljs.core.deref((function (){var G__30865 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("opstamp.app","counter","opstamp.app/counter",1448720926),id], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30865) : re_frame.core.subscribe.call(null,G__30865));
})());
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (counter_value){
return (function (){
var G__30866 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-counter","inc-counter",2085478987),id], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30866) : re_frame.core.dispatch.call(null,G__30866));
});})(counter_value))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),(10),new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0"], null)], null),["Counter ",cljs.core.name(id),": "].join(''),counter_value], null);
});
opstamp.app.opinput = (function opstamp$app$opinput(){
var val = cljs.core.deref((function (){var G__30868 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("opstamp.app","input","opstamp.app/input",155276912)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30868) : re_frame.core.subscribe.call(null,G__30868));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val){
return (function (p1__30867_SHARP_){
var G__30869 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opinput","opinput",1757132824),p1__30867_SHARP_.target.value], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__30869) : re_frame.core.dispatch.call(null,G__30869));
});})(val))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20),new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null)], null);
});
opstamp.app.decoded_op = (function opstamp$app$decoded_op(){
var val = cljs.core.deref((function (){var G__30870 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("opstamp.app","decoded","opstamp.app/decoded",2070139965)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30870) : re_frame.core.subscribe.call(null,G__30870));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20),new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0",new cljs.core.Keyword(null,"background","background",-863952629),"rgba(0,0,0,0.05)",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),val], null);
});
opstamp.app.dated_op = (function opstamp$app$dated_op(){
var val = cljs.core.deref((function (){var G__30871 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("opstamp.app","dated","opstamp.app/dated",-1581406712)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__30871) : re_frame.core.subscribe.call(null,G__30871));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),(20),new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 0",new cljs.core.Keyword(null,"background","background",-863952629),"rgba(0,0,0,0.05)",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),(cljs.core.truth_(val)?val.toUTCString():null)], null);
});
opstamp.app.timestamp_date = (function opstamp$app$timestamp_date(ts){
if((((ts > (1000000000))) && ((ts < (2000000000))))){
return (new Date((ts * (1000))));
} else {
return null;
}
});
opstamp.app.decode = (function opstamp$app$decode(optime){
if(cljs.core.truth_(cljs.core.re_matches(/^[0-9]+$/,optime))){
return cljs.core.last(cljs.core.take.cljs$core$IFn$_invoke$arity$2((33),cljs.core.iterate((function (p1__30872_SHARP_){
return (p1__30872_SHARP_ / (2));
}),parseInt(optime))));
} else {
return null;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"opinput","opinput",1757132824),(function (db,p__30873){
var vec__30874 = p__30873;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30874,(0),null);
var newop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30874,(1),null);
var decoded = opstamp.app.decode(newop);
var dated = opstamp.app.timestamp_date(decoded);
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("opstamp.app","op-input","opstamp.app/op-input",-1949760019)], null),newop),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("opstamp.app","decoded","opstamp.app/decoded",2070139965)], null),decoded),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("opstamp.app","dated","opstamp.app/dated",-1581406712)], null),dated);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inc-counter","inc-counter",2085478987),(function (db,p__30877){
var vec__30878 = p__30877;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30878,(0),null);
var counter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30878,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("opstamp.app","counters","opstamp.app/counters",426616791),counter_id], null),cljs.core.inc);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),cljs.core.constantly(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("opstamp.app","op-input","opstamp.app/op-input",-1949760019),"",new cljs.core.Keyword("opstamp.app","counters","opstamp.app/counters",426616791),new cljs.core.PersistentArrayMap(null, 3, ["A",(0),"B",(0),"C",(0)], null)], null)));
var G__30881_30906 = new cljs.core.Keyword("opstamp.app","counter","opstamp.app/counter",1448720926);
var G__30882_30907 = ((function (G__30881_30906){
return (function (db,p__30883){
var vec__30884 = p__30883;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30884,(0),null);
var counter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30884,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("opstamp.app","counters","opstamp.app/counters",426616791),counter_id], null));
});})(G__30881_30906))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30881_30906,G__30882_30907) : re_frame.core.reg_sub.call(null,G__30881_30906,G__30882_30907));
var G__30887_30908 = new cljs.core.Keyword("opstamp.app","input","opstamp.app/input",155276912);
var G__30888_30909 = ((function (G__30887_30908){
return (function (db,p__30889){
var vec__30890 = p__30889;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30890,(0),null);
var counter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30890,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("opstamp.app","op-input","opstamp.app/op-input",-1949760019)], null));
});})(G__30887_30908))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30887_30908,G__30888_30909) : re_frame.core.reg_sub.call(null,G__30887_30908,G__30888_30909));
var G__30893_30910 = new cljs.core.Keyword("opstamp.app","decoded","opstamp.app/decoded",2070139965);
var G__30894_30911 = ((function (G__30893_30910){
return (function (db,p__30895){
var vec__30896 = p__30895;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30896,(0),null);
var counter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30896,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("opstamp.app","decoded","opstamp.app/decoded",2070139965)], null));
});})(G__30893_30910))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30893_30910,G__30894_30911) : re_frame.core.reg_sub.call(null,G__30893_30910,G__30894_30911));
var G__30899_30912 = new cljs.core.Keyword("opstamp.app","dated","opstamp.app/dated",-1581406712);
var G__30900_30913 = ((function (G__30899_30912){
return (function (db,p__30901){
var vec__30902 = p__30901;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30902,(0),null);
var counter_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30902,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("opstamp.app","dated","opstamp.app/dated",-1581406712)], null));
});})(G__30899_30912))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__30899_30912,G__30900_30913) : re_frame.core.reg_sub.call(null,G__30899_30912,G__30900_30913));
/**
 * Render the page
 */
opstamp.app.root_view = (function opstamp$app$root_view(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),(300),new cljs.core.Keyword(null,"margin","margin",-995903681),"50px auto",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"MongoDB oplog timestamp conversion"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"64 bit timestamp"], null),opstamp.app.opinput(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Unix timestamp"], null),opstamp.app.decoded_op(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Datestring"], null),opstamp.app.dated_op()], null);
});
opstamp.app.render = (function opstamp$app$render(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [opstamp.app.root_view], null),document.getElementById("root"));
});
goog.exportSymbol('opstamp.app.render', opstamp.app.render);
opstamp.app.init = (function opstamp$app$init(){
var G__30905_30914 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__30905_30914) : re_frame.core.dispatch_sync.call(null,G__30905_30914));

return opstamp.app.render();
});
goog.exportSymbol('opstamp.app.init', opstamp.app.init);

//# sourceMappingURL=opstamp.app.js.map
