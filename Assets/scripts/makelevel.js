#pragma strict

Random.seed = 1337;
var defaultMesh:Rigidbody;
var meshArray = [defaultMesh];

var ringPopulation:int = 1000;
var ringOutside:float = 600;
var ringInside:float = 400;
var ringDepth:float = 50;

var fusePopulation:int = 400;
var fuseLength:float = 1200;
var fuseRadius:float = 30;

function makeDebris(loc:Vector3) {
	var mesh_choice = meshArray[Mathf.Floor(Random.value * meshArray.length)];
	var thisbox:Rigidbody = Instantiate(mesh_choice, loc, Random.rotation);
	thisbox.transform.localScale = Vector3(Random.Range(0.5, 5), Random.Range(0.5, 5), Random.Range(0.5, 5));
	thisbox.renderer.material.color = Color(Random.Range(0.1, 0.9), Random.Range(0.1, 0.9), Random.Range(0.1, 0.9));
	thisbox.velocity = Vector3(Random.value-0.5, Random.value-0.5, Random.value-0.5);
}

// make the ring
for (var i:int = 0; i < ringPopulation; i++) {
	var randAngle = Random.Range(0, 360);
	var randDist = Random.Range(ringInside, ringOutside);
	makeDebris(Vector3(Mathf.Sin(randAngle) * randDist, (Random.value * ringDepth) - (ringDepth / 2), Mathf.Cos(randAngle) * randDist));
}

// make the fuselage
for (i = 0; i < fusePopulation; i++) {
	var randPos:Vector2 = Random.insideUnitCircle * fuseRadius; 
	makeDebris(Vector3(randPos.x, randPos.y, (Random.value * fuseLength) + ringOutside));	
}