$(function(){

   /* 头部导航栏子菜单展示*/
    $('nav>ul>li').hover(function(){
        $(this).addClass('fc35b558').addClass('cursor');
        $(this).children('.submenu').show()
    },function(){
        $(this).removeClass('fc35b558').addClass('cursor');
        $(this).children('.submenu').hide()
    })
    $('.loginlist').hover(function(){
        $(this).children('.submenu').show()
    },function(){
        $(this).children('.submenu').hide()
    });

    /*列表鼠标滑过图片透明层覆盖图片*/
    $('.desc').hover(function(){
        $(this).find('.fuimg').show();
        $(this).find('.desc-show').stop(true,true).slideDown(300);
    },function(){
        $(this).find('.fuimg').hide();
        $(this).find('.desc-show').stop(true,true).slideUp(300);
    });
    $('.list').hover(function(){
        $(this).find('.fuimg1').show();
    },function(){
        $(this).find('.fuimg1').hide();
    });

    /*点击切换展示内容列表*/
    $('.list-icon>.icon').click(function(){
        $('.list1').hide();
        $('.list').show();
    });
    $('.kuai-icon>.icon').click(function(){
        $('.list').hide();
        $('.list1').show();
    });

    /*点击展示或隐藏搜索框*/
    $('#search-btn').click(function(){
        $('.ban-main').hide();
        $('.ban-s').show();
    });
    $('.close').click(function(){
        $('.ban-main').show();
        $('.ban-s').hide();
    });

    /*左边导航鼠标滑过样式*/
    $('.rban>ul>li').hover(function(){
        $(this).find('.itemPan').show();
    },function(){
        $(this).find('.itemPan').hide();
    });

    $('.lbottom>li').hover(function(){
        $(this).find('.show-all').show();
        $(this).css('background-color','#f5f5f5')
    },function(){
        $(this).find('.show-all').hide();
        $(this).css('background-color','#fff')
    });

    $('.list-show>li').hover(function(){
        $(this).find('.item-show').show();
        $('.list-show>li').css('border-right','solid 1px #ebebeb');
        $('.list-title').css('border-right','solid 1px #ebebeb');
        $(this).css({'border-left':'solid 1px #ebebeb','border-right':'none', 'box-shadow': '0 2px 2px #ddd'});
        $(this).child('div').removeClass('list-show>li>div');
    },function(){
        $(this).find('.item-show').hide();
        $('.list-show>li').css('border-right','solid 1px #35b558');
        $('.list-title').css('border-right','solid 1px #35b558');
        $(this).css({'border-left':'solid 1px #35b558','border-right':'solid 1px #35b558', 'box-shadow': '0 0px 0px transparent'})
        $(this).child('div').addClass('list-show>li>div');
    });
    /*页面回到顶部事件*/
    $(window).scroll(function() {
        var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
        console.log(scrollY);
        if (scrollY > 10) { //如果滚动距离大于550px则隐藏，否则删除隐藏类
            $('.gotop .top').show();
            $('.top').click(function() {
                window.scrollTo(0,0);
            });
        }else {
            $('.gotop .top').hide();
        }
    });
})