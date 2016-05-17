window.onload = function () {
	
	var clickedBtn = document.getElementById('button');
	clickedBtn.onclick = changeDesc;
	function changeDesc () {
		document.getElementById('description').innerHTML = "And quite a handsome cat too!";
	}
}