(this.webpackJsonpnewsfeed=this.webpackJsonpnewsfeed||[]).push([[0],{19:function(e,t,c){},40:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var n=c(2),s=c.n(n),i=c(13),a=c.n(i),l=(c(19),c(3)),d=c(14),r=c.n(d),m=(c(38),c(40),c(0)),j=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(!1),a=Object(l.a)(i,2),d=a[0],j=a[1],o=Object(n.useState)([]),b=Object(l.a)(o,2),h=b[0],u=b[1],O=Object(n.useState)(1),x=Object(l.a)(O,2),p=x[0],f=x[1],g=Object(n.useState)(6),y=Object(l.a)(g,2),v=y[0];y[1];Object(n.useEffect)((function(){r.a.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=5c83c765602d48e6b0301df05995060d").then((function(e){return u(e.data.articles)})).catch()}),[]);var w=p*v,N=w-v,E=h.slice(N,w),B=[];B.push(1),B.push(2),B.push(3);return Object(m.jsxs)("div",{className:"main",children:[Object(m.jsx)("div",{className:"main3",id:"mmain2",children:E.map((function(e,t){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("h4",{children:e.title}),Object(m.jsx)("p",{children:e.description})]})})})}))}),Object(m.jsx)("div",{children:Object(m.jsx)("ul",{className:"pages",children:B.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("button",{onClick:function(){return function(e){f(e)}(e)},children:e})},e)}))})}),Object(m.jsxs)("div",{className:"main2",id:"mmain",children:[Object(m.jsxs)("div",{className:"reader grid1",children:[Object(m.jsx)("h4",{children:"Hi, Reader,"}),Object(m.jsx)("p",{children:"Here's your news!"})]}),Object(m.jsxs)("div",{className:"toggle grid2",children:[Object(m.jsx)("h4",{children:"View Toggle"}),Object(m.jsxs)("label",{className:"switch",children:[Object(m.jsx)("input",{type:"checkbox",onClick:function(){if(j(!d),!0===d){document.getElementById("mmain2").style.display="grid";for(var e=0;e<6;e++)document.getElementsByClassName("card")[e].style.width="15vw",document.getElementsByClassName("card")[e].style.height="31vh"}else{document.getElementById("mmain2").style.display="block";for(e=0;e<6;e++)document.getElementsByClassName("card")[e].style.width="50vw",document.getElementsByClassName("card")[e].style.height="10vh",document.getElementsByClassName("card")[e].style["margin-bottom"]="1vh"}}}),Object(m.jsx)("span",{className:"view"})]})]}),Object(m.jsxs)("div",{className:"feedback grid3",children:[Object(m.jsx)("h4",{children:"Have a Feedback?"}),Object(m.jsx)("div",{className:"button",children:Object(m.jsxs)("label",{className:"btn",children:[Object(m.jsx)("input",{type:"checkbox",id:"show",onClick:function(){s(!c),!1===c?(document.getElementById("mmain").style.width="50vw",document.getElementById("mmain2").style.filter="blur(5px)"):(document.getElementById("mmain").style.width="20vw",document.getElementById("mmain2").style.filter="blur(0px)")}}),Object(m.jsx)("span",{className:"view2"})]})})]}),!0===c?Object(m.jsxs)("div",{className:"form grid4",id:"fform",children:[Object(m.jsx)("h4",{children:"Thank you so for providing time!"}),Object(m.jsx)("p",{children:"please provide the required details!"}),Object(m.jsxs)("form",{action:"",className:"form2",children:[Object(m.jsx)("label",{htmlFor:"fname",children:"First Name:"}),Object(m.jsx)("input",{type:"text",name:"fname",id:"",required:!0}),Object(m.jsx)("label",{htmlFor:"sname",children:"Second Name:"}),Object(m.jsx)("input",{type:"text",name:"sname",id:""}),Object(m.jsx)("label",{htmlFor:"address",children:"Address:"}),Object(m.jsx)("textarea",{name:"address",id:"",cols:"45",rows:"4"}),Object(m.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(m.jsx)("input",{type:"email",name:"email",id:"",placeholder:"abc@abc.com"}),Object(m.jsx)("label",{htmlFor:"phone",children:"Mobile Number:"}),Object(m.jsx)("input",{type:"tel",name:"phone",id:"tele",placeholder:"+91XXXXXXXXXX"}),Object(m.jsx)("button",{onClick:function(){var e=document.getElementById("tele");"(?:s+|)((0|(?:(+|)91))(?:s|-)*(?:(?:d(?:s|-)*d{9})|(?:d{2}(?:s|-)*d{8})|(?:d{3}(?:s|-)*d{7}))|d{10})(?:s+|)".match(e)?window.alert("phone number is  valid"):window.alert("phone number is not valid!")},children:"Submit"})]})]}):null]})]})};var o=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(j,{})})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,43)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(o,{})}),document.getElementById("root")),b()}},[[42,1,2]]]);
//# sourceMappingURL=main.e20b0cda.chunk.js.map