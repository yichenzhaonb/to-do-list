(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),o=a.n(l),r=(a(14),a(4)),s=a(7),i=a(1);a(15);var m=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],o=a[1];return c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),l.trim()&&(e.addTask(l),o(""))}},c.a.createElement("h2",{className:"label-wrapper"},c.a.createElement("label",{htmlFor:"new-todo-input",className:"label__lg"},"Whats in your mind today?")),c.a.createElement("input",{type:"text",id:"new-todo-input",className:"input input__lg",name:"text",autoComplete:"off",value:l,onChange:function(e){o(e.target.value)}}),c.a.createElement("button",{type:"submit",className:"btn btn__primary btn__lg"},"Add"))};function u(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],o=a[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),m=s[0],u=s[1],d=Object(n.useRef)(null),p=Object(n.useRef)(null),f=function(e){var t=Object(n.useRef)();return Object(n.useEffect)((function(){t.current=e})),t.current}(l);var b=c.a.createElement("form",{className:"stack-small",onSubmit:function(t){t.preventDefault(),m.trim()&&(e.editTask(e.id,m),u(""),o(!1))}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"todo-label",htmlFor:e.id},"New name for ",e.name),c.a.createElement("input",{id:e.id,className:"todo-text",type:"text",value:m,onChange:function(e){u(e.target.value)},ref:d})),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{type:"button",className:"btn todo-cancel",onClick:function(){return o(!1)}},"Cancel",c.a.createElement("span",{className:"visually-hidden"},"renaming ",e.name)),c.a.createElement("button",{type:"submit",className:"btn btn__primary todo-edit"},"Save",c.a.createElement("span",{className:"visually-hidden"},"new name for ",e.name)))),v=c.a.createElement("div",{className:"stack-small"},c.a.createElement("div",{className:"c-cb"},c.a.createElement("input",{id:e.id,type:"checkbox",defaultChecked:e.completed,onChange:function(){return e.toggleTaskCompleted(e.id)}}),c.a.createElement("label",{className:"todo-label",htmlFor:e.id},e.name)),c.a.createElement("div",{className:"btn-group"},c.a.createElement("button",{type:"button",className:"btn",onClick:function(){return o(!0)},ref:p},"Edit ",c.a.createElement("span",{className:"visually-hidden"},e.name)),c.a.createElement("button",{type:"button",className:"btn btn__danger",onClick:function(){return e.deleteTask(e.id)}},"Delete ",c.a.createElement("span",{className:"visually-hidden"},e.name))));return Object(n.useEffect)((function(){!f&&l&&d.current.focus(),f&&!l&&p.current.focus()}),[f,l]),c.a.createElement("li",{className:"todo"},l?b:v)}var d=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),l=a[0],o=a[1];return c.a.createElement("input",{type:"text",id:"new-todo-search",className:"input input__lg",name:"text",autoComplete:"off",placeholder:"Search for a task...",value:l,onChange:function(t){console.log(t.target.value),o(t.target.value),e.filterTask(t.target.value)}})},p=a(8);var f=function(e){var t=Object(n.useState)(e.tasks),a=Object(i.a)(t,2),l=a[0],o=a[1],f=Object(n.useState)(""),b=Object(i.a)(f,2),v=b[0],E=b[1];function h(e,t){var a=l.map((function(a){return e===a.id?Object(r.a)(Object(r.a)({},a),{},{name:t}):a}));o(a)}function N(e){var t=l.filter((function(t){return t.id!==e}));o(t)}var g=l.filter((function(e){return!v||e.name.includes(v)})).map((function(e){return c.a.createElement(u,{id:e.id,name:e.name,completed:e.completed,key:e.id,deleteTask:N,editTask:h})}));return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("p",null,"To Do List")),c.a.createElement("div",{className:"Content"},c.a.createElement(m,{addTask:function(e){var t={id:"todo-"+Object(p.a)(),name:e,complete:!1};o([].concat(Object(s.a)(l),[t]))}}),c.a.createElement(d,{filterTask:function(e){E(e)}}),c.a.createElement("ul",{className:"todo-list stack-large stack-exception","aria-labelledby":"list-heading"},g)),c.a.createElement("div",{className:"Footer"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,{tasks:[{id:"todo-0",name:"Eat",completed:!0},{id:"todo-1",name:"Sleep",completed:!1},{id:"todo-2",name:"Repeat",completed:!1}]})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.cb949f5a.chunk.js.map