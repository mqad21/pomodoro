(this.webpackJsonppomodoro=this.webpackJsonppomodoro||[]).push([[0],{181:function(e,t,a){e.exports=a(265)},186:function(e,t,a){},264:function(e,t,a){},265:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(17),l=a.n(r),c=(a(186),a(13)),s=a(7),i=a(9),m=a(3),u=a(18),d=a(299),p=a(44),b=a(31),g=a(301),f=a(303),k=a(304),E=a(305),h=Object(d.a)({root:{width:"calc(100vw)",position:"fixed",bottom:0}});function v(e){var t=h(),a=o.a.useState(e.location),n=Object(i.a)(a,2),r=n[0],l=n[1];return o.a.createElement(g.a,{value:r,onChange:function(e,t){l(t)},showLabels:!0,className:t.root},o.a.createElement(f.a,{label:"Task List",value:"",component:b.b,to:"/",icon:o.a.createElement(k.a,null)}),o.a.createElement(f.a,{label:"Manual Timer",value:"timer",component:b.b,to:"/timer",icon:o.a.createElement(E.a,null)}))}var T=a(306),y=a(307),O=a(308),j=a(64),S=a(166),B=a(313),x=a(314),N=a(309),w=a(310),M=a(311),C=a(315),I=a(316),P=Object(n.createContext)({}),L=Object(d.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},listItem:{minWidth:"36px"}}}));function F(e){var t=L(),a=o.a.useState(!0),r=Object(i.a)(a,2),l=r[0],c=(r[1],o.a.useState(null)),m=Object(i.a)(c,2),d=m[0],p=m[1],b=Boolean(d),g=Object(n.useContext)(P),f=g.state,k=g.actions,E=Object(u.g)(),h=function(){p(null)};return o.a.createElement("div",{className:t.root},o.a.createElement(T.a,null,o.a.createElement(y.a,null,o.a.createElement(O.a,{disabled:e.isPlay,edge:"start",style:{display:e.displayBack?"":"none"},color:"inherit","aria-label":"open drawer",onClick:function(){E.push("/")}},o.a.createElement(N.a,null)),o.a.createElement(j.a,{variant:"h6",className:t.title},e.title),l&&o.a.createElement("div",null,o.a.createElement(O.a,{"aria-label":"delete","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(){k({type:"setState",payload:Object(s.a)(Object(s.a)({},f),{},{oldTaskId:f.selectedTasks,selectedTasks:[]})})},color:"inherit",style:{display:0==f.selectedTasks.length?"none":""}},o.a.createElement(w.a,null)),o.a.createElement(O.a,{"aria-label":"menu","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){p(e.currentTarget)},color:"inherit",style:{display:0!=f.selectedTasks.length||e.displayBack?"none":""}},o.a.createElement(M.a,null)),o.a.createElement(S.a,{id:"menu-appbar",anchorEl:d,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:b,onClose:h},o.a.createElement(B.a,{onClick:function(){h(),E.push("/settings")}},o.a.createElement(x.a,{className:t.listItem},o.a.createElement(C.a,{fontSize:"small"})),"Settings"),o.a.createElement(B.a,{onClick:function(){h(),E.push("/about")}},o.a.createElement(x.a,{className:t.listItem},o.a.createElement(I.a,{fontSize:"small"})),"About"))))))}var A=a(336),z=a(337),G=a(340),q=a(317),D=a(318),H=a(319),J=a(164),R=a.n(J);function W(e){var t=Object(n.useContext)(P),a=t.state,r=t.actions,l=Object(d.a)({card:{marginBottom:"1em",width:"100%"},overlay:{position:"absolute",width:"100%",height:"100%",top:"0",left:"0",backgroundColor:"black",opacity:a.selectedTasks.includes(e.id)?.1:0}})(),c=e.name,i=e.count,m=Object(u.g)();return o.a.createElement(R.a,{time:.25,onEnd:function(t,n){t.preventDefault();var o=a.selectedTasks,l=0==a.selectedTasks.length,c=o.indexOf(e.id),i=c>-1;n||!l&&!i?o.includes(e.id)||(o.push(e.id),r({type:"setState",payload:Object(s.a)(Object(s.a)({},a),{},{selectedTasks:o})})):l?m.push(e.to):i&&(o.splice(c,1),r({type:"setState",payload:Object(s.a)(Object(s.a)({},a),{},{selectedTasks:o})}))},onStart:function(e){}},o.a.createElement(q.a,{className:l.card},o.a.createElement(D.a,null,o.a.createElement(H.a,null,o.a.createElement(j.a,{variant:"h5",component:"h2"},c),o.a.createElement(j.a,{color:"textSecondary"},i," pomodoro")),o.a.createElement("div",{className:l.overlay}))))}var K=a(323),U=a(324),V=a(325),$=a(268),Q=a(339),X=a(342),Y=a(322),Z=a(321),_=a(320);function ee(e){var t=e.open,a=e.setOpen,r=e.type,l=o.a.useState(""),c=Object(i.a)(l,2),m=c[0],u=c[1],d=Object(n.useContext)(P),p=d.state,b=d.actions,g=d.updateTasks,f=o.a.useState({title:null,component:null,handleSave:null,saveText:null}),k=Object(i.a)(f,2),E=k[0],h=k[1],v=function(){u(""),a(!1)},T=function(t){"settings"==r?"number"==e.settings.fieldType?t.target.value<100&&t.target.value>0?u(t.target.value):u(""):t.target.value.length<=48&&u(t.target.value):t.target.value.length<=18&&u(t.target.value)};return o.a.useEffect((function(){switch(console.log(e.idMenu),r){case"newTask":h({title:"New Task",component:function(e){var t=e.value;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Q.a,{autoFocus:!0,margin:"dense",id:"name",label:"Task Name",type:"text",fullWidth:!0,value:t,onChange:T}))},saveText:"Create",handleSave:function(e){b({type:"setState",payload:Object(s.a)(Object(s.a)({},p),{},{newTask:{name:e,count:0,currentTime:p.settings.pomodoroTime.pomodoro,status:"pomodoro",isStart:0}})}),v()}});break;case"settings":var t=e.settings;u(t.value),h({title:t.label,component:function(e){var a=e.value;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Q.a,{autoFocus:!0,margin:"dense",id:t.name,label:t.label,type:t.fieldType,fullWidth:!0,value:a,onChange:T}))},saveText:"Save",handleSave:function(e){var a=Object(s.a)({},p.settings);a[t.name][t.id]="number"==t.fieldType?parseInt(e):e,b({type:"setState",payload:Object(s.a)(Object(s.a)({},p),{},{settings:a})}),g(),v()}})}}),[]),o.a.createElement(X.a,{open:t,onClose:v,"aria-labelledby":"form-dialog-title"},o.a.createElement(_.a,{id:"form-dialog-title"},E.title),o.a.createElement(Z.a,null,o.a.createElement(E.component,{value:m})),o.a.createElement(Y.a,null,o.a.createElement($.a,{onClick:v,color:"primary"},"Cancel"),o.a.createElement($.a,{disabled:""==m,onClick:function(){return E.handleSave(m)},color:"primary"},E.saveText)))}var te=Object(d.a)((function(e){return{root:{height:"calc(100vh - 125px)",textAlign:"center"},img:{width:"10em"},fab:{position:"fixed",bottom:e.spacing(9),right:e.spacing(2),zIndex:"2"}}}));function ae(){var e=te(),t=(Object(p.a)(),o.a.useContext(P)),a=t.state,n=(t.actions,o.a.useState(!1)),r=Object(i.a)(n,2),l=r[0],c=r[1],s=function(){return 0==a.tasks.length?o.a.createElement(K.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:e.root},o.a.createElement("img",{src:"/pomodoro/assets/no-data.png",className:e.img}),o.a.createElement(j.a,{gutterBottom:!0,variant:"subtitle1",style:{opacity:.75}},"No Current Task")):a.tasks.map((function(e,t){return o.a.createElement(W,{key:e.id,id:e.id,name:e.name,count:e.count,to:"/task/"+e.id})}))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(s,null),o.a.createElement(U.a,{className:e.fab,color:"primary","aria-label":"add",onClick:function(){c(!0)}},o.a.createElement(V.a,null)),o.a.createElement(ee,{open:l,setOpen:c,type:"newTask"}))}var ne=a(343),oe=a(344),re=a(326),le=a(327),ce=a(328),se=a(329),ie=a(330),me=a(48),ue=a.n(me),de=Object(d.a)((function(e){return{hide:{display:"none"}}}));function pe(e){Object(p.a)(),de();var t=e.icon;return e.hide?null:e.nav?o.a.createElement(G.a,null,o.a.createElement(O.a,{disabled:e.nav.disabled,style:{opacity:e.nav.disabled?.5:1}},o.a.createElement(t,{color:"secondary",onClick:e.click}))):o.a.createElement(G.a,{borderRadius:"50%",borderColor:"primary.main",border:1,margin:1},o.a.createElement(O.a,null,o.a.createElement(t,{fontSize:"large",color:"primary",onClick:e.click})))}var be=a(59);function ge(e,t,a){if("granted"===Notification.permission){var n=t?a[e].start:a[e].end,o=n.title,r={body:n.body};navigator.serviceWorker.getRegistration().then((function(e){e.showNotification(o,r)}))}else console.error("Notification denied")}var fe=a(63),ke=Object(d.a)((function(e){return{root:{minHeight:"calc(100vh - 134px)",textAlign:"center"},card:{width:"100%"},timer:{width:"100%",fontSize:"6em",textAlign:"center",fontWeight:"bold"},count:{marginTop:"2em"}}}));function Ee(e){var t=o.a.useContext(P),a=t.state,n=t.updateTasks,r=(Object(p.a)(),ke()),l=o.a.useState(!1),c=Object(i.a)(l,1)[0],m=o.a.useState(!1),d=Object(i.a)(m,2),b=d[0],g=d[1],f=Object(u.i)().id,k=Object(be.useIndexedDB)("tasks").update,E=a.tasks.filter((function(e){return e.id==f}))[0];console.log(E);var h=o.a.useRef(!1),v=Object(fe.a)("https://mqad21.github.io/pomodoro/assets/alarm.mp3"),T=Object(i.a)(v,2),y=T[0],O=T[1].stop,S=Object(fe.a)("https://mqad21.github.io/pomodoro/assets/beep.mp3"),B=Object(i.a)(S,2),x=B[0],N=(B[1].stopBeeb,function(e){k(e).then((function(e){n()}))}),w=function(e,t){e<0&&(e=0);var a=Object(s.a)(Object(s.a)({},E),{},{id:parseInt(f),currentTime:e,isStart:t});N(a)},M=function(e,t,n){var o;O(),o=n?"pomodoro"!=e?parseInt(E.count)+1:parseInt(E.count):"pomodoro"==e?parseInt(E.count)-1:parseInt(E.count),N(Object(s.a)(Object(s.a)({},E),{},{id:parseInt(f),currentTime:a.settings.pomodoroTime[e],status:e,count:o,isStart:0})),setTimeout((function(){t(60*a.settings.pomodoroTime[e]*1e3)}),200)},C=function(e){var t=(E.count+1)%4==0;console.log(t),"pomodoro"==E.status?M(t?"longBreak":"shortBreak",e,!0):M("pomodoro",e,!0)},I=function(e){var t=e.start,n=e.pause,l=e.stop,c=e.getTime,s=e.setTime;c()<0&&!h.current&&(y(),h.current=!0,g(!1),C(s),ge(E.status,!1,a.settings.notif));return o.a.createElement(o.a.Fragment,null,o.a.createElement(q.a,{className:r.card,variant:"outlined"},o.a.createElement(H.a,null,o.a.createElement(j.a,{className:r.timer},o.a.createElement(ue.a.Minutes,null),":",o.a.createElement(ue.a.Seconds,null)),o.a.createElement(K.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:r.buttons},o.a.createElement(pe,{hide:b,icon:re.a,click:function(){!function(e){var t=E.count%4==0;"pomodoro"==E.status?M(t?"longBreak":"shortBreak",e,!1):M("pomodoro",e,!1)}(s)},nav:{disabled:0==E.count}}),o.a.createElement(pe,{hide:b,icon:le.a,click:function(){x(),l(),h.current=!1,t(),g(!0),ge(E.status,!0,a.settings.notif)}}),o.a.createElement(pe,{hide:!b,icon:ce.a,click:function(){w(c()/6e4,1),g(!1),n()}}),o.a.createElement(pe,{hide:b,icon:se.a,click:function(){var e=a.settings.pomodoroTime[E.status];w(e,0),s(60*e*1e3),g(!1)}}),o.a.createElement(pe,{hide:b,icon:ie.a,click:function(){C(s)},nav:{disabled:!1}})))))};return c?o.a.createElement(u.a,{to:"/"}):void 0==E?null:(e.setTitle(E.name),o.a.createElement(K.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:r.root},o.a.createElement(o.a.Fragment,null,o.a.createElement(q.a,{className:r.card,variant:"outlined"},o.a.createElement(H.a,null,o.a.createElement(j.a,{variant:"h4"},a.settings.statusName[E.status]),o.a.createElement(j.a,{variant:"subtitle",color:"textSecondary"},a.settings.statusMessage[E.status]))),o.a.createElement(ue.a,{startImmediately:!1,initialTime:void 0==E?0:60*E.currentTime*1e3,direction:"backward",lastUnit:"m",formatValue:function(e){return"".concat(e<10?"0".concat(e):e)}},I),o.a.createElement(ne.a,{color:"primary",avatar:o.a.createElement(oe.a,null,E.count),label:"Pomodoro",className:r.count}))))}var he=a(331),ve=Object(d.a)((function(e){return{root:{minHeight:"calc(100vh - 134px)",textAlign:"center"},card:{width:"100%"},timer:{width:"100%",fontSize:"6em",textAlign:"center",fontWeight:"bold"},buttonGroup:{marginTop:"1.5em"},button:{lineHeight:1.2}}}));function Te(){Object(p.a)();var e=ve(),t=o.a.useContext(P),a=t.state,n=t.actions,r=a.manualTimer,l=o.a.useState(!1),c=Object(i.a)(l,2),m=c[0],u=c[1],d=o.a.useRef(!1),b=Object(fe.a)("https://mqad21.github.io/pomodoro/assets/alarm.mp3"),g=Object(i.a)(b,2),f=g[0],k=(g[1].stop,Object(fe.a)("https://mqad21.github.io/pomodoro/assets/beep.mp3")),E=Object(i.a)(k,2),h=E[0],v=(E[1].stopBeeb,function(e,t){e<0&&(e=0),n({type:"setState",payload:Object(s.a)(Object(s.a)({},a),{},{manualTimer:Object(s.a)(Object(s.a)({},r),{},{currentTime:e,isStart:t})})})}),T=function(e){r.status!=e&&n({type:"setState",payload:Object(s.a)(Object(s.a)({},a),{},{manualTimer:Object(s.a)(Object(s.a)({},r),{},{status:e,currentTime:a.settings.pomodoroTime[e]})})})},y=function(t){var n=t.start,l=t.pause,c=(t.stop,t.getTime),s=t.setTime;c()<0&&!d.current&&(d.current=!0,u(!1),ge(r.status,!1,a.settings.notif),f());return o.a.createElement(o.a.Fragment,null,o.a.createElement(q.a,{className:e.card,variant:"outlined"},o.a.createElement(H.a,null,o.a.createElement(j.a,{className:e.timer},o.a.createElement(ue.a.Minutes,null),":",o.a.createElement(ue.a.Seconds,null)),o.a.createElement(K.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:e.buttons},o.a.createElement(pe,{hide:m,icon:le.a,click:function(){h(),d.current=!1,n(),u(!0),ge(r.status,!0,a.settings.notif)}}),o.a.createElement(pe,{hide:!m,icon:ce.a,click:function(){v(c()/6e4,1),u(!1),l()}}),o.a.createElement(pe,{hide:m,icon:se.a,click:function(){var e=a.settings.pomodoroTime[r.status];v(e,0),s(60*e*1e3),u(!1)}})))))};return o.a.createElement(K.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:e.root},o.a.createElement(q.a,{className:e.card,variant:"outlined"},o.a.createElement(H.a,null,o.a.createElement(j.a,{variant:"h4"},a.settings.statusName[r.status]),o.a.createElement(j.a,{variant:"subtitle",color:"textSecondary"},a.settings.statusMessage[r.status]))),o.a.createElement(ue.a,{startImmediately:!1,initialTime:void 0==r?0:60*r.currentTime*1e3,direction:"backward",lastUnit:"m",formatValue:function(e){return"".concat(e<10?"0".concat(e):e)}},y),o.a.createElement(he.a,{className:e.buttonGroup,color:"primary","aria-label":"outlined primary button group"},o.a.createElement($.a,{onClick:function(){T("pomodoro")},variant:"pomodoro"==r.status?"contained":"outlined",className:e.button},"Pomodoro"),o.a.createElement($.a,{onClick:function(){T("shortBreak")},variant:"shortBreak"==r.status?"contained":"outlined",className:e.button},"Short Break"),o.a.createElement($.a,{onClick:function(){T("longBreak")},variant:"longBreak"==r.status?"contained":"outlined",className:e.button},"Long Break")))}var ye=a(332),Oe=a(267),je=a(333),Se=a(312),Be=a(345);function xe(e){e.setTitle("Settings");var t=o.a.useContext(P),a=t.state,n=t.actions,r=o.a.useState(!1),l=Object(i.a)(r,2),c=l[0],m=l[1],u=o.a.useState(null),d=Object(i.a)(u,2),p=d[0],b=d[1],g=o.a.useState(!1),f=Object(i.a)(g,2),k=(f[0],f[1],[{id:"pomodoro",name:"pomodoroTime",label:"Pomodoro Time",valueLabel:a.settings.pomodoroTime.pomodoro+" minutes",value:a.settings.pomodoroTime.pomodoro,fieldType:"number"},{id:"shortBreak",name:"pomodoroTime",label:"Short Break Time",valueLabel:a.settings.pomodoroTime.shortBreak+" minutes",value:a.settings.pomodoroTime.shortBreak,fieldType:"number"},{id:"longBreak",name:"pomodoroTime",label:"Long Break Time",valueLabel:a.settings.pomodoroTime.longBreak+" minutes",value:a.settings.pomodoroTime.longBreak,fieldType:"number"},{id:"pomodoro",name:"statusMessage",label:"Pomodoro Message",valueLabel:a.settings.statusMessage.pomodoro,value:a.settings.statusMessage.pomodoro,fieldType:"text"},{id:"shortBreak",name:"statusMessage",label:"Short Break Message",valueLabel:a.settings.statusMessage.shortBreak,value:a.settings.statusMessage.shortBreak,fieldType:"text"},{id:"longBreak",name:"statusMessage",label:"Long Break Message",valueLabel:a.settings.statusMessage.longBreak,value:a.settings.statusMessage.longBreak,fieldType:"text"}]);o.a.useEffect((function(){null!=p&&m(!0)}),[p]);var E=function(){return k.map((function(e,t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(ye.a,null),o.a.createElement(Oe.a,null,o.a.createElement(je.a,{primary:e.label,secondary:e.valueLabel,onClick:function(){b(e)}})))}))},h=function(){return null==p?null:o.a.createElement(ee,{open:c,setOpen:m,type:"settings",settings:p})};return o.a.createElement(o.a.Fragment,null,o.a.createElement(Se.a,null,o.a.createElement(Oe.a,null,o.a.createElement(K.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},o.a.createElement(je.a,{primary:"Dark Mode"}),o.a.createElement(Be.a,{checked:a.settings.darkMode,onChange:function(e){n({type:"setState",payload:Object(s.a)(Object(s.a)({},a),{},{settings:Object(s.a)(Object(s.a)({},a.settings),{},{darkMode:e.target.checked?1:0})})})},color:"primary",name:"darkMode",inputProps:{"aria-label":"primary checkbox"}}))),o.a.createElement(E,null)),o.a.createElement(h,null))}var Ne=a(335),we=a(334),Me=Object(d.a)((function(e){return{root:{minHeight:"calc(100vh - 134px)",textAlign:"center"}}}));function Ce(e){Object(p.a)();var t=Me();return e.setTitle("About"),o.a.createElement(K.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:t.root},o.a.createElement(o.a.Fragment,null,o.a.createElement(j.a,{variant:"h6"},"About Pomodoro Timer"),o.a.createElement(j.a,{variant:"body1",color:"textSecondary"},"Pomodoro Timer is a web app that can assist you to manage your time using pomodoro technique. Thank you for using this app. May Allah bless you :)"),o.a.createElement(j.a,{variant:"body1",style:{marginTop:"2em"},color:"textSecondary"},"Made with ",o.a.createElement(we.a,{fontSize:"small",color:"primary"})," by ",o.a.createElement(Ne.a,{href:"https://instagram.com/mqad21",variant:"body1"},"@mqad21"))))}var Ie=Object(d.a)((function(e){return{content:{backgroundColor:"primary",flexGrow:1,marginTop:"56px",padding:e.spacing(3),paddingBottom:"56px",minHeight:"calc(100vh - 56px)"},padding0:{padding:0},bottomNav:{marginTop:"28px"}}}));function Pe(){var e=Ie(),t=(Object(p.a)(),o.a.useContext(P)),a=t.state,n=t.actions,r=Object(u.h)().pathname.split("/")[1],l=["task","settings","about"].includes(r),d=o.a.useState("Pomodoro Timer"),b=Object(i.a)(d,2),g=b[0],f=b[1],k=o.a.useState(!1),E=Object(i.a)(k,2),h=E[0],T=E[1],y=function(){0!=a.selectedTasks.length&&n({type:"setState",payload:Object(s.a)(Object(s.a)({},a),{},{selectedTasks:[]})})},O=function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(A.a,null),o.a.createElement(z.a,{className:Object(m.a)(e.content,Object(c.a)({},e.padding0,"settings"==r),Object(c.a)({},e.bottomNav,t.bottomNav)),onClick:y},o.a.createElement(G.a,{my:2},t.component)),t.bottomNav?o.a.createElement(v,{location:r}):null)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(F,{isPlay:h,displayBack:l,title:["","timer"].includes(r)?"Pomodoro Timer":g}),o.a.createElement(u.d,null,o.a.createElement(u.b,{exact:!0,path:"/"},o.a.createElement(O,{bottomNav:!0,component:o.a.createElement(ae,null),noMargin:!1})),o.a.createElement(u.b,{exact:!0,path:"/timer"},o.a.createElement(O,{bottomNav:!0,component:o.a.createElement(Te,null),noMargin:!1})),o.a.createElement(u.b,{exact:!0,path:"/task/:id"},o.a.createElement(O,{bottomNav:!1,component:o.a.createElement(Ee,{setIsPlay:T,setTitle:f,noMargin:!1})})),o.a.createElement(u.b,{exact:!0,path:"/settings"},o.a.createElement(O,{bottomNav:!1,component:o.a.createElement(xe,{setTitle:f,noMargin:!0})})),o.a.createElement(u.b,{exact:!0,path:"/about"},o.a.createElement(O,{bottomNav:!1,component:o.a.createElement(Ce,{setTitle:f,noMargin:!1})})),o.a.createElement(u.a,{to:"/"})))}a(264);var Le=a(165),Fe=a(338),Ae=a(120),ze=a.n(Ae),Ge=a(117),qe=a.n(Ge);var De=function(){var e=o.a.useContext(P).state,t=Object(Le.a)({palette:{type:1==e.settings.darkMode?"dark":"light",primary:{main:1==e.settings.darkMode?ze.a[400]:ze.a[600]},secondary:{main:qe.a[700]}}});return o.a.createElement(b.a,null,o.a.createElement(Fe.a,{theme:t},o.a.createElement(Pe,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(be.initDB)({name:"Pomodoro",version:4,objectStoresMeta:[{store:"tasks",storeConfig:{keyPath:"id",autoIncrement:!0},storeSchema:[{name:"name",keypath:"name"},{name:"count",keypath:"count"},{name:"currentTime",keypath:"currentTime"},{name:"status",keypath:"status"},{name:"isStart",keypath:"isStart"}]}]});var He=function(){var e=function(){var e=Object(be.useIndexedDB)("tasks"),t=e.getAll,a=e.add,o=e.deleteRecord,r=e.update,l=JSON.parse(localStorage.getItem("settings"))||{},c=l.pomodoroTime||{},m=l.statusMessage||{},u=l.darkMode||0,d=Object(n.useState)({tasks:[],newTask:null,oldTaskId:null,selectedTasks:[],manualTimer:JSON.parse(localStorage.getItem("manualTimer"))||{status:"pomodoro",currentTime:c.pomodoro||25,isStart:0},settings:{pomodoroTime:{pomodoro:c.pomodoro||25,shortBreak:c.shortBreak||5,longBreak:c.longBreak||10},statusName:{pomodoro:"Pomodoro",shortBreak:"Short Break",longBreak:"Long Break"},statusMessage:{pomodoro:m.pomodoro||"Let's start and become productive.",shortBreak:m.shortBreak||"Good job! let's take a short break.",longBreak:m.longBreak||"Awesome! let's take a long break."},notif:{pomodoro:{start:{title:"Pomodoro timer is set",body:"Keep focus, dude!"},end:{title:"Pomodoro timer has ended",body:"Take a break, dude!"}},shortBreak:{start:{title:"Short break timer is set",body:"Have fun, dude!"},end:{title:"Short break timer has ended",body:"Let's back work!"}},longBreak:{start:{title:"Long break timer is set",body:"Be happy, dude!"},end:{title:"Long break timer has ended",body:"Keep spirit!"}}},darkMode:u}}),p=Object(i.a)(d,2),b=p[0],g=p[1];Object(n.useEffect)((function(){localStorage.setItem("settings",Object(s.a)(Object(s.a)({},l),{},{darkMode:b.settings.darkMode}))}),[b.settings.darkMode]),Object(n.useEffect)((function(){localStorage.setItem("settings",JSON.stringify(b.settings))}),[b.settings]),Object(n.useEffect)((function(){localStorage.setItem("manualTimer",JSON.stringify(b.manualTimer))}),[b.manualTimer]);var f=function(){t().then((function(e){for(var t=0;t<e.length;t++)0==e[t].isStart&&(e[t].currentTime=b.settings.pomodoroTime[e[t].status],console.log(b.settings.pomodoroTime[e[t].status]));var a=0==b.manualTimer.isStart?b.settings.pomodoroTime[b.manualTimer.status]:b.manualTimer.currentTime;g(Object(s.a)(Object(s.a)({},b),{},{tasks:e,manualTimer:Object(s.a)(Object(s.a)({},b.manualTimer),{},{currentTime:a})}))}))};return Object(n.useEffect)((function(){f()}),[]),Object(n.useEffect)((function(){null!=b.updatedTask&&(console.log(Object(s.a)({},b.updatedTask)),r(Object(s.a)({},b.updatedTask)).then((function(e){console.log("ID Generated: ",e.target),t().then((function(e){g(Object(s.a)(Object(s.a)({},b),{},{updatedTask:null,tasks:e}))}))}),(function(e){console.log(e)})))}),[b.updatedTask]),Object(n.useEffect)((function(){null!=b.newTask&&a(Object(s.a)({},b.newTask)).then((function(e){console.log("ID Generated: ",e.target),t().then((function(e){g(Object(s.a)(Object(s.a)({},b),{},{newTask:null,tasks:e}))}))}),(function(e){console.log(e)}))}),[b.newTask]),Object(n.useEffect)((function(){null!=b.oldTaskId&&b.oldTaskId.forEach((function(e){o(e),t().then((function(e){g(Object(s.a)(Object(s.a)({},b),{},{oldTaskId:null,tasks:e}))}))}))}),[b.oldTaskId]),{state:b,actions:function(e){var t=e.type,a=e.payload;switch(t){case"setState":return g(a);default:return b}},updateTasks:f}}();return o.a.createElement(P.Provider,{value:e},o.a.createElement(De,null))};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(He,null)),document.getElementById("root"))}},[[181,1,2]]]);
//# sourceMappingURL=main.d0d23784.chunk.js.map