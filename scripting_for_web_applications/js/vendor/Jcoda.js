var Jcoda = {};
/*
  Easing Equations v1.5
  May 1, 2003
  (c) 2003 Robert Penner, all rights reserved. 
  This work is subject to the terms in http://www.robertpenner.com/easing_terms_of_use.html.  
  
  These tweening functions provide different flavors of 
  math-based motion under a consistent API. 
  
  Types of easing:
  
	  Linear
	  Quadratic
	  Cubic
	  Quartic
	  Quintic
	  Sinusoidal
	  Exponential
	  Circular
	  Elastic
	  Back
	  Bounce

  Changes:
  1.5 - added bounce easing
  1.4 - added elastic and back easing
  1.3 - tweaked the exponential easing functions to make endpoints exact
  1.2 - inline optimizations (changing t and multiplying in one step)--thanks to Tatsuo Kato for the idea
  
  Discussed in Chapter 7 of 
  Robert Penner's Programming Macromedia Flash MX
  (including graphs of the easing equations)
  
  http://www.robertpenner.com/profmx
  http://www.amazon.com/exec/obidos/ASIN/0072223561/robertpennerc-20
*/


// simple linear tweening - no easing
// t: current time, b: beginning value, c: change in value, d: duration
Math.linearTween = function (t, b, c, d) {
	return c*t/d + b;
};


 ///////////// QUADRATIC EASING: t^2 ///////////////////

// quadratic easing in - accelerating from zero velocity
// t: current time, b: beginning value, c: change in value, d: duration
// t and d can be in frames or seconds/milliseconds
Math.easeInQuad = function (t, b, c, d) {
	return c*(t/=d)*t + b;
};

// quadratic easing out - decelerating to zero velocity
Math.easeOutQuad = function (t, b, c, d) {
	return -c *(t/=d)*(t-2) + b;
};

// quadratic easing in/out - acceleration until halfway, then deceleration
Math.easeInOutQuad = function (t, b, c, d) {
	if ((t/=d/2) < 1) return c/2*t*t + b;
	return -c/2 * ((--t)*(t-2) - 1) + b;
};


 ///////////// CUBIC EASING: t^3 ///////////////////////

// cubic easing in - accelerating from zero velocity
// t: current time, b: beginning value, c: change in value, d: duration
// t and d can be frames or seconds/milliseconds
Math.easeInCubic = function (t, b, c, d) {
	return c*(t/=d)*t*t + b;
};

// cubic easing out - decelerating to zero velocity
Math.easeOutCubic = function (t, b, c, d) {
	return c*((t=t/d-1)*t*t + 1) + b;
};

// cubic easing in/out - acceleration until halfway, then deceleration
Math.easeInOutCubic = function (t, b, c, d) {
	if ((t/=d/2) < 1) return c/2*t*t*t + b;
	return c/2*((t-=2)*t*t + 2) + b;
};


 ///////////// QUARTIC EASING: t^4 /////////////////////

// quartic easing in - accelerating from zero velocity
// t: current time, b: beginning value, c: change in value, d: duration
// t and d can be frames or seconds/milliseconds
Math.easeInQuart = function (t, b, c, d) {
	return c*(t/=d)*t*t*t + b;
};

// quartic easing out - decelerating to zero velocity
Math.easeOutQuart = function (t, b, c, d) {
	return -c * ((t=t/d-1)*t*t*t - 1) + b;
};

// quartic easing in/out - acceleration until halfway, then deceleration
Math.easeInOutQuart = function (t, b, c, d) {
	if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
	return -c/2 * ((t-=2)*t*t*t - 2) + b;
};


 ///////////// QUINTIC EASING: t^5  ////////////////////

// quintic easing in - accelerating from zero velocity
// t: current time, b: beginning value, c: change in value, d: duration
// t and d can be frames or seconds/milliseconds
Math.easeInQuint = function (t, b, c, d) {
	return c*(t/=d)*t*t*t*t + b;
};

// quintic easing out - decelerating to zero velocity
Math.easeOutQuint = function (t, b, c, d) {
	return c*((t=t/d-1)*t*t*t*t + 1) + b;
};

// quintic easing in/out - acceleration until halfway, then deceleration
Math.easeInOutQuint = function (t, b, c, d) {
	if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
	return c/2*((t-=2)*t*t*t*t + 2) + b;
};



 ///////////// SINUSOIDAL EASING: sin(t) ///////////////

// sinusoidal easing in - accelerating from zero velocity
// t: current time, b: beginning value, c: change in position, d: duration
Math.easeInSine = function (t, b, c, d) {
	return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
};

