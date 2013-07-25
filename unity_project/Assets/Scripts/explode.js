// A grenade
// - instantiates a explosion prefab when hitting a surface
// - then destroys itself
var explosionPrefab:Transform;
var radius:int = 5;
var power:int = 10;


function OnCollisionEnter(collision : Collision) {
	// Rotate the object so that the y-axis faces along the normal of the surface
	
	var contact = collision.contacts[0];
	var rot = Quaternion.FromToRotation(Vector3.up, contact.normal);
	var pos = contact.point;
	Instantiate(explosionPrefab, pos, rot);
	Destroy (gameObject);
	
	
	// applying explosive force variables
	var explosionPos : Vector3 = transform.position;
	//putting all coliders within explosion range into an array
	var colliders : Collider[] = Physics.OverlapSphere (explosionPos, radius);
	
	//looping through colider array to apply explosive force
	for (var hit : Collider in colliders) {
		if (!hit)
			continue;
		
		if (hit.rigidbody)
			hit.rigidbody.AddExplosionForce(power*1000, explosionPos, radius, 3.0);
	}
	// Destroy the projectile
	
	
}