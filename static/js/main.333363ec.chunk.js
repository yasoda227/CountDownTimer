(this.webpackJsonpcountdowntimer=this.webpackJsonpcountdowntimer||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),s=n(3),a=n.n(s),r=(n(12),n(4)),o=n(5),d=n(7),u=n(6),j=(n(13),n(14),n(0));var h=function(t){var e=t.day,n=t.hour,i=t.minute,c=t.second;return Object(j.jsx)("div",{className:"timer-container",children:Object(j.jsxs)("div",{className:"count-down-time",children:[Object(j.jsx)("h1",{children:"React Countdown Timer"}),Object(j.jsx)("p",{children:"Timer ends on"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("span",{children:"".concat(e,"Days")})}),Object(j.jsx)("li",{children:Object(j.jsx)("span",{children:"".concat(n,"Hours")})}),Object(j.jsx)("li",{children:Object(j.jsx)("span",{children:"".concat(i,"Mins")})}),Object(j.jsx)("li",{children:Object(j.jsx)("span",{children:"".concat(c,"Secs")})})]})]})})};n(16);var l=function(t){var e=t.getDate,n=t.setDateString;return Object(j.jsxs)("div",{className:"date-input-field",children:[Object(j.jsx)("input",{type:"text",onChange:e,placeholder:"Enter the date like: 1 jan 2022 20:45:56 "}),Object(j.jsx)("button",{onClick:n,children:"Submit"})]})},b=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var i;return Object(r.a)(this,n),(i=e.call(this,t)).getDate=function(t){console.log(t.target.value),i.setState({input:t.target.value})},i.setDateString=function(){i.setState({dateString:i.state.input})},i.x=setInterval((function(){var t=(new Date).getTime(),e=new Date(i.state.dateString).getTime()-t,n=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),s=Math.floor(e%36e5/6e4),a=Math.floor(e%6e4/1e3);i.setState({day:n,hour:c,minute:s,second:a,diff_time:e})}),1e3),i.state={day:0,hour:0,minute:0,second:0,diff_time:0,input:"",dateString:"",errorMessage:""},i}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"main-app",children:[""===this.state.dateString?Object(j.jsx)(h,{day:0,hour:0,minute:0,second:0}):this.state.diff_time<0?Object(j.jsx)("h1",{className:"error-message",children:"Please Choose a Present or Future Date"}):Object(j.jsx)(h,{day:this.state.day,hour:this.state.hour,minute:this.state.minute,second:this.state.second}),Object(j.jsx)(l,{getDate:this.getDate,setDateString:this.setDateString})]})}}]),n}(i.Component),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),s(t),a(t)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),m()}],[[17,1,2]]]);
//# sourceMappingURL=main.333363ec.chunk.js.map