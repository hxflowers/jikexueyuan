var screening=document.getElementById("screening");
var arrNum=[], i, j,operaChar='',operanum1= 0,operanum2= 0,flagezf1=true,flagezf2=true;
var test1=1;
function test(){

    test1=test1+1;
    alert(test1);
}
alert(test1);
alert('www');
for (i=1;i<24;i++){
    var indexNum='num'+i;
    var indexNum=document.getElementById(indexNum);
    arrNum.push(indexNum);
}

function addHandler(){
    if(screening.addEventListener){
        for (j=0;j<23;j++){
            //console.log(arrNum[j]);
            arrNum[j].addEventListener('click',operation,false);
        }
    }else if(screening.attachEvent()){
        for (j=0;j<23;j++){
            arrNum[j].attachEvent('onclick',operation);
        }
    }else{
        for (j=0;j<23;j++){
            arrNum[j].onclick=operation;
        }
    }
}
function operation(){
    var inputValue=this.getAttribute('id');
    switch (inputValue){
        case 'num1':
            var scrstr=screening.innerHTML;
            if(scrstr){
                scrstr=scrstr.substr(0,scrstr.length-1);
                screening.innerHTML=scrstr;
            };
            break;
        case 'num2':
        case 'num3':
            screening.innerHTML='';
            break;
        case 'num4':
            zhengfu();
            break;
        case 'num5':
            daoshu();
            break;
        case 'num10':
            baifen();
            break;
        case 'num15':
            qren();
            break;
        case 'num9':
        case 'num14':
        case 'num19':
        case 'num22':
            caozuofu();
            break;
        case 'num23':
            calculate();
            break;
        default:
            operaNum();
    }
}
function zhengfu(){
   if(operaChar&&operanum2!==0){
       flagezf1=!flagezf1;
       return -operanum2;
   }else if(operanum1!==0){
       flagezf2=!flagezf2;
       return -operanum1;
   }
}
//addHandler();