// A grenade
// - instantiates a explosion prefab when hitting a surface
// - then destroys itself
var explosionPrefab:Transform;
//var radius:int = 5;
//var power:int = 10;

function OnCollisionEnter(collision : Collision) {
	// Rotate the object so that the y-axis faces along the normal of the surface
	var contact = collision.contacts[0];
	var rot = Quaternion.FromToRotation(Vector3.up, contact.normal);
	var pos = contact.point;
	Instantiate(explosionPrefab, pos, rot);
	

	// Destroy the projectile
	Destroy (gameObject);	
	
}