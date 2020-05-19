var hsBlocksHTML = "";

const blockLabels = {
	19: ["old","Wait til Timestamp","milliseconds"],
	22: ["old","\u2063"],
	23: ["move","Move Forward"," "],
	24: ["move","Turn", "degrees"],
	27: ["move","Change X", "by"],
	28: ["move","Change Y", "by"],
	29: ["old","Scale", "by"],
	30: ["draw","Clear"],
	31: ["draw","Set Trail Width", "to"],
	32: ["draw","Set Trail Color", "to"],
	33: ["looks","Change Pose"],
	34: ["move","Set Speed", "to"],
	35: ["old","Wait", "milliseconds"],
	36: ["old","Set Opacity", "to"],
	37: ["old","Pen Down"],
	38: ["old","Pen Up"],
	39: ["move","Set Angle"," "],
	40: ["looks","Set Text","to","color"],
	41: ["move","Set Position","to x","y"],
	42: ["looks","Send To Back"],
	43: ["looks","Bring To Front"],
	44: ["var","Increase"," ","by"],
	45: ["var","Set"," ","to"],
	46: ["old","Move With Trail","distance"],
	47: ["looks","Set Invisibility","percent"],
	48: ["looks","Grow","by percent"],
	49: ["looks","Shrink","by percent"],
	50: ["move","Flip"],
	51: ["looks","Set Size","percent"],
	52: ["looks","Start Sound"," ","wait"],
	53: ["ctrl","Create a Clone of This Object","times"],
	54: ["looks","Set Color"," "],
	55: ["ctrl","Destroy"],
	56: ["looks","Set Image"," "],
	57: ["looks","Set","width","height"],
	58: ["looks","Set Z Index"," "],
	61: ["ctrl","Wait","seconds"],
	62: ["looks","Start Sound"," ","wait"], //Start Sound Seconds
	26: ["draw","Draw a Trail","color","width"],
	120: ["ctrl","Repeat","times"],
	121: ["ctrl","Repeat Forever"],
	122: ["ctrl","Check Once If"," "],
	123: ["abl","Ability"],
	124: ["ctrl","Check If Else"," "],
	125: ["ctrl","Change Scene","to"],
	233: ["Random"],
	234: ["XPos"],
	235: ["YPos"],
	236: ["Random110"],
	237: ["Random1100"],
	238: ["Random11000"],
	239: ["Variable"],
	1e3: [""," "," ","="],
	1001: [""," "," ","\u2260"],
	1002: [""," "," ","<"],
	1003: [""," "," ",">"],
	1004: [""," "," ","and"],
	1005: [""," "," ","or"],
	1006: [""," "," ","≥"],
	1007: [""," "," ","≤"],
	1008: ["HS_END_OF_CONDITIONAL_OPERATORS"],
	2e3: ["Rotation"],
	2001: ["X Position"],
	2002: ["Y Position"],
	2003: ["Invisibility as a %"],
	2004: ["Size as a %"],
	2005: ["Speed"],
	2006: ["Clone Index"],
	2007: ["Total Clones"],
	2008: ["Width"],
	2009: ["Height"],
	2010: ["Z Index"],
	2011: ["Origin X"],
	2012: ["Origin Y"],
	2013: ["Center X"],
	2014: ["Center Y"],
	2015: ["HS_END_OF_OBJECT_TRAITS"],
	3e3: ["\uD83D\uDCF1 Width"],
	3001: ["\uD83D\uDCF1 Height"],
	3002: ["\uD83D\uDCF1 Tilt Up %"],
	3003: ["\uD83D\uDCF1 Tilt Down %"],
	3004: ["\uD83D\uDCF1 Tilt Left %"],
	3005: ["\uD83D\uDCF1 Tilt Right %"],
	3006: ["\uD83D\uDCF1 Last Touch X"],
	3007: ["\uD83D\uDCF1 Last Touch Y"],
	3008: ["\uD83D\uDCF1 Total Objects"],
	3009: ["HS_END_OF_STAGE_TRAITS"],
	4e3: ["math"," "," ","+"],
	4001: ["math"," "," ","\u2212"],
	4002: ["math"," "," ","\u00D7"],
	4003: ["math"," "," ","\u00F7"],
	4004: ["math","\u2063 random"," ","to"],
	4005: ["math"," "," ","^"],
	4006: ["math","\u2063 \u221A"," "],
	4007: ["math","\u2063 sin"," "],
	4008: ["math","\u2063 cos"," "],
	4009: ["math","\u2063 round"," "],
	4010: ["math","\u2063 absolute value"," "],
	4011: ["math"," "," ","%"],
	4012: ["math","\u2063 tan"," "],
	4013: ["math","\u2063 arcsin"," "],
	4014: ["math","\u2063 arccos"," "],
	4015: ["math","\u2063 arctan"," "],
	4016: ["math","\u2063 max"," "," "],
	4017: ["math","\u2063 min"," "," "],
	4018: ["math","\u2063 floor"," "," "],
	4019: ["math","\u2063 ceil"," "," "],
	4020: ["HS_END_OF_MATH_OPERATORS"],
	5e3: ["ColorOperatorRandom"],
	5001: ["color","\u2063 ","R","G","B"],
	5002: ["color","\u2063 ","H","S","B"],
	5003: ["HS_END_OF_COLOR_OPERATORS"],
	6e3: ["rule","When"], //Rule
	6001: ["RulePreview"], //Rule Preview
	7e3: ["event","\u2063 game starts \u2063"], //Event operator start
	7001: ["event","is tapped \u2063"," "],
	7002: ["event"," "," ","is touching"],
	7003: ["event","is pressed \u2063"," "],
	7004: ["event","EventOperatorTiltRight"],
	7005: ["event","EventOperatorTiltLeft"],
	7006: ["event","EventOperatorTiltUp"],
	7007: ["event","EventOperatorTiltDown"],
	7008: ["event","\u2063 \uD83D\uDCF1 hears a loud noise \u2063"],
	7009: ["event","\u2063 \uD83D\uDCF1 is shaken \u2063"],
	7010: ["event"," "," ","bumps"],
	7011: ["event","is swiped right \u2063"," "],
	7012: ["event","is swiped left \u2063"," "],
	7013: ["event","is swiped up \u2063"," "],
	7014: ["event","is swiped down \u2063"," "],
	7015: ["event","\u2063 object is cloned \u2063"], //Enter the World
	7016: ["event","EventOperatorTiltRightEditor \u2063"],
	7017: ["event","EventOperatorTiltLeftEditor \u2063"],
	7018: ["event","EventOperatorTiltUpEditor \u2063"],
	7019: ["event","EventOperatorTiltDownEditor \u2063"],
	7020: ["event","is not pressed \u2063"," "],
	7021: ["event","\u2063 game is playing \u2063"],
	7022: ["event","\u2063 touch ends \u2063"],
	7023: ["HS_END_OF_EVENT_OPERATORS"],
	8e3: ["<ps><span><i class=\"fa fa-fw fa-cubes\"></i> Object</span></ps>"],
	8001: ["<i class=\"fa fa-fw fa-question-circle\"></i>"],
	8002: ["<i class=\"fa fa-fw fa-mobile\"></i> Edge"],
	8003: ["\u2063 \uD83D\uDCF1"],
	8004: ["<ps><span>Self</span></ps>"],
	8005: ["<ps><span>\u2063 Original Object \u2063</span></ps>"],
	8006: ["HS_END_OF_EVENT_PARAMETER_BLOCKS"]
}

