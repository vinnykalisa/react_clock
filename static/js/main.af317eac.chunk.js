(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),a=n(2),i=n(3),r=n(5),l=n(4),s=n(1),u=n(0),d=function(){return(new Date).toUTCString().slice(-12,-4)},h=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={today:d()},t.timerId=null,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({today:d()}),console.info(t.state.today)}),1e3)}},{key:"componentDidUpdate",value:function(t){t.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(t.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){this.timerId&&window.clearInterval(this.timerId)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:this.state.today})]})}}]),n}(s.Component);n(13);function m(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var k=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={hasClock:!0,clockName:"Clock-0"},t.timerId=null,t.handlerRightClick=function(e){e.preventDefault(),t.setState({hasClock:!1})},t.handlerLeftClick=function(){t.setState({hasClock:!0})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("contextmenu",this.handlerRightClick),document.addEventListener("click",this.handlerLeftClick),this.timerId=window.setInterval((function(){t.setState({clockName:m()})}),3300)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("contextmenu",this.handlerRightClick),document.removeEventListener("click",this.handlerLeftClick),this.timerId&&window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state,e=t.hasClock,n=t.clockName;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),e&&Object(u.jsx)(h,{clockName:n})]})}}]),n}(s.Component);o.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.af317eac.chunk.js.map