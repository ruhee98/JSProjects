//Check off to dos by clicking
$('ul').on("click", "li", function(){ // added li to the entire ul parent, run this code if li is in ul
$(this).toggleClass("completed") ;
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut()(500, function(){//parent gives us the li. and we remove the li
       $(this).remove(); //when fade out is done we remove the li. 
     }); 
    event.stopPropagation(); // stops other listeners after span from bubbling up
});

$("input[type='text'").keypress(function(event){
    if (event.which === 13){
        //grabbing to do list item from input
     var todoText =  $(this).val();

     $(this).val("");
           //create a new li and add to ul
     $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText + "</li>");

    }

});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})
   