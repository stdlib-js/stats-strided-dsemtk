"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=i(function(w,n){
var f=require('@stdlib/stats-strided-dvariancetk/dist').ndarray,k=require('@stdlib/math-base-special-sqrt/dist');function p(e,r,a,t,y){return k(f(e,r,a,t,y)/e)}n.exports=p
});var q=i(function(z,v){
var x=require('@stdlib/strided-base-stride2offset/dist'),j=s();function l(e,r,a,t){return j(e,r,a,t,x(e,t))}v.exports=l
});var c=i(function(A,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=q(),_=s();R(d,"ndarray",_);o.exports=d
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=c(),u,m=O(E(__dirname,"./native.js"));b(m)?u=g:u=m;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
