webpackJsonp([0x5eadfb0a5d2a],{208:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(){return"undefined"==typeof k&&"undefined"!=typeof window&&window.IntersectionObserver&&(k=new window.IntersectionObserver(function(e){e.forEach(function(e){P.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(k.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),k}t.__esModule=!0;var i=n(101),l=a(i),o=n(167),s=a(o),u=n(166),d=a(u),f=n(427),c=a(f),p=n(200),g=a(p),h=n(4),m=a(h),b=n(6),y=a(b),v=function(e){var t=(0,g.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},C=function(e){var t=v(e),n=t.sizes?t.sizes.src:t.resolutions.src;return!!w[n]||(w[n]=!0,!1)},k=void 0,P=[],E=function(e,t){r().observe(e),P.push([e,t])},N=null,x=function(){if(null!==N)return N;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return N=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},_=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",u=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+l+o+t+n+i+r+a+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+u+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},L=function(e){var t=e.style,n=e.onLoad,a=(0,c.default)(e,["style","onLoad"]);return m.default.createElement("img",(0,g.default)({},a,{onLoad:n,style:(0,g.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};L.propTypes={style:y.default.object,onLoad:y.default.func};var S=function(e){function t(n){(0,l.default)(this,t);var a=(0,s.default)(this,e.call(this,n)),r=!0,i=!0,o=!1,u=C(n);return!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!1,o=!0),"undefined"==typeof window&&(r=!1,i=!1),a.state={isVisible:r,imgLoaded:i,IOSupported:o},a.handleRef=a.handleRef.bind(a),a}return(0,d.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&E(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),n=t.title,a=t.alt,r=t.className,i=t.outerWrapperClassName,l=t.style,o=void 0===l?{}:l,s=t.imgStyle,u=void 0===s?{}:s,d=t.sizes,f=t.resolutions,c=t.backgroundColor,p=t.Tag,h=void 0;h="boolean"==typeof c?"lightgray":c;var b=(0,g.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},u),y=(0,g.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},u);if(d){var w=d;return w.srcWebp&&w.srcSetWebp&&x()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),m.default.createElement(p,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===o.position?"initial":"relative"}},m.default.createElement(p,{className:(r?r:"")+" gatsby-image-wrapper",style:(0,g.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef},m.default.createElement(p,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&m.default.createElement(L,{alt:a,title:n,src:w.base64,style:b}),w.tracedSVG&&m.default.createElement(L,{alt:a,title:n,src:w.tracedSVG,style:b}),h&&m.default.createElement(p,{title:n,style:{backgroundColor:h,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&m.default.createElement(L,{alt:a,title:n,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:y,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,g.default)({alt:a,title:n},w))}})))}if(f){var C=f,k=(0,g.default)({position:"relative",overflow:"hidden",display:"inline-block",width:C.width,height:C.height},o);return"inherit"===o.display&&delete k.display,C.srcWebp&&C.srcSetWebp&&x()&&(C.src=C.srcWebp,C.srcSet=C.srcSetWebp),m.default.createElement(p,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===o.position?"initial":"relative"}},m.default.createElement(p,{className:(r?r:"")+" gatsby-image-wrapper",style:k,ref:this.handleRef},C.base64&&m.default.createElement(L,{alt:a,title:n,src:C.base64,style:b}),C.tracedSVG&&m.default.createElement(L,{alt:a,title:n,src:C.tracedSVG,style:b}),h&&m.default.createElement(p,{title:n,style:{backgroundColor:h,width:C.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:C.height}}),this.state.isVisible&&m.default.createElement(L,{alt:a,title:n,width:C.width,height:C.height,srcSet:C.srcSet,src:C.src,style:y,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,g.default)({alt:a,title:n,width:C.width,height:C.height},C))}})))}return null},t}(m.default.Component);S.defaultProps={fadeIn:!0,alt:"",Tag:"div"},S.propTypes={responsiveResolution:y.default.object,responsiveSizes:y.default.object,resolutions:y.default.object,sizes:y.default.object,fadeIn:y.default.bool,title:y.default.string,alt:y.default.string,className:y.default.oneOfType([y.default.string,y.default.object]),outerWrapperClassName:y.default.oneOfType([y.default.string,y.default.object]),style:y.default.object,imgStyle:y.default.object,position:y.default.string,backgroundColor:y.default.oneOfType([y.default.string,y.default.bool]),onLoad:y.default.func,Tag:y.default.string},t.default=S},1161:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=a(r),l=function(e){var t=e.breakLabel,n=e.breakClassName||"break";return i.default.createElement("li",{className:n},t)};t.default=l},1162:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),i=a(r),l=function(e){var t=e.pageClassName,n=e.pageLinkClassName,a=e.onClick,r=e.href,l="Page "+e.page+(e.extraAriaContext?" "+e.extraAriaContext:""),o=null;return e.selected&&(o="page",l="Page "+e.page+" is your current page",t="undefined"!=typeof t?t+" "+e.activeClassName:e.activeClassName),i.default.createElement("li",{className:t},i.default.createElement("a",{onClick:a,role:"button",className:n,href:r,tabIndex:"0","aria-label":l,"aria-current":o,onKeyPress:a},e.page))};t.default=l},1163:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(4),u=a(s),d=n(6),f=a(d),c=n(1162),p=a(c),g=n(1161),h=a(g),m=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handlePreviousPage=function(e){var t=n.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&n.handlePageSelected(t-1,e)},n.handleNextPage=function(e){var t=n.state.selected,a=n.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<a-1&&n.handlePageSelected(t+1,e)},n.handlePageSelected=function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,n.state.selected!==e&&(n.setState({selected:e}),n.callCallback(e))},n.callCallback=function(e){"undefined"!=typeof n.props.onPageChange&&"function"==typeof n.props.onPageChange&&n.props.onPageChange({selected:e})},n.pagination=function(){var e=[],t=n.props,a=t.pageRangeDisplayed,r=t.pageCount,i=t.marginPagesDisplayed,l=t.breakLabel,o=t.breakClassName,s=n.state.selected;if(r<=a)for(var d=0;d<r;d++)e.push(n.getPageElement(d));else{var f=a/2,c=a-f;s>r-a/2?(c=r-s,f=a-c):s<a/2&&(f=s,c=a-f);var p=void 0,g=void 0,m=void 0,b=function(e){return n.getPageElement(e)};for(p=0;p<r;p++)g=p+1,g<=i?e.push(b(p)):g>r-i?e.push(b(p)):p>=s-f&&p<=s+c?e.push(b(p)):l&&e[e.length-1]!==m&&(m=u.default.createElement(h.default,{key:p,breakLabel:l,breakClassName:o}),e.push(m))}return e},n.state={selected:e.initialPage?e.initialPage:e.forcePage?e.forcePage:0},n}return l(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,n=e.disableInitialCallback;"undefined"==typeof t||n||this.callCallback(t)}},{key:"componentWillReceiveProps",value:function(e){"undefined"!=typeof e.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:e.forcePage})}},{key:"hrefBuilder",value:function e(t){var n=this.props,e=n.hrefBuilder,a=n.pageCount;if(e&&t!==this.state.selected&&t>=0&&t<a)return e(t+1)}},{key:"getPageElement",value:function(e){var t=this.state.selected,n=this.props,a=n.pageClassName,r=n.pageLinkClassName,i=n.activeClassName,l=n.extraAriaContext;return u.default.createElement(p.default,{key:e,onClick:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:a,pageLinkClassName:r,activeClassName:i,extraAriaContext:l,href:this.hrefBuilder(e),page:e+1})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,n=e.previousClassName,a=e.nextClassName,r=e.pageCount,i=e.containerClassName,l=e.previousLinkClassName,o=e.previousLabel,s=e.nextLinkClassName,d=e.nextLabel,f=this.state.selected,c=n+(0===f?" "+t:""),p=a+(f===r-1?" "+t:"");return u.default.createElement("ul",{className:i},u.default.createElement("li",{className:c},u.default.createElement("a",{onClick:this.handlePreviousPage,className:l,href:this.hrefBuilder(f-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage},o)),this.pagination(),u.default.createElement("li",{className:p},u.default.createElement("a",{onClick:this.handleNextPage,className:s,href:this.hrefBuilder(f+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage},d)))}}]),t}(s.Component);m.propTypes={pageCount:f.default.number.isRequired,pageRangeDisplayed:f.default.number.isRequired,marginPagesDisplayed:f.default.number.isRequired,previousLabel:f.default.node,nextLabel:f.default.node,breakLabel:f.default.node,hrefBuilder:f.default.func,onPageChange:f.default.func,initialPage:f.default.number,forcePage:f.default.number,disableInitialCallback:f.default.bool,containerClassName:f.default.string,pageClassName:f.default.string,pageLinkClassName:f.default.string,activeClassName:f.default.string,previousClassName:f.default.string,nextClassName:f.default.string,previousLinkClassName:f.default.string,nextLinkClassName:f.default.string,disabledClassName:f.default.string,breakClassName:f.default.string},m.defaultProps={pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousClassName:"previous",nextClassName:"next",previousLabel:"Previous",nextLabel:"Next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1},t.default=m},1164:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(1163),i=a(r);e.exports=i.default},456:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){return e.raw=t,e}t.__esModule=!0;var s=o(["\n  width: 100%;\n  margin: "," auto;\n"],["\n  width: 100%;\n  margin: "," auto;\n"]),u=o(["\n  display: block;\n  background-color: #fff;\n  border-radius: 2px;\n  border: 1px solid rgba(0, 0, 0, 0.09);\n  margin: "," 0;\n\n  &:first-child {\n    margin-top: 0;\n  }\n  &:last-child {\n    margin-bottom: 0;\n  }\n"],["\n  display: block;\n  background-color: #fff;\n  border-radius: 2px;\n  border: 1px solid rgba(0, 0, 0, 0.09);\n  margin: "," 0;\n\n  &:first-child {\n    margin-top: 0;\n  }\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]),d=o(["\n  border-bottom: 1px solid rgba(0, 0, 0, 0.09);\n\n  & .gatsby-image-outer-wrapper {\n    position: relative;\n    height: ",";\n    overflow: hidden;\n\n    "," {\n      height: ",";\n    }\n  }\n\n  & .gatsby-image-wrapper {\n    position: absolute;\n    overflow: hidden;\n    top: 50%;\n    left: 50%;\n    width: 100%;\n    height: 100%;\n    transform: translate(-50%, -50%);\n  }\n"],["\n  border-bottom: 1px solid rgba(0, 0, 0, 0.09);\n\n  & .gatsby-image-outer-wrapper {\n    position: relative;\n    height: ",";\n    overflow: hidden;\n\n    "," {\n      height: ",";\n    }\n  }\n\n  & .gatsby-image-wrapper {\n    position: absolute;\n    overflow: hidden;\n    top: 50%;\n    left: 50%;\n    width: 100%;\n    height: 100%;\n    transform: translate(-50%, -50%);\n  }\n"]),f=o(["\n  padding: "," ",";\n"],["\n  padding: "," ",";\n"]),c=o(["\n  ",";\n  line-height: ",";\n  font-weight: 700;\n  margin: 0;\n  font-size: 1.4rem;\n"],["\n  ",";\n  line-height: ",";\n  font-weight: 700;\n  margin: 0;\n  font-size: 1.4rem;\n"]),p=o(["\n  line-height: ",";\n  font-weight: 400;\n  margin: 0;\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.54);\n"],["\n  line-height: ",";\n  font-weight: 400;\n  margin: 0;\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.54);\n"]),g=o(["\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.44);\n  margin-top: ",";\n"],["\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.44);\n  margin-top: ",";\n"]),h=n(93),m=a(h),b=n(4),y=a(b),v=n(6),w=a(v),C=n(69),k=n(172),P=n(100),E=a(P),N=n(44),x=a(N),_=n(208),L=a(_),S=x.default.ul(s,(0,C.rhythm)(1)),j=(0,x.default)(m.default)(u,(0,C.rhythm)(1.75)),O=x.default.div(d,(0,C.rhythm)(6),E.default.media.Phablet,(0,C.rhythm)(10)),z=x.default.div(f,(0,C.rhythm)(.75),(0,C.rhythm)(1)),R=x.default.h2(c,(0,k.wordWrap)("keep-all"),(0,C.rhythm)(1.4)),D=x.default.h2(p,(0,C.rhythm)(1.4)),I=x.default.time(g,(0,C.rhythm)(.5)),T=function(e){function t(){return r(this,t),i(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.posts;return y.default.createElement(S,null,e.map(function(e){return y.default.createElement(j,{key:e.node.fields.slug,to:e.node.fields.slug},e.node.frontmatter.mainImage&&y.default.createElement(O,null,y.default.createElement(L.default,{sizes:e.node.frontmatter.mainImage.childImageSharp.sizes})),y.default.createElement(z,null,y.default.createElement(R,null,e.node.frontmatter.title),e.node.frontmatter.subTitle&&y.default.createElement(D,null,e.node.frontmatter.subTitle),y.default.createElement(I,null,e.node.frontmatter.date)))}))},t}(y.default.Component);T.propTypes={posts:w.default.array},t.default=T,e.exports=t.default},662:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){return e.raw=t,e}t.__esModule=!0,t.pageQuery=void 0;var s=o(["\n  font-weight: bold;\n  background-color: #76b835;\n  & a {\n    color: #fff;\n  }\n"],["\n  font-weight: bold;\n  background-color: #76b835;\n  & a {\n    color: #fff;\n  }\n"]),u=o(["\n  margin: "," auto;\n  position: relative;\n  display: block;\n  height: 3rem;\n\n  & > ul {\n    ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    list-style: none;\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  }\n\n  & > ul > li {\n    margin: 0;\n    font-size: 0.8rem;\n    background-color: #fff;\n\n    &:hover {\n      cursor: pointer;\n      /* ","; */\n    }\n\n    &.active {\n      ",";\n    }\n\n    &.previous,\n    &.next {\n    }\n\n    & a {\n      display: block;\n      padding: 0.7rem;\n      outline: none;\n    }\n\n    &:not(:first-child) {\n      border-left: 1px solid #f1f1f1;\n    }\n  }\n"],["\n  margin: "," auto;\n  position: relative;\n  display: block;\n  height: 3rem;\n\n  & > ul {\n    ",";\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    list-style: none;\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  }\n\n  & > ul > li {\n    margin: 0;\n    font-size: 0.8rem;\n    background-color: #fff;\n\n    &:hover {\n      cursor: pointer;\n      /* ","; */\n    }\n\n    &.active {\n      ",";\n    }\n\n    &.previous,\n    &.next {\n    }\n\n    & a {\n      display: block;\n      padding: 0.7rem;\n      outline: none;\n    }\n\n    &:not(:first-child) {\n      border-left: 1px solid #f1f1f1;\n    }\n  }\n"]),d=n(4),f=a(d),c=n(418),p=a(c),g=n(165),h=n(198),m=a(h),b=n(199),y=a(b),v=n(456),w=a(v),C=n(1164),k=a(C),P=n(44),E=a(P),N=n(93),x=n(457),_=n(69),L=(0,P.css)(s),S=E.default.div(u,(0,_.rhythm)(1),x.centeredX,L,L),j=function(e){function t(){var n,a,l;r(this,t);for(var o=arguments.length,s=Array(o),u=0;u<o;u++)s[u]=arguments[u];return n=a=i(this,e.call.apply(e,[this].concat(s))),a.handlePageClick=function(e){var t=e.selected;t=0===t?"":t+1,(0,N.navigateTo)("/"+t)},l=n,i(a,l)}return l(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=this.props.pathContext;return f.default.createElement(g.PageWrapper,null,f.default.createElement(p.default,{title:e.title,meta:[{name:"description",content:""+e.description},{property:"og:type",content:"article"},{property:"og:url",content:""+e.url},{property:"og:title",content:""+e.title},{property:"og:description",content:""+e.description}],link:[{rel:"canonical",href:""+e.url}]}),f.default.createElement(m.default,null),f.default.createElement(g.PostContentWrapper,null,f.default.createElement(w.default,{posts:this.props.pathContext.group}),f.default.createElement(S,null,f.default.createElement(k.default,{previousLabel:f.default.createElement("i",{className:"fa fa-angle-left"}),nextLabel:f.default.createElement("i",{className:"fa fa-angle-right"}),breakLabel:f.default.createElement("a",{href:""},f.default.createElement("i",{className:"fa fa-ellipsis-h"})),forcePage:t.index-1,breakClassName:"break-me",pageCount:t.pageCount,marginPagesDisplayed:1,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))),f.default.createElement(y.default,null))},t}(f.default.Component);t.default=j;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-index-js-43747873a945a0e37aaf.js.map