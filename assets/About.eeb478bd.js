import{g,h as e,aC as Y,i as A,j as L,k as Z,l as ee,d as V,n as te,q as Q,s as G,t as P,x as oe,aL as re,at as ne,U as ie,y as a,aM as se,_ as le,o as R,c as I,a as h,w as m,u as v,a0 as H,aE as U,b as T,aN as q}from"./index.d109b3f4.js";import{N as O}from"./Card.774f6682.js";function ae(o,c="default",u=[]){const s=o.$slots[c];return s===void 0?u:s()}function J(o,c="default",u=[]){const{children:i}=o;if(i!==null&&typeof i=="object"&&!Array.isArray(i)){const s=i[c];if(typeof s=="function")return s()}return u}const X=Symbol("DESCRIPTION_ITEM_FLAG");function de(o){return typeof o=="object"&&o&&!Array.isArray(o)?o.type&&o.type[X]:!1}var ce=g([e("descriptions",{fontSize:"var(--n-font-size)"},[e("descriptions-separator",`
 display: inline-block;
 margin: 0 8px 0 2px;
 `),e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[e("descriptions-table-header",{padding:"var(--n-th-padding)"}),e("descriptions-table-content",{padding:"var(--n-td-padding)"})])])]),Y("bordered",[e("descriptions-table-wrapper",[e("descriptions-table",[e("descriptions-table-row",[g("&:last-child",[e("descriptions-table-content",{paddingBottom:0})])])])])]),A("left-label-placement",[e("descriptions-table-content",[g("> *",{verticalAlign:"top"})])]),A("left-label-align",[g("th",{textAlign:"left"})]),A("center-label-align",[g("th",{textAlign:"center"})]),A("right-label-align",[g("th",{textAlign:"right"})]),A("bordered",[e("descriptions-table-wrapper",`
 border-radius: var(--n-border-radius);
 overflow: hidden;
 background: var(--n-merged-td-color);
 border: 1px solid var(--n-merged-border-color);
 `,[e("descriptions-table",[e("descriptions-table-row",[g("&:not(:last-child)",[e("descriptions-table-content",{borderBottom:"1px solid var(--n-merged-border-color)"}),e("descriptions-table-header",{borderBottom:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-header",`
 font-weight: 400;
 background-clip: padding-box;
 background-color: var(--n-merged-th-color);
 `,[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})]),e("descriptions-table-content",[g("&:not(:last-child)",{borderRight:"1px solid var(--n-merged-border-color)"})])])])])]),e("descriptions-header",`
 font-weight: var(--n-th-font-weight);
 font-size: 18px;
 transition: color .3s var(--n-bezier);
 line-height: var(--n-line-height);
 margin-bottom: 16px;
 color: var(--n-title-text-color);
 `),e("descriptions-table-wrapper",`
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[e("descriptions-table",`
 width: 100%;
 border-collapse: separate;
 border-spacing: 0;
 box-sizing: border-box;
 `,[e("descriptions-table-row",`
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `,[e("descriptions-table-header",`
 font-weight: var(--n-th-font-weight);
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-th-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),e("descriptions-table-content",`
 vertical-align: top;
 line-height: var(--n-line-height);
 display: table-cell;
 box-sizing: border-box;
 color: var(--n-td-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[L("content",`
 transition: color .3s var(--n-bezier);
 display: inline-block;
 color: var(--n-td-text-color);
 `)]),L("label",`
 font-weight: var(--n-th-font-weight);
 transition: color .3s var(--n-bezier);
 display: inline-block;
 margin-right: 14px;
 color: var(--n-th-text-color);
 `)])])])]),e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 `),Z(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)),ee(e("descriptions-table-wrapper",`
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]);const ue=Object.assign(Object.assign({},Q.props),{title:String,column:{type:Number,default:3},columns:Number,labelPlacement:{type:String,default:"top"},labelAlign:{type:String,default:"left"},separator:{type:String,default:":"},size:{type:String,default:"medium"},bordered:Boolean,labelStyle:[Object,String],contentStyle:[Object,String]});var K=V({name:"Descriptions",props:ue,setup(o){const{mergedClsPrefixRef:c,inlineThemeDisabled:u}=te(o),i=Q("Descriptions","-descriptions",ce,se,o,c),s=G(()=>{const{size:n,bordered:d}=o,{common:{cubicBezierEaseInOut:p},self:{titleTextColor:D,thColor:r,thColorModal:S,thColorPopover:w,thTextColor:F,thFontWeight:B,tdTextColor:M,tdColor:k,tdColorModal:t,tdColorPopover:E,borderColor:$,borderColorModal:b,borderColorPopover:f,borderRadius:x,lineHeight:C,[P("fontSize",n)]:y,[P(d?"thPaddingBordered":"thPadding",n)]:_,[P(d?"tdPaddingBordered":"tdPadding",n)]:z}}=i.value;return{"--n-title-text-color":D,"--n-th-padding":_,"--n-td-padding":z,"--n-font-size":y,"--n-bezier":p,"--n-th-font-weight":B,"--n-line-height":C,"--n-th-text-color":F,"--n-td-text-color":M,"--n-th-color":r,"--n-th-color-modal":S,"--n-th-color-popover":w,"--n-td-color":k,"--n-td-color-modal":t,"--n-td-color-popover":E,"--n-border-radius":x,"--n-border-color":$,"--n-border-color-modal":b,"--n-border-color-popover":f}}),l=u?oe("descriptions",G(()=>{let n="";const{size:d,bordered:p}=o;return p&&(n+="a"),n+=d[0],n}),s,o):void 0;return{mergedClsPrefix:c,cssVars:u?void 0:s,themeClass:l==null?void 0:l.themeClass,onRender:l==null?void 0:l.onRender,compitableColumn:re(o,["columns","column"]),inlineThemeDisabled:u}},render(){const o=this.$slots.default,c=o?ne(o()):[],u=c.length,{compitableColumn:i,labelPlacement:s,labelAlign:l,size:n,bordered:d,title:p,cssVars:D,mergedClsPrefix:r,separator:S,onRender:w}=this;w==null||w();const F=c.filter(t=>de(t));u!==F.length&&ie("descriptions","`n-descriptions` only takes `n-descriptions-item` as children.");const B={span:0,row:[],secondRow:[],rows:[]},k=F.reduce((t,E,$)=>{const b=E.props||{},f=F.length-1===$,x=["label"in b?b.label:J(E,"label")],C=[J(E)],y=b.span||1,_=t.span;t.span+=y;const z=b.labelStyle||b["label-style"]||this.labelStyle,j=b.contentStyle||b["content-style"]||this.contentStyle;if(s==="left")d?t.row.push(a("th",{class:`${r}-descriptions-table-header`,colspan:1,style:z},x),a("td",{class:`${r}-descriptions-table-content`,colspan:f?(i-_)*2+1:y*2-1,style:j},C)):t.row.push(a("td",{class:`${r}-descriptions-table-content`,colspan:f?(i-_)*2:y*2},a("span",{class:`${r}-descriptions-table-content__label`,style:z},[...x,S&&a("span",{class:`${r}-descriptions-separator`},S)]),a("span",{class:`${r}-descriptions-table-content__content`,style:j},C)));else{const N=f?(i-_)*2:y*2;t.row.push(a("th",{class:`${r}-descriptions-table-header`,colspan:N,style:z},x)),t.secondRow.push(a("td",{class:`${r}-descriptions-table-content`,colspan:N,style:j},C))}return(t.span>=i||f)&&(t.span=0,t.row.length&&(t.rows.push(t.row),t.row=[]),s!=="left"&&t.secondRow.length&&(t.rows.push(t.secondRow),t.secondRow=[])),t},B).rows.map(t=>a("tr",{class:`${r}-descriptions-table-row`},t));return a("div",{style:D,class:[`${r}-descriptions`,this.themeClass,`${r}-descriptions--${s}-label-placement`,`${r}-descriptions--${l}-label-align`,`${r}-descriptions--${n}-size`,d&&`${r}-descriptions--bordered`]},p||this.$slots.header?a("div",{class:`${r}-descriptions-header`},p||ae(this,"header")):null,a("div",{class:`${r}-descriptions-table-wrapper`},a("table",{class:`${r}-descriptions-table`},a("tbody",null,k))))}});const pe={label:String,span:{type:Number,default:1},labelStyle:[Object,String],contentStyle:[Object,String]};var W=V({name:"DescriptionsItem",[X]:!0,props:pe,render(){return null}});const be="vue-admin-pro",ge="1.0.0",he={dev:"vite --mode dev","dev:mock":"vite --mode dev:mock",build:"vite build --mode prod","build:mock":"vite build --mode prod:mock",preview:"vite preview","preview:mock":"vite preview --mode prod:mock","check-lint":"eslint --ext .js,.ts,.vue --ignore-path .gitignore .","patch-lint":"eslint --fix --ext .js,.ts,.vue --ignore-path .gitignore .",format:"pnpm prettier --write src/*",prepare:"husky install",commit:"git-cz"},me={"@amap/amap-jsapi-loader":"^1.0.1","@amap/amap-jsapi-types":"^0.0.8","@better-scroll/core":"^2.4.2","@vueuse/core":"^8.2.5","@wangeditor/editor":"^5.0.1","@wangeditor/editor-for-vue":"^5.1.11",axios:"^0.26.1",colord:"^2.9.2",echarts:"^5.3.2",lodash:"^4.17.21",mockjs:"^1.1.0","naive-ui":"^2.27.0",nprogress:"^0.2.0",pinia:"^2.0.12",vditor:"^3.8.13",vue:"^3.2.25","vue-router":"^4.0.12"},ve={"@commitlint/cli":"^16.2.3","@commitlint/config-conventional":"^16.2.1","@iconify/vue":"^3.2.0","@types/node":"^17.0.23","@types/nprogress":"^0.2.0","@typescript-eslint/eslint-plugin":"^5.17.0","@typescript-eslint/parser":"^5.17.0","@vitejs/plugin-vue":"^2.0.0",commitizen:"^4.2.4","commitlint-config-cz":"^0.13.3","cz-conventional-changelog":"^3.3.0","cz-customizable":"^6.3.0",eslint:"^8.12.0","eslint-config-airbnb-base":"^15.0.0","eslint-config-prettier":"^8.5.0","eslint-plugin-import":"^2.11.0","eslint-plugin-prettier":"^4.0.0","eslint-plugin-vue":"^8.5.0",husky:"^7.0.4","lint-staged":"^12.3.7",prettier:"^2.6.1","svg-sprite-loader":"^6.0.11",typescript:"^4.4.4",vite:"^2.7.2","vite-plugin-mock":"^2.9.6","vite-plugin-windicss":"^1.8.3","vue-tsc":"^0.29.8",windicss:"^3.5.1"},fe={commitizen:{path:"./node_modules/cz-conventional-changelog"}};var ye={name:be,version:ge,scripts:he,dependencies:me,devDependencies:ve,config:fe,"lint-staged":{"*.{js,jsx,vue,ts,tsx}":["prettier --write","eslint --fix"]}};const we={class:"m-[2rem]"},Fe=T(" Vue Admin Pro \u662F\u4E00\u6B3E\u57FA\u4E8EVue3 + TypeScript + NaiveUI\u7B49\u6280\u672F\u6808\u642D\u5EFA\u7684\u540E\u53F0\u7CFB\u7EDF\u3002\u5E02\u9762\u4E0A\u5DF2\u7ECF\u5F00\u6E90\u6210\u578B\u7684\u4F18\u79C0\u540E\u53F0\u7CFB\u7EDF\u592A\u591A\u4E86\uFF0C\u7406\u8BBA\u4E0A\u6CA1\u6709\u5FC5\u8981\u81EA\u5DF1\u53BB\u9020\u8F6E\u5B50\u4E86\u3002 \u6240\u4EE5\u5BF9\u4E8E\u672C\u7CFB\u7EDF\u7684\u5B9A\u4F4D\uFF1A\u4E00\u3001\u5355\u7EAF\u7528\u4E8E\u5FEB\u901F\u719F\u7EC3\u4F7F\u7528Vue3\u76F8\u5173\u7F16\u7801\u8BED\u6CD5\uFF0C\u4E8C\u3001\u7ED9\u60F3\u8981\u521A\u521A\u5F00\u59CB\u5B66\u4E60Vue3\u7684\u5F00\u53D1\u8005\u53EF\u4EE5\u63D0\u4F9B\u4E00\u4E2A\u53EF\u53C2\u8003\u9879\u76EE\u3002 "),Ee=V({name:"About",setup(o){const{dependencies:c,devDependencies:u}=ye,i=[],s=[];return Object.keys(c).forEach(l=>{const n={name:"",version:""};n.name=l,n.version=c[l],i.push(n)}),Object.keys(u).forEach(l=>{const n={name:"",version:""};n.name=l,n.version=u[l],s.push(n)}),(l,n)=>(R(),I("div",we,[h(v(O),{title:"Vue Admin Pro",bordered:"",hoverable:""},{default:m(()=>[Fe]),_:1}),h(v(O),{title:"\u751F\u6210\u73AF\u5883\u76F8\u5173\u4F9D\u8D56",bordered:"",hoverable:""},{default:m(()=>[h(v(K),{"label-placement":"left",bordered:""},{default:m(()=>[(R(),I(H,null,U(i,(d,p)=>h(v(W),{key:p,label:d.name},{default:m(()=>[T(q(d.version),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1}),h(v(O),{title:"\u5F00\u53D1\u73AF\u5883\u76F8\u5173\u4F9D\u8D56",bordered:"",hoverable:""},{default:m(()=>[h(v(K),{"label-placement":"left",bordered:""},{default:m(()=>[(R(),I(H,null,U(s,(d,p)=>h(v(W),{key:p,label:d.name},{default:m(()=>[T(q(d.version),1)]),_:2},1032,["label"])),64))]),_:1})]),_:1})]))}});var _e=le(Ee,[["__scopeId","data-v-34e1b0c1"],["__file","/home/runner/work/vue-admin-pro/vue-admin-pro/src/views/about/About.vue"]]);export{_e as default};
