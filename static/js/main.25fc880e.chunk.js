(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(3),a=n.n(i),r=n(4),j=n(5),d=n(6),o=n(8),b=n(7),l=n(0),h=function(e){var t=e.handleClick;return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{id:"good",type:"button",onClick:t,children:"Good"}),Object(l.jsx)("button",{id:"neutral",type:"button",onClick:t,children:"Neutral"}),Object(l.jsx)("button",{id:"bad",type:"button",onClick:t,children:"Bad"})]})},u=function(e){var t=e.good,n=e.neutral,c=e.bad,s=e.total,i=e.positivePercentage;return Object(l.jsxs)("div",{children:[Object(l.jsxs)("p",{children:["Good: ",Object(l.jsx)("span",{children:t})]}),Object(l.jsxs)("p",{children:["Neutral: ",Object(l.jsx)("span",{children:n})]}),Object(l.jsxs)("p",{children:["Bad: ",Object(l.jsx)("span",{children:c})]}),Object(l.jsxs)("p",{children:["Total: ",Object(l.jsx)("span",{children:s})]}),Object(l.jsxs)("p",{children:["Positive feedback:",Object(l.jsxs)("span",{children:[i/s*100," %"]})]})]})},O=function(e){var t=e.message;return Object(l.jsx)("div",{children:Object(l.jsx)("p",{children:t})})},x=function(){return Object(l.jsx)("div",{})},p=function(e){Object(o.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={good:0,neutral:0,bad:0},e.handleClick=function(t){var n=t.target.id;e.setState((function(e){return Object(r.a)({},n,e[n]+1)}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Please leave feedback"}),Object(l.jsx)(h,{handleClick:this.handleClick}),Object(l.jsx)("h3",{children:"Statics"}),Object(l.jsx)(O,{message:"There is no feedback"}),Object(l.jsx)(u,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.state.good+this.state.neutral+this.state.bad,positivePercentage:this.state.good}),Object(l.jsx)(x,{title:""})]})}}]),n}(s.a.Component),v=p,f=function(){return Object(l.jsx)("div",{children:Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(v,{})})})};n(14);a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.25fc880e.chunk.js.map