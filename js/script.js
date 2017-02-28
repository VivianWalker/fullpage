window.onload=function(){
	var nav=document.getElementsByTagName("ul")[1],
	    aLi=nav.getElementsByTagName("li"),
	    aside=document.getElementById("aside"),
	    sections=document.getElementById("sections"),
	    section=document.getElementsByClassName("section"),
	    photos=document.getElementById("photos"),
	    photo=photos.getElementsByClassName("photo"),
	    mask=document.getElementsByClassName("mask"),
	    img=photos.getElementsByTagName("img"),
	    article=document.getElementById("article"),
	    close=document.getElementById("close"),
	    artTitle=document.getElementById("artTitle"),
	    artImg=document.getElementById("artImg"),
	    artText=document.getElementById("artText"),
	    artAddress=document.getElementById("artAddress"),

	    screenH=document.body.clientHeight,
	    screenW=document.body.clientWidth,
	    oNum=section.length,
	    oNum2=photo.length,
	    proWidth=document.getElementById("proWidth"),

	    scrollUl=document.getElementsByTagName("ul")[0],
	    scrollLi=scrollUl.getElementsByTagName("li"),
	    first=document.getElementById("first"),
	    second=document.getElementById("second"),
	    third=document.getElementById("third");
	var btn=true;
	var firstPosX=0;
	var secondPosX=0;
	var thirdPosX=0;
	var liNum=0;
	// sections.style.top=-screenH*2+"px";
	for(var i=0;i<oNum;i++){
		section[i].style.height=screenH+"px";
		aLi[i].index=i;
		aLi[i].onclick=function(){
			for(var j=0;j<oNum;j++){
				aLi[j].className="";
			}
			proWidth.style.height=this.index*100+"px";
			sections.style.top=-screenH*this.index+"px";
			this.className="active";
		}
	}

	for(var i=0;i<oNum2;i++){
		photo[i].index=i;
		photo[i].onclick=function(){
			photos.style.width="40%";
			article.style.width="59%";
			article.style.display="block";
			for(var j=0;j<photo.length;j++){
				photo[j].style.width="50%";
				photo[j].style.height="33.3%";
				img[j].style.border="7px solid #fff"
			}
		}
	}
	close.onclick=function(){
		for(var j=0;j<oNum2;j++){
			photo[j].style.width="33.3%";
			photo[j].style.height="50%";
			img[j].style.border="15px solid #fff";
		}
		photos.style.width="100%";
		article.style.width="0";
		article.style.display="none";
	}
	for(var i=0;i<oNum2;i++){
		mask[i].index=i;
		mask[i].onclick=function(){
			artTitle.innerHTML=articles[this.index].title;
			artImg.src=articles[this.index].image;
			artText.innerHTML=articles[this.index].text;
			artAddress.innerHTML=articles[this.index].address;
		}
	}
	var articles=
	[
		{"title":"燕塞湖——水底见青山",
		"image":"images/photo1.png",
		"text":"燕塞湖亦称石河水库，是山海关这座军事要塞的一道天堑，隋、唐、辽、金时期的民族军事冲突多发生在这里。明末农民起义军领袖李自成率20万大军与明蓟辽总兵吴三桂和清将多尔衮大战在石河两岸；北洋时期的两次直奉战争也发生在这里；1933年1月，日本侵略军进攻华北，爱国将领何柱国将军奋起抗战也在这里。而今燕塞湖，宛如画境，沿岸悬崖峭壁千姿百态、惟妙惟肖，自然景观星罗棋布，苍松翠柏、野杏山桃，映入水中如翠如碧，蕴尽诗情画意，素有北方“小桂林”、“小三峡”之美称。燕塞湖风景区内有鸟语林一座，是游览和观赏鸟类表演的休闲乐园，这里放养着黑天鹅、丹顶鹤等百余种二千多只珍稀鸟类，具有较高的观赏价值和趣味性。<br>燕塞湖不仅富有佳山丽水，更有奇石异景，她像一颗瑰丽的明珠镶嵌在古老的长城边。洞山剑峰是燕塞湖内的湖心小岛，石河两支涧水汇于山前，形成深潭，其上半壁悬崖，青峰峭拔，山腰有一天然石洞，深不可测，常有蛇蟒出没。洞窟下绝壁濒临深渊，旁有樵夫小径可通山顶，传说石洞是吕洞宾斗苍龙之时，苍龙钻山撞击而成。燕塞湖内有一半岛，形如一弯新月，岛下湖水如镜。在湖中望岛呈半圆形，山影倒悬，月色幽静；形影合一，恰恰构成一个圆形。坐上游船，沿河道逆流而上，大有“山重水复疑无路，柳暗花明又一村”之感，令人流连忘返。",
		"address":"从秦皇岛市区打车前往燕塞湖景区约30元，也可乘坐公交到山海关区，然后乘坐直达燕塞湖的班车前往。"},
		{"title":"最美日出鸽子窝",
		"image":"images/photo2.png",
		"text":"望海长廊，距鹰角亭50米，廊长70米。游人逗留廊中，远眺渤海碧波，白云沙鸥，帆船巨舰；近赏浅水明澈，微波清荡，看拾贝之人欢笑，听大海之波涛，，令人流连忘返。“望海长廊”四个大字是由原国务院副总理方毅所书，海边建“浴日亭”，其匾额为严济慈先生所写。廊中彩绘雕梁画柱，栩栩如生。两侧是由方亭和八角亭组成，分别采用了古代园林常见构景手段—借景和透景的方法，吸收了北京颐和园的长廊特点和承德外八庙长廊的特点，绘画了北戴河24景和北戴河206个民间故事传说，以花鸟、鱼虫、人物等不同图案，这种彩绘叫做“苏式彩绘”。<br>高于苏式彩绘的要属“旋子彩绘”画面用简化式的涡卷瓣旋花，有时也可以画龙凤，一般用于次要宫殿式寺庙中。等级最高的彩绘要属“和玺彩绘”。中间的画面由不同的龙或凤的图案组成，间补以花卉图案，金碧辉煌，十分壮丽。最初人们在木构件上进行彩绘，是因为油漆颜料含有铜，他可以起到防潮、防腐、防风化、防虫蛀的作用，后来人们又发现这种彩绘还有很强的装饰性，既能增强建筑物的美观，又能提高人们的视觉效果，可以说是一举多得。宋代以后彩绘以成为宫殿不可缺少的装饰艺术。",
		"address":"37路鸽子窝公园站，下车步行184米；34路、34路夜班线路、34路夜线隆兴示范园，下车步行734米。"},
		{"title":"慢雅寻花，森林逸城",
		"image":"images/photo3.png",
		"text":"山海关城平面呈四方形，周长八里一百三十七步四尺，宽五丈，深两丈五尺的护城河围绕其外。城墙外部以青砖包砌，内填夯土，高约十四米，宽七米。有城门四个，东称“镇东门”，西称“迎恩门”，南称“望洋门”，北称“威远门”。四门俱存，东门即为“天下第一关”，保存最为完整。城门台上座有天下第一关城楼，实测城台高十二米，城楼高十三点七米，楼东西宽十米零一，南北长十九米零七，楼分两层，上覆灰瓦单檐歇山顶，楼上、下两层，北、东、南三面开箭窗六十八个，平时关闭，用时开启。西面屋檐的正中悬挂黑字白底巨幅匾额，上书“天下第一关”五个大字，字迹苍劲、雄浑，为明成化八年（1472年）进士萧显所书，现真迹藏于楼下，楼外所悬为1920年摹制品。<br>角山顶是观日出的理想之处，在这里可以看到“瑞莲捧日”的壮观景象。夏秋雨季游览栖贤寺，您也许会遇到“山寺巍峨逼太清，下方阴雨上方晴。阶前俯视蛟龙斗，槛外高悬日月明”的奇景。“瑞莲捧日”、“山寺雨晴”、“角山云海”、“栖贤佛光”被称为“角山四奇”。",
		"address":"秦皇岛浅水湾位于北戴河滨海大道52号，这里有秦皇岛浅水湾浴场和秦皇岛浅水湾别墅。"},
		{"title":"白鹭岛——钓鱼者的天堂",
		"image":"images/photo4.png",
		"text":"山海关城平面呈四方形，周长八里一百三十七步四尺，宽五丈，深两丈五尺的护城河围绕其外。城墙外部以青砖包砌，内填夯土，高约十四米，宽七米。有城门四个，东称“镇东门”，西称“迎恩门”，南称“望洋门”，北称“威远门”。四门俱存，东门即为“天下第一关”，保存最为完整。城门台上座有天下第一关城楼，实测城台高十二米，城楼高十三点七米，楼东西宽十米零一，南北长十九米零七，楼分两层，上覆灰瓦单檐歇山顶，楼上、下两层，北、东、南三面开箭窗六十八个，平时关闭，用时开启。西面屋檐的正中悬挂黑字白底巨幅匾额，上书“天下第一关”五个大字，字迹苍劲、雄浑，为明成化八年（1472年）进士萧显所书，现真迹藏于楼下，楼外所悬为1920年摹制品。<br>角山顶是观日出的理想之处，在这里可以看到“瑞莲捧日”的壮观景象。夏秋雨季游览栖贤寺，您也许会遇到“山寺巍峨逼太清，下方阴雨上方晴。阶前俯视蛟龙斗，槛外高悬日月明”的奇景。“瑞莲捧日”、“山寺雨晴”、“角山云海”、“栖贤佛光”被称为“角山四奇”。",
		"address":"白鹭岛坐落于秦皇岛市山海关区欢乐海洋公园（乐岛以东500米处。"},
		{"title":"山海关——关山旧别情",
		"image":"images/photo5.png",
		"text":"山海关城平面呈四方形，周长八里一百三十七步四尺，宽五丈，深两丈五尺的护城河围绕其外。城墙外部以青砖包砌，内填夯土，高约十四米，宽七米。有城门四个，东称“镇东门”，西称“迎恩门”，南称“望洋门”，北称“威远门”。四门俱存，东门即为“天下第一关”，保存最为完整。城门台上座有天下第一关城楼，实测城台高十二米，城楼高十三点七米，楼东西宽十米零一，南北长十九米零七，楼分两层，上覆灰瓦单檐歇山顶，楼上、下两层，北、东、南三面开箭窗六十八个，平时关闭，用时开启。西面屋檐的正中悬挂黑字白底巨幅匾额，上书“天下第一关”五个大字，字迹苍劲、雄浑，为明成化八年（1472年）进士萧显所书，现真迹藏于楼下，楼外所悬为1920年摹制品。<br>角山顶是观日出的理想之处，在这里可以看到“瑞莲捧日”的壮观景象。夏秋雨季游览栖贤寺，您也许会遇到“山寺巍峨逼太清，下方阴雨上方晴。阶前俯视蛟龙斗，槛外高悬日月明”的奇景。“瑞莲捧日”、“山寺雨晴”、“角山云海”、“栖贤佛光”被称为“角山四奇”。",
		"address":"秦皇岛市山海关区坐落在渤海北岸，地处中国华北地区通往东北地区的咽喉要道，距北京380公里，距天津243公里，距沈阳461公里，地理位置优越，水陆空交通均十分便利。"},
		{"title":"海上生明月，天涯共此时",
		"image":"images/photo6.png",
		"text":"山海关城平面呈四方形，周长八里一百三十七步四尺，宽五丈，深两丈五尺的护城河围绕其外。城墙外部以青砖包砌，内填夯土，高约十四米，宽七米。有城门四个，东称“镇东门”，西称“迎恩门”，南称“望洋门”，北称“威远门”。四门俱存，东门即为“天下第一关”，保存最为完整。城门台上座有天下第一关城楼，实测城台高十二米，城楼高十三点七米，楼东西宽十米零一，南北长十九米零七，楼分两层，上覆灰瓦单檐歇山顶，楼上、下两层，北、东、南三面开箭窗六十八个，平时关闭，用时开启。西面屋檐的正中悬挂黑字白底巨幅匾额，上书“天下第一关”五个大字，字迹苍劲、雄浑，为明成化八年（1472年）进士萧显所书，现真迹藏于楼下，楼外所悬为1920年摹制品。<br>角山顶是观日出的理想之处，在这里可以看到“瑞莲捧日”的壮观景象。夏秋雨季游览栖贤寺，您也许会遇到“山寺巍峨逼太清，下方阴雨上方晴。阶前俯视蛟龙斗，槛外高悬日月明”的奇景。“瑞莲捧日”、“山寺雨晴”、“角山云海”、“栖贤佛光”被称为“角山四奇”。",
		"address":"万米栈道沿途经过金海湾浴场、新澳海底世界等8个著名景观，尽显秦皇岛碧海、金沙、蓝天的优美自然人文景观。"}
	];
	// 第三屏鼠标滚动事件
	if(document.addEventListener){
		//兼容火狐
	    document.addEventListener('DOMMouseScroll',scrollFunc,false);
	}
	window.onmousewheel=document.onmousewheel=scrollFunc;

	function scrollFunc(event){
		if(!btn){
    		return;
    	}
    	btn=false;
		var event=event||window.event,
			type=event.type;
		//为了兼容火狐
		if(type=="DOMMouseScroll" ||type=="mousewheel"){
			event.delta=(event.wheelDelta)?event.wheelDelta/120:-(event.detail || 0) / 3;
		}
		// 向下滚动，背景左移
		// 向上滚动,背景右移
		if(event.delta<0&&firstPosX>-10000||event.delta<0&&firstPosX==0||event.delta>0&&firstPosX==10000||event.delta>0&&firstPosX<0){
			if(event.delta<0){
				liNum++;
				var i=Math.ceil(liNum/4);
				if(i==1&&aLi[2].className=="active"){
					aside.style.right=-60+"px";
				}
				scrollLi[i].className="active";
			}else if(event.delta>0){
				liNum--;
				var i=Math.ceil(liNum/4)+1;
				if(i==1&&aLi[2].className=="active"){
					aside.style.right=0;
				}
				scrollLi[i].className="";
			}
			firstPosX=firstPosX+event.delta*500;
			secondPosX=secondPosX+event.delta*100;
			thirdPosX=thirdPosX+event.delta*300;
			first.style.backgroundPositionX=firstPosX+"px";
			second.style.backgroundPositionX=secondPosX+"px";
			third.style.backgroundPositionX=thirdPosX+"px";
			
		}
		btn=true;
	}

	// 动画效果
	JSanimate=function(){
		
	}
}
	