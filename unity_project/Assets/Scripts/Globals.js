#pragma strict
static var globalVariables : Transform;
	globalVariables = transform;
	
var intScore : int = 0;				//the players score
private var txtScoreBoard:GUIText;	//pointer to the GUIText object for our score

var isShuttingDown : boolean = false;	//lets us know if we are in the process of stopping a level or closing the program

//----Score---- 
function Start () {
	txtScoreBoard = GameObject.Find("GUI/txtScore").GetComponent(GUIText);
    //Globals.globalVariables.GetComponent(Globals).setScore(0);
    UpdateScoreText();
}

function Update() {
	UpdateScoreText();
}

function UpdateScoreText() {
    // update textfield with score
    txtScoreBoard.text = Globals.globalVariables.GetComponent(Globals).intScore.ToString();
}

function On (){
	isShuttingDown = false;
}

function setShuttingDownTrue(){
	isShuttingDown = true;
}

function setShuttingDownFalse(){
	isShuttingDown = false;
}

function setScore(intNewScore : int){
	intScore = intScore + intNewScore;
}

function setAddPoints(intPoints : int){
	intScore = intScore + intPoints;
}

