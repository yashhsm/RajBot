var botScriptExecutor = require('bot-script').executor;
var scr_config = require('./scr_config.json');

function MessageHandler(context, event) {
    //ScriptHandler(context, event);
    //menu
	if (event.message.toLowerCase() == "menu" || event.message.toLowerCase() == "help") {
		var menuCat = ["Hello "+ event.senderobj.display + "! Greetings from Vasundhara Raje,The Hon'ble Chief Minister of Rajasthan. \n\nWelcome! What would you like to do today?", 
		{
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": "menu",
			"items": [
				{
					"title": "Discover Rajasthan",
					"subtitle": "",
					"imgurl": "https://www.gwtours.com.au/wp-content/uploads/2016/10/Rajasthan-1.jpg",
					"options": [{
						"type": "text",
						"title": "Discover"
					}]
				},
				{
					"title": "Experience Rajasthan",
					"subtitle": "",
					"imgurl": "https://i.ytimg.com/vi/OY8Fjok3J20/maxresdefault.jpg",
					"options": [{
						"type": "text",
						"title": "Experience"
					}]
				},
				{
					"title": "Plan Your Visit",
					"subtitle": "",
					"imgurl": "http://ste.india.com/sites/default/files/2016/04/11/477953-rajasthan-ts.jpg",
					"options": [{
						"type": "text",
						"title": "Plan"
					}]
				},
				{
					"title": "Know Rajasthan",
					"subtitle": "",
					"imgurl": "http://factualsnews.com/wp-content/uploads/2017/03/Rajasthan-Tourism-Ad-Music.png",
					"options": [{
						"type": "text",
						"title": "Know"
					}]
				},
				{
					"title": "Swachh Bharat - Rajasthan",
					"subtitle": "Check out the latest updates and what you can do. ",
					"imgurl": "https://timesofindia.indiatimes.com/thumb/msid-48159028,width-400,resizemode-4/48159028.jpg",
					"options": [{
						"type": "url",
						"url": "https://blogs.timesofindia.indiatimes.com/voices/swachh-bharat-mission-lessons-from-rajasthan/",
						"title": "Know more!"
					}]
				}
		    ]
		}]; 
		context.sendResponse(JSON.stringify(menuCat));
		return;
	}
	
	if (event.message.toLowerCase() == "discover" || event.message.toLowerCase() == "discover 1" ||event.message.toLowerCase() == "what are the places to visit" || event.message.toLowerCase() == "places to visit" || event.message.toLowerCase() == "attractions" ) {
		var discoverMsg = ["You'll be amazed to know how much there's to discover in Rajasthan!", {
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": "prime1",
			"items": 
			[
				{
					"title": "Tourist Places To Visit In Rajasthan",
					"subtitle": "JOURNEY ACROSS RAJASTHAN",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/banners/desk/10026.jpg",
					"options": [{
						"type": "text",
						"title": "Destinations"
					},
					{
						"type": "url",
						"title": "Visit Page",
						"url": "http://www.tourism.rajasthan.gov.in/tourist-destinations.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "Forts In Rajasthan",
					"subtitle": "EXPLORE THE SPLENDOUR",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/banners/desk/10023.jpg",
					"options": [{
						"type": "text",
						"title": "Forts"
					},
					{
						"type": "url",
						"title": "Visit Page",
						"url": "http://www.tourism.rajasthan.gov.in/forts.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "Lakes In Rajasthan",
					"subtitle": "EXPLORE THE SPLENDOUR",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/353.jpg",
					"options": [{
						"type": "text",
						"title": "Lakes"
					},
					{
						"type": "url",
						"title": "Visit Page",
						"url": "http://www.tourism.rajasthan.gov.in/lakes-rivers-to-visit.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "Wildlife In Rajasthan",
					"subtitle": "EXPLORE THE SPLENDOUR",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/397.jpg",
					"options": [{
						"type": "text",
						"title": "Wildlife"
					},
					{
						"type": "url",
						"title": "Visit Page",
						"url": "http://www.tourism.rajasthan.gov.in/parks-and-wildlife.html",
						"webview_height_ratio": "full"
					}]
				}
			]
		}];
		context.sendResponse(JSON.stringify(discoverMsg));
		return;
	}
	if(event.message.toLowerCase() == "destinations" || event.message.toLowerCase() == "destinations 1" || event.message.toLowerCase() == "prime destinations") {
		var destCat = ["Here are some of our prime destinations -", {
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": "prime1",
			"items": 
			[
				{
					"title": "Ajmer",
					"subtitle": "The Delightful Dargah Destination",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/banners/desk/18.jpg",
					"options": [{
						"type": "text",
						"title": "Explore"
					},
					{
						"type": "url",
						"title": "Visit Page",
						"url": "http://www.tourism.rajasthan.gov.in/ajmer.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "Barmer",
					"subtitle": "India's Fifth Largest District",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/banners/desk/10013.jpg",
					"options": [{
						"type": "text",
						"title": "Explore"
					},
					{
						"type": "url",
						"title": "Visit Page",
						"url": "http://www.tourism.rajasthan.gov.in/barmer.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "Chittorgarh",
					"subtitle": "The Land of India's Finest Fort",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/banners/desk/Chittorgarh-Fort-banner.png",
					"options": [{
						"type": "text",
						"title": "Explore"
					},
					{
						"type": "url",
						"title": "Visit Page",
						"url": "http://www.tourism.rajasthan.gov.in/chittorgarh.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "Dausa",
					"subtitle": "Beautiful Like Heaven",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/banners/desk/10025.jpg",
					"options": [{
						"type": "text",
						"title": "Explore"
					},
					{
						"type": "url",
						"title": "Visit Page",
						"url": "http://www.tourism.rajasthan.gov.in/dausa.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "More Destinations",
					"subtitle": "visit our website for more destinations",
					"imgurl": "http://iitmindia.com/wp-content/uploads/2017/01/rajasthan-collage-1.jpg",
					"options": [{
						"type": "url",
						"title": "Explore More",
						"url": "http://www.tourism.rajasthan.gov.in/tourist-destinations.html",
						"webview_height_ratio": "full"
					}]
				}
				
			]
		}];
		context.sendResponse(JSON.stringify(destCat));
		return;
	}
	//Ajmer
	if(event.message.toLowerCase() == "explore 1" && event.messageobj.refmsgid != "experience"){
		context.simpledb.roomleveldata.Nearby = true;
		console.log("explore ref msg ="+ event.messageobj.refmsgid);
		var city = "";
		if(event.messageobj.refmsgid == "prime1"){
			context.simpledb.roomleveldata.Nearby = false;
			city = "Ajmer";
		}
		else{
			city = "Jodhpur";
		}
		var text = "Attractions & places to visit and explore in " + city+" -";
		var expCatCity = [text, {
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": city,
			"items":[
				{
					"title": "Places To See",
					"subtitle": "",
					"imgurl": "http://tajholidays.tajhotels.com/content/dam/thrp/destinations/Ajmer/16x7intro/Ajmer-Intro-4X3.jpg",
					"options": [{
						"type": "text",
						"title": "Show"
					}]
				},
				{
					"title": "Fairs & Festivals",
					"subtitle": "",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/experience/ffe/27.jpg",
					"options": [{
						"type": "text",
						"title": "Show"
					}]
				},
				{
					"title": "Things To Do",
					"subtitle": "",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/experience/travel-in-rajasthan/Camel-safari.jpg",
					"options": [{
						"type": "text",
						"title": "Show"
					}]
				},
				{
					"title": "How To Reach",
					"subtitle": "",
					//http://www.jktrips.com/images/bannerhowto.png
					"imgurl": "https://qph.fs.quoracdn.net/main-qimg-754a92626235954c46d244c25f7a9f04",
					"options": [{
						"type": "text",
						"title": "Show"
					}]
				},
				{
					"title": "Nearby Places",
					"subtitle": "",
					"imgurl": "https://i1.wp.com/www.nomadline.com/wp-content/uploads/2016/03/rajasthan.jpg?resize=550%2C463",
					"options": [{
						"type": "text",
						"title": "Show"
					}]
				},
				{
					"title": "Plan Your Visit",
					"subtitle": "",
					"imgurl": "http://www.rajgovt.org/wp-content/uploads/2016/02/Bingo22.jpg",
					"options": [{
						"type": "text",
						"title": "Plan"
					},
					{
						"type": "url",
						"title": "Visit Site",
						"url": "http://www.tourism.rajasthan.gov.in/plan.html",
						"webview_height_ratio": "full"
					}]
				}]
    		}];
		context.sendResponse(JSON.stringify(expCatCity));
		return;
	}
	//Barmer
	//Chittorgarh
	//Dausa 
	if((event.message.toLowerCase() == "show 1" && event.messageobj.refmsgid == "Ajmer") || event.message.toLowerCase() == "what to see in ajmer?"){
		var seeCatAjmer = ["Come explore the wonders and sites that Ajmer has to offer you. There’s always something to see in Rajasthan.", {
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": "Ajmer",
			"items": 
			[
				{
					"title": "THE AJMER SHARIF DARGAH",
					"subtitle": "This is a Sufi shrine which encloses the ‘maqbara’ (grave) of Garib Nawaz, the Sufi saint Khwaja Moinuddin Chisti. Built in the 13th century, the shrine is popular among people of all faiths who flock here to have their prayers answered. The shrine has three gates – the main gate or the Nizam gate, the Shah Jahan gate erected by the Mughal Emperor and the Buland Darwaza. Another big draw at this holy shrine is the sacred and scrumptious food that is served to devotees. Cooked in giant cauldrons known as ‘degs’, devotees gather in throngs to be blessed by this prasad.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/suggested-itineraries/3.JPG",
				},
				{
					"title": "ADHAI DIN KA JHONPDA",
					"subtitle": "The Adhai Din Ka Jhonpda was originally built to function as a Sanskrit college but was later converted into a mosque by Sultan Ghori in 1198 AD. An impressive blend of Indo-Islamic architecture, the structure was further beautified by Sultan Iltutmish in 1213 AD. Legend has it that the mosque is known as Adhai din ka Jhonpda (literally meaning, The Hut of Two and a Half Days) because of a two and half day fair held here during Urs in the 18th century.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/suggested-itineraries/5.png",
				},
				{
					"title": "MAYO COLLEGE",
					"subtitle": "Mayo College is one of India’s oldest independent boarding schools. Founded in 1875, and named after Richard Bourke, the 6th Earl of Mayo, Mayo College was set up to provide the scions of India’s princely states with an education similar to that provided by the Eton College in Britain. John Lockwood Kipling, father of Nobel Laureate, Rudyard Kipling, as principal of Mayo College, furnished the design of the Coat of Arms which shows a Rajput and a Bhil warrior. The college building is one of the finest extant examples of Indo-Saracenic style of architecture.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/suggested-itineraries/6.jpg",
				},
				{
					"title": "ANASAGAR LAKE",
					"subtitle": "Anasagar Lake is a scenic artificial lake, commissioned and built by Arnoraj Chauhan, son of Ajaypal Chauhan, between 1135 and 1150 AD. Arnoraj was also known as Anaji, which gives the lake its name. Many years later, Mughal Emperor Jahangir added his touch to the lake by laying out the Daulat Bagh Gardens near the lake. Emperor Shah Jahan too, contributed to the expansion by building five pavilions, known as the Baradari, between the garden and the lake.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/suggested-itineraries/7.jpg",
				},
				{
					"title": "More Places To Visit",
					"subtitle": "visit our website for more places to visit in Ajmer...",
					"imgurl": "http://iitmindia.com/wp-content/uploads/2017/01/rajasthan-collage-1.jpg",
					"options": [{
						"type": "url",
						"title": "Visit Now",
						"url": "http://www.tourism.rajasthan.gov.in/ajmer.html",
						"webview_height_ratio": "full"
					}]
				}
			]
		}];
		context.sendResponse(JSON.stringify(seeCatAjmer));
		return;
	}
	if(event.message.toLowerCase() == "show 1" && event.messageobj.refmsgid == "Jodhpur"){
			var seeCatJodhpur = ["Come explore the wonders and sites that Jodhpur has to offer you. There’s always something to see in Rajasthan.", {
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": "Jodhpur",
			"items": 
			[
				{
					"title": "MEHRANGARH FORT",
					"subtitle": "Rising perpendicular and impregnable from a hill which is 125 metres above Jodhpur’s skyline is the Mehrangarh Fort. This historic fort is one of the most famous in India and is packed with history and legends. Mehrangarh Fort still bears the imprints of cannonball attacks courtesy the armies of Jaipur on its second gate. Chiselled and sturdy, the fort is known for its exquisite latticed windows, carved panels, intricately decorated windows and walls of Moti Mahal, Phool Mahal and Sheesh Mahal.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/154.jpg"
				},
				{
					"title": "KHEJARLA FORT",
					"subtitle": "Located 85 kilometres from the main city, the 400-year old Khejarla Fort is situated in a rural setting. The stunning red sandstone monument, now a hotel, is an example of Rajput architecture. Visitors will be mesmerised by the fort's picturesque settings, latticework friezes and intricate Jharokas.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/155.jpg"
				},
				{
					"title": "UMAID BHAWAN PALACE",
					"subtitle": "Umaid Bhawan Palace was built by Maharaja Umaid Singh in 1929 to counter a famine which had hit the state at the time. It was also known as the Chittar Palace while being constructed thanks to the use of stones drawn from the Chittar hill. The palace was designed by HV Lanchester, a renowned British architect, and was completed in 16 years. Built with sandstone and marble, the architecture of the palace is described as a blend of lndo-Saracenic, Classical Revival and Western Art Deco styles. It is recognised as one of the largest private homes in the world and also one of the more spectacular buildings. It is the only palace built in the 20th century.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/156.jpg"
				},
				{
					"title": "MOTI MAHAL",
					"subtitle": "Moti Mahal, as the name suggests, is the Pearl Hall where the royal families held their audience. The hall is known to have glass windows and five nooks that enabled the queens to listen to the proceedings taking place in the Sringar Chowki, The Royal Throne of Jodhpur.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/157.jpg"
				},
				{
					"title": "More Places To Visit",
					"subtitle": "visit our website for more places to visit in Jodhpur...",
					"imgurl": "http://iitmindia.com/wp-content/uploads/2017/01/rajasthan-collage-1.jpg",
					"options": [{
						"type": "url",
						"title": "Visit Now",
						"url": "http://www.tourism.rajasthan.gov.in/jodhpur.html",
						"webview_height_ratio": "full"
					}]
				}
			]
		}];
		context.sendResponse(JSON.stringify(seeCatJodhpur));
		return;
	}
	//festivals
	if(event.message.toLowerCase() == "show 2" && event.messageobj.refmsgid == "Ajmer"){
		context.sendResponse("Be a part of the festivities and traditions that Ajmer has to offer. It’s always a celebration in Rajasthan.");
		return;
	}
	if(event.message.toLowerCase() == "show 2" && event.messageobj.refmsgid == "Jodhpur"){
		var festCatJodhpur = ["Be a part of the festivities and traditions that Jodhpur has to offer. It’s always a celebration in Rajasthan.", {
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": "Jodhpur",
			"items": 
			[
				{
					"title": "MARWAR FESTIVAL",
					"subtitle": "The Marwar festival is one the most famous festivals of Jodhpur and India. The two-day festival is held every year in the month of Ashwin (between September and October) and for one night in Osian Town in the Thar Desert, in memory of the heroes of Rajasthan. It was originally known as the Maand Festival. The Marwar festival is a centre of authentic folk music, culture and lifestyle of Rajasthan’s rulers. The royal collection of art forms in this festival revisit the legends and stories written and sung to honour the former rulers of Marwar. Additionally, other attractions comprise of camel tattoo show and polo. The festival is held at famous venues like the Umaid Bhavan Palace, Mandore and Mehrangarh Fort.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/181.jpg"
				}
			]
		}];
		context.sendResponse(JSON.stringify(festCatJodhpur));
		return;
	}
	//do
	if(event.message.toLowerCase() == "show 3" && event.messageobj.refmsgid == "Ajmer"){
		context.sendResponse("Engage in the many activities, tours and adventures that await you in Ajmer. There’s always something to do in Rajasthan.");
		return;
	}
	if(event.message.toLowerCase() == "show 3" && event.messageobj.refmsgid == "Jodhpur"){
		var doCatJodhpur = ["Engage yourself in the many activities, tours and adventures that await you in Jodhpur. There’s always something to do in Rajasthan.", {
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": "Jodhpur",
			"items": 
			[
				{
					"title": "FLYING FOX",
					"subtitle": "This is a great opportunity to fly across the grandeur of forts and catch a glimpse of the vivid landscapes in Jodhpur, Rajasthan. The zip line tour, also called the Flying Fox, presents to you a sensational new perspective on the magnificent Mehrangarh Fort. Fly high over the outer battlements of Rajasthan's most majestic fortress, glide serenely over two desert lakes, trek through the Rao Jodha eco-park and enjoy the best view of Mehrangarh and the Blue City of Jodhpur from the sky.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/180.jpg"
				},
				{
					"title": "BISHNOI VILLAGE TOUR",
					"subtitle": "No trip to Jodhpur is complete without a visit to the Bishnoi Village Safari. The best (and only) way to get a glimpse into the rich cultural life of the state of Marwa, this safari is the brainchild of the Rajas and Maharajas of Jodhpur. One can catch the natural beauty of the state here. The Bishnoi villagers are worshippers of nature and believe in the sanctity of all living things. One can also spot numerous migratory birds around Guda Bishnoi Lake. This water body is also a watering hole for animals from nearby areas. Bishnoi village is the perfect place to experience the traditions and customs of tribal life. It is a place caught in a delightful time warp, where life still goes on the way it did in the days of yore.",					
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/368.jpg"
				},
				{
					"title": "CAMEL SAFARI",
					"subtitle": "There is no better way to explore the vastly enchanting desert of Rajasthan than with a Camel Safari. Traverse through desert sand dunes, past ancient havelis, temples and even historic landmarks. The safari has options to suit the needs of the visitors. This offers the tourists a chance to get a taste of the real, rural rustic Rajasthani lifestyle. If you’re looking to experience an authentic camel-back tour of Rajasthan then head to Jodhpur.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/369.jpg"
				}
			]
		}];
		context.sendResponse(JSON.stringify(doCatJodhpur));
		return;
	}
	//how to reach
	if(event.message.toLowerCase() == "show 4" && event.messageobj.refmsgid == "Ajmer"){
		context.sendResponse("Here are the most convenient ways to reach Ajmer- \n1. The Jaipur Airport is the closest and is located 138 kilometres away.\n2. You can hop on to a bus from almost any city in and around Rajasthan and get here. These include Jaipur, Agra, Aligarh, Bikaner, Bharatpur, Barmer, Haridwar, Chittorgarh, Jodhpur, Jaisalmer and Nagaur.\n3. Ajmer is located on the Delhi-Jaipur-Marwar-Ahmedabad-Mumbai railway line. It is well connected by rail as most trains on this route halt at Ajmer.");
		return;
	}
	if(event.message.toLowerCase() == "show 4" && event.messageobj.refmsgid == "Jodhpur"){
		context.sendResponse("Here are the most convenient ways to reach Jodhpur- \n1. Jodhpur is connected to Delhi and Mumbai and the airport is about 5 kilometres from the city centre.\n2. Jodhpur is well-connected by road to all major cities and towns.\n3. Jodhpur is well-connected by direct trains from all metros and major cities in India.");
		return;
	}
	//nearby
	if(event.message.toLowerCase() == "show 5" && event.messageobj.refmsgid == "Ajmer"){
		var nearbyCatAjmer = ["Here are the nearby places that you can cover during your Trip to Ajmer.", {
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": "Ajmer",
			"items": 
			[
				{
					"title": "Jodhpur",
					"subtitle": "207 kms",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/banners/desk/12.jpg",
					"options":[{
						"type": "text",
						"title": "Explore"
					},{
						"type": "url",
						"title": "Visit Site",
						"url": "http://www.tourism.rajasthan.gov.in/jodhpur.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "Pushkar",
					"subtitle": "17 kms",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/banners/desk/11.jpg",
					"options":[{
						"type": "text",
						"title": "Explore"
					},{
						"type": "url",
						"title": "Visit Site",
						"url": "http://www.tourism.rajasthan.gov.in/pushkar.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "Jaipur",
					"subtitle": "132 kms",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/banners/desk/14.jpg",
					"options":[{
						"type": "text",
						"title": "Explore"
					},{
						"type": "url",
						"title": "Visit Site",
						"url": "http://www.tourism.rajasthan.gov.in/jaipur.html",
						"webview_height_ratio": "full"
					}]
				}
			]}
		];
		context.sendResponse(JSON.stringify(nearbyCatAjmer));
		return;
	}
	if(event.message.toLowerCase() == "show 5" && event.messageobj.refmsgid == "Jodhpur"){
		var nearbyCatJodhpur = ["Here are the nearby places that you can cover during your Trip to Ajmer.", {
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": "Jodhpur",
			"items": 
			[
				{
					"title": "Pushkar",
					"subtitle": "186 kms",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/banners/desk/11.jpg",
					"options":[{
						"type": "text",
						"title": "Explore"
					},{
						"type": "url",
						"title": "Visit Site",
						"url": "http://www.tourism.rajasthan.gov.in/pushkar.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "Jaisalmer",
					"subtitle": "286 kms",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/banners/desk/10008.jpg",
					"options":[{
						"type": "text",
						"title": "Explore"
					},{
						"type": "url",
						"title": "Visit Site",
						"url": "http://www.tourism.rajasthan.gov.in/jaisalmer.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "Udaipur",
					"subtitle": "257 kms",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/banners/desk/10.jpg",
					"options":[{
						"type": "text",
						"title": "Explore"
					},{
						"type": "url",
						"title": "Visit Site",
						"url": "http://www.tourism.rajasthan.gov.in/udaipur.html",
						"webview_height_ratio": "full"
					}]
				}
			]}
		];
		context.sendResponse(JSON.stringify(nearbyCatJodhpur));
		return;
	}
	//plan
	if(event.message.toLowerCase() == "plan 3" || event.message.toLowerCase() == "plan your visit" || event.message.toLowerCase() == "plan 6" || event.message.toLowerCase() == "plan") {
		var planCat = ["Here is a comprehensive guide to make your stay in Rajasthan extremely memorable and comfortable -", {
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": "plan",
			"items": [
				{
					"title": "PACKAGES",
					"subtitle": "The perfect package tours to explore Rajasthan.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/palaces-to-visit/Packages.jpg",
					"options": [{
						"type": "text",
						"title": "Show More"
					},
					{
						"type": "url",
						"title": "Visit Page",
						"url": "http://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/plan/packages.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "WEATHER",
					"subtitle": "Keep up with Rajasthan's ever-changing seasons.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/palaces-to-visit/Weather.jpg",
					"options": [{
						"type": "text",
						"title": "Show More"
					},
					{
						"type": "url",
						"title": "Visit Page",
						"url": "http://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/plan/best-time-to-visit.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "FOREIGN TOURISTS",
					"subtitle": "Must-know information for the foreign tourists.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/palaces-to-visit/Foreign-National.jpg",
					"options": [{
						"type": "text",
						"title": "Show More"
					},
					{
						"type": "url",
						"title": "Visit Page",
						"url": "http://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/plan/foreign-tourists.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "HOSPITALITY",
					"subtitle": "Choose from an array of best places to stay.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/palaces-to-visit/Stay.jpg",
					"options": [{
						"type": "text",
						"title": "Show More"
					},
					{
						"type": "url",
						"title": "Visit Page",
						"url": "http://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/plan/hotel-listing.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "RENT AN AIRCRAFT",
					"subtitle": "Explore this magnificent land from high above.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/palaces-to-visit/Rent-Aircraft.jpg",
					"options": [{
						"type": "text",
						"title": "Show More"
					},
					{
						"type": "url",
						"title": "Visit Page",
						"url": "http://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/plan/transportation.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "HOW TO REACH",
					"subtitle": "Getting to any place in Rajasthan is quite easy.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/palaces-to-visit/How-to-Reach.jpg",
					"options": [{
						"type": "text",
						"title": "Show More"
					},
					{
						"type": "url",
						"title": "Visit Page",
						"url": "http://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/plan/how-to-get-there.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "ITINERARIES",
					"subtitle": "Choice of itineraries for all types of travellers.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/palaces-to-visit/Itineraries.jpg",
					"options": [{
						"type": "text",
						"title": "Show More"
					},
					{
						"type": "url",
						"title": "Visit Page",
						"url": "http://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/plan/suggested-itineraries.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "TRAVEL DESK",
					"subtitle": "Everything you need to know to enjoy your stay.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/palaces-to-visit/Travel-Desk.jpg",
					"options": [{
						"type": "text",
						"title": "Show More"
					},
					{
						"type": "url",
						"title": "Visit Page",
						"url": "http://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/plan/travel-desk.html",
						"webview_height_ratio": "full"
					}]
				}
			]
		}];
		context.sendResponse(JSON.stringify(planCat));
		return;
	}

	//how to reach
	if(event.message.toLowerCase() == "show more 6"){
		var reachCat = ["There are several ways to reach Rajasthan-", {
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": "reach",
			"items": [
				{
					"title": "AIR",
					"subtitle": "Rajasthan is a tourist hub and therefore well-connected by air. Whether you're flying in from within the country or from another one, you'll find that there are a host of options you can choose from based on your itinerary. The three major airports of Rajasthan are Sanganer International Airport in Jaipur, Jodhpur Airport and Dabok Airport in Udaipur. While Sanganer is open to domestic and international air traffic, Jodhpur and Udaipur only serve domestic routes and Jodhpur also doubles up as a base for the Indian Air Force. These three airports collectively connect Rajasthan to most major cities in India, with Jaipur Airport also offering connections to some international destinations such as Muscat, Singapore, Abu Dhabi etc. With tourism booming in the state, plans are in motion to construct an airport in Ajmer and revive operations to Kota, Jaisalmer and Bikaner in the future which will make flying to Rajasthan easy.",
					"imgurl": "http://tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/how-to-get-there/air-img.jpg",
					"options": [
					{
						"type": "url",
						"title": "Book Now",
						"url": "http://www.airindia.in",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "RAIL",
					"subtitle": "Rail is one of the best ways to travel to Rajasthan from anywhere within India as it is both, comfortable and economical. The state is well-connected to all the major cities across the nation and there are several routes to opt from. The major railway stations of Rajasthan are Jaipur, Kota, Bharatpur, Bikaner, Ajmer, Alwar, Udaipur, Abu Road and Jodhpur. But out of this lot, Jaipur and Kota are major hubs connecting the major cities of India to Rajasthan.",
					"imgurl": "http://tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/how-to-get-there/rail-img.jpg",
					"options": [
					{
						"type": "url",
						"title": "Book Now",
						"url": "https://www.irctc.co.in/eticketing/loginHome.jsf",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "ROAD",
					"subtitle": "Rajasthan has 20 national highways passing through the state, spanning a distance of about 6373 kms. The NH-8 which connects Mumbai to Delhi is the busiest national highway in Rajasthan and runs through Ajmer, Jaipur, Udaipur and Chittorgarh. Besides the NH-8, Rajasthan is also connected to other major cities in India such as Delhi, Ahmedabad and Indore by state highways. You can very well choose to drive to Rajasthan or hop onto a bus operated by the Rajasthan State Road Transport Corporation, if you prefer travelling by road.",
					"imgurl": "http://tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/how-to-get-there/road-img.jpg",
					"options": [
					{
						"type": "url",
						"title": "Book Now",
						"url": "http://transport.rajasthan.gov.in/rsrtc/",
						"webview_height_ratio": "full"
					}]
				}
			]
		}];
		context.sendResponse(JSON.stringify(reachCat));
		return;
	}
	
	//experience
	if (event.message.toLowerCase() == "experience" || event.message.toLowerCase() == "experience 2" || event.message.toLowerCase() == "what to experience") {
		//["Fairs and Festivals", "Luxury on wheels", "Adventures", "Virtual Tours", "Heritage Properties", "Travel Diaries"]
		
		var experienceMsg = ["Come and experience the Land of Maharajas, Rajasthan! Jaane kya dikh jaaye.", {
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": "experience",
			"items": 
			[
				{
					"title": "Luxury on wheels",
					"subtitle": "A ROYAL EXPERIENCE",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/luxury-train-travel/luxury-train-travel-desk.jpg",
					"options": [{
						"type": "text",
						"title": "Explore"
					}]
				},
				{
					"title": "Travel Diaries",
					"subtitle": "India’s most popular luxury train, the Palace on Wheels has been revamped as the Heritage Palace on Wheels, the interiors of whichare simply splendid. Revamped to offer even more luxury and comfort, you have to see it to believe it.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/myrt/thumb/4.jpg",
					"options": [{
						"type": "text",
						"title": "Explore"
					}]
				}
			]
		}];
		context.sendResponse(JSON.stringify(experienceMsg));
		return;
	}
	if(event.message.toLowerCase() == "luxury on wheels" || (event.messageobj.refmsgid == "experience" && event.message.toLowerCase() == "explore 1")) {
	    var luxCat = ["Experience the two luxury wheels of the rajasthan -", {
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": "luxuryOnWheels",
			"items": 
			[
				{
					"title": "Palace on Wheels",
					"subtitle": "The Palace on Wheels is one of the world's most exciting rail journeys.",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/luxury-train-travel/innerpage/palace-on-wheels/desk/luxury-train-travel-01.jpg",
					"options": [{
						"type": "url",
						"title": "Take A Virtual Tour",
						"url":"http://www.tourism.rajasthan.gov.in/media.html#tab1",
						"webview_height_ratio": "full"
					},{
						"type": "url",
						"title": "Book Now",
						"url":"http://rtdc.tourism.rajasthan.gov.in/Client/PowTrainBook.aspx",
						"webview_height_ratio": "full"
					},{
						"type": "url",
						"title": "Journey",
						"url":"http://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/experience/luxury-train-travel/palace-on-wheels.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "Heritage Palace on Wheels",
					"subtitle": "India’s most popular luxury train, the Palace on Wheels has been revamped as the Heritage Palace on Wheels",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/others/hpowluxury-train-travel-01.jpg",
					"options": [{
						"type": "url",
						"title": "Visit Page",
						"url":"http://www.tourism.rajasthan.gov.in/content/rajasthan-tourism/en/experience/luxury-train-travel/heritage-palace-on-wheels.html",
						"webview_height_ratio": "full"
					},{
						"type": "url",
						"title": "Book Golden Triangle",
						"url":"http://rtdc.tourism.rajasthan.gov.in/Client/RROWTrainBook.aspx",
						"webview_height_ratio": "full"
					},
					{
						"type": "url",
						"title": "Book Desert Triangle",
						"url":"http://rtdc.tourism.rajasthan.gov.in/Client/HPOWTrainBook2.aspx",
						"webview_height_ratio": "full"
					}]
				}
			]
		}];
		context.sendResponse(JSON.stringify(luxCat));
		return;
	}
	//about us
	if (event.message.toLowerCase() == "about us" || event.message.toLowerCase() == "about"){
    	var aboutCat = "Dear "+ event.senderobj.display+", Welcome to my Rajasthan, fascinating Rajasthan.\nThis land is a colourful melange of massive forts, stunning palaces, diverse cultures, delectable cuisines and warm people, set amidst a rugged yet inviting landscape.\n\nIt is a land that has inspired me and countless others. Come tread on the sands of time.\n\nTo know more visit: http://www.tourism.rajasthan.gov.in/about-rajasthan.html";
    	context.sendResponse(aboutCat);
   		return;
	}
	//contact
	if (event.message.toLowerCase() == "contact us" || event.message.toLowerCase() == "contact" || event.message.toLowerCase() == "phone" || event.message.toLowerCase() == "email"){
		var contactMsg=["AJMER\nRegional Tourist Office & Tourist Reception Centre\nRTDC Hotel Khadim\nTel.: 0145-2627426/1364\nFax : 0145-2431330\nTourist Inf. Counter, Railway Station\ntrcajmer-dot@rajasthan.gov.in\n\n\nALWAR\nTourist Reception Centre\nOpp.Railway Station,\nTel.: 0144-2347348\ntrcalwar-dot@rajasthan.gov.in\n\n\nBARMER\nRajasthan Tourist Information Bureau\nTel.: 02992-252406\ntrcjaisal2992@gmail.com",
		{
			"type":"quick_reply",
			"content":{
				"type":"text",
				"text":"What would you like to do next!"
			},
			"msgid":"m5",
			"options": ["Discover", "Experience", "Plan", "Know"]
		}];
		context.sendResponse(JSON.stringify(contactMsg));
   		return;
	}
	//media
	if(event.message.toLowerCase() == "media") {
		var mediaCat = ["Here are the categories for you to choose from-", {
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": "cat5",
			"items": [
				{
					"title": "Video",
					"subtitle": "Some of the exciting videos:-",
					"imgurl":"http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/gallery-images/thumbnail/SUMF06.jpg",
					"options": [{
						"type": "url",
						"title": "Know more",
						"url":"http://www.tourism.rajasthan.gov.in/media.html#tab1",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "Print Ads",
					"subtitle": "watch one of our print ads",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/media/print/big-img/big_img_01.jpg",
					"options": [{
						"type": "url",
						"title": "Explore",
						"url":"http://www.tourism.rajasthan.gov.in/media.html#tab2",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "Press release",
					"subtitle": "Watch one of our press releases",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/wallpaper/thumb/137.jpg",
					"options": [{
						"type": "url",
						"url": "http://www.tourism.rajasthan.gov.in/media.html#tab3",
						"title": "Explore",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "Events",
					"subtitle": "Some of our events...",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/gallery-images/thumbnail/RJF03.JPG",
					"options": [{
						"type": "url",
						"title": "Explore",
						"url":"http://www.tourism.rajasthan.gov.in/media.html#tab4",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "Gallery",
					"subtitle": "visit our website for more gallery...",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/gallery-images/thumbnail/SUMF03.jpg",
					"options": [{
						"type": "url",
						"title": "Visit Now",
						"url": "http://www.tourism.rajasthan.gov.in/media.html#tab5",
						"webview_height_ratio": "full"
					}]
				}
				
			]
		}];
		context.sendResponse(JSON.stringify(mediaCat));
		return;
	}
	//films
	if (event.message.toLowerCase()=="films" || event.message.toLowerCase()=="Rajasthan in Bollywood"){
		var filmsCat = ["Rajasthan is not only one of the most popular tourist destinations in the world but also the most widely captured on cinema. Ranging from blockbusters with massive budgets to documentaries made on a shoestring budget, Rajasthan offers a vast range of locations and facilities for every kind of filmmaker and genre of cinema. In fact, it has been a favoured location with both Indian and International filmmakers such as Christopher Nolan, Wes Anderson, Sanjay Leela Bhansali, Karan Johar and more!",{
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": "cat3",
			"items": 
			[
				{
					"title":"BADRINATH KI DULHANIYA (2017)",
					"subtitle":"Badrinath ki Dulhaniya is a romantic comedy released in 2017.The movie plays around a lot with the prevalent patriarchy and societal constructs, against which, Vaidehi, a girl from Kota (played by Alia Bhatt), is seen with dreams that go against convention. ",
					"imgurl":"http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/film-tourism/Films/BadrinathKiDulhaniya.jpg",
					"webview_height_ratio": "full"
					
				},
				{
					"title":"BAJIRAO MASTANI (2015)",
					"subtitle":"This period drama depicting a legendary love story is famous for its beautiful locations. Parts of Bajirao Mastani have been shot in the stunning Amber Palace in Jaipur. Deepika’s famous song, Rang Do Mohe Laal beautifully shows the stunning architecture and interiors of the Amber Palace.",
					"imgurl":"http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/film-tourism/Films/10.jpg",
					"webview_height_ratio": "full"
				},
				{
					"title":"YEH JAWANI HAIN DEEWANI (2013)",
					"subtitle":"Who can forget the entire second half of this Hindi film that made us all wish for a fabulous destination wedding in Rajasthan? Shot in the Bagore ki Haveli in Udaipur, this film wonderfully depicts the colours, vibrant atmosphere and the beauty of Rajasthan.",
					"imgurl":"http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/film-tourism/Films/9.jpg",
					"webview_height_ratio":"full"
				}
			]
		}];
		context.sendResponse(JSON.stringify(filmsCat));
		return;
	}
	
	//know
	if (event.message.toLowerCase()=="know" || event.message.toLowerCase()=="know 4" || event.message.toLowerCase()=="rajasthan in media"){
   		var knowMsg = {
   			"type":"quick_reply",
   			"content": {
   				"type":"text",
   				"text":"Please select an option from the following-"
   			},
   			"msgid":"m4",
   			"options":["About Us","Films","Contact Us","Media"]
   		};
   		context.sendResponse(JSON.stringify(knowMsg));
   		return;
   }
   
   if(event.message.toLowerCase() == "travel diaries" || (event.messageobj.refmsgid == "experience" && event.message.toLowerCase() == "explore 2")) {
		var travelCat = ["Here are some of the Travel diaries -", {
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": "travel",
			"items": 
			[
				{
					"title": "Neelimasthan",
					"subtitle": "Jaipur Monsoon   Ghevar  Lehariya Sarees   Swings   Teej Mata.....and much more",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/myrt/thumb/1.jpg",
					"options": [{
						"type": "url",
						"title": "Explore",
						"url":"http://www.tourism.rajasthan.gov.in/travel-diaries/neelimasthan.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "Laxmisthan",
					"subtitle": "Rajasthan through eyes of Lakshmi :- Architecture Of Shekhawati  Beautiful Doors   Memorials  Temples Of Ramgarh   Music And Dance",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/myrt/thumb/2.jpg",
					"options": [{
						"type": "url",
						"title": "Explore",
						"url":"http://www.tourism.rajasthan.gov.in/travel-diaries/laxmisthan.html",
						"webview_height_ratio": "full"
					}]
				},
				{
					"title": "Sacredsthan",
					"subtitle": "Shree- The Sacred Festival celebration in Pushkar :-Heritage Trail   Musical Performance  Pushkar Market   Pushkar Cafes  Camel Rides",
					"imgurl": "http://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/myrt/thumb/3.jpg",
					"options": [{
						"type": "url",
						"title": "Explore",
						"url":"http://www.tourism.rajasthan.gov.in/travel-diaries/sacredsthan.html",
						"webview_height_ratio": "full"
					}]
				},
				
			]
		}];
		context.sendResponse(JSON.stringify(travelCat));
		return;
	}
	
	else{
		var defaultMsg = {
			"type": "quick_reply",
			"content": {
				"type": "text",
				"text": "Sincere apologies "+ event.senderobj.display + "!\n\nWe are working to include this, in the near future. Right now, please use one of the below to get going..."
			},
			"msgid": "m1",
			"options": ["Discover", "Experience", "Plan", "Know"]
		};
	 	context.sendResponse(JSON.stringify(defaultMsg));
	 	return;
	}
}

function EventHandler(context, event) {
   // context.simpledb.roomleveldata = {};
    //MessageHandler(context, event);
    if (event.messageobj.type == 'event' && (event.messageobj.text == 'startchattingevent' || event.messageobj.text == 'botmappedevent')) {
		var welcomeCat = ["Hello "+ event.senderobj.display + "! Greetings from Vasundhara Raje,The Hon'ble Chief Minister of Rajasthan. \n\nWelcome! What would you like to do today?", 
		{
			"type": "catalogue",
			"imageaspectratio": "horizontal",
			"msgid": "menu",
			"items": [
				{
					"title": "Discover Rajasthan",
					"subtitle": "",
					"imgurl": "https://www.gwtours.com.au/wp-content/uploads/2016/10/Rajasthan-1.jpg",
					"options": [{
						"type": "text",
						"title": "Discover"
					}]
				},
				{
					"title": "Experience Rajasthan",
					"subtitle": "",
					"imgurl": "https://i.ytimg.com/vi/OY8Fjok3J20/maxresdefault.jpg",
					"options": [{
						"type": "text",
						"title": "Experience"
					}]
				},
				{
					"title": "Plan Your Visit",
					"subtitle": "",
					"imgurl": "http://ste.india.com/sites/default/files/2016/04/11/477953-rajasthan-ts.jpg",
					"options": [{
						"type": "text",
						"title": "Plan"
					}]
				},
				{
					"title": "Know Rajasthan",
					"subtitle": "",
					"imgurl": "http://factualsnews.com/wp-content/uploads/2017/03/Rajasthan-Tourism-Ad-Music.png",
					"options": [{
						"type": "text",
						"title": "Know"
					}]
				},
				{
					"title": "Swachh Bharat - Rajasthan",
					"subtitle": "Check out the latest updates and what you can do. ",
					"imgurl": "https://timesofindia.indiatimes.com/thumb/msid-48159028,width-400,resizemode-4/48159028.jpg",
					"options": [{
						"type": "url",
						"url": "https://blogs.timesofindia.indiatimes.com/voices/swachh-bharat-mission-lessons-from-rajasthan/",
						"title": "Know more!"
					}]
				}
		    ]
		}]; 
		context.sendResponse(JSON.stringify(welcomeCat));
		return;
    }
}


function ScriptHandler(context, event){
    var options = Object.assign({}, scr_config);
    options.current_dir = __dirname;
    //options.default_message = "Sorry Some Error Occurred.";
    // You can add any start point by just mentioning the <script_file_name>.<section_name>
    // options.start_section = "default.main";
    options.success = function(opm){
        context.sendResponse(JSON.stringify(opm));
    };
    options.error = function(err) {
        console.log(err.stack);
        context.sendResponse(options.default_message);
    };
    botScriptExecutor.execute(options, event, context);
}

function HttpResponseHandler(context, event) {
    if (event.geturl === "http://ip-api.com/json")
        context.sendResponse('This is response from http \n' + JSON.stringify(event.getresp, null, '\t'));
}

function DbGetHandler(context, event) {
    context.sendResponse("testdbput keyword was last sent by:" + JSON.stringify(event.dbval));
}

function DbPutHandler(context, event) {
    context.sendResponse("testdbput keyword was last sent by:" + JSON.stringify(event.dbval));
}

function HttpEndpointHandler(context, event) {
    context.sendResponse('This is response from http \n' + JSON.stringify(event, null, '\t'));
}

function LocationHandler(context, event) {
    context.sendResponse("Got location");
};

exports.onMessage = MessageHandler;
exports.onEvent = EventHandler;
exports.onHttpResponse = HttpResponseHandler;
exports.onDbGet = DbGetHandler;
exports.onDbPut = DbPutHandler;
if (typeof LocationHandler == 'function') { exports.onLocation = LocationHandler; }
if (typeof HttpEndpointHandler == 'function') { exports.onHttpEndpoint = HttpEndpointHandler; }
