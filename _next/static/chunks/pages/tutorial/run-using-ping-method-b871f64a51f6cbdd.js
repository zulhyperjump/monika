(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[499],{6719:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/run-using-ping-method",function(){return e(9734)}])},9734:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return u},meta:function(){return r}});e(7294);var i=e(3905),o=e(8470);function a(n,t){if(null==n)return{};var e,i,o=function(n,t){if(null==n)return{};var e,i,o={},a=Object.keys(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)e=a[i],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(o[e]=n[e])}return o}var r={id:"run-using-ping-method",title:"Run using Ping Method"},l={meta:r},s=function(n){var t=n.children,e=a(n,["children"]);return(0,i.kt)(o.C,Object.assign({meta:r},e),t)};function u(n){var t=n.components,e=a(n,["components"]);return(0,i.kt)(s,Object.assign({},l,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial will show you how to integrate Monika with Ping Method to get your Monika notifications."),(0,i.kt)("h2",Object.assign({},{id:"installing-monika"}),"Installing Monika",(0,i.kt)("a",Object.assign({parentName:"h2"},{href:"#installing-monika",title:"Direct link to heading",className:"anchor"}),(0,i.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,i.kt)("p",null,"Install Monika via ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install -g @hyperjumptech/monika")," or if you don\u2019t have NPM in your system, you can ",(0,i.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/hyperjumptech/monika/releases"}),"download the prebuilt binary from our release page"),". After installing Monika, run ",(0,i.kt)("inlineCode",{parentName:"p"},"monika -v")," to verify your Monika installation."),(0,i.kt)("img",Object.assign({},{src:"https://miro.medium.com/proxy/1*NCa_JT4SdiaDPPdHgIzq2Q.png",alt:null})),(0,i.kt)("h2",Object.assign({},{id:"preparing-a-configuration"}),"Preparing a configuration",(0,i.kt)("a",Object.assign({parentName:"h2"},{href:"#preparing-a-configuration",title:"Direct link to heading",className:"anchor"}),(0,i.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,i.kt)("p",null,"Now that we have installed Monika, let\u2019s prepare a configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",Object.assign({parentName:"pre"},{}),"notifications:\n  - id: desktop\n    type: desktop\nprobes:\n  - id: ping_test\n    name: ping_test\n    description: requesting icmp ping\n    interval: 10\n    ping:\n      - uri: google.com\n")),(0,i.kt)("p",null,"Let me explain this configuration a little bit:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This configuration uses Desktop notifications"),(0,i.kt)("li",{parentName:"ul"},"This probe configuration will ",(0,i.kt)("strong",{parentName:"li"},"hit google.com using PING")),(0,i.kt)("li",{parentName:"ul"},"This probe configuration will alert you if ping request is not successful (200), or the request took longer than two seconds")),(0,i.kt)("p",null,"Save the configuration above as ",(0,i.kt)("inlineCode",{parentName:"p"},"monika.yaml")," in your local machine and run ",(0,i.kt)("inlineCode",{parentName:"p"},"monika -c monika.yaml")," command in your terminal inside the directory where you saved the configuration file."),(0,i.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*96YDF6fKh9uc1ABw5Z_6Cw.png",alt:null})),(0,i.kt)("p",null,"We\u2019re not finished yet. We want to know what will happen if we failed to PING Google. Let Monika run in the background, and try to disconnect yourself from the internet. You will get a notification:"),(0,i.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*9-EXof54-ekJfzorw269ew.png",alt:null})),(0,i.kt)("p",null,"There is some explanation for the error message:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0: \u2018URI not found\u2019"),(0,i.kt)("li",{parentName:"ul"},"1: \u2018Connection reset\u2019"),(0,i.kt)("li",{parentName:"ul"},"2: \u2018Connection refused\u2019"),(0,i.kt)("li",{parentName:"ul"},"3: \u2018Unknown error\u2019"),(0,i.kt)("li",{parentName:"ul"},"4: \u2018Ping timed out\u2019"),(0,i.kt)("li",{parentName:"ul"},"599: \u2018Request Timed out\u2019")),(0,i.kt)("p",null,"It shows PING timed out because your internet is disconnected. So, we could distinguish which alerts come from the API itself, and which alerts come from your internet problem."))}u.isMDXComponent=!0}},function(n){n.O(0,[547,778,470,774,888,179],(function(){return t=6719,n(n.s=t);var t}));var t=n.O();_N_E=t}]);