// sinusoidal easing out - decelerating to zero velocity
Math.easeOutSine = function (t, b, c, d) {
	return c * Math.sin(t/d * (Math.PI/2)) + b;
};

// sinusoidal easing in/out - accelerating until halfway, then decelerating
Math.easeInOutSine = function (t, b, c, d) {
	return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
};


 ///////////// EXPONENTIAL EASING: 2^t /////////////////

// exponential easing in - accelerating from zero velocity
// t: current time, b: beginning value, c: change in position, d: duration
Math.easeInExpo = function (t, b, c, d) {
	return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
};

// exponential easing out - decelerating to zero velocity
Math.easeOutExpo = function (t, b, c, d) {
	return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
};

// exponential easing in/out - accelerating until halfway, then decelerating
Math.easeInOutExpo = function (t, b, c, d) {
	if (t==0) return b;
	if (t==d) return b+c;
	if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
	return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
};


 /////////// CIRCULAR EASING: sqrt(1-t^2) //////////////

// circular easing in - accelerating from zero velocity
// t: current time, b: beginning value, c: change in position, d: duration
Math.easeInCirc = function (t, b, c, d) {
	return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
};

// circular easing out - decelerating to zero velocity
Math.easeOutCirc = function (t, b, c, d) {
	return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
};

// circular easing in/out - acceleration until halfway, then deceleration
Math.easeInOutCirc = function (t, b, c, d) {
	if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
	return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
};


 /////////// ELASTIC EASING: exponentially decaying sine wave  //////////////

// t: current time, b: beginning value, c: change in value, d: duration, a: amplitude (optional), p: period (optional)
// t and d can be in frames or seconds/milliseconds

Math.easeInElastic = function (t, b, c, d, a, p) {
	if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
	if (a < Math.abs(c)) { a=c; var s=p/4; }
	else var s = p/(2*Math.PI) * Math.asin (c/a);
	return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
};

Math.easeOutElastic = function (t, b, c, d, a, p) {
	if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
	if (a < Math.abs(c)) { a=c; var s=p/4; }
	else var s = p/(2*Math.PI) * Math.asin (c/a);
	return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
};

Math.easeInOutElastic = function (t, b, c, d, a, p) {
	if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
	if (a < Math.abs(c)) { a=c; var s=p/4; }
	else var s = p/(2*Math.PI) * Math.asin (c/a);
	if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
};


 /////////// BACK EASING: overshooting cubic easing: (s+1)*t^3 - s*t^2  //////////////

// back easing in - backtracking slightly, then reversing direction and moving to target
// t: current time, b: beginning value, c: change in value, d: duration, s: overshoot amount (optional)
// t and d can be in frames or seconds/milliseconds
// s controls the amount of overshoot: higher s means greater overshoot
// s has a default value of 1.70158, which produces an overshoot of 10 percent
// s==0 produces cubic easing with no overshoot
Math.easeInBack = function (t, b, c, d, s) {
	if (s == undefined) s = 1.70158;
	return c*(t/=d)*t*((s+1)*t - s) + b;
};

// back easing out - moving towards target, overshooting it slightly, then reversing and coming back to target
Math.easeOutBack = function (t, b, c, d, s) {
	if (s == undefined) s = 1.70158;
	return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
};

// back easing in/out - backtracking slightly, then reversing direction and moving to target,
// then overshooting target, reversing, and finally coming back to target
Math.easeInOutBack = function (t, b, c, d, s) {
	if (s == undefined) s = 1.70158; 
	if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
	return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
};


 /////////// BOUNCE EASING: exponentially decaying parabolic bounce  //////////////

// bounce easing in
// t: current time, b: beginning value, c: change in position, d: duration
Math.easeInBounce = function (t, b, c, d) {
	return c - Math.easeOutBounce (d-t, 0, c, d) + b;
};

// bounce easing out
Math.easeOutBounce = function (t, b, c, d) {
	if ((t/=d) < (1/2.75)) {
		return c*(7.5625*t*t) + b;
	} else if (t < (2/2.75)) {
		return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
	} else if (t < (2.5/2.75)) {
		return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
	} else {
		return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
	}
};

// bounce easing in/out
Math.easeInOutBounce = function (t, b, c, d) {
	if (t < d/2) return Math.easeInBounce (t*2, 0, c, d) * .5 + b;
	return Math.easeOutBounce (t*2-d, 0, c, d) * .5 + c*.5 + b;
};
//trace (">> Penner easing equations loaded");

