goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30675 = arguments.length;
switch (G__30675) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30684 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30684 = (function (f,blockable,meta30685){
this.f = f;
this.blockable = blockable;
this.meta30685 = meta30685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30686,meta30685__$1){
var self__ = this;
var _30686__$1 = this;
return (new cljs.core.async.t_cljs$core$async30684(self__.f,self__.blockable,meta30685__$1));
});

cljs.core.async.t_cljs$core$async30684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30686){
var self__ = this;
var _30686__$1 = this;
return self__.meta30685;
});

cljs.core.async.t_cljs$core$async30684.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30684.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30684.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30684.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30685","meta30685",1254464942,null)], null);
});

cljs.core.async.t_cljs$core$async30684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30684";

cljs.core.async.t_cljs$core$async30684.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30684");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30684.
 */
cljs.core.async.__GT_t_cljs$core$async30684 = (function cljs$core$async$__GT_t_cljs$core$async30684(f__$1,blockable__$1,meta30685){
return (new cljs.core.async.t_cljs$core$async30684(f__$1,blockable__$1,meta30685));
});

}

return (new cljs.core.async.t_cljs$core$async30684(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30709 = arguments.length;
switch (G__30709) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30721 = arguments.length;
switch (G__30721) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30726 = arguments.length;
switch (G__30726) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_33291 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33291) : fn1.call(null,val_33291));
} else {
cljs.core.async.impl.dispatch.run(((function (val_33291,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_33291) : fn1.call(null,val_33291));
});})(val_33291,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30755 = arguments.length;
switch (G__30755) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___33309 = n;
var x_33310 = (0);
while(true){
if((x_33310 < n__4607__auto___33309)){
(a[x_33310] = x_33310);

var G__33311 = (x_33310 + (1));
x_33310 = G__33311;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30783 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30783 = (function (flag,meta30784){
this.flag = flag;
this.meta30784 = meta30784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30785,meta30784__$1){
var self__ = this;
var _30785__$1 = this;
return (new cljs.core.async.t_cljs$core$async30783(self__.flag,meta30784__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30785){
var self__ = this;
var _30785__$1 = this;
return self__.meta30784;
});})(flag))
;

cljs.core.async.t_cljs$core$async30783.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30783.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30783.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30783.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30783.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30784","meta30784",79365252,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30783.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30783";

cljs.core.async.t_cljs$core$async30783.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30783");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30783.
 */
cljs.core.async.__GT_t_cljs$core$async30783 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30783(flag__$1,meta30784){
return (new cljs.core.async.t_cljs$core$async30783(flag__$1,meta30784));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30783(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30799 = (function (flag,cb,meta30800){
this.flag = flag;
this.cb = cb;
this.meta30800 = meta30800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30801,meta30800__$1){
var self__ = this;
var _30801__$1 = this;
return (new cljs.core.async.t_cljs$core$async30799(self__.flag,self__.cb,meta30800__$1));
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30801){
var self__ = this;
var _30801__$1 = this;
return self__.meta30800;
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30799.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30800","meta30800",1897670116,null)], null);
});

cljs.core.async.t_cljs$core$async30799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30799";

cljs.core.async.t_cljs$core$async30799.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async30799");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30799.
 */
cljs.core.async.__GT_t_cljs$core$async30799 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30799(flag__$1,cb__$1,meta30800){
return (new cljs.core.async.t_cljs$core$async30799(flag__$1,cb__$1,meta30800));
});

}

return (new cljs.core.async.t_cljs$core$async30799(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30817_SHARP_){
var G__30832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30817_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30832) : fret.call(null,G__30832));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30818_SHARP_){
var G__30833 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30818_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30833) : fret.call(null,G__30833));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33335 = (i + (1));
i = G__33335;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33340 = arguments.length;
var i__4731__auto___33341 = (0);
while(true){
if((i__4731__auto___33341 < len__4730__auto___33340)){
args__4736__auto__.push((arguments[i__4731__auto___33341]));

var G__33343 = (i__4731__auto___33341 + (1));
i__4731__auto___33341 = G__33343;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30857){
var map__30858 = p__30857;
var map__30858__$1 = (((((!((map__30858 == null))))?(((((map__30858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30858):map__30858);
var opts = map__30858__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30848){
var G__30849 = cljs.core.first(seq30848);
var seq30848__$1 = cljs.core.next(seq30848);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30849,seq30848__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30893 = arguments.length;
switch (G__30893) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30594__auto___33352 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto___33352){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto___33352){
return (function (state_30961){
var state_val_30962 = (state_30961[(1)]);
if((state_val_30962 === (7))){
var inst_30949 = (state_30961[(2)]);
var state_30961__$1 = state_30961;
var statearr_30978_33354 = state_30961__$1;
(statearr_30978_33354[(2)] = inst_30949);

(statearr_30978_33354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (1))){
var state_30961__$1 = state_30961;
var statearr_30979_33356 = state_30961__$1;
(statearr_30979_33356[(2)] = null);

(statearr_30979_33356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (4))){
var inst_30921 = (state_30961[(7)]);
var inst_30921__$1 = (state_30961[(2)]);
var inst_30926 = (inst_30921__$1 == null);
var state_30961__$1 = (function (){var statearr_30982 = state_30961;
(statearr_30982[(7)] = inst_30921__$1);

return statearr_30982;
})();
if(cljs.core.truth_(inst_30926)){
var statearr_30983_33359 = state_30961__$1;
(statearr_30983_33359[(1)] = (5));

} else {
var statearr_30984_33361 = state_30961__$1;
(statearr_30984_33361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (13))){
var state_30961__$1 = state_30961;
var statearr_30988_33362 = state_30961__$1;
(statearr_30988_33362[(2)] = null);

(statearr_30988_33362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (6))){
var inst_30921 = (state_30961[(7)]);
var state_30961__$1 = state_30961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30961__$1,(11),to,inst_30921);
} else {
if((state_val_30962 === (3))){
var inst_30955 = (state_30961[(2)]);
var state_30961__$1 = state_30961;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30961__$1,inst_30955);
} else {
if((state_val_30962 === (12))){
var state_30961__$1 = state_30961;
var statearr_30997_33373 = state_30961__$1;
(statearr_30997_33373[(2)] = null);

(statearr_30997_33373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (2))){
var state_30961__$1 = state_30961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30961__$1,(4),from);
} else {
if((state_val_30962 === (11))){
var inst_30942 = (state_30961[(2)]);
var state_30961__$1 = state_30961;
if(cljs.core.truth_(inst_30942)){
var statearr_31000_33377 = state_30961__$1;
(statearr_31000_33377[(1)] = (12));

} else {
var statearr_31001_33378 = state_30961__$1;
(statearr_31001_33378[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (9))){
var state_30961__$1 = state_30961;
var statearr_31002_33379 = state_30961__$1;
(statearr_31002_33379[(2)] = null);

(statearr_31002_33379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (5))){
var state_30961__$1 = state_30961;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31004_33380 = state_30961__$1;
(statearr_31004_33380[(1)] = (8));

} else {
var statearr_31005_33381 = state_30961__$1;
(statearr_31005_33381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (14))){
var inst_30947 = (state_30961[(2)]);
var state_30961__$1 = state_30961;
var statearr_31006_33382 = state_30961__$1;
(statearr_31006_33382[(2)] = inst_30947);

(statearr_31006_33382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (10))){
var inst_30939 = (state_30961[(2)]);
var state_30961__$1 = state_30961;
var statearr_31007_33383 = state_30961__$1;
(statearr_31007_33383[(2)] = inst_30939);

(statearr_31007_33383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30962 === (8))){
var inst_30932 = cljs.core.async.close_BANG_(to);
var state_30961__$1 = state_30961;
var statearr_31009_33384 = state_30961__$1;
(statearr_31009_33384[(2)] = inst_30932);

(statearr_31009_33384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30594__auto___33352))
;
return ((function (switch__30275__auto__,c__30594__auto___33352){
return (function() {
var cljs$core$async$state_machine__30276__auto__ = null;
var cljs$core$async$state_machine__30276__auto____0 = (function (){
var statearr_31011 = [null,null,null,null,null,null,null,null];
(statearr_31011[(0)] = cljs$core$async$state_machine__30276__auto__);

(statearr_31011[(1)] = (1));

return statearr_31011;
});
var cljs$core$async$state_machine__30276__auto____1 = (function (state_30961){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_30961);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e31013){if((e31013 instanceof Object)){
var ex__30279__auto__ = e31013;
var statearr_31015_33385 = state_30961;
(statearr_31015_33385[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31013;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33386 = state_30961;
state_30961 = G__33386;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$state_machine__30276__auto__ = function(state_30961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30276__auto____1.call(this,state_30961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30276__auto____0;
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30276__auto____1;
return cljs$core$async$state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto___33352))
})();
var state__30596__auto__ = (function (){var statearr_31019 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_31019[(6)] = c__30594__auto___33352);

return statearr_31019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto___33352))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__31022){
var vec__31025 = p__31022;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31025,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31025,(1),null);
var job = vec__31025;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30594__auto___33389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto___33389,res,vec__31025,v,p,job,jobs,results){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto___33389,res,vec__31025,v,p,job,jobs,results){
return (function (state_31032){
var state_val_31033 = (state_31032[(1)]);
if((state_val_31033 === (1))){
var state_31032__$1 = state_31032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31032__$1,(2),res,v);
} else {
if((state_val_31033 === (2))){
var inst_31029 = (state_31032[(2)]);
var inst_31030 = cljs.core.async.close_BANG_(res);
var state_31032__$1 = (function (){var statearr_31036 = state_31032;
(statearr_31036[(7)] = inst_31029);

return statearr_31036;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31032__$1,inst_31030);
} else {
return null;
}
}
});})(c__30594__auto___33389,res,vec__31025,v,p,job,jobs,results))
;
return ((function (switch__30275__auto__,c__30594__auto___33389,res,vec__31025,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____0 = (function (){
var statearr_31038 = [null,null,null,null,null,null,null,null];
(statearr_31038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__);

(statearr_31038[(1)] = (1));

return statearr_31038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____1 = (function (state_31032){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_31032);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e31039){if((e31039 instanceof Object)){
var ex__30279__auto__ = e31039;
var statearr_31040_33394 = state_31032;
(statearr_31040_33394[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31032);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31039;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33395 = state_31032;
state_31032 = G__33395;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__ = function(state_31032){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____1.call(this,state_31032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto___33389,res,vec__31025,v,p,job,jobs,results))
})();
var state__30596__auto__ = (function (){var statearr_31041 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_31041[(6)] = c__30594__auto___33389);

return statearr_31041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto___33389,res,vec__31025,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31042){
var vec__31043 = p__31042;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31043,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31043,(1),null);
var job = vec__31043;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___33398 = n;
var __33399 = (0);
while(true){
if((__33399 < n__4607__auto___33398)){
var G__31046_33400 = type;
var G__31046_33401__$1 = (((G__31046_33400 instanceof cljs.core.Keyword))?G__31046_33400.fqn:null);
switch (G__31046_33401__$1) {
case "compute":
var c__30594__auto___33403 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33399,c__30594__auto___33403,G__31046_33400,G__31046_33401__$1,n__4607__auto___33398,jobs,results,process,async){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (__33399,c__30594__auto___33403,G__31046_33400,G__31046_33401__$1,n__4607__auto___33398,jobs,results,process,async){
return (function (state_31062){
var state_val_31063 = (state_31062[(1)]);
if((state_val_31063 === (1))){
var state_31062__$1 = state_31062;
var statearr_31069_33405 = state_31062__$1;
(statearr_31069_33405[(2)] = null);

(statearr_31069_33405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (2))){
var state_31062__$1 = state_31062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31062__$1,(4),jobs);
} else {
if((state_val_31063 === (3))){
var inst_31060 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31062__$1,inst_31060);
} else {
if((state_val_31063 === (4))){
var inst_31052 = (state_31062[(2)]);
var inst_31053 = process(inst_31052);
var state_31062__$1 = state_31062;
if(cljs.core.truth_(inst_31053)){
var statearr_31078_33406 = state_31062__$1;
(statearr_31078_33406[(1)] = (5));

} else {
var statearr_31079_33407 = state_31062__$1;
(statearr_31079_33407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (5))){
var state_31062__$1 = state_31062;
var statearr_31080_33408 = state_31062__$1;
(statearr_31080_33408[(2)] = null);

(statearr_31080_33408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (6))){
var state_31062__$1 = state_31062;
var statearr_31081_33409 = state_31062__$1;
(statearr_31081_33409[(2)] = null);

(statearr_31081_33409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31063 === (7))){
var inst_31058 = (state_31062[(2)]);
var state_31062__$1 = state_31062;
var statearr_31087_33413 = state_31062__$1;
(statearr_31087_33413[(2)] = inst_31058);

(statearr_31087_33413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33399,c__30594__auto___33403,G__31046_33400,G__31046_33401__$1,n__4607__auto___33398,jobs,results,process,async))
;
return ((function (__33399,switch__30275__auto__,c__30594__auto___33403,G__31046_33400,G__31046_33401__$1,n__4607__auto___33398,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____0 = (function (){
var statearr_31092 = [null,null,null,null,null,null,null];
(statearr_31092[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__);

(statearr_31092[(1)] = (1));

return statearr_31092;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____1 = (function (state_31062){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_31062);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e31093){if((e31093 instanceof Object)){
var ex__30279__auto__ = e31093;
var statearr_31099_33417 = state_31062;
(statearr_31099_33417[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31093;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33419 = state_31062;
state_31062 = G__33419;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__ = function(state_31062){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____1.call(this,state_31062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__;
})()
;})(__33399,switch__30275__auto__,c__30594__auto___33403,G__31046_33400,G__31046_33401__$1,n__4607__auto___33398,jobs,results,process,async))
})();
var state__30596__auto__ = (function (){var statearr_31100 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_31100[(6)] = c__30594__auto___33403);

return statearr_31100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(__33399,c__30594__auto___33403,G__31046_33400,G__31046_33401__$1,n__4607__auto___33398,jobs,results,process,async))
);


break;
case "async":
var c__30594__auto___33422 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__33399,c__30594__auto___33422,G__31046_33400,G__31046_33401__$1,n__4607__auto___33398,jobs,results,process,async){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (__33399,c__30594__auto___33422,G__31046_33400,G__31046_33401__$1,n__4607__auto___33398,jobs,results,process,async){
return (function (state_31114){
var state_val_31115 = (state_31114[(1)]);
if((state_val_31115 === (1))){
var state_31114__$1 = state_31114;
var statearr_31118_33424 = state_31114__$1;
(statearr_31118_33424[(2)] = null);

(statearr_31118_33424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (2))){
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31114__$1,(4),jobs);
} else {
if((state_val_31115 === (3))){
var inst_31111 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31114__$1,inst_31111);
} else {
if((state_val_31115 === (4))){
var inst_31103 = (state_31114[(2)]);
var inst_31104 = async(inst_31103);
var state_31114__$1 = state_31114;
if(cljs.core.truth_(inst_31104)){
var statearr_31119_33427 = state_31114__$1;
(statearr_31119_33427[(1)] = (5));

} else {
var statearr_31120_33428 = state_31114__$1;
(statearr_31120_33428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (5))){
var state_31114__$1 = state_31114;
var statearr_31121_33429 = state_31114__$1;
(statearr_31121_33429[(2)] = null);

(statearr_31121_33429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (6))){
var state_31114__$1 = state_31114;
var statearr_31122_33430 = state_31114__$1;
(statearr_31122_33430[(2)] = null);

(statearr_31122_33430[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31115 === (7))){
var inst_31109 = (state_31114[(2)]);
var state_31114__$1 = state_31114;
var statearr_31123_33431 = state_31114__$1;
(statearr_31123_33431[(2)] = inst_31109);

(statearr_31123_33431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__33399,c__30594__auto___33422,G__31046_33400,G__31046_33401__$1,n__4607__auto___33398,jobs,results,process,async))
;
return ((function (__33399,switch__30275__auto__,c__30594__auto___33422,G__31046_33400,G__31046_33401__$1,n__4607__auto___33398,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____0 = (function (){
var statearr_31124 = [null,null,null,null,null,null,null];
(statearr_31124[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__);

(statearr_31124[(1)] = (1));

return statearr_31124;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____1 = (function (state_31114){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_31114);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e31125){if((e31125 instanceof Object)){
var ex__30279__auto__ = e31125;
var statearr_31126_33434 = state_31114;
(statearr_31126_33434[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31125;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33435 = state_31114;
state_31114 = G__33435;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__ = function(state_31114){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____1.call(this,state_31114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__;
})()
;})(__33399,switch__30275__auto__,c__30594__auto___33422,G__31046_33400,G__31046_33401__$1,n__4607__auto___33398,jobs,results,process,async))
})();
var state__30596__auto__ = (function (){var statearr_31127 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_31127[(6)] = c__30594__auto___33422);

return statearr_31127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(__33399,c__30594__auto___33422,G__31046_33400,G__31046_33401__$1,n__4607__auto___33398,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31046_33401__$1)].join('')));

}

var G__33436 = (__33399 + (1));
__33399 = G__33436;
continue;
} else {
}
break;
}

var c__30594__auto___33437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto___33437,jobs,results,process,async){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto___33437,jobs,results,process,async){
return (function (state_31149){
var state_val_31150 = (state_31149[(1)]);
if((state_val_31150 === (7))){
var inst_31145 = (state_31149[(2)]);
var state_31149__$1 = state_31149;
var statearr_31153_33438 = state_31149__$1;
(statearr_31153_33438[(2)] = inst_31145);

(statearr_31153_33438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (1))){
var state_31149__$1 = state_31149;
var statearr_31154_33439 = state_31149__$1;
(statearr_31154_33439[(2)] = null);

(statearr_31154_33439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (4))){
var inst_31130 = (state_31149[(7)]);
var inst_31130__$1 = (state_31149[(2)]);
var inst_31131 = (inst_31130__$1 == null);
var state_31149__$1 = (function (){var statearr_31155 = state_31149;
(statearr_31155[(7)] = inst_31130__$1);

return statearr_31155;
})();
if(cljs.core.truth_(inst_31131)){
var statearr_31156_33442 = state_31149__$1;
(statearr_31156_33442[(1)] = (5));

} else {
var statearr_31157_33443 = state_31149__$1;
(statearr_31157_33443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (6))){
var inst_31135 = (state_31149[(8)]);
var inst_31130 = (state_31149[(7)]);
var inst_31135__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31136 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31137 = [inst_31130,inst_31135__$1];
var inst_31138 = (new cljs.core.PersistentVector(null,2,(5),inst_31136,inst_31137,null));
var state_31149__$1 = (function (){var statearr_31161 = state_31149;
(statearr_31161[(8)] = inst_31135__$1);

return statearr_31161;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31149__$1,(8),jobs,inst_31138);
} else {
if((state_val_31150 === (3))){
var inst_31147 = (state_31149[(2)]);
var state_31149__$1 = state_31149;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31149__$1,inst_31147);
} else {
if((state_val_31150 === (2))){
var state_31149__$1 = state_31149;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31149__$1,(4),from);
} else {
if((state_val_31150 === (9))){
var inst_31142 = (state_31149[(2)]);
var state_31149__$1 = (function (){var statearr_31163 = state_31149;
(statearr_31163[(9)] = inst_31142);

return statearr_31163;
})();
var statearr_31164_33444 = state_31149__$1;
(statearr_31164_33444[(2)] = null);

(statearr_31164_33444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (5))){
var inst_31133 = cljs.core.async.close_BANG_(jobs);
var state_31149__$1 = state_31149;
var statearr_31166_33445 = state_31149__$1;
(statearr_31166_33445[(2)] = inst_31133);

(statearr_31166_33445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31150 === (8))){
var inst_31135 = (state_31149[(8)]);
var inst_31140 = (state_31149[(2)]);
var state_31149__$1 = (function (){var statearr_31167 = state_31149;
(statearr_31167[(10)] = inst_31140);

return statearr_31167;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31149__$1,(9),results,inst_31135);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__30594__auto___33437,jobs,results,process,async))
;
return ((function (switch__30275__auto__,c__30594__auto___33437,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____0 = (function (){
var statearr_31169 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31169[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__);

(statearr_31169[(1)] = (1));

return statearr_31169;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____1 = (function (state_31149){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_31149);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e31170){if((e31170 instanceof Object)){
var ex__30279__auto__ = e31170;
var statearr_31171_33448 = state_31149;
(statearr_31171_33448[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31170;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33449 = state_31149;
state_31149 = G__33449;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__ = function(state_31149){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____1.call(this,state_31149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto___33437,jobs,results,process,async))
})();
var state__30596__auto__ = (function (){var statearr_31172 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_31172[(6)] = c__30594__auto___33437);

return statearr_31172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto___33437,jobs,results,process,async))
);


var c__30594__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto__,jobs,results,process,async){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto__,jobs,results,process,async){
return (function (state_31210){
var state_val_31211 = (state_31210[(1)]);
if((state_val_31211 === (7))){
var inst_31206 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31213_33454 = state_31210__$1;
(statearr_31213_33454[(2)] = inst_31206);

(statearr_31213_33454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (20))){
var state_31210__$1 = state_31210;
var statearr_31214_33455 = state_31210__$1;
(statearr_31214_33455[(2)] = null);

(statearr_31214_33455[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (1))){
var state_31210__$1 = state_31210;
var statearr_31215_33456 = state_31210__$1;
(statearr_31215_33456[(2)] = null);

(statearr_31215_33456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (4))){
var inst_31175 = (state_31210[(7)]);
var inst_31175__$1 = (state_31210[(2)]);
var inst_31176 = (inst_31175__$1 == null);
var state_31210__$1 = (function (){var statearr_31216 = state_31210;
(statearr_31216[(7)] = inst_31175__$1);

return statearr_31216;
})();
if(cljs.core.truth_(inst_31176)){
var statearr_31217_33459 = state_31210__$1;
(statearr_31217_33459[(1)] = (5));

} else {
var statearr_31218_33460 = state_31210__$1;
(statearr_31218_33460[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (15))){
var inst_31188 = (state_31210[(8)]);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31210__$1,(18),to,inst_31188);
} else {
if((state_val_31211 === (21))){
var inst_31201 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31219_33463 = state_31210__$1;
(statearr_31219_33463[(2)] = inst_31201);

(statearr_31219_33463[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (13))){
var inst_31203 = (state_31210[(2)]);
var state_31210__$1 = (function (){var statearr_31220 = state_31210;
(statearr_31220[(9)] = inst_31203);

return statearr_31220;
})();
var statearr_31221_33464 = state_31210__$1;
(statearr_31221_33464[(2)] = null);

(statearr_31221_33464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (6))){
var inst_31175 = (state_31210[(7)]);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31210__$1,(11),inst_31175);
} else {
if((state_val_31211 === (17))){
var inst_31196 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31196)){
var statearr_31222_33467 = state_31210__$1;
(statearr_31222_33467[(1)] = (19));

} else {
var statearr_31224_33468 = state_31210__$1;
(statearr_31224_33468[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (3))){
var inst_31208 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31210__$1,inst_31208);
} else {
if((state_val_31211 === (12))){
var inst_31185 = (state_31210[(10)]);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31210__$1,(14),inst_31185);
} else {
if((state_val_31211 === (2))){
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31210__$1,(4),results);
} else {
if((state_val_31211 === (19))){
var state_31210__$1 = state_31210;
var statearr_31225_33471 = state_31210__$1;
(statearr_31225_33471[(2)] = null);

(statearr_31225_33471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (11))){
var inst_31185 = (state_31210[(2)]);
var state_31210__$1 = (function (){var statearr_31226 = state_31210;
(statearr_31226[(10)] = inst_31185);

return statearr_31226;
})();
var statearr_31227_33472 = state_31210__$1;
(statearr_31227_33472[(2)] = null);

(statearr_31227_33472[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (9))){
var state_31210__$1 = state_31210;
var statearr_31228_33473 = state_31210__$1;
(statearr_31228_33473[(2)] = null);

(statearr_31228_33473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (5))){
var state_31210__$1 = state_31210;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31232_33474 = state_31210__$1;
(statearr_31232_33474[(1)] = (8));

} else {
var statearr_31233_33475 = state_31210__$1;
(statearr_31233_33475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (14))){
var inst_31188 = (state_31210[(8)]);
var inst_31190 = (state_31210[(11)]);
var inst_31188__$1 = (state_31210[(2)]);
var inst_31189 = (inst_31188__$1 == null);
var inst_31190__$1 = cljs.core.not(inst_31189);
var state_31210__$1 = (function (){var statearr_31234 = state_31210;
(statearr_31234[(8)] = inst_31188__$1);

(statearr_31234[(11)] = inst_31190__$1);

return statearr_31234;
})();
if(inst_31190__$1){
var statearr_31235_33477 = state_31210__$1;
(statearr_31235_33477[(1)] = (15));

} else {
var statearr_31236_33478 = state_31210__$1;
(statearr_31236_33478[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (16))){
var inst_31190 = (state_31210[(11)]);
var state_31210__$1 = state_31210;
var statearr_31237_33479 = state_31210__$1;
(statearr_31237_33479[(2)] = inst_31190);

(statearr_31237_33479[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (10))){
var inst_31182 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31238_33480 = state_31210__$1;
(statearr_31238_33480[(2)] = inst_31182);

(statearr_31238_33480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (18))){
var inst_31193 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31239_33481 = state_31210__$1;
(statearr_31239_33481[(2)] = inst_31193);

(statearr_31239_33481[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (8))){
var inst_31179 = cljs.core.async.close_BANG_(to);
var state_31210__$1 = state_31210;
var statearr_31240_33482 = state_31210__$1;
(statearr_31240_33482[(2)] = inst_31179);

(statearr_31240_33482[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30594__auto__,jobs,results,process,async))
;
return ((function (switch__30275__auto__,c__30594__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____0 = (function (){
var statearr_31241 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__);

(statearr_31241[(1)] = (1));

return statearr_31241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____1 = (function (state_31210){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_31210);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e31242){if((e31242 instanceof Object)){
var ex__30279__auto__ = e31242;
var statearr_31244_33487 = state_31210;
(statearr_31244_33487[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31242;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33488 = state_31210;
state_31210 = G__33488;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__ = function(state_31210){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____1.call(this,state_31210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30276__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto__,jobs,results,process,async))
})();
var state__30596__auto__ = (function (){var statearr_31245 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_31245[(6)] = c__30594__auto__);

return statearr_31245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto__,jobs,results,process,async))
);

return c__30594__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31247 = arguments.length;
switch (G__31247) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31249 = arguments.length;
switch (G__31249) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31265 = arguments.length;
switch (G__31265) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30594__auto___33509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto___33509,tc,fc){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto___33509,tc,fc){
return (function (state_31291){
var state_val_31292 = (state_31291[(1)]);
if((state_val_31292 === (7))){
var inst_31287 = (state_31291[(2)]);
var state_31291__$1 = state_31291;
var statearr_31293_33513 = state_31291__$1;
(statearr_31293_33513[(2)] = inst_31287);

(statearr_31293_33513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31292 === (1))){
var state_31291__$1 = state_31291;
var statearr_31294_33514 = state_31291__$1;
(statearr_31294_33514[(2)] = null);

(statearr_31294_33514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31292 === (4))){
var inst_31268 = (state_31291[(7)]);
var inst_31268__$1 = (state_31291[(2)]);
var inst_31269 = (inst_31268__$1 == null);
var state_31291__$1 = (function (){var statearr_31296 = state_31291;
(statearr_31296[(7)] = inst_31268__$1);

return statearr_31296;
})();
if(cljs.core.truth_(inst_31269)){
var statearr_31299_33519 = state_31291__$1;
(statearr_31299_33519[(1)] = (5));

} else {
var statearr_31300_33520 = state_31291__$1;
(statearr_31300_33520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31292 === (13))){
var state_31291__$1 = state_31291;
var statearr_31303_33524 = state_31291__$1;
(statearr_31303_33524[(2)] = null);

(statearr_31303_33524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31292 === (6))){
var inst_31268 = (state_31291[(7)]);
var inst_31274 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31268) : p.call(null,inst_31268));
var state_31291__$1 = state_31291;
if(cljs.core.truth_(inst_31274)){
var statearr_31304_33525 = state_31291__$1;
(statearr_31304_33525[(1)] = (9));

} else {
var statearr_31308_33526 = state_31291__$1;
(statearr_31308_33526[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31292 === (3))){
var inst_31289 = (state_31291[(2)]);
var state_31291__$1 = state_31291;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31291__$1,inst_31289);
} else {
if((state_val_31292 === (12))){
var state_31291__$1 = state_31291;
var statearr_31312_33530 = state_31291__$1;
(statearr_31312_33530[(2)] = null);

(statearr_31312_33530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31292 === (2))){
var state_31291__$1 = state_31291;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31291__$1,(4),ch);
} else {
if((state_val_31292 === (11))){
var inst_31268 = (state_31291[(7)]);
var inst_31278 = (state_31291[(2)]);
var state_31291__$1 = state_31291;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31291__$1,(8),inst_31278,inst_31268);
} else {
if((state_val_31292 === (9))){
var state_31291__$1 = state_31291;
var statearr_31313_33534 = state_31291__$1;
(statearr_31313_33534[(2)] = tc);

(statearr_31313_33534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31292 === (5))){
var inst_31271 = cljs.core.async.close_BANG_(tc);
var inst_31272 = cljs.core.async.close_BANG_(fc);
var state_31291__$1 = (function (){var statearr_31314 = state_31291;
(statearr_31314[(8)] = inst_31271);

return statearr_31314;
})();
var statearr_31317_33538 = state_31291__$1;
(statearr_31317_33538[(2)] = inst_31272);

(statearr_31317_33538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31292 === (14))){
var inst_31285 = (state_31291[(2)]);
var state_31291__$1 = state_31291;
var statearr_31324_33539 = state_31291__$1;
(statearr_31324_33539[(2)] = inst_31285);

(statearr_31324_33539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31292 === (10))){
var state_31291__$1 = state_31291;
var statearr_31326_33540 = state_31291__$1;
(statearr_31326_33540[(2)] = fc);

(statearr_31326_33540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31292 === (8))){
var inst_31280 = (state_31291[(2)]);
var state_31291__$1 = state_31291;
if(cljs.core.truth_(inst_31280)){
var statearr_31331_33545 = state_31291__$1;
(statearr_31331_33545[(1)] = (12));

} else {
var statearr_31332_33546 = state_31291__$1;
(statearr_31332_33546[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30594__auto___33509,tc,fc))
;
return ((function (switch__30275__auto__,c__30594__auto___33509,tc,fc){
return (function() {
var cljs$core$async$state_machine__30276__auto__ = null;
var cljs$core$async$state_machine__30276__auto____0 = (function (){
var statearr_31337 = [null,null,null,null,null,null,null,null,null];
(statearr_31337[(0)] = cljs$core$async$state_machine__30276__auto__);

(statearr_31337[(1)] = (1));

return statearr_31337;
});
var cljs$core$async$state_machine__30276__auto____1 = (function (state_31291){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_31291);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e31341){if((e31341 instanceof Object)){
var ex__30279__auto__ = e31341;
var statearr_31342_33553 = state_31291;
(statearr_31342_33553[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31341;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33554 = state_31291;
state_31291 = G__33554;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$state_machine__30276__auto__ = function(state_31291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30276__auto____1.call(this,state_31291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30276__auto____0;
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30276__auto____1;
return cljs$core$async$state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto___33509,tc,fc))
})();
var state__30596__auto__ = (function (){var statearr_31347 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_31347[(6)] = c__30594__auto___33509);

return statearr_31347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto___33509,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30594__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto__){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto__){
return (function (state_31390){
var state_val_31391 = (state_31390[(1)]);
if((state_val_31391 === (7))){
var inst_31386 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31397_33567 = state_31390__$1;
(statearr_31397_33567[(2)] = inst_31386);

(statearr_31397_33567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (1))){
var inst_31361 = init;
var state_31390__$1 = (function (){var statearr_31398 = state_31390;
(statearr_31398[(7)] = inst_31361);

return statearr_31398;
})();
var statearr_31399_33568 = state_31390__$1;
(statearr_31399_33568[(2)] = null);

(statearr_31399_33568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (4))){
var inst_31365 = (state_31390[(8)]);
var inst_31365__$1 = (state_31390[(2)]);
var inst_31366 = (inst_31365__$1 == null);
var state_31390__$1 = (function (){var statearr_31403 = state_31390;
(statearr_31403[(8)] = inst_31365__$1);

return statearr_31403;
})();
if(cljs.core.truth_(inst_31366)){
var statearr_31404_33575 = state_31390__$1;
(statearr_31404_33575[(1)] = (5));

} else {
var statearr_31405_33576 = state_31390__$1;
(statearr_31405_33576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (6))){
var inst_31365 = (state_31390[(8)]);
var inst_31372 = (state_31390[(9)]);
var inst_31361 = (state_31390[(7)]);
var inst_31372__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31361,inst_31365) : f.call(null,inst_31361,inst_31365));
var inst_31373 = cljs.core.reduced_QMARK_(inst_31372__$1);
var state_31390__$1 = (function (){var statearr_31408 = state_31390;
(statearr_31408[(9)] = inst_31372__$1);

return statearr_31408;
})();
if(inst_31373){
var statearr_31409_33578 = state_31390__$1;
(statearr_31409_33578[(1)] = (8));

} else {
var statearr_31410_33579 = state_31390__$1;
(statearr_31410_33579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (3))){
var inst_31388 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31390__$1,inst_31388);
} else {
if((state_val_31391 === (2))){
var state_31390__$1 = state_31390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31390__$1,(4),ch);
} else {
if((state_val_31391 === (9))){
var inst_31372 = (state_31390[(9)]);
var inst_31361 = inst_31372;
var state_31390__$1 = (function (){var statearr_31411 = state_31390;
(statearr_31411[(7)] = inst_31361);

return statearr_31411;
})();
var statearr_31412_33580 = state_31390__$1;
(statearr_31412_33580[(2)] = null);

(statearr_31412_33580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (5))){
var inst_31361 = (state_31390[(7)]);
var state_31390__$1 = state_31390;
var statearr_31414_33581 = state_31390__$1;
(statearr_31414_33581[(2)] = inst_31361);

(statearr_31414_33581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (10))){
var inst_31384 = (state_31390[(2)]);
var state_31390__$1 = state_31390;
var statearr_31415_33582 = state_31390__$1;
(statearr_31415_33582[(2)] = inst_31384);

(statearr_31415_33582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31391 === (8))){
var inst_31372 = (state_31390[(9)]);
var inst_31376 = cljs.core.deref(inst_31372);
var state_31390__$1 = state_31390;
var statearr_31417_33583 = state_31390__$1;
(statearr_31417_33583[(2)] = inst_31376);

(statearr_31417_33583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__30594__auto__))
;
return ((function (switch__30275__auto__,c__30594__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30276__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30276__auto____0 = (function (){
var statearr_31418 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31418[(0)] = cljs$core$async$reduce_$_state_machine__30276__auto__);

(statearr_31418[(1)] = (1));

return statearr_31418;
});
var cljs$core$async$reduce_$_state_machine__30276__auto____1 = (function (state_31390){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_31390);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e31419){if((e31419 instanceof Object)){
var ex__30279__auto__ = e31419;
var statearr_31420_33584 = state_31390;
(statearr_31420_33584[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31419;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33585 = state_31390;
state_31390 = G__33585;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30276__auto__ = function(state_31390){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30276__auto____1.call(this,state_31390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30276__auto____0;
cljs$core$async$reduce_$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30276__auto____1;
return cljs$core$async$reduce_$_state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto__))
})();
var state__30596__auto__ = (function (){var statearr_31421 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_31421[(6)] = c__30594__auto__);

return statearr_31421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto__))
);

return c__30594__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30594__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto__,f__$1){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto__,f__$1){
return (function (state_31429){
var state_val_31430 = (state_31429[(1)]);
if((state_val_31430 === (1))){
var inst_31424 = cljs.core.async.reduce(f__$1,init,ch);
var state_31429__$1 = state_31429;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31429__$1,(2),inst_31424);
} else {
if((state_val_31430 === (2))){
var inst_31426 = (state_31429[(2)]);
var inst_31427 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31426) : f__$1.call(null,inst_31426));
var state_31429__$1 = state_31429;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31429__$1,inst_31427);
} else {
return null;
}
}
});})(c__30594__auto__,f__$1))
;
return ((function (switch__30275__auto__,c__30594__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30276__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30276__auto____0 = (function (){
var statearr_31434 = [null,null,null,null,null,null,null];
(statearr_31434[(0)] = cljs$core$async$transduce_$_state_machine__30276__auto__);

(statearr_31434[(1)] = (1));

return statearr_31434;
});
var cljs$core$async$transduce_$_state_machine__30276__auto____1 = (function (state_31429){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_31429);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e31435){if((e31435 instanceof Object)){
var ex__30279__auto__ = e31435;
var statearr_31437_33588 = state_31429;
(statearr_31437_33588[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31435;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33589 = state_31429;
state_31429 = G__33589;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30276__auto__ = function(state_31429){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30276__auto____1.call(this,state_31429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30276__auto____0;
cljs$core$async$transduce_$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30276__auto____1;
return cljs$core$async$transduce_$_state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto__,f__$1))
})();
var state__30596__auto__ = (function (){var statearr_31440 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_31440[(6)] = c__30594__auto__);

return statearr_31440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto__,f__$1))
);

return c__30594__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31442 = arguments.length;
switch (G__31442) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30594__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto__){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto__){
return (function (state_31469){
var state_val_31470 = (state_31469[(1)]);
if((state_val_31470 === (7))){
var inst_31451 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31483_33592 = state_31469__$1;
(statearr_31483_33592[(2)] = inst_31451);

(statearr_31483_33592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (1))){
var inst_31443 = cljs.core.seq(coll);
var inst_31446 = inst_31443;
var state_31469__$1 = (function (){var statearr_31492 = state_31469;
(statearr_31492[(7)] = inst_31446);

return statearr_31492;
})();
var statearr_31496_33595 = state_31469__$1;
(statearr_31496_33595[(2)] = null);

(statearr_31496_33595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (4))){
var inst_31446 = (state_31469[(7)]);
var inst_31449 = cljs.core.first(inst_31446);
var state_31469__$1 = state_31469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31469__$1,(7),ch,inst_31449);
} else {
if((state_val_31470 === (13))){
var inst_31463 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31501_33599 = state_31469__$1;
(statearr_31501_33599[(2)] = inst_31463);

(statearr_31501_33599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (6))){
var inst_31454 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
if(cljs.core.truth_(inst_31454)){
var statearr_31504_33600 = state_31469__$1;
(statearr_31504_33600[(1)] = (8));

} else {
var statearr_31506_33602 = state_31469__$1;
(statearr_31506_33602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (3))){
var inst_31467 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31469__$1,inst_31467);
} else {
if((state_val_31470 === (12))){
var state_31469__$1 = state_31469;
var statearr_31507_33603 = state_31469__$1;
(statearr_31507_33603[(2)] = null);

(statearr_31507_33603[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (2))){
var inst_31446 = (state_31469[(7)]);
var state_31469__$1 = state_31469;
if(cljs.core.truth_(inst_31446)){
var statearr_31508_33605 = state_31469__$1;
(statearr_31508_33605[(1)] = (4));

} else {
var statearr_31509_33606 = state_31469__$1;
(statearr_31509_33606[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (11))){
var inst_31460 = cljs.core.async.close_BANG_(ch);
var state_31469__$1 = state_31469;
var statearr_31510_33608 = state_31469__$1;
(statearr_31510_33608[(2)] = inst_31460);

(statearr_31510_33608[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (9))){
var state_31469__$1 = state_31469;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31511_33609 = state_31469__$1;
(statearr_31511_33609[(1)] = (11));

} else {
var statearr_31512_33610 = state_31469__$1;
(statearr_31512_33610[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (5))){
var inst_31446 = (state_31469[(7)]);
var state_31469__$1 = state_31469;
var statearr_31513_33611 = state_31469__$1;
(statearr_31513_33611[(2)] = inst_31446);

(statearr_31513_33611[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (10))){
var inst_31465 = (state_31469[(2)]);
var state_31469__$1 = state_31469;
var statearr_31516_33612 = state_31469__$1;
(statearr_31516_33612[(2)] = inst_31465);

(statearr_31516_33612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31470 === (8))){
var inst_31446 = (state_31469[(7)]);
var inst_31456 = cljs.core.next(inst_31446);
var inst_31446__$1 = inst_31456;
var state_31469__$1 = (function (){var statearr_31517 = state_31469;
(statearr_31517[(7)] = inst_31446__$1);

return statearr_31517;
})();
var statearr_31518_33613 = state_31469__$1;
(statearr_31518_33613[(2)] = null);

(statearr_31518_33613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30594__auto__))
;
return ((function (switch__30275__auto__,c__30594__auto__){
return (function() {
var cljs$core$async$state_machine__30276__auto__ = null;
var cljs$core$async$state_machine__30276__auto____0 = (function (){
var statearr_31519 = [null,null,null,null,null,null,null,null];
(statearr_31519[(0)] = cljs$core$async$state_machine__30276__auto__);

(statearr_31519[(1)] = (1));

return statearr_31519;
});
var cljs$core$async$state_machine__30276__auto____1 = (function (state_31469){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_31469);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e31520){if((e31520 instanceof Object)){
var ex__30279__auto__ = e31520;
var statearr_31521_33614 = state_31469;
(statearr_31521_33614[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31520;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33615 = state_31469;
state_31469 = G__33615;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$state_machine__30276__auto__ = function(state_31469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30276__auto____1.call(this,state_31469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30276__auto____0;
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30276__auto____1;
return cljs$core$async$state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto__))
})();
var state__30596__auto__ = (function (){var statearr_31522 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_31522[(6)] = c__30594__auto__);

return statearr_31522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto__))
);

return c__30594__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31544 = (function (ch,cs,meta31545){
this.ch = ch;
this.cs = cs;
this.meta31545 = meta31545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31546,meta31545__$1){
var self__ = this;
var _31546__$1 = this;
return (new cljs.core.async.t_cljs$core$async31544(self__.ch,self__.cs,meta31545__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31546){
var self__ = this;
var _31546__$1 = this;
return self__.meta31545;
});})(cs))
;

cljs.core.async.t_cljs$core$async31544.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31544.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31544.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31544.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31544.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31544.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31544.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31545","meta31545",547790322,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31544";

cljs.core.async.t_cljs$core$async31544.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31544");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31544.
 */
cljs.core.async.__GT_t_cljs$core$async31544 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31544(ch__$1,cs__$1,meta31545){
return (new cljs.core.async.t_cljs$core$async31544(ch__$1,cs__$1,meta31545));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31544(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30594__auto___33643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto___33643,cs,m,dchan,dctr,done){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto___33643,cs,m,dchan,dctr,done){
return (function (state_31721){
var state_val_31723 = (state_31721[(1)]);
if((state_val_31723 === (7))){
var inst_31711 = (state_31721[(2)]);
var state_31721__$1 = state_31721;
var statearr_31724_33644 = state_31721__$1;
(statearr_31724_33644[(2)] = inst_31711);

(statearr_31724_33644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (20))){
var inst_31603 = (state_31721[(7)]);
var inst_31616 = cljs.core.first(inst_31603);
var inst_31617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31616,(0),null);
var inst_31618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31616,(1),null);
var state_31721__$1 = (function (){var statearr_31725 = state_31721;
(statearr_31725[(8)] = inst_31617);

return statearr_31725;
})();
if(cljs.core.truth_(inst_31618)){
var statearr_31726_33645 = state_31721__$1;
(statearr_31726_33645[(1)] = (22));

} else {
var statearr_31727_33646 = state_31721__$1;
(statearr_31727_33646[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (27))){
var inst_31650 = (state_31721[(9)]);
var inst_31655 = (state_31721[(10)]);
var inst_31648 = (state_31721[(11)]);
var inst_31571 = (state_31721[(12)]);
var inst_31655__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31648,inst_31650);
var inst_31656 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31655__$1,inst_31571,done);
var state_31721__$1 = (function (){var statearr_31729 = state_31721;
(statearr_31729[(10)] = inst_31655__$1);

return statearr_31729;
})();
if(cljs.core.truth_(inst_31656)){
var statearr_31730_33647 = state_31721__$1;
(statearr_31730_33647[(1)] = (30));

} else {
var statearr_31731_33648 = state_31721__$1;
(statearr_31731_33648[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (1))){
var state_31721__$1 = state_31721;
var statearr_31732_33649 = state_31721__$1;
(statearr_31732_33649[(2)] = null);

(statearr_31732_33649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (24))){
var inst_31603 = (state_31721[(7)]);
var inst_31623 = (state_31721[(2)]);
var inst_31624 = cljs.core.next(inst_31603);
var inst_31580 = inst_31624;
var inst_31581 = null;
var inst_31582 = (0);
var inst_31583 = (0);
var state_31721__$1 = (function (){var statearr_31734 = state_31721;
(statearr_31734[(13)] = inst_31623);

(statearr_31734[(14)] = inst_31582);

(statearr_31734[(15)] = inst_31580);

(statearr_31734[(16)] = inst_31581);

(statearr_31734[(17)] = inst_31583);

return statearr_31734;
})();
var statearr_31735_33650 = state_31721__$1;
(statearr_31735_33650[(2)] = null);

(statearr_31735_33650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (39))){
var state_31721__$1 = state_31721;
var statearr_31739_33651 = state_31721__$1;
(statearr_31739_33651[(2)] = null);

(statearr_31739_33651[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (4))){
var inst_31571 = (state_31721[(12)]);
var inst_31571__$1 = (state_31721[(2)]);
var inst_31572 = (inst_31571__$1 == null);
var state_31721__$1 = (function (){var statearr_31740 = state_31721;
(statearr_31740[(12)] = inst_31571__$1);

return statearr_31740;
})();
if(cljs.core.truth_(inst_31572)){
var statearr_31741_33658 = state_31721__$1;
(statearr_31741_33658[(1)] = (5));

} else {
var statearr_31742_33659 = state_31721__$1;
(statearr_31742_33659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (15))){
var inst_31582 = (state_31721[(14)]);
var inst_31580 = (state_31721[(15)]);
var inst_31581 = (state_31721[(16)]);
var inst_31583 = (state_31721[(17)]);
var inst_31599 = (state_31721[(2)]);
var inst_31600 = (inst_31583 + (1));
var tmp31736 = inst_31582;
var tmp31737 = inst_31580;
var tmp31738 = inst_31581;
var inst_31580__$1 = tmp31737;
var inst_31581__$1 = tmp31738;
var inst_31582__$1 = tmp31736;
var inst_31583__$1 = inst_31600;
var state_31721__$1 = (function (){var statearr_31743 = state_31721;
(statearr_31743[(14)] = inst_31582__$1);

(statearr_31743[(18)] = inst_31599);

(statearr_31743[(15)] = inst_31580__$1);

(statearr_31743[(16)] = inst_31581__$1);

(statearr_31743[(17)] = inst_31583__$1);

return statearr_31743;
})();
var statearr_31747_33660 = state_31721__$1;
(statearr_31747_33660[(2)] = null);

(statearr_31747_33660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (21))){
var inst_31627 = (state_31721[(2)]);
var state_31721__$1 = state_31721;
var statearr_31751_33661 = state_31721__$1;
(statearr_31751_33661[(2)] = inst_31627);

(statearr_31751_33661[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (31))){
var inst_31655 = (state_31721[(10)]);
var inst_31659 = done(null);
var inst_31660 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31655);
var state_31721__$1 = (function (){var statearr_31754 = state_31721;
(statearr_31754[(19)] = inst_31659);

return statearr_31754;
})();
var statearr_31755_33662 = state_31721__$1;
(statearr_31755_33662[(2)] = inst_31660);

(statearr_31755_33662[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (32))){
var inst_31649 = (state_31721[(20)]);
var inst_31650 = (state_31721[(9)]);
var inst_31647 = (state_31721[(21)]);
var inst_31648 = (state_31721[(11)]);
var inst_31662 = (state_31721[(2)]);
var inst_31663 = (inst_31650 + (1));
var tmp31748 = inst_31649;
var tmp31749 = inst_31647;
var tmp31750 = inst_31648;
var inst_31647__$1 = tmp31749;
var inst_31648__$1 = tmp31750;
var inst_31649__$1 = tmp31748;
var inst_31650__$1 = inst_31663;
var state_31721__$1 = (function (){var statearr_31758 = state_31721;
(statearr_31758[(20)] = inst_31649__$1);

(statearr_31758[(9)] = inst_31650__$1);

(statearr_31758[(21)] = inst_31647__$1);

(statearr_31758[(11)] = inst_31648__$1);

(statearr_31758[(22)] = inst_31662);

return statearr_31758;
})();
var statearr_31762_33663 = state_31721__$1;
(statearr_31762_33663[(2)] = null);

(statearr_31762_33663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (40))){
var inst_31675 = (state_31721[(23)]);
var inst_31683 = done(null);
var inst_31684 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31675);
var state_31721__$1 = (function (){var statearr_31764 = state_31721;
(statearr_31764[(24)] = inst_31683);

return statearr_31764;
})();
var statearr_31765_33670 = state_31721__$1;
(statearr_31765_33670[(2)] = inst_31684);

(statearr_31765_33670[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (33))){
var inst_31666 = (state_31721[(25)]);
var inst_31668 = cljs.core.chunked_seq_QMARK_(inst_31666);
var state_31721__$1 = state_31721;
if(inst_31668){
var statearr_31769_33671 = state_31721__$1;
(statearr_31769_33671[(1)] = (36));

} else {
var statearr_31770_33672 = state_31721__$1;
(statearr_31770_33672[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (13))){
var inst_31592 = (state_31721[(26)]);
var inst_31596 = cljs.core.async.close_BANG_(inst_31592);
var state_31721__$1 = state_31721;
var statearr_31771_33673 = state_31721__$1;
(statearr_31771_33673[(2)] = inst_31596);

(statearr_31771_33673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (22))){
var inst_31617 = (state_31721[(8)]);
var inst_31620 = cljs.core.async.close_BANG_(inst_31617);
var state_31721__$1 = state_31721;
var statearr_31775_33674 = state_31721__$1;
(statearr_31775_33674[(2)] = inst_31620);

(statearr_31775_33674[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (36))){
var inst_31666 = (state_31721[(25)]);
var inst_31670 = cljs.core.chunk_first(inst_31666);
var inst_31671 = cljs.core.chunk_rest(inst_31666);
var inst_31672 = cljs.core.count(inst_31670);
var inst_31647 = inst_31671;
var inst_31648 = inst_31670;
var inst_31649 = inst_31672;
var inst_31650 = (0);
var state_31721__$1 = (function (){var statearr_31776 = state_31721;
(statearr_31776[(20)] = inst_31649);

(statearr_31776[(9)] = inst_31650);

(statearr_31776[(21)] = inst_31647);

(statearr_31776[(11)] = inst_31648);

return statearr_31776;
})();
var statearr_31777_33675 = state_31721__$1;
(statearr_31777_33675[(2)] = null);

(statearr_31777_33675[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (41))){
var inst_31666 = (state_31721[(25)]);
var inst_31686 = (state_31721[(2)]);
var inst_31687 = cljs.core.next(inst_31666);
var inst_31647 = inst_31687;
var inst_31648 = null;
var inst_31649 = (0);
var inst_31650 = (0);
var state_31721__$1 = (function (){var statearr_31779 = state_31721;
(statearr_31779[(20)] = inst_31649);

(statearr_31779[(9)] = inst_31650);

(statearr_31779[(21)] = inst_31647);

(statearr_31779[(11)] = inst_31648);

(statearr_31779[(27)] = inst_31686);

return statearr_31779;
})();
var statearr_31781_33676 = state_31721__$1;
(statearr_31781_33676[(2)] = null);

(statearr_31781_33676[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (43))){
var state_31721__$1 = state_31721;
var statearr_31782_33677 = state_31721__$1;
(statearr_31782_33677[(2)] = null);

(statearr_31782_33677[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (29))){
var inst_31695 = (state_31721[(2)]);
var state_31721__$1 = state_31721;
var statearr_31783_33678 = state_31721__$1;
(statearr_31783_33678[(2)] = inst_31695);

(statearr_31783_33678[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (44))){
var inst_31708 = (state_31721[(2)]);
var state_31721__$1 = (function (){var statearr_31784 = state_31721;
(statearr_31784[(28)] = inst_31708);

return statearr_31784;
})();
var statearr_31786_33679 = state_31721__$1;
(statearr_31786_33679[(2)] = null);

(statearr_31786_33679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (6))){
var inst_31639 = (state_31721[(29)]);
var inst_31638 = cljs.core.deref(cs);
var inst_31639__$1 = cljs.core.keys(inst_31638);
var inst_31640 = cljs.core.count(inst_31639__$1);
var inst_31641 = cljs.core.reset_BANG_(dctr,inst_31640);
var inst_31646 = cljs.core.seq(inst_31639__$1);
var inst_31647 = inst_31646;
var inst_31648 = null;
var inst_31649 = (0);
var inst_31650 = (0);
var state_31721__$1 = (function (){var statearr_31788 = state_31721;
(statearr_31788[(20)] = inst_31649);

(statearr_31788[(9)] = inst_31650);

(statearr_31788[(21)] = inst_31647);

(statearr_31788[(11)] = inst_31648);

(statearr_31788[(30)] = inst_31641);

(statearr_31788[(29)] = inst_31639__$1);

return statearr_31788;
})();
var statearr_31789_33680 = state_31721__$1;
(statearr_31789_33680[(2)] = null);

(statearr_31789_33680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (28))){
var inst_31647 = (state_31721[(21)]);
var inst_31666 = (state_31721[(25)]);
var inst_31666__$1 = cljs.core.seq(inst_31647);
var state_31721__$1 = (function (){var statearr_31790 = state_31721;
(statearr_31790[(25)] = inst_31666__$1);

return statearr_31790;
})();
if(inst_31666__$1){
var statearr_31791_33681 = state_31721__$1;
(statearr_31791_33681[(1)] = (33));

} else {
var statearr_31794_33682 = state_31721__$1;
(statearr_31794_33682[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (25))){
var inst_31649 = (state_31721[(20)]);
var inst_31650 = (state_31721[(9)]);
var inst_31652 = (inst_31650 < inst_31649);
var inst_31653 = inst_31652;
var state_31721__$1 = state_31721;
if(cljs.core.truth_(inst_31653)){
var statearr_31797_33683 = state_31721__$1;
(statearr_31797_33683[(1)] = (27));

} else {
var statearr_31798_33685 = state_31721__$1;
(statearr_31798_33685[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (34))){
var state_31721__$1 = state_31721;
var statearr_31799_33686 = state_31721__$1;
(statearr_31799_33686[(2)] = null);

(statearr_31799_33686[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (17))){
var state_31721__$1 = state_31721;
var statearr_31800_33687 = state_31721__$1;
(statearr_31800_33687[(2)] = null);

(statearr_31800_33687[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (3))){
var inst_31713 = (state_31721[(2)]);
var state_31721__$1 = state_31721;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31721__$1,inst_31713);
} else {
if((state_val_31723 === (12))){
var inst_31632 = (state_31721[(2)]);
var state_31721__$1 = state_31721;
var statearr_31804_33689 = state_31721__$1;
(statearr_31804_33689[(2)] = inst_31632);

(statearr_31804_33689[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (2))){
var state_31721__$1 = state_31721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31721__$1,(4),ch);
} else {
if((state_val_31723 === (23))){
var state_31721__$1 = state_31721;
var statearr_31806_33694 = state_31721__$1;
(statearr_31806_33694[(2)] = null);

(statearr_31806_33694[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (35))){
var inst_31693 = (state_31721[(2)]);
var state_31721__$1 = state_31721;
var statearr_31810_33695 = state_31721__$1;
(statearr_31810_33695[(2)] = inst_31693);

(statearr_31810_33695[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (19))){
var inst_31603 = (state_31721[(7)]);
var inst_31608 = cljs.core.chunk_first(inst_31603);
var inst_31609 = cljs.core.chunk_rest(inst_31603);
var inst_31610 = cljs.core.count(inst_31608);
var inst_31580 = inst_31609;
var inst_31581 = inst_31608;
var inst_31582 = inst_31610;
var inst_31583 = (0);
var state_31721__$1 = (function (){var statearr_31811 = state_31721;
(statearr_31811[(14)] = inst_31582);

(statearr_31811[(15)] = inst_31580);

(statearr_31811[(16)] = inst_31581);

(statearr_31811[(17)] = inst_31583);

return statearr_31811;
})();
var statearr_31812_33696 = state_31721__$1;
(statearr_31812_33696[(2)] = null);

(statearr_31812_33696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (11))){
var inst_31580 = (state_31721[(15)]);
var inst_31603 = (state_31721[(7)]);
var inst_31603__$1 = cljs.core.seq(inst_31580);
var state_31721__$1 = (function (){var statearr_31813 = state_31721;
(statearr_31813[(7)] = inst_31603__$1);

return statearr_31813;
})();
if(inst_31603__$1){
var statearr_31814_33697 = state_31721__$1;
(statearr_31814_33697[(1)] = (16));

} else {
var statearr_31815_33698 = state_31721__$1;
(statearr_31815_33698[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (9))){
var inst_31634 = (state_31721[(2)]);
var state_31721__$1 = state_31721;
var statearr_31816_33699 = state_31721__$1;
(statearr_31816_33699[(2)] = inst_31634);

(statearr_31816_33699[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (5))){
var inst_31578 = cljs.core.deref(cs);
var inst_31579 = cljs.core.seq(inst_31578);
var inst_31580 = inst_31579;
var inst_31581 = null;
var inst_31582 = (0);
var inst_31583 = (0);
var state_31721__$1 = (function (){var statearr_31820 = state_31721;
(statearr_31820[(14)] = inst_31582);

(statearr_31820[(15)] = inst_31580);

(statearr_31820[(16)] = inst_31581);

(statearr_31820[(17)] = inst_31583);

return statearr_31820;
})();
var statearr_31822_33700 = state_31721__$1;
(statearr_31822_33700[(2)] = null);

(statearr_31822_33700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (14))){
var state_31721__$1 = state_31721;
var statearr_31823_33703 = state_31721__$1;
(statearr_31823_33703[(2)] = null);

(statearr_31823_33703[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (45))){
var inst_31705 = (state_31721[(2)]);
var state_31721__$1 = state_31721;
var statearr_31824_33704 = state_31721__$1;
(statearr_31824_33704[(2)] = inst_31705);

(statearr_31824_33704[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (26))){
var inst_31639 = (state_31721[(29)]);
var inst_31697 = (state_31721[(2)]);
var inst_31698 = cljs.core.seq(inst_31639);
var state_31721__$1 = (function (){var statearr_31825 = state_31721;
(statearr_31825[(31)] = inst_31697);

return statearr_31825;
})();
if(inst_31698){
var statearr_31826_33706 = state_31721__$1;
(statearr_31826_33706[(1)] = (42));

} else {
var statearr_31827_33707 = state_31721__$1;
(statearr_31827_33707[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (16))){
var inst_31603 = (state_31721[(7)]);
var inst_31606 = cljs.core.chunked_seq_QMARK_(inst_31603);
var state_31721__$1 = state_31721;
if(inst_31606){
var statearr_31828_33709 = state_31721__$1;
(statearr_31828_33709[(1)] = (19));

} else {
var statearr_31829_33710 = state_31721__$1;
(statearr_31829_33710[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (38))){
var inst_31690 = (state_31721[(2)]);
var state_31721__$1 = state_31721;
var statearr_31830_33711 = state_31721__$1;
(statearr_31830_33711[(2)] = inst_31690);

(statearr_31830_33711[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (30))){
var state_31721__$1 = state_31721;
var statearr_31831_33712 = state_31721__$1;
(statearr_31831_33712[(2)] = null);

(statearr_31831_33712[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (10))){
var inst_31581 = (state_31721[(16)]);
var inst_31583 = (state_31721[(17)]);
var inst_31591 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31581,inst_31583);
var inst_31592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31591,(0),null);
var inst_31593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31591,(1),null);
var state_31721__$1 = (function (){var statearr_31832 = state_31721;
(statearr_31832[(26)] = inst_31592);

return statearr_31832;
})();
if(cljs.core.truth_(inst_31593)){
var statearr_31833_33715 = state_31721__$1;
(statearr_31833_33715[(1)] = (13));

} else {
var statearr_31834_33716 = state_31721__$1;
(statearr_31834_33716[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (18))){
var inst_31630 = (state_31721[(2)]);
var state_31721__$1 = state_31721;
var statearr_31836_33717 = state_31721__$1;
(statearr_31836_33717[(2)] = inst_31630);

(statearr_31836_33717[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (42))){
var state_31721__$1 = state_31721;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31721__$1,(45),dchan);
} else {
if((state_val_31723 === (37))){
var inst_31666 = (state_31721[(25)]);
var inst_31571 = (state_31721[(12)]);
var inst_31675 = (state_31721[(23)]);
var inst_31675__$1 = cljs.core.first(inst_31666);
var inst_31680 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31675__$1,inst_31571,done);
var state_31721__$1 = (function (){var statearr_31838 = state_31721;
(statearr_31838[(23)] = inst_31675__$1);

return statearr_31838;
})();
if(cljs.core.truth_(inst_31680)){
var statearr_31839_33718 = state_31721__$1;
(statearr_31839_33718[(1)] = (39));

} else {
var statearr_31840_33719 = state_31721__$1;
(statearr_31840_33719[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31723 === (8))){
var inst_31582 = (state_31721[(14)]);
var inst_31583 = (state_31721[(17)]);
var inst_31585 = (inst_31583 < inst_31582);
var inst_31586 = inst_31585;
var state_31721__$1 = state_31721;
if(cljs.core.truth_(inst_31586)){
var statearr_31841_33720 = state_31721__$1;
(statearr_31841_33720[(1)] = (10));

} else {
var statearr_31842_33721 = state_31721__$1;
(statearr_31842_33721[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30594__auto___33643,cs,m,dchan,dctr,done))
;
return ((function (switch__30275__auto__,c__30594__auto___33643,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30276__auto__ = null;
var cljs$core$async$mult_$_state_machine__30276__auto____0 = (function (){
var statearr_31849 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31849[(0)] = cljs$core$async$mult_$_state_machine__30276__auto__);

(statearr_31849[(1)] = (1));

return statearr_31849;
});
var cljs$core$async$mult_$_state_machine__30276__auto____1 = (function (state_31721){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_31721);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e31850){if((e31850 instanceof Object)){
var ex__30279__auto__ = e31850;
var statearr_31851_33722 = state_31721;
(statearr_31851_33722[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31721);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31850;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33723 = state_31721;
state_31721 = G__33723;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30276__auto__ = function(state_31721){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30276__auto____1.call(this,state_31721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30276__auto____0;
cljs$core$async$mult_$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30276__auto____1;
return cljs$core$async$mult_$_state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto___33643,cs,m,dchan,dctr,done))
})();
var state__30596__auto__ = (function (){var statearr_31854 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_31854[(6)] = c__30594__auto___33643);

return statearr_31854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto___33643,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__31856 = arguments.length;
switch (G__31856) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33728 = arguments.length;
var i__4731__auto___33729 = (0);
while(true){
if((i__4731__auto___33729 < len__4730__auto___33728)){
args__4736__auto__.push((arguments[i__4731__auto___33729]));

var G__33730 = (i__4731__auto___33729 + (1));
i__4731__auto___33729 = G__33730;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31884){
var map__31886 = p__31884;
var map__31886__$1 = (((((!((map__31886 == null))))?(((((map__31886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31886):map__31886);
var opts = map__31886__$1;
var statearr_31892_33735 = state;
(statearr_31892_33735[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__31886,map__31886__$1,opts){
return (function (val){
var statearr_31893_33736 = state;
(statearr_31893_33736[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31886,map__31886__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_31894_33737 = state;
(statearr_31894_33737[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31875){
var G__31876 = cljs.core.first(seq31875);
var seq31875__$1 = cljs.core.next(seq31875);
var G__31877 = cljs.core.first(seq31875__$1);
var seq31875__$2 = cljs.core.next(seq31875__$1);
var G__31878 = cljs.core.first(seq31875__$2);
var seq31875__$3 = cljs.core.next(seq31875__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31876,G__31877,G__31878,seq31875__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31899 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31900){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31900 = meta31900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31901,meta31900__$1){
var self__ = this;
var _31901__$1 = this;
return (new cljs.core.async.t_cljs$core$async31899(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31900__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31899.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31901){
var self__ = this;
var _31901__$1 = this;
return self__.meta31900;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31899.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31899.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31899.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31899.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31899.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31899.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31899.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31899.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31899.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31900","meta31900",720830989,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31899.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31899";

cljs.core.async.t_cljs$core$async31899.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31899");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31899.
 */
cljs.core.async.__GT_t_cljs$core$async31899 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31899(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31900){
return (new cljs.core.async.t_cljs$core$async31899(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31900));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31899(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30594__auto___33758 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto___33758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto___33758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32012){
var state_val_32013 = (state_32012[(1)]);
if((state_val_32013 === (7))){
var inst_31926 = (state_32012[(2)]);
var state_32012__$1 = state_32012;
var statearr_32020_33761 = state_32012__$1;
(statearr_32020_33761[(2)] = inst_31926);

(statearr_32020_33761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (20))){
var inst_31939 = (state_32012[(7)]);
var state_32012__$1 = state_32012;
var statearr_32021_33763 = state_32012__$1;
(statearr_32021_33763[(2)] = inst_31939);

(statearr_32021_33763[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (27))){
var state_32012__$1 = state_32012;
var statearr_32022_33764 = state_32012__$1;
(statearr_32022_33764[(2)] = null);

(statearr_32022_33764[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (1))){
var inst_31912 = (state_32012[(8)]);
var inst_31912__$1 = calc_state();
var inst_31915 = (inst_31912__$1 == null);
var inst_31916 = cljs.core.not(inst_31915);
var state_32012__$1 = (function (){var statearr_32024 = state_32012;
(statearr_32024[(8)] = inst_31912__$1);

return statearr_32024;
})();
if(inst_31916){
var statearr_32029_33766 = state_32012__$1;
(statearr_32029_33766[(1)] = (2));

} else {
var statearr_32030_33767 = state_32012__$1;
(statearr_32030_33767[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (24))){
var inst_31963 = (state_32012[(9)]);
var inst_31986 = (state_32012[(10)]);
var inst_31972 = (state_32012[(11)]);
var inst_31986__$1 = (inst_31963.cljs$core$IFn$_invoke$arity$1 ? inst_31963.cljs$core$IFn$_invoke$arity$1(inst_31972) : inst_31963.call(null,inst_31972));
var state_32012__$1 = (function (){var statearr_32058 = state_32012;
(statearr_32058[(10)] = inst_31986__$1);

return statearr_32058;
})();
if(cljs.core.truth_(inst_31986__$1)){
var statearr_32060_33770 = state_32012__$1;
(statearr_32060_33770[(1)] = (29));

} else {
var statearr_32061_33771 = state_32012__$1;
(statearr_32061_33771[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (4))){
var inst_31930 = (state_32012[(2)]);
var state_32012__$1 = state_32012;
if(cljs.core.truth_(inst_31930)){
var statearr_32062_33775 = state_32012__$1;
(statearr_32062_33775[(1)] = (8));

} else {
var statearr_32063_33776 = state_32012__$1;
(statearr_32063_33776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (15))){
var inst_31957 = (state_32012[(2)]);
var state_32012__$1 = state_32012;
if(cljs.core.truth_(inst_31957)){
var statearr_32065_33777 = state_32012__$1;
(statearr_32065_33777[(1)] = (19));

} else {
var statearr_32066_33778 = state_32012__$1;
(statearr_32066_33778[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (21))){
var inst_31962 = (state_32012[(12)]);
var inst_31962__$1 = (state_32012[(2)]);
var inst_31963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31962__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31962__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31965 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31962__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32012__$1 = (function (){var statearr_32071 = state_32012;
(statearr_32071[(9)] = inst_31963);

(statearr_32071[(12)] = inst_31962__$1);

(statearr_32071[(13)] = inst_31964);

return statearr_32071;
})();
return cljs.core.async.ioc_alts_BANG_(state_32012__$1,(22),inst_31965);
} else {
if((state_val_32013 === (31))){
var inst_31994 = (state_32012[(2)]);
var state_32012__$1 = state_32012;
if(cljs.core.truth_(inst_31994)){
var statearr_32078_33782 = state_32012__$1;
(statearr_32078_33782[(1)] = (32));

} else {
var statearr_32079_33783 = state_32012__$1;
(statearr_32079_33783[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (32))){
var inst_31971 = (state_32012[(14)]);
var state_32012__$1 = state_32012;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32012__$1,(35),out,inst_31971);
} else {
if((state_val_32013 === (33))){
var inst_31962 = (state_32012[(12)]);
var inst_31939 = inst_31962;
var state_32012__$1 = (function (){var statearr_32082 = state_32012;
(statearr_32082[(7)] = inst_31939);

return statearr_32082;
})();
var statearr_32084_33784 = state_32012__$1;
(statearr_32084_33784[(2)] = null);

(statearr_32084_33784[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (13))){
var inst_31939 = (state_32012[(7)]);
var inst_31946 = inst_31939.cljs$lang$protocol_mask$partition0$;
var inst_31947 = (inst_31946 & (64));
var inst_31948 = inst_31939.cljs$core$ISeq$;
var inst_31949 = (cljs.core.PROTOCOL_SENTINEL === inst_31948);
var inst_31950 = ((inst_31947) || (inst_31949));
var state_32012__$1 = state_32012;
if(cljs.core.truth_(inst_31950)){
var statearr_32088_33785 = state_32012__$1;
(statearr_32088_33785[(1)] = (16));

} else {
var statearr_32090_33786 = state_32012__$1;
(statearr_32090_33786[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (22))){
var inst_31971 = (state_32012[(14)]);
var inst_31972 = (state_32012[(11)]);
var inst_31970 = (state_32012[(2)]);
var inst_31971__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31970,(0),null);
var inst_31972__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31970,(1),null);
var inst_31973 = (inst_31971__$1 == null);
var inst_31974 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31972__$1,change);
var inst_31975 = ((inst_31973) || (inst_31974));
var state_32012__$1 = (function (){var statearr_32091 = state_32012;
(statearr_32091[(14)] = inst_31971__$1);

(statearr_32091[(11)] = inst_31972__$1);

return statearr_32091;
})();
if(cljs.core.truth_(inst_31975)){
var statearr_32093_33787 = state_32012__$1;
(statearr_32093_33787[(1)] = (23));

} else {
var statearr_32094_33788 = state_32012__$1;
(statearr_32094_33788[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (36))){
var inst_31962 = (state_32012[(12)]);
var inst_31939 = inst_31962;
var state_32012__$1 = (function (){var statearr_32097 = state_32012;
(statearr_32097[(7)] = inst_31939);

return statearr_32097;
})();
var statearr_32098_33789 = state_32012__$1;
(statearr_32098_33789[(2)] = null);

(statearr_32098_33789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (29))){
var inst_31986 = (state_32012[(10)]);
var state_32012__$1 = state_32012;
var statearr_32101_33790 = state_32012__$1;
(statearr_32101_33790[(2)] = inst_31986);

(statearr_32101_33790[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (6))){
var state_32012__$1 = state_32012;
var statearr_32103_33795 = state_32012__$1;
(statearr_32103_33795[(2)] = false);

(statearr_32103_33795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (28))){
var inst_31982 = (state_32012[(2)]);
var inst_31983 = calc_state();
var inst_31939 = inst_31983;
var state_32012__$1 = (function (){var statearr_32104 = state_32012;
(statearr_32104[(7)] = inst_31939);

(statearr_32104[(15)] = inst_31982);

return statearr_32104;
})();
var statearr_32105_33796 = state_32012__$1;
(statearr_32105_33796[(2)] = null);

(statearr_32105_33796[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (25))){
var inst_32008 = (state_32012[(2)]);
var state_32012__$1 = state_32012;
var statearr_32106_33797 = state_32012__$1;
(statearr_32106_33797[(2)] = inst_32008);

(statearr_32106_33797[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (34))){
var inst_32006 = (state_32012[(2)]);
var state_32012__$1 = state_32012;
var statearr_32107_33798 = state_32012__$1;
(statearr_32107_33798[(2)] = inst_32006);

(statearr_32107_33798[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (17))){
var state_32012__$1 = state_32012;
var statearr_32109_33799 = state_32012__$1;
(statearr_32109_33799[(2)] = false);

(statearr_32109_33799[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (3))){
var state_32012__$1 = state_32012;
var statearr_32114_33800 = state_32012__$1;
(statearr_32114_33800[(2)] = false);

(statearr_32114_33800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (12))){
var inst_32010 = (state_32012[(2)]);
var state_32012__$1 = state_32012;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32012__$1,inst_32010);
} else {
if((state_val_32013 === (2))){
var inst_31912 = (state_32012[(8)]);
var inst_31918 = inst_31912.cljs$lang$protocol_mask$partition0$;
var inst_31919 = (inst_31918 & (64));
var inst_31920 = inst_31912.cljs$core$ISeq$;
var inst_31921 = (cljs.core.PROTOCOL_SENTINEL === inst_31920);
var inst_31922 = ((inst_31919) || (inst_31921));
var state_32012__$1 = state_32012;
if(cljs.core.truth_(inst_31922)){
var statearr_32115_33801 = state_32012__$1;
(statearr_32115_33801[(1)] = (5));

} else {
var statearr_32117_33802 = state_32012__$1;
(statearr_32117_33802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (23))){
var inst_31971 = (state_32012[(14)]);
var inst_31977 = (inst_31971 == null);
var state_32012__$1 = state_32012;
if(cljs.core.truth_(inst_31977)){
var statearr_32118_33807 = state_32012__$1;
(statearr_32118_33807[(1)] = (26));

} else {
var statearr_32120_33808 = state_32012__$1;
(statearr_32120_33808[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (35))){
var inst_31997 = (state_32012[(2)]);
var state_32012__$1 = state_32012;
if(cljs.core.truth_(inst_31997)){
var statearr_32123_33809 = state_32012__$1;
(statearr_32123_33809[(1)] = (36));

} else {
var statearr_32124_33811 = state_32012__$1;
(statearr_32124_33811[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (19))){
var inst_31939 = (state_32012[(7)]);
var inst_31959 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31939);
var state_32012__$1 = state_32012;
var statearr_32126_33812 = state_32012__$1;
(statearr_32126_33812[(2)] = inst_31959);

(statearr_32126_33812[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (11))){
var inst_31939 = (state_32012[(7)]);
var inst_31943 = (inst_31939 == null);
var inst_31944 = cljs.core.not(inst_31943);
var state_32012__$1 = state_32012;
if(inst_31944){
var statearr_32127_33813 = state_32012__$1;
(statearr_32127_33813[(1)] = (13));

} else {
var statearr_32128_33814 = state_32012__$1;
(statearr_32128_33814[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (9))){
var inst_31912 = (state_32012[(8)]);
var state_32012__$1 = state_32012;
var statearr_32129_33815 = state_32012__$1;
(statearr_32129_33815[(2)] = inst_31912);

(statearr_32129_33815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (5))){
var state_32012__$1 = state_32012;
var statearr_32130_33816 = state_32012__$1;
(statearr_32130_33816[(2)] = true);

(statearr_32130_33816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (14))){
var state_32012__$1 = state_32012;
var statearr_32131_33818 = state_32012__$1;
(statearr_32131_33818[(2)] = false);

(statearr_32131_33818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (26))){
var inst_31972 = (state_32012[(11)]);
var inst_31979 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_31972);
var state_32012__$1 = state_32012;
var statearr_32132_33819 = state_32012__$1;
(statearr_32132_33819[(2)] = inst_31979);

(statearr_32132_33819[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (16))){
var state_32012__$1 = state_32012;
var statearr_32133_33820 = state_32012__$1;
(statearr_32133_33820[(2)] = true);

(statearr_32133_33820[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (38))){
var inst_32002 = (state_32012[(2)]);
var state_32012__$1 = state_32012;
var statearr_32134_33822 = state_32012__$1;
(statearr_32134_33822[(2)] = inst_32002);

(statearr_32134_33822[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (30))){
var inst_31963 = (state_32012[(9)]);
var inst_31964 = (state_32012[(13)]);
var inst_31972 = (state_32012[(11)]);
var inst_31989 = cljs.core.empty_QMARK_(inst_31963);
var inst_31990 = (inst_31964.cljs$core$IFn$_invoke$arity$1 ? inst_31964.cljs$core$IFn$_invoke$arity$1(inst_31972) : inst_31964.call(null,inst_31972));
var inst_31991 = cljs.core.not(inst_31990);
var inst_31992 = ((inst_31989) && (inst_31991));
var state_32012__$1 = state_32012;
var statearr_32135_33826 = state_32012__$1;
(statearr_32135_33826[(2)] = inst_31992);

(statearr_32135_33826[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (10))){
var inst_31912 = (state_32012[(8)]);
var inst_31935 = (state_32012[(2)]);
var inst_31936 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31935,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31937 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31935,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31935,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31939 = inst_31912;
var state_32012__$1 = (function (){var statearr_32139 = state_32012;
(statearr_32139[(16)] = inst_31937);

(statearr_32139[(17)] = inst_31936);

(statearr_32139[(7)] = inst_31939);

(statearr_32139[(18)] = inst_31938);

return statearr_32139;
})();
var statearr_32143_33827 = state_32012__$1;
(statearr_32143_33827[(2)] = null);

(statearr_32143_33827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (18))){
var inst_31954 = (state_32012[(2)]);
var state_32012__$1 = state_32012;
var statearr_32146_33828 = state_32012__$1;
(statearr_32146_33828[(2)] = inst_31954);

(statearr_32146_33828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (37))){
var state_32012__$1 = state_32012;
var statearr_32150_33829 = state_32012__$1;
(statearr_32150_33829[(2)] = null);

(statearr_32150_33829[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32013 === (8))){
var inst_31912 = (state_32012[(8)]);
var inst_31932 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31912);
var state_32012__$1 = state_32012;
var statearr_32155_33830 = state_32012__$1;
(statearr_32155_33830[(2)] = inst_31932);

(statearr_32155_33830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30594__auto___33758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30275__auto__,c__30594__auto___33758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30276__auto__ = null;
var cljs$core$async$mix_$_state_machine__30276__auto____0 = (function (){
var statearr_32158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32158[(0)] = cljs$core$async$mix_$_state_machine__30276__auto__);

(statearr_32158[(1)] = (1));

return statearr_32158;
});
var cljs$core$async$mix_$_state_machine__30276__auto____1 = (function (state_32012){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_32012);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e32160){if((e32160 instanceof Object)){
var ex__30279__auto__ = e32160;
var statearr_32161_33831 = state_32012;
(statearr_32161_33831[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32160;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33832 = state_32012;
state_32012 = G__33832;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30276__auto__ = function(state_32012){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30276__auto____1.call(this,state_32012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30276__auto____0;
cljs$core$async$mix_$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30276__auto____1;
return cljs$core$async$mix_$_state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto___33758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30596__auto__ = (function (){var statearr_32162 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_32162[(6)] = c__30594__auto___33758);

return statearr_32162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto___33758,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32192 = arguments.length;
switch (G__32192) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32207 = arguments.length;
switch (G__32207) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__32197_SHARP_){
if(cljs.core.truth_((p1__32197_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32197_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32197_SHARP_.call(null,topic)))){
return p1__32197_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32197_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32213 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32213 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32214){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32214 = meta32214;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32215,meta32214__$1){
var self__ = this;
var _32215__$1 = this;
return (new cljs.core.async.t_cljs$core$async32213(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32214__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32215){
var self__ = this;
var _32215__$1 = this;
return self__.meta32214;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32213.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32213.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32214","meta32214",1908496581,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32213.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32213.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32213";

cljs.core.async.t_cljs$core$async32213.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32213");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32213.
 */
cljs.core.async.__GT_t_cljs$core$async32213 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32213(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32214){
return (new cljs.core.async.t_cljs$core$async32213(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32214));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32213(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30594__auto___33852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto___33852,mults,ensure_mult,p){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto___33852,mults,ensure_mult,p){
return (function (state_32314){
var state_val_32315 = (state_32314[(1)]);
if((state_val_32315 === (7))){
var inst_32310 = (state_32314[(2)]);
var state_32314__$1 = state_32314;
var statearr_32321_33853 = state_32314__$1;
(statearr_32321_33853[(2)] = inst_32310);

(statearr_32321_33853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (20))){
var state_32314__$1 = state_32314;
var statearr_32322_33854 = state_32314__$1;
(statearr_32322_33854[(2)] = null);

(statearr_32322_33854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (1))){
var state_32314__$1 = state_32314;
var statearr_32326_33855 = state_32314__$1;
(statearr_32326_33855[(2)] = null);

(statearr_32326_33855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (24))){
var inst_32286 = (state_32314[(7)]);
var inst_32302 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32286);
var state_32314__$1 = state_32314;
var statearr_32330_33857 = state_32314__$1;
(statearr_32330_33857[(2)] = inst_32302);

(statearr_32330_33857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (4))){
var inst_32235 = (state_32314[(8)]);
var inst_32235__$1 = (state_32314[(2)]);
var inst_32236 = (inst_32235__$1 == null);
var state_32314__$1 = (function (){var statearr_32338 = state_32314;
(statearr_32338[(8)] = inst_32235__$1);

return statearr_32338;
})();
if(cljs.core.truth_(inst_32236)){
var statearr_32339_33859 = state_32314__$1;
(statearr_32339_33859[(1)] = (5));

} else {
var statearr_32340_33863 = state_32314__$1;
(statearr_32340_33863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (15))){
var inst_32280 = (state_32314[(2)]);
var state_32314__$1 = state_32314;
var statearr_32341_33864 = state_32314__$1;
(statearr_32341_33864[(2)] = inst_32280);

(statearr_32341_33864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (21))){
var inst_32307 = (state_32314[(2)]);
var state_32314__$1 = (function (){var statearr_32342 = state_32314;
(statearr_32342[(9)] = inst_32307);

return statearr_32342;
})();
var statearr_32343_33865 = state_32314__$1;
(statearr_32343_33865[(2)] = null);

(statearr_32343_33865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (13))){
var inst_32262 = (state_32314[(10)]);
var inst_32264 = cljs.core.chunked_seq_QMARK_(inst_32262);
var state_32314__$1 = state_32314;
if(inst_32264){
var statearr_32344_33866 = state_32314__$1;
(statearr_32344_33866[(1)] = (16));

} else {
var statearr_32345_33867 = state_32314__$1;
(statearr_32345_33867[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (22))){
var inst_32298 = (state_32314[(2)]);
var state_32314__$1 = state_32314;
if(cljs.core.truth_(inst_32298)){
var statearr_32346_33868 = state_32314__$1;
(statearr_32346_33868[(1)] = (23));

} else {
var statearr_32347_33869 = state_32314__$1;
(statearr_32347_33869[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (6))){
var inst_32286 = (state_32314[(7)]);
var inst_32235 = (state_32314[(8)]);
var inst_32288 = (state_32314[(11)]);
var inst_32286__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32235) : topic_fn.call(null,inst_32235));
var inst_32287 = cljs.core.deref(mults);
var inst_32288__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32287,inst_32286__$1);
var state_32314__$1 = (function (){var statearr_32348 = state_32314;
(statearr_32348[(7)] = inst_32286__$1);

(statearr_32348[(11)] = inst_32288__$1);

return statearr_32348;
})();
if(cljs.core.truth_(inst_32288__$1)){
var statearr_32349_33870 = state_32314__$1;
(statearr_32349_33870[(1)] = (19));

} else {
var statearr_32350_33871 = state_32314__$1;
(statearr_32350_33871[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (25))){
var inst_32304 = (state_32314[(2)]);
var state_32314__$1 = state_32314;
var statearr_32351_33872 = state_32314__$1;
(statearr_32351_33872[(2)] = inst_32304);

(statearr_32351_33872[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (17))){
var inst_32262 = (state_32314[(10)]);
var inst_32271 = cljs.core.first(inst_32262);
var inst_32272 = cljs.core.async.muxch_STAR_(inst_32271);
var inst_32273 = cljs.core.async.close_BANG_(inst_32272);
var inst_32274 = cljs.core.next(inst_32262);
var inst_32245 = inst_32274;
var inst_32246 = null;
var inst_32247 = (0);
var inst_32248 = (0);
var state_32314__$1 = (function (){var statearr_32352 = state_32314;
(statearr_32352[(12)] = inst_32248);

(statearr_32352[(13)] = inst_32273);

(statearr_32352[(14)] = inst_32247);

(statearr_32352[(15)] = inst_32246);

(statearr_32352[(16)] = inst_32245);

return statearr_32352;
})();
var statearr_32353_33873 = state_32314__$1;
(statearr_32353_33873[(2)] = null);

(statearr_32353_33873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (3))){
var inst_32312 = (state_32314[(2)]);
var state_32314__$1 = state_32314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32314__$1,inst_32312);
} else {
if((state_val_32315 === (12))){
var inst_32282 = (state_32314[(2)]);
var state_32314__$1 = state_32314;
var statearr_32354_33875 = state_32314__$1;
(statearr_32354_33875[(2)] = inst_32282);

(statearr_32354_33875[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (2))){
var state_32314__$1 = state_32314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32314__$1,(4),ch);
} else {
if((state_val_32315 === (23))){
var state_32314__$1 = state_32314;
var statearr_32355_33876 = state_32314__$1;
(statearr_32355_33876[(2)] = null);

(statearr_32355_33876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (19))){
var inst_32235 = (state_32314[(8)]);
var inst_32288 = (state_32314[(11)]);
var inst_32296 = cljs.core.async.muxch_STAR_(inst_32288);
var state_32314__$1 = state_32314;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32314__$1,(22),inst_32296,inst_32235);
} else {
if((state_val_32315 === (11))){
var inst_32262 = (state_32314[(10)]);
var inst_32245 = (state_32314[(16)]);
var inst_32262__$1 = cljs.core.seq(inst_32245);
var state_32314__$1 = (function (){var statearr_32356 = state_32314;
(statearr_32356[(10)] = inst_32262__$1);

return statearr_32356;
})();
if(inst_32262__$1){
var statearr_32357_33877 = state_32314__$1;
(statearr_32357_33877[(1)] = (13));

} else {
var statearr_32358_33878 = state_32314__$1;
(statearr_32358_33878[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (9))){
var inst_32284 = (state_32314[(2)]);
var state_32314__$1 = state_32314;
var statearr_32359_33879 = state_32314__$1;
(statearr_32359_33879[(2)] = inst_32284);

(statearr_32359_33879[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (5))){
var inst_32242 = cljs.core.deref(mults);
var inst_32243 = cljs.core.vals(inst_32242);
var inst_32244 = cljs.core.seq(inst_32243);
var inst_32245 = inst_32244;
var inst_32246 = null;
var inst_32247 = (0);
var inst_32248 = (0);
var state_32314__$1 = (function (){var statearr_32360 = state_32314;
(statearr_32360[(12)] = inst_32248);

(statearr_32360[(14)] = inst_32247);

(statearr_32360[(15)] = inst_32246);

(statearr_32360[(16)] = inst_32245);

return statearr_32360;
})();
var statearr_32361_33880 = state_32314__$1;
(statearr_32361_33880[(2)] = null);

(statearr_32361_33880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (14))){
var state_32314__$1 = state_32314;
var statearr_32365_33881 = state_32314__$1;
(statearr_32365_33881[(2)] = null);

(statearr_32365_33881[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (16))){
var inst_32262 = (state_32314[(10)]);
var inst_32266 = cljs.core.chunk_first(inst_32262);
var inst_32267 = cljs.core.chunk_rest(inst_32262);
var inst_32268 = cljs.core.count(inst_32266);
var inst_32245 = inst_32267;
var inst_32246 = inst_32266;
var inst_32247 = inst_32268;
var inst_32248 = (0);
var state_32314__$1 = (function (){var statearr_32366 = state_32314;
(statearr_32366[(12)] = inst_32248);

(statearr_32366[(14)] = inst_32247);

(statearr_32366[(15)] = inst_32246);

(statearr_32366[(16)] = inst_32245);

return statearr_32366;
})();
var statearr_32367_33889 = state_32314__$1;
(statearr_32367_33889[(2)] = null);

(statearr_32367_33889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (10))){
var inst_32248 = (state_32314[(12)]);
var inst_32247 = (state_32314[(14)]);
var inst_32246 = (state_32314[(15)]);
var inst_32245 = (state_32314[(16)]);
var inst_32253 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32246,inst_32248);
var inst_32254 = cljs.core.async.muxch_STAR_(inst_32253);
var inst_32255 = cljs.core.async.close_BANG_(inst_32254);
var inst_32258 = (inst_32248 + (1));
var tmp32362 = inst_32247;
var tmp32363 = inst_32246;
var tmp32364 = inst_32245;
var inst_32245__$1 = tmp32364;
var inst_32246__$1 = tmp32363;
var inst_32247__$1 = tmp32362;
var inst_32248__$1 = inst_32258;
var state_32314__$1 = (function (){var statearr_32374 = state_32314;
(statearr_32374[(12)] = inst_32248__$1);

(statearr_32374[(17)] = inst_32255);

(statearr_32374[(14)] = inst_32247__$1);

(statearr_32374[(15)] = inst_32246__$1);

(statearr_32374[(16)] = inst_32245__$1);

return statearr_32374;
})();
var statearr_32377_33890 = state_32314__$1;
(statearr_32377_33890[(2)] = null);

(statearr_32377_33890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (18))){
var inst_32277 = (state_32314[(2)]);
var state_32314__$1 = state_32314;
var statearr_32380_33891 = state_32314__$1;
(statearr_32380_33891[(2)] = inst_32277);

(statearr_32380_33891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (8))){
var inst_32248 = (state_32314[(12)]);
var inst_32247 = (state_32314[(14)]);
var inst_32250 = (inst_32248 < inst_32247);
var inst_32251 = inst_32250;
var state_32314__$1 = state_32314;
if(cljs.core.truth_(inst_32251)){
var statearr_32381_33892 = state_32314__$1;
(statearr_32381_33892[(1)] = (10));

} else {
var statearr_32382_33893 = state_32314__$1;
(statearr_32382_33893[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30594__auto___33852,mults,ensure_mult,p))
;
return ((function (switch__30275__auto__,c__30594__auto___33852,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30276__auto__ = null;
var cljs$core$async$state_machine__30276__auto____0 = (function (){
var statearr_32383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32383[(0)] = cljs$core$async$state_machine__30276__auto__);

(statearr_32383[(1)] = (1));

return statearr_32383;
});
var cljs$core$async$state_machine__30276__auto____1 = (function (state_32314){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_32314);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e32384){if((e32384 instanceof Object)){
var ex__30279__auto__ = e32384;
var statearr_32385_33895 = state_32314;
(statearr_32385_33895[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32314);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32384;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33896 = state_32314;
state_32314 = G__33896;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$state_machine__30276__auto__ = function(state_32314){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30276__auto____1.call(this,state_32314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30276__auto____0;
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30276__auto____1;
return cljs$core$async$state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto___33852,mults,ensure_mult,p))
})();
var state__30596__auto__ = (function (){var statearr_32386 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_32386[(6)] = c__30594__auto___33852);

return statearr_32386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto___33852,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32388 = arguments.length;
switch (G__32388) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32390 = arguments.length;
switch (G__32390) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__32395 = arguments.length;
switch (G__32395) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__30594__auto___33902 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto___33902,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto___33902,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32437){
var state_val_32438 = (state_32437[(1)]);
if((state_val_32438 === (7))){
var state_32437__$1 = state_32437;
var statearr_32440_33906 = state_32437__$1;
(statearr_32440_33906[(2)] = null);

(statearr_32440_33906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (1))){
var state_32437__$1 = state_32437;
var statearr_32441_33911 = state_32437__$1;
(statearr_32441_33911[(2)] = null);

(statearr_32441_33911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (4))){
var inst_32399 = (state_32437[(7)]);
var inst_32401 = (inst_32399 < cnt);
var state_32437__$1 = state_32437;
if(cljs.core.truth_(inst_32401)){
var statearr_32442_33912 = state_32437__$1;
(statearr_32442_33912[(1)] = (6));

} else {
var statearr_32444_33913 = state_32437__$1;
(statearr_32444_33913[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (15))){
var inst_32432 = (state_32437[(2)]);
var state_32437__$1 = state_32437;
var statearr_32446_33915 = state_32437__$1;
(statearr_32446_33915[(2)] = inst_32432);

(statearr_32446_33915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (13))){
var inst_32425 = cljs.core.async.close_BANG_(out);
var state_32437__$1 = state_32437;
var statearr_32447_33917 = state_32437__$1;
(statearr_32447_33917[(2)] = inst_32425);

(statearr_32447_33917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (6))){
var state_32437__$1 = state_32437;
var statearr_32448_33918 = state_32437__$1;
(statearr_32448_33918[(2)] = null);

(statearr_32448_33918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (3))){
var inst_32434 = (state_32437[(2)]);
var state_32437__$1 = state_32437;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32437__$1,inst_32434);
} else {
if((state_val_32438 === (12))){
var inst_32422 = (state_32437[(8)]);
var inst_32422__$1 = (state_32437[(2)]);
var inst_32423 = cljs.core.some(cljs.core.nil_QMARK_,inst_32422__$1);
var state_32437__$1 = (function (){var statearr_32451 = state_32437;
(statearr_32451[(8)] = inst_32422__$1);

return statearr_32451;
})();
if(cljs.core.truth_(inst_32423)){
var statearr_32453_33919 = state_32437__$1;
(statearr_32453_33919[(1)] = (13));

} else {
var statearr_32454_33920 = state_32437__$1;
(statearr_32454_33920[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (2))){
var inst_32398 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32399 = (0);
var state_32437__$1 = (function (){var statearr_32455 = state_32437;
(statearr_32455[(7)] = inst_32399);

(statearr_32455[(9)] = inst_32398);

return statearr_32455;
})();
var statearr_32456_33921 = state_32437__$1;
(statearr_32456_33921[(2)] = null);

(statearr_32456_33921[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (11))){
var inst_32399 = (state_32437[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32437,(10),Object,null,(9));
var inst_32408 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32399) : chs__$1.call(null,inst_32399));
var inst_32409 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32399) : done.call(null,inst_32399));
var inst_32410 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32408,inst_32409);
var state_32437__$1 = state_32437;
var statearr_32457_33922 = state_32437__$1;
(statearr_32457_33922[(2)] = inst_32410);


cljs.core.async.impl.ioc_helpers.process_exception(state_32437__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (9))){
var inst_32399 = (state_32437[(7)]);
var inst_32412 = (state_32437[(2)]);
var inst_32414 = (inst_32399 + (1));
var inst_32399__$1 = inst_32414;
var state_32437__$1 = (function (){var statearr_32458 = state_32437;
(statearr_32458[(7)] = inst_32399__$1);

(statearr_32458[(10)] = inst_32412);

return statearr_32458;
})();
var statearr_32459_33923 = state_32437__$1;
(statearr_32459_33923[(2)] = null);

(statearr_32459_33923[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (5))){
var inst_32420 = (state_32437[(2)]);
var state_32437__$1 = (function (){var statearr_32460 = state_32437;
(statearr_32460[(11)] = inst_32420);

return statearr_32460;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32437__$1,(12),dchan);
} else {
if((state_val_32438 === (14))){
var inst_32422 = (state_32437[(8)]);
var inst_32427 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32422);
var state_32437__$1 = state_32437;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32437__$1,(16),out,inst_32427);
} else {
if((state_val_32438 === (16))){
var inst_32429 = (state_32437[(2)]);
var state_32437__$1 = (function (){var statearr_32461 = state_32437;
(statearr_32461[(12)] = inst_32429);

return statearr_32461;
})();
var statearr_32462_33926 = state_32437__$1;
(statearr_32462_33926[(2)] = null);

(statearr_32462_33926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (10))){
var inst_32403 = (state_32437[(2)]);
var inst_32404 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32437__$1 = (function (){var statearr_32466 = state_32437;
(statearr_32466[(13)] = inst_32403);

return statearr_32466;
})();
var statearr_32467_33929 = state_32437__$1;
(statearr_32467_33929[(2)] = inst_32404);


cljs.core.async.impl.ioc_helpers.process_exception(state_32437__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32438 === (8))){
var inst_32418 = (state_32437[(2)]);
var state_32437__$1 = state_32437;
var statearr_32468_33930 = state_32437__$1;
(statearr_32468_33930[(2)] = inst_32418);

(statearr_32468_33930[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30594__auto___33902,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30275__auto__,c__30594__auto___33902,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30276__auto__ = null;
var cljs$core$async$state_machine__30276__auto____0 = (function (){
var statearr_32472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32472[(0)] = cljs$core$async$state_machine__30276__auto__);

(statearr_32472[(1)] = (1));

return statearr_32472;
});
var cljs$core$async$state_machine__30276__auto____1 = (function (state_32437){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_32437);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e32473){if((e32473 instanceof Object)){
var ex__30279__auto__ = e32473;
var statearr_32474_33931 = state_32437;
(statearr_32474_33931[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32473;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33932 = state_32437;
state_32437 = G__33932;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$state_machine__30276__auto__ = function(state_32437){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30276__auto____1.call(this,state_32437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30276__auto____0;
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30276__auto____1;
return cljs$core$async$state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto___33902,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30596__auto__ = (function (){var statearr_32475 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_32475[(6)] = c__30594__auto___33902);

return statearr_32475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto___33902,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__32478 = arguments.length;
switch (G__32478) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30594__auto___33935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto___33935,out){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto___33935,out){
return (function (state_32515){
var state_val_32516 = (state_32515[(1)]);
if((state_val_32516 === (7))){
var inst_32492 = (state_32515[(7)]);
var inst_32491 = (state_32515[(8)]);
var inst_32491__$1 = (state_32515[(2)]);
var inst_32492__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32491__$1,(0),null);
var inst_32493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32491__$1,(1),null);
var inst_32494 = (inst_32492__$1 == null);
var state_32515__$1 = (function (){var statearr_32517 = state_32515;
(statearr_32517[(7)] = inst_32492__$1);

(statearr_32517[(9)] = inst_32493);

(statearr_32517[(8)] = inst_32491__$1);

return statearr_32517;
})();
if(cljs.core.truth_(inst_32494)){
var statearr_32522_33937 = state_32515__$1;
(statearr_32522_33937[(1)] = (8));

} else {
var statearr_32523_33938 = state_32515__$1;
(statearr_32523_33938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (1))){
var inst_32481 = cljs.core.vec(chs);
var inst_32482 = inst_32481;
var state_32515__$1 = (function (){var statearr_32530 = state_32515;
(statearr_32530[(10)] = inst_32482);

return statearr_32530;
})();
var statearr_32531_33940 = state_32515__$1;
(statearr_32531_33940[(2)] = null);

(statearr_32531_33940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (4))){
var inst_32482 = (state_32515[(10)]);
var state_32515__$1 = state_32515;
return cljs.core.async.ioc_alts_BANG_(state_32515__$1,(7),inst_32482);
} else {
if((state_val_32516 === (6))){
var inst_32511 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32546_33944 = state_32515__$1;
(statearr_32546_33944[(2)] = inst_32511);

(statearr_32546_33944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (3))){
var inst_32513 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32515__$1,inst_32513);
} else {
if((state_val_32516 === (2))){
var inst_32482 = (state_32515[(10)]);
var inst_32484 = cljs.core.count(inst_32482);
var inst_32485 = (inst_32484 > (0));
var state_32515__$1 = state_32515;
if(cljs.core.truth_(inst_32485)){
var statearr_32559_33952 = state_32515__$1;
(statearr_32559_33952[(1)] = (4));

} else {
var statearr_32560_33953 = state_32515__$1;
(statearr_32560_33953[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (11))){
var inst_32482 = (state_32515[(10)]);
var inst_32504 = (state_32515[(2)]);
var tmp32550 = inst_32482;
var inst_32482__$1 = tmp32550;
var state_32515__$1 = (function (){var statearr_32567 = state_32515;
(statearr_32567[(11)] = inst_32504);

(statearr_32567[(10)] = inst_32482__$1);

return statearr_32567;
})();
var statearr_32570_33954 = state_32515__$1;
(statearr_32570_33954[(2)] = null);

(statearr_32570_33954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (9))){
var inst_32492 = (state_32515[(7)]);
var state_32515__$1 = state_32515;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32515__$1,(11),out,inst_32492);
} else {
if((state_val_32516 === (5))){
var inst_32509 = cljs.core.async.close_BANG_(out);
var state_32515__$1 = state_32515;
var statearr_32580_33958 = state_32515__$1;
(statearr_32580_33958[(2)] = inst_32509);

(statearr_32580_33958[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (10))){
var inst_32507 = (state_32515[(2)]);
var state_32515__$1 = state_32515;
var statearr_32581_33959 = state_32515__$1;
(statearr_32581_33959[(2)] = inst_32507);

(statearr_32581_33959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32516 === (8))){
var inst_32492 = (state_32515[(7)]);
var inst_32493 = (state_32515[(9)]);
var inst_32482 = (state_32515[(10)]);
var inst_32491 = (state_32515[(8)]);
var inst_32497 = (function (){var cs = inst_32482;
var vec__32487 = inst_32491;
var v = inst_32492;
var c = inst_32493;
return ((function (cs,vec__32487,v,c,inst_32492,inst_32493,inst_32482,inst_32491,state_val_32516,c__30594__auto___33935,out){
return (function (p1__32476_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32476_SHARP_);
});
;})(cs,vec__32487,v,c,inst_32492,inst_32493,inst_32482,inst_32491,state_val_32516,c__30594__auto___33935,out))
})();
var inst_32500 = cljs.core.filterv(inst_32497,inst_32482);
var inst_32482__$1 = inst_32500;
var state_32515__$1 = (function (){var statearr_32584 = state_32515;
(statearr_32584[(10)] = inst_32482__$1);

return statearr_32584;
})();
var statearr_32586_33963 = state_32515__$1;
(statearr_32586_33963[(2)] = null);

(statearr_32586_33963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30594__auto___33935,out))
;
return ((function (switch__30275__auto__,c__30594__auto___33935,out){
return (function() {
var cljs$core$async$state_machine__30276__auto__ = null;
var cljs$core$async$state_machine__30276__auto____0 = (function (){
var statearr_32588 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32588[(0)] = cljs$core$async$state_machine__30276__auto__);

(statearr_32588[(1)] = (1));

return statearr_32588;
});
var cljs$core$async$state_machine__30276__auto____1 = (function (state_32515){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_32515);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e32589){if((e32589 instanceof Object)){
var ex__30279__auto__ = e32589;
var statearr_32590_33967 = state_32515;
(statearr_32590_33967[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33969 = state_32515;
state_32515 = G__33969;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$state_machine__30276__auto__ = function(state_32515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30276__auto____1.call(this,state_32515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30276__auto____0;
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30276__auto____1;
return cljs$core$async$state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto___33935,out))
})();
var state__30596__auto__ = (function (){var statearr_32591 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_32591[(6)] = c__30594__auto___33935);

return statearr_32591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto___33935,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32601 = arguments.length;
switch (G__32601) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30594__auto___33986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto___33986,out){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto___33986,out){
return (function (state_32626){
var state_val_32627 = (state_32626[(1)]);
if((state_val_32627 === (7))){
var inst_32608 = (state_32626[(7)]);
var inst_32608__$1 = (state_32626[(2)]);
var inst_32609 = (inst_32608__$1 == null);
var inst_32610 = cljs.core.not(inst_32609);
var state_32626__$1 = (function (){var statearr_32628 = state_32626;
(statearr_32628[(7)] = inst_32608__$1);

return statearr_32628;
})();
if(inst_32610){
var statearr_32629_33987 = state_32626__$1;
(statearr_32629_33987[(1)] = (8));

} else {
var statearr_32630_33988 = state_32626__$1;
(statearr_32630_33988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (1))){
var inst_32603 = (0);
var state_32626__$1 = (function (){var statearr_32631 = state_32626;
(statearr_32631[(8)] = inst_32603);

return statearr_32631;
})();
var statearr_32634_33989 = state_32626__$1;
(statearr_32634_33989[(2)] = null);

(statearr_32634_33989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (4))){
var state_32626__$1 = state_32626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32626__$1,(7),ch);
} else {
if((state_val_32627 === (6))){
var inst_32621 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
var statearr_32636_33990 = state_32626__$1;
(statearr_32636_33990[(2)] = inst_32621);

(statearr_32636_33990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (3))){
var inst_32623 = (state_32626[(2)]);
var inst_32624 = cljs.core.async.close_BANG_(out);
var state_32626__$1 = (function (){var statearr_32638 = state_32626;
(statearr_32638[(9)] = inst_32623);

return statearr_32638;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32626__$1,inst_32624);
} else {
if((state_val_32627 === (2))){
var inst_32603 = (state_32626[(8)]);
var inst_32605 = (inst_32603 < n);
var state_32626__$1 = state_32626;
if(cljs.core.truth_(inst_32605)){
var statearr_32640_33991 = state_32626__$1;
(statearr_32640_33991[(1)] = (4));

} else {
var statearr_32642_33992 = state_32626__$1;
(statearr_32642_33992[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (11))){
var inst_32603 = (state_32626[(8)]);
var inst_32613 = (state_32626[(2)]);
var inst_32614 = (inst_32603 + (1));
var inst_32603__$1 = inst_32614;
var state_32626__$1 = (function (){var statearr_32643 = state_32626;
(statearr_32643[(10)] = inst_32613);

(statearr_32643[(8)] = inst_32603__$1);

return statearr_32643;
})();
var statearr_32644_33993 = state_32626__$1;
(statearr_32644_33993[(2)] = null);

(statearr_32644_33993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (9))){
var state_32626__$1 = state_32626;
var statearr_32645_33994 = state_32626__$1;
(statearr_32645_33994[(2)] = null);

(statearr_32645_33994[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (5))){
var state_32626__$1 = state_32626;
var statearr_32648_33995 = state_32626__$1;
(statearr_32648_33995[(2)] = null);

(statearr_32648_33995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (10))){
var inst_32618 = (state_32626[(2)]);
var state_32626__$1 = state_32626;
var statearr_32649_34002 = state_32626__$1;
(statearr_32649_34002[(2)] = inst_32618);

(statearr_32649_34002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32627 === (8))){
var inst_32608 = (state_32626[(7)]);
var state_32626__$1 = state_32626;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32626__$1,(11),out,inst_32608);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30594__auto___33986,out))
;
return ((function (switch__30275__auto__,c__30594__auto___33986,out){
return (function() {
var cljs$core$async$state_machine__30276__auto__ = null;
var cljs$core$async$state_machine__30276__auto____0 = (function (){
var statearr_32651 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32651[(0)] = cljs$core$async$state_machine__30276__auto__);

(statearr_32651[(1)] = (1));

return statearr_32651;
});
var cljs$core$async$state_machine__30276__auto____1 = (function (state_32626){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_32626);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e32653){if((e32653 instanceof Object)){
var ex__30279__auto__ = e32653;
var statearr_32654_34003 = state_32626;
(statearr_32654_34003[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32653;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34004 = state_32626;
state_32626 = G__34004;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$state_machine__30276__auto__ = function(state_32626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30276__auto____1.call(this,state_32626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30276__auto____0;
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30276__auto____1;
return cljs$core$async$state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto___33986,out))
})();
var state__30596__auto__ = (function (){var statearr_32656 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_32656[(6)] = c__30594__auto___33986);

return statearr_32656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto___33986,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32667 = (function (f,ch,meta32668){
this.f = f;
this.ch = ch;
this.meta32668 = meta32668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32669,meta32668__$1){
var self__ = this;
var _32669__$1 = this;
return (new cljs.core.async.t_cljs$core$async32667(self__.f,self__.ch,meta32668__$1));
});

cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32669){
var self__ = this;
var _32669__$1 = this;
return self__.meta32668;
});

cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32681 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32681 = (function (f,ch,meta32668,_,fn1,meta32682){
this.f = f;
this.ch = ch;
this.meta32668 = meta32668;
this._ = _;
this.fn1 = fn1;
this.meta32682 = meta32682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32683,meta32682__$1){
var self__ = this;
var _32683__$1 = this;
return (new cljs.core.async.t_cljs$core$async32681(self__.f,self__.ch,self__.meta32668,self__._,self__.fn1,meta32682__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32683){
var self__ = this;
var _32683__$1 = this;
return self__.meta32682;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32681.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32681.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32662_SHARP_){
var G__32695 = (((p1__32662_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32662_SHARP_) : self__.f.call(null,p1__32662_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32695) : f1.call(null,G__32695));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32681.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32668","meta32668",-2015257419,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32667","cljs.core.async/t_cljs$core$async32667",1961541613,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32682","meta32682",-1232106664,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32681.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32681";

cljs.core.async.t_cljs$core$async32681.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32681");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32681.
 */
cljs.core.async.__GT_t_cljs$core$async32681 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32681(f__$1,ch__$1,meta32668__$1,___$2,fn1__$1,meta32682){
return (new cljs.core.async.t_cljs$core$async32681(f__$1,ch__$1,meta32668__$1,___$2,fn1__$1,meta32682));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32681(self__.f,self__.ch,self__.meta32668,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32701 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32701) : self__.f.call(null,G__32701));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32668","meta32668",-2015257419,null)], null);
});

cljs.core.async.t_cljs$core$async32667.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32667";

cljs.core.async.t_cljs$core$async32667.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32667");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32667.
 */
cljs.core.async.__GT_t_cljs$core$async32667 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32667(f__$1,ch__$1,meta32668){
return (new cljs.core.async.t_cljs$core$async32667(f__$1,ch__$1,meta32668));
});

}

return (new cljs.core.async.t_cljs$core$async32667(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32711 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32711 = (function (f,ch,meta32712){
this.f = f;
this.ch = ch;
this.meta32712 = meta32712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32713,meta32712__$1){
var self__ = this;
var _32713__$1 = this;
return (new cljs.core.async.t_cljs$core$async32711(self__.f,self__.ch,meta32712__$1));
});

cljs.core.async.t_cljs$core$async32711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32713){
var self__ = this;
var _32713__$1 = this;
return self__.meta32712;
});

cljs.core.async.t_cljs$core$async32711.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32711.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32711.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32711.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32711.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32711.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32711.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32712","meta32712",-255668307,null)], null);
});

cljs.core.async.t_cljs$core$async32711.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32711.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32711";

cljs.core.async.t_cljs$core$async32711.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32711");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32711.
 */
cljs.core.async.__GT_t_cljs$core$async32711 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32711(f__$1,ch__$1,meta32712){
return (new cljs.core.async.t_cljs$core$async32711(f__$1,ch__$1,meta32712));
});

}

return (new cljs.core.async.t_cljs$core$async32711(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32724 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32724 = (function (p,ch,meta32725){
this.p = p;
this.ch = ch;
this.meta32725 = meta32725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32726,meta32725__$1){
var self__ = this;
var _32726__$1 = this;
return (new cljs.core.async.t_cljs$core$async32724(self__.p,self__.ch,meta32725__$1));
});

cljs.core.async.t_cljs$core$async32724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32726){
var self__ = this;
var _32726__$1 = this;
return self__.meta32725;
});

cljs.core.async.t_cljs$core$async32724.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32724.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32724.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32724.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32724.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32724.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32724.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32725","meta32725",-1885153004,null)], null);
});

cljs.core.async.t_cljs$core$async32724.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32724";

cljs.core.async.t_cljs$core$async32724.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32724");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32724.
 */
cljs.core.async.__GT_t_cljs$core$async32724 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32724(p__$1,ch__$1,meta32725){
return (new cljs.core.async.t_cljs$core$async32724(p__$1,ch__$1,meta32725));
});

}

return (new cljs.core.async.t_cljs$core$async32724(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32761 = arguments.length;
switch (G__32761) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30594__auto___34026 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto___34026,out){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto___34026,out){
return (function (state_32789){
var state_val_32790 = (state_32789[(1)]);
if((state_val_32790 === (7))){
var inst_32781 = (state_32789[(2)]);
var state_32789__$1 = state_32789;
var statearr_32794_34027 = state_32789__$1;
(statearr_32794_34027[(2)] = inst_32781);

(statearr_32794_34027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (1))){
var state_32789__$1 = state_32789;
var statearr_32796_34028 = state_32789__$1;
(statearr_32796_34028[(2)] = null);

(statearr_32796_34028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (4))){
var inst_32767 = (state_32789[(7)]);
var inst_32767__$1 = (state_32789[(2)]);
var inst_32768 = (inst_32767__$1 == null);
var state_32789__$1 = (function (){var statearr_32798 = state_32789;
(statearr_32798[(7)] = inst_32767__$1);

return statearr_32798;
})();
if(cljs.core.truth_(inst_32768)){
var statearr_32800_34029 = state_32789__$1;
(statearr_32800_34029[(1)] = (5));

} else {
var statearr_32801_34030 = state_32789__$1;
(statearr_32801_34030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (6))){
var inst_32767 = (state_32789[(7)]);
var inst_32772 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32767) : p.call(null,inst_32767));
var state_32789__$1 = state_32789;
if(cljs.core.truth_(inst_32772)){
var statearr_32804_34032 = state_32789__$1;
(statearr_32804_34032[(1)] = (8));

} else {
var statearr_32805_34033 = state_32789__$1;
(statearr_32805_34033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (3))){
var inst_32783 = (state_32789[(2)]);
var state_32789__$1 = state_32789;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32789__$1,inst_32783);
} else {
if((state_val_32790 === (2))){
var state_32789__$1 = state_32789;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32789__$1,(4),ch);
} else {
if((state_val_32790 === (11))){
var inst_32775 = (state_32789[(2)]);
var state_32789__$1 = state_32789;
var statearr_32809_34035 = state_32789__$1;
(statearr_32809_34035[(2)] = inst_32775);

(statearr_32809_34035[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (9))){
var state_32789__$1 = state_32789;
var statearr_32811_34036 = state_32789__$1;
(statearr_32811_34036[(2)] = null);

(statearr_32811_34036[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (5))){
var inst_32770 = cljs.core.async.close_BANG_(out);
var state_32789__$1 = state_32789;
var statearr_32814_34037 = state_32789__$1;
(statearr_32814_34037[(2)] = inst_32770);

(statearr_32814_34037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (10))){
var inst_32778 = (state_32789[(2)]);
var state_32789__$1 = (function (){var statearr_32818 = state_32789;
(statearr_32818[(8)] = inst_32778);

return statearr_32818;
})();
var statearr_32820_34038 = state_32789__$1;
(statearr_32820_34038[(2)] = null);

(statearr_32820_34038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32790 === (8))){
var inst_32767 = (state_32789[(7)]);
var state_32789__$1 = state_32789;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32789__$1,(11),out,inst_32767);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30594__auto___34026,out))
;
return ((function (switch__30275__auto__,c__30594__auto___34026,out){
return (function() {
var cljs$core$async$state_machine__30276__auto__ = null;
var cljs$core$async$state_machine__30276__auto____0 = (function (){
var statearr_32824 = [null,null,null,null,null,null,null,null,null];
(statearr_32824[(0)] = cljs$core$async$state_machine__30276__auto__);

(statearr_32824[(1)] = (1));

return statearr_32824;
});
var cljs$core$async$state_machine__30276__auto____1 = (function (state_32789){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_32789);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e32825){if((e32825 instanceof Object)){
var ex__30279__auto__ = e32825;
var statearr_32827_34048 = state_32789;
(statearr_32827_34048[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34049 = state_32789;
state_32789 = G__34049;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$state_machine__30276__auto__ = function(state_32789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30276__auto____1.call(this,state_32789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30276__auto____0;
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30276__auto____1;
return cljs$core$async$state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto___34026,out))
})();
var state__30596__auto__ = (function (){var statearr_32832 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_32832[(6)] = c__30594__auto___34026);

return statearr_32832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto___34026,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32839 = arguments.length;
switch (G__32839) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30594__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto__){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto__){
return (function (state_32914){
var state_val_32915 = (state_32914[(1)]);
if((state_val_32915 === (7))){
var inst_32909 = (state_32914[(2)]);
var state_32914__$1 = state_32914;
var statearr_32920_34055 = state_32914__$1;
(statearr_32920_34055[(2)] = inst_32909);

(statearr_32920_34055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (20))){
var inst_32875 = (state_32914[(7)]);
var inst_32887 = (state_32914[(2)]);
var inst_32889 = cljs.core.next(inst_32875);
var inst_32857 = inst_32889;
var inst_32858 = null;
var inst_32859 = (0);
var inst_32860 = (0);
var state_32914__$1 = (function (){var statearr_32924 = state_32914;
(statearr_32924[(8)] = inst_32857);

(statearr_32924[(9)] = inst_32859);

(statearr_32924[(10)] = inst_32860);

(statearr_32924[(11)] = inst_32887);

(statearr_32924[(12)] = inst_32858);

return statearr_32924;
})();
var statearr_32925_34057 = state_32914__$1;
(statearr_32925_34057[(2)] = null);

(statearr_32925_34057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (1))){
var state_32914__$1 = state_32914;
var statearr_32926_34058 = state_32914__$1;
(statearr_32926_34058[(2)] = null);

(statearr_32926_34058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (4))){
var inst_32846 = (state_32914[(13)]);
var inst_32846__$1 = (state_32914[(2)]);
var inst_32847 = (inst_32846__$1 == null);
var state_32914__$1 = (function (){var statearr_32931 = state_32914;
(statearr_32931[(13)] = inst_32846__$1);

return statearr_32931;
})();
if(cljs.core.truth_(inst_32847)){
var statearr_32934_34059 = state_32914__$1;
(statearr_32934_34059[(1)] = (5));

} else {
var statearr_32935_34060 = state_32914__$1;
(statearr_32935_34060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (15))){
var state_32914__$1 = state_32914;
var statearr_32943_34061 = state_32914__$1;
(statearr_32943_34061[(2)] = null);

(statearr_32943_34061[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (21))){
var state_32914__$1 = state_32914;
var statearr_32944_34062 = state_32914__$1;
(statearr_32944_34062[(2)] = null);

(statearr_32944_34062[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (13))){
var inst_32857 = (state_32914[(8)]);
var inst_32859 = (state_32914[(9)]);
var inst_32860 = (state_32914[(10)]);
var inst_32858 = (state_32914[(12)]);
var inst_32871 = (state_32914[(2)]);
var inst_32872 = (inst_32860 + (1));
var tmp32940 = inst_32857;
var tmp32941 = inst_32859;
var tmp32942 = inst_32858;
var inst_32857__$1 = tmp32940;
var inst_32858__$1 = tmp32942;
var inst_32859__$1 = tmp32941;
var inst_32860__$1 = inst_32872;
var state_32914__$1 = (function (){var statearr_32947 = state_32914;
(statearr_32947[(8)] = inst_32857__$1);

(statearr_32947[(9)] = inst_32859__$1);

(statearr_32947[(10)] = inst_32860__$1);

(statearr_32947[(14)] = inst_32871);

(statearr_32947[(12)] = inst_32858__$1);

return statearr_32947;
})();
var statearr_32952_34063 = state_32914__$1;
(statearr_32952_34063[(2)] = null);

(statearr_32952_34063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (22))){
var state_32914__$1 = state_32914;
var statearr_32953_34064 = state_32914__$1;
(statearr_32953_34064[(2)] = null);

(statearr_32953_34064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (6))){
var inst_32846 = (state_32914[(13)]);
var inst_32855 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32846) : f.call(null,inst_32846));
var inst_32856 = cljs.core.seq(inst_32855);
var inst_32857 = inst_32856;
var inst_32858 = null;
var inst_32859 = (0);
var inst_32860 = (0);
var state_32914__$1 = (function (){var statearr_32956 = state_32914;
(statearr_32956[(8)] = inst_32857);

(statearr_32956[(9)] = inst_32859);

(statearr_32956[(10)] = inst_32860);

(statearr_32956[(12)] = inst_32858);

return statearr_32956;
})();
var statearr_32959_34065 = state_32914__$1;
(statearr_32959_34065[(2)] = null);

(statearr_32959_34065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (17))){
var inst_32875 = (state_32914[(7)]);
var inst_32880 = cljs.core.chunk_first(inst_32875);
var inst_32881 = cljs.core.chunk_rest(inst_32875);
var inst_32882 = cljs.core.count(inst_32880);
var inst_32857 = inst_32881;
var inst_32858 = inst_32880;
var inst_32859 = inst_32882;
var inst_32860 = (0);
var state_32914__$1 = (function (){var statearr_32963 = state_32914;
(statearr_32963[(8)] = inst_32857);

(statearr_32963[(9)] = inst_32859);

(statearr_32963[(10)] = inst_32860);

(statearr_32963[(12)] = inst_32858);

return statearr_32963;
})();
var statearr_32966_34066 = state_32914__$1;
(statearr_32966_34066[(2)] = null);

(statearr_32966_34066[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (3))){
var inst_32911 = (state_32914[(2)]);
var state_32914__$1 = state_32914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32914__$1,inst_32911);
} else {
if((state_val_32915 === (12))){
var inst_32897 = (state_32914[(2)]);
var state_32914__$1 = state_32914;
var statearr_32970_34067 = state_32914__$1;
(statearr_32970_34067[(2)] = inst_32897);

(statearr_32970_34067[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (2))){
var state_32914__$1 = state_32914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32914__$1,(4),in$);
} else {
if((state_val_32915 === (23))){
var inst_32907 = (state_32914[(2)]);
var state_32914__$1 = state_32914;
var statearr_32981_34069 = state_32914__$1;
(statearr_32981_34069[(2)] = inst_32907);

(statearr_32981_34069[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (19))){
var inst_32892 = (state_32914[(2)]);
var state_32914__$1 = state_32914;
var statearr_32982_34071 = state_32914__$1;
(statearr_32982_34071[(2)] = inst_32892);

(statearr_32982_34071[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (11))){
var inst_32857 = (state_32914[(8)]);
var inst_32875 = (state_32914[(7)]);
var inst_32875__$1 = cljs.core.seq(inst_32857);
var state_32914__$1 = (function (){var statearr_32983 = state_32914;
(statearr_32983[(7)] = inst_32875__$1);

return statearr_32983;
})();
if(inst_32875__$1){
var statearr_32986_34073 = state_32914__$1;
(statearr_32986_34073[(1)] = (14));

} else {
var statearr_32987_34074 = state_32914__$1;
(statearr_32987_34074[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (9))){
var inst_32899 = (state_32914[(2)]);
var inst_32901 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32914__$1 = (function (){var statearr_32988 = state_32914;
(statearr_32988[(15)] = inst_32899);

return statearr_32988;
})();
if(cljs.core.truth_(inst_32901)){
var statearr_32989_34076 = state_32914__$1;
(statearr_32989_34076[(1)] = (21));

} else {
var statearr_32994_34077 = state_32914__$1;
(statearr_32994_34077[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (5))){
var inst_32849 = cljs.core.async.close_BANG_(out);
var state_32914__$1 = state_32914;
var statearr_32995_34078 = state_32914__$1;
(statearr_32995_34078[(2)] = inst_32849);

(statearr_32995_34078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (14))){
var inst_32875 = (state_32914[(7)]);
var inst_32877 = cljs.core.chunked_seq_QMARK_(inst_32875);
var state_32914__$1 = state_32914;
if(inst_32877){
var statearr_32997_34080 = state_32914__$1;
(statearr_32997_34080[(1)] = (17));

} else {
var statearr_32998_34081 = state_32914__$1;
(statearr_32998_34081[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (16))){
var inst_32895 = (state_32914[(2)]);
var state_32914__$1 = state_32914;
var statearr_33003_34082 = state_32914__$1;
(statearr_33003_34082[(2)] = inst_32895);

(statearr_33003_34082[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32915 === (10))){
var inst_32860 = (state_32914[(10)]);
var inst_32858 = (state_32914[(12)]);
var inst_32869 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32858,inst_32860);
var state_32914__$1 = state_32914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32914__$1,(13),out,inst_32869);
} else {
if((state_val_32915 === (18))){
var inst_32875 = (state_32914[(7)]);
var inst_32885 = cljs.core.first(inst_32875);
var state_32914__$1 = state_32914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32914__$1,(20),out,inst_32885);
} else {
if((state_val_32915 === (8))){
var inst_32859 = (state_32914[(9)]);
var inst_32860 = (state_32914[(10)]);
var inst_32862 = (inst_32860 < inst_32859);
var inst_32863 = inst_32862;
var state_32914__$1 = state_32914;
if(cljs.core.truth_(inst_32863)){
var statearr_33008_34084 = state_32914__$1;
(statearr_33008_34084[(1)] = (10));

} else {
var statearr_33009_34085 = state_32914__$1;
(statearr_33009_34085[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30594__auto__))
;
return ((function (switch__30275__auto__,c__30594__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30276__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30276__auto____0 = (function (){
var statearr_33012 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33012[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30276__auto__);

(statearr_33012[(1)] = (1));

return statearr_33012;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30276__auto____1 = (function (state_32914){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_32914);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e33013){if((e33013 instanceof Object)){
var ex__30279__auto__ = e33013;
var statearr_33014_34086 = state_32914;
(statearr_33014_34086[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33013;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34091 = state_32914;
state_32914 = G__34091;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30276__auto__ = function(state_32914){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30276__auto____1.call(this,state_32914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30276__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30276__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto__))
})();
var state__30596__auto__ = (function (){var statearr_33015 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_33015[(6)] = c__30594__auto__);

return statearr_33015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto__))
);

return c__30594__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33024 = arguments.length;
switch (G__33024) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33030 = arguments.length;
switch (G__33030) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33033 = arguments.length;
switch (G__33033) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30594__auto___34112 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto___34112,out){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto___34112,out){
return (function (state_33057){
var state_val_33058 = (state_33057[(1)]);
if((state_val_33058 === (7))){
var inst_33052 = (state_33057[(2)]);
var state_33057__$1 = state_33057;
var statearr_33059_34119 = state_33057__$1;
(statearr_33059_34119[(2)] = inst_33052);

(statearr_33059_34119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (1))){
var inst_33034 = null;
var state_33057__$1 = (function (){var statearr_33060 = state_33057;
(statearr_33060[(7)] = inst_33034);

return statearr_33060;
})();
var statearr_33061_34124 = state_33057__$1;
(statearr_33061_34124[(2)] = null);

(statearr_33061_34124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (4))){
var inst_33037 = (state_33057[(8)]);
var inst_33037__$1 = (state_33057[(2)]);
var inst_33038 = (inst_33037__$1 == null);
var inst_33039 = cljs.core.not(inst_33038);
var state_33057__$1 = (function (){var statearr_33062 = state_33057;
(statearr_33062[(8)] = inst_33037__$1);

return statearr_33062;
})();
if(inst_33039){
var statearr_33063_34129 = state_33057__$1;
(statearr_33063_34129[(1)] = (5));

} else {
var statearr_33064_34130 = state_33057__$1;
(statearr_33064_34130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (6))){
var state_33057__$1 = state_33057;
var statearr_33065_34131 = state_33057__$1;
(statearr_33065_34131[(2)] = null);

(statearr_33065_34131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (3))){
var inst_33054 = (state_33057[(2)]);
var inst_33055 = cljs.core.async.close_BANG_(out);
var state_33057__$1 = (function (){var statearr_33067 = state_33057;
(statearr_33067[(9)] = inst_33054);

return statearr_33067;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33057__$1,inst_33055);
} else {
if((state_val_33058 === (2))){
var state_33057__$1 = state_33057;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33057__$1,(4),ch);
} else {
if((state_val_33058 === (11))){
var inst_33037 = (state_33057[(8)]);
var inst_33046 = (state_33057[(2)]);
var inst_33034 = inst_33037;
var state_33057__$1 = (function (){var statearr_33068 = state_33057;
(statearr_33068[(10)] = inst_33046);

(statearr_33068[(7)] = inst_33034);

return statearr_33068;
})();
var statearr_33069_34143 = state_33057__$1;
(statearr_33069_34143[(2)] = null);

(statearr_33069_34143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (9))){
var inst_33037 = (state_33057[(8)]);
var state_33057__$1 = state_33057;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33057__$1,(11),out,inst_33037);
} else {
if((state_val_33058 === (5))){
var inst_33037 = (state_33057[(8)]);
var inst_33034 = (state_33057[(7)]);
var inst_33041 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33037,inst_33034);
var state_33057__$1 = state_33057;
if(inst_33041){
var statearr_33071_34151 = state_33057__$1;
(statearr_33071_34151[(1)] = (8));

} else {
var statearr_33072_34152 = state_33057__$1;
(statearr_33072_34152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (10))){
var inst_33049 = (state_33057[(2)]);
var state_33057__$1 = state_33057;
var statearr_33074_34155 = state_33057__$1;
(statearr_33074_34155[(2)] = inst_33049);

(statearr_33074_34155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33058 === (8))){
var inst_33034 = (state_33057[(7)]);
var tmp33070 = inst_33034;
var inst_33034__$1 = tmp33070;
var state_33057__$1 = (function (){var statearr_33075 = state_33057;
(statearr_33075[(7)] = inst_33034__$1);

return statearr_33075;
})();
var statearr_33076_34158 = state_33057__$1;
(statearr_33076_34158[(2)] = null);

(statearr_33076_34158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__30594__auto___34112,out))
;
return ((function (switch__30275__auto__,c__30594__auto___34112,out){
return (function() {
var cljs$core$async$state_machine__30276__auto__ = null;
var cljs$core$async$state_machine__30276__auto____0 = (function (){
var statearr_33077 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33077[(0)] = cljs$core$async$state_machine__30276__auto__);

(statearr_33077[(1)] = (1));

return statearr_33077;
});
var cljs$core$async$state_machine__30276__auto____1 = (function (state_33057){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_33057);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e33078){if((e33078 instanceof Object)){
var ex__30279__auto__ = e33078;
var statearr_33079_34161 = state_33057;
(statearr_33079_34161[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33078;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34162 = state_33057;
state_33057 = G__34162;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$state_machine__30276__auto__ = function(state_33057){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30276__auto____1.call(this,state_33057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30276__auto____0;
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30276__auto____1;
return cljs$core$async$state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto___34112,out))
})();
var state__30596__auto__ = (function (){var statearr_33092 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_33092[(6)] = c__30594__auto___34112);

return statearr_33092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto___34112,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33094 = arguments.length;
switch (G__33094) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30594__auto___34166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto___34166,out){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto___34166,out){
return (function (state_33132){
var state_val_33133 = (state_33132[(1)]);
if((state_val_33133 === (7))){
var inst_33128 = (state_33132[(2)]);
var state_33132__$1 = state_33132;
var statearr_33134_34167 = state_33132__$1;
(statearr_33134_34167[(2)] = inst_33128);

(statearr_33134_34167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (1))){
var inst_33095 = (new Array(n));
var inst_33096 = inst_33095;
var inst_33097 = (0);
var state_33132__$1 = (function (){var statearr_33135 = state_33132;
(statearr_33135[(7)] = inst_33096);

(statearr_33135[(8)] = inst_33097);

return statearr_33135;
})();
var statearr_33136_34168 = state_33132__$1;
(statearr_33136_34168[(2)] = null);

(statearr_33136_34168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (4))){
var inst_33100 = (state_33132[(9)]);
var inst_33100__$1 = (state_33132[(2)]);
var inst_33101 = (inst_33100__$1 == null);
var inst_33102 = cljs.core.not(inst_33101);
var state_33132__$1 = (function (){var statearr_33137 = state_33132;
(statearr_33137[(9)] = inst_33100__$1);

return statearr_33137;
})();
if(inst_33102){
var statearr_33138_34170 = state_33132__$1;
(statearr_33138_34170[(1)] = (5));

} else {
var statearr_33139_34171 = state_33132__$1;
(statearr_33139_34171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (15))){
var inst_33122 = (state_33132[(2)]);
var state_33132__$1 = state_33132;
var statearr_33140_34172 = state_33132__$1;
(statearr_33140_34172[(2)] = inst_33122);

(statearr_33140_34172[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (13))){
var state_33132__$1 = state_33132;
var statearr_33141_34173 = state_33132__$1;
(statearr_33141_34173[(2)] = null);

(statearr_33141_34173[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (6))){
var inst_33097 = (state_33132[(8)]);
var inst_33118 = (inst_33097 > (0));
var state_33132__$1 = state_33132;
if(cljs.core.truth_(inst_33118)){
var statearr_33142_34175 = state_33132__$1;
(statearr_33142_34175[(1)] = (12));

} else {
var statearr_33143_34178 = state_33132__$1;
(statearr_33143_34178[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (3))){
var inst_33130 = (state_33132[(2)]);
var state_33132__$1 = state_33132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33132__$1,inst_33130);
} else {
if((state_val_33133 === (12))){
var inst_33096 = (state_33132[(7)]);
var inst_33120 = cljs.core.vec(inst_33096);
var state_33132__$1 = state_33132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33132__$1,(15),out,inst_33120);
} else {
if((state_val_33133 === (2))){
var state_33132__$1 = state_33132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33132__$1,(4),ch);
} else {
if((state_val_33133 === (11))){
var inst_33112 = (state_33132[(2)]);
var inst_33113 = (new Array(n));
var inst_33096 = inst_33113;
var inst_33097 = (0);
var state_33132__$1 = (function (){var statearr_33144 = state_33132;
(statearr_33144[(10)] = inst_33112);

(statearr_33144[(7)] = inst_33096);

(statearr_33144[(8)] = inst_33097);

return statearr_33144;
})();
var statearr_33145_34180 = state_33132__$1;
(statearr_33145_34180[(2)] = null);

(statearr_33145_34180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (9))){
var inst_33096 = (state_33132[(7)]);
var inst_33110 = cljs.core.vec(inst_33096);
var state_33132__$1 = state_33132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33132__$1,(11),out,inst_33110);
} else {
if((state_val_33133 === (5))){
var inst_33100 = (state_33132[(9)]);
var inst_33096 = (state_33132[(7)]);
var inst_33105 = (state_33132[(11)]);
var inst_33097 = (state_33132[(8)]);
var inst_33104 = (inst_33096[inst_33097] = inst_33100);
var inst_33105__$1 = (inst_33097 + (1));
var inst_33106 = (inst_33105__$1 < n);
var state_33132__$1 = (function (){var statearr_33146 = state_33132;
(statearr_33146[(12)] = inst_33104);

(statearr_33146[(11)] = inst_33105__$1);

return statearr_33146;
})();
if(cljs.core.truth_(inst_33106)){
var statearr_33147_34181 = state_33132__$1;
(statearr_33147_34181[(1)] = (8));

} else {
var statearr_33148_34183 = state_33132__$1;
(statearr_33148_34183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (14))){
var inst_33125 = (state_33132[(2)]);
var inst_33126 = cljs.core.async.close_BANG_(out);
var state_33132__$1 = (function (){var statearr_33150 = state_33132;
(statearr_33150[(13)] = inst_33125);

return statearr_33150;
})();
var statearr_33151_34186 = state_33132__$1;
(statearr_33151_34186[(2)] = inst_33126);

(statearr_33151_34186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (10))){
var inst_33116 = (state_33132[(2)]);
var state_33132__$1 = state_33132;
var statearr_33152_34191 = state_33132__$1;
(statearr_33152_34191[(2)] = inst_33116);

(statearr_33152_34191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33133 === (8))){
var inst_33096 = (state_33132[(7)]);
var inst_33105 = (state_33132[(11)]);
var tmp33149 = inst_33096;
var inst_33096__$1 = tmp33149;
var inst_33097 = inst_33105;
var state_33132__$1 = (function (){var statearr_33153 = state_33132;
(statearr_33153[(7)] = inst_33096__$1);

(statearr_33153[(8)] = inst_33097);

return statearr_33153;
})();
var statearr_33154_34205 = state_33132__$1;
(statearr_33154_34205[(2)] = null);

(statearr_33154_34205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30594__auto___34166,out))
;
return ((function (switch__30275__auto__,c__30594__auto___34166,out){
return (function() {
var cljs$core$async$state_machine__30276__auto__ = null;
var cljs$core$async$state_machine__30276__auto____0 = (function (){
var statearr_33155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33155[(0)] = cljs$core$async$state_machine__30276__auto__);

(statearr_33155[(1)] = (1));

return statearr_33155;
});
var cljs$core$async$state_machine__30276__auto____1 = (function (state_33132){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_33132);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e33156){if((e33156 instanceof Object)){
var ex__30279__auto__ = e33156;
var statearr_33157_34223 = state_33132;
(statearr_33157_34223[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33156;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34228 = state_33132;
state_33132 = G__34228;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$state_machine__30276__auto__ = function(state_33132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30276__auto____1.call(this,state_33132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30276__auto____0;
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30276__auto____1;
return cljs$core$async$state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto___34166,out))
})();
var state__30596__auto__ = (function (){var statearr_33158 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_33158[(6)] = c__30594__auto___34166);

return statearr_33158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto___34166,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33160 = arguments.length;
switch (G__33160) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30594__auto___34247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__30594__auto___34247,out){
return (function (){
var f__30595__auto__ = (function (){var switch__30275__auto__ = ((function (c__30594__auto___34247,out){
return (function (state_33203){
var state_val_33204 = (state_33203[(1)]);
if((state_val_33204 === (7))){
var inst_33199 = (state_33203[(2)]);
var state_33203__$1 = state_33203;
var statearr_33205_34253 = state_33203__$1;
(statearr_33205_34253[(2)] = inst_33199);

(statearr_33205_34253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33204 === (1))){
var inst_33162 = [];
var inst_33163 = inst_33162;
var inst_33164 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33203__$1 = (function (){var statearr_33206 = state_33203;
(statearr_33206[(7)] = inst_33164);

(statearr_33206[(8)] = inst_33163);

return statearr_33206;
})();
var statearr_33207_34259 = state_33203__$1;
(statearr_33207_34259[(2)] = null);

(statearr_33207_34259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33204 === (4))){
var inst_33167 = (state_33203[(9)]);
var inst_33167__$1 = (state_33203[(2)]);
var inst_33168 = (inst_33167__$1 == null);
var inst_33169 = cljs.core.not(inst_33168);
var state_33203__$1 = (function (){var statearr_33208 = state_33203;
(statearr_33208[(9)] = inst_33167__$1);

return statearr_33208;
})();
if(inst_33169){
var statearr_33209_34270 = state_33203__$1;
(statearr_33209_34270[(1)] = (5));

} else {
var statearr_33210_34275 = state_33203__$1;
(statearr_33210_34275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33204 === (15))){
var inst_33193 = (state_33203[(2)]);
var state_33203__$1 = state_33203;
var statearr_33211_34280 = state_33203__$1;
(statearr_33211_34280[(2)] = inst_33193);

(statearr_33211_34280[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33204 === (13))){
var state_33203__$1 = state_33203;
var statearr_33212_34285 = state_33203__$1;
(statearr_33212_34285[(2)] = null);

(statearr_33212_34285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33204 === (6))){
var inst_33163 = (state_33203[(8)]);
var inst_33188 = inst_33163.length;
var inst_33189 = (inst_33188 > (0));
var state_33203__$1 = state_33203;
if(cljs.core.truth_(inst_33189)){
var statearr_33214_34286 = state_33203__$1;
(statearr_33214_34286[(1)] = (12));

} else {
var statearr_33215_34287 = state_33203__$1;
(statearr_33215_34287[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33204 === (3))){
var inst_33201 = (state_33203[(2)]);
var state_33203__$1 = state_33203;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33203__$1,inst_33201);
} else {
if((state_val_33204 === (12))){
var inst_33163 = (state_33203[(8)]);
var inst_33191 = cljs.core.vec(inst_33163);
var state_33203__$1 = state_33203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33203__$1,(15),out,inst_33191);
} else {
if((state_val_33204 === (2))){
var state_33203__$1 = state_33203;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33203__$1,(4),ch);
} else {
if((state_val_33204 === (11))){
var inst_33167 = (state_33203[(9)]);
var inst_33171 = (state_33203[(10)]);
var inst_33181 = (state_33203[(2)]);
var inst_33182 = [];
var inst_33183 = inst_33182.push(inst_33167);
var inst_33163 = inst_33182;
var inst_33164 = inst_33171;
var state_33203__$1 = (function (){var statearr_33216 = state_33203;
(statearr_33216[(11)] = inst_33183);

(statearr_33216[(7)] = inst_33164);

(statearr_33216[(12)] = inst_33181);

(statearr_33216[(8)] = inst_33163);

return statearr_33216;
})();
var statearr_33219_34296 = state_33203__$1;
(statearr_33219_34296[(2)] = null);

(statearr_33219_34296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33204 === (9))){
var inst_33163 = (state_33203[(8)]);
var inst_33179 = cljs.core.vec(inst_33163);
var state_33203__$1 = state_33203;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33203__$1,(11),out,inst_33179);
} else {
if((state_val_33204 === (5))){
var inst_33164 = (state_33203[(7)]);
var inst_33167 = (state_33203[(9)]);
var inst_33171 = (state_33203[(10)]);
var inst_33171__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33167) : f.call(null,inst_33167));
var inst_33172 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33171__$1,inst_33164);
var inst_33173 = cljs.core.keyword_identical_QMARK_(inst_33164,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33174 = ((inst_33172) || (inst_33173));
var state_33203__$1 = (function (){var statearr_33224 = state_33203;
(statearr_33224[(10)] = inst_33171__$1);

return statearr_33224;
})();
if(cljs.core.truth_(inst_33174)){
var statearr_33225_34306 = state_33203__$1;
(statearr_33225_34306[(1)] = (8));

} else {
var statearr_33226_34307 = state_33203__$1;
(statearr_33226_34307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33204 === (14))){
var inst_33196 = (state_33203[(2)]);
var inst_33197 = cljs.core.async.close_BANG_(out);
var state_33203__$1 = (function (){var statearr_33228 = state_33203;
(statearr_33228[(13)] = inst_33196);

return statearr_33228;
})();
var statearr_33231_34309 = state_33203__$1;
(statearr_33231_34309[(2)] = inst_33197);

(statearr_33231_34309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33204 === (10))){
var inst_33186 = (state_33203[(2)]);
var state_33203__$1 = state_33203;
var statearr_33232_34314 = state_33203__$1;
(statearr_33232_34314[(2)] = inst_33186);

(statearr_33232_34314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33204 === (8))){
var inst_33167 = (state_33203[(9)]);
var inst_33171 = (state_33203[(10)]);
var inst_33163 = (state_33203[(8)]);
var inst_33176 = inst_33163.push(inst_33167);
var tmp33227 = inst_33163;
var inst_33163__$1 = tmp33227;
var inst_33164 = inst_33171;
var state_33203__$1 = (function (){var statearr_33233 = state_33203;
(statearr_33233[(7)] = inst_33164);

(statearr_33233[(14)] = inst_33176);

(statearr_33233[(8)] = inst_33163__$1);

return statearr_33233;
})();
var statearr_33234_34315 = state_33203__$1;
(statearr_33234_34315[(2)] = null);

(statearr_33234_34315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30594__auto___34247,out))
;
return ((function (switch__30275__auto__,c__30594__auto___34247,out){
return (function() {
var cljs$core$async$state_machine__30276__auto__ = null;
var cljs$core$async$state_machine__30276__auto____0 = (function (){
var statearr_33235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33235[(0)] = cljs$core$async$state_machine__30276__auto__);

(statearr_33235[(1)] = (1));

return statearr_33235;
});
var cljs$core$async$state_machine__30276__auto____1 = (function (state_33203){
while(true){
var ret_value__30277__auto__ = (function (){try{while(true){
var result__30278__auto__ = switch__30275__auto__(state_33203);
if(cljs.core.keyword_identical_QMARK_(result__30278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30278__auto__;
}
break;
}
}catch (e33236){if((e33236 instanceof Object)){
var ex__30279__auto__ = e33236;
var statearr_33237_34317 = state_33203;
(statearr_33237_34317[(5)] = ex__30279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33236;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34318 = state_33203;
state_33203 = G__34318;
continue;
} else {
return ret_value__30277__auto__;
}
break;
}
});
cljs$core$async$state_machine__30276__auto__ = function(state_33203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30276__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30276__auto____1.call(this,state_33203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30276__auto____0;
cljs$core$async$state_machine__30276__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30276__auto____1;
return cljs$core$async$state_machine__30276__auto__;
})()
;})(switch__30275__auto__,c__30594__auto___34247,out))
})();
var state__30596__auto__ = (function (){var statearr_33247 = (f__30595__auto__.cljs$core$IFn$_invoke$arity$0 ? f__30595__auto__.cljs$core$IFn$_invoke$arity$0() : f__30595__auto__.call(null));
(statearr_33247[(6)] = c__30594__auto___34247);

return statearr_33247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30596__auto__);
});})(c__30594__auto___34247,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
