const home=()=>{
    const homePage=`<div>hola</div>`;
    const homeView=document.createElement('section');
    homeView.innerHTML=homePage;
    return homeView;
}