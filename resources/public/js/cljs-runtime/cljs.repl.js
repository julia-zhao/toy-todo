goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__61703){
var map__61704 = p__61703;
var map__61704__$1 = (((((!((map__61704 == null))))?(((((map__61704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61704):map__61704);
var m = map__61704__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61704__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61704__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4120__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
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
var seq__61706_61991 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61707_61992 = null;
var count__61708_61993 = (0);
var i__61709_61994 = (0);
while(true){
if((i__61709_61994 < count__61708_61993)){
var f_61995 = chunk__61707_61992.cljs$core$IIndexed$_nth$arity$2(null,i__61709_61994);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_61995], 0));


var G__61997 = seq__61706_61991;
var G__61998 = chunk__61707_61992;
var G__61999 = count__61708_61993;
var G__62000 = (i__61709_61994 + (1));
seq__61706_61991 = G__61997;
chunk__61707_61992 = G__61998;
count__61708_61993 = G__61999;
i__61709_61994 = G__62000;
continue;
} else {
var temp__5735__auto___62002 = cljs.core.seq(seq__61706_61991);
if(temp__5735__auto___62002){
var seq__61706_62003__$1 = temp__5735__auto___62002;
if(cljs.core.chunked_seq_QMARK_(seq__61706_62003__$1)){
var c__4550__auto___62004 = cljs.core.chunk_first(seq__61706_62003__$1);
var G__62005 = cljs.core.chunk_rest(seq__61706_62003__$1);
var G__62006 = c__4550__auto___62004;
var G__62007 = cljs.core.count(c__4550__auto___62004);
var G__62008 = (0);
seq__61706_61991 = G__62005;
chunk__61707_61992 = G__62006;
count__61708_61993 = G__62007;
i__61709_61994 = G__62008;
continue;
} else {
var f_62011 = cljs.core.first(seq__61706_62003__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_62011], 0));


var G__62012 = cljs.core.next(seq__61706_62003__$1);
var G__62013 = null;
var G__62014 = (0);
var G__62015 = (0);
seq__61706_61991 = G__62012;
chunk__61707_61992 = G__62013;
count__61708_61993 = G__62014;
i__61709_61994 = G__62015;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_62024 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4120__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_62024], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_62024)))?cljs.core.second(arglists_62024):arglists_62024)], 0));
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
var seq__61718_62049 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__61719_62050 = null;
var count__61720_62051 = (0);
var i__61721_62052 = (0);
while(true){
if((i__61721_62052 < count__61720_62051)){
var vec__61746_62056 = chunk__61719_62050.cljs$core$IIndexed$_nth$arity$2(null,i__61721_62052);
var name_62057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61746_62056,(0),null);
var map__61749_62058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61746_62056,(1),null);
var map__61749_62059__$1 = (((((!((map__61749_62058 == null))))?(((((map__61749_62058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61749_62058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61749_62058):map__61749_62058);
var doc_62060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61749_62059__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_62061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61749_62059__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_62057], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_62061], 0));

if(cljs.core.truth_(doc_62060)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_62060], 0));
} else {
}


var G__62069 = seq__61718_62049;
var G__62070 = chunk__61719_62050;
var G__62071 = count__61720_62051;
var G__62072 = (i__61721_62052 + (1));
seq__61718_62049 = G__62069;
chunk__61719_62050 = G__62070;
count__61720_62051 = G__62071;
i__61721_62052 = G__62072;
continue;
} else {
var temp__5735__auto___62074 = cljs.core.seq(seq__61718_62049);
if(temp__5735__auto___62074){
var seq__61718_62076__$1 = temp__5735__auto___62074;
if(cljs.core.chunked_seq_QMARK_(seq__61718_62076__$1)){
var c__4550__auto___62077 = cljs.core.chunk_first(seq__61718_62076__$1);
var G__62079 = cljs.core.chunk_rest(seq__61718_62076__$1);
var G__62080 = c__4550__auto___62077;
var G__62081 = cljs.core.count(c__4550__auto___62077);
var G__62082 = (0);
seq__61718_62049 = G__62079;
chunk__61719_62050 = G__62080;
count__61720_62051 = G__62081;
i__61721_62052 = G__62082;
continue;
} else {
var vec__61752_62085 = cljs.core.first(seq__61718_62076__$1);
var name_62086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61752_62085,(0),null);
var map__61755_62087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61752_62085,(1),null);
var map__61755_62088__$1 = (((((!((map__61755_62087 == null))))?(((((map__61755_62087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61755_62087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61755_62087):map__61755_62087);
var doc_62089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61755_62088__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_62090 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61755_62088__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_62086], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_62090], 0));

if(cljs.core.truth_(doc_62089)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_62089], 0));
} else {
}


