var weaponStrengthMultiplier:int = 1;
var projectileMass:int = 1;
var projectileSpeed:int = 10000;
var projectileScale:int = 10;



function Start () 
{

}
//TODO: This script will have to be fine tuned along with mass and friction of blocks to give the most entertinaing "Feel" to the game
function Update () 
{
	if(Input.GetButtonDown("Fire1"))
	{
		//TODO: This will ultimatly be a cross hair
		var ray:Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var sphere:GameObject = GameObject.CreatePrimitive(PrimitiveType.Sphere);
		sphere.transform.localScale.x = projectileScale;
		sphere.transform.localScale.y = projectileScale;
		sphere.transform.localScale.z = projectileScale;
		sphere.transform.position = ray.origin;
		sphere.AddComponent("Rigidbody");
		sphere.rigidbody.mass = projectileMass;
		sphere.rigidbody.AddForce(ray.direction * projectileSpeed * weaponStrengthMultiplier );
	}
	
	//TODO: We will need to clean up old projectiles in 1 or 2 ways
	// a. Timer
	// b. When they hit the plane
}