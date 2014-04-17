montageDefine("2a4cabc","sorted-array",{dependencies:["./shim","./generic-collection","./listen/property-changes","./listen/range-changes","sorted-array"],factory:function(e,t,n){"use strict";function r(e,t,n,i){return this instanceof r?(Array.isArray(e)?(this.array=e,e=e.splice(0,e.length)):this.array=[],this.contentEquals=t||Object.equals,this.contentCompare=n||Object.compare,this.getDefault=i||Function.noop,this.length=0,this.addEach(e),void 0):new r(e,t,n,i)}function i(e,t,n){for(var r=0,i=e.length-1;i>=r;){var a=r+i>>1,o=n(t,e[a]);if(o>0)r=a+1;else{if(!(0>o))return a;i=a-1}}return-(r+1)}function a(e,t,n,r){var a=i(e,t,n);if(0>a)return-1;for(;a>0&&r(t,e[a-1]);)a--;return r(t,e[a])?a:-1}function o(e,t,n,r){var a=i(e,t,n);if(0>a)return-1;for(;e.length-1>a&&r(t,e[a+1]);)a++;return r(t,e[a])?a:-1}function s(e,t,n){var r=i(e,t,n);if(0>r)return-r-1;for(var a=e.length-1;a>r&&0===n(t,e[r+1]);)r++;return r}n.exports=r,e("./shim");var l=e("./generic-collection"),u=e("./listen/property-changes"),c=e("./listen/range-changes");r.SortedArray=r,Object.addEach(r.prototype,l.prototype),Object.addEach(r.prototype,u.prototype),Object.addEach(r.prototype,c.prototype),r.prototype.isSorted=!0,r.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentCompare,this.getDefault)},r.prototype.has=function(e,t){if(t)throw Error("SortedSet#has does not support second argument: equals");var n=i(this.array,e,this.contentCompare);return n>=0&&this.contentEquals(this.array[n],e)},r.prototype.get=function(e,t){if(t)throw Error("SortedArray#get does not support second argument: equals");var n=a(this.array,e,this.contentCompare,this.contentEquals);return-1!==n?this.array[n]:this.getDefault(e)},r.prototype.add=function(e){var t=s(this.array,e,this.contentCompare);return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([e],[],t),this.array.splice(t,0,e),this.length++,this.dispatchesRangeChanges&&this.dispatchRangeChange([e],[],t),!0},r.prototype["delete"]=function(e,t){if(t)throw Error("SortedArray#delete does not support second argument: equals");var n=a(this.array,e,this.contentCompare,this.contentEquals);return-1!==n?(this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[e],n),this.array.splice(n,1),this.length--,this.dispatchesRangeChanges&&this.dispatchRangeChange([],[e],n),!0):!1},r.prototype.indexOf=function(e){return a(this.array,e,this.contentCompare,this.contentEquals)},r.prototype.lastIndexOf=function(e){return o(this.array,e,this.contentCompare,this.contentEquals)},r.prototype.find=function(e,t,n){if(t)throw Error("SortedArray#find does not support second argument: equals");if(n)throw Error("SortedArray#find does not support third argument: index");return a(this.array,e,this.contentCompare,this.contentEquals)},r.prototype.findLast=function(e,t,n){if(t)throw Error("SortedArray#findLast does not support second argument: equals");if(n)throw Error("SortedArray#findLast does not support third argument: index");return o(this.array,e,this.contentCompare,this.contentEquals)},r.prototype.push=function(){this.addEach(arguments)},r.prototype.unshift=function(){this.addEach(arguments)},r.prototype.pop=function(){return this.array.pop()},r.prototype.shift=function(){return this.array.shift()},r.prototype.slice=function(){return this.array.slice.apply(this.array,arguments)},r.prototype.splice=function(e,t){return this.swap(e,t,Array.prototype.slice.call(arguments,2))},r.prototype.swap=function(e,t,n){if(void 0===e&&void 0===t)return[];e=e||0,0>e&&(e+=this.length),void 0===t&&(t=1/0);var r=this.slice(e,e+t);return this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange(n,r,e),this.array.splice(e,t),this.addEach(n),this.dispatchesRangeChanges&&this.dispatchRangeChange(n,r,e),r},r.prototype.reduce=function(e,t){var n=arguments[2];return this.array.reduce(function(t,r,i){return e.call(n,t,r,i,this)},t,this)},r.prototype.reduceRight=function(){var e=arguments[2];return this.array.reduceRight(function(t,n,r){return callback.call(e,t,n,r,this)},basis,this)},r.prototype.min=function(){return this.length?this.array[0]:void 0},r.prototype.max=function(){return this.length?this.array[this.length-1]:void 0},r.prototype.one=function(){return this.array.one()},r.prototype.clear=function(){var e;this.dispatchesRangeChanges&&(e=this.array.slice(),this.dispatchBeforeRangeChange([],e,0)),this.length=0,this.array.clear(),this.dispatchesRangeChanges&&this.dispatchRangeChange([],e,0)},r.prototype.equals=function(e,t){return this.array.equals(e,t)},r.prototype.compare=function(e,t){return this.array.compare(e,t)},r.prototype.iterate=function(e,t){return new this.Iterator(this.array,e,t)},r.prototype.Iterator=Array.prototype.Iterator}});