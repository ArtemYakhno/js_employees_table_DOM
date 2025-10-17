function e(e){let t=String(e).trim().replace(/[^\d,.\-\s\u00A0\u2007\u202F]/g,"").replace(/[\s\u00A0\u2007\u202F]/g,"");return(t=(t=t.replace(/,/g,"")).replace(/-/g,""),String(e).includes("-")&&(t="-"+t),!t||"-"===t||/^[.]+$/.test(t))?NaN:Number(t)}function t(e,t){return!e||!t||null==e.textContent||null==t.textContent||""===e.textContent.trim()||""===t.textContent.trim()}function n(e){let t=Number(e);return t.toLocaleString("en-US",{style:"currency",currency:"USD",minimumFractionDigits:t%1==0?0:2,maximumFractionDigits:2})}function a(){let e=document.querySelectorAll(".error");for(let t of(e.length,e))t.remove()}function l(e){return(!e||e<18||e>90||!Number(e))&&{title:"Age",message:"Age must be between 18 and 90 years old."}}function o(e){return(!e||e.length<4||e.length>40)&&{title:"Full Name",message:"Name must be between 4 and 40 characters long."}}function r(e){return(!e||e.length<2||e.length>40)&&{title:"Position",message:"Position must be between 2 and 40 characters long."}}function i(e){return(!e||e<0||e>1e6||!Number(e))&&{title:"Salary",message:"Salary must be between 0 and 1,000,000."}}function s(e){return!e&&{title:"Office",message:"Office can not be empty."}}const c=(e,t,n,a,l)=>{let o=document.createElement("div"),r=document.createElement("h2"),i=document.createElement("p");o.style.cssText=`
  position: fixed;
  top: ${e}px;
  right: ${t}px;
  `,o.className=`notification ${l}`,o.setAttribute("data-qa","notification"),r.textContent=n,r.className="title",i.textContent=a,o.append(r,i),document.body.append(o),setTimeout(()=>{o&&(o.style.display="none")},2e3)},u=({fullName:e,position:t,office:n,age:a,salary:c}={})=>{let u={fullName:e,position:t,office:n,age:a,salary:c},m=[];for(let[e,t]of Object.entries({fullName:o,position:r,office:s,age:l,salary:i})){let n=t(u[e]);n&&m.push(n)}return m},m=`<form action="#" class="new-employee-form">
    <label>
      Name:
      <input
        name="name"
        type="text"
        data-qa="name"
      />
    </label>
    <label>
      Position:
      <input
        name="position"
        type="text"
        data-qa="position"
      />
    </label>
    <label>
      Office:
      <select
        name="office"
        data-qa="office"
      >
        <option value="Tokyo">Tokyo</option>
        <option value="Singapore">Singapore</option>
        <option value="London">London</option>
        <option value="New York">New York</option>
        <option value="Edinburgh">Edinburgh</option>
        <option value="San Francisco">San Francisco</option>
      </select>
    </label>
    <label>
      Age:
      <input
        name="age"
        type="number"
        data-qa="age"
      />
    </label>
    <label>
      Salary:
      <input
        name="salary"
        type="number"
        data-qa="salary"
      />
    </label>
    <button>Save to table</button>
  </form>`;document.addEventListener("DOMContentLoaded",()=>{let d=document.querySelector("table"),f=document.querySelector("form");d&&(!function(u){var m,d;let f,p,g;let b=u.querySelector("tbody"),y=u.querySelector("thead");if(!y||!b)return;let S=null,x=(m={get lastActiveRow(){return g},set lastActiveRow(v){g=v}},function(e){m.lastActiveRow&&m.lastActiveRow.classList.remove("active"),e.classList.add("active"),m.lastActiveRow=e}),C=function(n){let{tBody:a}=n;return function(l){var o;let r=Array.from(a.rows??[]);if(!r.length)return;let i=l.cellIndex??-1,s=l.parentElement;if(i<0||!s||i>=s.cells.length)return;let c=l.dataset.type||"string";n.lastSortColumn&&n.lastSortColumn===l.textContent?n.lastSortDescending=!n.lastSortDescending:n.lastSortDescending=!0,n.lastSortColumn=l.textContent;let u=(o=n.lastSortDescending,"number"===c?function(n,a){if(t(n.cells[i],a.cells[i]))return 0;let l=e(n.cells[i].textContent),r=e(a.cells[i].textContent);return Number.isNaN(l)||Number.isNaN(r)?0:o?l-r:r-l}:function(e,n){if(t(e.cells[i],n.cells[i]))return 0;let a=e.cells[i].textContent.trim(),l=n.cells[i].textContent.trim();return o?a.localeCompare(l):l.localeCompare(a)});r.sort(u),a.append(...r)}}({tBody:b,get lastSortDescending(){return f},set lastSortDescending(v){f=v},get lastSortColumn(){return p},set lastSortColumn(v){p=v}}),N=(d={get activeInput(){return S},set activeInput(v){S=v}},function(t,u,m){let f=t.textContent?.trim()??"",p=document.createElement("input");p.type=u,p.className="cell-input",p.name=m,p.value="salary"===m?e(f):f,d.activeInput=p,t.textContent="",t.appendChild(p),p.focus();let g=!1,b=!0,y=()=>{let e=p.value.trim();if(""===e){t.textContent=f,d.activeInput=null;return}let u=null;switch(m){case"name":u=o(e);break;case"position":u=r(e);break;case"office":u=s(e);break;case"age":u=l(e);break;case"salary":(u=i(e))||(e=n(e));break;default:u={title:"Error",message:"Unknown column"}}u&&(function({title:e,message:t}={}){a(),c(10,10,e,t,"error")}(u),b=!1),b&&(t.textContent=e,g=!0,d.activeInput=null)},S=()=>{g=!0,t.textContent=f,d.activeInput=null};p.addEventListener("keydown",e=>{"Enter"===e.key&&y(),"Escape"===e.key&&S()}),p.addEventListener("blur",()=>{setTimeout(()=>{g||y(),b||S()},0)},{once:!0}),p.addEventListener("change",()=>{b=!0})});y.addEventListener("click",e=>{let t=e.target.closest("th");t&&C(t)}),b.addEventListener("click",e=>{let t=e.target.closest("td");t&&x(t.parentElement)}),b.addEventListener("dblclick",e=>{if(S)return;let t=e.target.closest("td");if(!t)return;let n=t.cellIndex,a=u.tHead.rows[0]?.cells[n];N(t,a?.getAttribute("data-type")||"string",a?.textContent.toLowerCase()||"default")})}(d),f||function(e){e.insertAdjacentHTML("afterend",m)}(d),function(e,t){e.addEventListener("submit",l=>{l.preventDefault();let o={fullName:e.elements.name.value,position:e.elements.position.value,office:e.elements.office.value,age:e.elements.age.value,salary:e.elements.salary.value},r=u(o);r.length>0?function(e){for(let t=0;t<e.length;t++)c(140*t+10,10,e[t].title,e[t].message,"error")}(r):(a(),function({fullName:e,position:t,office:a,age:l,salary:o}={},r){let i=r.tBodies?.[0]??r.createTBody(),s=`<tr>
          <td>${e}</td>
          <td>${t}</td>
          <td>${a}</td>
          <td>${l}</td>
          <td>${n(o)}</td>
        </tr>`;i.insertAdjacentHTML("beforeend",s),c(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success")}(o,t),e.reset())})}(document.querySelector("form"),d))});
//# sourceMappingURL=index.08fc2a00.js.map
