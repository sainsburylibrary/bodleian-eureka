window.onload = function() {
// Set the variables
var LastCaptureURL = 'https://wayback.archive-it.org/org-467/20200807110009/';  
var CurrentPageURL = window.location.href;  
var str = CurrentPageURL;
var LastSBSCaptureURL = str.replace("bodleian", "sbs");


var RedirectURL = LastSBSCaptureURL + CurrentPageURL;

// Write to document
	document.getElementById("beamlink").setAttribute("href",RedirectURL);	
}