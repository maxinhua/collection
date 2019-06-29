
$(function() {
	
	 
	//子页面左侧固定部分（鼠标经过高亮）
	
	
	 var y = $(".wrap > .city-box").length;

	 for( var i=0;i<y;i++){
	
		 var m = $(".city-box").eq(i).find("span").text();
		 $(".l-fix").append('<a ></a>');
		 $(".l-fix > a").eq(i).text(m)
		 var u = i+1;
		 $(".l-fix > a").eq(i).attr("href",'#'+u+'F');
	
	 }
	
	   
	
})