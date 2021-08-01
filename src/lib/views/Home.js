
export default ()=>{
    const homeView=`<div>hola</div>`;
    const homePage=document.createElement('section');
    homePage.innerHTML=homeView;
    return homePage;
}