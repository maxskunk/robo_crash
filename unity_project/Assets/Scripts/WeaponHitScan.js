#pragma strict

function Start () {

}

function Update()
{
    if (Input.GetMouseButtonDown(1)){       
        var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
        var hit : RaycastHit;
 
        if (Physics.Raycast(ray, hit, 1000)){ // 1000 or Mathf.Infinity should be enough !
            // what did the raycast hit ?
            Debug.Log( "ray hit (name): " + hit.collider.gameObject.name);
            Debug.Log( "ray hit (tag): " + hit.collider.gameObject.tag );
 
            if ( hit.collider.gameObject.tag != "Field" )
            {           
                Destroy(hit.collider.gameObject);
            }
        }
    }
}