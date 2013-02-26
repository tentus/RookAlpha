#pragma strict

var explosionPrefab:Transform;

function Update() {
	Destroy(gameObject, 5);
}

function OnCollisionEnter(collision:Collision) {
	Instantiate(explosionPrefab, transform.position, transform.rotation);
	Destroy(gameObject);
}