$(document).ready(function(){
    $("#sUp").click(function(){
       $("#add").slideUp("fast"); 
        return false;
    });
    $("#sDown").click(function(){
        $("#add").slideDown("slow");
        return false;
    })
})