function isFalseScript (container) {
	isFalse = false;
	if (container && container.previousElementSibling) {
		//If it is a false script (is the second collapsible)
		isFalse = container.previousElementSibling.classList.contains("collapsible");
	}
	return isFalse;
}

var oldProjAlerted = false;
function jsonToHtml(block, isNested, keepClosed) {
	isNested = isNested||false;
	keepClosed = keepClosed||false;
	
	var sortGroup = "blocks";
	
	if (block.scripts) {
		if (!oldProjAlerted) alert("The block renderer cannot fully render old project formats yet")
		oldProjAlerted = true;
	}
	
	//Convert Rule Strings to rule Blocks
	if (typeof block == "string") {
		hsProject.rules.forEach(rule=>{
			if (rule.id == block) block = rule;
		});
		//If it is a custom rule
		if (typeof block == "string") {
			hsProject.customRules.forEach(customrule=>{
				if (customrule.id == block) block = customrule;
			});
		}
	}
	//Set data of objects
	if (block.xPosition!=null) {
		block.block_class = "control";
		block.parameters = [{
			"datum": {
				"type": block.type,
				"text": block["text"]
			}
		}];
	}
	//Change the container type for objects and custom rules
	if (block.ruleBlockType && !block.type) block.type = block.ruleBlockType;
	if (block.abilityID && !block.controlScript) {
		block.controlScript = {abilityID:block.abilityID};
		block.block_class = "control";
	} else if (block.rules) {
		block.block_class = "control";
		sortGroup = "rules";
	}
	
	var block_parent = activeEditBlock;
	var parentUids = [];
	if (activeEditBlock) {
		var myData = JSON.parse(activeEditBlock.getAttribute("data"));
		var myScripts = (myData.controlScript) ? new RegExp (("^("+myData.controlScript.abilityID+"|"+(myData.controlFalseScript||{abilityID:""}).abilityID).replace(/\|$/,"")+")$","m"):/$.^/;
	}
	while (block_parent && !block_parent.classList.value.match(/\b(crule|obj)\b/) && block_parent != document.getElementById("blocks-container-resizer")) {
		var isFalse = isFalseScript(block_parent.parentNode);
		block_parent = (block_parent.parentNode||{parentNode:null}).parentNode||document.getElementById("blocks-container-resizer");
		if (block_parent && !block_parent.classList.value.match(/\b(crule|obj)\b/) && block_parent != document.getElementById("blocks-container-resizer") && myScripts.test( (JSON.parse(block_parent.getAttribute("data"))[(isFalse)?"controlFalseScript":"controlScript"]||JSON.parse(block_parent.getAttribute("data")).abilityID).abilityID )) isNested = true;
	}
	
	if (JSON.stringify(block) == "{}"||COUNT > 1000) {
		return {innerHTML:""};
	}
	if (COUNT > 1000) {
		alert("safety limit 1000 reached. Please report the project URL & ability.");
		return {innerHTML:""};//{"classList":elmClass||"","innerHTML":innerHTML};
	}
	COUNT ++;
	if (!isNested) nestedUuidList = [];
	if (/control/i.test(block.block_class)) var elmClass = "collapsible-container" + ((([26,30,31,32]).indexOf(block.type)!=-1)?" draw":((block.type==123)?" abl":((block.type==6000)?" rule":(block.xPosition!=null?" obj":block.rules?" crule":""))));
	var labels = (block.xPosition!=null?["obj"]:blockLabels[block.type]||(block.rules?["crule"]:[]));
	var paramString = "";
	for (var i = 0; i < (block.parameters||[]).length; i++) {
		var p = block.parameters[i];
		function doParameter(d) {
			function hsvToRgb(str) {
				var arr = str.replace(/.*\(|\)/g,"").split(",");
				var h = Math.max((Number(arr[0]))/360,0), s = Math.max((Number(arr[1])%101)/100,0), v = Math.max((Number(arr[2])%101)/100,0);
				var r, g, b;
				var i = Math.floor(h * 6); var f = h * 6 - i; var p = v * (1 - s); var q = v * (1 - f * s); var t = v * (1 - (1 - f) * s);
				switch (i % 6) {
					case 0: r = v, g = t, b = p; break; case 1: r = q, g = v, b = p; break; case 2: r = p, g = v, b = t; break; case 3: r = p, g = q, b = v; break; case 4: r = t, g = p, b = v; break; case 5: r = v, g = p, b = q; break;
				}
				return [ Math.round(r*255), Math.round(g*255), Math.round(b*255) ];
			}
			function getVar(id) {
				var name;
				hsProject.variables.forEach((v)=>{
					if (v.objectIdString == id) name = v.name;
				});
				return (name||"").htmlEscape()||"<span style=\"color:red;\">unknown</span>";
			}
			if (!d.datum) {
				if (d.type != 50 && d.value !== String(d.value)) return console.warn("Values must be strings")||"<ps><span></span></ps>";
				if (d.type == 44 && /HSB\(\s?(\-?[0-9]*?\.?[0-9]*?,?\s?){3}\)$/.test(d.value)) {
					return '<ps class="fw" style="background-color:rgb('+hsvToRgb(d.value)+')"></ps>'
				} else {
					switch (d.type) {
						case 50:
							var innerText = "";
							(hsProject.eventParameters||[]).forEach(ep=>{
								if (ep.id == d.variable) innerText = "<ps><span>" + ep.description + "</span></ps>";
							});
							return innerText;
						default:
							return "<ps><span" + ((d.type==51)?" title=\"This is a sound\" style=\"color:gray;\"":"") + ">\u2063 " + d.value.htmlEscape() + " \u2063</span></ps>";
					}
				}
			}
			//Traits
			if (d.datum.HSTraitTypeKey >= 2e3 && d.datum.HSTraitTypeKey < 4e3) {
				var objectLabel = objectLabel = (blockLabels[d.datum.HSTraitObjectParameterTypeKey]||"");
				if (d.datum.HSTraitObjectParameterTypeKey==8e3) {
					hsProject.objects.forEach(o=>{
						if (d.datum.HSTraitObjectIDKey == o.objectID) objectLabel = "<ps>" + (o.type == 1 ? '<img width="36" src="../images/character_sprite_strip.png" style="object-position:0 -30px"/>' : doParameter({"datum":{"type":o.type}}).match(/<i class="fa fa-photo".*?<\/i>|<img style="object-position.*?\/>/)[0]) + o.name + " \u2063 \u2063</ps>";
					});
				}
				//"HSTraitObjectIDKey";
				return "<ps><op class=\"otr\">" + objectLabel + "\u2063 " + blockLabels[d.datum.HSTraitTypeKey] + " \u2063</op></ps>";
			}
			//Variables
			if (d.datum.type == 8e3 || (d.datum.type > 8002 && d.datum.type < 8006)) {
				var objectLabel = blockLabels[d.datum.type][0];;
				if (d.datum.type == 8e3) {
					hsProject.objects.forEach(o=>{
						if (d.datum.object == o.objectID) {
							objectLabel = "<ps>" + (o.type == 1 ? '<img width="36" src="../images/character_sprite_strip.png" style="object-position:0 -30px"/>' : doParameter({"datum":{"type":o.type}}).match(/<i class="fa fa-photo".*?<\/i>|<img style="object-position.*?\/>/)[0]) + o.name + " \u2063 \u2063</ps>";
						}
					});
				}
				return "<ps><op class=\"val\">" + objectLabel + " " + getVar(d.datum.variable) + " \u2063</op></ps>";
			}
			//Images (no block class)
			if (!/operator/i.test(d.datum.block_class)) {
				//console.log(d.datum.block_class);
				if (d.datum.type == 1) {
					return "<ps><op class=\"cm\">\u2063 Text <ps><span>" + d.datum["text"].replace(/\n(.|\n)*/g,"") + "</span></ps></op></ps>";
				} else {
					return "<ps><op class=\"fw cm\">" + ((d.datum.type == 2e3)?"<i class=\"fa fa-photo\"></i>":"<img style=\"object-position:0 " + (d.datum.type<166||d.datum.type>3e3?d.datum.type-2835*(d.datum.type>=3e3):-1)*-30 + "px\" src=\"../images/character_sprite_strip.png\" width=\"36\"/>") + "</op></ps>";
				}
			}
			//Random Color
			if (d.datum.type == 5000) return "<ps><op class=\"rcol\"></op></ps>";
			//None Block, Math, Conditionals, Game Rules
			if (d.datum.type<1e3||(d.datum.type >= 1e3 && d.datum.type < 2e3)||(d.datum.type >= 4e3 && d.datum.type < 6e3)||(d.datum.type >= 7e3 && d.datum.type < 8e3)) {
				var isRule = (d.datum.type >= 7e3 && d.datum.type < 8e3);
				var i = 0; return "<ps><op class=\"" + ((d.datum.type < 2e3)?"cnd":(isRule?"":"math")) + " cm\">" + (isRule?"":(blockLabels[d.datum.type]||[])[1]||d.datum.description||"") + " " + (d.datum.params||[]).repeatEach((x)=>{i++;return (blockLabels[d.datum.type][i+1]||x.key||"") + doParameter(x);}).join("") + (isRule?blockLabels[d.datum.type][1]:"") + "</op></ps>";
			}
			return "<span style=\"color:#0CF\">unrecognized format</span>";
		}
		paramString += " " + (labels[i+2]||p.key||"") + " " + doParameter(p);
	};
	var innerHTML = `<bl class="${labels[0]}"><c>${((block.type==123)?block.description:((block.rules||block.xPosition!=null)?block.name:labels[1]))||block.description||""}${paramString}</c><b class="editbtn"></b><b class="handle"></b></bl>`;
	if (/control/i.test(block.block_class)){
		var nestedHTML = "<div class=\"collapsible\">",
			trueScript = (block.controlScript||{}).abilityID||"",
			falseScript = (block.controlFalseScript||{}).abilityID||"",
			addedToHtml = false;
		if (!trueScript && block.rules) {
			//Handle Objects and Custom Rules
				addedToHtml = true;
			if (!keepClosed) {
				(block.rules||[]).repeatEach((r)=>{
					nestedUuidList.push(r);
					//console.log(jsonToHtml(r));
					var blockInfo = jsonToHtml(r,true,true);
					nestedHTML += '<div class="' + blockInfo.classList + '" data="' + blockInfo.data.htmlEscape() + '" data-group="' + blockInfo.sortGroup + '">' + blockInfo.innerHTML + "</div>";
				});
			} else {
				elmClass = elmClass.replace("collapsible-container",(nestedUuidList.indexOf(trueScript)!=-1)?"disabled":"");
			}
		}
		//console.log(trueScript);
		//console.log(falseScript);
		var pAbilities = (hsProject.abilities||[]).repeatEach((a)=>{return JSON.stringify(a)}).join("\n")||"";
		(pAbilities.match(new RegExp('^.*"abilityID":"' + trueScript + '".*$',"gm"))||[]).forEach((a)=>{
			a = JSON.parse(a);
			if (a.abilityID != trueScript) return;
			if (a&&nestedUuidList.indexOf(trueScript)==-1) addedToHtml = true;
			//if (block.type != 123) keepClosed = false;
			if (!keepClosed&&a&&nestedUuidList.indexOf(trueScript)==-1) {
				nestedUuidList.push(a.abilityID);
				(a.blocks||[]).repeatEach((b)=>{
					//console.log(jsonToHtml(b));
					var blockInfo = jsonToHtml(b,true,(b.type==123));
					nestedHTML += '<div class="' + blockInfo.classList + '" data="' + blockInfo.data.htmlEscape() + '" data-group="' + blockInfo.sortGroup + '">' + blockInfo.innerHTML + "</div>";
					//console.log('<div class="' + blockInfo.classList + '" data="' + blockInfo.data.htmlEscape() + '">' + blockInfo.innerHTML );
				});
			} else {
				elmClass = elmClass.replace("collapsible-container",(nestedUuidList.indexOf(trueScript)!=-1)?"disabled":"");
			}
		});
		if (!addedToHtml&&(trueScript||block.rules)&&block) {
			//console.log("true script does not exist",keepClosed);
			var blockInfo = jsonToHtml({},true,keepClosed);
			//nestedHTML += '<div class="' + blockInfo.classList + '" data="'+'" data-group="' + blockInfo.sortGroup + '">' + blockInfo.innerHTML + "</div>";
			if (keepClosed) elmClass = elmClass.replace("collapsible-container",(nestedUuidList.indexOf(trueScript)!=-1)?"disabled":"");
		}
		//console.log(nestedHTML);
		addedToHtml = false;
		innerHTML = innerHTML.replace("<c>","<b class=\"openbtn\"></b><c>") + nestedHTML + "</div>";
		if (block.type == 124) {
			var nestedHTML = "<div class=\"collapsible\">";
			pAbility = JSON.parse((pAbilities.match(new RegExp('^.*"abilityID":"' + falseScript + '".*$',"m"))||[])[0]||'""');
			(pAbilities.match(new RegExp('^.*"abilityID":"' + falseScript + '".*$',"gm"))||[]).forEach((a)=>{
				a = JSON.parse(a);
				if (a.abilityID != falseScript) return;
				if (a&&nestedUuidList.indexOf(falseScript)==-1) {
					addedToHtml = true;
					nestedUuidList.push(a.abilityID);
					(a.blocks||[]).repeatEach((b)=>{
						var blockInfo = jsonToHtml(b,true,(b.type==123));
						nestedHTML += '<div class="' + blockInfo.classList + '" data="' + blockInfo.data.htmlEscape() + '" data-group="' + blockInfo.sortGroup + '">' + blockInfo.innerHTML + "</div>";
					});
				} else {
					elmClass = elmClass.replace("collapsible-container ","");
				}
			});
			innerHTML = innerHTML + nestedHTML + "</div>";
		}
		if (!addedToHtml&&falseScript&&block) {
			//console.log("true script does not exist",keepClosed);
			var blockInfo = jsonToHtml({},true,keepClosed);
			if (keepClosed) elmClass = elmClass.replace("collapsible-container",(nestedUuidList.indexOf(trueScript)!=-1)?"disabled":"");
		}
		if (keepClosed) innerHTML = innerHTML.replace(/<div class="collapsible"><\/div>/g,"")
		//console.log(nestedUuidList);
	}
	if (block.rules || block.type == 6000) {
		delete block.controlScript;
		delete block.block_class;
		if (block.xPosition!=null) delete block.parameters;
	}
	return {"classList":elmClass||"","data":JSON.stringify(block),"innerHTML":innerHTML,"sortGroup":sortGroup};
}
