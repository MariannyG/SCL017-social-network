export const changeRoute=(route)=>{
   const hash=route.replace(/#/g,'');
   window.history.replaceState({},hash,'/'+`${hash}`);
}

  
