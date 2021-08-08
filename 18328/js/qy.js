function setTab(name,cursel,n,rid){   
 for(i=1;i<=n;i++){   
  var menu=document.getElementById(name+i);   
  var con=document.getElementById("con_"+name+"_"+i); 
  if(rid){
	var release=document.getElementById("f_"+name); 
  }
  menu.className=i==cursel?name:"";   
  con.style.display=i==cursel?"block":"none";
  if(rid){
  release.innerHTML="<a href='member/my.php?mid="+rid+"&action=add'>点击发布信息</a>";
  }
 }   
}
function dh(moreshow,num,id){
	var dh=document.getElementById(moreshow+"_"+id);
	var cat_more=document.getElementById('cat_more_'+id);
	if(dh.style.display != "block"){
		dh.style.display = "block";
		if(num==1){
			cat_more.innerHTML = '隐藏显示分类';
			cat_more.className='cat_more_2';
		}else{
			cat_more.innerHTML = '隐藏';
			cat_more.className='qy_c_h';
		}
	}else{
		dh.style.display = "none";
		if(num==1){
			cat_more.innerHTML = '查看更多分类';
			cat_more.className='cat_more_1';
		}else{
			cat_more.innerHTML = '更多';
			cat_more.className='qy_c_m';
		}
	}
}

function qymbModule(i, o) {
	Dd('destoon_search').action = DTPath+'api/search.php';
	Dd('destoon_moduleid').value = i;
	searchid = i;
	var lis = Dd('search_module').getElementsByTagName('li');
	for(var i=0;i<lis.length;i++) {
		lis[i].className = lis[i] == o ? 'head_search_on' : '';
	}
}