#pragma strict
//static Object : Globals = gameObject
static var globalVariables : Transform;
globalVariables = transform;
public var isShuttingDown : boolean = false;


function On (){
	isShuttingDown = false;
}

function setShuttingDownTrue(){
	isShuttingDown = true;
}

function setShuttingDownFalse(){
	isShuttingDown = false;
}
