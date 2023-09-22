// 找到所有的轮播图容器
var swiperContainers = document.querySelectorAll(".my-swiper-container");
// 遍历所有的轮播图容器
swiperContainers.forEach(function (swiperContainer) {
	// 找到轮播图
	var swiper = swiperContainer.querySelector(".swiper");
	console.log(swiper);
	// 初始化轮播图
	// 这段代码创建了一个新的 Swiper 实例，用于实现平滑的轮播切换效果。参数配置如下： slidesPerView: 'auto' ：每个视窗显示的幻灯片数量根据容器宽度自动调整。 centeredSlides: true ：设置为true时，活跃的幻灯片将始终位于视窗中心。 spaceBetween: 0 ：表示幻灯片之间的间距为0。
	new Swiper(swiper, {
		slidesPerView: "auto",
		centeredSlides: true,
		spaceBetween: 0,
	});
});
