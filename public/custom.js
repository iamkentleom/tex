function createRoom(){
	if(document.getElementById("alertCode").classList == "row d-none"){
		var possibleChar = "0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ";
		var code = "";
		for (var i = 0; i < 6; i++){
			var random = Math.floor((Math.random() * 59) + 1);
			var code = code+possibleChar[random];
		}
		document.getElementById("alertCode").classList = "row";
		document.getElementById("code").innerHTML = "<b>CHATROOM CODE </b>: "+code;
		document.getElementById("roomCode").value = code;
	}
}
function join(){
	var code = document.getElementById('roomCode').value;
	var name = document.getElementById('displayName').value;
	if (code != "" && name != ""){
		document.getElementById('errorJoin').classList = "row d-none";
		sessionStorage.setItem("roomCode", code);
		sessionStorage.setItem("displayName", name);
		window.location = 'chatRoom.html';
	} else{
		document.getElementById('errorJoin').classList = "row";
	}
}
//redirect to index if no try to access chatroom.html