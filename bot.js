function openFibiBot4() {
			portalId =="FIBIPORTAL";

				BotPosition = document.getElementById("fibi_main_header"); 
				var getBounding = BotPosition.getBoundingClientRect(); 
				var finalPositionLeft  = getBounding.left +650;
				var fibiBot3 = $('<div id="chatBotContainer" style="left:'+finalPositionLeft+'px; "><div class="buttonbot" onclick="FibiBotClose();"></div><iframe id="fibiBot3" src="" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation" ></iframe></div>');
				$(fibiBot3).insertAfter("#systemWidgets");
				$("#fibiBot3").contents().find('head').append('<meta name="viewport" content="width=device-width, initial-scale=1">');
				var scriptTag = '<script>!function(t,e,o,c,n,a){var s=window.nanorep=window.nanorep||{};s=s[e]=s[e]||{},s.apiHost=a,s.host=n,s.path=c,s.account=t,s.protocol="https:"===location.protocol?"https:":"https:",s.on=s.on||function(){s._calls=s._calls||[],s._calls.push([].slice.call(arguments))};var p=s.protocol+"//"+n+c+o+"?account="+t,l=document.createElement("script");l.async=l.defer=!0,l.setAttribute("src",p),document.getElementsByTagName("head")[0].appendChild(l)}("fibi","floatingWidget","floating-widget.js","/web/","fibi.nanorep.co");nanorep.floatingWidget.on({init: function(){this.setConfigId("1499616142");this.setContext({"Brand":"FIBI","Touchpoint":"Online"})}})<\/script>';
				$("#fibiBot3").contents().find("body").append(scriptTag);
		
	
	}
