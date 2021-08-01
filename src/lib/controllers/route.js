import components from "../views/Components.js";

export const changeView=(route)=>{
   const page=document.getElementById('root');
   page.innerHTML='';
   switch (route){
     case '':
     case '#':
     case '#/':{
           return  page.appendChild(components.register());
     }  
     case '#/home':{
          return page.appendChild(components.home());
     }
     default:
         break;
    
   };




}