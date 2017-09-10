function result(){
    var num= document.getElementById('num').value
    var reg=/^([0-9]{1,2}|100)$/;
    if(reg.test(num)){
        switch (Math.floor(num/10))
        {
            case 10:
            case 9: level="一等生";
                break;
            case 8:level="二等生";
                break;
            case 7:level="三等生";
                break;
            case 6: level="四等生";
                break;
            case 5:level="五等生";
                break;
            case 4:level="六等生";
                break;
            case 3:level="七等生";
                break;
            case 2:level="八等生";
                break;
            case 1:level="九等生";
                break;
            default: level='十等生';
        }
        document.getElementById('result').innerHTML='结果：'+level;
    }else{
        alert('请输入0-100的正整数！');
    }
}