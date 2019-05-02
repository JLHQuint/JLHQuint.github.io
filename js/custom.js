$("li.breadcrumb-item").on("click",function(event){
    var oldClick = $(this);
    $(this).addClass("active").siblings().removeClass("active");
});