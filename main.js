  $(document).ready(function(){
    // Slide up displayed paragraphs
    $(".up-btn").click(function(){
        $("p").slideUp();
    });
    
    // Slide down hidden paragraphs
    $(".down-btn").click(function(){
        $("p").slideDown();
    });
});