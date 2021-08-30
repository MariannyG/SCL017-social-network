import {deleteCommentUser, editCommentUser, filterStatusLike, likeUser, preventSaveEmptyField,updateCommentUser} from "../controllers/comment-controller.js";


export const allComments = (nameMovie,doc, comment) =>{
      const commentView=`<div class ="header-comment">
      <div class= image-user><img src="${comment.photo_user}"></div>
      <div class= "name-user">${comment.name_user}</div>
      <div class="section-likes">
         <div class="count-likes">${comment.like_count}</div>
         <div class="btn-like" id="btn-like-${doc.id}" data-id = "${doc.id}" data-name ="${nameMovie}"><i class="far fa-thumbs-up"></i></div>
      </div>
     </div>
   <div class ="grid-comment">
      <div class= "showComment" id="showComment-${doc.id}" contenteditable="false">${comment.message}</div>
      <div class ="date-post" >${comment.date_post}</div>
      <div class="btn-edit"  data-id = "${doc.id}"><i class="far fa-edit"></i></div>
      <div class="btn-save hide"  data-id = "${doc.id}" data-name ="${nameMovie}"><i class="far fa-save  fa-1x"></i></div>
      <div class="btn-delete" id ="btn-delete-${doc.id}" data-id ="${doc.id}" data-name ="${nameMovie}" ><i class="far fa-trash-alt"></i></div>
   </div>
      `;
      const commentUser=document.createElement('section');
      commentUser.className='section-comment';
      commentUser.innerHTML=commentView;
      const editComment = commentUser.querySelectorAll('.showComment');
      const deleteButtons=commentUser.querySelectorAll('.btn-delete');
      const editButtons=commentUser.querySelectorAll('.btn-edit');
      const commentButtons=commentUser.querySelectorAll('.btn-comment');
      const saveButtons=commentUser.querySelectorAll('.btn-save');
      deleteButtons.forEach(btn => btn.addEventListener('click', deleteCommentUser));
      editButtons.forEach(btn => btn.addEventListener('click',editCommentUser));
      saveButtons.forEach(btn => btn.addEventListener('click',updateCommentUser))
      editComment.forEach(content => content.addEventListener('input',preventSaveEmptyField));
      const likebutton=commentUser.querySelector(`#btn-like-${doc.id}`);
      const likeButtons=commentUser.querySelectorAll('.btn-like');
      const countLikes=commentUser.querySelectorAll('.count-likes');
      likebutton.addEventListener('click',likeUser);

      firebase.auth().onAuthStateChanged((user) => {
            if (user) { 
               const email=user.email; 
               const uid=user.uid;
               if(comment.usersLike.length!== 0 & comment.usersLike.includes(email)){
                 const objStatusLike= filterStatusLike(comment.likeEmail,email);
                 likebutton.classList.toggle(objStatusLike[0].like_status);
               }
               if(uid !== comment.id_user){
                  deleteButtons.forEach(btn => btn.classList.add('hide'));
                  editButtons.forEach(btn => btn.classList.add('hide'));
                }else{
                      deleteButtons.forEach(btn => btn.classList.add('hide'));
                      editButtons.forEach(btn => btn.classList.add('hide'));
                      commentUser.addEventListener('mouseover',()=>{
                            deleteButtons.forEach(btn => btn.classList.remove('hide'));
                            editButtons.forEach(btn => btn.classList.remove('hide'));
                       }) 
                      commentUser.addEventListener('mouseout',()=>{
                            deleteButtons.forEach(btn => btn.classList.add('hide'));
                            editButtons.forEach(btn => btn.classList.add('hide'));
                      }) 
            } 
           }else {
                  deleteButtons.forEach(btn => btn.classList.add('hide'));
                  commentButtons.forEach(btn => btn.classList.add('hide'));
                  editButtons.forEach(btn => btn.classList.add('hide'));
                  likeButtons.forEach(btn => btn.classList.add('hide'));
                  countLikes.forEach(btn => btn.classList.add('hide'));

                 } 
            });
      return commentUser;
}

