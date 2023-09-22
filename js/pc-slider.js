
var swiperContainers = document.querySelectorAll(".my-swiper-container");
swiperContainers.forEach(function (swiperContainer) {
	var swiper = swiperContainer.querySelector(".swiper");
	new Swiper(swiper, {
		slidesPerView: 4,
		spaceBetween: 0,
		navigation: {
			nextEl: "div.swiper .swiper-button-next",
			prevEl: "div.swiper .swiper-button-prev",
		},
	});
	// 找按钮
	var mapNextBtn = swiperContainer.querySelector("div.button-map.swiper-button-next");
	var mapPrevBtn = swiperContainer.querySelector("div.button-map.swiper-button-prev");
	var nextBtn = swiperContainer.querySelector("div.swiper .swiper-button-next");
	var preBtn = swiperContainer.querySelector("div.swiper .swiper-button-prev");
	// 映射点击事件
	mapNextBtn.onclick = function () {
		// 判断按钮是否可用
		if (nextBtn.getAttribute("aria-disabled") === "true") {
			mapNextBtn.classList.add("aria-disabled");
			return false;
		}
		// 点击按钮
		nextBtn.click();
		// 上一个按钮一定是可用的
		mapPrevBtn.classList.remove("aria-disabled");
		// 点完之后, 再判断, 如果按钮不可用, 就加上aria-disabled
		if (nextBtn.getAttribute("aria-disabled") === "true") {
			mapNextBtn.classList.add("aria-disabled");
		}
	};
	mapPrevBtn.onclick = function () {
		// 判断按钮是否可用
		if (preBtn.getAttribute("aria-disabled") === "true") {
			mapPrevBtn.classList.add("aria-disabled");
			return false;
		}
		// 点击按钮
		preBtn.click();
		// 下一个按钮一定是可用的
		mapNextBtn.classList.remove("aria-disabled");
		// 点完之后, 再判断, 如果按钮不可用, 就加上aria-disabled
		if (preBtn.getAttribute("aria-disabled") === "true") {
			mapPrevBtn.classList.add("aria-disabled");
		}
	};
});
