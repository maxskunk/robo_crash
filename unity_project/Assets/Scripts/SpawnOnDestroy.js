var points : int = 0;
var posX : int = 0;
var posY : int = 0;
var posZ : int = 0;
var onDestroyPrefab:Transform;

	
function OnApplicationQuit()
{
	Globals.globalVariables.GetComponent(Globals).isShuttingDown = true;
}

function OnDisable () {
	if (Globals.globalVariables != null){
		if (!Globals.globalVariables.GetComponent(Globals).isShuttingDown){
			var rot =  transform.rotation;
			var pos = Vector3(transform.position.x + posX, transform.position.y + posY, transform.position.z + posZ);
			Instantiate(onDestroyPrefab, pos, rot);
		}
	}
}