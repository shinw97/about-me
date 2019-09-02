(window["webpackJsonpabout-me"]=window["webpackJsonpabout-me"]||[]).push([[0],{13:function(e,t,a){},19:function(e,t,a){e.exports=a(34)},24:function(e,t,a){},25:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=(a(24),a(25),a(1)),i=a(2),s=a(4),m=a(3),u=a(5),p=(a(13),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"full-height"},r.a.createElement("span",{className:"w3-wide"},"Hello World!"))}}]),t}(r.a.Component)),d=a(7);function g(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var h=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).clickOnItems=function(e){if(a.state.openedMenu){e.preventDefault();var t=e.target.getAttribute("href");document.getElementById("navButton").click(),setTimeout(function(){window.location=t},500)}},a.changeStateWhileClickOnButton=function(){var e=a.state.openedMenu;a.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?g(a,!0).forEach(function(t){Object(d.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a.state,{openedMenu:!e}),function(){})},a.scrollBarProgress=function(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100+2;document.getElementById("progress").style.width=e+"%"},a.state={openedMenu:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.onscroll=function(){e.scrollBarProgress()}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"sticky-top"},r.a.createElement("nav",{className:"navbar navbar-expand-lg bg-light navbar-light shadow"},r.a.createElement("a",{className:"navbar-brand",href:"#hello",style:{padding:"0px 30px"},onClick:function(t){return e.clickOnItems.bind(e)(t)}},"A Webpage About Me"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",id:"navButton",onClick:this.changeStateWhileClickOnButton.bind(this)},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav",style:{padding:"0px 50px"}},r.a.createElement("ul",{className:"navbar-nav ml-auto",onClick:function(t){return e.clickOnItems.bind(e)(t)}},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#overview"},"Overview")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#biography"},"Biography")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"Link 3")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#contact-me"},"Contact"))))),r.a.createElement("div",{className:"progress",style:{height:"5px"}},r.a.createElement("div",{className:"progress-bar",role:"progressbar",id:"progress","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"95",style:{width:"2%"}})))}}]),t}(r.a.Component),b=a(8),w=a.n(b),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"w3-container w3-raleway",style:{padding:"100px 16px"},id:"about"},r.a.createElement("h3",{className:"w3-center"},"WHAT AM I?"),r.a.createElement("p",{className:"w3-center w3-large"},"Some overview simple facts about me."),r.a.createElement("div",{className:"w3-row-padding w3-center",style:{marginTop:"64px"}},r.a.createElement("div",{className:"w3-quarter"},r.a.createElement("i",{className:"fa fa-desktop w3-margin-bottom w3-jumbo w3-center"}),r.a.createElement("p",{className:"w3-large"},"A Computer Scientist,"),r.a.createElement("p",null,"Programmer, developer, software engineer,... potayto-potahto, they're not very distinct in general. I am all of these and a computer scientist would be a better summary to these terminologies.")),r.a.createElement("div",{className:"w3-quarter"},r.a.createElement("i",{className:"material-icons w3-margin-bottom w3-jumbo"},"memory"),r.a.createElement("p",{className:"w3-large"},"AI Developer,"),r.a.createElement("p",null,"I am an Artificial Intelligence programme graduate. Deep Learning, Computer Vision, Face Recognition, Statistical Regressing Predictions... these terminologies aren't stranger to me, they are part of my knowledge.")),r.a.createElement("div",{className:"w3-quarter"},r.a.createElement("i",{className:"fa fa-wpexplorer w3-margin-bottom w3-jumbo"}),r.a.createElement("p",{className:"w3-large"},"and Knowledge Discoverer,"),r.a.createElement("p",null,"New technologies and knowledge, together with vast opportunities are constantly emerging in this era powered by Industry 4.0. Knowledge discovery would be my first priority in every decision made.")),r.a.createElement("div",{className:"w3-quarter"},r.a.createElement("i",{className:"fa fa-wrench w3-margin-bottom w3-jumbo"}),r.a.createElement("p",{className:"w3-large"},"with some hard-skills."),r.a.createElement("p",null,"As an AI programme graduate, I am obsessed to all sorts of AI techniques especially Deep Learning and Data Science frameworks. I also have experience in developing front-end and back-end web application."))))}}]),t}(r.a.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"page-footer"},r.a.createElement("div",{className:"container text-center",style:{padding:"20px 15px"}},r.a.createElement("p",null,"This webpage is:"),r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-bullseye"})," Developed using React JS Framework, and "),r.a.createElement("p",null,r.a.createElement("i",{className:"fa fa-bullseye"})," Powered by W3.CSS, Bootstrap 4.")),r.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2019 Copyright:",r.a.createElement("span",null," ",r.a.createElement("a",{href:"https://github.com/shinw97"},"https://github.com/shinw97"))))}}]),t}(r.a.Component);function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).onclickImage=function(e){document.getElementById("img01").style.display=e?"none":"block"},a.state={mounted:!1},a.myRef=r.a.createRef(),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.myRef.current.clientHeight,t=1.5*this.myRef.current.clientHeight,a=t-e>100?"":t;this.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach(function(t){Object(d.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},this.state,{mounted:!0,height:a,width:this.myRef.current.clientWidth}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"w3-container w3-light-grey",style:{padding:"60px 16px",maxHeight:"100%"}},r.a.createElement("div",{className:"w3-row-padding"},r.a.createElement("div",{className:"w3-col m6 text-left",ref:this.myRef},r.a.createElement("h3",{className:"text-left",style:{padding:"10px 0px 10px 0px"}},"Let's begin with some basic biography"),r.a.createElement("p",null,r.a.createElement("br",null),"I am ",r.a.createElement("b",null,"Lim Shin Wei"),", 22, a Malaysian boy from ",r.a.createElement("b",null,"Butterworth, Penang"),", a small town located at the opposite bank of the lovely UNESCO historical heritage city Georgetown.",r.a.createElement("br",null),r.a.createElement("br",null),"I am a ",r.a.createElement("b",null,"Computer Science graduate")," from ",r.a.createElement("b",null,"University of Malaya"),", and had been living in the metropolitan city of Kuala Lumpur during my studies in the university."),r.a.createElement("br",null)),r.a.createElement("div",{className:"w3-col m6",style:this.state.mounted?{height:this.state.height}:{}},r.a.createElement("img",{className:"w3-image w3-round-large w3-hover-opacity modimgresp",src:"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:"Nature",style:{maxWidth:"100%",maxHeight:"100%",cursor:"pointer"},onClick:function(){return e.onclickImage(!1)}}))),r.a.createElement("div",{id:"img01",className:"w3-modal",onClick:function(){return e.onclickImage(!0)},style:{display:"none",zIndex:"9990"}},r.a.createElement("div",{className:"w3-modal-content w3-card-4 w3-animate-zoom w3-display-center",style:{width:"fit-content"}},r.a.createElement("img",{src:"https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:"Nature",style:{width:"100%",cursor:"pointer"}}))))}}]),t}(r.a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"w3-container w3-row w3-center w3-dark-grey",style:{padding:"30px 0px"}},r.a.createElement("div",{className:"w3-quarter"},"Latest Education",r.a.createElement("br",null),r.a.createElement("span",{className:"w3-xlarge"},"University of Malaya")),r.a.createElement("div",{className:"w3-quarter"},"With Degree",r.a.createElement("br",null),r.a.createElement("span",{className:"w3-xlarge"},"Bachelor of Computer Science (Artificial Intelligence)")),r.a.createElement("div",{className:"w3-quarter"},"Started on",r.a.createElement("br",null),r.a.createElement("span",{className:"w3-xlarge"},"September 2016")),r.a.createElement("div",{className:"w3-quarter"},"Graduated on",r.a.createElement("br",null),r.a.createElement("span",{className:"w3-xlarge"},"February 2020")))}}]),t}(r.a.Component),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).copyToClipBoard=function(){var e=document.createElement("textarea");document.body.appendChild(e),e.value="shinw97@hotmail.com",e.select(),document.execCommand("copy"),document.body.removeChild(e),alert("Copied email to clipboard!\nshinw97@hotmail.com")},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=window.matchMedia("only screen and (max-width: 1024px)").matches,t=e?r.a.createElement("div",null,r.a.createElement("a",{href:"mailto:shinw97@hotmail.com",style:{"text-decoration":"none"}},r.a.createElement("button",{className:"btn rounded-circle shadow",style:{width:"70px",height:"70px",margin:"auto"}},r.a.createElement("i",{className:"fa fa-envelope fa-fw w3-xxlarge"})))):r.a.createElement("div",{className:"card mb-3 shadow w3-hover-light-grey",style:{width:"30%",margin:"auto",cursor:"pointer"}},r.a.createElement("div",{className:"row no-gutters","data-toggle":"tooltip","data-placement":"right",title:"Click to copy",onClick:this.copyToClipBoard},r.a.createElement("div",{className:"col-md-4",style:{margin:"auto"}},r.a.createElement("i",{className:"fa fa-envelope fa-fw w3-xxlarge"})),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"card-body text-left"},r.a.createElement("h5",{className:"card-title"},"Email"),r.a.createElement("p",{className:"card-text"},"shinw97@hotmail.com")))));return r.a.createElement("div",{className:"w3-container w3-light-grey",style:{padding:"100px 16px"},id:"contact"},r.a.createElement("h3",{className:"w3-center"},"CONTACT"),r.a.createElement("p",{className:"w3-center w3-large"},"Feel free to contact me at:"),r.a.createElement("div",{style:{padding:"10px"}},t,r.a.createElement("br",null),r.a.createElement("p",{className:"w3-center w3-large"},"... or drop a message here!"),r.a.createElement("form",{action:"/action_page.php",target:"_blank",id:"form",style:{width:e?"100%":"60%",margin:"auto"}},r.a.createElement("p",null,r.a.createElement("input",{className:"w3-input w3-border rounded",type:"text",placeholder:"Name",required:!0,name:"Name"})),r.a.createElement("p",null,r.a.createElement("input",{className:"w3-input w3-border rounded",type:"text",placeholder:"Email",required:!0,name:"Email"})),r.a.createElement("p",null,r.a.createElement("input",{className:"w3-input w3-border rounded",type:"text",placeholder:"Subject",required:!0,name:"Subject"})),r.a.createElement("p",null,r.a.createElement("textarea",{className:"w3-input w3-border rounded",rows:"4",cols:"50",placeholder:"Message",required:!0,name:"Message",form:"form"})),r.a.createElement("p",null,r.a.createElement("button",{className:"w3-button w3-black",type:"button"},r.a.createElement("i",{className:"fa fa-paper-plane"})," SEND MESSAGE")))))}}]),t}(r.a.Component);var j=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement("div",{className:"App"},r.a.createElement(w.a,{id:"hello"},r.a.createElement("div",null)),r.a.createElement(p,null),r.a.createElement(w.a,{id:"overview"},r.a.createElement("div",null)),r.a.createElement(E,null),r.a.createElement(w.a,{id:"biography"},r.a.createElement("div",null)),r.a.createElement(v,null),r.a.createElement(O,null),r.a.createElement(p,null),r.a.createElement(w.a,{id:"contact-me"},r.a.createElement("div",null)),r.a.createElement(N,null)),r.a.createElement(f,null))},x=a(18),k=a(10);function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach(function(t){Object(d.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var S=a(16),I=Object(k.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAMPLE_ACTION":e=P({},e,{sample:t.payload})}return e},{},Object(k.a)(S.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x.a,{store:I},r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.bb8b7ad1.chunk.js.map