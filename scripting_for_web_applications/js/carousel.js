/*------------------------------------------------------------------
[Carousel JavaScript]

Project:	JavaScript Application
Version:	1.2
Last change:	09/04/13 [modify comments, cleanup, proper encapsulation/closure]
Author:		Franco Haley

DIRECTORY
	1. =JSON
	2. =OBJECTS
-------------------------------------------------------------------*/

//Using author's custom extension library/plugin (calling common components - browser fixes)
Jcoda.domReady(function() {

/* ======= [JSON]
========================================= */
	news = {
		
		item1:{
			image:"img/large/01.jpg",
			title: " 1 This is the Title",
			detail:" 1 This is the detail",
			text:"Unprecedented demonstrations sweeping the Middle East and North Africa spread Wednesday to Libya, where police clashed with anti-government protesters in the coastal city of Benghazi, an independent source told CNN."
			},
		item2:{
			image:"img/large/02.jpg",
			title: " 2 This is the Title",
			detail:" 2 This is the detail",
			text:"Photo: AP Iran's clerical establishment has called for a major rally in Tehran on Friday, to express what it calls its hatred of reformists who organized a day of major anti-government protests earlier this week."
			},
		item3:{
			image:"img/large/03.jpg",
			title: " 3 This is the Title",
			detail:" 3 This is the detail",
			text:"CHARLESTON, West Virginia (Reuters) - Three deputy US Marshals were shot on Wednesday as they were serving an arrest warrant at a home in West Virginia, a spokesman for the US Marshals Service said."
			},
		item4:{
			image:"img/large/04.jpg",
			title: " 4 This is the Title",
			detail:" 4 This is the detail",
			text:"Choreographer Laurieanne Gibson opens up about Gaga's vision for the song and video on 'The Seven.' By Jocelyn Vena (@jocelyn1212) Following Lady Gaga's performance of Born This Way at the Grammy Awards on Sunday, fans are wondering what they will ..."
			},
		item5:{
			image:"img/large/05.jpg",
			title: " 5 This is the Title",
			detail:" 5 This is the detail",
			text:"The deadline for the St. Louis Cardinals and Albert Pujols to reach agreement on a contract extension passed today at noon, and the game's most prolific hitter of this century is prepared to hit the free agent market after ..."
			}
		};

/* ======= [OBJECTS]
========================================= */
	Jcoda.carousel({
		carouselcontainer: Jcoda.$("#myCarousel"),
		nextbutton: Jcoda.$("#next"),
		previousbutton: Jcoda.$("#previous"),
		imagewidth: 500,
		imageheight: 400,
		items: news,
		titleelement: Jcoda.$("#carouselTitle"),
		detailelement: Jcoda.$("#carouselDetail"),
		textelement: Jcoda.$("#carouselText")
	});
});