var G__62097 = cljs.core.next(seq__61718_62076__$1);
var G__62098 = null;
var G__62099 = (0);
var G__62100 = (0);
seq__61718_62049 = G__62097;
chunk__61719_62050 = G__62098;
count__61720_62051 = G__62099;
i__61721_62052 = G__62100;
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

var seq__61763 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__61764 = null;
var count__61765 = (0);
var i__61766 = (0);
while(true){
if((i__61766 < count__61765)){
var role = chunk__61764.cljs$core$IIndexed$_nth$arity$2(null,i__61766);
var temp__5735__auto___62106__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___62106__$1)){
var spec_62108 = temp__5735__auto___62106__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_62108)], 0));
} else {
}


var G__62113 = seq__61763;
var G__62114 = chunk__61764;
var G__62115 = count__61765;
var G__62116 = (i__61766 + (1));
seq__61763 = G__62113;
chunk__61764 = G__62114;
count__61765 = G__62115;
i__61766 = G__62116;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__61763);
if(temp__5735__auto____$1){
var seq__61763__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__61763__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__61763__$1);
var G__62118 = cljs.core.chunk_rest(seq__61763__$1);
var G__62119 = c__4550__auto__;
var G__62120 = cljs.core.count(c__4550__auto__);
var G__62121 = (0);
seq__61763 = G__62118;
chunk__61764 = G__62119;
count__61765 = G__62120;
i__61766 = G__62121;
continue;
} else {
var role = cljs.core.first(seq__61763__$1);
var temp__5735__auto___62124__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___62124__$2)){
var spec_62127 = temp__5735__auto___62124__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_62127)], 0));
} else {
}


