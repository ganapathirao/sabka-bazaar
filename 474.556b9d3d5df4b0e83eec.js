(self.webpackChunksabka_bazaar=self.webpackChunksabka_bazaar||[]).push([[474],{1474:(r,o,e)=>{"use strict";e.r(o),e.d(o,{LoginModule:()=>m});var n=e(8583),l=e(3679),t=e(3506),i=e(639);function a(r,o){1&r&&(i.TgZ(0,"p",13),i._uU(1,"Email is required"),i.qZA())}function s(r,o){1&r&&(i.TgZ(0,"p",13),i._uU(1,"Please enter valid email"),i.qZA())}function u(r,o){1&r&&(i.TgZ(0,"p",13),i._uU(1,"Password is required"),i.qZA())}const g=[{path:"",component:(()=>{class r{constructor(r,o){this.fb=r,this.router=o,this.loginForm=this.fb.group({email:["",[l.kI.required,l.kI.email]],password:["",[l.kI.required]]})}ngOnInit(){}login(){this.loginForm.invalid?this.loginForm.markAllAsTouched():this.router.navigate(["/home"])}}return r.\u0275fac=function(o){return new(o||r)(i.Y36(l.qu),i.Y36(t.F0))},r.\u0275cmp=i.Xpm({type:r,selectors:[["app-login"]],decls:21,vars:5,consts:[[1,"login-wrapper","mt-40","mb-30"],[1,"custom-container","mx-auto","d-flex"],[1,"login-text","mr-40"],[1,"f-25"],[1,"f-16"],[1,"login-form","flex-grow-1",3,"formGroup"],[1,"form-group","position-relative"],["type","text","id","email","placeholder","email","formControlName","email",1,"form-control"],["for","email",1,"label","f-15"],["class","text-danger error-text f-12",4,"ngIf"],["type","password","id","password","placeholder","password","formControlName","password",1,"form-control"],["for","password",1,"label","f-15"],["type","button",1,"custom-btn","pt-10","pb-10","f-16","mt-15",3,"disabled","click"],[1,"text-danger","error-text","f-12"]],template:function(r,o){if(1&r&&(i.TgZ(0,"section",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"h2",3),i._uU(4,"Login"),i.qZA(),i.TgZ(5,"p",4),i._uU(6,"Get access to your Orders, Wishlist and Recommendations"),i.qZA(),i.qZA(),i.TgZ(7,"form",5),i.TgZ(8,"div",6),i._UZ(9,"input",7),i.TgZ(10,"label",8),i._uU(11,"Email"),i.qZA(),i.YNc(12,a,2,0,"p",9),i.YNc(13,s,2,0,"p",9),i.qZA(),i.TgZ(14,"div",6),i._UZ(15,"input",10),i.TgZ(16,"label",11),i._uU(17,"Password"),i.qZA(),i.YNc(18,u,2,0,"p",9),i.qZA(),i.TgZ(19,"button",12),i.NdJ("click",function(){return o.login()}),i._uU(20,"Login"),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&r){let r,e,n;i.xp6(7),i.Q6J("formGroup",o.loginForm),i.xp6(5),i.Q6J("ngIf",(null==(r=o.loginForm.get("email"))||null==r.errors?null:r.errors.required)&&(null==(r=o.loginForm.get("email"))?null:r.touched)),i.xp6(1),i.Q6J("ngIf",(null==(e=o.loginForm.get("email"))||null==e.errors?null:e.errors.email)&&(null==(e=o.loginForm.get("email"))?null:e.touched)),i.xp6(5),i.Q6J("ngIf",(null==(n=o.loginForm.get("password"))||null==n.errors?null:n.errors.required)&&(null==(n=o.loginForm.get("password"))?null:n.touched)),i.xp6(1),i.Q6J("disabled",o.loginForm.invalid)}},directives:[l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u,n.O5],styles:[".login-wrapper[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{max-width:350px}.login-wrapper[_ngcontent-%COMP%]   .custom-container[_ngcontent-%COMP%]{padding:0 9rem;flex-wrap:wrap}@media (max-width: 767.98px){.login-wrapper[_ngcontent-%COMP%]   .custom-container[_ngcontent-%COMP%]{padding:0 2rem}}"]}),r})()}];let m=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=i.oAB({type:r}),r.\u0275inj=i.cJS({imports:[[n.ez,l.UX,t.Bz.forChild(g)]]}),r})()}}]);