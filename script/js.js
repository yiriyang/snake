var oContent = document.getElementsByClassName('content')[0];
var oSnakeHead = oContent.getElementsByClassName('snakehead')[0];
var oDiv = oContent.getElementsByTagName('div');
var oWard = document.getElementById('ward');
var count1 = 20;
var count2 = 0;
//向右 39
function right(){
	count1 += 10;
	oSnakeHead.style.left = count1 + 'px';
}
//向左 37
function left(){
	count1 -= 10;
	oSnakeHead.style.left = count1 + 'px';
}
//向上 38
function up(){
	count2 -= 10;
	oSnakeHead.style.top = count2 + 'px';
}
//向下 40
function down(){
	count2 += 10;
	oSnakeHead.style.top = count2 + 'px';
}
var n = 39;
//方向键选择
document.onkeydown = function(e){
	var oEvent = e || window.e;
	n = oEvent.which;
}
var Time = function(){
	if(n == 39){
		right();
	}else if(n == 37){
		left();
	}else if(n == 38){
		up();
	}else if(n == 40){
		down();
	}
	for(var i = 0; i < oDiv.length - 1; i++){
		oDiv[i].style.left = oDiv[i + 1].style.left;
		oDiv[i].style.top = oDiv[i + 1].style.top;
	}
	//碰撞墙壁结束游戏
	if(oSnakeHead.style.left == '900px' || oSnakeHead.style.left == '-10px'){
		oFace.style.display = 'block';
		oFace.innerHTML = '你得了' + (oDiv.length - 4) + '分'
		clearTimeout(times);
	}else if(oSnakeHead.style.top == '-10px' || oSnakeHead.style.top == '700px'){
		oFace.style.display = 'block';
		oFace.innerHTML = '你得了' + (oDiv.length - 4) + '分'
		clearTimeout(times);
	}
	//吃到食物
	if(parseInt(oSnakeHead.style.left) > (randomNum1 -10) && parseInt(oSnakeHead.style.left) < (randomNum1 + 10) && parseInt(oSnakeHead.style.top) > (randomNum2 - 10) && parseInt(oSnakeHead.style.top) < (randomNum2 + 10)){
		oContent.removeChild(food);
		var newDiv = document.createElement('div');
		oContent.insertBefore(newDiv,oDiv[0]);
		run();
	}
	for(var j = 0; j < oDiv.length - 2; j++){
		if(oSnakeHead.style.left == oDiv[j].style.left && oSnakeHead.style.top == oDiv[j].style.top){
			oFace.style.display = 'block';
		oFace.innerHTML = '你得了' + (oDiv.length - 4) + '分'
			clearTimeout(times);
		}
	}
}
//贪吃蛇的食物
var randomNum1, randomNum2;
var food = document.createElement('p');
function run(){
	food.className = 'food';
	oContent.appendChild(food);
	randomNum1 = Math.floor(Math.random() * 891);
	randomNum2 = Math.floor(Math.random() * 691);
	food.style.left = randomNum1 + 'px';
	food.style.top = randomNum2 + 'px';
}
run();
//选择游戏难度
var times;
var oSimple = document.getElementById('simple');
var oDifficulty = document.getElementById('difficulty');
var oAbnormal = document.getElementById('abnormal');
var oFace = document.getElementById('face');
oSimple.onclick = function(){
	times = setInterval('Time()',150);
	oWard.style.display = 'block';
	oFace.style.display = 'none';
}
oDifficulty.onclick = function(){
	times = setInterval('Time()',60);
	oWard.style.display = 'block';
	oFace.style.display = 'none';
}
oAbnormal.onclick = function(){
	times = setInterval('Time()',10);
	oWard.style.display = 'block';
	oFace.style.display = 'none';
}