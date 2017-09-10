/**
 * Created by hua on 2017/7/14.
 */
var arr=['#0aa770','#ff44aa','#7b68ee','#ff8800','#7a0099'];
var change1=document.getElementById('change1');
var bait=document.getElementsByClassName('bait');
var lvyou=document.getElementById('lvyou');
var firstLi=document.getElementById('firstLi');
var deit=document.getElementsByClassName('deit');
var taga=document.getElementsByClassName('changeColor');

//cookie函数
function setCookie(name,value)
{
    var Days = 1;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ value + ";expires=" + exp.toGMTString();
}

//点击换肤
function changeColor(e){
    setCookie('color',e);//设置cookies
    for (n in arr){
        if(e==arr[n]){
            for (var i=0;i<bait.length;i++){
                bait[i].addEventListener('click',function(){
                    //移除导航栏非选中项的样式
                    for (var j=0;j<bait.length;j++) {
                        bait[j].style.backgroundColor='transparent';
                        bait[j].style.color='#333';
                    }
                    //未选中项添加背景色及改变字体颜色
                    this.style.backgroundColor=e;
                    this.style.color='#fff';
                },false);
                bait[i].style.backgroundColor='transparent';
                bait[i].style.color='#333';
            }
            change1.style.borderTopColor=arr[n];
            bait[0].style.backgroundColor=arr[n];
            bait[0].style.color='#fff';

            for (var k=0;k<deit.length;k++){
                deit[k].style.color=arr[n];
            }
            lvyou.style.color=arr[n];

            //添加鼠标移动事件
            for (var h=0;h<taga.length;h++){
                taga[h].addEventListener('mouseover',function(){
                    if(!(this.style.backgroundColor!=''&&this.style.backgroundColor!='transparent')){
                        this.style.color=e;
                    }
                },false);
                taga[h].addEventListener('mouseout',function(){
                    if(!(this.style.backgroundColor!=''&&this.style.backgroundColor!='transparent')){
                        this.style.color='#333';
                    }
                },false)
            }

        }
    }
}

//判断是否设置cookie
if(document.cookie){
    var colorValue=document.cookie.split(';')[0];
    colorValue=colorValue.substr(colorValue.indexOf('#'),colorValue.length-1);
    changeColor(colorValue);
}else{
    changeColor(arr[0]);
}

//input输入框自动聚焦
document.getElementById('search').focus();
var itemList=document.getElementById('itemList')
var showList=document.getElementById('show')
showList.addEventListener('click',isShow,false);

//显示隐藏条目
function isShow(){
    if(itemList.style.display=='block'){
        itemList.style.display='none';
    }else{
        itemList.style.display='block';
    }
}