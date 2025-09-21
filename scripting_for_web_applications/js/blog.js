/*------------------------------------------------------------------
[Blog JavaScript]

Project:	JavaScript Application
Version:	1.2
Last change:	09/04/13 [modify comments, cleanup, proper encapsulation/closure]
Author:		Franco Haley

DIRECTORY
	1. =FUNCTIONS
	2. =EVENTS
	2. =CALLS	
-------------------------------------------------------------------*/

//Using author's custom extension library/plugin (calling common components - browser fixes)
Jcoda.domReady(function() {

/* ======= [FUNCTIONS]
========================================= */
	// Execute functionality when page loads
	var init = function() {
		var aUrl = 'xhr/getposts.php';
		var aTimeout = 6000;
		var aData = {};
		var aType = 'xml';

		// Call AJAX module
		ajaxSettings(aUrl, aTimeout, aData, aType);
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
		Jcoda.$('#blog-context').innerHTML = '';

		// Call to parse data for presentation
		parseData(results);
	};

	// Method to show error message for connection failure
	var ajaxError = function() {
		var errStr = '<p style="text-align: center; font-size: 14px; padding-top: 80px;">Server problem. Please try again.</p>';

		Jcoda.$("#blog-context").innerHTML = '';
		Jcoda.$("#blog-context").innerHTML = errStr;
	};

	// Method to parse data using AJAX once server connection is successful
	var parseData = function(results) {
		var posts = results.getElementsByTagName('post');
		
		// Parse post data and create a list.
		for(var i = 0, j = posts.length; i < j; i++) {
			var postData = posts[i];
			var pTitle = postData.getElementsByTagName('title')[0].firstChild.nodeValue;
			var pAuthor = postData.getElementsByTagName('author')[0].firstChild.nodeValue;
			var pDateTime = postData.getElementsByTagName('datetime')[0].firstChild.nodeValue;
			var pContent = postData.getElementsByTagName('content')[0].firstChild.nodeValue;
			
			// Variable for storing xml database node values inside html elements.
			var myhtml =
				'<hr>' +
				'<h2 class="postTitle">'+pTitle+'</h2>' +
				'<p class="postAuthor">'+pAuthor+'</p>' +
				'<span class="postDate">'+pDateTime+'</span>' +
				'<p class="postContent">'+pContent+'</p>';
			
			Jcoda.$("#blog-context").innerHTML += myhtml;
		}
	};

/* ======= [EVENTS]
========================================= */
	// Click event for 'All Post' link
	Jcoda.$('#allpost').onclick = function(e) {
		var aUrl = 'xhr/getposts.php';
		var aTimeout = 6000;
		var aData = {};
		var aType = 'xml';

		ajaxSettings(aUrl, aTimeout, aData, aType);
		Jcoda.stopDefault(e);
	};

	// Click event for 'Mike's Post' link
	Jcoda.$('#mikes-post').onclick = function(e) {
		var aUrl = 'xhr/getposts.php';
		var aTimeout = 6000;
		var aData = {author:'Mike'};
		var aType = 'xml';

		ajaxSettings(aUrl, aTimeout, aData, aType);
		Jcoda.stopDefault(e);
	};

	// Change event for dropdown list
	Jcoda.$('#post-limit').onchange = function(e) {
		var aUrl = 'xhr/getposts.php';
		var aTimeout = 6000;
		var aData = {author:'Mike', limit:Jcoda.$('#post-limit').options[Jcoda.$('#post-limit').selectedIndex].value};
		var aType = 'xml';

		ajaxSettings(aUrl, aTimeout, aData, aType);
		Jcoda.stopDefault(e);
	};

	// Click event for 'Title Search' button
	Jcoda.$('#searchBtn').onclick = function(e) {
		var aUrl = 'xhr/getposts.php';
		var aTimeout = 6000;
		var aData = {limit:Jcoda.$('#post-limit').options[Jcoda.$('#post-limit').selectedIndex].value, title:Jcoda.$('#titleInput').value};
		var aType = 'xml';

		ajaxSettings(aUrl, aTimeout, aData, aType);
		Jcoda.stopDefault(e);
	};

/* ======= [CALLS]
========================================= */
	init(); // Initialize call

});