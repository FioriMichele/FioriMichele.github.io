/*
	Image Cross Fade Redux
	Version 1.0
	Last revision: 02.15.2006
	steve@slayeroffice.com

	Rewrite of old code found here: http://slayeroffice.com/code/imageCrossFade/index.html
*/

window.addEventListener?window.addEventListener('load',so_init,false):window.attachEvent('onload',so_init);

var d=document, imgs = new Array(), zInterval = null, current=0, pause=false;

function so_init()
{
	if(!d.getElementById || !d.createElement)return;

	css = d.createElement('link');
	css.setAttribute('href','slideshow2.css');
	css.setAttribute('rel','stylesheet');
	css.setAttribute('type','text/css');
	d.getElementsByTagName('head')[0].appendChild(css);

	imgs = d.getElementById('slider').getElementsByTagName('img');
	for(i=1;i<imgs.length;i++) imgs[i].xOpacity = 0;
	imgs[0].style.display = 'block';
	imgs[0].xOpacity = .99;

	setTimeout(so_xfade,2000);
}

function so_xfade()
{
	cOpacity = imgs[current].xOpacity;
	nIndex = imgs[current+1]?current+1:0;
	nOpacity = imgs[nIndex].xOpacity;

	cOpacity-=.05;
	nOpacity+=.05;

	imgs[nIndex].style.display = 'block';
	imgs[current].xOpacity = cOpacity;
	imgs[nIndex].xOpacity = nOpacity;

	setOpacity(imgs[current]);
	setOpacity(imgs[nIndex]);

	if(cOpacity<=0)
	{
		imgs[current].style.display = 'none';
		current = nIndex;
		setTimeout(so_xfade,2000);
	}
	else
	{
		setTimeout(so_xfade,50);
	}

	function setOpacity(obj)
	{
		if(obj.xOpacity>.99)
		{
			obj.xOpacity = .99;
			return;
		}

		obj.style.opacity = obj.xOpacity;
		obj.style.MozOpacity = obj.xOpacity;
		obj.style.filter = 'alpha(opacity=' + (obj.xOpacity*100) + ')';
	}
}


/************************************************************************************************************************************************/


function mostra_menu_verticale_mobile () {
	var icona_menu_mobile = document.getElementById ("js:mobile_menu_icon");
	var icona_menu_mobile_close = document.getElementById ("js:mobile_menu_icon_close");
	var menu_verticale = document.getElementById ("js:menu_verticale");
	var div_testo = document.getElementById ("js:div_testo");
	var div_menu_verticale = document.getElementById ("js:div_menu_verticale");
	var elenco_siti = document.getElementById ("js:elenco_siti_consigliati");
	var div_slider = document.getElementById ("js:div_slider_foto");
	
	icona_menu_mobile.style.display="none"; 
	icona_menu_mobile_close.style.display="inline";
	div_testo.style.display="none";
	menu_verticale.style.display="inline";
	elenco_siti.style.display="inline";
	div_slider.style.display="none";
	
	div_menu_verticale.style.width="100%";
	div_menu_verticale.style.display="inline";
	

	
}

function nascondi_menu_verticale_mobile () {
	var icona_menu_mobile = document.getElementById ("js:mobile_menu_icon");
	var icona_menu_mobile_close = document.getElementById ("js:mobile_menu_icon_close");
	var menu_verticale = document.getElementById ("js:menu_verticale");
	var div_testo = document.getElementById ("js:div_testo");
	var div_menu_verticale = document.getElementById ("js:div_menu_verticale");
	var elenco_siti = document.getElementById ("js:elenco_siti_consigliati");
	var div_slider = document.getElementById ("js:div_slider_foto");
	
	icona_menu_mobile.style.display="inline"; 
	icona_menu_mobile_close.style.display="none";
	div_testo.style.display="inline";
	menu_verticale.style.display="none";
	elenco_siti.style.display="none";
	div_slider.style.display="inline";
	
	div_menu_verticale.style.display="inline";
	//div_menu_verticale.style.width="15%";	
	

}


 /***********************************************************************************************************************************************/
/*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DA CONTROLLARE E FINIRE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function rendi_trasparente_navbar () {
	var navbar = document.getElementById ("js:navbar");
	
	navbar.style.background="transparent"; 
	navbar.style.color="#ffffff";
	
	
}

*/