//**module to stop this default action. (cross browser testing).**
Jcoda.stopDefault = function(e){
	if(e && e.preventDefault){
		e.preventDefault();	//**this is the W3C method.**
	}else{
		window.event.returnValue = false; //**this is the IE method.**
	};
	return false; //**an additional necessary return.**
};

//**module to stop action from bubbling up. (cross browser testing).**
Jcoda.stopBubble = function(e){
	if(e && e.stopPropagation){
		e.stopPropagation(); //**this is the W3C method.**
	}else{
		window.event.cancelBubble = true; //**this is the IE method.**
	};
};

//**module to perform only if DOM is ready after cross browser testing.**
Jcoda.domReady = function(f){
	if(Jcoda.domReady.done){return f();};
	
	if(Jcoda.domReady.timer){
		Jcoda.domReady.ready.push(f);
	}else{
		window.onLoad = Jcoda.isDOMReady;
		Jcoda.domReady.ready = [f];
		Jcoda.domReady.timer = setInterval(Jcoda.isDOMReady, 14);
	};
};

//**module to check if the loading of DOM is finish and ready for parsing (cross browser testing).**
Jcoda.isDOMReady = function(){
	if(Jcoda.domReady.done){return false;};
	if(document && document.getElementById && document.getElementsByTagName && document.body){
		Jcoda.domReady.done = true;
		clearInterval(Jcoda.domReady.timer); //**remove setInterval timer.**
		Jcoda.domReady.timer = null;
		for(var i=0; i<Jcoda.domReady.ready.length; i++){
			Jcoda.domReady.ready[i]();
		};
		Jcoda.domReady.ready = null;	
	};
};

//**module for searching classes with 2 parameters: classname (class attribute), parent (document).**
Jcoda.getElementsByClass = function(classname, parent){
	var domset = []; //**create an empty array.**
	var arr = parent.getElementsByTagName("*"); //**search for all elements inside of document.**
	var reg = new RegExp("(^| )" + classname + "( |$)"); //**create a regular expression for class name.**
	
	//**loop throgh all the elements in the document**
	for(var i=0, j=arr.length; i<j; i++){
		//**if classname matches request typed, add a new element in an array and pass it to the element requested.**
		if(reg.test(arr[i].className)){
			domset.push(arr[i]);
		};
	};
	return domset; //**output domset.**
};

//**module for searching css selector.**
Jcoda.$ = function(selector){
	var parent=(this==Jcoda)?document:this;
	
/*
**Using charAt, we’ll test the first character. If it is a “#”, then it’s an ID search.**
**If the first character is a “.” then search by class.**
Any other character and we’ll assume that it is a tagName search.**
*/
	switch(selector.charAt(0)){
		case "#":
			var el = selector.substr(1, selector.length);
			var domset = document.getElementById(el);
			domset.$ = Jcoda.$;
			break;
		case ".":
			var domset = [];
			var el = selector.substr(1, selector.length);
			var arr = Jcoda.getElementsByClass(el, parent);
			for(var i=0, j=arr.length; i<j; i++){
				arr[i].$ = Jcoda.$;
				domset.push(arr[i]);
			};			
			break;
		default:
			var domset = [];
			var arr = parent.getElementsByTagName(selector);
			for(var i=0, j=arr.length; i<j; i++){
				domset.push(arr[i]);
				domset[i].$ = Jcoda.$;
			};
			break;
	};
	return domset;
};

/*
**module for searching to see if the class exist in a document.**
**EXAMPLE  - Jcoda.hasClass(Jcoda.$("#wrapper"), "container");**
*/
Jcoda.hasClass = function(el, theClass){
	var pattern = new RegExp("(^| )"+theClass+"( |$)");
	if(pattern.test(el.className)){return true;};
	return false;
};


/*
**module for adding a class element inside a document.**
**EXAMPLE - Jcoda.addClass(Jcoda.$(".name"),"first");**
*/
Jcoda.addClass = function(el, theClass){
	if(!Jcoda.hasClass(el,theClass)){
		if(el.className==""){
			el.className = theClass;
		}else{el.className +=" "+theClass;};
	};
};

/*
**module for removing a class element inside a document.**
**EXAMPLE - Jcoda.removeClass(Jcoda.$(".name"),"first");**
*/
Jcoda.removeClass = function(el, theClass){
	var pattern = new RegExp("(^| )"+theClass+"( |$)");
	el.className = el.className.replace(pattern, "$1");
	el.className = el.className.replace(/ $/, "");
};

