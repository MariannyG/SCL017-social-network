
export default ()=>{
    const homeView=`<div>
    <a href="#profile">profile</a>
    </div>`;
    const homePage=document.createElement('section');
    homePage.innerHTML=homeView;
    return homePage;
}