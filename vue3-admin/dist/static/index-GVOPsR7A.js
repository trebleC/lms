import{r as J,_ as ae}from"./index-Bd4y8G8I.js";import{n as I,E as K,F as Y,y as oe,r as se,z as ie,A as de,B as ue}from"./element-Cx1u8HIB.js";import{u as te}from"./usePagination-DQcWKUV1.js";import{f as ee}from"./index-DPHaodem.js";import{m as W,r as v,ai as t,p as g,O as b,P as a,V as e,T as l,t as U,f as le,_ as ne,d as G,aq as Q,U as T,u as r,Q as H,q as ce}from"./vue-BoURs06I.js";import{s as pe}from"./index-HHaSpI6l.js";import{c as _e,g as me,u as fe}from"./index-zyf2lgsb.js";import"./vxe-OnfnC8YF.js";function ge(V){return J({url:"/reader_info/add",method:"post",data:V})}function ve(V){return J({url:`/reader_info/delete/${V}`,method:"delete"})}function he(V){return J({url:"/reader_info/edit",method:"put",data:V})}function be(V){return J({url:"/reader_info/list",method:"get",params:V})}const we={style:{flex:"auto"}},ke=W({__name:"add_edit",emits:["ok"],setup(V,{expose:A,emit:c}){const B=v(!1),_={reader_id:void 0,name:"",phone:"",sex:1,birth:"",address:"",expire:""},s=v(I(_)),D={name:[{required:!0,trigger:"blur",message:"请输入姓名"}],phone:[{required:!0,trigger:"blur",message:"请输入手机号"},{pattern:/^1[3456789]\d{9}$/,message:"请输入正确的手机号格式",trigger:"blur"}],sex:[{required:!0,trigger:"blur",message:"请选择性别"}],expire:[{required:!0,trigger:"blur",message:"请选择会员到期时间"}]},y=v(null),n=v(!1),$=v(!1),P=d=>{B.value=!0,d&&(s.value=I(d))},z=()=>{B.value=!1},h=()=>{var d;(d=y.value)==null||d.validate((p,u)=>{if(!p)return console.log("表单校验不通过",u);n.value=!0,(s.value.reader_id===void 0?ge:he)(s.value).then(()=>{K.success("操作成功"),B.value=!1,F("ok")}).finally(()=>{n.value=!1})})},C=()=>{var d;(d=y.value)==null||d.clearValidate(),s.value=I(_)},F=c;return A({open:P,isDetail:$}),(d,p)=>{const u=t("el-input"),k=t("el-form-item"),x=t("el-radio"),R=t("el-radio-group"),i=t("el-date-picker"),w=t("el-form"),S=t("el-button"),M=t("el-drawer");return g(),b(M,{modelValue:B.value,"onUpdate:modelValue":p[5]||(p[5]=o=>B.value=o),size:"600",onClosed:C,title:$.value?"查看会员信息":s.value.reader_id===void 0?"新增会员":"修改会员信息"},{default:a(()=>[e(w,{ref_key:"formRef",ref:y,model:s.value,disabled:$.value,rules:D,"label-width":"120px"},{default:a(()=>[e(k,{prop:"name",label:"姓名"},{default:a(()=>[e(u,{modelValue:s.value.name,"onUpdate:modelValue":p[0]||(p[0]=o=>s.value.name=o),maxlength:"6","show-word-limit":"",placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(k,{prop:"phone",label:"手机号"},{default:a(()=>[e(u,{modelValue:s.value.phone,"onUpdate:modelValue":p[1]||(p[1]=o=>s.value.phone=o),maxlength:"11","show-word-limit":"",placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(k,{prop:"sex",label:"性别"},{default:a(()=>[e(R,{modelValue:s.value.sex,"onUpdate:modelValue":p[2]||(p[2]=o=>s.value.sex=o)},{default:a(()=>[e(x,{value:1},{default:a(()=>[l("男")]),_:1}),e(x,{value:2},{default:a(()=>[l("女")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(k,{prop:"expire",label:"会员到期时间"},{default:a(()=>[e(i,{style:{width:"100%"},modelValue:s.value.expire,"onUpdate:modelValue":p[3]||(p[3]=o=>s.value.expire=o),type:"date","value-format":"YYYY-MM-DD",placeholder:"请选择"},null,8,["modelValue"])]),_:1}),e(k,{prop:"address",label:"家庭住址"},{default:a(()=>[e(u,{modelValue:s.value.address,"onUpdate:modelValue":p[4]||(p[4]=o=>s.value.address=o),type:"textarea",resize:"none",autosize:{minRows:2,maxRows:6},maxlength:"50","show-word-limit":"",placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","disabled"])]),footer:a(()=>[U("div",we,[e(S,{onClick:z},{default:a(()=>[l("取消")]),_:1}),e(S,{type:"primary",loading:n.value,disabled:$.value,onClick:h},{default:a(()=>[l("确定")]),_:1},8,["loading","disabled"])])]),_:1},8,["modelValue","title"])}}}),xe={class:"table-wrapper"},ye={class:"pager-wrapper"},Ce=W({__name:"borrow",setup(V,{expose:A}){const c=v(!1),_=v(I({reader_id:void 0,name:"",phone:"",sex:1,birth:"",address:"",expire:""})),s=u=>{c.value=!0,u&&(_.value=I(u)),C()},D=le(()=>u=>u?Y(u).diff(Y(),"days"):0),y=v(!1),{paginationData:n,handleCurrentChange:$,handleSizeChange:P}=te(),z=v([]),h=ne({book_name:""}),C=()=>{y.value=!0,pe({pageNum:n.currentPage,pageSize:n.pageSize,book_name:h.book_name||void 0}).then(({data:u})=>{n.total=u.total,z.value=u.list}).catch(()=>{z.value=[]}).finally(()=>{y.value=!1})},F=()=>{n.currentPage===1?C():n.currentPage=1};G([()=>n.currentPage,()=>n.pageSize],C),G(()=>h.book_name,F);const d=()=>{c.value=!1},p=u=>{_e({book_id:u.book_id,reader_id:_.value.reader_id,status:1}).then(()=>{K.success("借阅成功")})};return A({open:s}),(u,k)=>{const x=t("el-descriptions-item"),R=t("el-tooltip"),i=t("el-tag"),w=t("el-descriptions"),S=t("el-card"),M=t("el-input"),o=t("el-table-column"),O=t("el-button"),q=t("el-popconfirm"),E=t("el-table"),m=t("el-pagination"),L=t("el-dialog"),X=Q("loading");return g(),b(L,{modelValue:c.value,"onUpdate:modelValue":k[1]||(k[1]=N=>c.value=N),title:"借阅书籍",width:"70%","close-on-click-modal":!1,class:"custom-dialog-background",onClosed:d},{default:a(()=>[e(S,{shadow:"never",class:"search-wrapper"},{default:a(()=>[e(w,{column:4},{default:a(()=>[e(x,{label:"姓名："},{default:a(()=>[l(T(_.value.name),1)]),_:1}),e(x,{label:"手机号："},{default:a(()=>[l(T(_.value.phone),1)]),_:1}),e(x,{label:"会员到期日期："},{default:a(()=>[l(T(_.value.expire),1)]),_:1}),e(x,{label:"会员状态："},{default:a(()=>[D.value(_.value.expire)>=0?(g(),b(i,{key:0,type:"success",effect:"dark"},{default:a(()=>[e(R,{class:"box-item",effect:"dark",content:`剩余 ${D.value(_.value.expire)} 天`,placement:"top"},{default:a(()=>[l(" 正常 ")]),_:1},8,["content"])]),_:1})):(g(),b(i,{key:1,type:"danger",effect:"dark"},{default:a(()=>[e(R,{class:"box-item",effect:"dark",content:`已过期 ${Math.abs(D.value(_.value.expire))} 天`,placement:"top"},{default:a(()=>[l(" 过期 ")]),_:1},8,["content"])]),_:1}))]),_:1})]),_:1})]),_:1}),e(S,{shadow:"never",class:"search-wrapper"},{default:a(()=>[e(M,{modelValue:h.book_name,"onUpdate:modelValue":k[0]||(k[0]=N=>h.book_name=N),placeholder:"请输入书名、作者、出版社、ISBN","prefix-icon":r(oe)},null,8,["modelValue","prefix-icon"])]),_:1}),H((g(),b(S,{shadow:"never"},{default:a(()=>[U("div",xe,[e(E,{data:z.value},{default:a(()=>[e(o,{prop:"book_name",fixed:"",label:"名称","show-overflow-tooltip":"",width:"250"}),e(o,{prop:"ISBN",label:"ISBN","show-overflow-tooltip":"",width:"200"}),e(o,{prop:"author",label:"作者","show-overflow-tooltip":"",width:"250"}),e(o,{prop:"publish",label:"出版社","show-overflow-tooltip":"","min-width":"250"}),e(o,{prop:"price",label:"价格",width:"150"}),e(o,{prop:"number",label:"数量",width:"150"}),e(o,{fixed:"right",label:"操作",width:"100",align:"center"},{default:a(N=>[e(q,{title:"确定借阅?",onConfirm:Z=>p(N.row)},{reference:a(()=>[e(O,{type:"success",plain:"",size:"small"},{default:a(()=>[l("借阅")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])]),U("div",ye,[e(m,{background:"",layout:r(n).layout,"page-sizes":r(n).pageSizes,total:r(n).total,"page-size":r(n).pageSize,currentPage:r(n).currentPage,onSizeChange:r(P),onCurrentChange:r($)},null,8,["layout","page-sizes","total","page-size","currentPage","onSizeChange","onCurrentChange"])])]),_:1})),[[X,y.value]])]),_:1},8,["modelValue"])}}}),ze=ae(Ce,[["__scopeId","data-v-f4590ba7"]]),Ve={class:"table-wrapper"},De={class:"pager-wrapper"},Se=W({__name:"giveBack",setup(V,{expose:A}){const c=v(!1),_=v(I({reader_id:void 0,name:"",phone:"",sex:1,birth:"",address:"",expire:""})),s=d=>{c.value=!0,d&&(_.value=I(d),h())},D=le(()=>d=>d?Y(d).diff(Y(),"days"):0),y=v(!1),{paginationData:n,handleCurrentChange:$,handleSizeChange:P}=te(),z=v([]),h=()=>{y.value=!0,me({pageNum:n.currentPage,pageSize:n.pageSize,phone:_.value.phone,status:"1"}).then(({data:d})=>{n.total=d.total,z.value=d.list}).catch(()=>{z.value=[]}).finally(()=>{y.value=!1})};G([()=>n.currentPage,()=>n.pageSize],h);const C=()=>{c.value=!1},F=d=>{fe({ser_num:d.ser_num,back_date:Y().format("YYYY-MM-DD HH:mm:ss"),status:2}).then(()=>{K.success("归还成功"),h()})};return A({open:s}),(d,p)=>{const u=t("el-descriptions-item"),k=t("el-tooltip"),x=t("el-tag"),R=t("el-descriptions"),i=t("el-card"),w=t("el-table-column"),S=t("el-button"),M=t("el-popconfirm"),o=t("el-table"),O=t("el-pagination"),q=t("el-dialog"),E=Q("loading");return g(),b(q,{modelValue:c.value,"onUpdate:modelValue":p[0]||(p[0]=m=>c.value=m),title:"归还书籍",width:"70%","close-on-click-modal":!1,class:"custom-dialog-background",onClosed:C},{default:a(()=>[e(i,{shadow:"never",class:"search-wrapper"},{default:a(()=>[e(R,{column:4},{default:a(()=>[e(u,{label:"姓名："},{default:a(()=>[l(T(_.value.name),1)]),_:1}),e(u,{label:"手机号："},{default:a(()=>[l(T(_.value.phone),1)]),_:1}),e(u,{label:"会员到期日期："},{default:a(()=>[l(T(_.value.expire),1)]),_:1}),e(u,{label:"会员状态："},{default:a(()=>[D.value(_.value.expire)>=0?(g(),b(x,{key:0,type:"success",effect:"dark"},{default:a(()=>[e(k,{class:"box-item",effect:"dark",content:`剩余 ${D.value(_.value.expire)} 天`,placement:"top"},{default:a(()=>[l(" 正常 ")]),_:1},8,["content"])]),_:1})):(g(),b(x,{key:1,type:"danger",effect:"dark"},{default:a(()=>[e(k,{class:"box-item",effect:"dark",content:`已过期 ${Math.abs(D.value(_.value.expire))} 天`,placement:"top"},{default:a(()=>[l(" 过期 ")]),_:1},8,["content"])]),_:1}))]),_:1})]),_:1})]),_:1}),H((g(),b(i,{shadow:"never"},{default:a(()=>[U("div",Ve,[e(o,{data:z.value},{default:a(()=>[e(w,{prop:"name",fixed:"",label:"借阅人姓名",width:"150"}),e(w,{prop:"phone",label:"借阅人手机号",width:"150"}),e(w,{prop:"book_name","show-overflow-tooltip":"",label:"书名",width:"150"}),e(w,{prop:"ISBN",label:"ISBN",width:"200"}),e(w,{prop:"expire",label:"状态",width:"150"},{default:a(m=>[m.row.status===1?(g(),b(x,{key:0,type:"danger",effect:"dark"},{default:a(()=>[l(" 未还 ")]),_:1})):(g(),b(x,{key:1,type:"success",effect:"dark"},{default:a(()=>[l(" 已还 ")]),_:1}))]),_:1}),e(w,{prop:"lend_date",label:"借出时间","min-width":"200"},{default:a(m=>[l(T(r(ee)(m.row.lend_date)),1)]),_:1}),e(w,{prop:"borrower",label:"借阅操作人",width:"150"}),e(w,{fixed:"right",label:"操作",width:"100",align:"center"},{default:a(m=>[e(M,{title:"确定归还?",onConfirm:L=>F(m.row)},{reference:a(()=>[e(S,{type:"primary",disabled:m.row.status===2,text:"",bg:"",size:"small"},{default:a(()=>[l("归还")]),_:2},1032,["disabled"])]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])]),U("div",De,[e(O,{background:"",layout:r(n).layout,"page-sizes":r(n).pageSizes,total:r(n).total,"page-size":r(n).pageSize,currentPage:r(n).currentPage,onSizeChange:r(P),onCurrentChange:r($)},null,8,["layout","page-sizes","total","page-size","currentPage","onSizeChange","onCurrentChange"])])]),_:1})),[[E,y.value]])]),_:1},8,["modelValue"])}}}),Ae=ae(Se,[["__scopeId","data-v-578e785e"]]),$e={class:"app-container"},Ue={class:"toolbar-wrapper"},Be={class:"table-wrapper"},Pe={class:"pager-wrapper"},Me=W({name:"UserManagement",__name:"index",setup(V){const A=v(!1),{paginationData:c,handleCurrentChange:B,handleSizeChange:_}=te(),s=v(),D=()=>{s.value.open(),s.value.isDetail=!1},y=i=>{ue.confirm(`正在删除用户：${i.name}，确认删除？`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{ve(i.reader_id).then(()=>{K.success("删除成功"),C()})})},n=i=>{s.value.open(i),s.value.isDetail=!1},$=i=>{s.value.open(i),s.value.isDetail=!0},P=v([]),z=v(null),h=ne({name:"",phone:""}),C=()=>{A.value=!0,be({pageNum:c.currentPage,pageSize:c.pageSize,name:h.name||void 0,phone:h.phone||void 0}).then(({data:i})=>{c.total=i.total,P.value=i.list}).catch(()=>{P.value=[]}).finally(()=>{A.value=!1})},F=()=>{c.currentPage===1?C():c.currentPage=1},d=()=>{var i;(i=z.value)==null||i.resetFields(),F()},p=le(()=>i=>i?Y(i).diff(Y(),"days"):0),u=v(),k=i=>{u.value.open(i)},x=v(),R=i=>{x.value.open(i)};return G([()=>c.currentPage,()=>c.pageSize],C,{immediate:!0}),(i,w)=>{const S=t("el-input"),M=t("el-form-item"),o=t("el-button"),O=t("el-form"),q=t("el-card"),E=t("el-tooltip"),m=t("el-table-column"),L=t("el-tag"),X=t("el-table"),N=t("el-pagination"),Z=Q("loading"),re=Q("permission");return g(),ce("div",$e,[H((g(),b(q,{shadow:"never",class:"search-wrapper"},{default:a(()=>[e(O,{ref_key:"searchFormRef",ref:z,inline:!0,model:h},{default:a(()=>[e(M,{prop:"name",label:"姓名"},{default:a(()=>[e(S,{modelValue:h.name,"onUpdate:modelValue":w[0]||(w[0]=f=>h.name=f),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(M,{prop:"phone",label:"手机号"},{default:a(()=>[e(S,{modelValue:h.phone,"onUpdate:modelValue":w[1]||(w[1]=f=>h.phone=f),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(M,null,{default:a(()=>[e(o,{type:"primary",icon:r(oe),onClick:F},{default:a(()=>[l("查询")]),_:1},8,["icon"]),e(o,{icon:r(se),onClick:d},{default:a(()=>[l("重置")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"])]),_:1})),[[Z,A.value]]),H((g(),b(q,{shadow:"never"},{default:a(()=>[U("div",Ue,[U("div",null,[e(o,{type:"primary",icon:r(ie),onClick:D},{default:a(()=>[l("添加新会员")]),_:1},8,["icon"])]),U("div",null,[e(E,{content:"刷新当前页"},{default:a(()=>[e(o,{type:"primary",icon:r(de),circle:"",onClick:C},null,8,["icon"])]),_:1})])]),U("div",Be,[e(X,{data:P.value},{default:a(()=>[e(m,{prop:"name",fixed:"",label:"姓名",width:"150"}),e(m,{prop:"phone",label:"手机号",width:"150"}),e(m,{prop:"sex",label:"性别",width:"150"},{default:a(f=>[f.row.sex===1?(g(),b(L,{key:0,type:"success",effect:"plain"},{default:a(()=>[l("男")]),_:1})):(g(),b(L,{key:1,type:"danger",effect:"plain"},{default:a(()=>[l("女")]),_:1}))]),_:1}),e(m,{prop:"expire",label:"会员到期时间",width:"150"}),e(m,{prop:"expire",label:"会员状态",width:"150"},{default:a(f=>[p.value(f.row.expire)>=0?(g(),b(L,{key:0,type:"success",effect:"dark"},{default:a(()=>[e(E,{class:"box-item",effect:"dark",content:`剩余 ${p.value(f.row.expire)} 天`,placement:"top"},{default:a(()=>[l(" 正常 ")]),_:2},1032,["content"])]),_:2},1024)):(g(),b(L,{key:1,type:"danger",effect:"dark"},{default:a(()=>[e(E,{class:"box-item",effect:"dark",content:`已过期 ${Math.abs(p.value(f.row.expire))} 天`,placement:"top"},{default:a(()=>[l(" 过期 ")]),_:2},1032,["content"])]),_:2},1024))]),_:1}),e(m,{prop:"create_time",label:"创建时间","min-width":"200"},{default:a(f=>[l(T(r(ee)(f.row.create_time)),1)]),_:1}),e(m,{prop:"update_time",label:"更新时间","min-width":"200"},{default:a(f=>[l(T(r(ee)(f.row.update_time)),1)]),_:1}),e(m,{fixed:"right",label:"操作",width:"350",align:"center"},{default:a(f=>[e(o,{type:"success",text:"",bg:"",size:"small",onClick:j=>k(f.row)},{default:a(()=>[l("借阅")]),_:2},1032,["onClick"]),e(o,{type:"warning",text:"",bg:"",size:"small",onClick:j=>R(f.row)},{default:a(()=>[l("归还")]),_:2},1032,["onClick"]),e(o,{type:"info",text:"",bg:"",size:"small",onClick:j=>$(f.row)},{default:a(()=>[l("详情")]),_:2},1032,["onClick"]),e(o,{type:"primary",text:"",bg:"",size:"small",onClick:j=>n(f.row)},{default:a(()=>[l("修改")]),_:2},1032,["onClick"]),H((g(),b(o,{type:"danger",text:"",bg:"",size:"small",onClick:j=>y(f.row)},{default:a(()=>[l("删除")]),_:2},1032,["onClick"])),[[re,["admin"]]])]),_:1})]),_:1},8,["data"])]),U("div",Pe,[e(N,{background:"",layout:r(c).layout,"page-sizes":r(c).pageSizes,total:r(c).total,"page-size":r(c).pageSize,currentPage:r(c).currentPage,onSizeChange:r(_),onCurrentChange:r(B)},null,8,["layout","page-sizes","total","page-size","currentPage","onSizeChange","onCurrentChange"])])]),_:1})),[[Z,A.value]]),e(ke,{ref_key:"addEdit",ref:s,onOk:C},null,512),e(ze,{ref_key:"borrow",ref:u},null,512),e(Ae,{ref_key:"giveBack",ref:x},null,512)])}}}),qe=ae(Me,[["__scopeId","data-v-61081eaa"]]);export{qe as default};