var intPoints : int = 0;
var onDestroyPrefab:Transform;

function OnCollisionEnter(collision : Collision) {
	// Rotate the object so that the y-axis faces along the normal of the surface
	var contact = collision.contacts[0];
	var rot = Quaternion.FromToRotation(Vector3.up, contact.normal);
	var pos = contact.point;
	Instantiate(onDestroyPrefab, pos, rot);
	
	if (Globals.globalVariables != null){
		Globals.globalVariables.GetComponent(Globals).setAddPoints(intPoints);
	}
	// Destroy the projectile
	Destroy (gameObject);	
}