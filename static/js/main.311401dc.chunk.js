(this["webpackJsonpfirst-project"]=this["webpackJsonpfirst-project"]||[]).push([[0],{126:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(34),a=n(5),s="SEND-MESSAGE",c={dialogsData:[{id:"1",name:"Dimych"},{id:"2",name:"Andrey"},{id:"3",name:"Sveta"},{id:"4",name:"Sasha"},{id:"5",name:"Viktor"},{id:"6",name:"Valera"}],messagesData:[{id:"1",message:"Hi"},{id:"2",message:"How are you?"},{id:"3",message:"Yo"},{id:"4",message:"Yo"},{id:"5",message:"Yo"}]},i=function(e){return{type:s,text:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;if(t.type===s){var n=t.text;return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:e.messagesData.length+1,message:n}])})}return e}},132:function(e,t,n){e.exports={usersPhoto:"Users_usersPhoto__135I4",selectedPage:"Users_selectedPage__hNNgM"}},134:function(e,t,n){e.exports={loader:"Preloader_loader__7CGtY"}},162:function(e,t,n){},167:function(e,t,n){},20:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(133),a=n.n(r).a.create({withCredentials:!0,headers:{"API-KEY":"4f1b1534-f81d-401b-acb5-67c313d67604"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},c={setUserProfile:function(e){return a.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e.data}))}},i={setAuthUserData:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n}).then((function(e){return e.data}))},logout:function(){return a.delete("auth/login").then((function(e){return e.data}))}}},21:function(e,t,n){e.exports={nav:"Navbar_nav__3kds-",item:"Navbar_item__2o7mp",active:"Navbar_active__3a3my"}},292:function(e,t,n){"use strict";n.r(t);n(162);var r=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,298)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))},a=n(0),s=n.n(a),c=n(64),i=n.n(c),o=n(35),u=n(36),l=n(39),d=n(38),f=(n(167),n(9)),j=n(22),p=n(21),b=n.n(p),h=n(12),g=n(51),O=n.n(g),m=n(1),v=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:O.a.round}),Object(m.jsx)("div",{className:O.a.name,children:e.name})]})},x=function(e){var t=e.sideBar.friendsData.map((function(e){return Object(m.jsx)(v,{name:e.name})}));return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:"Friends"}),Object(m.jsx)("div",{className:O.a.friendWrapper,children:t})]})},w=Object(h.b)((function(e){return{sideBar:e.sideBar}}),(function(){return{}}))(x),_=function(e){return Object(m.jsxs)("nav",{className:b.a.nav,children:[Object(m.jsx)("div",{className:b.a.item,children:Object(m.jsx)(j.b,{to:"/profile",activeClassName:b.a.active,children:"Profile"})}),Object(m.jsx)("div",{className:b.a.item,children:Object(m.jsx)(j.b,{to:"/dialogs",activeClassName:b.a.active,children:"Messages"})}),Object(m.jsx)("div",{className:b.a.item,children:Object(m.jsx)(j.b,{to:"/users",activeClassName:b.a.active,children:"Users"})}),Object(m.jsx)("div",{className:b.a.item,children:Object(m.jsx)("span",{children:"News"})}),Object(m.jsx)("div",{className:b.a.item,children:Object(m.jsx)("span",{children:"Music"})}),Object(m.jsx)("div",{className:b.a.item,children:Object(m.jsx)("span",{children:"Settings"})}),Object(m.jsx)("div",{className:b.a.item,children:Object(m.jsx)(w,{})})]})},P=n(71),S=n(68),y=n(128),C=n(72),I=n.n(C),N=n(131),E=n.n(N),k=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,s=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/i),f=Object(a.useState)(1),j=Object(y.a)(f,2),p=j[0],b=j[1],h=(p-1)*i+1,g=p*i;return Object(m.jsxs)("div",{className:I.a.paginator,children:[p>1?Object(m.jsx)("button",{onClick:function(){b(p-1)},children:"PREV"}):null,u.filter((function(e){return e>=h&&e<=g})).map((function(e){return Object(m.jsx)("span",{className:E()(Object(S.a)({},I.a.selectedPage,r===e),I.a.pageNumber),onClick:function(t){s(e)},children:e},e)})),d>p?Object(m.jsx)("button",{onClick:function(){b(p+1)},children:"NEXT"}):null]})},U=n(132),F=n.n(U),D=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("span",{children:[Object(m.jsx)("div",{children:Object(m.jsx)(j.b,{to:"/profile/"+t.id,children:Object(m.jsx)("img",{src:null!=t.photos.small?t.photos.small:"https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",alt:"avatar",className:F.a.usersPhoto})})}),Object(m.jsx)("div",{children:t.followed?Object(m.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow"}):Object(m.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Follow"})})]}),Object(m.jsxs)("span",{children:[Object(m.jsxs)("span",{children:[Object(m.jsx)("div",{children:t.name}),Object(m.jsx)("div",{children:t.status})]}),Object(m.jsxs)("span",{children:[Object(m.jsx)("div",{children:"user.location.country"}),Object(m.jsx)("div",{children:"user.location.city"})]})]})]})},T=["totalUsersCount","pageSize","currentPage","onPageChanged","followingInProgress","follow","unfollow"],A=function(e){var t=e.totalUsersCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,s=e.followingInProgress,c=e.follow,i=e.unfollow,o=Object(P.a)(e,T);return Object(m.jsxs)("div",{children:[Object(m.jsx)(k,{totalItemsCount:t,pageSize:n,currentPage:r,onPageChanged:a}),Object(m.jsx)("div",{children:o.users.map((function(e){return Object(m.jsx)(D,{user:e,followingInProgress:s,follow:c,unfollow:i},e.id)}))})]})},L=n(11),z=n.n(L),R=n(18),M=n(34),G=n(5),B=n(20),H=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(G.a)(Object(G.a)({},e),r):e}))},W="FOLLOW",Y="UNFOLLOW",V="SET_USERS",X="SET_CURRENT_PAGE",q="SET_TOTAL_COUNT",J="TOGGLE_IS_FETCHING",Z="TOGGLE_IS_FOLLOWING_PROGRESS",K={users:[],pageSize:10,totalUsersCount:20,currentPage:1,isFetching:!1,followingInProgress:[]},Q=function(e){return{type:W,userId:e}},$=function(e){return{type:Y,userId:e}},ee=function(e){return{type:X,currentPage:e}},te=function(e){return{type:J,isFetching:e}},ne=function(e,t){return{type:Z,isFetching:e,userId:t}},re=function(){var e=Object(R.a)(z.a.mark((function e(t,n,r,a){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ne(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&(t(ne(!1,n)),t(a(n)));case 5:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:return Object(G.a)(Object(G.a)({},e),{},{users:H(e.users,t.userId,"id",{followed:!0})});case Y:return Object(G.a)(Object(G.a)({},e),{},{users:H(e.users,t.userId,"id",{followed:!1})});case V:return Object(G.a)(Object(G.a)({},e),{},{users:Object(M.a)(t.users)});case X:return Object(G.a)(Object(G.a)({},e),{},{currentPage:t.currentPage});case q:return Object(G.a)(Object(G.a)({},e),{},{totalUsersCount:t.totalCount});case J:return Object(G.a)(Object(G.a)({},e),{},{isFetching:t.isFetching});case Z:return Object(G.a)(Object(G.a)({},e),{},{followingInProgress:!1===t.isFetching?Object(M.a)(e.followingInProgress.filter((function(e){return e!==t.userId}))):[e.followingInProgress,t.userId]});default:return e}},se=n(67),ce=n(10),ie=function(e){return e.usersPage.users},oe=function(e){return e.usersPage.pageSize},ue=function(e){return e.usersPage.totalUsersCount},le=function(e){return e.usersPage.currentPage},de=function(e){return e.usersPage.isFetching},fe=function(e){return e.usersPage.followingInProgress},je=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[this.props.isFetching?Object(m.jsx)(se.a,{}):null,Object(m.jsx)(A,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,toggleFollowingInProgress:this.props.toggleFollowingInProgress,followingInProgress:this.props.followingInProgress,follow:this.props.follow,unfollow:this.props.unfollow})]})}}]),n}(s.a.Component),pe=Object(ce.d)(Object(h.b)((function(e){return{users:ie(e),pageSize:oe(e),totalUsersCount:ue(e),currentPage:le(e),isFetching:de(e),followingInProgress:fe(e)}}),{setCurrentPage:ee,getUsers:function(e,t){return function(){var n=Object(R.a)(z.a.mark((function n(r){var a;return z.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(te(!0)),r(ee(e)),n.next=4,B.c.getUsers(e,t);case 4:a=n.sent,r(te(!1)),r((c=a.items,{type:V,users:c})),r((s=a.totalCount,{type:q,totalCount:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()},follow:function(e){return function(){var t=Object(R.a)(z.a.mark((function t(n){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:re(n,e,B.c.follow,Q);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(R.a)(z.a.mark((function t(n){return z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:re(n,e,B.c.unfollow,$);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(je),be=n(93),he=n.n(be),ge=function(e){return Object(m.jsxs)("header",{className:he.a.header,children:[Object(m.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/ru/7/73/Roscartography_Company_logo.png",alt:"logo"}),Object(m.jsx)("div",{className:he.a.loginBlock,children:e.isAuth?Object(m.jsxs)("div",{children:[e.login,Object(m.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(m.jsx)(j.b,{to:"/login",children:"Login"})})]})},Oe=n(44),me="samurai-network/auth/SET_USER_DATA",ve={userId:null,email:null,login:null,isAuth:!1},xe=function(e,t,n,r){return{type:me,payload:{userId:e,email:t,login:n,isAuth:r}}},we=function(){return function(){var e=Object(R.a)(z.a.mark((function e(t){var n,r,a,s,c;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.setAuthUserData();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,s=r.email,c=r.login,t(xe(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;return t.type===me?Object(G.a)(Object(G.a)({},e),t.payload):e},Pe=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(m.jsx)(ge,Object(G.a)({},this.props))}}]),n}(s.a.Component),Se=Object(h.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(R.a)(z.a.mark((function e(t){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.logout();case 2:0===e.sent.resultCode&&t(xe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Pe),ye=n(127),Ce=n(33),Ie=n(53),Ne=n.n(Ie),Ee=n(65),ke=Object(Ee.a)(30),Ue=Object(ye.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(m.jsxs)("form",{onSubmit:t,children:[Object(Ce.a)("Email","email",Ce.b,"text",[Ee.b,ke]),Object(Ce.a)("Password","password",Ce.b,"password",[Ee.b,ke]),Object(Ce.a)(null,"rememberMe",Ce.b,"checkbox",null,"Remember Me"),n&&Object(m.jsxs)("div",{className:Ne.a.formSummaryError,children:[" ",n]}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{children:"Login"})})]})})),Fe=Object(h.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(R.a)(z.a.mark((function r(a){var s,c;return z.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,B.a.login(e,t,n);case 2:0===(s=r.sent).resultCode?a(we()):(c=s.messages.length>0?s.messages[0]:"Something went wrong",a(Object(Oe.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(m.jsx)(f.a,{to:"/profile"}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsx)(Ue,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),De="INITIALIZED_SUCCESS",Te={initialized:!1},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;return t.type===De?Object(G.a)(Object(G.a)({},e),{},{initialized:!0}):e},Le=n(126),ze={friendsData:[{name:"Andrey"},{name:"Sasha"},{name:"Sveta"}]},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze;return e},Me=n(96),Ge=n(136),Be=n(129),He=Object(ce.c)({profilePage:Me.b,dialogsPage:Le.a,sideBar:Re,usersPage:ae,auth:_e,form:Be.a,app:Ae}),We=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ce.d,Ye=Object(ce.e)(He,We(Object(ce.a)(Ge.a)));window.__store__=Ye;var Ve=Ye,Xe=function(e){return function(t){return Object(m.jsx)(a.Suspense,{fallback:Object(m.jsx)("div",{children:"Loading..."}),children:Object(m.jsx)(e,Object(G.a)({},t))})}},qe=s.a.lazy((function(){return n.e(4).then(n.bind(null,300))})),Je=s.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),Ze=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(m.jsxs)("div",{className:"app-wrapper",children:[Object(m.jsx)(Se,{}),Object(m.jsx)(_,{}),Object(m.jsxs)("div",{className:"app-wrapper-content",children:[Object(m.jsx)(f.b,{path:"/dialogs",render:Xe(qe)}),Object(m.jsx)(f.b,{path:"/profile/:userId?",render:Xe(Je)}),Object(m.jsx)(f.b,{path:"/users",render:function(){return Object(m.jsx)(pe,{})}}),Object(m.jsx)(f.b,{path:"/login",render:function(){return Object(m.jsx)(Fe,{})}})]})]}):Object(m.jsx)(se.a,{})}}]),n}(s.a.Component),Ke=Object(ce.d)(f.f,Object(h.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(we());Promise.all([t]).then((function(){return e({type:De})}))}}}))(Ze),Qe=function(e){return Object(m.jsx)(j.a,{children:Object(m.jsx)(h.a,{store:Ve,children:Object(m.jsx)(Ke,{})})})};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(Qe,{})}),document.getElementById("root")),r()},33:function(e,t,n){"use strict";n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return j}));var r=n(5),a=n(71),s=(n(0),n(53)),c=n.n(s),i=n(91),o=n(1),u=["input","meta"],l=function(e){return function(t){var n=t.input,s=t.meta,i=s.error,l=s.touched,d=Object(a.a)(t,u),f=i&&l;return Object(o.jsxs)("div",{className:c.a.formControl+" "+(f?c.a.error:""),children:[Object(o.jsx)("div",{children:Object(o.jsx)(e,Object(r.a)(Object(r.a)({},n),d))}),Object(o.jsx)("div",{children:f?Object(o.jsx)("span",{children:i}):Object(o.jsx)("span",{})})]})}},d=l("textarea"),f=l("input"),j=function(e,t,n,r,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,{type:r,placeholder:e,component:n,name:t,validate:a}),s]})}},51:function(e,t,n){e.exports={friendWrapper:"Friends_friendWrapper__1k0aV",round:"Friends_round__3eBmI",name:"Friends_name__3Ay0Z"}},53:function(e,t,n){e.exports={formControl:"FormsControl_formControl__1aRLH",error:"FormsControl_error__1UURE",formSummaryError:"FormsControl_formSummaryError__349Bu"}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},67:function(e,t,n){"use strict";var r=n.p+"static/media/Loading.6c59eaa7.svg",a=n(134),s=n.n(a),c=n(1);t.a=function(e){return Object(c.jsx)("img",{alt:"loader",src:r,className:s.a.loader})}},72:function(e,t,n){e.exports={paginator:"Paginator_paginator__39D2n",pageNumber:"Paginator_pageNumber__1Th6S",selectedPage:"Paginator_selectedPage__2uGwG"}},93:function(e,t,n){e.exports={header:"Header_header__w7Yyx",loginBlock:"Header_loginBlock__IdqiX"}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return g})),n.d(t,"e",(function(){return O}));var r=n(11),a=n.n(r),s=n(18),c=n(34),i=n(5),o=n(20),u="ADD-POST",l="SET_USER_PROFILE",d="SET_USER_STATUS",f="DELETE_POST",j={postsData:[{id:"1",message:"Hi, how are you?",likesCount:"12"},{id:"2",message:"It's my first post",likesCount:"11"}],profile:null,status:""},p=function(e){return{type:u,text:e}},b=function(e){return{type:d,status:e}},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.setUserProfile(e);case 2:r=t.sent,n({type:l,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(b(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{postsData:[].concat(Object(c.a)(e.postsData),[{id:e.postsData.length+1,message:t.text,likesCount:0}])});case f:return Object(i.a)(Object(i.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.id}))});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}}}},[[292,1,2]]]);
//# sourceMappingURL=main.311401dc.chunk.js.map