//**module for validating form fields.**
Jcoda.validateForm = function(form){
	
	//**Create variable for a validation set.**
	var vSet = {
		
		//**module for validating text in form field.**
		text:{
			'test':function(obj){
				var reg = /^[a-z,A-Z]+$/; //**create variable for regular expressions.**
				return (!(obj.value=="") && (reg.test(obj.value)))
			},
			'msg': "Please use only letters." //**module for error message**
		},
	
		//**module for validating characters in username form field.**
		username:{
			'test':function(obj){
				var reg = /^[0-9,a-z,A-Z,_]+$/; //**create variable for regular expressions.**
				return (!(obj.value=="") && (reg.test(obj.value)))
			},
			'msg': "Only use letters, numbers, and _" //**module for error message**
		},
		
		//**module for validating characters in password form field.**
		password:{
			'test':function(obj){
				var reg = /^\w+$/; //**create variable for regular expressions.**
				return (!(obj.value=="") && (reg.test(obj.value)))
			},
			'msg': "Only use letters, numbers, and _" //**module for error message**
		},
		
		//**module for validating characters in retype password form field.**
		retype_password:{
			'test':function(obj){
				return (obj.value==Jcoda.$(".password")[0].value) //**match the value of characters in the form field from the requested class attribute.**
			},
			'msg': "Does not match your 'Password' field." //**module for error message**
		},
		
		//**module for validating characters in email field.**
		email:{
			'test':function(obj){
				var reg = /^[\w\.\-]+\@([\w\-]+\.)+[a-z]{3}$/;  //**create variable for regular expressions.**
				return (!(obj.value=="") && (reg.test(obj.value)))
			},
			'msg': "Please follow <em>email@domain.com</em>" //**module for error message**
		},
		
		//**module for validating characters in form field.**
		retype_email:{
			'test':function(obj){
				return (obj.value==Jcoda.$(".email")[0].value) //**match the value of characters in the form field from the requested class attribute.**
			},
			'msg': "Does not match your 'Email' field." //**module for error message**
		},
		
		//**module for validating characters in form field.**
		website:{
			'test':function(obj){
				var reg = /^(http\:\/\/\www\.)+([a-z]+\.)+[a-z]{3}$/; //**create variable for regular expressions.**
				return (!(obj.value=="") && (reg.test(obj.value)))
			},
			'msg': "Please follow <em>http:&#47;&#47;www.domain.com</em>" //**module for error message**
		},
		
		//**module for validating numeric characters in form field.**
		phone:{
			'test':function(obj){
				var reg = /^(\([0-9]{3}\))+([0-9]{3}\-)+([0-9]{4})$/; //**create variable for regular expressions.**
				return (!(obj.value=="") && (reg.test(obj.value)))
			},
			'msg': "Please follow <em>(###)###-####</em>" //**module for error message**
		}
	};
	
	//**loop for all the form elements validated in form field.**
	for(var i=0; i<form.elements.length; i++) 
	{
		if(form.elements[i].type!="submit"){
			var fel = form.elements[i];
			
			//**method to focus object.**
			fel.onfocus = function(){
				Jcoda.addClass(this.parentNode, 'formhilite'); //**add a highlight class style in current field.**
			};
			
			//**method to loose focus on object.**
			fel.onblur = function(){
				Jcoda.removeClass(this.parentNode, 'formhilite'); //**remove a highlight class style in current field.**
			};
			
			//**key up method for form fields.**
			fel.onkeyup = function(){
				
				//**loop through validation if characters values in requested elements passes validation.**
				for(var j in vSet){
					var success = vSet[j].test(this);
					if(Jcoda.hasClass(this, j) && success){
						Jcoda.$("#"+this.id+"-error").innerHTML = "";
						if(Jcoda.hasClass(this, "required")){
							var tmp = Jcoda.$("#"+this.id+"-req");
							tmp.innerHTML = "&radic;";
							Jcoda.addClass(tmp, "vertified");
						}
					}else if(Jcoda.hasClass(this, j) && !success){
						Jcoda.$("#"+this.id+"-error").innerHTML = vSet[j].msg;
						if(Jcoda.hasClass(this, "required")){
							var tmp = Jcoda.$("#"+this.id+"-req");
							tmp.innerHTML = "*";
							Jcoda.removeClass(tmp, "vertified");
						};
					};
				};
			};
			
		}else{
			//**method of form submission.**
			form.onsubmit = function(e){
				var passed = true;
				for(var ii=0; ii<form.elements.length; ii++){
					if(form.elements[ii].type!="submit"){
						var fel=form.elements[ii];
						for(var jj in vSet){
							if(Jcoda.hasClass(fel, jj)){
								passed = (vSet[jj].test(fel))?passed:false;
							};
						};
					};
				};
				return (passed)?true:Jcoda.stopDefault(e);
			};
		};
	};
};

