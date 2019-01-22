let isDone = false;
let ul = $("ul");


$('ul').on("click","li",function(){

  $(this).toggleClass("completed");

  /*if(isDone){
    $(this).css({
      color:"black",
      textDecoration:"none"
    })
    isDone=false;
  }else{
  $(this).css({
    color:"gray",
    textDecoration:"line-through"
  })
  isDone=true;
  }*/

});

$('ul').on("click","span",function(event){

  $(this).parent().fadeOut(1000,function(){
    $(this).remove();
  })
  event.stopPropagation();
});

$("input[type='text']").on("keypress",function(e){
  if(e.which===13){
  let newTodo = $(this).val();
  $(this).val("");
  ul.append("<li><span><i class='fa fa-trash'></i> </span>"+newTodo+"</li>");
  }
});

$('.fa-plus').on("click",function(){
  $("input[type='text']").fadeToggle();
})
