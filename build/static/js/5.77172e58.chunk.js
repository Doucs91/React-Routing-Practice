(this["webpackJsonppractice-routing"]=this["webpackJsonppractice-routing"]||[]).push([[5],{41:function(e,t,s){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},42:function(e,t,s){e.exports={item:"QuoteItem_item__2dOvb"}},43:function(e,t,s){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},54:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(8),i=s(41),o=s.n(i),r=s(1),u=function(){return Object(r.jsxs)("div",{className:o.a.noquotes,children:[Object(r.jsx)("p",{children:"No quotes found!"}),Object(r.jsx)(n.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})},a=s(2),d=s(42),j=s.n(d),l=function(e){return Object(r.jsxs)("li",{className:j.a.item,children:[Object(r.jsxs)("figure",{children:[Object(r.jsx)("blockquote",{children:Object(r.jsx)("p",{children:e.text})}),Object(r.jsx)("figcaption",{children:e.author})]}),Object(r.jsx)(n.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},b=s(43),h=s.n(b),x=function(e){var t,s,n=Object(a.h)(),i=Object(a.i)(),o="asc"===new URLSearchParams(i.search).get("sort"),u=(t=e.quotes,s=o,t.sort((function(e,t){return s?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)("div",{className:h.a.sorting,children:Object(r.jsxs)("button",{onClick:function(){n.push("/quotes?sort="+(o?"desc":"asc"))},children:["Sort ",o?"Descending":"Ascending"]})}),Object(r.jsx)("ul",{className:h.a.list,children:u.map((function(e){return Object(r.jsx)(l,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},O=s(14),f=s(35),p=s(36);t.default=function(){var e=Object(f.a)(p.d,!0),t=e.sendRequest,s=e.status,n=e.data,i=e.error;return Object(c.useEffect)((function(){t()}),[t]),"pending"===s?Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(O.a,{})}):i?Object(r.jsx)("p",{className:"centered focused",children:i}):"completed"!==s||n&&0!==n.length?Object(r.jsx)(x,{quotes:n}):Object(r.jsx)(u,{})}}}]);
//# sourceMappingURL=5.77172e58.chunk.js.map