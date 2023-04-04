"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[170],{36723:function(e,t,i){i.r(t),i.d(t,{default:function(){return c}});var a=i(96157),s=i(46338),r=i(41746),n=i(77687),l=i(38105),o=i(88913),d=i(71515),h=["q0"];function u(e,t,i,a,s,r,n){try{var l=e[r](n),o=l.value}catch(e){return void i(e)}l.done?t(o):Promise.resolve(o).then(a,s)}class c extends l.n{constructor(e,t){super(e,"FileDriver",t),this.playback="native"}attachCore(e,t,i){var a;try{var s=i.sourceParams?(0,r.u)(t,i.sourceParams):t,l=this.eventListeners.scope(e).on("error",(t=>{this.handleError(t,null==e.error?{severity:"warning"}:void 0)})),u=(e,t,i)=>{this.emit(this.Events.Loaded,{qualityLevels:t,quality:e,audioTracks:i,audioTrack:void 0,masterSource:void 0,liveState:this.getLiveState(),drm:!1})},c=()=>{var t="string"==typeof s?{[e.videoHeight]:{url:s}}:function(e){var{q0:t}=e,i=function(e,t){if(null==e)return{};var i={};for(var a in e)if({}.hasOwnProperty.call(e,a)){if(-1!==t.indexOf(a))continue;i[a]=e[a]}return i}(e,h),a=(0,d.R)(i).reduce(((e,t)=>{var[i,a]=t;return e[i]={url:a},e}),{});return t&&(a[0]={url:t}),a}(s);this.qualityLevels=t;var a="function"==typeof i.quality?i.quality(t):i.quality,[r,l]=(0,n.t)(t,a,!0,void 0);return this.currentQuality=r,[t,{},r,l]};if("string"==typeof s)l.once("loadedmetadata",(()=>{var[e,t,i]=c();this.emit(this.Events.MetadataChanged,{qualityLevels:e,audioTracks:t,masterSource:void 0}),l.once("canplay",(()=>{u(i,e,t)}))})),a=s,e.setAttribute("src",s),e.load();else{var[v,g,y,f]=c();l.once("loadedmetadata",(()=>{this.emit(this.Events.MetadataChanged,{qualityLevels:v,audioTracks:g,masterSource:void 0}),l.once("canplay",(()=>{u(y,v,g)}))})),a=f.url,e.setAttribute("src",f.url),e.load()}}catch(e){throw new o.X(null!=a?a:"",{cause:e})}}detachCore(){this.qualityLevels=void 0,this.currentQuality=void 0}getVideoQuality(){return this.currentQuality}isValidVideoQuality(e){var t;return null!=(null==(t=this.qualityLevels)||null==(t=t[e])?void 0:t.url)}switchSource(e){var t,i=this;return(t=function*(){var{media:t}=i;if(t&&t.src!==e){i.setSourceChanging(!0);var{currentTime:r,paused:n,playbackRate:l}=t;n||t.pause();var o=t.poster;try{t.poster=r>0?(0,a.W9)(t,{width:t.videoWidth,height:t.videoHeight}):o}catch(e){i.handleError(e,{severity:"warning",path:"switchSource:takeSnapshot"})}t.setAttribute("src",e);try{yield(0,s.Y)(t,{time:r,playbackRate:l,poster:o,autoPlay:!n})}catch(e){i.handleError(e,{severity:"warning",path:"switchSource:reloadVideo"})}finally{i.setSourceChanging(!1)}}},function(){var e=this,i=arguments;return new Promise((function(a,s){var r=t.apply(e,i);function n(e){u(r,a,s,n,l,"next",e)}function l(e){u(r,a,s,n,l,"throw",e)}n(void 0)}))})()}setVideoQuality(e){var t;if(e!==this.currentQuality){var{qualityLevels:i}=this;if(i&&this.isValidVideoQuality(e)&&!this.isSourceChanging()){var a=null==(t=i[e])?void 0:t.url;a&&this.switchSource(a).then((()=>{this.currentQuality=e,this.emit(this.Events.QualityChanged,{quality:e,auto:!1})}))}}}getAudioTrack(){}isValidAudioTrack(){return!1}setAudioTrack(){throw new Error("Method not implemented.")}setMaxQuality(){}setMaxAbrQuality(){}destroyCore(){}}},38105:function(e,t,i){i.d(t,{n:function(){return Q}});var a=i(55823),s=i(58245),r=i(33612),n=i(70866),l=i(85186),o=i(9374),d=i(61542),h=i(86275),u=i(35018),c=i(82128),v=i(45006),g=i(37998),y=i(2593),f=i(18168);function m(e){switch(e){case MediaError.MEDIA_ERR_NETWORK:return"network";case MediaError.MEDIA_ERR_DECODE:case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:return"media";default:return"generic"}}var p=i(86503),S=i(18430),E=i(47390),k=i(67106);function C(e,t,i,a,s,r,n){try{var l=e[r](n),o=l.value}catch(e){return void i(e)}l.done?t(o):Promise.resolve(o).then(a,s)}function w(e,t){var i,a,{url:s,interval:r=6e4,responseHandler:n=e=>Promise.resolve(200===e.status)}=e;return(0,k.s)({interval:()=>r,callback:(i=function*(){var e=yield fetch(s);(yield n(e))&&t()},a=function(){var e=this,t=arguments;return new Promise((function(a,s){var r=i.apply(e,t);function n(e){C(r,a,s,n,l,"next",e)}function l(e){C(r,a,s,n,l,"throw",e)}n(void 0)}))},function(){return a.apply(this,arguments)}),waitCallback:!0,autostart:!1})}var L=i(4556),D=i(90668);function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)({}).hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},b.apply(null,arguments)}class T extends s.b{constructor(e,t){void 0===t&&(t={}),super(),this.stalled=!1,this.startStalledTime=0,this.cancel=()=>{this.setStalled(!1),this.resetStallDetected()},this.progressHandler=()=>{var e=this.listener.target;this.stalledBuffer&&this.stalledBuffer.start===(0,c.BC)(e.buffered)&&this.stalledBuffer.end===(0,c.Q5)(e.buffered)||this.cancel()},this.timeupdateHandler=()=>{var e=this.listener.target;e.paused&&!e.seeking&&this.setStalledDelayed.isPending?this.resetStallDetected():this.setStalledDelayed.isPending?this.stallDetected():this.listener.off("timeupdate",this.timeupdateHandler)},this.poll=()=>{var e=this.listener.target;!this.isStalled()&&e.buffered.length>0&&(e.seeking||e.readyState<=e.HAVE_CURRENT_DATA&&e.networkState===e.NETWORK_LOADING)&&this.stallDetected()},this.options=b({},t,{delay:t.delay||5e3}),this.setStalledDelayed=(0,L.s)((()=>this.setStalled(!0)),this.options.delay),this.listener=(e instanceof HTMLMediaElement?new D.H(e):e).on("waiting",this.poll).on("seeking",this.poll)}stallDetected(){var e=this.listener.target;this.stalledBuffer={start:(0,c.BC)(e.buffered),end:(0,c.Q5)(e.buffered)},this.startStalledTime=Date.now(),this.setStalledDelayed(),this.listener.on("progress",this.progressHandler).on("timeupdate",this.timeupdateHandler).on("emptied",this.cancel)}resetStallDetected(){this.stalledBuffer=void 0,this.startStalledTime=0,this.listener.off("progress",this.progressHandler),this.listener.off("timeupdate",this.timeupdateHandler),this.listener.off("emptied",this.cancel),this.setStalledDelayed.cancel()}isStalled(){return this.stalled}setStalled(e){if(this.stalled!==e)if(this.stalled=e,this.stalled)this.emit("statechanged",{stalled:this.stalled,duration:0});else{var t=Math.max(Date.now()-this.startStalledTime,0);this.emit("statechanged",{stalled:this.stalled,duration:t})}}destroy(){this.resetStallDetected(),this.listener.off("waiting",this.poll),this.listener.off("seeking",this.poll),this.stalled=!1,this.emit("destroy"),this.removeAllListeners()}[Symbol.dispose](){return this.destroy()}}var P,M=i(54548);function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)({}).hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},O.apply(null,arguments)}class W extends s.b{constructor(e,t){var i,a;void 0===t&&(t={}),super(),this.waiting=!1,this.lastTime=-1,this.startWaitingTime=0,this.startWaiting=()=>{this.waiting||this.setWaitingDelayed.isPending||(this.lastTime=this.listener.target.currentTime,this.startWaitingTime=Date.now(),this.setWaitingDelayed(),this.listener.on("timeupdate",this.timeupdateHandler))},this.stopWaiting=()=>{this.setWaitingDelayed.cancel(),this.waiting&&(this.setWaiting(!1),this.listener.off("timeupdate",this.timeupdateHandler))},this.timeupdateHandler=()=>{var e=this.listener.target;e.paused?e.seeking&&!this.options.stopOnPauseIfSeeking||this.stopWaiting():this.lastTime!==e.currentTime&&this.stopWaiting()},this.options=O({},t,{delay:null!=(i=t.delay)?i:500,stopOnPauseIfSeeking:null!=(a=t.stopOnPauseIfSeeking)&&a}),this.setWaitingDelayed=(0,M.G)((0,L.s)((()=>this.setWaiting(!0)),this.options.delay),(()=>{this.lastTime=this.listener.target.currentTime,this.startWaitingTime=Date.now()})),this.listener=e instanceof HTMLMediaElement?new D.H(e):e,this.listener.on("waiting",this.startWaiting),this.listener.on("seeking",this.startWaiting)}setWaiting(e){if(this.waiting!==e)if(this.waiting=e,this.waiting)this.emit("statechanged",{waiting:!0,duration:0});else{var t=Math.max(Date.now()-this.startWaitingTime,0);this.lastTime=-1,this.startWaitingTime=0,this.emit("statechanged",{waiting:!1,duration:t})}}isWaiting(){return this.waiting}destroy(){this.listener.off("timeupdate",this.timeupdateHandler),this.listener.off("waiting",this.startWaiting),this.listener.off("seeking",this.startWaiting),this.waiting=!1,this.lastTime=-1,this.startWaitingTime=0,this.emit("destroy"),this.removeAllListeners()}[Symbol.dispose](){return this.destroy()}}function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)({}).hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},R.apply(null,arguments)}function _(e,t,i,a,s,r,n){try{var l=e[r](n),o=l.value}catch(e){return void i(e)}l.done?t(o):Promise.resolve(o).then(a,s)}function A(e){return function(){var t=this,i=arguments;return new Promise((function(a,s){var r=e.apply(t,i);function n(e){_(r,a,s,n,l,"next",e)}function l(e){_(r,a,s,n,l,"throw",e)}n(void 0)}))}}class Q extends s.b{get Events(){return Q.Events}constructor(e,t,i){super(),this.format=e,this.eventListeners=new h.g,this.cleaners=[],this.loaded=!1,this.live=!1,this.played=!1,this.actuallyPlayed=!1,this.seeked=!1,this.sourceChanging=!1,this.suspended=!1,this.reloadMediaOnReplay=!1,this.networkStateController={isOnline:()=>!0},this.name=t||this.constructor.name,this.logger=null!=i?i:(0,y.t)(this.name);var a=(0,d.d)(5);this.attachMutex=new r.e(this.name+"."+a+".",this.logger),this.detachMutex=new r.e(this.name+"."+a+".",this.logger),this.destroyMutex=new r.e(this.name+"."+a+".",this.logger),this.on(this.Events.Loaded,(()=>{this.loaded=!0,this.emit(this.Events.LiveStateChanged,this.getLiveState())}))}get networkState(){return this.networkStateController}getMediaElement(){if(!this.media)throw new g.i;return this.media}initMedia(e){this.media=e;var t=this.eventListeners.scope(this.media,"@_init");t.has("play")||this.played||t.once("play",(()=>{this.played=!0})),t.has("playing")||this.actuallyPlayed||t.once("playing",(()=>{this.actuallyPlayed=!0})),t.has("seeked")||this.seeked||t.once("seeked",(()=>{this.seeked=!0})),t.has("loadstart")||t.on("loadstart",(()=>{e.loading=!0;var i=()=>{t.off("loadeddata",i),t.off("emptied",i),t.off("error",i),delete e.loading};t.once("loadeddata",i),t.once("emptied",i),t.once("error",i),this.isLoaded()||this.isSourceChanging()||e.reloading||this.emit(this.Events.LoadStart)})),t.has("emptied")||t.on("emptied",(()=>{!this.isLoaded()||this.isSourceChanging()||e.reloading||this.detach().catch((e=>this.handleError(e,{severity:"warning",path:"detach"})))}))}attach(e,t,i){var s=this;return A((function*(){var r={stack:[],error:void 0,hasError:!1};try{(0,a.__addDisposableResource)(r,yield s.attachMutex.acquire("attach"),!1),s.media&&(yield s.detach());try{var n,l,o=null!=(n="function"==typeof(null==i?void 0:i.mediaWaitingDetection)?i.mediaWaitingDetection(s):null==i?void 0:i.mediaWaitingDetection)?n:{},d=null!=(l="function"==typeof(null==i?void 0:i.mediaStallDetection)?i.mediaStallDetection(s):null==i?void 0:i.mediaStallDetection)?l:"native"===s.playback;if(s.attachSources=t,s.attachOptions=R({},i,{mediaWaitingDetection:o,mediaStallDetection:d}),s.initMedia(e),s.waitingDetector=new W(s.eventListeners.scope(e,"@_WaitingDetector"),o).on("statechanged",(e=>{var{data:t}=e;s.emit(s.Events.WaitingStateChanged,t)})),d){var h=!0===d?void 0:d;s.stallDetector=new T(s.eventListeners.scope(e,"@_StallDetector"),h).on("statechanged",(e=>{var{data:t}=e;s.emit(s.Events.ProgressStateChanged,R({fatal:!1},t))}))}yield s.attachCore(e,s.attachSources,s.attachOptions)}catch(e){s.handleError(e,{path:"attach"})}}catch(e){r.error=e,r.hasError=!0}finally{(0,a.__disposeResources)(r)}}))()}detach(){var e=this;return A((function*(){var t={stack:[],error:void 0,hasError:!1};try{var i;(0,a.__addDisposableResource)(t,yield e.detachMutex.acquire("detach"),!1);var s=!!e.media;yield e.detachCore(),e.cleaners.forEach((e=>e())),(0,n.I)(e.cleaners),e.eventListeners.removeAllListeners(),e.waitingDetector&&(e.waitingDetector.destroy(),e.waitingDetector=void 0),e.stallDetector&&(e.stallDetector.destroy(),e.stallDetector=void 0),e.media&&((0,v.a)(e.media),e.media=void 0),e.attachSources=void 0,e.attachOptions=void 0,e.loaded=!1,e.live=!1,e.played=!1,e.actuallyPlayed=!1,e.seeked=!1,e.sourceChanging=!1,e.suspended=!1,null!=(i=e.liveChecker)&&i.stop(),e.liveChecker=void 0,s&&e.emit(e.Events.Detached)}catch(s){t.error=s,t.hasError=!0}finally{(0,a.__disposeResources)(t)}}))()}stopLoad(){}startLoad(){}isLoaded(){return this.loaded}isPlayed(){return this.played}isActuallyPlayed(){return this.actuallyPlayed}isSeeked(){return this.seeked}isWaiting(){var e;return!(null==(e=this.waitingDetector)||!e.isWaiting())}isStalled(){var e;return!(null==(e=this.stallDetector)||!e.isStalled())}isSourceChanging(){return this.sourceChanging}isPlaybackFreezed(){var e;return 0===(null==(e=this.media)?void 0:e.playbackRate)}isLive(){return this.live}isSuspended(){return this.suspended}suspend(){var e=this.getMediaElement();e.pause(),this.suspended=!0;var t=()=>this.releaseSuspended();this.eventListeners.scope(e,"@_suspend").removeAllListeners().once("play",t).once("ended",t).once("emptied",t)}releaseSuspended(){var e=this.getMediaElement();this.suspended=!1,this.eventListeners.removeAllListeners(e,"@_suspend")}seek(e){return(0,f.h)(this.getMediaElement(),e)}getCurrentTime(){var e,t;return null!=(e=null==(t=this.media)?void 0:t.currentTime)?e:0}getDuration(){return this.media?(0,u.A)(this.media)||(0,c.Q5)(this.media.seekable)||1/0:NaN}getSeekRange(){return this.media?{start:(0,c.BC)(this.media.seekable),end:(0,c.Q5)(this.media.seekable)}:{start:0,end:0}}setSourceChanging(e){this.sourceChanging!==e&&(this.sourceChanging=e,e?this.emit(this.Events.SourceChanging):this.emit(this.Events.SourceChanged))}setLive(e){var t,i=this.live;if(this.live=e,i&&!this.live&&null!=(t=this.attachOptions)&&null!=(t=t.liveRevivalCheck)&&t.url&&!this.liveChecker){var a=w(this.attachOptions.liveRevivalCheck,(()=>{a.stop(),this.media&&this.attachSources&&this.attach(this.media,this.attachSources,this.attachOptions).catch((e=>{this.handleError(e,{path:"liveChecker:attach"})}))}));this.liveChecker=a,this.liveChecker.start(),this.emit(this.Events.LiveStateChanged,this.getLiveState())}else!i&&this.live&&this.liveChecker&&(this.liveChecker.stop(),this.liveChecker=void 0,this.emit(this.Events.LiveStateChanged,this.getLiveState()))}getLiveLatency(){return 0}getLiveSeekLength(){if(!this.media||!this.live)return 0;var e=this.getSeekRange(),t=e.end-e.start;return t>0?t:0}getLiveEdgePosition(){if(!this.media||!this.live)return 0;var e=this.getSeekRange().end,t=this.getLiveLatency();return e>t?e-t:e}atLiveEdge(e,t){return void 0===e&&(e=this.getCurrentTime()),void 0===t&&(t=this.getLiveEdgePosition()),!(!this.live||!this.media||null==e)&&Math.ceil(e)>=Math.floor(t-4)}getLiveState(){var e=this.getLiveEdgePosition();return{live:this.isLive(),synced:this.atLiveEdge(this.getCurrentTime(),e),latency:this.getLiveLatency(),seekLength:this.getLiveSeekLength(),edgePosition:e}}getStateInfo(){var e=this.getDebugData();return R({name:this.name,format:this.format,playback:this.playback,loaded:this.isLoaded(),played:this.isPlayed(),actuallyPlayed:this.isActuallyPlayed(),seeked:this.isSeeked(),currentTime:this.getCurrentTime(),duration:this.getDuration(),waiting:this.isWaiting(),stalled:this.isStalled(),playbackFreezed:this.isPlaybackFreezed(),videoQuality:this.getVideoQuality(),audioTrack:this.getAudioTrack(),liveState:this.getLiveState()},e&&{debugData:e})}getDebugData(){}getStats(){var e,t,{droppedVideoFrames:i=0,totalVideoFrames:a=0}=null!=(e=null==(t=this.media)?void 0:t.getVideoPlaybackQuality())?e:{};return{videoQuality:this.getVideoQuality(),droppedVideoFrames:i,totalVideoFrames:a,estimatedBandwidth:0}}handleError(e,t){var i,a,s,r=e instanceof ErrorEvent&&e.error||e instanceof Event&&(null==(i=this.media)?void 0:i.error)||e,[n,d]=(null==t?void 0:t.type)&&[t.type,r]||r instanceof p.l&&["media",r]||r instanceof S._&&["drm",r]||r instanceof E.S&&["manifest",r]||r instanceof MediaError&&[m(r.code),(r.code===MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED||r.code===MediaError.MEDIA_ERR_DECODE)&&new p.l((0,o.u)(r),{cause:{code:r.code,codeName:(0,l.np)(MediaError,r.code)}})||r]||["generic",r];this.emit(this.Events.Error,R({},t,{severity:null!=(a=null==t?void 0:t.severity)?a:"fatal",path:null!=(s=null==t?void 0:t.path)?s:"handleError",type:n,error:d,state:this.getStateInfo()}))}destroy(){var e=this;return A((function*(){var t={stack:[],error:void 0,hasError:!1};try{(0,a.__addDisposableResource)(t,yield e.destroyMutex.acquire("destroy"),!1),yield e.detach(),yield e.destroyCore(),e.removeAllListeners()}catch(i){t.error=i,t.hasError=!0}finally{(0,a.__disposeResources)(t)}}))()}[Symbol.asyncDispose](){return this.destroy()}}(function(e){e.LoadStart="LoadStart",e.MetadataChanged="MetadataChanged",e.Loaded="Loaded",e.Detached="Detached",e.SourceWaiting="SourceWaiting",e.SourceChanging="SourceChanging",e.SourceChanged="SourceChanged",e.QualityChanged="QualityChanged",e.AudioTrackChanged="AudioTrackChanged",e.LiveStateChanged="LiveStateChanged",e.NetworkStateChanged="NetworkStateChanged",e.WaitingStateChanged="WaitingStateChanged",e.ProgressStateChanged="ProgressStateChanged",e.Error="Error"})((P=Q||(Q={})).Events||(P.Events={}))},41746:function(e,t,i){i.d(t,{u:function(){return s}});var a=i(80181);function s(e,t){return"string"==typeof e?a.c$.of(new URL(e,document.location.href)).map((e=>(t.forEach(((t,i)=>e.searchParams.set(i,t))),e.toString()))).getOrElse(e):Object.entries(e).reduce(((e,i)=>{var[a,r]=i;return e[a]="string"==typeof r?s(r,t):r,e}),{})}},45006:function(e,t,i){function a(e){(e.src||e.srcObject||e.childElementCount>0)&&(URL.revokeObjectURL(e.src),e.removeAttribute("src"),e.srcObject=null,e.childElementCount>0&&Array.prototype.filter.call(e.children,(e=>e instanceof HTMLSourceElement)).forEach((t=>e.removeChild(t))),e.load())}i.d(t,{a:function(){return a}})},88913:function(e,t,i){i.d(t,{X:function(){return r}});var a=i(16683);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)({}).hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},s.apply(null,arguments)}class r extends a.D{constructor(e,t){void 0===t&&(t=void 0),super(r,"Error during loading source: "+e+".",s({},t,{name:"LoadError"}))}}}}]);