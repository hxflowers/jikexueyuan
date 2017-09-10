/**
 * Created by hua on 2017/9/3.
 */
    //使用了单例模式

    /*本文件的js主要是一些绑定事件的处理，没有太复杂的业务逻辑及复杂的对象。
    所以没必要使用工厂模式，故而使用了单例模式。*/

   /* 使用单例模式的好处：1.尽可能的减少全局变量的污染（这样做的目的是将整个js当成一个对象，
        这样暴露在外的全局变量就只有index这一个命名，
        不像我们平常写直接写很多函数，这都是对全局空间的一种污染，
        一旦项目中别人也取了同样的名称，就容易出问题。）

        2.方便维护管理js，可以对index内部进行划分模块，可以按照页面划分，也可以按照具体功能模块划分。*/

var index={
    init:function(){
        var baidu=this;
        var obj;
        baidu.load();
        baidu.cshow(obj);
        baidu.render();
        baidu.bind();
    },
    flag:true,
    load:function(){
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
    },
    render:function(){
        var me=this;
        me.btn=$('#btn');
        me.smimg=$('.smimg');
        me.showw=$('.show-w');
        me.showskin=$('.show-skin');
        me.close1=$('.close');
        me.gupiao=$('.gupiao');
        me.scoll=$(window);
        me.tab1=$('.tab1');
        me.tab2=$('.tab2');
        me.tab3=$('.tab3');
    },
    cshow:function(obj){
        var targ=$(obj);
        $(this).addClass('tabStyle').siblings().removeClass('tabStyle');
        targ.show().siblings().hide();
    },

    bind:function(){
        var me=this;
        me.btn.click(function(){

        });
        //换肤
        me.smimg.click(function(){
            var strsrc=$(this).attr('src');
            $('.mimg').attr('src',strsrc);
            $('.xlimg').attr('src',strsrc);
            localStorage.skin12=strsrc;
        });
        /* 显示天气*/
        me.showw.hover(function(){
            $('.wesan').show();
            $('.weather').show();
        },function(){
            $('.wesan').hide();
            $('.weather').hide();
        });
        //显示皮肤选择框
        me.showskin.click(function(){
            $('.changSkin').show();
        });
        //收起皮肤选择框
        me.close1.click(function(){
            $('.changSkin').hide();
        });
        me.gupiao.click(function() {
            if(me.flag){
                $(this).find('i').css('transform', 'rotate(90deg)');
                $('.mine').show();
                me.flag=false;
            }else{
                $(this).find('i').css('transform', 'rotate(0deg)');
                $('.mine').hide();
                me.flag=true;
            }
        });
        me.tab1.click(function(){
            $(this).addClass('tabStyle').siblings().removeClass('tabStyle');
            $('.user').show().siblings().hide();
        });
        me.tab2.click(function(){
            $(this).addClass('tabStyle').siblings().removeClass('tabStyle');
            $('.tiyu').show().siblings().hide();
        });
        me.tab3.click(function(){
            $(this).addClass('tabStyle').siblings().removeClass('tabStyle');
            $('.daohang').show().siblings().hide();
        });
        me.scoll.scroll(function() {
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
    }
};
index.init();