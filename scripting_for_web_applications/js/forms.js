/*------------------------------------------------------------------
[Forms JavaScript]

Project:	JavaScript Application
Version:	1.2
Last change:	09/04/13 [modify comments, cleanup, proper encapsulation/closure]
Author:		Franco Haley

DIRECTORY
	1. =PLUGINS
	2. =EVENTS
-------------------------------------------------------------------*/


//Using author's custom extension library/plugin (calling common components - browser fixes)
Jcoda.domReady(function() {

/* ======= [PLUGINS]
========================================= */
	// Custom plugin to validate forms
	Jcoda.validateForm(Jcoda.$('#form-fields'));
	Jcoda.validateForm(Jcoda.$('#form-fields2'));


/* ======= [EVENTS]
========================================= */
	// Click event for register button.
	Jcoda.$('#register-button').onclick = function(e) {
		var inputFields = Jcoda.$('input');
		
		// loop through all the input text inside an array.
		for(var i = 0, j = inputFields.length; i < j; i++) {
			inputFields[i].value = '';
		}
		return Jcoda.stopDefault(e);
	};
});