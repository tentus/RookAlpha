#pragma strict

// this script's purpose is to hold static vars for other scripts. This should (should) be the first things we load up in a level

// player variables
static var playerHealthNow:float = 100;
static var playerHealthMax:float = 100;
static var playerSpeedNow:float = 0;
static var playerSpeedMax:float = 100;
static var playerSpeedMin:float = -100;

//laser variables
static var laserSpeed = 500;
