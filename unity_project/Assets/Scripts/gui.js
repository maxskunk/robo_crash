#pragma strict
private var buttonWidth:int = 75;	//width of each button
private var buttonHieght:int = 30;	//height of each button
private var buttonXMargin:int = 10;	//margin from the left side of the screen
private var buttonYMargin:int = 10; //margin from the top of the screen
private var buttonYGap:int = 10;	//Gap between the bottom of one button and the top of another

function OnGUI () {
	//create quit button
	if (GUI.Button (Rect (buttonXMargin,buttonYMargin,buttonWidth,buttonHieght), "QUIT")) {
		Globals.globalVariables.GetComponent(Globals).isShuttingDown = true;
		Application.Quit();
	}
	
	//create restart button
	if (GUI.Button (Rect (buttonXMargin,(buttonYMargin+buttonHieght+buttonYGap),buttonWidth,buttonHieght), "RESTART")) {
		Globals.globalVariables.GetComponent(Globals).isShuttingDown = true;
		Application.LoadLevel ("test3");	
	}
}