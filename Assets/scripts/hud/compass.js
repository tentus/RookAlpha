#pragma strict

var target:Transform;
var strength = .75;
 
function Update () {
	var targetRotation = Quaternion.LookRotation (target.position - transform.position);
	var str = Mathf.Min (strength * Time.deltaTime, 1);
	transform.rotation = Quaternion.Lerp (transform.rotation, targetRotation, str);
}