#pragma strict
var cameraDistance: float = 100;
private var startPos: Vector3;
private var speed: int = 3;
private var hValue: float = 0;
private var vValue: float = 0;
private var cTarget: GameObject;
private var groundPlane: GameObject;

function Start () 
{
	//We use the camera target as the radius to rotate around, and also the target to look at
	cTarget = GameObject.Find("CameraTarget");
	cTarget.active = false;
	//We need the ground plane so we know what vertical plane not to go below
	groundPlane = GameObject.Find("GroundPlane");
	//Store the start position whichw ill serve as the center of the sphere for the camera
	startPos.x = cTarget.transform.position.x;
	startPos.z = cTarget.transform.position.z; 
	startPos.y = cTarget.transform.position.y;
	vValue = startPos.y;
}

function Update () 
{
	//Horizontal Rotation around target
	hValue += Input.GetAxis("Horizontal") * Time.deltaTime * speed;
	this.transform.position.x = cameraDistance * Mathf.Sin(hValue) + startPos.x;
	this.transform.position.z = cameraDistance * Mathf.Cos(hValue) + startPos.z;
	//Vertical
	var yValueAddition: float;
	yValueAddition = vValue + Input.GetAxis("Vertical") * Time.deltaTime * speed *80;
	if(yValueAddition > groundPlane.transform.position.y +10)
	{
		vValue = yValueAddition;
		this.transform.position.y = vValue;
	}
	


	
	
	this.transform.LookAt(cTarget.transform.position);
}