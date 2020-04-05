// 轮播图
var $banner = $("#banner");
var $imgs = $("#imgs ul li");
var $chart = $("#chart ul li");
// 定义length
var length = $imgs.length;
// 信号量
idx = 0;
// 定义定时器
var timer = setInterval(rightBtn, 2000);
// 鼠标进入停止定时器
$banner.mouseenter(function() {
	clearInterval(timer);
})
// 鼠标离开开启定时器
$banner.mousemove(function() {
	clearInterval(timer)
	timer = setInterval(rightBtn, 2000);
});

// 模拟定义右按钮事件
function rightBtn() {
	// 放流氓
	if ($imgs.is(":animated")) {
		return
	}
	// 当前图片淡出
	$imgs.eq(idx).fadeOut(1000);
	idx ++;
	// 边界判定
	if (idx > length -1 ) {
		idx = 0
	}
	$imgs.eq(idx).fadeIn(1000);
	$chart.eq(idx).addClass("cur").siblings().removeClass("cur");
}
// 小圆点事件
$chart.mouseenter(function() {
	// 当前图片消失
	$imgs.eq(idx).stop(true).fadeOut(600);
	// 改变信号量
	idx = $(this).index()
	$imgs.eq(idx).stop(true).fadeIn(600);
	// 添加cur类名
	$(this).addClass('cur').siblings().removeClass('cur')
});

// 新闻动态
var $news_a = $("#news_a li");
var $leftBtn = $("#leftBtn");
var $rightBtn = $("#rightBtn");
var length_len = $news_a.length;
console.log(length_len)
var len = 0;
// 右点击事件
$rightBtn.click(function() {
	if ($news_a.is(":animated")) {
		return
	}
	$news_a.eq(len).fadeOut(600, function() {
		console.log('len是' + len )
		len++;
		console.log(len)
		if (len > length_len - 1) {
			len = 0;
		}
		$news_a.eq(len).fadeIn(600);
	})
});

// 左按钮事件
$leftBtn.click(function() {
	if ($news_a.is(":animated")) {
		return
	}
	$news_a.eq(len).fadeOut(600, function() {
		console.log('选中' + len )
		len --;
		console.log(len)
		if(len < 0) {
			len = length_len - 1;
		}
		$news_a.eq(len).fadeIn(600)
	})
});
























