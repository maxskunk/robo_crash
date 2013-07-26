#pragma strict

function Update()
{
	if (Input.GetMouseButtonDown(1)){       
		var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
		var hits : RaycastHit[];
			hits = Physics.RaycastAll (ray);
			
		for (var i = 0;i < hits.Length; i++) {
			var hit : RaycastHit = hits[i];
			if ( hit.collider.gameObject.tag != "Field" )
	        {           
	            Destroy(hit.collider.gameObject);
			}
		}
	}
}