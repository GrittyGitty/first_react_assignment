(this.webpackJsonpexample=this.webpackJsonpexample||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),l=a(8),i=a.n(l),r=(a(14),a(1)),c=a(2),o=a(5),u=a(4),h=a(3),k=a(6),d=(a(15),function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";Object(r.a)(this,t),this.text=e,this.isDone=!1}return Object(c.a)(t,[{key:"toggleDone",value:function(){this.isDone=!this.isDone}}]),t}()),b=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).task_text="",a.handleTaskInputChange=a.handleTaskInputChange.bind(Object(h.a)(a)),a.handleAddTaskClick=a.handleAddTaskClick.bind(Object(h.a)(a)),a.addTaskCallback=t.addTaskCallback,a}return Object(k.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("input",{onChange:this.handleTaskInputChange,id:"task_input",type:"text"}),s.a.createElement("br",null),s.a.createElement("button",{onClick:this.handleAddTaskClick},"Add task"))}},{key:"handleTaskInputChange",value:function(t){this.task_text=t.target.value}},{key:"handleAddTaskClick",value:function(){if(this.addTaskCallback){var t=new d(this.task_text);this.addTaskCallback(t)}}}]),e}(s.a.Component),v=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).text=t.text,a}return Object(k.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return console.log(this.text),s.a.createElement("li",null,s.a.createElement("div",null,this.text))}}]),e}(s.a.Component),f=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).tasks=t.tasksList,a.toggleTaskByText=a.toggleTaskByText.bind(Object(h.a)(a)),a.tasks.push(new d("buy pizza")),a}return Object(k.a)(e,t),Object(c.a)(e,[{key:"componentWillReceiveProps",value:function(t){this.tasks=t.tasksList,this.forceUpdate()}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("ul",null,this.printTasks(this.tasks)))}},{key:"printTasks",value:function(t){var e=[],a=!0,n=!1,l=void 0;try{for(var i,r=t[Symbol.iterator]();!(a=(i=r.next()).done);a=!0){var c=i.value;e.push(s.a.createElement(v,{text:c.text}))}}catch(o){n=!0,l=o}finally{try{a||null==r.return||r.return()}finally{if(n)throw l}}return e}},{key:"toggleTaskByText",value:function(t){console.log(t.target);var e=!0,a=!1,n=void 0;try{for(var s,l=this.tasks[Symbol.iterator]();!(e=(s=l.next()).done);e=!0){var i=s.value;"a"===i.text&&i.toggleTaskByText()}}catch(r){a=!0,n=r}finally{try{e||null==l.return||l.return()}finally{if(a)throw n}}this.forceUpdate()}},{key:"getTaskText",value:function(t){return t.isDone?s.a.createElement("p",null,s.a.createElement("del",null,t.text)):s.a.createElement("p",null,t.text)}}]),e}(s.a.Component),p=function(t){function e(t){var a;return Object(r.a)(this,e),(a=Object(o.a)(this,Object(u.a)(e).call(this,t))).tasks=[],a.pushTask=a.pushTask.bind(Object(h.a)(a)),a}return Object(k.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(b,{addTaskCallback:this.pushTask}),s.a.createElement(f,{tasksList:this.tasks}))}},{key:"pushTask",value:function(t){t&&this.tasks.push(t),this.setState(this.state)}}]),e}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(p,null),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},9:function(t,e,a){t.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.b8358456.chunk.js.map