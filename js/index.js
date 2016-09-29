/*** Created by zheng on 2016/3/23.*/
function browserRedirect() {
    var sUserAgent= navigator.userAgent.toLowerCase();
    var bIsIpad= sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs= sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp= sUserAgent.match(/midp/i) == "midp";
    var bIsUc7= sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc= sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid= sUserAgent.match(/android/i) == "android";
    var bIsCE= sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM= sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        window.location.href = "http://m.lomocoin.com"
    }
}
browserRedirect();

//rem通过font-size适配屏幕
$('html').css({'font-size': 100 * ($('html').width()/1920) + 'px'}) ;
function fontsize() {
    if (100 * ($('html').width()/1920) < 55) {
        document.documentElement.style.fontSize = 55 + 'px'
    } 
}
fontsize();
window.onresize=function(){
    $('html').css({'font-size': 100 * ($('html').width()/1920) + 'px'}) ;
    //$('html').css({'font-size': 100 * ($('html').height()/1200) + 'px'}) ;
    fontsize();
    var center = function (ring){
        var width = ring.width();
        var height = ring.height();
        var width1 = ring.parent().width();
        var height1 = ring.parent().height();
        var top = (height1-height)/2;
        var left = (width1-width)/2;
        ring.css({'top':top+'px',left:left+'px'})
    };
    center($('.ring1'));
    center($('.lomocoin'));
    center($('.search img'));
    center($('.open img'));
    center($('.plane img'));
    center($('.ipod'));
    $('.ipod').css({top:'auto','bottom':'0px'});
    var screenWid=document.documentElement.offsetWidth||document.body.offsetWidth;
    if(screenWid<951){
        $('.center_change').css("display","none")
    }else{
        $('.center_change').css("display","block")
    }

};
window.onload = function (){
    $('#div3').css("display","block");

	//swiper实现全屏切换
    var mySwiper = new Swiper('.swiper-container', {
        speed: 800,
        loop: false,
        mode: 'vertical',
        mousewheelControl: true,
        pagination: '.pagination',
        paginationClickable: true,
        initialSlide: 0
    });

    //js实现居中
    var center = function (ring){
        var width = ring.width();
        var height = ring.height();
        var width1 = ring.parent().width();
        var height1 = ring.parent().height();
        var top = (height1-height)/2;
        var left = (width1-width)/2;
        ring.css({'top':top+'px',left:left+'px'})
    };
    center($('.ring1'));
    center($('.lomocoin'));
    center($('.search img'));
    center($('.open img'));
    center($('.plane img'));
    center($('.ipod'));
    $('.ipod').css({top:'auto','bottom':'0px'});
	//提示切换
    $('.hint ul li').on('click',function(){
        var i = $(this).index();
        $(this).removeClass('choice').siblings().addClass('choice');
        $('.hint .center').css({'display':'none'});
        $('.hint .center').eq(i).css({'display':'block'});
    });
    // $(".android,.ios").on('click',function(){
    //     alert("官方提示：内测期请先微信扫描二维码，才可以激活进入游戏！")
    // });
	//浏览器行高适配
    if (!!window.ActiveXObject || "ActiveXObject" in window) {
        $('.lomo h2').css({'line-height':'normal'});
    }
    //键盘点击上下翻页
    $(document).on('keydown',function(e){
        var keycode = e.which ? e.which : e.keyCode;
        if(keycode==33||keycode==38){
            mySwiper.swipePrev();
        }else if(keycode==34||keycode==40||keycode==32){
            mySwiper.swipeNext();
        }
    });
    //头部导航点击
    $('.head .center li').on('click',function(){
        var i = $(this).index();  
        if(i>=2){
        	mySwiper.swipeTo(i+1)
        }else{
        	mySwiper.swipeTo(i)
        }
    });
    //点击公告问题返回首页到page6
    $('.page6 .left .title .rl,.page6 .left li,.page6 .right .title .rl,.page6 .right li').on('click',function(){
    	sessionStorage.setItem("key",1);
    });
    if(sessionStorage.getItem("key")==1){
    	mySwiper.swipeTo(5);
    	sessionStorage.setItem("key", "");
    }
};


