/*------------------------------------------------------------------
[Gallery JavaScript]

Project:	JavaScript Application
Version:	1.2
Last change:	09/04/13 [modify comments, cleanup, proper encapsulation/closure]
Author:		Franco Haley

DIRECTORY
	1. =GLOBALS
	2. =EVENTS
-------------------------------------------------------------------*/

//Using author's custom extension library/plugin (calling common components - browser fixes)
Jcoda.domReady(function(){

/* ======= [GLOBALS]
========================================= */
	var activeImg = 0;
	var thumbElms = document.getElementById("gallery").getElementsByTagName("a");
	var prevBtnElms = document.getElementById("clickHandler-prevBtn");
	var nextBtnElms = document.getElementById("clickHandler-nextBtn");

/* ======= [EVENTS]
========================================= */
	// Loop of thumbnail image elements
	for(var i = 0; i < thumbElms.length; i++) {
		
		// thumbnail<a> click handler function.
		thumbElms[i].onclick = function(e){
			document.getElementById("lgImg").src = this.href;
			activeImg = this.firstChild.alt;
			return Jcoda.stopDefault(e);
		};
		
		// Click event for previous button
		prevBtnElms.onclick = function(e){
			if(activeImg !== 0){
				activeImg--;
				document.getElementById("lgImg").src = thumbElms[activeImg];
			} else {
				activeImg = thumbElms.length-1;
				document.getElementById("lgImg").src = thumbElms[activeImg];
			}
			return Jcoda.stopDefault(e);
		};
		
		// Click event for next button
		nextBtnElms.onclick = function(e){
			if(activeImg < thumbElms.length - 1){
				activeImg++;
				document.getElementById("lgImg").src = thumbElms[activeImg];
			} else {
				activeImg = 0;
				document.getElementById("lgImg").src = thumbElms[activeImg];
			}
			return Jcoda.stopDefault(e);
		};
	};
});