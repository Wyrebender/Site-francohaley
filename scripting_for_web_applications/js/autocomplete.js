/*------------------------------------------------------------------
[Autocomplete JavaScript]

Project:	JavaScript Application
Version:	1.2
Last change:	09/04/13 [modify comments, cleanup, proper encapsulation/closure]
Author:		Franco Haley

DIRECTORY
	1. =FUNCTIONS
	2. =EVENTS
	3. =CALLS
-------------------------------------------------------------------*/

//Using author's custom extension library/plugin (calling common components - browser fixes)
Jcoda.domReady(function() {

/* ======= [FUNCTIONS]
========================================= */
	var init = function() {
		Jcoda.$('#messageArea').style.display = 'none';
	};

	// Ajax functionality
	var ajaxSettings = function(aUrl, aTimeout, aData, aType) {
		Jcoda.ajax({
			url: aUrl,

			onSuccess:function(results) {
				ajaxSuccess(results);
			},

			timeout: aTimeout,

			onError:function() {
				ajaxError();
			},

			data: aData,

			type: aType
		});
	};

	// Method for connection successful
	var ajaxSuccess = function(results) {
		var emailData = results.getElementsByTagName('email');

		Jcoda.$('#messageArea').style.display = 'block';
		Jcoda.$('#messageArea').innerHTML = '';

		// If the email data reaches five or more items on the list, stop looping further data. 
		if(emailData.length >= 5) {
			for(var i = 0; i < 5; i++) {
				parseData(i, emailData);
			};
		} else {		
			for(var i=0; i < emailData.length; i++) {
				parseData(i, emailData);
			};
		};
	};

	// Method to show message for connection failure
	var ajaxError = function() {
		var errStr = 'Server problem. Please try again.';

		alert(errStr);
	};

	// Method to parse data using AJAX once server connection is successful
	var parseData = function(i, emailData) {
		var emailInfo = emailData[i];
		var gEmail = emailInfo.getElementsByTagName('address')[0].firstChild.nodeValue;
		var gName = emailInfo.getElementsByTagName('name')[0].firstChild.nodeValue;
		var gFriends = emailInfo.getElementsByTagName('friends')[0].firstChild.nodeValue;
		
		// Variable for storing xml database node values inside html elements. 
		var myhtml = '<li class="dataSelect"><span class="emailItem">'+gEmail+'</span><br />' +
		'<span class="nameItem">name:  '+gName+'</span><br />' + 
		'<span class="friendsItem">friends:  '+gFriends+'</span></li>';					

		Jcoda.$('#messageArea').innerHTML += myhtml;
	
		if(Jcoda.$('#toInput').value === '') {
			Jcoda.$('#messageArea').innerHTML = '';
			Jcoda.$('#messageArea').style.display = 'none';
		}
	
		var targetEmail = Jcoda.$('.emailItem');
			for(var k=0; k < targetEmail.length; k++) {
			targetEmail[k].onclick = function(e) {
				Jcoda.$('#toInput').value = this.innerHTML;
				Jcoda.$('#messageArea').innerHTML = '';
			};
		};
	};

/* ======= [EVENTS]
========================================= */
	// Keyup event for key pressing up on input text field
	Jcoda.$('#toInput').onkeyup = function(e) {
		var aUrl = 'xhr/getemails.php';
		var aTimeout = 6000;
		var aData = {sfield:Jcoda.$('#toInput').value};
		var aType = 'xml';
		
		// Call AJAX module. 
		ajaxSettings(aUrl, aTimeout, aData, aType);
		Jcoda.stopDefault(e);
	};

	// Onblur event on when the dropdown box looses focus.
	Jcoda.$('#messageArea').onblur = function(e) {
		Jcoda.$('#messageArea').innerHTML = '';
	};
	
	// Click event for send button.
	Jcoda.$('#sendButton').onclick = function(e) {
		Jcoda.$('#messageArea').innerHTML = '';
		Jcoda.$('#messageArea').style.display = 'none';
		Jcoda.$('#toInput').value = '';
		
		Jcoda.stopDefault(e);
	};

/* ======= [CALLS]
========================================= */
	init();
});