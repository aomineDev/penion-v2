const $loading=document.querySelector(".loading");var loadingMarker=0;const $desktopBpSm=window.matchMedia("only screen and (max-width: 767px)");!function(root,factory){"function"==typeof define&&define.amd?define(factory):"object"==typeof exports?module.exports=factory():root.NProgress=factory()}(this,function(){var NProgress={version:"0.2.0"},Settings=NProgress.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:".loading",template:'<div class="bar" role="bar"><div class="peg"></div></div>'},initial,current;function clamp(n,min,max){return n<min?min:n>max?max:n}function toBarPerc(n){return 100*(-1+n)}function barPositionCSS(n,speed,ease){var barCSS;return(barCSS="translate3d"===Settings.positionUsing?{transform:"translate3d("+toBarPerc(n)+"%,0,0)"}:"translate"===Settings.positionUsing?{transform:"translate("+toBarPerc(n)+"%,0)"}:{"margin-left":toBarPerc(n)+"%"}).transition="all "+speed+"ms "+ease,barCSS}NProgress.configure=function(options){var key,value;for(key in options)void 0!==(value=options[key])&&options.hasOwnProperty(key)&&(Settings[key]=value);return this},NProgress.status=null,NProgress.set=function(n){var started=NProgress.isStarted();n=clamp(n,Settings.minimum,1),NProgress.status=1===n?null:n;var progress=NProgress.render(!started),bar=progress.querySelector(Settings.barSelector),speed=Settings.speed,ease=Settings.easing;return progress.offsetWidth,queue(function(next){""===Settings.positionUsing&&(Settings.positionUsing=NProgress.getPositioningCSS()),css(bar,barPositionCSS(n,speed,ease)),1===n?(css(progress,{transition:"none",opacity:1}),progress.offsetWidth,setTimeout(function(){css(progress,{transition:"all "+speed+"ms linear",opacity:0}),setTimeout(function(){NProgress.remove(),next()},speed)},speed)):setTimeout(next,speed)}),this},NProgress.isStarted=function(){return"number"==typeof NProgress.status},NProgress.start=function(){NProgress.status||NProgress.set(0);var work=function(){setTimeout(function(){NProgress.status&&(NProgress.trickle(),work())},Settings.trickleSpeed)};return Settings.trickle&&work(),this},NProgress.done=function(force){return force||NProgress.status?NProgress.inc(.3+.5*Math.random()).set(1):this},NProgress.inc=function(amount){var n=NProgress.status;return n?("number"!=typeof amount&&(amount=(1-n)*clamp(Math.random()*n,.1,.95)),n=clamp(n+amount,0,.994),NProgress.set(n)):NProgress.start()},NProgress.trickle=function(){return NProgress.inc(Math.random()*Settings.trickleRate)},initial=0,current=0,NProgress.promise=function($promise){return $promise&&"resolved"!==$promise.state()?(0===current&&NProgress.start(),initial++,current++,$promise.always(function(){0==--current?(initial=0,NProgress.done()):NProgress.set((initial-current)/initial)}),this):this},NProgress.render=function(fromStart){if(NProgress.isRendered())return document.querySelector(".nprogress");var progress=document.createElement("div");progress.className="nprogress",progress.innerHTML=Settings.template;var bar=progress.querySelector(Settings.barSelector),perc=fromStart?"-100":toBarPerc(NProgress.status||0),parent=document.querySelector(Settings.parent);return css(bar,{transition:"all 0 linear",transform:"translate3d("+perc+"%,0,0)"}),parent.appendChild(progress),progress},NProgress.remove=function(){var progress=document.querySelector(".nprogress");progress&&removeElement(progress)},NProgress.isRendered=function(){return!!document.querySelector(".nprogress")},NProgress.getPositioningCSS=function(){var bodyStyle=document.body.style,vendorPrefix="WebkitTransform"in bodyStyle?"Webkit":"MozTransform"in bodyStyle?"Moz":"msTransform"in bodyStyle?"ms":"OTransform"in bodyStyle?"O":"";return vendorPrefix+"Perspective"in bodyStyle?"translate3d":vendorPrefix+"Transform"in bodyStyle?"translate":"margin"};var queue=function(){var pending=[];function next(){var fn=pending.shift();fn&&fn(next)}return function(fn){pending.push(fn),1==pending.length&&next()}}(),css=function(){var cssPrefixes=["Webkit","O","Moz","ms"],cssProps={};function camelCase(string){return string.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(match,letter){return letter.toUpperCase()})}function getVendorProp(name){var style=document.body.style;if(name in style)return name;for(var i=cssPrefixes.length,capName=name.charAt(0).toUpperCase()+name.slice(1),vendorName;i--;)if((vendorName=cssPrefixes[i]+capName)in style)return vendorName;return name}function getStyleProp(name){return name=camelCase(name),cssProps[name]||(cssProps[name]=getVendorProp(name))}function applyCss(element,prop,value){prop=getStyleProp(prop),element.style[prop]=value}return function(element,properties){var args=arguments,prop,value;if(2==args.length)for(prop in properties)void 0!==(value=properties[prop])&&properties.hasOwnProperty(prop)&&applyCss(element,prop,value);else applyCss(element,args[1],args[2])}}();function hasClass(element,name){var list;return("string"==typeof element?element:classList(element)).indexOf(" "+name+" ")>=0}function addClass(element,name){var oldList=classList(element),newList=oldList+name;hasClass(oldList,name)||(element.className=newList.substring(1))}function removeClass(element,name){var oldList=classList(element),newList;hasClass(element,name)&&(newList=oldList.replace(" "+name+" "," "),element.className=newList.substring(1,newList.length-1))}function classList(element){return(" "+(element.className||"")+" ").replace(/\s+/gi," ")}function removeElement(element){element&&element.parentNode&&element.parentNode.removeChild(element)}return NProgress}),NProgress.start(),window.addEventListener("DOMContentLoaded",function(){$loading.style.opacity="0",setTimeout(()=>{$loading.style.display="none"},1e3),loadingMarker++,NProgress.done()});const onResize=e=>{0!=loadingMarker&&(e.matches,loadingOnResize())};function loadingOnResize(){$loading.style.opacity="1",$loading.style.display="flex",NProgress.start(),setTimeout(()=>{$loading.style.opacity="0",NProgress.done(),setTimeout(()=>{$loading.style.display="none"},1e3)},1e3)}$desktopBpSm.addListener(onResize),onResize($desktopBpSm);