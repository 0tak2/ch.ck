import{S as U,i as H,s as M,e as v,t as F,c as h,a as m,h as $,d as o,b as y,g as p,G as B,j as S,k as I,m as T,l as Y,Q,O as Z,n as G,P as cu,x as su,y as au,z as ou,r as V,p as x,C as Du,o as Bu,q as Au,N as du}from"../../chunks/index-e5d6a794.js";import{d as fu,g as _u}from"../../chunks/navigation-fbae3e32.js";import"../../chunks/singletons-d1fb5791.js";function uu(s,u,t){const e=s.slice();return e[4]=u[t],e[6]=t,e}function Cu(s,u,t){const e=s.slice();return e[7]=u[t],e[9]=t,e}function eu(s){let u,t=s[0].description+"",e;return{c(){u=v("div"),e=F(t),this.h()},l(C){u=h(C,"DIV",{class:!0});var n=m(u);e=$(n,t),n.forEach(o),this.h()},h(){y(u,"class","description")},m(C,n){p(C,u,n),B(u,e)},p(C,n){n&1&&t!==(t=C[0].description+"")&&S(e,t)},d(C){C&&o(u)}}}function tu(s){let u,t=s[0].contents,e=[];for(let C=0;C<t.length;C+=1)e[C]=nu(uu(s,t,C));return{c(){u=v("div");for(let C=0;C<e.length;C+=1)e[C].c();this.h()},l(C){u=h(C,"DIV",{class:!0});var n=m(u);for(let l=0;l<e.length;l+=1)e[l].l(n);n.forEach(o),this.h()},h(){y(u,"class","preview_panel svelte-2k18rj")},m(C,n){p(C,u,n);for(let l=0;l<e.length;l+=1)e[l].m(u,null)},p(C,n){if(n&1){t=C[0].contents;let l;for(l=0;l<t.length;l+=1){const r=uu(C,t,l);e[l]?e[l].p(r,n):(e[l]=nu(r),e[l].c(),e[l].m(u,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=t.length}},d(C){C&&o(u),Q(e,C)}}}function vu(s){let u=s[7].entry+"",t,e;return{c(){t=F(u),e=F(" \xB7\xA0")},l(C){t=$(C,u),e=$(C," \xB7\xA0")},m(C,n){p(C,t,n),p(C,e,n)},p(C,n){n&1&&u!==(u=C[7].entry+"")&&S(t,u)},d(C){C&&o(t),C&&o(e)}}}function hu(s){let u=s[7].entry+"",t;return{c(){t=F(u)},l(e){t=$(e,u)},m(e,C){p(e,t,C)},p(e,C){C&1&&u!==(u=e[7].entry+"")&&S(t,u)},d(e){e&&o(t)}}}function lu(s){let u;function t(n,l){return n[9]+1===n[4].items.length?hu:vu}let e=t(s),C=e(s);return{c(){C.c(),u=Y()},l(n){C.l(n),u=Y()},m(n,l){C.m(n,l),p(n,u,l)},p(n,l){e===(e=t(n))&&C?C.p(n,l):(C.d(1),C=e(n),C&&(C.c(),C.m(u.parentNode,u)))},d(n){C.d(n),n&&o(u)}}}function nu(s){let u,t,e=s[6]+1+"",C,n,l=s[4].sectionTitle+"",r,i,D,j,b=s[4].items,A=[];for(let a=0;a<b.length;a+=1)A[a]=lu(Cu(s,b,a));return{c(){u=v("div"),t=v("strong"),C=F(e),n=F(". "),r=F(l),i=I(),D=v("div");for(let a=0;a<A.length;a+=1)A[a].c();j=I()},l(a){u=h(a,"DIV",{});var E=m(u);t=h(E,"STRONG",{});var c=m(t);C=$(c,e),n=$(c,". "),r=$(c,l),c.forEach(o),E.forEach(o),i=T(a),D=h(a,"DIV",{});var k=m(D);for(let w=0;w<A.length;w+=1)A[w].l(k);j=T(k),k.forEach(o)},m(a,E){p(a,u,E),B(u,t),B(t,C),B(t,n),B(t,r),p(a,i,E),p(a,D,E);for(let c=0;c<A.length;c+=1)A[c].m(D,null);B(D,j)},p(a,E){if(E&1&&l!==(l=a[4].sectionTitle+"")&&S(r,l),E&1){b=a[4].items;let c;for(c=0;c<b.length;c+=1){const k=Cu(a,b,c);A[c]?A[c].p(k,E):(A[c]=lu(k),A[c].c(),A[c].m(D,j))}for(;c<A.length;c+=1)A[c].d(1);A.length=b.length}},d(a){a&&o(u),a&&o(i),a&&o(D),Q(A,a)}}}function mu(s){let u,t,e=s[0].title+"",C,n,l,r,i,D=s[0].version.toFixed(1)+"",j,b,A,a,E,c,k,w,N,z,O,R,f=s[0].description!=null&&eu(s),_=s[1]&&tu(s);return{c(){u=v("div"),t=v("div"),C=F(e),n=I(),f&&f.c(),l=I(),r=v("div"),i=F("\uBC84\uC804 "),j=F(D),b=I(),A=v("div"),a=v("button"),E=F("\uC774 \uD15C\uD50C\uB9BF \uC120\uD0DD"),c=I(),k=v("div"),w=v("button"),N=F("\uD15C\uD50C\uB9BF \uBBF8\uB9AC\uBCF4\uAE30"),z=I(),_&&_.c(),this.h()},l(g){u=h(g,"DIV",{class:!0});var d=m(u);t=h(d,"DIV",{class:!0});var J=m(t);C=$(J,e),J.forEach(o),n=T(d),f&&f.l(d),l=T(d),r=h(d,"DIV",{class:!0});var q=m(r);i=$(q,"\uBC84\uC804 "),j=$(q,D),q.forEach(o),b=T(d),A=h(d,"DIV",{class:!0});var K=m(A);a=h(K,"BUTTON",{class:!0});var L=m(a);E=$(L,"\uC774 \uD15C\uD50C\uB9BF \uC120\uD0DD"),L.forEach(o),K.forEach(o),c=T(d),k=h(d,"DIV",{class:!0});var W=m(k);w=h(W,"BUTTON",{class:!0});var X=m(w);N=$(X,"\uD15C\uD50C\uB9BF \uBBF8\uB9AC\uBCF4\uAE30"),X.forEach(o),W.forEach(o),z=T(d),_&&_.l(d),d.forEach(o),this.h()},h(){y(t,"class","title svelte-2k18rj"),y(r,"class","version"),y(a,"class","svelte-2k18rj"),y(A,"class","button_container svelte-2k18rj"),y(w,"class","secondary svelte-2k18rj"),y(k,"class","button_container svelte-2k18rj"),y(u,"class","card svelte-2k18rj")},m(g,d){p(g,u,d),B(u,t),B(t,C),B(u,n),f&&f.m(u,null),B(u,l),B(u,r),B(r,i),B(r,j),B(u,b),B(u,A),B(A,a),B(a,E),B(u,c),B(u,k),B(k,w),B(w,N),B(u,z),_&&_.m(u,null),O||(R=[Z(a,"click",s[2]),Z(w,"click",s[3])],O=!0)},p(g,[d]){d&1&&e!==(e=g[0].title+"")&&S(C,e),g[0].description!=null?f?f.p(g,d):(f=eu(g),f.c(),f.m(u,l)):f&&(f.d(1),f=null),d&1&&D!==(D=g[0].version.toFixed(1)+"")&&S(j,D),g[1]?_?_.p(g,d):(_=tu(g),_.c(),_.m(u,null)):_&&(_.d(1),_=null)},i:G,o:G,d(g){g&&o(u),f&&f.d(),_&&_.d(),O=!1,cu(R)}}}function pu(s,u,t){let{item:e}=u,C=!1;async function n(){let r="";try{r=(await fu.chcks.add({templateId:e.id,templateVersion:e.version,createdAt:new Date,modifiedAt:new Date,title:e.title,contents:e.contents})).toString()}catch(i){alert("\uC624\uB958\uAC00 \uBC1C\uC0DD\uD588\uC2B5\uB2C8\uB2E4. \uBB38\uC81C\uAC00 \uAC70\uB4ED\uB418\uBA74, \uAD00\uB9AC\uC790\uC5D0\uAC8C \uBB38\uC758\uD558\uC138\uC694."),console.error(i)}_u("/mark/"+r)}function l(){t(1,C=!C)}return s.$$set=r=>{"item"in r&&t(0,e=r.item)},[e,C,n,l]}class Eu extends U{constructor(u){super(),H(this,u,pu,mu,M,{item:0})}}function iu(s,u,t){const e=s.slice();return e[1]=u[t],e}function ru(s){let u,t,e,C;return t=new Eu({props:{item:s[1]}}),{c(){u=v("div"),su(t.$$.fragment),e=I(),this.h()},l(n){u=h(n,"DIV",{class:!0});var l=m(u);au(t.$$.fragment,l),e=T(l),l.forEach(o),this.h()},h(){y(u,"class","card")},m(n,l){p(n,u,l),ou(t,u,null),B(u,e),C=!0},p(n,l){const r={};l&1&&(r.item=n[1]),t.$set(r)},i(n){C||(V(t.$$.fragment,n),C=!0)},o(n){x(t.$$.fragment,n),C=!1},d(n){n&&o(u),Du(t)}}}function gu(s){let u,t,e=s[0],C=[];for(let l=0;l<e.length;l+=1)C[l]=ru(iu(s,e,l));const n=l=>x(C[l],1,1,()=>{C[l]=null});return{c(){u=v("div");for(let l=0;l<C.length;l+=1)C[l].c();this.h()},l(l){u=h(l,"DIV",{class:!0});var r=m(u);for(let i=0;i<C.length;i+=1)C[i].l(r);r.forEach(o),this.h()},h(){y(u,"class","container svelte-600438")},m(l,r){p(l,u,r);for(let i=0;i<C.length;i+=1)C[i].m(u,null);t=!0},p(l,[r]){if(r&1){e=l[0];let i;for(i=0;i<e.length;i+=1){const D=iu(l,e,i);C[i]?(C[i].p(D,r),V(C[i],1)):(C[i]=ru(D),C[i].c(),V(C[i],1),C[i].m(u,null))}for(Bu(),i=e.length;i<C.length;i+=1)n(i);Au()}},i(l){if(!t){for(let r=0;r<e.length;r+=1)V(C[r]);t=!0}},o(l){C=C.filter(Boolean);for(let r=0;r<C.length;r+=1)x(C[r]);t=!1},d(l){l&&o(u),Q(C,l)}}}function bu(s,u,t){let{templates:e}=u;return s.$$set=C=>{"templates"in C&&t(0,e=C.templates)},[e]}class ku extends U{constructor(u){super(),H(this,u,bu,gu,M,{templates:0})}}const P=[{id:"kimch1",title:"\uB79C\uC120 \uC5B4\uB9B0\uC774 \uAE40\uCE58\uD559\uAD50 \uCCB4\uD06C\uB9AC\uC2A4\uD2B8",description:"\uB79C\uC120 \uC5B4\uB9B0\uC774 \uAE40\uCE58\uD559\uAD50 \uC9C4\uD589 \uC804\xB7\uD6C4 \uC810\uAC80\uC0AC\uD56D \uCCB4\uD06C\uB9AC\uC2A4\uD2B8",version:1.1,contents:[{sectionTitle:"\uC2DC\uC791 \uC804 \uC810\uAC80\uC0AC\uD56D",items:[{entry:"\uC54C\uB9BC\uD1A1\uC774 \uC62C\uBC14\uB974\uAC8C \uC804\uC1A1\uB418\uC5C8\uC2B5\uB2C8\uAE4C?",detail:"\uC2DC\uAC04\uB300, \uC90C \uBBF8\uD305\uB8F8 \uBC88\uD638\uB97C \uD655\uC778\uD55C \uD6C4 \uC804\uC1A1",done:!1},{entry:"\uD504\uB85C\uADF8\uB7A8 \uC900\uBE44\uBB3C\uC744 \uD655\uC778\uD588\uC2B5\uB2C8\uAE4C?",detail:"\uAE40\uCE58 \uC591\uB150, \uCE7C, \uC7AC\uB8CC \uB4F1",done:!1},{entry:"\uC90C \uD638\uC2A4\uD2B8 \uC124\uC815\uC744 \uD655\uC778\uD588\uC2B5\uB2C8\uAE4C?",detail:"\uC1A1\uCD9C \uCEF4\uD4E8\uD130 \uD638\uC2A4\uD2B8 \uC694\uCCAD<br />\uC11C\uBE0C \uB178\uD2B8\uBD81 \uACF5\uB3D9\uD638\uC2A4\uD2B8 \uC694\uCCAD<br />\uC785\uC7A5\uC2DC \uC74C\uC18C\uAC70",done:!1},{entry:"\uC90C \uBCF4\uC548 \uC124\uC815\uC744 \uD655\uC778\uD588\uC2B5\uB2C8\uAE4C?",detail:"\uB300\uAE30\uC2E4 \uC0AC\uC6A9<br />\uC2A4\uC2A4\uB85C \uC74C\uC18C\uAC70 \uD574\uC81C \uBD88\uAC00\uB2A5\uD558\uAC8C \uC124\uC815",done:!1},{entry:"\uC90C \uC1A1\uCD9C \uC0C1\uD0DC\uB97C \uD655\uC778\uD588\uC2B5\uB2C8\uAE4C? \uC1A1\uCD9C \uCEF4\uD4E8\uD130 \uD654\uBA74\uC774 \uBAA8\uB450\uC5D0\uAC8C \uCD94\uCC9C\uB418\uC5B4\uC788\uC2B5\uB2C8\uAE4C?",detail:"\uD734\uB300\uD3F0\uC73C\uB85C \uC90C \uC811\uC18D\uD558\uC5EC \uD654\uBA74 \uBC0F \uC74C\uC131 \uC1A1\uCD9C \uC0C1\uD0DC \uD655\uC778<br />\uC1A1\uCD9C \uCEF4\uD4E8\uD130\uC758 \uD654\uBA74\uC5D0 \uB300\uD574 \uBAA8\uB450\uC5D0\uAC8C \uCD94\uCC9C \uD65C\uC131\uD654",done:!1},{entry:"\uCE74\uBA54\uB77C \uC138\uD305 \uBC0F \uC124\uC815\uC744 \uD655\uC778\uD588\uC2B5\uB2C8\uAE4C?",detail:"\uCE74\uBA54\uB77C \uC218\uD3C9 \uD655\uC778<br />\uCE74\uBA54\uB77C \uB124\uD2B8\uC6CC\uD06C \uBAA8\uB4DC<br />\uC90C \uBE44\uB514\uC624 \uC2DC\uC791<br />\uB178\uCD9C \uBC0F \uCD08\uC810",done:!1},{entry:"\uB9C8\uC774\uD06C \uC138\uD305 \uBC0F \uC124\uC815\uC744 \uD655\uC778\uD588\uC2B5\uB2C8\uAE4C?",detail:"\uB9C8\uC774\uD06C \uB450 \uAC1C \uBAA8\uB450 \uBC30\uD130\uB9AC \uD655\uC778, \uC7A0\uC2DC \uC74C\uC18C\uAC70 \uD574\uC81C \uD6C4 \uC74C\uC131 \uC1A1\uCD9C \uD14C\uC2A4\uD2B8, \uCF00\uC774\uBE14 \uC5F0\uACB0 \uD655\uC778",done:!1},{entry:"\uCE74\uBA54\uB77C\uC640 \uB9C8\uC774\uD06C\uC758 \uBC30\uD130\uB9AC \uC0C1\uD0DC\uB97C \uD655\uC778\uD588\uC2B5\uB2C8\uAE4C?",detail:"\uC5EC\uBD84 \uBC30\uD130\uB9AC\uAE4C\uC9C0 \uC794\uB7C9 \uD655\uC778 \uD544\uC694<br />\uB9C8\uC774\uD06C\uC758 \uACBD\uC6B0 2\uCE78\uC778 \uACBD\uC6B0 \uC218\uC5C5 \uC911 \uAEBC\uC9C8 \uC218 \uC788\uC74C",done:!1},{entry:"\uAE40\uCE58 \uC120\uC0DD\uB2D8\uC6A9 \uBAA8\uB2C8\uD130\uC758 \uD654\uBA74\uC774 \uC62C\uBC14\uB974\uAC8C \uD45C\uC2DC\uB429\uB2C8\uAE4C?",detail:"\uC11C\uBE0C\uB178\uD2B8\uBD81\uACFC \uBAA8\uB2C8\uD130\uB97C HDMI\uB85C \uC5F0\uACB0",done:!1},{entry:"\uC870\uBA85\uC774 \uC62C\uBC14\uB974\uAC8C \uCF1C\uC838 \uC788\uC2B5\uB2C8\uAE4C?",detail:"\uCE74\uBA54\uB77C \uC0C9\uAC10\uC774 \uC774\uC0C1\uD55C \uACBD\uC6B0 \uC870\uBA85 \uAC00\uB3D9 \uC5EC\uBD80 \uBC0F \uC0C9\uC628\uB3C4 \uC138\uD305 \uD655\uC778",done:!1}]},{sectionTitle:"\uC885\uB8CC \uD6C4 \uC810\uAC80\uC0AC\uD56D",items:[{entry:"\uC2AC\uB77C\uC774\uB4DC \uC790\uB8CC\uC758 \uC2DC\uAC04\uC744 \uB2E4\uC74C \uD68C\uCC28 \uAE30\uC900\uC73C\uB85C \uBCC0\uACBD\uD588\uC2B5\uB2C8\uAE4C?",detail:"\uB2E4\uC74C \uD68C\uCC28 \uC2DC\uC791 \uC2DC\uAC01\uC73C\uB85C \uC2AC\uB77C\uC774\uB4DC \uC790\uB8CC 1\uD398\uC774\uC9C0 \uC218\uC815",done:!1},{entry:"\uCE74\uBA54\uB77C\uC640 \uB9C8\uC774\uD06C\uC758 \uBC30\uD130\uB9AC \uC0C1\uD0DC\uB97C \uD655\uC778\uD558\uACE0 \uCDA9\uC804\uD558\uACE0 \uC788\uC2B5\uB2C8\uAE4C?",detail:"\uB9C8\uC774\uD06C\uB294 \uAE40\uCE58\uC120\uC0DD\uB2D8 \uC55E\uCE58\uB9C8\uC5D0 \uC788\uC744 \uC218 \uC788\uC74C",done:!1}]}]},{id:"test1",title:"\uD14C\uC2A4\uD2B8 \uD15C\uD50C\uB9BF",description:"\uD14C\uC2A4\uD2B8\uB97C \uC704\uD55C \uB354\uBBF8 \uB370\uC774\uD130",version:1,contents:[{sectionTitle:"\uC139\uC158 1",items:[{entry:"\uC810\uAC80\uC0AC\uD56D 1",detail:"\uC810\uAC80\uC0AC\uD56D 1 \uBD80\uAC00\uC124\uBA85",done:!1},{entry:"\uC810\uAC80\uC0AC\uD56D 2",detail:"\uC810\uAC80\uC0AC\uD56D 2 \uBD80\uAC00\uC124\uBA85",done:!1},{entry:"\uC810\uAC80\uC0AC\uD56D 3",detail:"\uC810\uAC80\uC0AC\uD56D 3 \uBD80\uAC00\uC124\uBA85",done:!1},{entry:"\uC810\uAC80\uC0AC\uD56D 4",detail:"\uC810\uAC80\uC0AC\uD56D 4 \uBD80\uAC00\uC124\uBA85",done:!1},{entry:"\uC810\uAC80\uC0AC\uD56D 5",detail:"\uC810\uAC80\uC0AC\uD56D 5 \uBD80\uAC00\uC124\uBA85",done:!1}]},{sectionTitle:"\uC139\uC158 2",items:[{entry:"\uC810\uAC80\uC0AC\uD56D 1",detail:"\uC810\uAC80\uC0AC\uD56D 1 \uBD80\uAC00\uC124\uBA85",done:!1},{entry:"\uC810\uAC80\uC0AC\uD56D 2",detail:"\uC810\uAC80\uC0AC\uD56D 2 \uBD80\uAC00\uC124\uBA85",done:!1},{entry:"\uC810\uAC80\uC0AC\uD56D 3",detail:"\uC810\uAC80\uC0AC\uD56D 3 \uBD80\uAC00\uC124\uBA85",done:!1},{entry:"\uC810\uAC80\uC0AC\uD56D 4",detail:"\uC810\uAC80\uC0AC\uD56D 4 \uBD80\uAC00\uC124\uBA85",done:!1},{entry:"\uC810\uAC80\uC0AC\uD56D 5",detail:"\uC810\uAC80\uC0AC\uD56D 5 \uBD80\uAC00\uC124\uBA85",done:!1}]}]}];function yu(s){let u,t;return u=new ku({props:{templates:P}}),{c(){su(u.$$.fragment)},l(e){au(u.$$.fragment,e)},m(e,C){ou(u,e,C),t=!0},p:G,i(e){t||(V(u.$$.fragment,e),t=!0)},o(e){x(u.$$.fragment,e),t=!1},d(e){Du(u,e)}}}function Fu(s){let u,t,e,C,n,l,r=P&&yu();return{c(){u=I(),t=v("div"),e=F("\uC0C8\uB85C\uC6B4 \uCCB4\uD06C\uB9AC\uC2A4\uD2B8 \uC0DD\uC131"),C=I(),n=v("div"),r&&r.c(),this.h()},l(i){du('[data-svelte="svelte-1krhtvl"]',document.head).forEach(o),u=T(i),t=h(i,"DIV",{class:!0});var j=m(t);e=$(j,"\uC0C8\uB85C\uC6B4 \uCCB4\uD06C\uB9AC\uC2A4\uD2B8 \uC0DD\uC131"),j.forEach(o),C=T(i),n=h(i,"DIV",{class:!0});var b=m(n);r&&r.l(b),b.forEach(o),this.h()},h(){document.title="ch.ck: \uC0C8\uB85C\uC6B4 \uCCB4\uD06C\uB9AC\uC2A4\uD2B8",y(t,"class","page_title"),y(n,"class","new")},m(i,D){p(i,u,D),p(i,t,D),B(t,e),p(i,C,D),p(i,n,D),r&&r.m(n,null),l=!0},p(i,[D]){P&&r.p(i,D)},i(i){l||(V(r),l=!0)},o(i){x(r),l=!1},d(i){i&&o(u),i&&o(t),i&&o(C),i&&o(n),r&&r.d()}}}class Iu extends U{constructor(u){super(),H(this,u,null,Fu,M,{})}}export{Iu as default};
