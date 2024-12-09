import{c as te,u as ne,a as se,g as re,d as ie}from"./index-HHaSpI6l.js";import{n as G,E as H,y as ue,r as de,z as pe,C as ce,A as me,B as W,D as _e}from"./element-Cx1u8HIB.js";import{u as fe}from"./usePagination-DQcWKUV1.js";import{f as X}from"./index-DPHaodem.js";import{a as ve}from"./index-CSaWMEI_.js";import{m as le,r as m,d as ae,ai as s,p as h,O as B,P as a,V as e,q as F,a8 as ge,F as be,S as Y,t as g,T as v,_ as he,aq as Z,Q as q,u as c,U as ee}from"./vue-BoURs06I.js";import{h as ke,_ as we}from"./index-Bd4y8G8I.js";import"./vxe-OnfnC8YF.js";const Ve=g("i",{class:"el-icon-upload"},null,-1),xe=g("div",{class:"el-upload__text"},[v("将文件拖到此处，或"),g("em",null,"点击上传")],-1),ye={key:1,style:{position:"relative"}},Ce=["src"],Be={style:{flex:"auto"}},Se=le({__name:"add_edit",emits:["ok"],setup(oe,{expose:y,emit:p}){const S=m([]),R=()=>{ve().then(({data:i})=>{S.value=i})};let _="";const k=m(!1),z={book_id:void 0,book_name:"",author:"",publish:"",ISBN:"",introduction:"",language:"",price:0,pub_date:"",class_id:1,number:0},o=m(G(z)),T={book_name:[{required:!0,trigger:"blur",message:"请输入图书名称"}],author:[{required:!0,trigger:"blur",message:"请输入图书作者"}],publish:[{required:!0,trigger:"blur",message:"请输入图书出版社"}],ISBN:[{required:!0,trigger:"blur",message:"请输入图书ISBN"}],price:[{required:!0,trigger:"blur",message:"请输入图书价格"}],class_id:[{required:!0,trigger:"blur",message:"请输入图书分类"}],language:[{required:!1,trigger:"blur",message:"请输入图书语言"}],pub_date:[{required:!1,trigger:"blur",message:"请输入图书出版时间"}],number:[{required:!0,trigger:"blur",message:"请输入图书数量"}]},V=m(null),C=m(!1),r=m(!1),w=i=>{R(),k.value=!0,i&&(o.value=G(i))},D=()=>{k.value=!1},E=()=>{var i;(i=V.value)==null||i.validate((l,n)=>{if(!l)return console.log("表单校验不通过",n);C.value=!0,(o.value.book_id===void 0?te:ne)({...o.value,cover:_}).then(()=>{H.success("操作成功"),k.value=!1,N("ok")}).finally(()=>{C.value=!1})})};ae(k,()=>{k.value||(o.value.cover="",_="")});const P=()=>{var i;(i=V.value)==null||i.clearValidate(),o.value=G(z)},N=p;y({open:w,isDetail:r});const M=i=>i.type.indexOf("image")!==-1,U=i=>{if(i.status==="ready"){const l=new FormData;l.append("file",i.raw),se(l).then(n=>{o.value.cover=""+n.data.url,_=n.data.id}).catch(n=>{console.error("上传失败",n)})}},L=()=>{o.value.cover="",_=""};return(i,l)=>{const n=s("el-input"),u=s("el-form-item"),x=s("el-option"),b=s("el-select"),I=s("el-input-number"),A=s("el-upload"),O=s("CircleCloseFilled"),Q=s("el-icon"),f=s("el-form"),$=s("el-button"),j=s("el-drawer");return h(),B(j,{modelValue:k.value,"onUpdate:modelValue":l[8]||(l[8]=t=>k.value=t),size:"600",onClosed:P,title:r.value?"查看图书":o.value.book_id===void 0?"新增图书":"修改图书"},{default:a(()=>[e(f,{ref_key:"formRef",ref:V,model:o.value,disabled:r.value,rules:T,"label-width":"100px"},{default:a(()=>[e(u,{prop:"ISBN",label:"图书ISBN"},{default:a(()=>[e(n,{modelValue:o.value.ISBN,"onUpdate:modelValue":l[0]||(l[0]=t=>o.value.ISBN=t),maxlength:"20","show-word-limit":"",placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(u,{prop:"book_name",label:"图书名称"},{default:a(()=>[e(n,{modelValue:o.value.book_name,"onUpdate:modelValue":l[1]||(l[1]=t=>o.value.book_name=t),type:"textarea",resize:"none",autosize:{minRows:2,maxRows:6},maxlength:"100","show-word-limit":"",placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(u,{prop:"author",label:"图书作者"},{default:a(()=>[e(n,{modelValue:o.value.author,"onUpdate:modelValue":l[2]||(l[2]=t=>o.value.author=t),maxlength:"50","show-word-limit":"",placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(u,{prop:"publish",label:"图书出版社"},{default:a(()=>[e(n,{modelValue:o.value.publish,"onUpdate:modelValue":l[3]||(l[3]=t=>o.value.publish=t),maxlength:"50","show-word-limit":"",placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(u,{prop:"class_id",label:"图书分类"},{default:a(()=>[e(b,{modelValue:o.value.class_id,"onUpdate:modelValue":l[4]||(l[4]=t=>o.value.class_id=t),placeholder:"请选择"},{default:a(()=>[(h(!0),F(be,null,ge(S.value,t=>(h(),B(x,{key:t.class_id,label:t.class_name,value:t.class_id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(u,{prop:"price",label:"图书价格"},{default:a(()=>[e(I,{modelValue:o.value.price,"onUpdate:modelValue":l[5]||(l[5]=t=>o.value.price=t),precision:2,min:0,max:1e4},null,8,["modelValue"])]),_:1}),e(u,{prop:"number",label:"图书数量"},{default:a(()=>[e(I,{modelValue:o.value.number,"onUpdate:modelValue":l[6]||(l[6]=t=>o.value.number=t),min:0,max:1e4,placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(u,{prop:"introduction",label:"图书介绍"},{default:a(()=>[e(n,{type:"textarea",resize:"none",maxlength:"500","show-word-limit":"",autosize:{minRows:2,maxRows:6},modelValue:o.value.introduction,"onUpdate:modelValue":l[7]||(l[7]=t=>o.value.introduction=t),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(u,{label:"封面",style:{position:"relative"}},{default:a(()=>[o.value.cover?Y("",!0):(h(),B(A,{key:0,class:"upload-demo",drag:"",action:"#","on-change":U,"show-file-list":!1,"auto-upload":!1,"before-upload":M},{default:a(()=>[Ve,xe]),_:1})),o.value.cover?(h(),F("div",ye,[g("img",{style:{width:"150px",height:"200px"},src:o.value.cover,class:"avatar"},null,8,Ce),g("div",{class:"avatar-uploader-icon",onClick:L,style:{position:"absolute",top:"0",right:"-20px",cursor:"pointer"}},[e(Q,{color:"red",size:"20px",style:{}},{default:a(()=>[e(O)]),_:1})])])):Y("",!0)]),_:1})]),_:1},8,["model","disabled"])]),footer:a(()=>[g("div",Be,[e($,{onClick:D},{default:a(()=>[v("取消")]),_:1}),e($,{type:"primary",loading:C.value,disabled:r.value,onClick:E},{default:a(()=>[v("确定")]),_:1},8,["loading","disabled"])])]),_:1},8,["modelValue","title"])}}}),ze={class:"app-container"},De={class:"toolbar-wrapper"},Ne={class:"box-btn"},Ue={style:{"margin-left":"20px"}},Ie={class:"table-wrapper"},Ae={class:"pager-wrapper"},$e=le({name:"BookManagement",__name:"index",setup(oe){const y=m(!1),{paginationData:p,handleCurrentChange:S,handleSizeChange:R}=fe(),_=m(),k=()=>{_.value.open(),_.value.isDetail=!1},z=l=>{W.confirm(`正在删除图书：${l.book_name}，确认删除？`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{ie(l.book_id).then(()=>{H.success("删除成功"),w()})})},o=l=>{_.value.open(l),_.value.isDetail=!1},T=l=>{_.value.open(l),_.value.isDetail=!0},V=m([]),C=m(null),r=he({book_name:"",author:"",publish:"",class_name:"",ISBN:""}),w=()=>{y.value=!0,re({pageNum:p.currentPage,pageSize:p.pageSize,book_name:r.book_name||void 0,author:r.author||void 0,publish:r.publish||void 0,class_name:r.class_name||void 0,ISBN:r.ISBN||void 0}).then(({data:l})=>{p.total=l.total,V.value=l.list}).catch(()=>{V.value=[]}).finally(()=>{y.value=!1})},D=()=>{p.currentPage===1?w():p.currentPage=1},E=()=>{var l;(l=C.value)==null||l.resetFields(),D()},P=m("/lsm-api/v1/upload/importExcel"),N=ke(),M=m({Authorization:N?`Bearer ${N}`:void 0}),U=m({close:()=>{}}),L=()=>(U.value=_e.service({lock:!0,text:"导入中",background:"rgba(255, 255, 255, .7)"}),!0),i=l=>{U.value.close(),l.code!==200?W.alert(l.message,"提示",{type:"error",showClose:!1,confirmButtonText:"我知道了",callback:()=>{w()}}):(w(),H({message:"批量导入成功",type:"success"}))};return ae([()=>p.currentPage,()=>p.pageSize],w,{immediate:!0}),(l,n)=>{const u=s("el-input"),x=s("el-form-item"),b=s("el-button"),I=s("el-form"),A=s("el-card"),O=s("el-upload"),Q=s("el-tooltip"),f=s("el-table-column"),$=s("el-table"),j=s("el-pagination"),t=Z("loading"),J=Z("permission");return h(),F("div",ze,[q((h(),B(A,{shadow:"never",class:"search-wrapper"},{default:a(()=>[e(I,{ref_key:"searchFormRef",ref:C,inline:!0,model:r},{default:a(()=>[e(x,{prop:"book_name",label:"名称"},{default:a(()=>[e(u,{modelValue:r.book_name,"onUpdate:modelValue":n[0]||(n[0]=d=>r.book_name=d),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(x,{prop:"ISBN",label:"ISBN"},{default:a(()=>[e(u,{modelValue:r.ISBN,"onUpdate:modelValue":n[1]||(n[1]=d=>r.ISBN=d),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(x,{prop:"author",label:"作者"},{default:a(()=>[e(u,{modelValue:r.author,"onUpdate:modelValue":n[2]||(n[2]=d=>r.author=d),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(x,{prop:"publish",label:"出版社"},{default:a(()=>[e(u,{modelValue:r.publish,"onUpdate:modelValue":n[3]||(n[3]=d=>r.publish=d),placeholder:"请输入"},null,8,["modelValue"])]),_:1}),e(x,null,{default:a(()=>[e(b,{type:"primary",icon:c(ue),onClick:D},{default:a(()=>[v("查询")]),_:1},8,["icon"]),e(b,{icon:c(de),onClick:E},{default:a(()=>[v("重置")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"])]),_:1})),[[t,y.value]]),q((h(),B(A,{shadow:"never"},{default:a(()=>[g("div",De,[g("div",Ne,[g("div",null,[e(b,{type:"primary",icon:c(pe),onClick:k},{default:a(()=>[v("添加新书")]),_:1},8,["icon"])]),q((h(),F("div",Ue,[e(O,{action:P.value,"show-file-list":!1,headers:M.value,"on-success":i,"before-upload":L,accept:".xls,.xlsx"},{default:a(()=>[e(b,{type:"primary",icon:c(ce)},{default:a(()=>[v("批量导入")]),_:1},8,["icon"])]),_:1},8,["action","headers"])])),[[J,["admin"]]])]),g("div",null,[e(Q,{content:"刷新当前页"},{default:a(()=>[e(b,{type:"primary",icon:c(me),circle:"",onClick:w},null,8,["icon"])]),_:1})])]),g("div",Ie,[e($,{data:V.value},{default:a(()=>[e(f,{prop:"book_name",fixed:"",label:"名称","show-overflow-tooltip":"",width:"250"}),e(f,{prop:"ISBN",label:"ISBN","show-overflow-tooltip":"",width:"200"}),e(f,{prop:"author",label:"作者","show-overflow-tooltip":"",width:"250"}),e(f,{prop:"publish",label:"出版社","show-overflow-tooltip":"",width:"250"}),e(f,{prop:"class_name",label:"分类","show-overflow-tooltip":"",width:"250"}),e(f,{prop:"price",label:"价格",width:"150"}),e(f,{prop:"number",label:"数量",width:"150"}),e(f,{prop:"create_time",label:"创建时间","min-width":"200"},{default:a(d=>[v(ee(c(X)(d.row.create_time)),1)]),_:1}),e(f,{prop:"update_time",label:"更新时间","min-width":"200"},{default:a(d=>[v(ee(c(X)(d.row.update_time)),1)]),_:1}),e(f,{fixed:"right",label:"操作",width:"200",align:"center"},{default:a(d=>[e(b,{type:"info",text:"",bg:"",size:"small",onClick:K=>T(d.row)},{default:a(()=>[v("详情")]),_:2},1032,["onClick"]),e(b,{type:"primary",text:"",bg:"",size:"small",onClick:K=>o(d.row)},{default:a(()=>[v("修改")]),_:2},1032,["onClick"]),q((h(),B(b,{type:"danger",text:"",bg:"",size:"small",onClick:K=>z(d.row)},{default:a(()=>[v("删除")]),_:2},1032,["onClick"])),[[J,["admin"]]])]),_:1})]),_:1},8,["data"])]),g("div",Ae,[e(j,{background:"",layout:c(p).layout,"page-sizes":c(p).pageSizes,total:c(p).total,"page-size":c(p).pageSize,currentPage:c(p).currentPage,onSizeChange:c(R),onCurrentChange:c(S)},null,8,["layout","page-sizes","total","page-size","currentPage","onSizeChange","onCurrentChange"])])]),_:1})),[[t,y.value]]),e(Se,{ref_key:"addEdit",ref:_,onOk:w},null,512)])}}}),Oe=we($e,[["__scopeId","data-v-7c6f262a"]]);export{Oe as default};
