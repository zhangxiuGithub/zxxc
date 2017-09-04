// JavaScript Document
$(function(){
     var aSmall = $('.content_middle .table a');
     var aLi = $('.content_middle ul li');
     var iNow = 0;
       //手动切换
     aSmall.mouseover(function(){
		//var n = $(this).index();
        var iNow = $(this).index();
        //alert(iNow); 
        aLi.eq(iNow).stop().animate().css({
          'display':'block'  
        },3000);
		aLi.eq(iNow).siblings().stop().animate().css({
          'display':'none'
        },3000);
         aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');
     });
  // 封装函数体
 function move1(){
      aLi.eq(iNow).siblings().stop().animate().css({
          'display':'none' 
        },3000);
        aLi.eq(iNow).stop().animate().css({
          'display':'block'
        },3000);
        aSmall.eq(iNow).addClass('small_active').siblings().removeClass('small_active');
 } 
 // 定个定时器的初始值
function run2(){ 
      iNow++;
       if(iNow>8){//iNow=n-3
              iNow=0;
         }
       move1();  
} 
// 定时器
 timer = setInterval(run2,3000);
//当鼠标划入，停止轮播图切换
  $(".content_middle").hover(function(){
    	clearInterval(timer);
 },function(){
    timer = setInterval(run2,3000);
 	}) 
})


$(function(){
$(".global").mouseover(function(){
		$(".contry").css("display",'block')
	})
	$(".loge-banner").mouseout(function(){
		$(".contry").css("display",'none')
	})
	
	$(".telphone").mouseover(function(){
		$(".tel").css("display",'block')
	})
	$(".telphone").mouseout(function(){
		$(".tel").css("display",'none')
	})
})
/*手机、微信扫码*/
$(function(){
	$('.iphone').mouseover(function(){
		$('.iphone_next').css('display','block')
		$('.weixin_next').css('display','none')
		})
	$('.weixin').mouseover(function(){
		$('.iphone_next').css('display','none')
		$('.weixin_next').css('display','block')
		})
	$('.lianxi').mouseout(function(){
		$('.iphone_next,.weixin_next').css('display','none')
		})
	})
/*我的携程*/
$(function(){
	$('.mytrip').mouseover(function(){
		$('.mytrip_next').css('display','block')
		})
	$('.mytrip').mouseout(function(){
		$('.mytrip_next').css('display','none')
		})
	})
/*导航部分*/
$(function(){
	var str=$('.base_nav_inner li')
	str.mouseover(function(){
		$(this).addClass('active')
		$(this).siblings().removeClass('active')
		$('.base_nav_list div').eq(str.index(this)).show().siblings().hide()
		})
})

$(function(){
	var str=$('.base_nav_inner li')
	str.mouseover(function(){
		$(this).addClass('act')
		$(this).siblings().removeClass('act')
    $('.base_nav_inner img').eq(str.index(this)).css({'transform':'rotateX(180deg)','transition':'all ease 1s'}).siblings().css({'transform':'rotateX(0deg)','transition':'all ease 1s'})
  });
});
/*轮播上的表格*/
$(function(){
	var str=$('.search_list li')
	str.click(function(){
		$(this).addClass('search_list_hotel')
		$(this).siblings().removeClass('search_list_hotel')
		$('.asa div').eq(str.index(this)).show().siblings().hide()
		})
})
/*特卖会*/
/*二级*/
$(function(){
	var str=$('.sale_nav a')
	str.click(function(){
		$(this).addClass('sale_current')
		$(this).siblings().removeClass('sale_current')
		$('.save_page').eq(str.index(this)).show().siblings().hide()
		})
})
/*三级*/
$(function(){
	var str=$('.product-nav a')
	str.click(function(){
		$(this).addClass('active')
		$(this).siblings().removeClass('active')
		$('.product_left').eq(str.index(this)).show().siblings().hide()
		$('.product_right').show()
		})
})
/*特卖会图片放大*/
$(function(){
	$('.product_page_item img').mouseover(function(){
		$(this).css({transform:'scale(1.1)',transition:'all 0.5s'})
		})
	$('.product_page_item img').mouseout(function(){
		$(this).css({transform:'scale(1.0)',transition:'all 0.5s'})
		})
	})

