(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t,a){"use strict";(function(e){var n=a(16),i=a(17),o=a(19),r=a(18),s=a(20),l=a(24),c=a(0),u=a.n(c),m=a(5),p=a.n(m),g=a(37),h=a.n(g),d=a(40),f=a(118),E=a(33),b=function(t){function a(e){var t;return Object(n.a)(this,a),(t=Object(o.a)(this,Object(r.a)(a).call(this,e))).handleChange=function(e){t.setState(Object(l.a)({},e.target.name,e.target.value))},t.state={name:"",users:[],major:"",token:"",names:[],images:0},t}return Object(s.a)(a,t),Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=this;console.log("in Application"),p.a.get("/checkuser").then(function(e){console.log("res.user",e.data),"employee-employee"===e.data.name&&t.setState({token:e.data.user})}),p.a.get("/images").then(function(a){console.log("res.user",a,e),t.setState({images:a,names:a.data.map(function(e){return u.a.createElement(d.a,{name:e})})})}),p.a.get("/newusers/employee").then(function(a){console.log("res.user",a,e),t.setState({users:a.data})})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData(e.target);p.a.post("application/upload",t).then(function(e){console.log("in")})}},{key:"onChange",value:function(e){var t=h()("#files")[0].files[0].name;this.setState({name:t})}},{key:"handleDownload",value:function(e){console.log("window.location.href",window.location.href),window.open("http://localhost:8080/download")}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"onApply",value:function(){console.log("onApply")}},{key:"render",value:function(){var e=this.props.classes;return console.log("application: this.props.isAuthed",this.props.isAuthed),console.log("application: this.state.token",this.state.token),this.state.token?u.a.createElement("main",{className:e.main},this.state.names,this.state.users.map(function(e){return u.a.createElement(f.a,{key:e._id,user:e})})):u.a.createElement("div",null,"not authorized")}}]),a}(c.Component);t.a=Object(E.withStyles)(function(e){return{main:Object(l.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},button:{margin:e.spacing.unit},input:{display:"none"},rightIcon:{marginLeft:e.spacing.unit},root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit,minWidth:120},selectEmpty:{marginTop:2*e.spacing.unit}}})(b)}).call(this,"/")},118:function(e,t,a){"use strict";var n=a(16),i=a(17),o=a(19),r=a(18),s=a(20),l=a(24),c=a(0),u=a.n(c),m=a(5),p=a.n(m),g=(a(37),a(40),a(33)),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).state={name:"",users:[],major:"",token:"",names:[],images:0},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"approve",value:function(){console.log("=======APPROVE======",this.props.user.email),p.a.post("/approve/employee",{email:this.props.user.email}).then(function(e){console.log("done")})}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,this.props.user.email," , ",this.props.user.firstName," , ",this.props.user.lastName," , ",this.props.user.major," "),u.a.createElement("button",{onClick:this.approve.bind(this)}," approve"))}}]),t}(c.Component);t.a=Object(g.withStyles)(function(e){return{main:Object(l.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},button:{margin:e.spacing.unit},input:{display:"none"},rightIcon:{marginLeft:e.spacing.unit},root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit,minWidth:120},selectEmpty:{marginTop:2*e.spacing.unit}}})(h)},119:function(e,t,a){"use strict";(function(e){var n=a(16),i=a(17),o=a(19),r=a(18),s=a(20),l=a(24),c=a(0),u=a.n(c),m=a(5),p=a.n(m),g=a(37),h=a.n(g),d=a(40),f=a(120),E=a(33),b=function(t){function a(e){var t;return Object(n.a)(this,a),(t=Object(o.a)(this,Object(r.a)(a).call(this,e))).handleChange=function(e){t.setState(Object(l.a)({},e.target.name,e.target.value))},t.state={name:"",users:[],major:"",token:"",names:[],images:0},t}return Object(s.a)(a,t),Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=this;console.log("in Application"),p.a.get("/checkuser").then(function(e){console.log("res.user",e.data),"manager-manager"===e.data.name&&t.setState({token:e.data.user})}),p.a.get("/images").then(function(a){console.log("res.user",a,e),t.setState({images:a,names:a.data.map(function(e){return u.a.createElement(d.a,{name:e})})})}),p.a.get("/newusers/manager").then(function(a){console.log("res.user",a,e),t.setState({users:a.data})})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData(e.target);p.a.post("application/upload",t).then(function(e){console.log("in")})}},{key:"onChange",value:function(e){var t=h()("#files")[0].files[0].name;this.setState({name:t})}},{key:"handleDownload",value:function(e){console.log("window.location.href",window.location.href),window.open("http://localhost:8080/download")}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"onApply",value:function(){console.log("onApply")}},{key:"render",value:function(){var e=this.props.classes;return console.log("application: this.props.isAuthed",this.props.isAuthed),console.log("application: this.state.token",this.state.token),this.state.token?u.a.createElement("main",{className:e.main},this.state.names,this.state.users.map(function(e){return u.a.createElement(f.a,{key:e._id,user:e})})):u.a.createElement("div",null,"not authorized")}}]),a}(c.Component);t.a=Object(E.withStyles)(function(e){return{main:Object(l.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},button:{margin:e.spacing.unit},input:{display:"none"},rightIcon:{marginLeft:e.spacing.unit},root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit,minWidth:120},selectEmpty:{marginTop:2*e.spacing.unit}}})(b)}).call(this,"/")},120:function(e,t,a){"use strict";var n=a(16),i=a(17),o=a(19),r=a(18),s=a(20),l=a(24),c=a(0),u=a.n(c),m=a(5),p=a.n(m),g=(a(37),a(40),a(33)),h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(r.a)(t).call(this,e))).state={name:"",users:[],major:"",token:"",names:[],images:0},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"approve",value:function(){console.log("=======APPROVE======",this.props.user.email),p.a.post("/approve/manager",{email:this.props.user.email}).then(function(e){console.log("done")})}},{key:"render",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("p",null,this.props.user.email," , ",this.props.user.firstName," , ",this.props.user.lastName," , ",this.props.user.major," "),u.a.createElement("button",{onClick:this.approve.bind(this)}," approve"))}}]),t}(c.Component);t.a=Object(g.withStyles)(function(e){return{main:Object(l.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},button:{margin:e.spacing.unit},input:{display:"none"},rightIcon:{marginLeft:e.spacing.unit},root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit,minWidth:120},selectEmpty:{marginTop:2*e.spacing.unit}}})(h)},122:function(e,t,a){e.exports=a(282)},127:function(e,t,a){},147:function(e,t,a){},241:function(e,t,a){},261:function(e,t,a){var n={"./USERa-a--FILE1 (11).jpg":262,"./USERa-a--FILE1 (5).jpg":263,"./USERa-a--FILEissa (2).jpg":264};function i(e){var t=o(e);return a(t)}function o(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}i.keys=function(){return Object.keys(n)},i.resolve=o,e.exports=i,i.id=261},262:function(e,t,a){e.exports=a.p+"static/media/USERa-a--FILE1 (11).39119431.jpg"},263:function(e,t,a){e.exports=a.p+"static/media/USERa-a--FILE1 (5).39119431.jpg"},264:function(e,t,a){e.exports=a.p+"static/media/USERa-a--FILEissa (2).39119431.jpg"},282:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(36),r=a.n(o),s=(a(127),a(16)),l=a(17),c=a(19),u=a(18),m=a(20),p=a(284),g=a(285),h=a(286),d=a(5),f=a.n(d),E=(a(147),a(24)),b=a(31),y=a.n(b),v=a(26),w=a.n(v),k=a(29),C=a.n(k),j=a(11),x=a.n(j),O=a(9),S=a.n(O),N=a(12),D=a.n(N),F=a(32),L=a.n(F),P=a(28),T=a.n(P),R=a(30),A=a.n(R),W=a(7),I=a.n(W),M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={email:"",firstName:"",lastName:"",password:"",rePassword:"",information:"",phonenumber:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onSubmit",value:function(){f.a.post("/signup",this.state).then(function(e){return console.log("in")})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onFirstNameChange",value:function(e){this.setState({firstName:e.target.value})}},{key:"onLastNameChange",value:function(e){this.setState({lastName:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"onPassword2Change",value:function(e){this.setState({rePassword:e.target.value})}},{key:"onInformationChange",value:function(e){this.setState({information:e.target.value})}},{key:"onNumberChange",value:function(e){this.setState({phonenumber:e.target.value})}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("main",{className:e.main},i.a.createElement(C.a,null),i.a.createElement(T.a,{className:e.paper},i.a.createElement(y.a,{className:e.avatar},i.a.createElement(L.a,null)),i.a.createElement(A.a,{component:"h1",variant:"h5"},"Registration"),i.a.createElement("form",{className:e.form},i.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},i.a.createElement(D.a,null,"Email Address"),i.a.createElement(S.a,{autoComplete:"email",autoFocus:!0,onChange:this.onEmailChange.bind(this)})),i.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},i.a.createElement(D.a,null,"First Name"),i.a.createElement(S.a,{type:"text",autoComplete:"given-name",onChange:this.onFirstNameChange.bind(this)})),i.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},i.a.createElement(D.a,null,"Last Name"),i.a.createElement(S.a,{type:"text",autoComplete:"family-name",onChange:this.onLastNameChange.bind(this)})),i.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},i.a.createElement(D.a,{htmlFor:"password"},"Password"),i.a.createElement(S.a,{type:"password",autoComplete:"current-password",onChange:this.onPasswordChange.bind(this)})),i.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},i.a.createElement(D.a,{htmlFor:"password"},"Re-Type Password"),i.a.createElement(S.a,{type:"password",autoComplete:"current-password",onChange:this.onPassword2Change.bind(this)})),i.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},i.a.createElement(D.a,null,"Information"),i.a.createElement(S.a,{type:"text",onChange:this.onInformationChange.bind(this)})),i.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},i.a.createElement(D.a,null,"Phonenumber"),i.a.createElement(S.a,{type:"number",autoComplete:"tel",onChange:this.onNumberChange.bind(this)})),i.a.createElement(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this.onSubmit.bind(this)},"Sign up"))))}}]),t}(n.Component),q=I()(function(e){return{main:Object(E.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:4*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(M),U=a(283),B=(a(37),a(74),a(241),a(59));f.a.defaults.withCredentials=!0;var _=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={email:"",password:"",token:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("=====in login====")}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this;f.a.post("/login",this.state,{withCredentials:!0}).then(function(e){console.log("next login step"),f.a.get("/savesession",{withCredentials:!0}).then(function(e){console.log("in login",e.data.user),t.setState({token:e.data.user})})}),console.log("logged in"),console.log("login: this.state.token",this.state.token)}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleForgotPassword",value:function(){f.a.get("/reset").then(function(e){return""})}},{key:"render",value:function(){var e=this.props.classes;return this.state.token?(console.log("login -> redirect"),i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{to:{pathname:"/application"}}),i.a.createElement(B.a,null))):i.a.createElement("main",{className:e.main},i.a.createElement(C.a,null),i.a.createElement(T.a,{className:e.paper},i.a.createElement(y.a,{className:e.avatar},i.a.createElement(L.a,null)),i.a.createElement(A.a,{component:"h1",variant:"h5"},"Login"),i.a.createElement("form",{className:e.form},i.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},i.a.createElement(D.a,null,"Email Address"),i.a.createElement(S.a,{autoComplete:"text",autoFocus:!0,onChange:this.onEmailChange.bind(this)})),i.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},i.a.createElement(D.a,{htmlFor:"password"},"Password"),i.a.createElement(S.a,{type:"password",autoComplete:"current-password",onChange:this.onPasswordChange.bind(this)})),i.a.createElement(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this.onSubmit.bind(this)},"Login")),i.a.createElement("p",null,"Do you have an account? if not ",i.a.createElement("span",null,i.a.createElement("a",{href:"/signup"},"Register"))," now."),i.a.createElement("p",null,i.a.createElement("span",null,i.a.createElement("button",{type:"button",className:"link-button",onClick:this.handleForgotPassword.bind(this)},i.a.createElement("p",{style:{margin:"0px"}},"Forgot")))," your password?"),i.a.createElement("p",{style:{margin:"0px"}},"Are you a ",i.a.createElement(U.a,{style:{textDecoration:"none"},to:"/manager"},"Manager")," ?"),i.a.createElement("p",{style:{margin:"0px"}},"Are you an ",i.a.createElement(U.a,{style:{textDecoration:"none"},to:"/employee"},"Employee")," ?")))}}]),t}(n.Component),z=I()(function(e){return{main:Object(E.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(_),J=a(117);f.a.defaults.withCredentials=!0;var V=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={email:"",password:"",token:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/checkuser",{withCredentials:!0}).then(function(t){console.log("in login",t.data.user),e.setState({token:t.data.user})})}},{key:"onSubmit",value:function(e){f.a.post("/employee",this.state,{withCredentials:!0}).then(function(e){return console.log("logged in")}),console.log("login: this.state.token",this.state.token)}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleForgotPassword",value:function(){f.a.get("/reset").then(function(e){return""})}},{key:"render",value:function(){var e=this.props.classes;return this.state.token?(console.log("Employee -> redirect"),i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{to:{pathname:"/application"}}),i.a.createElement(J.a,null))):i.a.createElement("main",{className:e.main},i.a.createElement(C.a,null),i.a.createElement(T.a,{className:e.paper},i.a.createElement(y.a,{className:e.avatar},i.a.createElement(L.a,null)),i.a.createElement(A.a,{component:"h1",variant:"h5"},"Employee"),i.a.createElement("form",{className:e.form},i.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},i.a.createElement(D.a,null,"Email Address"),i.a.createElement(S.a,{autoComplete:"text",autoFocus:!0,onChange:this.onEmailChange.bind(this)})),i.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},i.a.createElement(D.a,{htmlFor:"password"},"Password"),i.a.createElement(S.a,{type:"password",autoComplete:"current-password",onChange:this.onPasswordChange.bind(this)})),i.a.createElement(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this.onSubmit.bind(this)},"Login")),i.a.createElement("p",null,"Do you have an account? if not ",i.a.createElement("span",null,i.a.createElement("a",{href:"/signup"},"Register"))," now."),i.a.createElement("p",null,i.a.createElement("span",null,i.a.createElement("button",{type:"button",className:"link-button",onClick:this.handleForgotPassword.bind(this)},i.a.createElement("p",{style:{margin:"0px"}},"Forgot")))," your password?"),i.a.createElement("p",{style:{margin:"0px"}},"Are you an ",i.a.createElement(U.a,{style:{textDecoration:"none"},to:"/manager"},"Manager")," ?"),i.a.createElement(U.a,{style:{textDecoration:"none"},to:"/login"},"Back")))}}]),t}(n.Component),$=I()(function(e){return{main:Object(E.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(V),G=a(119);f.a.defaults.withCredentials=!0;var H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={email:"",password:"",token:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/checkuser",{withCredentials:!0}).then(function(t){console.log("in login",t.data.user),e.setState({token:t.data.user})}).catch(function(e){return console.log("Manager checkuser err",e)})}},{key:"onSubmit",value:function(e){f.a.post("/manager",this.state,{withCredentials:!0}).then(function(e){return console.log("logged in")}),console.log("login: this.state.token",this.state.token)}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleForgotPassword",value:function(){f.a.get("/reset").then(function(e){return""})}},{key:"render",value:function(){var e=this.props.classes;return this.state.token?(console.log("Manager -> redirect"),i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{to:{pathname:"/application"}}),i.a.createElement(G.a,null))):i.a.createElement("main",{className:e.main},i.a.createElement(C.a,null),i.a.createElement(T.a,{className:e.paper},i.a.createElement(y.a,{className:e.avatar},i.a.createElement(L.a,null)),i.a.createElement(A.a,{component:"h1",variant:"h5"},"Manager"),i.a.createElement("form",{className:e.form},i.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},i.a.createElement(D.a,null,"Email Address"),i.a.createElement(S.a,{autoComplete:"text",autoFocus:!0,onChange:this.onEmailChange.bind(this)})),i.a.createElement(x.a,{margin:"normal",required:!0,fullWidth:!0},i.a.createElement(D.a,{htmlFor:"password"},"Password"),i.a.createElement(S.a,{type:"password",autoComplete:"current-password",onChange:this.onPasswordChange.bind(this)})),i.a.createElement(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this.onSubmit.bind(this)},"Login")),i.a.createElement("p",null,"Do you have an account? if not ",i.a.createElement("span",null,i.a.createElement("a",{href:"/signup"},"Register"))," now."),i.a.createElement("p",null,i.a.createElement("span",null,i.a.createElement("button",{type:"button",className:"link-button",onClick:this.handleForgotPassword.bind(this)},i.a.createElement("p",{style:{margin:"0px"}},"Forgot")))," your password?"),i.a.createElement("p",{style:{margin:"0px"}},"Are you an ",i.a.createElement(U.a,{style:{textDecoration:"none"},to:"/employee"},"Employee")," ?"),i.a.createElement(U.a,{style:{textDecoration:"none"},to:"/login"},"Back")))}}]),t}(n.Component),K=I()(function(e){return{main:Object(E.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(H),Q=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={token:""},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){console.log("in App")}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(p.a,{className:"App"},i.a.createElement(n.Suspense,{fallback:i.a.createElement("div",null,"Loading..")},i.a.createElement(g.a,null,i.a.createElement(h.a,{exact:!0,path:"/application",component:B.a}),i.a.createElement(h.a,{path:"/signup",component:q}),i.a.createElement(h.a,{path:"/login",component:z}),i.a.createElement(h.a,{path:"/employee",component:$}),i.a.createElement(h.a,{path:"/manager",component:K}),i.a.createElement(h.a,{path:"/",component:z})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},40:function(e,t,a){"use strict";var n=a(16),i=a(17),o=a(19),r=a(18),s=a(20),l=a(0),c=a.n(l),u=a(33),m=a(75),p=a.n(m),g=a(26),h=a.n(g);var d=function(e){function t(){var e,a;Object(n.a)(this,t);for(var i=arguments.length,s=new Array(i),l=0;l<i;l++)s[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(s)))).state={open:!1},a.handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return c.a.createElement("div",null,c.a.createElement(h.a,{onClick:this.handleOpen},this.props.name),c.a.createElement(p.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.open,onClose:this.handleClose},c.a.createElement("div",{style:{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")},className:e.paper},c.a.createElement("img",{style:{width:"750px",height:"500px"},key:this.props.name,src:a(261)("./".concat(this.props.name||"images.png")),alt:"",className:"img-responsive"}))))}}]),t}(c.a.Component),f=Object(u.withStyles)(function(e){return{paper:{position:"absolute",width:100*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:2*e.spacing.unit,outline:"none"}}})(d);t.a=f},59:function(e,t,a){"use strict";(function(e){var n=a(16),i=a(17),o=a(19),r=a(18),s=a(20),l=a(24),c=a(0),u=a.n(c),m=a(5),p=a.n(m),g=a(37),h=a.n(g),d=a(40),f=a(9),E=a.n(f),b=a(26),y=a.n(b),v=a(29),w=a.n(v),k=a(28),C=a.n(k),j=a(30),x=a.n(j),O=a(33),S=a(12),N=a.n(S),D=a(38),F=a.n(D),L=a(11),P=a.n(L),T=a(46),R=a.n(T),A=function(t){function a(e){var t;return Object(n.a)(this,a),(t=Object(o.a)(this,Object(r.a)(a).call(this,e))).handleChange=function(e){t.setState(Object(l.a)({},e.target.name,e.target.value))},t.state={name:"",download:"1.jpg",major:"",token:"",names:[],images:0},t}return Object(s.a)(a,t),Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=this;console.log("=====in Application======="),p.a.get("/checkuser").then(function(e){console.log("res.user",e.data),t.setState({token:e.data.user})}),p.a.get("/images").then(function(a){console.log("res.user",a,e),t.setState({images:a,names:a.data.map(function(e){return u.a.createElement(d.a,{name:e})})})})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=new FormData(e.target);p.a.post("application/upload",t).then(function(e){console.log("in")})}},{key:"onChange",value:function(e){var t=h()("#files")[0].files[0].name;this.setState({name:t})}},{key:"handleDownload",value:function(e){console.log("window.location.href",window.location.href),window.open("http://localhost:8080/download")}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onPasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"onApply",value:function(){console.log("onApply")}},{key:"render",value:function(){var e=this.props.classes;return console.log("application: this.props.isAuthed",this.props.isAuthed),console.log("application: this.state.token",this.state.token),this.state.token?u.a.createElement("main",{className:e.main},u.a.createElement(w.a,null),u.a.createElement(C.a,{className:e.paper},u.a.createElement(x.a,{component:"h1",variant:"h5"},"Application"),u.a.createElement("form",{onSubmit:this.handleSubmit,onChange:this.onChange.bind(this)},u.a.createElement("input",{id:"files",name:"files",type:"file",className:e.input}),u.a.createElement("label",{htmlFor:"files"},u.a.createElement(y.a,{variant:"contained",color:"default",component:"span",className:e.button},"Choose file")),u.a.createElement(y.a,{type:"submit",className:e.button},"Send")),u.a.createElement("p",null,this.state.name),u.a.createElement("form",{className:e.root,autoComplete:"off"},u.a.createElement(P.a,{className:e.formControl},u.a.createElement(N.a,null,"Major"),u.a.createElement(R.a,{value:this.state.major,onChange:this.handleChange,inputProps:{name:"major",id:"major-simple"}},u.a.createElement(F.a,{value:""},u.a.createElement("em",null,"None")),u.a.createElement(F.a,{value:"Medical Doctor"},"Medical Doctor"),u.a.createElement(F.a,{value:"Nurse"},"Nurse"),u.a.createElement(F.a,{value:"Pharmasist"},"Pharmasist"),u.a.createElement(F.a,{value:"Ray technician"},"Ray technician")))),u.a.createElement("form",{className:e.form},u.a.createElement(P.a,{margin:"normal",required:!0,fullWidth:!0},u.a.createElement(N.a,null,"Email Address"),u.a.createElement(E.a,{autoComplete:"text",autoFocus:!0,onChange:this.onEmailChange.bind(this)})),u.a.createElement(P.a,{margin:"normal",required:!0,fullWidth:!0},u.a.createElement(N.a,{htmlFor:"password"},"Password"),u.a.createElement(E.a,{type:"password",autoComplete:"current-password",onChange:this.onPasswordChange.bind(this)})),u.a.createElement(y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:this.onApply.bind(this)},"Apply")))):u.a.createElement("div",null,"not authorized")}}]),a}(c.Component);t.a=Object(O.withStyles)(function(e){return{main:Object(l.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit},button:{margin:e.spacing.unit},input:{display:"none"},rightIcon:{marginLeft:e.spacing.unit},root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit,minWidth:120},selectEmpty:{marginTop:2*e.spacing.unit}}})(A)}).call(this,"/")}},[[122,1,2]]]);
//# sourceMappingURL=main.013884ac.chunk.js.map