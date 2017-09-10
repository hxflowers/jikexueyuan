var screen=document.getElementById("screen");
var re=document.getElementById('result');
var a=document.getElementsByClassName('char');
var b=document.getElementsByClassName('cnum');
var genhao=document.getElementById('gen');
var i,j;
function addHandler(){
    if(screen.addEventListener){
        for (i=0;i< a.length;i++){
            a[i].addEventListener('click',char,false);
        }
        for (j=0;j< b.length;j++){
            //console.log(arrNum[j]);
            b[j].addEventListener('click',num,false);
        }
        re.addEventListener('click',result,false);
        genhao.addEventListener('click',gen,false);
    }else if(screen.attachEvent()){
        for (i=0;i< a.length;i++){
            a[i].attachEvent('click',char);
        }
        for (j=0;j<23;j++){
            b[j].attachEvent('onclick',num);
        }
        re.attachEvent('click',result);
        genhao.attachEvent('click',gen);
    }else{
        for (i=0;i< a.length;i++){
            a[i].onclick=char;
        }
        for (j=0;j<23;j++){
            b[j].onclick=num;
        }
        re.onclick=result;
        genhao.onclick=gen;
    }
}
//计算结果
function result(){
    var count;
    var shu1=Number(document.getElementById('shu1').innerHTML);
    var shu2=document.getElementById('shu2').innerHTML;
    var shu3=Number(document.getElementById('shu3').innerHTML);

    //操作数或操作符为空返回false
    if((shu1=='')|| (shu2=='')|| (shu3==='')){
        return false;
    }

    //计算
    if(shu2=='÷'){
        if(shu3===0){
            alert('除数不能为0！')
            count='NAN';
        }else{
            count=parseFloat((shu1/shu3).toFixed(2));
        }
    }else if(shu2=='×'){
        count=parseFloat((shu1*shu3).toFixed(2));
    }else if(shu2=='+'){
        count=parseFloat((shu1+shu3).toFixed(2));
    }else if(shu2=='-'){
        count=parseFloat((shu1-shu3).toFixed(2));
    }

    //写入结果
    var shu4=document.getElementById('shu4').innerHTML='='+count;
}

//获取输入的数字
function num(){
    var idName=this.getAttribute('id');
    document.getElementById('shu4').innerHTML='';
    var shu2=document.getElementById('shu2').innerHTML;
    var num=document.getElementById(idName).innerHTML

    //判断是否输入操作符，输入操作符则进行第二个操作数的写入
    if(shu2){
        var strnum=document.getElementById('shu3').innerHTML;

        //判断输入0时不可继续输入0
        if(strnum=='0'&&num=='0'){
            return false;
        }
        //无任何数字时，输入小数点自动在小数点前面加上0
        if(idName=='num10'&&(strnum==''||strnum=='-')){
            num='0'+num;
        }

        //一个操作数中不能输入多个小数点
        if(strnum.indexOf('.')>-1&&idName=='num10'){
            document.getElementById('shu3').innerHTML=strnum;
        }else{
            document.getElementById('shu3').innerHTML=strnum+num;
        }
    }else{
        var strnum=document.getElementById('shu1').innerHTML;
        if(strnum=='0'&&num=='0'){
            return false;
        }
        //无任何数字时，输入小数点自动在小数点前面加上0
        if(idName=='num10'&&(strnum==''||strnum=='-')){
            num='0'+num;
        }
        //一个操作数中不能输入多个小数点
        if(strnum.indexOf('.')>-1&&idName=='num10') {
            document.getElementById('shu1').innerHTML = strnum;
        }else{
            document.getElementById('shu1').innerHTML = strnum + num;
        }
    }
}
function gen(){
    var shu1=Number(document.getElementById('shu1').innerHTML);
    var shu2=document.getElementById('shu2').innerHTML;
    var shu3=Number(document.getElementById('shu3').innerHTML);
    var shu4=document.getElementById('shu4').innerHTML;
    shu4=Number(shu4.substr(1,shu4.length-1));
    if(shu1 && shu2==''){
        document.getElementById('shu1').innerHTML = Math.sqrt(shu1);
    }
    if(shu2 && shu3){
        document.getElementById('shu3').innerHTML = Math.sqrt(shu3);
    }
    if(shu4){
        document.getElementById('shu4').innerHTML='='+ Math.sqrt(shu4);
    }
}
//获取特殊字符
function char(){
    var char=this.getAttribute('id');
    var shu1=document.getElementById('shu1').innerHTML;
    var shu2=document.getElementById('shu2').innerHTML;
    var shu3=document.getElementById('shu3').innerHTML;
    var shu4=document.getElementById('shu4').innerHTML;
    switch(char)
    {
        //点击清空面板初始化为0
        case 'c00':
            document.getElementById('shu1').innerHTML='';
            document.getElementById('shu2').innerHTML='';
            document.getElementById('shu3').innerHTML='';
            document.getElementById('shu4').innerHTML='0';
            break;
        //点击回删最后一个字符，得出结果后点击则面板初始化为0
        case 'c0':
            if(shu4){
                document.getElementById('shu1').innerHTML='';
                document.getElementById('shu2').innerHTML='';
                document.getElementById('shu3').innerHTML='';
                document.getElementById('shu4').innerHTML='0';
            }else if(shu3){
                shu3=shu3.substr(0,shu3.length-1);
                document.getElementById('shu3').innerHTML=shu3;
            }else if(shu2){
                shu2=shu2.substr(0,shu2.length-1);
                document.getElementById('shu2').innerHTML=shu2;
            }else{
                shu1=shu1.substr(0,shu1.length-1);
                if(shu1==''){
                    shu1=0;
                }
                document.getElementById('shu1').innerHTML=shu1;
            }
            break;
        default:
            if(shu1!=''){
                var shu2=document.getElementById(char).innerHTML;
                document.getElementById('shu2').innerHTML=shu2;
            }
    }
}
addHandler();