(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,a){e.exports={tasksList:"Tasks_tasksList__2gITH",tasksWrapper:"Tasks_tasksWrapper__3F3lm"}},23:function(e,t,a){e.exports={wrapper:"ToDoListWrapper_wrapper__2aI7p"}},24:function(e,t,a){e.exports={newTaskInput:"NewTask_newTaskInput__2kz-n"}},27:function(e,t,a){e.exports={task:"EachTaskInList_task__3aaqC"}},33:function(e,t,a){},34:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),c=a.n(r),o=(a(33),a(11)),i=a(12),u=a(14),l=a(13),p=(a(34),a(23)),d=a.n(p),m=a.p+"static/media/back.1fa88825.png",j=a(24),k=a.n(j),g=a(1),b=function(e){var t=e.enterHandler,a=e.catchInputChanges,n=e.newTaskInputValue;return Object(g.jsx)("div",{className:k.a.newTaskInput,children:Object(g.jsx)("input",{onKeyDown:t,onChange:a,value:n})})},O=a(15),v=a(6),I=a(25),f="INPUT_TASK_VALUE_CHANGED",T="REMOVE_TASK",h="ADD_TASK",x={newTaskInputValue:"",newTaskCreated:"false",maxId:localStorage.getItem("itemsMaxId_1"),tasks:"undefined"!==localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[]};function S(e){if(!(e&&e.length>0))return!1;return!/^[\s]+$/.test(e)||void 0}var w=Object(I.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object.assign({},e,Object(v.a)(Object(v.a)({},e),{},{newTaskInputValue:t.newTaskInputValue}));case h:function a(){document.querySelector(".".concat(t.tasksWrapper)).scrollTop=document.querySelector(".".concat(t.tasksWrapper)).scrollHeight}document.querySelector(".".concat(t.tasksWrapper)).addEventListener("scroll",a),a(),setTimeout((function(){document.querySelector(".".concat(t.tasksWrapper)).removeEventListener("scroll",a)}),1e3);var n=S(e.newTaskInputValue);if(n){var s,r=+localStorage.getItem("itemsMaxId_1");if(localStorage.setItem("itemsMaxId_1",r+1),localStorage.getItem("items")){s="undefined"!==localStorage.getItem("items")&&"null"!==localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[];var c=[].concat(Object(O.a)(s),[{id:r+1,value:e.newTaskInputValue}]),o=c;localStorage.setItem("items",JSON.stringify(o))}else{s=[];var i=[].concat(Object(O.a)(s),[{id:r+1,value:e.newTaskInputValue}]),u=i;localStorage.setItem("items",JSON.stringify(u))}return Object.assign({},e,Object(v.a)(Object(v.a)({},e),{},{newTaskCreated:"true",newTaskInputValue:"",enterTyped:!0,maxId:r+1,tasks:[].concat(Object(O.a)(s),[{id:r+1,value:e.newTaskInputValue}])}))}return!1;case T:var l="undefined"!==localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[],p=e.tasks;return l&&l.forEach((function(e,a){e.id==t.id&&(l&&l.splice(a,1),p&&0===p.length?localStorage.setItem("itemsMaxId_1",0):l&&localStorage.setItem("items",JSON.stringify(l)))})),Object.assign({},e,Object(v.a)(Object(v.a)({},e),{},{maxId:localStorage.getItem("itemsMaxId_1"),tasks:"undefined"!==localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[]}));default:return e}}),x),_=function(e){return{type:T,id:e}},N=w,y=a(5),V=Object(y.b)((function(e){return{newTaskInputValue:e.newTaskInputValue}}),(function(e){return{enterHandler:function(t){if("Enter"===t.code||13===t.keyCode)return e((a=t.target.parentNode.getAttribute("id"),n=t.target.parentNode.parentNode.getAttribute("class"),{type:h,id:a,tasksWrapper:n}));var a,n},catchInputChanges:function(t){var a=t.target.value;return e({type:f,newTaskInputValue:a})}}}))(b),C=a(19),A=a.n(C),E=a(27),J=a.n(E),L=function(e){var t=e.id,a=e.value,n=e.removeTask;return Object(g.jsxs)("div",{className:J.a.task,id:t,children:[Object(g.jsx)("span",{children:a}),Object(g.jsx)("button",{onClick:function(e){return n(e)},children:"x"})]})},W=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)(L,{id:this.props.taskValue.id,value:this.props.taskValue.value,removeTask:this.props.removeTask})})}}]),a}(s.a.Component),M=Object(y.b)((function(e){return{id:e.maxId,value:e.newTaskInputValue}}),(function(e){return{removeTask:function(t){e(_(t.target.parentNode.getAttribute("id")))}}}))(W),q=function(e){var t=e.removeTask,a=e.taskValue;return Object(g.jsx)("div",{children:Object(g.jsx)(M,{removeTask:t,taskValue:a})})},D=function(e){var t=e.removeTask,a="undefined"!==localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[];return Object(g.jsx)("div",{className:A.a.tasksWrapper,children:a&&a.map((function(e){return Object(g.jsx)("div",{className:A.a.tasksList,children:Object(g.jsx)(q,{removeTask:t,taskValue:e})})}))})},H=function(e){var t=e.state,a=e.removeTask,n=e.id,s=e.onChange;return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:m,className:"App-logo",alt:"logo"})}),Object(g.jsxs)("div",{className:d.a.wrapper,children:[Object(g.jsx)(V,{}),Object(g.jsx)(D,{dispatch:s,state:t,removeTask:a},n)]})]})},K=Object(y.b)((function(e){return{newTaskCreated:e.newTaskCreated,id:e.maxId,tasks:e.tasks}}),(function(e){return{removeTask:function(t){e(_(t))}}}))(H),U=a(28),z=function(e){Object(u.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(g.jsx)(U.a,{basename:"/todoList",children:Object(g.jsx)("div",{className:"App",children:Object(g.jsx)(K,{store:N})})})}}]),a}(s.a.Component);c.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(y.a,{store:N,children:Object(g.jsx)(z,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.8c71e6b3.chunk.js.map