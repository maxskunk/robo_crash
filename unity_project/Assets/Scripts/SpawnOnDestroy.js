var intPoints : int = 0;
var intPosX : int = 0;
var intPosY : int = 0;
var intPosZ : int = 0;
var onDestroyPrefab:Transform;

	
function OnApplicationQuit()
{
	Globals.globalVariables.GetComponent(Globals).isShuttingDown = true;
}

function OnDisable () {
	if (Globals.globalVariables != null){
		Globals.globalVariables.GetComponent(Globals).setAddPoints(intPoints);
		if (!Globals.globalVariables.GetComponent(Globals).isShuttingDown){
			var varRot =  transform.rotation;
			var varPos = Vector3(transform.position.x + intPosX, transform.position.y + intPosY, transform.position.z + intPosZ);
			Instantiate(onDestroyPrefab, varPos, varRot);
		}
	}
}