//**module for serializing any object data set.**
Jcoda.serialize = function(obj){
	var ser = [];
	for(var p in obj){
		ser.push(p + "=" + encodeURIComponent(obj[p]));
	};
	return ser.join("&");
};

//**module for AJAX.**
Jcoda.ajax=function(options){
	var options = {
		url:options.url || "", //**If url path is set from external file, use it. Otherwise use empty string.**
		timeout:options.timeout || 7000, //**If timeout is set from external file, use it. Otherwise use default setttings.**
		onSuccess:options.onSuccess || function(){}, //**If Success function is set from external file, use it. Otherwise use default function setttings.**
		onError:options.onError || function(){}, //**If an Error function set from external file, use it. Otherwise use default setttings.**
		data:options.data || {},  //**If data is set from external file, use it. Otherwise use default setttings.**
		type:options.type || "text" //**If type of data is set from external file, use it. Otherwise use text.**
	};
	
	if(typeof options.url==="undefined"){
		return;
	};
	
	//**send data to serialize.**
	options.data = Jcoda.serialize(options.data);
	
	//**IE6 failure solution.**
	if(typeof XMLHttpRequest === "undefined"){
		XMLHttpRequest=function(){
			return new ActiveXObject("Msxml2.XMLHTTP");
		};
	};
	
	var xhr = new XMLHttpRequest(); //**create a constructor for XML HTTP request.**
	xhr.open("GET",options.url+"?"+options.data,true);
	xhr.send(null);
	
	//**method for setting timeout functionality.**
	setTimeout(function(){
		if(xhr){
			xhr.abort();
		}
	},options.timeout);
	
	//**method for setting states when changing.**
	xhr.onreadystatechange=function(){
		//**state of request.**
		if(xhr.readyState===4){
			//**check for errors.**
			if(xhr.status===200 || xhr.status===304){
				//**success.**
				var result = (options.type==="text")?xhr.responseText:xhr.responseXML;
				options.onSuccess(result);
			}else{
				//**errors.**
				options.onError();
			};
			
			xhr = undefined; //**prevent memory leaks.**
		};
	};
};

//**module for getting styles from CSS.**
Jcoda.getStyle = function(elem, name){
	if(elem.style[name]){ //**if element style is from JavaScript/Inline (all browsers), insert this code.**
		return elem.style[name];
	}else if(elem.currentStyle){ //**if element style is under Internet Explorer CSS (all IE), insert this code.**
		return elem.currentStyle[name];
	}else if(document.defaultView){ //**if element style is under W3C CSS (browsers other than IE), insert this code.**
		name = name.replace(/([A-Z])/g, "-$1");
		name = name.toLowerCase();
		var el = document.defaultView.getComputedStyle(elem,"")
		return el.getPropertyValue(name);
	}else{
		return null; //***otherwise, do nothing.**
	};
};


Jcoda.animate = function(options){
	var options = {
		change: parseInt(options.change) || 0,
		start: options.start || 0,
		duration: options.duration || 600,
		easing: options.easing || 'easeOutCirc',
		property: options.property || null,
		elem: options.elem || null,
		complete:options.complete || function(){}
	};
	
	if(!options.elem || !options.property){return false;}
	var i=0;
	var anim = setInterval(function(){
		i+=30;
		options.elem.style[options.property] = Math[options.easing](i, options.start, options.change, options.duration) + "px";
		if(i>=options.duration){
			if(options.property == 'height' || options.property == 'width'){
				if(options.start + options.change <= 0){
					options.elem.style.display="none";
					options.elem.style[options.property]=options.start+"px";
				};
			};
			clearInterval(anim);
			anim = null;
			options.complete();
			options = {};
		};
	}, 30);
};

