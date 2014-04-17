montageDefine("8c03f87","ui/rich-text-editor/overlays/rich-text-resizer.reel/rich-text-resizer",{dependencies:["montage/ui/component","montage/core/dom","montage/core/geometry/point"],factory:function(e,t){var n=e("montage/ui/component").Component,i=e("montage/core/dom"),r=e("montage/core/geometry/point").Point;t.RichTextResizer=n.specialize({_isActive:{enumerable:!1,value:!1},_editor:{enumerable:!1,value:null},target:{enumerable:!1,value:null},_draggedElement:{enumerable:!1,value:null},_needsReset:{enumerable:!1,value:!1},initWithEditor:{value:function(e){this._editor=e}},editorMouseDown:{value:function(e){var t=e.target;return this._isActive&&t===this.element?(e.preventDefault(),e.stopPropagation(),!0):void 0}},editorTouchStart:{value:function(e){this.editorMouseDown(e)}},editorMouseUp:{value:function(e){var t=e.target,n=this.target;if(this._observedPointer)return!0;if(t===this.element&&this._editor.activeOverlay==this)this._editor.hideOverlay(),e.target=this.target,e.preventDefault(),e.stopPropagation();else{if("IMG"===t.tagName)return t!==n&&(n&&(n.classList.remove("matte-Resizer-element"),0==n.classList.length&&n.removeAttribute("class")),this.target=t,this._needsReset=!0,this._isActive?this.needsDraw=!0:(this._ignoreNextSelectionchanged=!0,this._editor.showOverlay(this))),e.preventDefault(),e.stopPropagation(),!0;this._editor.activeOverlay==this&&this._editor.hideOverlay()}return!1}},editorTouchEnd:{value:function(e){this.editorMouseUp(e)}},editorSelectionDidChange:{value:function(){return this._ignoreNextSelectionchanged||this._finalizeDrag?this._ignoreNextSelectionchanged=!1:(this._editor.activeOverlay==this&&this._editor.hideOverlay(),this.target=null),!1}},draw:{enumerable:!1,value:function(){var e,t=this.element,n=this.target,a=this._editor.innerElement;if(this._needsReset){var o,s,l=function(e){for(s=e.offsetTop,o=e.offsetLeft;(e=e.offsetParent)&&e!=a;)s+=e.offsetTop,o+=e.offsetLeft};l(n),e=t.style,e.width=n.offsetWidth+"px",e.height=n.offsetHeight+"px",e.top=s+"px",e.left=o+"px",this._editor.innerElement.classList.remove("matte-Editor--resizing"),n.classList.add("matte-Resizer-element"),this.image.src=n.src,this.image.title=n.title,this.image.alt=n.alt,this._selectElement(n),this._needsReset=!1}if(this._draggedElement){var u=(new r).init(0,0),c=i.convertPointFromNodeToPage(t,u),h=this._cursorPosition,d=this._draggedElement.getAttribute("data-montage-id").substring("matte-resizer-handle-".length),p=this._resizerFrameInfo,f=p.ratio,m=parseFloat(t.style.height,10),v=parseFloat(t.style.width,10),g=parseFloat(t.style.top,10),_=parseFloat(t.style.left,10),b=15;this._editor.innerElement.classList.add("matte-Editor--resizing"),"n"==d?(m+=c.y-h.y,g=p.top-(m-p.height)):"ne"==d?(m+=c.y-h.y,v=Math.round(m*f),h.x>c.x+v&&(v=h.x-c.x,m=Math.round(v/f)),g=p.top-(m-p.height)):"e"==d?v=h.x-c.x:"se"==d?(m=h.y-c.y,v=Math.round(m*f),h.x>c.x+v&&(v=h.x-c.x,m=Math.round(v/f))):"s"==d?m=h.y-c.y:"sw"==d?(m=h.y-c.y,v=Math.round(m*f),h.x<=c.x-v+t.clientWidth&&(v=t.clientWidth+c.x-h.x,m=Math.round(v/f)),_=p.left-(v-p.width)):"w"==d?(v+=c.x-h.x,_=p.left-(v-p.width)):"nw"==d&&(m+=c.y-h.y,v=Math.round(m*f),h.x<=c.x-v+t.clientWidth&&(v=t.clientWidth+c.x-h.x,m=Math.round(v/f)),g=p.top-(m-p.height),_=p.left-(v-p.width)),m>b&&v>b&&(t.style.height=m+"px",t.style.width=v+"px",t.style.top=g+"px",t.style.left=_+"px")}if(this._finalizeDrag){v=t.clientWidth,m=t.clientHeight,this._editor.innerElement.classList.remove("matte-Editor--resizing"),n.classList.remove("matte-Resizer-element"),0==n.classList.length&&n.removeAttribute("class"),this._selectElement(n);var y,w,E=document.createElement("div");E.appendChild(n.cloneNode(!0)),y=E.firstChild,y.width=v,y.height=m,y.style.removeProperty("width"),y.style.removeProperty("height"),w=y.id,y.id="matte-editor-resized-image",this._editor.execCommand("inserthtml",!1,E.innerHTML,"Resizing Image"),n=document.getElementById(y.id),n&&(void 0!==w&&""!==w?n.id=w:n.removeAttribute("id"),this.target=n,this._needsReset=!0,this.needsDraw=!0),this._finalizeDrag=!1}}},didBecomeActive:{value:function(){this._isActive=!0,this.element.addEventListener(window.Touch?"touchstart":"mousedown",this,!1),window.addEventListener("resize",this,!1)}},didBecomeInactive:{value:function(){var e=this.target;this._isActive=!1,this.element.removeEventListener(window.Touch?"touchstart":"mousedown",this,!1),window.removeEventListener("resize",this,!1),this._draggedElement&&(window.Touch?(document.removeEventListener("touchmove",this),document.removeEventListener("touchend",this)):(document.removeEventListener("mousemove",this),document.removeEventListener("mouseup",this)),this._releaseInterest()),e&&(e.classList.remove("matte-Resizer-element"),0==e.classList.length&&e.removeAttribute("class"),this._editor.markDirty()),this.target=null,this._needsReset=!1,this._draggedElement=null,this._finalizeDrag=!1}},handleResize:{enumerable:!1,value:function(){this._needsReset=!0,this.needsDraw=!0}},handleMousedown:{value:function(e){var t=e.target,n=this.element;t.classList.contains("matte-Resizer-handle")&&(window.Touch?(this._observePointer(t.id),document.addEventListener("touchmove",this),document.addEventListener("touchend",this)):(this._observePointer("mouse"),document.addEventListener("mousemove",this),document.addEventListener("mouseup",this)),this._resizerFrameInfo={width:n.clientWidth,height:n.clientHeight,left:parseInt(n.style.left,10),top:parseInt(n.style.top,10),ratio:n.clientWidth/n.clientHeight},this._cursorPosition={x:e.pageX,y:e.pageY},this._draggedElement=t,e.preventDefault(),e.stopPropagation())}},handleTouchstart:{value:function(e){this.handleMousedown(e)}},handleMousemove:{value:function(e){this._cursorPosition={x:e.pageX,y:e.pageY},this.needsDraw=!0,e.preventDefault(),e.stopPropagation()}},handleTouchmove:{value:function(e){this.handleMousemove(e)}},handleMouseup:{value:function(e){this._draggedElement&&(window.Touch?(document.removeEventListener("touchmove",this),document.removeEventListener("touchend",this)):(document.removeEventListener("mousemove",this),document.removeEventListener("mouseup",this)),this._draggedElement=null,this._finalizeDrag=!0,this.needsDraw=!0,this._releaseInterest(),e.preventDefault(),e.stopPropagation())}},handleTouchend:{value:function(e){this.handleMouseup(e)}},surrenderPointer:{value:function(){return!1}},_observePointer:{value:function(e){this.eventManager.claimPointer(e,this),this._observedPointer=e}},_releaseInterest:{value:function(){this.eventManager.forfeitPointer(this._observedPointer,this),this._observedPointer=null}},_selectElement:{value:function(e){this._ignoreNextSelectionchanged=!0,this._editor.selectElement(e)}}})}});