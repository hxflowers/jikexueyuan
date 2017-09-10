$(document).ready(function () {
	$(window).on('load',function () {
		var dataImg={
			'data':[
				{"src":'1.jpg'},
				{"src":'2.jpg'},
				{"src":'3.png'},
				{"src":'4.jpg'},
				{"src":'5.jpg'},
				{"src":'6.jpg'},
				{"src":'7.jpg'},
				{"src":'8.jpg'},
				{"src":'9.jpg'},
				{"src":'10.jpg'},
				{"src":'11.jpg'},
				{"src":'12.jpg'},
				{"src":'13.jpg'},
				{"src":'14.jpg'},
				{"src":'15.jpg'}
			]
		}
		var conWidth=$(window).width();
		imgLocation(conWidth);
		$(window).on('scroll',function () {
			if(scrollside()){
				$.each(dataImg.data,function (index,value) {
					var box=$('<div>').addClass('box').appendTo($('#container'));
					var content=$('<div>').addClass('content').appendTo(box);
					$('<img>').attr('src',"./images/"+$(value).attr("src")).appendTo(content);
				});
				imgLocation(conWidth);
			}
		})
	})
});


//窗口大小发生改变时,图片重新排列,实现响应式布局。。。。。。。。问题:当窗口缩小后在放大时图片不能正常排列
	$(window).resize(function () {
		var conWidth1=$(window).width();
		imgLocation(conWidth1);
	})

//判断是否加载
function scrollside() {
	var box=$('.box');
	var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
	var documentHeight=$(window).height();
	var scrollHeight=$(window).scrollTop();
	return (lastboxHeight<documentHeight+scrollHeight)?true:false;
}

//对图片进行布局
function imgLocation(conWidth) {
	var box=$('.box');
	var boxWidth=box.eq(0).width();
	var num=Math.floor(conWidth/boxWidth);
	var boxArr=[];
	box.each(function (index,value) {
		var boxHeight=box.eq(index).height();
		if(index<num){
			boxArr[index]=boxHeight;
			$(value).css({
				'position':'absolute',
				'top':0,
				'left':index*boxWidth
			})
		}else{
			var minboxHeight=Math.min.apply(null,boxArr);
			var minboxIndex=$.inArray(minboxHeight,boxArr);
			$(value).css({
				'position':'absolute',
				'top':minboxHeight,
				'left':box.eq(minboxIndex).position().left
			})
			boxArr[minboxIndex]+=box.eq(index).height();
		}
	});
}