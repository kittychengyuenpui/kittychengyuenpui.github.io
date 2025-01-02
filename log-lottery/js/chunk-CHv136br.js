import{u as e,b as l}from"./chunk-CDNb57LM.js";import{s}from"./chunk-BqjzUA-v.js";import{r as t,u as a,w as o}from"./chunk-BS20Lwqw.js";import{r as n}from"./chunk-Cv_h2SVa.js";import{_ as i}from"./chunk-OuaCuYzQ.js";import{a6 as r,r as p,o as c,aR as m,W as d,X as u,be as b,u as h,a3 as k,F as g}from"./chunk-BB7IEB5B.js";import"./chunk-DyqAhB7D.js";import"./chunk-B8dymozY.js";import"./chunk-CShO9xrd.js";import"./chunk-D3YcvhA7.js";import"./chunk-BP0RZxjf.js";import"./chunk-yaJDdhye.js";import"./chunk-DorFIKXF.js";import"./chunk-Brhz0LsG.js";import"./chunk-DCTqbsaT.js";import"./chunk-C6Zwkpkb.js";import"./chunk-BLnK4V6m.js";import"./chunk-Q9bklZT_.js";import"./chunk-iVZSWji-.js";import"./chunk-6OeFQMrk.js";import"./chunk-D6zm6W2C.js";import"./chunk-Cjrd7Wf_.js";import"./chunk-Dq6ymT-8.js";const f={class:"modal-box"},j={class:"modal-action"},x={method:"dialog",class:"flex gap-3"},y={class:"modal-box"},_={class:"modal-action"},v={method:"dialog",class:"flex gap-3"},A={class:"min-w-1000px"},C={class:"flex gap-3"},N={class:""},w={for:"explore"},z={class:"tooltip tooltip-bottom","data-tip":"上傳修改好的excel文件"},P=r({__name:"PersonAll",setup(r){const P=e().personConfig,{getAllPersonList:S,getAlreadyPersonList:W}=s(P),D=p(),T=p(),J=async e=>{let s=await n(e.target.files[0]),o=t(s,{type:"binary",cellDates:!0}),i=o.Sheets[o.SheetNames[0]];const r=a.sheet_to_json(i),p=l(r);P.resetPerson(),P.addNotPersonList(p)},L=()=>{let e=JSON.parse(JSON.stringify(S.value));for(let s=0;s<e.length;s++)delete e[s].x,delete e[s].y,delete e[s].id,delete e[s].createTime,delete e[s].updateTime,delete e[s].prizeId,e[s].isWin?e[s].isWin="是":e[s].isWin="否",e[s].prizeTime=e[s].prizeTime.join(","),e[s].prizeName=e[s].prizeName.join(",");let l=JSON.stringify(e);if(l=l.replaceAll(/uid/g,"編號").replaceAll(/isWin/g,"是否中獎").replaceAll(/department/g,"部門").replaceAll(/name/g,"姓名").replaceAll(/identity/g,"身份").replaceAll(/prizeName/g,"獲獎").replaceAll(/prizeTime/g,"獲獎时间"),e=JSON.parse(l),e.length>0){const l=a.json_to_sheet(e),s=a.book_new();a.book_append_sheet(s,l,"Sheet1"),o(s,"data.xlsx")}},O=()=>{P.resetAlreadyPerson()},M=()=>{P.deleteAllPerson()},q=[{label:"編號",props:"uid"},{label:"姓名",props:"name"},{label:"部門",props:"department"},{label:"身份",props:"identity"},{label:"是否已中獎",props:"isWin",formatValue:e=>e.isWin?"是":"否"},{label:"操作",actions:[{label:"删除",type:"btn-error",onClick:e=>{(e=>{P.deletePerson(e)})(e)}}]}];return c((()=>{})),(e,l)=>(m(),d(g,null,[u("dialog",{id:"my_modal_1",ref_key:"resetDataDialog",ref:D,class:"border-none modal"},[u("div",f,[l[4]||(l[4]=u("h3",{class:"text-lg font-bold"},"提示!",-1)),l[5]||(l[5]=u("p",{class:"py-4"},"該操作會清空人員中獎信息，是否繼續？",-1)),u("div",j,[u("form",x,[u("button",{class:"btn",onClick:l[0]||(l[0]=e=>D.value.close())},"取消"),u("button",{class:"btn",onClick:O},"確定")])])])],512),u("dialog",{id:"my_modal_1",ref_key:"delAllDataDialog",ref:T,class:"border-none modal"},[u("div",y,[l[6]||(l[6]=u("h3",{class:"text-lg font-bold"},"提示!",-1)),l[7]||(l[7]=u("p",{class:"py-4"},"該操作會删除所有人員數據，是否繼續？",-1)),u("div",_,[u("form",v,[u("button",{class:"btn",onClick:l[1]||(l[1]=e=>T.value.close())},"取消"),u("button",{class:"btn",onClick:M},"確定")])])])],512),u("div",A,[l[12]||(l[12]=u("h2",null,"人员管理",-1)),u("div",C,[u("button",{class:"btn btn-error btn-sm",onClick:l[2]||(l[2]=e=>T.value.showModal())},"全部删除"),l[11]||(l[11]=u("div",{class:"tooltip tooltip-bottom","data-tip":"下載文件後，請在excel中填寫數據，并保存為xlsx格式"},[u("a",{class:"no-underline btn btn-secondary btn-sm",download:"人口登記表.xlsx",target:"_blank",href:"/log-lottery/人口登记表.xlsx"},"下載模板")],-1)),u("div",N,[u("label",w,[u("div",z,[u("input",{type:"file",class:"",id:"explore",style:{display:"none"},onChange:J,accept:".xlsx,.xls"},null,32),l[8]||(l[8]=u("span",{class:"btn btn-primary btn-sm"},"導入人員數據",-1))])])]),u("button",{class:"btn btn-error btn-sm",onClick:l[3]||(l[3]=e=>D.value.showModal())},"重置人員數據"),u("button",{class:"btn btn-accent btn-sm",onClick:L},"導出結果"),u("div",null,[l[9]||(l[9]=u("span",null,"中獎人數：",-1)),u("span",null,b(h(W).length),1),l[10]||(l[10]=u("span",null," / ",-1)),u("span",null,b(h(S).length),1)])]),k(i,{tableColumns:q,data:h(S)},null,8,["data"])])],64))}});export{P as default};