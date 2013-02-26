#pragma strict

var sceneToLoad:String = 'level_1'; 
var targetGuiText : GUIText;

function Update() {
	if(Input.anyKey) {
		targetGuiText.text = "Loading...";
		Application.LoadLevel(sceneToLoad); 
	}
}
