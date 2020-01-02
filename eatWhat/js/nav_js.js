//模拟后台数据
	var hotFood = [{name: "麻辣烫", number: 121},
						{name: "兰州拉面", number: 119},
						{name: "麻辣香锅", number: 115},
						{name: "麦当劳", number: 114},
						{name: "黄焖鸡米饭", number: 113},
						{name: "煲仔饭", number: 112},
						{name: "火锅", number: 111},
						{name: "炸鸡", number: 110},
						{name: "沙县小吃", number: 109},
						{name: "凉皮", number: 108},
						{name: "螺蛳粉", number: 106},
						{name: "寿司", number: 105},
						{name: "泡面", number: 104},
						{name: "盖浇饭", number: 103},
						{name: "汉堡", number: 101},
						{name: "肉夹馍", number: 100},
						{name: "水饺", number: 88},
						{name: "炒饭", number: 85},
						{name: "米线", number: 84},
						{name: "披萨", number: 83},
						{name: "包子", number: 81},
						{name: "酸菜鱼", number: 80},
						{name: "烧烤", number: 76},
						{name: "卤肉饭", number: 75},
						{name: "快餐", number: 74},
						{name: "冒菜", number: 70},
						{name: "驴肉火烧", number: 65},
						{name: "卤煮", number: 60},
						{name: "牛肉面", number: 55},
						{name: "轻食套餐", number: 73}];
		
		function compare(property) {
			return function(a, b) {
				var val1 = a[property];
				var val2 = b[property];
				return val2 - val1;
			};
		}
		hotFood.sort(compare('number'));
//导航栏对应的各页面div的id名称，和导航栏顺序一样.
var con = ['#zwEatWhat','#createEatWhat','#allEatWhat','#whatBestEat','#aboutUs','#subWindow'];
//-----------------------------------------------------------------------//		
$(function () {
	$("#main a").mouseover(function () {
		$(this).parent().siblings('li').children().removeClass('ff9900');
		$(this).addClass('ff9900');
	}).mouseout(function () {
		var index = $(this).parent().index();
		var isHide = $(".content div:eq("+index+")").is(':hidden');
		if (isHide) {
			$("#main a").removeClass('ff9900');
		}
	}).click(function () {
		var index = $(this).parent().index();
		$(con[index]).siblings('div').hide();
		$(con[index]).show();
		
		var hasLi = $("#listOne>li").length === 0;
		if(index === 3 && hasLi) {
			//<li><span class="hotListOrder">1</span><span class="hotListName">麻辣烫</span><span class="hotListChar">X</span><span class="hotListNum">121</span></li>
			for(var i = 0; i < 10; i++) {
				function iAdd10(n) {
					var liObj = $("<li><span class='hotListOrder'>"+n+"</span><span class='hotListName'>"+hotFood[n].name+"</span><span class='hotListChar'>X</span><span class='hotListNum'>"+hotFood[n].number+"</span></li>");
					return liObj;
				}
				var liObj = iAdd10(i);
				$("#listOne").append(liObj);
				liObj = iAdd10(i + 10);
				$("#listTwo").append(liObj);
				liObj = iAdd10(i + 20);
				$("#listThree").append(liObj);
				
				
			}
		}
	});
	//解绑登录注册按钮的鼠标滑入、滑出和点击事件(颜色改变等导航栏事件)
	$("#sub").off();
	
	$("#zwEatWhat_bnt").click(function () {
		if($(this).val() === '开始') {
			$(this).val('停止');
			var foods = Object.keys('number');
			console.log(foods);
		}else{
			$(this).val('开始');
		}
	});
});