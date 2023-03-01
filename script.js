
const buttonDislike = document.querySelector(".heartroto-btn");
const buttonLike = document.querySelector(".heart-btn");
let likeIcon = document.querySelector(".like");

let likeCount = document.querySelector('#likeCount');
let dislikeCount = document.querySelector('#dislikeCount');

$(document).ready(function(){
  $(".heart-btn-content").click(function(){
      $(".heart-btn-content").toggleClass("heart-active")
      $(".like").toggleClass("heart-active")
      $(".heart").toggleClass("heart-active")
  })
});

$(document).ready(function(){
  $(".heartroto-btn-content").click(function(){
      $(".heartroto-btn-content").toggleClass("heart_roto-active")
      $(".heartroto").toggleClass("heart_roto-active")
      $(".dislike").toggleClass("heart_roto-active")
  })
});

function count(){
  likeCount.value = parseInt(likeCount.value) + 1;
}

function count1(){
  dislikeCount.value = parseInt(dislikeCount.value) + 1;
}

