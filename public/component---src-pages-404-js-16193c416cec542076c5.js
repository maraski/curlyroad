(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{165:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return l});var n=a(8),r=a.n(n),o=a(0),i=a.n(o),c=a(172),s=a(173),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return i.a.createElement(c.a,{location:this.props.location,title:t},i.a.createElement(s.a,{title:"404: Not Found"}),i.a.createElement("h1",null,"Not Found"),i.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(i.a.Component);e.default=u;var l="1097489062"},168:function(t,e,a){"use strict";a.d(e,"b",function(){return d});var n=a(0),r=a.n(n),o=a(5),i=a.n(o),c=a(39),s=a.n(c);a.d(e,"a",function(){return s.a});a(169);var u=r.a.createContext({});function l(t){var e=t.staticQueryData,a=t.data,n=t.query,o=t.render,i=a?a.data:e[n]&&e[n].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(t){var e=t.data,a=t.query,n=t.render,o=t.children;return r.a.createElement(u.Consumer,null,function(t){return r.a.createElement(l,{data:e,query:a,render:n||o,staticQueryData:t})})};d.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},169:function(t,e,a){var n;t.exports=(n=a(171))&&n.default||n},170:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return u});var n=a(175),r=a.n(n),o=a(176),i=a.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var c=new r.a(i.a);var s=c.rhythm,u=c.scale},171:function(t,e,a){"use strict";a.r(e);a(40);var n=a(0),r=a.n(n),o=a(5),i=a.n(o),c=a(64),s=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},172:function(t,e,a){"use strict";a(40);var n=a(8),r=a.n(n),o=a(0),i=a.n(o),c=a(168),s=a(170),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,a=e.location,n=e.title,r=e.children;return t="/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.5),{marginBottom:Object(s.a)(.5),marginTop:0})},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(c.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},i.a.createElement("header",null,t),i.a.createElement("main",null,r),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},e}(i.a.Component);e.a=u},173:function(t,e,a){"use strict";var n=a(174),r=a(0),o=a.n(r),i=a(5),c=a.n(i),s=a(177),u=a.n(s);function l(t){var e=t.description,a=t.lang,r=t.meta,i=t.title,c=n.data.site,s=e||c.siteMetadata.description;return o.a.createElement(u.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""},l.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},e.a=l},174:function(t){t.exports={data:{site:{siteMetadata:{title:"Curly Road",description:"A starter blog demonstrating what Gatsby can do.",author:"Mara Estalilla"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-16193c416cec542076c5.js.map