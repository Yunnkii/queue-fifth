var getDom = function(id){
	return  document.getElementById(id);
}
var	leftIn = getDom("leftIn");
var	leftOut = getDom("leftOut");
var	rightIn = getDom("rightIn");
var	rightOut = getDom("rightOut");
var input = getDom("input");
var	queue = getDom("queue");
//从左侧加入
/*function	lesert(){
	var  div = document.createElement("div");
	div.style.cssText = "width:50px; height:50px;background-color:red;float:left;margin:10px;text-align:center;line-height:50px;";
	div.innerHTML = input.value;
	div.onclick = function(){
		div.parentNode.removeChild(this);
	}
	if(queue.firstChild==null){
		queue.appendChild(div);
	}else{
		queue.insertBefore(div,queue.firstChild);
	}
}*/
//整合的插入
function	insert(dire){
	var  div = document.createElement("div");
	div.style.cssText = " color:#fff;cursor:pointer;width:60px; height:60px;background:#333;float:left;margin:10px;text-align:center;line-height:50px;";
	div.innerHTML = input.value;
	div.onclick = function(){
		div.parentNode.removeChild(this);
	}
	if(input.value!=null){
		if(queue.firstChild==null){
			queue.appendChild(div);
		}else{
			if(dire=="left"){
			queue.insertBefore(div,queue.firstChild);
			}else if(dire=="right"){
			queue.appendChild(div);	
			}
		}
	}else{

	}
}
//从左侧删除
	/*function	leftmove(){
		if(queue.firstChild!=null){
			if(confirm(queue.firstChild.innerHTML+"将被删除")){
				queue.removeChild(queue.firstChild);
			}else{
				alert(queue.firstChild.innerHTML+"不会被删除");
			}
		}
	}*/
	//整合的删除
function	 move(dire){
	if(queue.firstChild!=null){
		if(dire=="left"&&(confirm(queue.firstChild.innerHTML+"将被删除"))){
			queue.removeChild(queue.firstChild);
		}else if(dire=="right"&&(confirm(queue.lastChild.innerHTML+"将被删除"))){
			queue.removeChild(queue.lastChild);
		}
	}else{
	
	}
}
	/*function	delEle(ele){
		ele.parentNode.removeChild(ele);
	}

	var divs = queue.querySelectorAll("div");
	console.log(divs);
	for(var i=0;i<divs.length;i++){
		divs[i].addEventListener("click",delEle(this),false);
	}*/
	
	leftIn.addEventListener("click",function(){
		insert("left");
	},false);
	rightIn.addEventListener("click",function(){
		insert("right");
	},false);
	leftOut.addEventListener("click",function(){
		move("left");
	},false);
	rightOut.addEventListener("click",function(){
		move("right");
	},false);
	//leftOut.addEventListener("click",leftmove,false);
	//leftIn.addEventListener("click",lesert,false);
	
