"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[322],{8322:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(9439),r=n(2791),s=n(9434),c=n(4179),i="ContactForm_form__dhl+T",o="ContactForm_input__Bl93P",u="ContactForm_btn__wll+u",l=n(184),d=function(){var e=(0,r.useState)(""),t=(0,a.Z)(e,2),n=t[0],d=t[1],m=(0,r.useState)(""),h=(0,a.Z)(m,2),f=h[0],p=h[1],_=(0,s.v9)((function(e){return e.contacts.items})),b=(0,s.I0)(),x=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":d(a);break;case"number":p(a);break;default:return}};return(0,l.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault(),_.find((function(e){return e.name.toLocaleLowerCase()===n.toLocaleLowerCase()}))?alert("".concat(n," is already in contacts")):(b((0,c.uK)({name:n,number:f})),d(""),p(""))},children:[(0,l.jsxs)("label",{children:["Insert Name",(0,l.jsx)("input",{onChange:x,value:n,type:"text",className:o,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,l.jsxs)("label",{children:["Insert Number",(0,l.jsx)("input",{className:o,onChange:x,value:f,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,l.jsx)("button",{className:u,type:"submit",children:"Add contact"})]})},m="Filter_wrapper__9Ksqy",h=n(6895),f=function(){var e=(0,s.I0)(),t=(0,s.v9)((function(e){return e.filter}));return(0,l.jsxs)("div",{className:m,children:[(0,l.jsx)("label",{children:"Find contacts by name"}),(0,l.jsx)("input",{type:"text",name:"filter",value:t,onChange:function(t){return e((0,h.W)(t.target.value))}})]})},p="ContactList_item__EZYHO",_="ContactList_btn__6Piat",b=function(){var e=(0,s.I0)();(0,r.useEffect)((function(){e((0,c.yF)())}),[e]);var t=(0,s.v9)((function(e){return e.contacts.isLoading})),n=(0,s.v9)((function(e){return e.contacts.items})),a=(0,s.v9)((function(e){return e.filter})),i=n.filter((function(e){return e.name.toLocaleLowerCase().includes(a.toLocaleLowerCase())}));return t?(0,l.jsx)("div",{children:"isLoading"}):(0,l.jsx)("ul",{children:i.map((function(t){return(0,l.jsxs)("li",{className:p,children:[" ",(0,l.jsxs)("p",{children:[t.name,": ",t.number]})," ",(0,l.jsx)("button",{className:_,onClick:function(){return e((0,c.GK)(t.id))},children:"Delete"})," "]},t.id)}))})},x="Contacts_container__WzsIr",j=function(){return(0,l.jsxs)("div",{className:x,children:[(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsx)(d,{}),(0,l.jsx)("h2",{children:"Contacts"}),(0,l.jsx)(f,{}),(0,l.jsx)(b,{})]})}}}]);
//# sourceMappingURL=322.92213654.chunk.js.map