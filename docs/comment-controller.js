import {addComments,deleteComment,updateComment,userActive} from "../models/modelFirebase.js";

export const preventSendCommet=(e)=>{
    const event=e.target.value;
    const comment=e.target;
    const btnShare=e.target.parentElement.querySelector('#share-comment');
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        if(event !== ""){
          btnShare.classList.remove('hide');
          comment.classList.add('active');
        }else{
          btnShare.classList.add('hide');
          comment.classList.remove('active');
        }
      }

      }); 
};

export const preventSaveEmptyField = (e)=>{
  const event= e.target.innerHTML;
  const btnSave = e.target.parentElement.querySelector('.btn-save'); 
  if(event !== ""){
    btnSave.classList.add('show');
  }else{
    btnSave.classList.remove('show');
    btnSave.classList.add('fade');
  }
}


export const dateComment=(date)=>{
    const yearComment=date.getFullYear();
    const monthComment=date.getMonth() + 1;
    const dayComment=date.getDate();
    const hourComment=date.toLocaleTimeString();
    const completeDate = `${dayComment}/${monthComment}/${yearComment} a las ${hourComment}`;
    return completeDate;
}

export const createComment = async (e)=>{
    e.preventDefault();
    const formComments=e.target;
    const nameMovie=formComments.parentElement.dataset.name;
    const comment=formComments.querySelector('#comment').value;
    const btnShare=formComments.querySelector('#share-comment');
    const date= new Date();
    const user=userActive();
    const data = {
    message: comment,
    id_user: user.uid,
    name_user: user.displayName,
    photo_user : user.photoURL,
    date_post: dateComment(date),
    date_time: date.getTime(),
    created : firebase.firestore.FieldValue.serverTimestamp(),
    status:'',
    usersLike :[],
    likeEmail:[],
    like_count : 0
    };
    await addComments('post',nameMovie,data)
    btnShare.classList.toggle('hide');
    formComments.reset();
}

export const deleteCommentUser = async (e) =>{
        const name=e.currentTarget.dataset.name;
        const id=e.currentTarget.dataset.id;
        console.log(e.currentTarget.dataset.id);
        await   deleteComment(name,id);
};

export const editCommentUser= (e)=>{
   const sectionComment = e.currentTarget.parentElement;
   console.log(sectionComment);
   const buttonSave =sectionComment.querySelector('.btn-save');
   const buttonEdit =sectionComment.querySelector('.btn-edit');
   const buttonDelete=sectionComment.querySelector('.btn-delete');
   const editableComment = sectionComment.querySelector('.showComment');
   editableComment.contentEditable = true;
   editableComment.focus();
   buttonEdit.classList.add('hide');
   buttonDelete.classList.add('hide');
   buttonSave.classList.remove('hide');
}

export const updateCommentUser = async (e) =>{
  const nameMovie=e.currentTarget.dataset.name;
  const idComment=e.currentTarget.dataset.id;
  console.log(nameMovie,idComment);
  const sectionComment = e.currentTarget.parentNode;
  console.log(sectionComment);
  const editableComment=sectionComment.querySelector('.showComment');
  const contentComment=editableComment.innerHTML;
  const buttonSave =sectionComment.querySelector('.btn-save');
  const buttonEdit =sectionComment.querySelector('.btn-edit');
  const buttonDelete=sectionComment.querySelector('.btn-delete');
  if(contentComment===''){
    editableComment.focus();
  }else{
    editableComment.contentEditable=false;
    buttonSave.classList.add('hide');
    buttonDelete.classList.remove('hide');
    buttonEdit.classList.remove('hide');
    const obj = { message : contentComment};
   await updateComment(nameMovie, idComment, obj)
  }
};


export const likeUser = async (e)=>{
  const sectionLikes = e.currentTarget.parentElement;
  console.log(sectionLikes);
  const like=sectionLikes.querySelector('.btn-like');
  const nameMovie = like.dataset.name;
  const idComment = like.dataset.id;
  const useremail=userActive().email;
  const objArray ={
    email : useremail,
    like_status :'showLikes',
  }
  let objUser={};
  console.log(useremail);
  if(!like.classList.contains('showLikes')){
    objUser={
      usersLike : firebase.firestore.FieldValue.arrayUnion(useremail),
      likeEmail: firebase.firestore.FieldValue.arrayUnion(objArray),
      like_count : firebase.firestore.FieldValue.increment(1)  
    }
  }else{
    objUser={
      usersLike : firebase.firestore.FieldValue.arrayRemove(useremail),
      likeEmail: firebase.firestore.FieldValue.arrayUnion(objArray),
      like_count : firebase.firestore.FieldValue.increment(-1)  
    } 
  }
  await updateComment(nameMovie, idComment, objUser)
}
export const filterStatusLike =(arr, searchKey) =>arr.filter(obj => Object.keys(obj).some(key =>  obj[key] == searchKey));