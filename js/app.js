




$(function(){
    //slide轮播图
    $('#slides').slidesjs({
        width: 1280,
        height: 600,
        play: {
          active: true,
          auto: true,
          interval: 4000,
          swap: true
        }
    });

    
    //焦点图
    $(".picScroll,.picScroll2").slide({ 
        mainCell:"ul",
        autoPlay:false,
        effect:"left",
        vis:6,
        scroll:1,
        autoPage:true,
        pnLoop:false 
    });
    

})


$(function(){
	
	//高度
//	var same_height = $(".left-box").height();
//	$(".right-box").css("height",same_height);
	
})




//鼠标滑动延迟动画
wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();


