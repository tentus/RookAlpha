#pragma strict

var cameraTurn:float = 10;
var zTurn:float = 10;
var soften:float = 0.25;
var mainCamera:Transform;
var laserPrefab:Rigidbody;

private var speedChange:int = 10;
private var shotOrigin = Vector3(0, 1.2, 10);

function Update () {
	if(Input.GetButtonDown("Pause")) {
		Time.timeScale = (Time.timeScale != 0) ? 0 : 1;
	}
	else if(Input.GetAxis("Mouse ScrollWheel") != 0) {
		Time.timeScale += Input.GetAxis("Mouse ScrollWheel");
	}
	
	Time.timeScale = Mathf.Clamp(Time.timeScale, 0, 1);
	if(Time.timeScale != 0) {
		if(Input.GetAxis("Vertical") > 0) {
			config.playerSpeedNow += speedChange;
		}
		else if(Input.GetAxis("Vertical") < 0) {
			config.playerSpeedNow -= speedChange;
		}
		if(Input.GetButtonDown("Jump")) {
			config.playerSpeedNow = 0;
		}
		config.playerSpeedNow = Mathf.Clamp(config.playerSpeedNow, config.playerSpeedMin, config.playerSpeedMax);
		transform.position += transform.forward * config.playerSpeedNow * Time.deltaTime;
		transform.Rotate(cameraTurn * -Input.GetAxis("Mouse Y"), cameraTurn * Input.GetAxis("Mouse X"), zTurn * -Input.GetAxis("Horizontal"));
		
		mainCamera.rotation = transform.rotation;
		var targetPos = transform.rotation * Vector3(0.0, 5, -20) + transform.position;
		mainCamera.position = Vector3.Lerp(mainCamera.position, targetPos, soften);
		
		if(Input.GetButtonDown("Fire1")) {
			var laserClone : Rigidbody = Instantiate(laserPrefab, transform.position + (transform.rotation * shotOrigin), transform.rotation);
			laserClone.velocity = transform.forward * config.laserSpeed;
		}
	}
}

function OnCollisionEnter(collision : Collision) {
	config.playerHealthNow -= 10;
	if(config.playerHealthNow <= 0) {
		config.playerHealthNow = config.playerHealthMax;
		Application.LoadLevel("menu_scene"); 
	}
}