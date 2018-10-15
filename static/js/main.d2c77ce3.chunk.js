(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports={milestones:[{name:"Builder",description:"8 building tags in play",backgroundColor:"#865402"},{name:"Diversifier",description:"8 different tags in play",backgroundColor:"linear-gradient(to left, brown, gray, blue, black, yellow, green, violet, white)"},{name:"Ecologist",description:"4 plant/ animal/ microbe tags in play",backgroundColor:"#008036"},{name:"Energizer",description:"6 Energy production",backgroundColor:"#8100b1"},{name:"Gardener",description:"3 Greenery tiles",backgroundColor:"#33d603"},{name:"Generalist",description:"All six production values are +1",backgroundColor:"linear-gradient(to right, yellow, brown, black, green, violet, orange)"},{name:"Hoverlord",description:"7 Floater resources on cards",isVenus:!0,backgroundColor:"yellow"},{name:"Legend",description:"5 events (red cards) played",backgroundColor:"red"},{name:"Mayor",description:"3 City tiles",backgroundColor:"lightgray"},{name:"Planner",description:"16 cards in hand",backgroundColor:"black"},{name:"Polar Explorer",description:"3 tiles in bottom 2 rows",backgroundColor:"linear-gradient(orange, white)"},{name:"Rim Settler",description:"3 Jovian tags",backgroundColor:"#eaa241"},{name:"Specialist",description:"One production is at +10",backgroundColor:"#98866e"},{name:"Tactician",description:"5 cards with requirements in play",backgroundColor:"#d4dc01"},{name:"Terraformer",description:"Terraforming Rating of 35",backgroundColor:"orange"},{name:"Tycoon",description:"15 blue/green cards in play",backgroundColor:"linear-gradient(blue, green)"}],awards:[{name:"Banker",description:"Highest M\u20ac production",backgroundColor:"#BBBB00"},{name:"Benefactor",description:"Highest Terraforming rating (count this first)",backgroundColor:"orange"},{name:"Celebrity",description:"Most 20+ M\u20ac cost cards in play (non-red)",backgroundColor:"#f5f500"},{name:"Contractor",description:"Most Building tags in play",backgroundColor:"#865402"},{name:"Cultivator",description:"Most Greenery tiles",backgroundColor:"green"},{name:"Desert Settler",description:"Most tiles in bottom 4 rows",backgroundColor:"linear-gradient(orange, lightgray)"},{name:"Estate Dealer",description:"Most tiles adjacent to Ocean tiles",backgroundColor:"linear-gradient(blue, white)"},{name:"Excentric",description:"Most resources on cards",backgroundColor:"black"},{name:"Industrialist",description:"Most Steel and Energy resources",backgroundColor:"linear-gradient(to right, #865402, violet)"},{name:"Landlord",description:"Most tiles in play",backgroundColor:"lightgray"},{name:"Magnate",description:"Most green cards in play",backgroundColor:"green"},{name:"Miner",description:"Most Steel and Titanium resources",backgroundColor:"linear-gradient(to right, #865402, black)"},{name:"Scientist",description:"Most Science tags in play",backgroundColor:"#CCC"},{name:"Space Baron",description:"Most Space tags in play",backgroundColor:"black"},{name:"Thermalist",description:"Most Heat resources",backgroundColor:"red"},{name:"Venuphile",description:"Most Venus tags in play",isVenus:!0,backgroundColor:"#ecec25"}]}},14:function(e,n,r){},16:function(e,n,r){},18:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(8),i=r.n(o),c=(r(14),r(2)),s=r(3),l=r(5),d=r(4),u=r(6),m=(r(16),function(e){function n(e){var r;return Object(c.a)(this,n),(r=Object(l.a)(this,Object(d.a)(n).call(this,e))).state={bigTitle:!0},r}return Object(u.a)(n,e),Object(s.a)(n,[{key:"onToggle",value:function(e){this.setState({bigTitle:!this.state.bigTitle})}},{key:"render",value:function(){var e=this.props;return a.a.createElement("div",{className:"am-item"},this.state.bigTitle?a.a.createElement("div",{className:"award-milestone",style:e.style,onClick:this.onToggle.bind(this),key:e.idx},a.a.createElement("h3",null,e.name)):a.a.createElement("div",{className:"award-milestone-secondary",onClick:this.onToggle.bind(this),key:e.idx+999},a.a.createElement("p",{className:"title"},e.name," "),a.a.createElement("div",{className:"description"},e.description)))}}]),n}(a.a.Component)),g=r(1);function p(e){for(var n,r,t=e.length;0!==t;)r=Math.floor(Math.random()*t),n=e[t-=1],e[t]=e[r],e[r]=n;return e}function b(e){var n=[],r=[];return"mainMenu"===e.whichScreen?a.a.createElement("div",{className:"App-main-menu"},a.a.createElement("div",{className:"App-header"},a.a.createElement("h1",{className:"App-title"},"Terraforming Mars"),a.a.createElement("h3",null,"Milestone and Awards Randomizer")),a.a.createElement("div",{className:"App-button"},a.a.createElement("div",{className:"wrapper"},a.a.createElement("p",null,"Include Venus Next?"),a.a.createElement("label",{className:"switch"},a.a.createElement("input",{id:"includeVenus",type:"checkbox"}),a.a.createElement("span",{className:"slider"}))),a.a.createElement("div",{className:"wrapper"},a.a.createElement("button",{onClick:e.buttonClick},"Randomize!")))):"randomizeScreen"===e.whichScreen?(document.getElementById("includeVenus").checked?(n=p(g.milestones).slice(0,6),r=p(g.awards).slice(0,6)):(n=p(g.milestones).filter(function(e){return null==e.isVenus}).slice(0,5),r=p(g.awards).filter(function(e){return null==e.isVenus}).slice(0,5)),a.a.createElement("div",{className:"randomize-screen"},a.a.createElement("h2",null,"Milestones"),a.a.createElement("div",{className:"am-list"},n.map(function(e,n){var r={background:e.backgroundColor};return a.a.createElement(m,{name:e.name,description:e.description,style:r,key:n})})),a.a.createElement("h2",null,"Awards"),a.a.createElement("div",{className:"am-list"},r.map(function(e,n){var r={background:e.backgroundColor};return a.a.createElement(m,{name:e.name,description:e.description,style:r,key:n+999})})))):null}var h=function(e){function n(e){var r;return Object(c.a)(this,n),(r=Object(l.a)(this,Object(d.a)(n).call(this,e))).randomizeButton=function(){r.setState({currentScreen:"randomizeScreen"})},r.state={currentScreen:"mainMenu"},r}return Object(u.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.state.currentScreen;return a.a.createElement("div",{className:"App"},a.a.createElement(b,{whichScreen:e,buttonClick:this.randomizeButton}))}}]),n}(t.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(a.a.createElement(h,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/tfm-milestones-awards-randomizer",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/tfm-milestones-awards-randomizer","/service-worker.js");k?(function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):f(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):f(e)})}}()},9:function(e,n,r){e.exports=r(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.d2c77ce3.chunk.js.map