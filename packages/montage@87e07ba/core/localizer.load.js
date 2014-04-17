montageDefine("87e07ba","core/localizer",{dependencies:["montage","core/messageformat","core/logger","core/serialization","core/promise","core/bindings","collections/listen/property-changes","frb/bindings","frb/stringify","frb/expand","frb/scope","core/messageformat-locale"],factory:function(e,t){var n=e("montage").Montage,r=e("core/messageformat"),i=e("core/logger").logger("localizer"),a=e("core/serialization").Serializer,o=e("core/serialization").Deserializer,s=e("core/promise").Promise,u=e("core/bindings").Bindings,l=(e("collections/listen/property-changes"),e("frb/bindings")),c=e("frb/stringify"),d=e("frb/expand"),h=e("frb/scope");r.locale=e("core/messageformat-locale");var f="key",p="default",v="montage_locale",m="locale",g="messages",b="manifest.json",y=function(){return""},_=/^[a-zA-Z]+(?:-[a-zA-Z0-9]+)*$/,E=t.Localizer=n.specialize({constructor:{value:function E(){this.super()}},init:{value:function(e){return this.locale=e||M.locale,this}},initWithMessages:{value:function(e,t){return this.locale=e,this.messages=t,this}},messageFormat:{serializable:!1,value:null},_messages:{value:null},messages:{get:function(){return this._messages},set:function(e){if(this._messages!==e){if(null!=e&&"object"!=typeof e)throw new TypeError(e," is not an object");this._messages=e}}},messagesPromise:{serializable:!1,value:null},_locale:{value:null},locale:{get:function(){return this._locale},set:function(e){if(!_.test(e))throw new TypeError("Language tag '"+e+"' is not valid. It must match http://tools.ietf.org/html/rfc5646 (alphanumeric characters separated by hyphens)");this._locale!==e&&(this._locale=e,this.messageFormat=new r(e))}},_availableLocales:{value:null},availableLocales:{get:function(){return this._availableLocales?this._availableLocales:this._availableLocales=this._manifest.get("files").get(m).get("files").then(function(e){return Object.keys(e)})}},_require:{value:"undefined"!=typeof global?global.require:"undefined"!=typeof window?window.require:null},require:{serializable:!1,get:function(){return this._require},set:function(e){this._require!==e&&(this.__manifest=null,this._require=e)}},__manifest:{value:null},_manifest:{depends:["require"],get:function(){var e=this.require;return e.packageDescription.manifest===!0?this.__manifest?this.__manifest:this.__manifest=e.async(b):s.reject(Error("Package has no manifest. "+e.location+'package.json must contain "manifest": true and '+e.location+b+" must exist"))}},loadMessages:{value:function(e,t){if(!this.require)throw Error("Cannot load messages as",this,"require is not set");null===e&&(e=5e3),this.messages=null;var n=this;this.require;var r=this._manifest;return e&&(r=r.timeout(e)),this.messagesPromise=r.get("files").then(function(e){return n._loadMessageFiles(e)}).then(function(e){return n._collapseMessages(e)}).fail(function(e){throw console.error("Could not load messages for '"+n.locale+"': "+e),e}).then(function(e){return"function"==typeof t&&t(e),e})}},_loadMessageFiles:{value:function(e){var t=this.require;if(!e)return s.reject(Error(t.location+b+" does not contain a 'files' property"));var n,r,a,o,u=[];if(!(m in e))return s.reject(Error("Package does not contain a '"+m+"' directory"));for(n=e[m].files,r=this._locale;""!==r;)n.hasOwnProperty(r)&&(a=n[r].files,(o=g+".js")in a||(o=g+".json")in a?u.push(t.async(m+"/"+r+"/"+o)):i.isDebug&&i.debug(this,"Warning: '"+m+"/"+r+"/' does not contain '"+g+".json' or '"+g+".js'")),r=r.substring(0,r.lastIndexOf("-"));if(!u.length)return s.reject(Error("Could not find any "+g+".json or "+g+".js files"));var l=s.all(u);if(i.isDebug){var c=this;l=l.then(function(e){return i.debug(c,"loaded "+e.length+" message files"),e})}return l}},_collapseMessages:{value:function(e){for(var t={},n=0,r=e.length;r>n;n++){var i=e[n];for(var a in i)a in t||(t[a]=i[a])}return this.messages=t,t}},_compiledMessageCache:{value:Object.create(null)},localizeSync:{value:function(e,t){var n,i,a;if(!e&&!t)throw Error("Key or default message must be truthy, not "+e+" and "+t);if(this._messages&&e in this._messages){if(n=this._messages[e],i=typeof n,"function"===i)return n;if("object"===i){if(!("message"in n))throw Error(n,"does not contain a 'message' property");n=n.message}}else n=t;if(n||(console.warn("No message or default message for key '"+e+"'"),n=e),n in this._compiledMessageCache)return this._compiledMessageCache[n];var o=this.messageFormat.parse(n);return o.program&&o.program.statements&&1===o.program.statements.length&&"string"===o.program.statements[0].type?(a=function(){return n},a.toString=a):a=Function("MessageFormat","return "+this.messageFormat.precompile(o))(r),this._compiledMessageCache[n]=a,a}},localize:{value:function(e,t,n,r){var i,a=this;if(n=n===void 0?!0:n,!this.messagesPromise)return i=s.resolve(this.localizeSync(e,t)),i.then(r),i;var o=function(){var n=a.localizeSync(e,t);return"function"==typeof r&&r(n),n};return n?this.messagesPromise.then(o,o):this.messagesPromise.then(o)}}}),w=E.specialize({init:{value:function(){var e=this.callDelegateMethod("getDefaultLocale");return e||"undefined"==typeof window||(window.localStorage&&(e=window.localStorage.getItem(v)),e=e||window.navigator.userLanguage||window.navigator.language),e=e||"en",this.locale=e,this.loadMessages().done(),this}},_delegate:{value:null},delegate:{get:function(){return this._delegate},set:function(e){this._delegate!==e&&(this._delegate=e,this.init())}},locale:{get:function(){return this._locale},set:function(e){try{Object.getPropertyDescriptor(E,"locale").set.call(this,e)}catch(t){e="en",Object.getPropertyDescriptor(E,"locale").set.call(this,e)}"undefined"!=typeof window&&window.localStorage&&window.localStorage.setItem(v,e)}},reset:{value:function(){return"undefined"!=typeof window&&window.localStorage&&window.localStorage.removeItem(v),this.init(),this._locale}}}),M=t.defaultLocalizer=(new w).init();t.localize=M.localize.bind(M);var P=t.Message=n.specialize({constructor:{value:function(){this.defineBinding("_data",{"<-":"_dataObject.toMap()"}),this._data.addMapChangeListener(this,"data")}},init:{value:function(e,t,n){return e&&(this.key=e),t&&(this.defaultMessage=t),n&&(this.data=n),this}},_localizer:{value:M},localizer:{get:function(){return this._localizer},set:function(e){this._localizer!=e&&(this._localizer=e,this._localize())}},_key:{value:null},key:{get:function(){return this._key},set:function(e){this._key!==e&&(this._key=e,this._localize())}},_defaultMessage:{value:null},defaultMessage:{get:function(){return this._defaultMessage},set:function(e){this._defaultMessage!==e&&(this._defaultMessage=e,this._localize())}},_isLocalizeQueued:{value:!1},_localize:{value:function(){if(!this._isLocalizeQueued){this._isLocalizeQueued=!0;var e=this,t=s.defer();this._messageFunction=t.promise,this.localized=this._messageFunction.then(function(t){return t(e._data.toObject())}),s.nextTick(function(){return e._isLocalizeQueued=!1,e._key||e._defaultMessage?(t.resolve(e._localizer.localize(e._key,e._defaultMessage)),void 0):(console.warn("Both key and default message are falsey for",e,"If this is in a repetition this warning can be ignored"),t.resolve(y),void 0)})}}},_messageFunction:{value:s.resolve(y)},_dataObject:{value:null},_data:{value:null},data:{get:function(){return this._data},set:function(e){this._dataObject!==e&&(this._dataObject=e)}},__localizedResolved:{value:""},_localizedDeferred:{value:s.defer()},localized:{get:function(){return this._localizedDeferred.promise},set:function(e){if(e!==this._localized){var t=this,n=s.defer();this._localizedDeferred.resolve(n.promise),e.then(n.resolve,n.reject),n.promise.then(function(e){return t.__localizedResolved=e}).done(),this._localizedDeferred=n}}},handleDataMapChange:{value:function(){this.localized=this._messageFunction.fcall(this._data.toObject())}},serializeSelf:{value:function(){var e={_bindingDescriptors:this._bindingDescriptors};return e.key=this._key,e.defaultMessage=this._defaultMessage,this._localizer!==M&&(e.localizer=this._localizer),e}},serializeForLocalizations:{value:function(e){var t,n,r={};n=l.getBindings(this),n&&n.key?(r[f]={},this._serializeBinding(this,r[f],n.key,e)):r[f]=this._key,n&&n.defaultMessage?(r[p]={},this._serializeBinding(this,r[p],n.defaultMessage,e)):r[p]=this._defaultMessage;var i=l.getBindings(this._data);t=this._data.toObject();for(var a in t)!t.hasOwnProperty(a)||i&&i[".get('"+a+"')"]||(r.data||(r.data={}),r.data[a]=t[a]);for(var o in i){var s=/\.get\('([^']+)'\)/.exec(o)[1];r.data||(r.data={}),r.data[s]={},this._serializeBinding(this._data,r.data[s],i[o],e)}return r}},_serializeBinding:{value:function(e,t,n,r){if(!("serializable"in n)||n.serializable){var i=n.sourceSyntax;if(n.source!==e){var a=r.addObjectReference(n.source),o=new h({type:"component",label:a["@"]});o.components=r,i=d(i,o)}var o=new h;o.components=r;var s=c(i,o);n.twoWay?t["<->"]=s:t["<-"]=s,n.converter?t.converter=n.converter:(t.convert=n.convert,t.revert=n.revert),n.trace&&(t.trace=!0)}}}}),T=function(e,t,n,r,i,a){var o=new P;for(var s in i)"string"==typeof i[s]?o.data.set(s,i[s]):u.defineBinding(o.data,".get('"+s+"')",i[s],{components:a});"object"==typeof n?u.defineBinding(o,"key",n,{components:a}):o.key=n,"object"==typeof r?u.defineBinding(o,"defaultMessage",r,{components:a}):o.defaultMessage=r,u.defineBinding(e,t,{"<-":"__localizedResolved",source:o,serializable:!1})};a.defineSerializationUnit("localizations",function(e,t){var n=l.getBindings(t);if(n){var r;for(var i in n){var a=n[i];if(P.prototype.isPrototypeOf(a.source)){r||(r={});var o=a.source;r[i]=o.serializeForLocalizations(e)}}return r}}),o.defineDeserializationUnit("localizations",function(e,t,n){for(var r in n){var a,o,s=n[r];f in s?(!i.isDebug||p in s||i.debug(this,"Warning: localized property '"+r+"' does not contain a default message property ("+p+"), in ",t),a=s[f],o=s[p],T(t,r,a,o,s.data,e)):console.error("localized property '"+r+"' must contain a key property ("+f+"), in ",n[r])}})}});