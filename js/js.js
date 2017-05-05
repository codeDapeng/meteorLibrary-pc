$(document).ready(function () {
   $(window).resize(function(){

		$(".login_cover .login_con").css({"margin-top":(window.innerHeight-$(".login_cover .login_con").height())/2+"px"});
	})


	$(".login").on("click",function(){
		var str='<div class="login_cover">'+
		'<div class="login_con">'+
			'<img src="images/cha.png" alt="" class="cha"/>'+
			'<img src="images/logoname.png" alt="" class="lg"/>'+
			'<p class="choice"><span class="s1"></span>选择登陆方式<span class="s2"></span></p>'+
			'<ul>'+
				'<li>'+
					'<a href="#">'+
						'<img src="images/a1.png" alt="" class="img1" />'+
						'<img src="images/a.png" alt="" class="no img2" />'+
					'</a>'+
					'<p>QQ登陆</p>'+

				'</li>'+
				'<li>'+
					'<a href="#">'+
						'<img src="images/b1.png" alt="" class="img1" />'+
						'<img src="images/b.png" alt="" class="no img2" />'+
					'</a>'+
					'<p>微信登陆</p>'+
				'</li>'+
				'<li>'+
					'<a href="#">'+
						'<img src="images/c1.png" alt="" class="img1" />'+
						'<img src="images/c.png" alt="" class="no img2" />'+
					'</a>'+
					'<p>微博登陆</p>'+
				'</li>'+
			'</ul>'+
		'</div>'+
	'</div>';
		$("body").append(str);


		$(".login_cover .login_con ul li").hover(function(){
			$(this).find(".img1").addClass("no").siblings().removeClass("no");
		},function(){
			$(this).find(".img1").removeClass("no").siblings().addClass("no");
		});

		$(".login_cover .login_con .cha").on("click",function(){
			$(".login_cover").hide();
		});

		$(".login_cover .login_con").css({"margin-top":(window.innerHeight-$(".login_cover .login_con").height())/2+"px"});
	});
});