Jcoda.carousel = function(options){
	var options = {
		carouselcontainer: options.carouselcontainer,
		nextbutton: options.nextbutton || null,
		previousbutton: options.previousbutton || null,
		imagewidth: options.imagewidth || 300,
		imageheight: options.imageheight || 200,
		items: options.items || {},
		titleelement: options.titleelement || null,
		detailelement: options.detailelement || null,
		textelement: options.textelement || null,
	};
	
	imageWidth = options.imagewidth;
	currentimg = 1;

	function init(){
		options.previousbutton.style.display = 'none';
		options.nextbutton.style.cursor = "auto";
		options.previousbutton.style.cursor = "auto";
		
		totalimages = 0;
		for(x in news){
			options.carouselcontainer.innerHTML += "<li><img src="+options.items[x].image+" width='"+options.imagewidth+"' height='"+options.imageheight+"' alt=''/></li>";
			
			totalimages++;
		};
		
		if(options.titleelement)options.titleelement.innerHTML = options.items["item1"].title;
		if(options.detailelement)options.detailelement.innerHTML = options.items["item1"].detail;
		if(options.textelement)options.textelement.innerHTML = options.items["item1"].text;
	};
	
	//call the init function
	init();
	
	options.nextbutton.onclick = function(e){
		next();
		e.preventDefault();
	};
	
	options.previousbutton.onclick = function(e){
		previous();
		e.preventDefault();
	};
	
	totalImages = options.items.length;
	
	function next(){
		currentimg++;
		
		//for the main slider to move left
		Jcoda.animate({
			change: -imageWidth,
			start: parseFloat(Jcoda.getStyle(options.carouselcontainer, "marginLeft")),
			duration: 1000,
			easing: 'easeOutCirc',
			property: "marginLeft",
			elem: options.carouselcontainer
		});
		
		//for the detail element to move up and down
		Jcoda.animate({
			elem: options.detailelement,
			start: parseInt(Jcoda.getStyle(options.detailelement, "marginTop")),
			change: 60,
			property: "marginTop",
			complete:function(){
				options.detailelement.innerHTML = options.items["item"+currentimg].detail;
				options.textelement.innerHTML=options.items["item"+currentimg].text;
				Jcoda.animate({
					elem:options.detailelement,
					start:parseInt(Jcoda.getStyle(options.detailelement, "marginTop")),
					change:-60,
					property: "marginTop"
				});
			}
		});
		
		//for the title element to move up and down
		Jcoda.animate({
			elem:options.titleelement,
			start: parseInt(Jcoda.getStyle(options.titleelement, "marginTop")),
			change:-30,
			property:"marginTop",
			complete:function(){
				options.titleelement.innerHTML = options.items["item"+currentimg].title;
				Jcoda.animate({
					elem:options.titleelement,
					start:parseInt(Jcoda.getStyle(options.titleelement, "marginTop")),
					change:30,
					property: "marginTop"
				});
			}
		});
		//to hide or show the next button
		if(currentimg == totalimages){
			options.nextbutton.style.display = 'none';
			options.previousbutton.style.display = 'block';
		}else{
			options.nextbutton.style.display = 'block';
			options.previousbutton.style.display = 'block';
		};
	};
	
		function previous(){
		currentimg--;
		
		//for the main slider to move left
		Jcoda.animate({
			change: +imageWidth,
			start: parseFloat(Jcoda.getStyle(options.carouselcontainer, "marginLeft")),
			duration: 1000,
			easing: 'easeOutCirc',
			property: "marginLeft",
			elem: options.carouselcontainer,
		});
		
		//for the detail element to move up and down
		Jcoda.animate({
			elem: options.detailelement,
			start: parseInt(Jcoda.getStyle(options.detailelement, "marginTop")),
			change: 60,
			property: "marginTop",
			complete:function(){
				options.detailelement.innerHTML = options.items["item"+currentimg].detail;
				options.textelement.innerHTML=options.items["item"+currentimg].text;
				Jcoda.animate({
					elem:options.detailelement,
					start:parseInt(Jcoda.getStyle(options.detailelement, "marginTop")),
					change:-60,
					property: "marginTop"
				});
			}
		});
		
		//for the title element to move up and down
		Jcoda.animate({
			elem:options.titleelement,
			start: parseInt(Jcoda.getStyle(options.titleelement, "marginTop")),
			change:-30,
			property:"marginTop",
			complete:function(){
				options.titleelement.innerHTML = options.items["item"+currentimg].title;
				Jcoda.animate({
					elem:options.titleelement,
					start:parseInt(Jcoda.getStyle(options.titleelement, "marginTop")),
					change:30,
					property: "marginTop"
				});
			}
		});
		
		//to hide or show the next button
		if(currentimg == 1){
			options.nextbutton.style.display = 'block';
			options.previousbutton.style.display = 'none';
		}else{
			options.nextbutton.style.display = 'block';
			options.previousbutton.style.display = 'block';
		};
	};
};