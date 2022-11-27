document.oncopy = function(){
	var body = document.getElementsByTagName('body')[0];
	var selection = window.getSelection();
	var div = document.createElement('div');
 
	div.style.position = 'absolute';
	div.style.left = '-99999px';
	body.appendChild(div);
	div.innerHTML = selection + ' Источник: https://https://elonmusk2002.github.io/page-forum/';
	selection.selectAllChildren(div);
 
	window.setTimeout(function(){
		 body.removeChild(div);
	}, 0);
}