var G__62130 = cljs.core.next(seq__61763__$1);
var G__62131 = null;
var G__62132 = (0);
var G__62133 = (0);
seq__61763 = G__62130;
chunk__61764 = G__62131;
count__61765 = G__62132;
i__61766 = G__62133;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
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
var G__62136 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__62137 = cljs.core.ex_cause(t);
via = G__62136;
t = G__62137;
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
var map__61801 = datafied_throwable;
var map__61801__$1 = (((((!((map__61801 == null))))?(((((map__61801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61801):map__61801);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61801__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61801__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__61801__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__61804 = cljs.core.last(via);
var map__61804__$1 = (((((!((map__61804 == null))))?(((((map__61804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61804):map__61804);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61804__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61804__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61804__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__61805 = data;
var map__61805__$1 = (((((!((map__61805 == null))))?(((((map__61805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61805.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61805):map__61805);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61805__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61805__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61805__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__61806 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__61806__$1 = (((((!((map__61806 == null))))?(((((map__61806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61806):map__61806);
var top_data = map__61806__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61806__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__61826 = phase;
var G__61826__$1 = (((G__61826 instanceof cljs.core.Keyword))?G__61826.fqn:null);
switch (G__61826__$1) {
case "read-source":
var map__61832 = data;
var map__61832__$1 = (((((!((map__61832 == null))))?(((((map__61832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61832):map__61832);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61832__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61832__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__61839 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__61839__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61839,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__61839);
var G__61839__$2 = (cljs.core.truth_((function (){var fexpr__61842 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61842.cljs$core$IFn$_invoke$arity$1 ? fexpr__61842.cljs$core$IFn$_invoke$arity$1(source) : fexpr__61842.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61839__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__61839__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61839__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__61839__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__61845 = top_data;
var G__61845__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61845,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__61845);
var G__61845__$2 = (cljs.core.truth_((function (){var fexpr__61846 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61846.cljs$core$IFn$_invoke$arity$1 ? fexpr__61846.cljs$core$IFn$_invoke$arity$1(source) : fexpr__61846.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__61845__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__61845__$1);
var G__61845__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61845__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__61845__$2);
var G__61845__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61845__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__61845__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61845__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__61845__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__61852 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61852,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61852,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61852,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61852,(3),null);
var G__61855 = top_data;
var G__61855__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61855,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__61855);
var G__61855__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61855__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__61855__$1);
var G__61855__$3 = (cljs.core.truth_((function (){var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61855__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__61855__$2);
var G__61855__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61855__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__61855__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61855__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__61855__$4;
}

break;
case "execution":
var vec__61862 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61862,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61862,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61862,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61862,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__61798_SHARP_){
var or__4120__auto__ = (p1__61798_SHARP_ == null);
if(or__4120__auto__){
return or__4120__auto__;
} else {
var fexpr__61869 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__61869.cljs$core$IFn$_invoke$arity$1 ? fexpr__61869.cljs$core$IFn$_invoke$arity$1(p1__61798_SHARP_) : fexpr__61869.call(null,p1__61798_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4120__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return line;
}
})();
var G__61873 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__61873__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61873,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__61873);
var G__61873__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61873__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__61873__$1);
var G__61873__$3 = (cljs.core.truth_((function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61873__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__61873__$2);
var G__61873__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61873__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__61873__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__61873__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__61873__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61826__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__61891){
var map__61893 = p__61891;
var map__61893__$1 = (((((!((map__61893 == null))))?(((((map__61893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__61893):map__61893);
var triage_data = map__61893__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61893__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61893__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61893__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61893__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61893__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61893__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61893__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61893__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = source;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = line;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4120__auto__ = class$;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__61903 = phase;
var G__61903__$1 = (((G__61903 instanceof cljs.core.Keyword))?G__61903.fqn:null);
switch (G__61903__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__61904 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__61905 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61906 = loc;
var G__61907 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__61915_62260 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__61916_62261 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__61917_62262 = true;
var _STAR_print_fn_STAR__temp_val__61918_62263 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61917_62262);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61918_62263);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61888_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__61888_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61916_62261);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61915_62260);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__61904,G__61905,G__61906,G__61907) : format.call(null,G__61904,G__61905,G__61906,G__61907));

break;
case "macroexpansion":
var G__61929 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__61930 = cause_type;
var G__61931 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61932 = loc;
var G__61933 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61929,G__61930,G__61931,G__61932,G__61933) : format.call(null,G__61929,G__61930,G__61931,G__61932,G__61933));

break;
case "compile-syntax-check":
var G__61938 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__61939 = cause_type;
var G__61940 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61941 = loc;
var G__61942 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61938,G__61939,G__61940,G__61941,G__61942) : format.call(null,G__61938,G__61939,G__61940,G__61941,G__61942));

break;
case "compilation":
var G__61945 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__61946 = cause_type;
var G__61947 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61948 = loc;
var G__61949 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61945,G__61946,G__61947,G__61948,G__61949) : format.call(null,G__61945,G__61946,G__61947,G__61948,G__61949));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__61954 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__61955 = symbol;
var G__61956 = loc;
var G__61957 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__61958_62275 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__61959_62276 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__61960_62277 = true;
var _STAR_print_fn_STAR__temp_val__61961_62278 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__61960_62277);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__61961_62278);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__61889_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__61889_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__61959_62276);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__61958_62275);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__61954,G__61955,G__61956,G__61957) : format.call(null,G__61954,G__61955,G__61956,G__61957));
} else {
var G__61969 = "Execution error%s at %s(%s).\n%s\n";
var G__61970 = cause_type;
var G__61971 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__61972 = loc;
var G__61973 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__61969,G__61970,G__61971,G__61972,G__61973) : format.call(null,G__61969,G__61970,G__61971,G__61972,G__61973));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61903__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
