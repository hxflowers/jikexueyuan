function showDetail(){
    var orgArr=["a","x","b","d","m","m","a","k","m","p","j","a"];
    var newArr={};
    var maxKey='',maxValue= 1,strIndex='',maxArr=[];;

    //统计每个字母及出现的次数，以键值对的形式存入到新数组中
    for (var i=0;i<orgArr.length;i++){
        if(newArr[orgArr[i]]){
            newArr[orgArr[i]]+=1;
        }else{
            newArr[orgArr[i]]=1;
        }
    }

    //在新数组中遍历寻找出值最大的键值对
    for (var k in newArr){
        if(newArr[k]>maxValue){
            maxValue=newArr[k];
        }
    }

    //查找出现次数最多的字母
    for (var n in newArr){
        if(newArr[n]==maxValue){
            maxArr.push(n);
        }
    }

    //查找出现次数最多字母的索引下标
    for (var h=0;h<maxArr.length;h++){
        maxKey +=maxArr[h]+',';
        strIndex+=""+maxArr[h]+'：';
        for (var j=0;j<orgArr.length;j++){
            if(orgArr[j]==maxArr[h]){
                strIndex+=j+','
            }
        }
        strIndex=strIndex.substr(0,strIndex.length-1);
        strIndex+="&nbsp;&nbsp;&nbsp;";
    }
    maxKey=maxKey.substr(0,maxKey.length-1);
    document.getElementById('result').innerHTML="出现次数最多的字母："+maxKey+"<br/>出现的总次数："+maxValue+"<br/>索引下标分别是："+strIndex;
}