(this["webpackJsonpawen-music-react"]=this["webpackJsonpawen-music-react"]||[]).push([[26],{476:function(e,n,t){"use strict";t.r(n);var a,c,s=t(37),r=t(0),i=t(15),o=t(16),l=o.a.div(a||(a=Object(i.a)(["\n  background-color: #fff;\n  display: flex;\n  .left-content {\n    border-right: 1px solid #e0e0e0;\n    width: 74%;\n    .search-result-list {\n      display: flex;\n      align-items: center;\n      margin: 20px 0 0 20px;\n      & > li {\n        padding: 0 10px;\n        cursor: pointer;\n        border-bottom: 3px solid transparent;\n        &.active {\n          border-bottom: 3px solid #ec4141;\n          font-weight: bolder;\n        }\n      }\n    }\n    .search-content {\n      margin: 20px 0 0 0;\n    }\n  }\n  .right-content {\n  }\n"]))),h=o.a.div(c||(c=Object(i.a)(["\n  width: 1220px;\n  margin: 0 auto;\n  background-color: #fff;\n"]))),u=[{name:"\u6b4c\u66f2",path:"/Home/searchDetail/song"},{name:"\u4e13\u8f91",path:"/Home/searchDetail/album"},{name:"\u6b4c\u624b",path:"/Home/searchDetail/artist"}],b=t(52),d=t(3),m=function(e){var n=Object(r.useState)(0),t=Object(s.a)(n,2),a=t[0],c=t[1],i=Object(r.useCallback)((function(n,t){c(t),e.history.push({pathname:n.path})}),[e.history]);return Object(r.useEffect)((function(){i(u[0],0)}),[i]),Object(d.jsx)(l,{children:Object(d.jsxs)(h,{children:[Object(d.jsxs)("div",{className:"left-content",children:[Object(d.jsx)("ul",{className:"search-result-list",children:u.map((function(e,n){return Object(d.jsx)("li",{onClick:function(t){return i(e,n)},className:a===n?"active":"",children:e.name},e.name)}))}),Object(d.jsx)("div",{className:"search-content",children:Object(b.a)(e.route.routes)})]}),Object(d.jsx)("div",{className:"right-content"})]})})};n.default=Object(r.memo)(m)}}]);
//# sourceMappingURL=26.8100b1fb.chunk.js.map