montageDefine("60bf33b","lib/_stream_transform",{dependencies:["./_stream_duplex","core-util-is","inherits"],factory:function(e,t,n){function r(e,t){this.afterTransform=function(e,n){return i(t,e,n)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null}function i(e,t,n){var r=e._transformState;r.transforming=!1;var i=r.writecb;if(!i)return e.emit("error",Error("no writecb in Transform class"));r.writechunk=null,r.writecb=null,null!==n&&void 0!==n&&e.push(n),i&&i(t);var a=e._readableState;a.reading=!1,(a.needReadable||a.length<a.highWaterMark)&&e._read(a.highWaterMark)}function a(e){if(!(this instanceof a))return new a(e);s.call(this,e),this._transformState=new r(e,this);var t=this;this._readableState.needReadable=!0,this._readableState.sync=!1,this.once("finish",function(){"function"==typeof this._flush?this._flush(function(e){o(t,e)}):o(t)})}function o(e,t){if(t)return e.emit("error",t);var n=e._writableState;e._readableState;var r=e._transformState;if(n.length)throw Error("calling transform done when ws.length != 0");if(r.transforming)throw Error("calling transform done when still transforming");return e.push(null)}n.exports=a;var s=e("./_stream_duplex"),l=e("core-util-is");l.inherits=e("inherits"),l.inherits(a,s),a.prototype.push=function(e,t){return this._transformState.needTransform=!1,s.prototype.push.call(this,e,t)},a.prototype._transform=function(){throw Error("not implemented")},a.prototype._write=function(e,t,n){var r=this._transformState;if(r.writecb=n,r.writechunk=e,r.writeencoding=t,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},a.prototype._read=function(){var e=this._transformState;null!==e.writechunk&&e.writecb&&!e.transforming?(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform)):e.needTransform=!0}}});