/*海外酒店*/
/*二级*/
$(function(){
	var str=$('.hotel_btton a')
	str.click(function(){
		$(this).addClass('sale_current')
		$(this).siblings().removeClass('sale_current')
		$('.hotel').eq(str.index(this)).show().siblings().hide()
		$('.hotel_right2').show()
		})
})
/*三级*/
$(function(){
	var str=$('.hotel_btn a')
	str.click(function(){
		$(this).addClass('active')
		$(this).siblings().removeClass('active')
		$('.hotel_left').eq(str.index(this)).show().siblings().hide()
		$('.hotel_right').show()
		})
})

/*海外酒店放大*/
$(function(){
	$('.hotel_left_page img').mouseover(function(){
		$(this).css({transform:'scale(1.1)',transition:'all 0.5s'})
		})
	$('.hotel_left_page img').mouseout(function(){
		$(this).css({transform:'scale(1.0)',transition:'all 0.5s'})
		})
	})
$(function(){
	$('.onload_left_page img').mouseover(function(){
		$(this).css({transform:'scale(1.1)',transition:'all 0.5s'})
		})
	$('.onload_left_page img').mouseout(function(){
		$(this).css({transform:'scale(1.0)',transition:'all 0.5s'})
		})
	})
/*特价机票*/
/*二级*/
$(function(){
	var str=$('.special_ticket_title a')
	str.click(function(){
		$(this).addClass('sale_current')
		$(this).siblings().removeClass('sale_current')
		$('.ticket').eq(str.index(this)).show().siblings().hide()
		})
})
/*国际租车*/
/*二级*/
$(function(){
	var str=$('.rent_title a')
	str.click(function(){
		$(this).addClass('sale_current')
		$(this).siblings().removeClass('sale_current')
		$('.aside_rent').eq(str.index(this)).show().siblings().hide()
		})
})
/*放大*/
$(function(){
	$('.rent_page_list img').mouseover(function(){
		$(this).css({transform:'scale(1.1)',transition:'all 0.5s'})
		})
	$('.rent_page_list img').mouseout(function(){
		$(this).css({transform:'scale(1.0)',transition:'all 0.5s'})
		})
	})
/*切换*/
$(function(){
	$('.taxi').mouseenter(function(){
			$(this).find('.taxi_word').stop().animate({bottom:'-43px'});
			$(this).find('.taxi_top').css({left:'0'})
			$(this).children('.taxi_price').find('.taxi_price_list').css({transform:'scale(1)'})
			$(this).children('.taxi_top').find('.taxi_top_more').css({bottom:'25px'})
		})
		$('.taxi').mouseleave(function(){
			$(this).find('.taxi_word').stop().animate({bottom:'0px'});
			$(this).find('.taxi_top').css({left:'-220px'})
			$(this).children('.taxi_price').find('.taxi_price_list').css({transform:'scale(1.2)'})
			$(this).children('.taxi_top').find('.taxi_top_more').css({bottom:'-20px'})
		})
		
	/*$('.taxi').mouseenter(function(){
		$('.taxi_top').animate({left:"0"})
		$('.taxi_word').animate({bottom:"-43px"})
		$(this).children('.taxi_top').find('.taxi_top_more').css({bottom:'28px'})
		})
	$('.taxi').mouseleave(function(){
		$('.taxi_top').animate({left:"-220px"})
		$('.taxi_word').animate({bottom:"0px"})
		$(this).children('.taxi_top').find('.taxi_top_more').css({bottom:'-20px'})
		})*/
		
	})
/*当地玩乐*/
/*二级*/
$(function(){
	var str=$('.ploy-btn a')
	str.click(function(){
		$(this).addClass('sale_current')
		$(this).siblings().removeClass('sale_current')
		$('.aside_ploy').eq(str.index(this)).show().siblings().hide()
		})
})
/*目的攻略*/
/*二级*/
$(function(){
	var str=$('.guide_btn a')
	str.click(function(){
		$(this).addClass('sale_current')
		$(this).siblings().removeClass('sale_current')
		$('.aside_guide').eq(str.index(this)).show().siblings().hide()
		})
/*鼠标滑到下边上拉*/
$('.rent_page_list').mouseenter(function(){
	$(this).children('.arr_overlay').animate({top:'100px'})
})
$('.rent_page_list').mouseleave(function(){
	$(this).children('.arr_overlay').animate({top:'125px'})
})
})
/*侧边栏*/
$(function(){
	$('.floor_open').click(function(){
		$('.floor_nav').animate({left:'0%'})
		$('.floor_open').animate({left:'-127px'})
	
	$('.floor_close').click(function(){
		$('.floor_nav').animate({left:'-100%'})
		$('.floor_open').animate({left:'0px'})
	})
	
	})
})