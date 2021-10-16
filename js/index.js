
let aboutOffset =$("#about").offset().top;
$(window).scroll(function (){

    let wScroll=$(window).scrollTop();
    if(wScroll > aboutOffset){
     $("#main-nav").css("backgroundColor","rgba(0,0,0,0.6");
     $("#btnUp").fadeIn(500);
    }
    else{
        $("#main-nav").css("backgroundColor","transparent");
     $("#btnUp").fadeOut(500);
    }
})
$("#btnUp").click(function(){
    $("html,body").animate({scrollTop:0},2000);

});
$("a[href^='#']").click(function (e){
    let aHref=$(e.target).attr('href');
    let sectionOffset=$(aHref).offset().top
    $("html,body").animate({scrollTop:sectionOffset},2000)

})
$(document).ready(function(){
  

    $("#loading").fadeOut(1000,function(){
        $("body").css("overflow" ,"auto" ,function(){
            $("#loading").remove()
        } )
        
    })


   

})
// color box 

// مش راضيه تشتغل 
$("#ToggleBtn").click(function(){

let BoxWidth=$(".colors-box").outerWidth();

    $(".colors-box").animate({left:`-${BoxWidth}`} , 1000);

    if($(".colors-box").css("left") == "0px") 
    {
        $(".colors-box").animate({left:`-${BoxWidth}`} , 1000);
    }
    else{
        $(".colors-box").animate({left:`0px`} , 1000)
    }


})