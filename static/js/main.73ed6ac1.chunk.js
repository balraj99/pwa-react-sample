(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,n,t){e.exports=t(23)},17:function(e,n,t){},18:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var o,a=t(0),i=t.n(a),r=t(8),l=t.n(r),c=(t(17),t(18),function(){var e=document.getElementById("butInstall");window.addEventListener("beforeinstallprompt",function(n){console.debug("Before Install",n),n.preventDefault(),o=n,e.removeAttribute("hidden")}),e.addEventListener("click",function(n){e.style.display="none",o.prompt(),o.userChoice.then(function(e){"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt"),o=null})}),window.addEventListener("appinstalled",function(e){console.log("Weather App was installed.",e)})}),s=t(11),d=function(e){var n=e.nativeEvent.target.files;console.debug("Files ",n)};var u=function(){return Object(a.useEffect)(function(){console.log("Hello"),c()}),i.a.createElement(s.a,{basename:"/"},i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("header",{class:"header"},i.a.createElement("h1",null,i.a.createElement("a",{href:"https://darksky.net/poweredby/",class:"powered-by"},"Mpowered")),i.a.createElement("button",{id:"butInstall","aria-label":"Install MPowered",hidden:!0},"Install MPowered"))),i.a.createElement("div",{style:{position:"fixed",top:"50%"}},i.a.createElement("input",{type:"file",onChange:d,multiple:!0}))))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(i.a.createElement(u,null),document.getElementById("root"),function(){}),function(e){if("serviceWorker"in navigator){if(new URL("/pwa-react-sample",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/pwa-react-sample","/service-worker.js");f?(function(e,n){fetch(e).then(function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):p(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):p(n,e)})}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.73ed6ac1.chunk.js.map