$(function() {
    if(localStorage.skin12){
        $('.mimg').attr('src',localStorage.skin12);
        $('.xlimg').attr('src',localStorage.skin12);
    }

    //当浏览器窗口过小是背景图片不随窗口的变化而变化
    if($(window).width()>600){
        $('.bgimg').width($(window).width())
    }else{
        $('.bgimg').width('600px');
    }
    if($(window).height()>600){
        $('.bgimg').height($(window).height());
    }else{
        $('.bgimg').height('600px');
    }
    $(window).resize(function(){
        if($(window).width()>600){
            $('.bgimg').width($(window).width());
        }
        if($(window).height()>600){
            $('.bgimg').height($(window).height());
        }
    });
   /* 显示天气*/
    $('.show-w').hover(function(){
        $('.wesan').show();
        $('.weather').show();
    },function(){
        $('.wesan').hide();
        $('.weather').hide();
    });

    //换肤
    $('.smimg').click(function(){
        var strsrc=$(this).attr('src');
        $('.mimg').attr('src',strsrc);
        $('.xlimg').attr('src',strsrc);
        localStorage.skin12=strsrc;
    });
    //显示皮肤选择框
    $('.show-skin').click(function(){
        $('.changSkin').show();
    });

    //收起皮肤选择框
    $('.close').click(function(){
        $('.changSkin').hide();
    });

    //点击查看我的股票
    var flag=true;
    $('.gupiao').click(function() {
        if(flag){
            $(this).find('i').css('transform', 'rotate(90deg)');
            $('.mine').show();
            flag=false;
        }else{
            $(this).find('i').css('transform', 'rotate(0deg)');
            $('.mine').hide();
            flag=true;
        }
    });

    //回到页面顶部
    $(window).scroll(function() {
        if($(window).scrollTop() > 10) {
            $(".top").show();
            $(".top").click(function() {
                $("body").animate({scrollTop:0}, 0);
            });
        }else {
            $(".top").hide();
        }

        //显示顶部输入框
        if($(window).scrollTop() > 200) {
            $(".finput").show();
        }else {
            $(".finput").hide();
        }
    });

    function cshow(obj){
        var targ=$(obj);
        $(this).addClass('tabStyle').siblings().removeClass('tabStyle');
        targ.show().siblings().hide();
    }

    $('.tab1').click(function() {
        $(this).addClass('tabStyle').siblings().removeClass('tabStyle');
        $('.user').show().siblings().hide();
    });
    $('.tab2').click(function() {
        $(this).addClass('tabStyle').siblings().removeClass('tabStyle');
        $('.tiyu').show().siblings().hide();
    });
    $('.tab3').click(function() {
        $(this).addClass('tabStyle').siblings().removeClass('tabStyle');
        $('.daohang').show().siblings().hide();
    });
})