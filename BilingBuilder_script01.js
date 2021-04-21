"use strict";
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
/*
momento di esecuzione delle funzioni:
	1) appena caricato :  carica_tutti_messaggi
	2) tutte le altre 'function' sono eseguite a seguito di onclick o onpaste (file ...html)
	
	onpaste="onpaste_ottiene_le_righe(this)"
	onpaste="onpaste_txtarea_tradotta( this.id )"	
	onclick="onclick_abbina_righe_originali_e_traduzioni()"

*/
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

/*
top secret :) 
	i file (3) e (4) saranno proposti come preview solo se
		il nome della cartella che contiene questo script termina con "34" 
	( alla gente non gliene importa niente di questi file, ma servono a me come input per altro ) 
*/
//window.addEventListener("pageshow", inizio());

document.getElementById( "id_box10").classList.toggle("cl_visibile");

highlight_text_split();
 
function highlight_text_split() {
	if ( document.getElementById("id_poesia_NO").checked ) {
		document.getElementById("id_m030").style.fontWeight = "bold";
		document.getElementById("id_m031").style.fontWeight = "normal";
	} else{
		document.getElementById("id_m031").style.fontWeight = "bold";
		document.getElementById("id_m030").style.fontWeight = "normal";
	}
}
 
function gotobox(from_id, to_id) {	
	if (from_id == to_id) return;	
	//alert("from " + from_id + " gotobox " + to_id)  
	//document.getElementById(   to_id ).scrollIntoView();	
	document.getElementById(   to_id ).style.display = "inline-block";  // "run-in";	
	document.getElementById( from_id ).style.display = "none";	
	if (to_id == "id_box30") onclickview1( document.getElementById("radout1"), 1 )
	if (to_id == "id_box15") {	
		set_textarea_row2();
		document.getElementById("id_butt_3").setAttribute("title",  myLanguage_msg[37] );   
	}
}
var fontsize_customiz = '' + 
	'// if html filename ends whith fontsizeXX.html   \n'    +
	'// the string xx + "em"  is used to update body font-size  \n'   + 
	'// The user can change fontsize just renaming the filename 1n '+
	'//  	eg. renaming myfile1.html  to myfile1_fontsize2.5.html   will change the body font-size to 2.5em; \n'   + 
	'var path = window.location.pathname; \n' +
	'if ( path.indexOf("\\\\") < 0)   var page = path.split("/").pop();    \n' +
	'else var page = path.split("\\\\").pop();    \n' +	
	'var filename1 = page.substring(0, page.length-5);  \n' +
	'var i1 = filename1.toLowerCase().indexOf("_size"); \n' +
	'if (i1>0) { \n' +
	'	var size=filename1.substring(i1+5);    \n' +
	'	if (size == undefined) size = "";      \n ' +
	'	if (size != "") {  \n ' +
	'		if (isNaN(size) == false) {        \n' +
	'			if (size < 0.5) size =0.5;     \n' +
	'			if (size > 3.0) size = 3.0;    \n' +
	'			document.body.style.fontSize = size+"em"; \n' +
	'		}   \n' +
	'	}       \n'	+
	'}  \n' ;
	

	
/*	
var ele1Orig = document.getElementById('id1_txt_pagOrigP');
var whole_height0 = ele1Orig.offsetHeight; 
var whole_height1, whole_height2, whole_height3; 
	ele1Orig.rows = "10";  whole_height1 = ele1Orig.offsetHeight; 
	ele1Orig.rows = "100"; whole_height2 = ele1Orig.offsetHeight; 
	ele1Orig.rows = "200"; whole_height3 = ele1Orig.offsetHeight;  
	alert( "orig2 height0=" +  whole_height0 + " rows1=10 height1=" +  whole_height1 +  "  rows2=100 height2=" +  whole_height2 + "  rows3=200 height3=" +  whole_height3 );    
*/	
var free_zone = "\n\n\n\n";
var len_freezone = free_zone.length; 

var win_w = screen.width;
var win_h = screen.height;  
var	containerW = (win_w*0.95).toFixed(0); 
var containerH = (win_h*0.95).toFixed(0);  
//document.getElementById("id_cont2").style.width  = containerW+'px'; 	 	
//document.getElementById("id_cont2").style.height = containerH+'px'; 	

var PATH_to_this_html = location.pathname.toString();
var filexy = get_nomi_file() ;
var prefisso_file_css_script = filexy[0]; // "A2_BilingBuilder_"; // prefisso file script e css
var filehtml_lev1 = filexy[1]; // ....html  ==>   questo nome file  

var sw_BREAK_PHRASE = true; // se true dividi il testo in frasi 

var salva_txt_orig = ""; // valori inizio 
var salva_txt_trad = ""; // valori iniziali 
var sw_primo_input = true;
var numero_run = 0;
var sw_ERROR_MAX_LENGTH_TRANSLATION = false;
var html_bil_prt = "";
var len_stringa_originale = 0;

var len_somma_trad = 0;
var sw_ERROR_STOP = false;
var swPAROLE = false;

var arr_sezioni_OK_trad = [];
var arr_sezioni_trad = [];
var arr_sezioni_orig = [];
var arr_sezioni_ix = [];

//var sez_from_ixP;
var NUMERO_SEZIONE_INIZIO_PAROLE = 0;
var ULTIMO_NUMERO_SEZIONE_SELEZIONATO = 1;
var NUMERO_SEZIONI_TESTO = 0;

var ix, i;
var messaggio = "";



var tutte_le_parole = "";

var pagTrad = ""; // primo input   
var stringa_frasi_numerate_tradotte = "";
var stringa_frasi_numerate_originali = "";

var stringa_righe_di_parole_frasi_originali = "";


var riga_di_coppie;
var MAX_LUNGHEZZA_TESTO_DA_TRADURRE = 5000; // il limite di google traslate è di 5000 caratteri, bing 10000
var MAX_LUNGHEZZA_TESTO_DA_TRADURRE_2 = MAX_LUNGHEZZA_TESTO_DA_TRADURRE * 0.95; // valore utilizzato


var NUMERO_SEZIONI_TESTO = 0; // sezioni della pagina che accoglieranno il vari pezzi del testo di massimo 4500 caratteri  
var NUMERO_SEZIONE_INIZIO_PAROLE = -1;

var numeroParoleOrig = 0;
var numero_frasi = 0;
var downlText = "";
var testo_out_orig = "";
var testo_out_bilingue = "";
var tutte_le_parole = "";


var downlText = "",
    downlText2 = "";
var testo_out_orig = "",
    testo_out_bilingue = "";

var origa, triga, rigaParoleTrad1, rigaParoleTrad2, rigaParoleTrad = "";

var dwn_riga;
var array_frasi_parole_orig_trad_0 = [];
var array_frasi_parole_orig_trad_1 = [];
var array_frasi_parole_orig_trad_2 = [];
var array_frasi_parole_orig_trad_3 = [];

//---------------------------------		

//*
// qui sopra variabili globali 
//*
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
//*
// qui sotto istruzioni che saranno eseguite subito alla partenza 
//*

var myLang_default = "EN" ;  // default = inglese 		

var myLang = navigator.language.substring(0,2).toLowerCase();
	
if (myLang == undefined)   myLang = myLang_default;
if (myLang == "undefined") myLang = myLang_default;

	
	

build_language_list()	; 

var myLanguage_msg = "" ;
msgSetting( getAllMsgInLang_xx( myLang ) );
	


var outfile_preview = ["0", "1", "2", "3", "4", "5", "6", "7"];
var outfile_download = ["0", "1", "2", "3", "4", "5", "6", "7"];
var outfile_name = ["", "", "", "", "", "", "", ""];
var outfile_descr = ["", "", "", "", "", "", "", ""];




//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// da 	qui in poi solo funzioni  
//-----------------------
function dummy_fun() {
    // mi serve soltanto come documentazione e per evitare errori nel javascript validator 

    var in_body_id;
    in_body_id = "filedescr1";
    in_body_id = "filedescr2";
    in_body_id = "filedescr3";
    in_body_id = "filedescr4";
    in_body_id = "filename1";
    in_body_id = "filename2";
    in_body_id = "filename3";
    in_body_id = "filename4";
    in_body_id = "head_preview";
    in_body_id = "id_conferma1";
    in_body_id = "id_inp_prova";
    in_body_id = "id_istruzioni";
    in_body_id = "id_poesia_NO";
    in_body_id = "id_poesia_SI";
    in_body_id = "id_ricarica1";
    in_body_id = "id_titolo";
    in_body_id = "id_txt_pagOrigP";
    in_body_id = "id_txt_pagTradP";
    in_body_id = "id_urlpagina";
    in_body_id = "m002_h001";
    in_body_id = "m011_scrivi_titolo";
    in_body_id = "m012_scrivi_http";
    in_body_id = "m021_sez1or";
    in_body_id = "m021_sez1tr";
    in_body_id = "m050_testo1";
    in_body_id = "m051_provatxt1";
    in_body_id = "menu_preview";
    in_body_id = "my_preview";
    in_body_id = "sez1_titolo2";


    onclick_1ottiene_righe_Orig_Trad('id_txt_pagOrigP', 'id_txt_pagTradP', 'id_poesia_NO');
    onclick_3ricarica_last_input('id_txt_pagOrigP', 'id_txt_pagTradP');
    onclickdown1(123, '1');
    onclickview1(123, '2');

} // fine dummy_fun
//---------------------
function beep1(volume) {
    var frequency = 1300;
    var type = 'square';
    //volume    = 0.15 ;
    if (volume < 0.02) volume = 0.02;
    if (volume > 0.5) volume = 0.50;
    var duration = 31;

    // https://stackoverflow.com/questions/879152/how-do-i-make-javascript-beep
    var audioCtx = new(window.AudioContext || window.webkitAudioContext)();


    var oscillator = audioCtx.createOscillator();
    var gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    gainNode.gain.value = volume;
    oscillator.frequency.value = frequency;
    oscillator.type = type;

    oscillator.start();

    setTimeout(
        function() {
            oscillator.stop();
        },
        duration
    );
}


//---------------------
function show_messaggi(msg1) {

    var msgElem = document.getElementById("id_istruzioni");
//document.getElementById("id_cont1").style.width  = containerW+'px'; 	 	
//document.getElementById("id_cont1").style.height = containerH+'px'; 	
    msgElem.innerHTML = '<table><tr><td>' + msg1 + '</td></tr></table>';  
	
    var beep_ERROR = 0.50;
    var beep_INFO = 0.02;

    if (msg1.indexOf("ERROR") >= 9) beep1(beep_ERROR);
    else beep1(beep_INFO);

}


function scrollView(id1) {
    var elmnt = document.getElementById(id1);
    var toTop = true;
    //var toBottom = false ;
 //   elmnt.scrollIntoView(toTop);
}

//---------------------------------		
function spezza_con2punti_e_rinumera(str0) {

    if (str0.length < 1) return "";

    var righe_n = str0.split("\n");

    //alert("spezza_con2punti_e_rinumera inizio num righe=" +righe_n.length);

    var str1 = "",
        str2 = "";
    var riga1 = "",
        myriga = "",
        blk = "",
        riga2 = "";

    // elimina numerazione esistente

    for (var i = 0; i < righe_n.length; i++) {
        riga1 = righe_n[i].trim();
        myriga = riga1 + "    ";
        if (myriga.substring(0, 2) == "(.") {
            //(.1001)) xxxx
            //01234567890
            blk = myriga.substring(6, 7);
            if (blk == ")") {
                var numx = myriga.substring(2, 6);
                if (isNaN(numx) == false) {
                    myriga = "(." + myriga.substring(8).trim(); // elimina numero, lascia (. 
                }
            }
        }
        str1 += myriga.trim();
    }

    // spezza dopo (.
    if (str1.substring(0, 2) == "(.") str1 = str1.substring(2);
    var righe2 = str1.split("(.");
    var numero = 10000;

    for (i = 0; i < righe2.length; i++) {
        numero += 1;
        riga2 = "(." + numero.toString().substring(1) + ")) " + righe2[i] + "\n";
        str2 += riga2;
    }
    //alert("spezza_con2punti_e_rinumera fine   n.righe=" +str2.split("\n").length + " righe_n.length    numero di 2punti=" + numero );
    return str2;
}


//-----------------------------------------
function onclick_3ricarica_last_input(id_pagOrig0, id_pagTrad0) {
	
	
	var ms_123 =  myLanguage_msg[123]; // Il testo originale e la sua traduzione sono stati ripristinati al valore iniziale (tutte le modifiche sono state annullate)
	
    document.getElementById(id_pagOrig0).value = salva_txt_orig;
    document.getElementById(id_pagTrad0).value = salva_txt_trad;
    sw_primo_input = true;
    numero_run = 0;
    show_messaggi( '<span style="color:blue;">' + ms_123 + '</span>');

    salva_txt_orig = ""; // valori inizio 
    salva_txt_trad = ""; // valori iniziali 
    sw_primo_input = true;
    numero_run = 0;
    sw_ERROR_MAX_LENGTH_TRANSLATION = false;
    html_bil_prt = "";
    len_stringa_originale = 0;

    len_somma_trad = 0;
    sw_ERROR_STOP = false;
    swPAROLE = false;

    arr_sezioni_OK_trad = [];
    arr_sezioni_trad = [];
    arr_sezioni_orig = [];
    arr_sezioni_ix = [];


    NUMERO_SEZIONE_INIZIO_PAROLE = 0;
    ULTIMO_NUMERO_SEZIONE_SELEZIONATO = 1;
    NUMERO_SEZIONI_TESTO = 0;

    messaggio = "";

    tutte_le_parole = "";

    pagTrad = ""; // primo input   
    stringa_frasi_numerate_tradotte = "";
    stringa_frasi_numerate_originali = "";

    stringa_righe_di_parole_frasi_originali = "";



    MAX_LUNGHEZZA_TESTO_DA_TRADURRE = 5000; // il limite di google traslate è di 5000 caratteri, bing 10000
    MAX_LUNGHEZZA_TESTO_DA_TRADURRE_2 = MAX_LUNGHEZZA_TESTO_DA_TRADURRE * 0.95; // valore utilizzato

    NUMERO_SEZIONI_TESTO = 0; // sezioni della pagina che accoglieranno il vari pezzi del testo di massimo 4500 caratteri  
    NUMERO_SEZIONE_INIZIO_PAROLE = -1;

    numeroParoleOrig = 0;
    numero_frasi = 0;
    downlText = "";
    testo_out_orig = "";
    testo_out_bilingue = "";
    tutte_le_parole = "";


    downlText = "";
    downlText2 = "";
    testo_out_orig = "";
    testo_out_bilingue = "";

    origa = "";
    triga = "";
    rigaParoleTrad1 = "";
    rigaParoleTrad2 = "";
    rigaParoleTrad = "";

    dwn_riga = "";
    array_frasi_parole_orig_trad_0 = [];
    array_frasi_parole_orig_trad_1 = [];
    array_frasi_parole_orig_trad_2 = [];
    array_frasi_parole_orig_trad_3 = [];


}



var quadro21_height= document.getElementById('id_quadro21').offsetHeight;
var quadro21_top   = document.getElementById('id_quadro21').offsetTop;
var quadro21_end   = quadro21_top + quadro21_height;
var quadro21_endtop= document.getElementById('id_end_quadro21').offsetTop;
var quadro21_free  = quadro21_end - quadro21_endtop;
//alert("quadro21 top=" + quadro21_top + " height="+quadro21_height + " end=" + quadro21_end + "  p_end=" + quadro21_endtop + " free=" + quadro21_free);

var ele1_Text = document.getElementById('id1_txt_pagOrigP'); 
var ele1_num_rows_save = ele1_Text.rows;
ele1_Text.rows ="100"; 
var ele1_Height = ele1_Text.offsetHeight; 
var ele1_num_rows  = ele1_Text.rows; 
var ele1_height_row;
if  (ele1_num_rows > 0) {
		ele1_height_row = ele1_Height / ele1_num_rows;  // height of a textarea row 
		if ( ele1_height_row > 0) {
			ele1_num_rows = Math.round( quadro21_free / ele1_height_row ) -1; 
			//alert("ele1_Height=" + ele1_Height + "   ele1_height_row = " + ele1_height_row + "  quadro21_free="  +  quadro21_free + " ele1_num_rows="+ ele1_num_rows  );			
			if (ele1_num_rows > ele1_num_rows_save) {
				ele1_num_rows_save = ele1_num_rows;	
			}
		}
	ele1_Text.rows = ele1_num_rows_save; 
	document.getElementById('id1_txt_pagTradP').rows = ele1_num_rows_save;  
}		

//if  (ele1_num_rows > 0) alert( "rows=" + ele1_num_rows +  "    heightRow=" + ele1_Height / ele1_num_rows)

//set_textarea_row2();  // all'inizio non posso usarlo perche il box non è visibile 
/*
var elebut = document.getElementById('id_bu22'); 
var elebox = document.getElementById('id_box20')
alert("button22 width=" + elebut.width + " left computed=" +  window.getComputedStyle(  elebut ).left  + "  offsetWidth=" + elebut.offsetWidth  + "  BOX offsetWidth=" + elebox.offsetWidth   ); 
*/
 
//---------------------------------------	
function set_textarea_row2() { 
	var height_quadro2= document.getElementById('id_quadro22').offsetHeight;
	var height_q2_th  = document.getElementById('id_q22_th').offsetHeight; 
	var height_text   = height_quadro2 - 1.5*height_q2_th;  
	var ele1Orig = document.getElementById('id2_txt_pagOrigP');	
	var num_rows_start = ele1Orig.rows; 
	ele1Orig.rows = "100"; 
	var height_100rows = ele1Orig.offsetHeight; 
	var num_rows =  Math.round(  height_text * 100 /  height_100rows) - 3; // - 1 ; 
	//alert("num_rows=" + num_rows)
	if (num_rows > 2) {
		ele1Orig.rows = num_rows ; 
		document.getElementById('id2_txt_pagTradP').rows = num_rows; 
	} else {
		ele1Orig.rows = num_rows_start; 
	}

	//alert(" height_quadro2=" + height_quadro2 + ",  height_q2_th=" + height_q2_th  + " height_text=" + height_text + " num_rows=" + num_rows)
}
//-------------------------------------

//--------------------------------------------

function mostra_diff( uno, due  ) {
	return  '<span style="font-size:1.5em;background-color:red;"><b>' + uno + '</b></span>' +
			'&nbsp;&nbsp;' + 
			'<span style="font-size:1.5em;background-color:red;"><b>' + due + '</b></span>' ;
}
	
//-------------------------------------------
function check_nonAlfanumerici( rigaOs, rigaTs) {
		var retc = [true,""];
		
		var marks_pattern = /[\"?!<>\“\”\`]/g;		
		
		var marks_or = rigaOs.match(marks_pattern); // estrae i caratteri non alfanumerici  
        var marks_tr = rigaTs.match(marks_pattern); // estrae i caratteri non alfanumerici  	
		if (marks_or == null) marks_or = "";	
		if (marks_tr == null) marks_tr = "";	
		marks_or += "";  
		marks_tr += "";  
		marks_or = marks_or.split('').sort().join(' ');    // mette in sequenza  
		marks_tr = marks_tr.split('').sort().join(' ');    // mette in sequenza  
		
			
		var marks_or2 = marks_or.replace(/[\"<>\“\”\`]/g, '"');    // sostituisce caratteri simili con uno solo 
		var marks_tr2 = marks_tr.replace(/[\"<>\“\”\`]/g, '"');    // sostituisce caratteri simili con uno solo 
		
        if (marks_or2.toString() != marks_tr2.toString()) {    // confronta se diversi visualiza i caratteri originali  
			retc[0] = false; 	
			retc[1] = mostra_diff(marks_or, marks_tr) ;
        }
		return retc; 
	
} //------ fine check 
//------------------------------------------
function verify_text(txtOrig, txtTrad) {
	var sw_ok = false; 
    var righeOr = txtOrig.split("\n");
    var righeTr = txtTrad.split("\n");
	
	var numRor = righeOr.length;
    var numRtr = righeTr.length;
	numero_frasi = numRor;
	
    if ((txtTrad.trim() ==  free_zone) || (txtTrad.trim() == "")) { // non si può eseguire nessun confronto, niente da controllare	
        righeTr = [""];		
		return [true, righeOr, righeTr];
    }

    var num_err0 = 0,
        max_err0 = 40;
    var num_err1 = 0,
        max_err1 = 4;
    var num_err2 = 0,
        max_err2 = 4;
    var num_err3 = 0,
        max_err3 = 4;
    var num_err4 = 0,
        max_err4 = 4;
		
	var ms_014 = myLanguage_msg[14] ; // VERIFICARE</b> e se necessario <b>MODIFICARE</b> <br>la suddivisione in righe di uno o entrambi i testi.</span>"  		
	
		var ms_015 = myLanguage_msg[15] ; // Le righe possono essere spezzate o unite insieme.</span></li> " +
		var ms_016 = myLanguage_msg[16] ; // Una riga può essere spezzata inserendo una parentesi aperte ed un punto  <B>(.</B>.</span></li>" + 
		var ms_017 = myLanguage_msg[17]; // Due righe consecutive possono essere unite  eliminando il numero</span> " + 
				var ms_018 = myLanguage_msg[18]; // '>e le doppie parentesi che le separano.  </span>" + 
	
	var ms_020 = myLanguage_msg[20]; // '>Per confermare le modifiche  premere il tasto  <b>ESEGUI</b></span>" + 
	var ms_021 = myLanguage_msg[21]; // '><br>(le righe saranno automaticamente rinumerate).</span>" + 
	var ms_022 = myLanguage_msg[22]; // '><br>Per eliminare tutte le modifiche e ripartire con i testi iniziali" + 
	
	var ms_096 =  myLanguage_msg[96]; //  Suggerimenti per la correzione		
	
	/**
	
			"</span><br><span  style=\"text-align:left; font-size:1.5em;\"  class=\"f_blue\">" + ms_096 + "</span><br>" + 
	
	**/
	var consigli = " " +
		'<button ' + 
		'	class="goto_page"   style=\"width:15%;\" ' +	
		'		onclick=\'document.getElementById( "id_err_sinc").classList.toggle("cl_visibile");\' >' +
		'		' + ms_096  + 
		'	</button>' +		
		"<table id=\"id_err_sinc\"  class=\"cl_nascosto\" style=\"text-align:right;width:80%;\">	" + 
		" <tr><td>&nbsp;</td></tr>" +  
		"			<tr>" + 
		"             <td  	  style=\"width:20%;\">	&nbsp;</td>" + 			
		"			   <td   style=\"text-align:left;background-color:#fefbd8;\">	" + 				
						   ms_014 + 
		"				   <ul>" + 
		"							<li>" + ms_015 + "</li> " +		
		"							<li>" + ms_016 + "</li> " +			
		"							<li>" + ms_017 + ms_018 + "</li> " +	
		"					</ul>" + 
									ms_020 +   
									ms_021 + 
									ms_022 +
									"<br><br>" + 
		"			   </td>" + 
		"			</tr>" + 
		" </table> " + 
		"<br><br>" + 
		"  " ; 
		
		
    var messa1 = "";

    var newLineTab = "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    var newLineTab0 = "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";


    
    var digit_pattern = /[0-9]/g;




    numero_frasi = numRor;

    var lenOr = txtOrig.length - numRor * 9;
    var lenTr = txtTrad.length - numRtr * 9;
    if (lenOr < 0) lenOr = 0;
    if (lenTr < 0) lenTr = 0;

	//-----------------
	function stampa_errore(msg1) {
		origa = msg1 ;
		if (rigaO != "") origa += '<br>' + '&nbsp;'.repeat(10) + rigaO ; 
		if (rigaT != "") origa += '<br>' + '&nbsp;'.repeat(10) + rigaT;  	
		return "<br><br>" + origa;  	
	}

    //--------------------------
	
    if (numRor != numRtr) { 
	
		var ms_124 =  myLanguage_msg[124];  // "Testo originale e tradotto sono composti da <b>numeri righe diversi</b>" 	
		//var ms_125 =  myLanguage_msg[125];  // ") diverso della Traduzione("  ;
		
        if (num_err0 < max_err0) messa1 += "<br>" + ms_124 + " (" + numRor + ", " + numRtr + ")"; 
        num_err0 += 1;
        for (ix = Math.min(numRor) + 1; ix < Math.max(numRor, numRtr); ix++) {
            if (numRor <= ix) righeOr.push("");
            if (numRtr <= ix) righeTr.push("");
        }
    }

    //---------------------------------
    var percLenTxO_Tot = 0; // percentuale di lunghezza della traduzione rispetto all'originale

    if (lenOr > 0) {
        percLenTxO_Tot = (100 * lenTr / lenOr).toFixed(0);
    }


    var limite_perc_differenza = 50; // massima differenza di questa percentuale rispetto a quella delle coppie di righe   	

    numRor = righeOr.length;
    numRtr = numRor;


    for (var i = 0; i < numRor; i++) {

        var rigaO = righeOr[i];

        if (i >= numRtr) break;

        var rigaT = righeTr[i];
        if (rigaT == undefined) rigaT = "";
        //(.1234)) xxxxxxxx
        //0123456789
        var rigaOs = rigaO.substring(8).trim();
        var rigaTs = rigaT.substring(8).trim();
        var rigaOlen = rigaOs.length;
        var rigaTlen = rigaTs.length;
        var percLenTxO_r = 0;


        if ((rigaOs == "") && (rigaTs == "")) continue;

		var ms_097 = myLanguage_msg[97]; // "coppia righe "  ;
		var ms_098 = myLanguage_msg[98]; //  "lunghezza molto diverse: ";
		var ms_099 = myLanguage_msg[99]; //  "origine" ;
		var ms_100 = myLanguage_msg[100]; //  "traduzione";
		var ms_101 = myLanguage_msg[101]; //  "soltanto una versione" ;
		var ms_102 = myLanguage_msg[102]; //  "le due versioni non contengono gli stessi numeri" ;
		var ms_103 = myLanguage_msg[103]; //  "le due versioni non contengono gli stessi segni" ;
		var ms_104 = myLanguage_msg[104]; //        "niente"; 
         
        //------------------------------------------------------------------
        if ((rigaOs == "") || (rigaTs == "")) { // soltanto uno è vuoto,  l'altra riga esiste

            if (num_err2 < max_err2) {
                /*
				messa1 += "<br><br>" + ms_097 + " " + (i + 1) + " <b>" + ms_101 + "</b>" + newLineTab + 
					rigaO + newLineTab + rigaT;
				*/	
				messa1 += stampa_errore( 	 " <b>" + ms_101 + "</b>" ); 
            }
            num_err2 += 1;
            continue;
        }

        //--------------------------------------------------------------
        if (rigaOlen > 0) percLenTxO_r = (100 * rigaTlen / rigaOlen).toFixed(0); // percento lunghezza traduzione rispetto all'origine 			
        // confronta percentuale lunghezza traduzione/Originale con la percentuale della  somma delle lunghezze trad./orig.	
        if (Math.abs(percLenTxO_Tot - percLenTxO_r) > limite_perc_differenza) {
            if (num_err1 < max_err1) {
                //messa1 += "<br>3" + ms_097 + (i + 1) + " <b>" + ms_098 ; // + "</b>" + ms_099 + "(" + rigaOlen + ") " + ms_100 +"("+ rigaTlen + ")" +
				/*
				messa1 += "<br><br>" + ms_097 + (i + 1) + " <b>" + ms_098 + "</b>"  +
                    newLineTab + rigaO + newLineTab + rigaT;
				*/	
					
				messa1 += stampa_errore( " <b>" + ms_098 + "</b>" );
            }
            num_err1 += 1;
            continue;
        }
        //------------------------------------------------		
        var digit_or = rigaOs.match(digit_pattern);
        var digit_tr = rigaTs.match(digit_pattern);
        if (digit_or == null) digit_or = "";
        else digit_or = digit_or.sort();
        if (digit_tr == null) digit_tr = "";
        else digit_tr = digit_tr.sort();

        if (digit_or.toString() != digit_tr.toString()) {
            if (num_err3 < max_err3) {
				/*
                var digit_or1 = "cifre " + digit_or;
                if (digit_or == "") digit_or1 = ms_104 ; // "niente";
                var digit_tr1 = "cifre " + digit_tr;
                if (digit_tr == "") digit_tr1 = ms_104 ;  // "niente";
                messa1 += "<br><br>" + ms_097 + (i + 1) + " <b>" + ms_102 + "</b>" +  
                    newLineTab + rigaO + newLineTab + rigaT;
				*/	
				messa1 += stampa_errore(	 " <b>" + ms_102 + "</b>" );
            }
            num_err3 += 1;
            continue;
        }
        //------------------------------------------------
		if (num_err4 < max_err4) { 
			var retc1 = check_nonAlfanumerici(  rigaOs, rigaTs ); 
			if (retc1[0] == false) {
				messa1 += stampa_errore(" <b>" + ms_103 + " " + retc1[1] + ms_104 +"</b>" );	
				num_err4 += 1;				
				continue;
			}
		}		
        
        //---------------
    } // fine for i 	
	sw_ok = false; 
	if (messa1 == "") {
		document.getElementById("id_istruzioni").className = "cl_nascosto";
		//alert("id_istruzioni invisibile")
		sw_ok=true;
	}	else{
		sw_ok = false; 
		//alert("id_istruzioni visibile")
		
		document.getElementById("id_istruzioni").className = "cl_visibile";
		
		//document.getElementById("id_consigli").className = "cl_visibile"; 
		var ms_095 = myLanguage_msg[95] ; // "ATTENZIONE  - Anomalie " +
		var ms_096 = myLanguage_msg[96] ; // "Per suggerimenti premi il pulsante <b>Errori di sincronizzazione</b> (in alto a destra)";
		
        var messaggio1 = "" +
            '<table style="text-align:center;width:100%;">' +
			'	<tr>' +
			'<td  style="text-align:left;">'  +
			'<table style="width:100%;text-align:center;"><tr><td style="width:100%;text-align:center;"> ' + 
            "<span style=\"text-align:left; font-size:2.0em;\"  class=\"f_red\">" + ms_095 + "</span>" + 
			'</td></tr></table>' +
			consigli + 
			messa1 +			
			'</td>' +
			'</tr>' + 	
			"</table>";
	    //alert(messaggio);
		
        show_messaggi(messaggio1);
    }
	
	/***
    if (messa1 != "") {
		//document.getElementById("id_consigli").className = "cl_visibile"; 
		var ms_095 = myLanguage_msg[95] ; // "ATTENZIONE  - Anomalie " +
		var ms_096 = myLanguage_msg[96] ; // "Per suggerimenti premi il pulsante <b>Errori di sincronizzazione</b> (in alto a destra)";
		alert("consigli=" + consigli);
        var messaggio1 = "" +
            '<table style="text-align:center;width:100%;">' +
			'	<tr>' +
			'       <td  style="width:10%;">&nbsp;</td>'  +
			'       <td  style="text-align:left;">'  +
			
            "<span style=\"text-align:left; font-size:2.0em;\"  class=\"f_red\">" +
            ms_095 +  "</span><br><span  style=\"text-align:left; font-size:1.5em;\"  class=\"f_blue\">" + ms_096 + "</span><br>" + 
			consigli + 
			messa1 +			
			'</td>' +
			'</tr>' + 	
			"</table>";

        show_messaggi(messaggio1);
    }
	****/
    return [sw_ok, righeOr, righeTr];
} // fine verify...

//-----------------------------------------
function onclick_1ottiene_righe_Orig_Trad_first(id_poesia_NO, id_pagOrig0, id_pagTrad0, id2_pagOrig, id2_pagTrad , id_before, id_errori, id_preview) {

    var poesiaNO = document.getElementById(id_poesia_NO);
    sw_BREAK_PHRASE = poesiaNO.checked; // se true  non è poesia,  dividi il testo in frasi , altrimenti lascia le righe come sono 	

    var ele1Orig = document.getElementById(id_pagOrig0);
    var ele1Trad = document.getElementById(id_pagTrad0);
    var eleOrigVal = ele1Orig.value;
    var eleTradVal = ele1Trad.value;
	
	//alert("orig  rows=" +  ele1Orig.rows + " height=" + ele1Orig.offsetHeight + 'px'  + "   fontSize=" + window.getComputedStyle(  ele1Orig ).fontSize);
	
    var ele1OrigNumerati, ele1TradNumerati;
    var righeOr, righeTr;
    len_stringa_originale = eleOrigVal.length;

    if ((eleOrigVal == "") && (eleTradVal == "")) return;
    numero_run += 1;
    
	//document.write("<br>" + "onclick_1 021") 
	sw_primo_input = false;

	salva_txt_orig = eleOrigVal;
	salva_txt_trad = eleTradVal;

	//document.getElementById("id_come_spezzare").style.display="block" ;		

	ele1OrigNumerati = elabora_textarea_divide_in_frasi_punto_separa(eleOrigVal);

	document.getElementById(id2_pagOrig).value = ele1OrigNumerati;

	ele1TradNumerati = elabora_textarea_divide_in_frasi_punto_separa(eleTradVal);
	document.getElementById(id2_pagTrad).value = ele1TradNumerati;

	var ret_verify = verify_text(ele1OrigNumerati, ele1TradNumerati);
	var sw_no_error = ret_verify[0];
	righeOr = ret_verify[1];
	if (ele1TradNumerati.trim() == "") { // non si può eseguire nessun confronto, niente da controllare			
		righeTr = [""];
	} else {
		righeTr = ret_verify[2];
	}
	
    crea_anteprima_NUOVO(righeOr, righeTr, ele1OrigNumerati);
    mostra_menu_anteprime();
	
	if (ele1TradNumerati.trim() == "") {
		gotobox(  id_before, id_preview);  
	} else {
		if (sw_no_error)  {
			gotobox( id_before,  id_preview );
		} else {
			gotobox( id_before,  id_errori  );
		}
	}

} // fine onpaste_ottiene_le_righe(element) 

//-----------------------------------------
function onclick_1ottiene_righe_Orig_Trad_other(id_poesia_NO, id_pagOrig0, id_pagTrad0, id_before, id_errori, id_preview) {

    var poesiaNO = document.getElementById(id_poesia_NO);
    sw_BREAK_PHRASE = poesiaNO.checked; // se true  non è poesia,  dividi il testo in frasi , altrimenti lascia le righe come sono 	

    var ele1Orig = document.getElementById(id_pagOrig0);
    var ele1Trad = document.getElementById(id_pagTrad0);
    var eleOrigVal = ele1Orig.value;
    var eleTradVal = ele1Trad.value;
	var compStyles, whole_height1, whole_height2, whole_height3 , diff_height;
	
	//  rows="33"
	/*
		alert("orig2  rows=" +  ele1Orig.rows + " height=" + ele1Orig.offsetHeight + 'px'  + "   fontSize=" +  compStyles.fontSize +
			"\n"+ 'My computed font-size is ' +
    compStyles.getPropertyValue('font-size') +
    ',\nand my computed line-height is ' +
    compStyles.getPropertyValue('line-height')  ) ;
	*/

	
    var ele1OrigNumerati, ele1TradNumerati;
    var righeOr, righeTr;
    len_stringa_originale = eleOrigVal.length;

    if ((eleOrigVal == "") && (eleTradVal == "")) return;
    numero_run += 1;
    if (sw_primo_input) {        
		return; 
    } else {
        ele1OrigNumerati = spezza_con2punti_e_rinumera(eleOrigVal);
        document.getElementById(id_pagOrig0).value = ele1OrigNumerati;
        ele1TradNumerati = spezza_con2punti_e_rinumera(eleTradVal);
        document.getElementById(id_pagTrad0).value = ele1TradNumerati;
    }


    //if ( ele1TradNumerati.trim() == "") { // non si può eseguire nessun confronto, niente da controllare			
    //}	

    var ret_verify = verify_text(ele1OrigNumerati, ele1TradNumerati);
	var sw_no_error = ret_verify[0];
    righeOr = ret_verify[1];
    if (ele1TradNumerati.trim() == "") { // non si può eseguire nessun confronto, niente da controllare			
        righeTr = [""];
    } else {
        righeTr = ret_verify[2];
    }
	
    crea_anteprima_NUOVO(righeOr, righeTr, ele1OrigNumerati);
    mostra_menu_anteprime();

	if (ele1TradNumerati.trim() == "") {
		gotobox( id_before, id_preview );
		return;  
	} else {
		if (sw_no_error)  {
			gotobox( id_before,  id_preview );
		} else {
			gotobox( id_before,  id_errori  );
		}
	}
} // fine onpaste_ottiene_le_righe(element) 

//========================================
function crea_anteprima_NUOVO(righeOr, righeTr, tutto_txt_orig) {
    if (righeTr == undefined) righeTr = [""];
    var ix;
    var rigaO, rigaT;
    visibile_file34();
    numeroParoleOrig = contaParole3(tutto_txt_orig);
    riga_di_coppie = "";
	
    downlText = ""; // va nel file: "bilingue"       + filename_data + ".html", downlText2 
    testo_out_orig = ""; // va nel file: "biling_orig"    + filename_data + ".txt" 
    testo_out_bilingue = "";
    //==================
	

    var titolo_testo = document.getElementById("id_titolo").value;
    document.getElementById("id_titolo").style.font = "bold 2em arial,serif";

    var urlweb = document.getElementById("id_urlpagina").value;
    document.getElementById("id_urlpagina").style.font = "italic arial,serif";
	
	//var winHead = prologo_lev2( titolo_testo,  prefisso_file_css_script); 
	
    html_bil_prt =  '<!DOCTYPE html>\n<html>\n<head>\n<meta charset=\"UTF-8\"/>\n' + 
			'<meta name="author"   content="BilingBuilder" />  \n' +
			'<meta name="date"     content="' + new Date() +  '" />  \n' +
			'<meta name="viewport" content="width=device-width, initial-scale=1"> \n' + 
			'<title>' + titolo_testo + '</title>\n';    
 

  

    html_bil_prt += "</head>\n<body style>\n" + '<div style="font-size:1.3em;"> \n' + "<h1>" + titolo_testo + "</h1>\n";

    if (urlweb !== "") {
        html_bil_prt += "" + "<i>" + urlweb + "</i>";
    }	
	
    var html_fileName = location.href.split("/").slice(-1);
	var ms_157 = myLanguage_msg[157] ;  // testo bilingue ottenuto  dall'esecuzione del file
	var ms_132 = myLanguage_msg[132];  // frasi
	html_bil_prt += "<br>" + ms_157 + "<i>" + html_fileName.toString().replaceAll("%20", " ")+ " by Antonio Cigna 2021 ";
    html_bil_prt += "		</i>" + "<br>&nbsp;&nbsp;&nbsp;&nbsp;" + new Date();
    html_bil_prt += "<br>" + numeroParoleOrig + "     " + numero_frasi + " " + ms_132 + "<br>\n";
	var ms_156 = myLanguage_msg[156] ; // possibile modificare grandezza caratteri cambiando nome al file
	
	
	html_bil_prt += '<table><tr><td style="width:4em;"><td><i><small> \n' + ms_156 + '</small></i></td></tr><table> \n'; 
	
	
    html_bil_prt += "</span>\n ";
	

 
	var winHead = prologo_lev2( titolo_testo, urlweb ,  html_fileName,  prefisso_file_css_script, numero_frasi, numeroParoleOrig); 
	
    winHead += '<hr><br>\n' + '<div id="body2"  style="font-size:2.0em;" > \n' ;
     //   "<h1>" + titolo_testo + "</h1>\n";		

    //=== inizio dell'elenco frasi  

    //--------------------
    winHead += "<table style=\"border: 0px solid black; border-collapse: collapse; width:100%;\"> \n";
	winHead += '<!-- la  prima <tr> serve soltanto a forzare la larghezza minima della prima colonna (<td></td>  td ignora min-idth, per <div> invece min-width funziona --> \n'; 
	winHead += '<tr><td ><div style="min-width:2em;"></div></td><td></td></tr> \n'; 
 
   //======================

    var id_riga, id_riga1, id_riga2;

    //================  una frase per volta 	
    //              "   
    var lenTr2 = righeTr.length;
	
    for (ix = 0; ix < righeOr.length; ix++) {
        rigaO = righeOr[ix];
        rigaT = "";
        if (ix < lenTr2) rigaT = righeTr[ix];
        //(.1234)) xxxxxxxx
        //0123456789
        origa = rigaO.substring(8).trim();
        triga = rigaT.substring(8).trim();
	
        id_riga = (10000 + ix + 1).toString().substring(1);
        id_riga1 = id_riga + " 1 ";
        id_riga2 = id_riga + " 2 ";

        if (triga == "") html_bil_prt += "<br>" + origa + "\n";
        else html_bil_prt += "<br><br><b>" + origa + "</b> \n" + "<br>" + triga + "\n";

        dwn_riga = "";

        /*---- frase num. 1 ----*/
        dwn_riga += "   <tr> \n";

        dwn_riga += "       <td style=\"width:5%;\">\n";
        /*---- frase num. 1 bottoni ----*/
        if (triga != "") {
            dwn_riga += "          <button class=\"cerchio_button c_red   f_white\"   onclick=\"lev2x_traduz_si_no( '" + id_riga + "')\"   title=\"Traduzione\"><b>&nbsp;</b></button> \n";
        } else {
		    dwn_riga += "          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span> \n"; 
		}
        if (origa != "") {
            dwn_riga += "          <button class=\"cerchio_button c_green f_white\" onclick=\"lev2x_orig_si_no(   '" + id_riga + "')\"   title=\"Originale\" ><b>&nbsp;</b></button> \n";
        }
        /*--- fine bottoni --*/
        dwn_riga += "       </td> \n";

        dwn_riga += "       <td >\n";

        /*--- inizio parte frase --*/
        dwn_riga += "          <table  style=\"width:100%\"> \n";

        dwn_riga += "              <tr><td id=\"X" + id_riga + "\" style='width:100%' class='cl_visibile'>" + origa + "</td></tr> \n";
        dwn_riga += "              <tr><td id=\"T" + id_riga + "\" style='width:100%' class='cl_nascosto'>" + triga + "</td></tr> \n";
        dwn_riga += "          </table> \n";
        dwn_riga += "       </td> \n";
        /* fine parte frase --*/

        dwn_riga += "   </tr> \n";
        /*--- fine frase ---*/


        downlText += dwn_riga; // va nel file: "bilingue"  + filename_data + ".html", downlText2 
        testo_out_orig += origa + "\n"; // va nel file: "biling_orig"    + filename_data + ".txt" 
        testo_out_bilingue += id_riga1 + origa + "\n" + id_riga2 + triga + "\n"; // va nel file: "biling_2_righe" + filename_data + ".txt" 

    }
	

	downlText2 = winHead + downlText + "</table> \n" + "</div>\n<br><br><br>\n" ;

	
	var script2_content =  document.getElementById("id_scr_lev2").text;
	downlText2 +=    "<script> \n" + script2_content + "\n " +
				fontsize_customiz + 
				"</script> \n </body>\n</html>"; 
		
    html_bil_prt += "<br><br></div> \n" + 
				"<script>  \n" + fontsize_customiz + "</script> \n " +		
				"</body>\n</html>";

}
// fine crea_anteprima_NUOVO
//================================================

//------------------------------------------	
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

//---------------------------
function contaParole3(str0) {
    var str1 = str0.trim().toLowerCase();
    len_stringa_originale = str1.length;

    var str2 = str1.replace(/[&\/\\#,+()$~%\.\'\":\*?!<>{}\“\\”\`0-9]/g, ' ');
    str2 = str2.trim().replace(/  /g, ' ').replace(/ /g, ' ');

    var parole = str2.replace(","," ").split(" ");
	
    var numParole = parole.length;
    var uniche = [];
    var numparo = [];
    var ix1 = 0,
        i = 0;
    var parola = "";
    tutte_le_parole = "";
    for (i = 0; i < numParole; i++) {
        parola = parole[i].trim();
        if (parola === "") continue;
		
        ix1 = uniche.indexOf(parola);
        if (ix1 < 0) {
            uniche.push(parola);
            numparo.push(1);
        } else {
            numparo[ix1] += 1;
        }
    }
    var nump, unparola;
    var listaKey = [];
    var num_tot_parole = 0;

    //var sommalen=0;
    for (i = 0; i < uniche.length; i++) {
        nump = numparo[i];
        unparola = uniche[i];
        listaKey.push((10000 - nump).toString() + "," + (10000 + nump).toString().substring(1) + "," + unparola);
        num_tot_parole += nump;
    }
    //var medial = 0;
    //if (uniche.length > 0) 	medial = (sommalen / uniche.length).toFixed(0);
    listaKey.sort();
    for (i = 0; i < listaKey.length; i++) {
        tutte_le_parole += listaKey[i].substring(5) + "\n";
    }
	
	var ms_130 = myLanguage_msg[130] ; // parole  words
	var ms_131 = myLanguage_msg[131] ; // different
    return num_tot_parole + " " + ms_130 + " (" + uniche.length + " " + ms_131 + ")";
}
//	


//=================================================================

//-------------------------------------
function elabora_textarea_divide_in_frasi_punto_separa(str0) {
    if (str0.trim() == "") return "";
    //var anto1rig = str0.split("\n");  //alert(" numero righe inziali (separaz barra n) = " + anto1rig.length) 
    var num_br = 10000,
        num_bianche = 0;
    var xstr1 = "  " + str0 + " ";
    var len1 = xstr1.length;
    var i = 0;
    var xpost1;
    var textout = "";


    if (sw_BREAK_PHRASE == false) { // bisogna lasciare le righe come sono ( è poesia) 
        addtxt(str0);
        return textout;
    }

    str0 = str0.replaceAll("\n", " \n").replaceAll("  \n", " \n"); //nuovo anto123

    //xstr1 = xstr1.replace(/\r\n|\r|\n/g,"ç1ç");		// carattere di a capo 3 modi diversi /r/n,  /n (line feed),  /r (carriage return)
    xstr1 = xstr1.replace(/\r\n|\r|\n/g, "\n"); // carattere di a capo 3 modi diversi /r/n,  /n (line feed),  /r (carriage return)			
    //		xstr1 = xstr1.replace(/(./g,"ç1ç(.");	

    xstr1 = xstr1.replace(/\?\n/g, "\?").replace(/\?/g, "\?\n"); // punto interrogativo va a capo (ma non 2 volte)
    xstr1 = xstr1.replace(/\!\n/g, "\!").replace(/\!/g, "\!\n"); // punto esclamativo va a capo (ma non 2 volte)

    var riga = "",
        xj1 = 0,
        xj2 = 0;
    var v123 = [];

    for (i = 1; i < len1; i++) {
        xj2 = xstr1.indexOf(".", xj2); //  indexOf meglio di search che usa regexp,  ma il punto in regexp indica qualsiasi valore) 
        //textout += "\n j1=" + j1 + "   j2=" + j2 + " ";
        if (xj2 < 0) {
            break;
        }
        xpost1 = xstr1.substring(xj2 + 1, xj2 + 2);
        //textout += "  post1=" + post1 ; 
        if (xpost1 == " ") {
            v123 = spazio_dopo_punto(xstr1, xpost1, xj1, xj2);
            //[riga, xj1, xj2] =  //  destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
        } else {
            v123 = no_spazio_dopo_punto(xstr1, xpost1, xj1, xj2);
            //[riga, xj1, xj2] =  //  destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
        }
        riga = v123[0];
        xj1 = v123[1];
        xj2 = v123[2];

        addtxt(riga);
    }
    //-------------
    riga = xstr1.substring(xj1);

    addtxt(riga.trim());
    textout = textout.trim();
    var lenx1 = textout.length;

    //document.write("<br>" + "texout=>" + textout + "<==  -2 ==>" + textout.substring(lenx1-2) + "<=\n=>"  + textout.substring(0, lenx1-2)	+ "<===")

    if (textout.substring(lenx1 - 2) === "^^") return textout.substring(0, lenx1 - 2);
    //var anto2rig = textout.split("\n");  //alert(" numero righe finali(separaz barra n) = " + anto2rig.length) 
    return textout + free_zone;   

    //- - - - - - - - - - - - -
    function addtxt(riga0) {
        var rigax = (riga0 + "^^").split("\n");
        var riga2;
        //for (riga2 of rigax) { //  for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
        for (var k1 = 0; k1 < rigax.length; k1++) {
            riga2 = rigax[k1];
            if (riga2 === "^^") break;
            if (riga2 === "") {
                num_bianche += 1;
                if (num_bianche > 1) {
                    continue;
                }
            } else {
                num_bianche = 0;
            }
            if (riga2.substring(0, 2) == "(.") {
                riga2 = riga2.substring(8).trim();
            }
            num_br += 1;
            textout += "(." + num_br.toString().substring(1) + ")) " + riga2 + "\n";
        }
    }
    //- - - - fine addtxt - - - - - - - - -  
}
//----------------  fine elab_textarea -------------------------------

//-----------------------------------------
function no_spazio_dopo_punto(str1, post1, j10, j20) {
    var j1 = j10,
        j2 = j20;
    var riga0, pre2;

    // se quello che segue il punto è diverso da spazio allora non si tratta di fine frase (es. una data, un numero 12.05.2020,   123.50  
    if ((post1 == '"') || (post1 == "\n")) {
        // ma se il carattere seguente è un apice allora 
        // si tratta di punto  finale di una quotazione) in tal caso la frase termina dopo l'apice 	
        // anche il carattere fine riga \n  indica che bisogna andare a capo 
        j2 += 2;
        riga0 = str1.substring(j1, j2);
        j1 = j2;
        return [riga0.trim() + "\n", j1, j2];
    }
    //--------------------------------
    // potrebbe trattarsi di iniziale di nome 
    // se si tratta di iniziale il punto segue una sola lettera:  (spazio + lettera + punto) oppure (punto + lettera + punto) 
    pre2 = str1.substring(j2 - 2, j2 - 1);

    if ((pre2 == " ") || (pre2 == ".")) {
        // non va a capo perché iniziale di qualcosa  es. J.K. Kennedy    oppure aaaa W. Wagner		
        //   j1  (inizio riga) rimane identico a prima
        j2 += 1;
        return ["", j1, j2];
    }
    //--------------------
    // potrebbe trattarsi di un numero decimale 123.40 o una data 12.08.2020  oppure 4.12.20 
    // in tal caso il punto dovrebbe trovarsi fra due numeri   
    var righ1 = str1.substring(j2 + 1, j2 + 2);
    if ((righ1 <= '9') && (righ1 >= '0')) { // se subito dopo il punto c'è un numero, allora è un punto in numero decimale o una data   
        j2 += 1;
        return ["", j1, j2];
    }
    // forse una data del tipo  15. marzo 2020 
    if (forse_una_data(str1, j2)) {
        j2 += 1;
        return ["", j1, j2];
    }

    //-----------------------
    if ((pre2 == " ") || (pre2 == ".")) {
        // non va a capo perché iniziale di qualcosa  es. J.K. Kennedy    oppure aaaa W. Wagner		
        //   j1  (inizio riga) rimane identico a prima
        j2 += 1;
        return ["", j1, j2];
    }
    //---------------------------
    // il punto indica la fine frase	
    riga0 = str1.substring(j1, j2);
    j2 += 1;
    j1 = j2;
    return [riga0.trim() + "\n", j1, j2];
}
//-----------------------------------------

function spazio_dopo_punto(str1, post1, j10, j20) {

    // dopo il 	punto c'è uno spazio, allora il punto segna una fine frase oppure una iniziale  J.F. Kennedy
    // se si tratta di iniziale il punto segue una sola lettera:  (spazio + lettera + punto) oppure (punto + lettera + punto) 
    var j1 = j10,
        j2 = j20;

    var pre2 = str1.substring(j2 - 2, j2 - 1);
    var riga0;

    if ((pre2 == " ") || (pre2 == ".")) {
        // non va a capo perché iniziale di qualcosa  es. J.K. Kennedy    oppure aaaa W. Wagner		
        //   j1  (inizio riga) rimane identico a prima
        j2 += 1;
        return ["", j1, j2];
    }
    // forse una data del tipo  15. marzo 2020 
    if (forse_una_data(str1, j2)) {
        j2 += 1;
        return ["", j1, j2];
    }
    // è il punto di fine  frase 
    j2 += 1;
    riga0 = str1.substring(j1, j2);
    j1 = j2;
    return [riga0.trim() + "\n", j1, j2];
}
//---------------------------------------------------
function forse_una_data(str11, zj2) {
    var left1 = str11.substring(zj2 - 1, zj2);
    if ((left1 > '9') || (left1 < '0')) {
        return false;
    }
    // se immediatamente prima del punto c'è un numero, allora forse è una data es. 19.marzo2019 
    // se data prima del punto il numero massimo possibile è il 31 
    var ix = str11.lastIndexOf(" ", zj2);
    var numero = Number(str11.substring(ix + 1, zj2));
    if (numero <= 31) { // ok potrebbe essere una data   
        return true;
    }
    return false;
}
//=====================================================

//-------------------------------------------------------------------

function fn_date(titolo0) {
    var d = new Date();
    var mm = (101 + d.getMonth() + "").substring(1, 3);
    var gg = (100 + d.getDate() + "").substring(1, 3);
    var hh = (100 + d.getHours() + "").substring(1, 3);
    var min = (100 + d.getMinutes() + "").substring(1, 3);

    var oggi = d.getFullYear() + "_" + mm + "_" + gg + "_" + hh + min; // + secs ;

    if (titolo0 !== "") {
        var titolo = titolo0;
        titolo = titolo.replace(/[^a-z0-9À-žßüöäéèòàùì-\s]/gi, "_"); // per nome file soltanto caratteri alfanumerici
        oggi += "_" + titolo.trim();
    }
    return oggi;
}


//--------------------------
function preview_setting() {
	
	var ms_105 = myLanguage_msg[105] ; // "(1) pagina bilingue interlineare interattiva";
    var ms_106 = myLanguage_msg[106] ; // "(2) pagina bilingue interlineare stampabile";
    var ms_107 = myLanguage_msg[107] ; // "(3) file testo bilingue interlineare";
    var ms_108 = myLanguage_msg[108] ; // "(4) file csv lista parole usate nel testo";
	

    var titolo_testo = document.getElementById("id_titolo").value;
    var filename_data = fn_date(titolo_testo);
    // nomi dei file 
	var def_fontSize="_size1.0";  // the file name end is used to set the body fontsize   
    outfile_name[1] = "biling_interactive" + filename_data + def_fontSize + ".html";
    outfile_name[2] = "biling_printable"   + filename_data + def_fontSize + ".html";
    outfile_name[3] = "biling_2_righe"     + filename_data + ".txt";
    outfile_name[4] = "biling_parole"      + filename_data + ".txt";
    // descrizione dei file 
    outfile_descr[1] = ms_105 ; // "(1) pagina bilingue interlineare interattiva";
    outfile_descr[2] = ms_106 ; // "(2) pagina bilingue interlineare stampabile";
	outfile_descr[3] = ms_107 ; // "(3) file testo bilingue interlineare";
    outfile_descr[4] = ms_108 ; // "(4) file csv lista parole usate nel testo";
	
	// contenuto dei file 
    outfile_preview[1] = downlText2; // è un html  eventuale '\n' non deve essere tradotto in '<br>'
    outfile_preview[2] = html_bil_prt;
    outfile_preview[3] = testo_out_bilingue.replaceAll("\n", "<br>");
    outfile_preview[4] = tutte_le_parole.replaceAll("\n", "<br>");
    outfile_download[1] = downlText2; // è un html  eventuale '\n' non deve essere tradotto in '<br>'
    outfile_download[2] = html_bil_prt;
    outfile_download[3] = testo_out_bilingue;
    outfile_download[4] = tutte_le_parole;

    function set_id(num_out) {
        var a1 = document.getElementById("filename" + num_out);
		if (a1) a1.innerHTML = outfile_name[num_out];

        var a2 = document.getElementById("filedescr" + num_out)
		if (a2) a2.innerHTML = outfile_descr[num_out];		
    }
    for (i = 1; i <= 4; i++) {
        set_id(i);
    }
	
	//document.getElementById("mytest1").innerHTML = "<xmp>" + document.getElementById("menu_preview").innerHTML + "</xmp>"; 
}

//------------------------------------------------------------



function onclickview1(this1, num_out1) {
	var ms_086 = myLanguage_msg[86]; // "Preview / Anteprima; 
    if (this1.checked) {
        //document.getElementById("head_preview").innerHTML =  "PREVIEW" + "<br>" +  outfile_descr[num_out1]			
		/*
        document.getElementById("head_preview").innerHTML ="<b>" +  ms_086 + "</b>" + "<br>" + outfile_descr[num_out1] +
            "<br><br><i> " + "<span style=\"font-size:1.2em;\">Download " + "<input type=\"checkbox\" onclick=\"onclickdown1(this," + num_out1 + ")\"> " +
            " file &nbsp;&nbsp; '" + outfile_name[num_out1] + "'</span></i><br>";
		*/
		var BGcolorEvid   =  "lightgrey"  ; 
		var BGcolorNormal =  "mintcream" ;
		var FGcolorEvid   =  "blue"  ; 
		var FGcolorNormal =  "black" ;
		var tr1= this1.parentElement.parentElement;
		var ttab = tr1.parentElement;
		var child1 = ttab.children; 
		for(var i=0; i < child1.length; i++) {
			var child_tr = child1[i];
			child_tr.style.backgroundColor = BGcolorNormal		
			child_tr.style.color = FGcolorNormal			
		} 				
		tr1.style.backgroundColor = BGcolorEvid;	
		tr1.style.color = FGcolorEvid;	
        document.getElementById("my_preview").innerHTML = outfile_preview[num_out1];

        scrollView("menu_preview");

    }

}
//-----------------------------------
//------------------------------------------------------------
function onclickdown1(this1, num_out1) {
    if (this1.checked) {
        //document.write("<br>" + "esegui download di " + outfile_name[num_out1] );				
        download(outfile_name[num_out1], outfile_download[num_out1]);
    }
}
//-----------------------------------
function mostra_menu_anteprime() {
	var ms_086 = myLanguage_msg[86]; // "Preview / Anteprima; 
    // mostra subito la prima anteprima 
    preview_setting();
    var num_out1 = 1;
    //document.getElementById("head_preview").innerHTML =  "PREVIEW" + "<br>" +  outfile_descr[num_out1];			 		 
    //"<br>" +  outfile_descr[num_out1] +"<br>"

	/*
    document.getElementById("head_preview").innerHTML = "<b>" + ms_086.toUpperCase() + "</b>" + "<br>" + outfile_descr[num_out1] +
        "<br><i> " + "<span style=\"font-size:0.8em;\">Download " + "<input type=\"checkbox\" onclick=\"onclickdown1(this," + num_out1 + ")\"> " +
        " file &nbsp;&nbsp; '" + outfile_name[num_out1] + "'</span></i><br>";
	*/

    document.getElementById("my_preview").innerHTML = outfile_preview[num_out1];

    // rende visibile il menu delle anteprime	
    document.getElementById("radout" + num_out1).checked = true;

    document.getElementById("menu_preview").style.display = "block";
    //document.getElementById("id_gruppi").style.display = "none";
	//setBodyStyle( filehtml_lev1) ; 
	//tutti_inp_size();
	//document.getElementById( "id_col4").click();  // scegli il default  (4 ==> scritta nera su sfondo bianco
}
//--------------------------------------------
function get_nomi_file() {
    var prefx00, barra, p1; 	
	
	p1 = PATH_to_this_html.lastIndexOf("\\") ;
	if (p1 < 0) p1 = PATH_to_this_html.lastIndexOf("/");
	
	var html_lev1 = PATH_to_this_html.substring(p1+1);
	
	barra = PATH_to_this_html.substring(p1,p1+1); 
	if (barra == PATH_to_this_html.substring(0,1) ) {
		prefx00 =  PATH_to_this_html.substring(1) ;
	}  else {
		prefx00 =  PATH_to_this_html;
	}
	//return  prefx00.substring(0, prefx00.length - 5) + "_"; //  "A2_BilingBuilder_"; // prefisso file script e css	
	
	return  [prefx00.substring(0, prefx00.length - 5) + "_" , html_lev1 ] ; //  "A2_BilingBuilder_"; // prefisso file script e css	
 
	//alert( " questo file name lev1=" + filehtml_lev1 + "<==  prefisso_file_css_script ==>" +prefisso_file_css_script + "<==")
}
//----------------------------------------------------
function visibile_file34() {
    var path1;
    if (PATH_to_this_html.indexOf("\\") >= 0) path1 = PATH_to_this_html.split("\\");
    else path1 = PATH_to_this_html.split("/");
    var pathA = path1.slice(-1);
    var pathB = path1.slice(-2, -1).toString();
    if (pathB.substring(pathB.length - 2) == "34") { // se termina con 34 rende possibile anche la scelta dei file (3) e (4) 
        var a1 = document.getElementById("fileout3")
		if (a1) a1.style.display = "table-row";             // "block";
		var a2 = document.getElementById("fileout4")
		if (a2) a2.style.display = "table-row";             //"block";
		document.getElementById("id_menu2").style.height = "25%"; 
		document.getElementById("id_prev1").style.height = "75%";		
    }
}
//----------------------------------------
function setBodyStyle(  file_html_lev1 ) {
	
	var PATH_to_this_html = location.pathname.toString();
	
	var p1 = PATH_to_this_html.lastIndexOf("\\") ;
	if (p1 < 0) p1 = PATH_to_this_html.lastIndexOf("/");
	var lastfn = PATH_to_this_html.substring(p1+1); 
	
	var this_file_lev;
	if (lastfn == file_html_lev1) {
		this_file_lev = "1" ;
	} else {
		this_file_lev = "2" ;
	}
	
	   if (this_file_lev == "1") {
		   
		   //document.getElementById("swapcolor").style.display="none";  
		   return;
	   }	
		var element = document.getElementById("body2") ;
		element.className = "c_body2"; 
		
	   //element.classList.toggle("light-mode"); 
	} 

 

function neroSuBianco() {   
	var element = document.getElementById("body2");
	element.classList.toggle("light-mode"); 
} 

//--------------------------
function setFontSize1(num) {
	document.getElementById("body2").style.fontSize=num; 
} 
//---------------------
function crea_inp_size(ix, fsize ) {
	var ixS = (100+ix).toString().substring(1);  
	var riga1= '<input type=\"radio" name="fontSizRa"  id="id_siz' + ixS + '" style="opacity: 0;"  onclick=\'setFontSize1("' + fsize + '")\' /> \n' ; 
	var riga2= '   <label for="id_siz' + ixS + '" style="font-size:' + fsize + ';"  ><b>Aa</b></label> \n'; 	
	return riga1 + riga2 ;
}
function OLDtutti_inp_size() {
	var statem = "";
	
	var sizef2="" ;
	var ret1;
	var size00=0.75, size99=4.00;  
	for(var ix = 1; ix < 20; ix++) {
		sizef2 = size00.toString() + "em";
		ret1 =  crea_inp_size(ix, sizef2); 
		statem = statem +  ret1;
		size00 += 0.25 ;
		if (size00 > size99) break;
	}
	//alert(statem) ;
	document.getElementById("td_sizeFont").innerHTML = statem;  
}


//-----------------------------------------
//====================================================================
function prologo_lev2( titolo_testo, urlweb ,  html_fileName,  prefisso_file_css_script, numero_frasi, numeroParoleOrig) { 
	
	var colori_background = "#fefbd8 white black blue red yellow".split(" ");   // colori di sfondo 
	var colori_foreground  = "black blue red white".split(" ");                 // colori dei caratteri  
	var riga1, riga2, bgc, i; 
	var bgDark = "background-color: blue"; 
	var fgLight=" white yellow ";  
	function set_colore_background(num, colore) {
		riga1 = '<input type="radio" onclick=\'document.getElementById("body2").style.backgroundColor= "' + colore + '" \'  id="id_bcol' + num + '"  name="bg_color" style="opacity: 0;"/> \n' ;   
		riga2 = '                               <label class="c_buttColor1"     style=\'width:3em; background-color: ' + colore + '\' for="id_bcol' + num + '"   ><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></label> \n' ;    		
		return riga1 + riga2 ; 							 
	}
	
	function set_colore_foreground(num, colore) {		
		bgc = "" ;
		if ( fgLight.indexOf(colore) >= 0) bgc = bgDark;	
		riga1 = '<input type="radio" onclick=\'document.getElementById("body2").style.color= "' + colore +'" \'  id="id_fcol' + num + '" name="fg_color" style="opacity: 0;"/>   \n '; 
		riga2 = '				  <label   class="c_buttColor1"     style=\'width:3em; ' + bgc + '; color: ' + colore + '\' for="id_fcol' + num + '"   ><b>aA</b></label>  \n' ;  	
		return riga1 + riga2 ; 							 
	}


	var ms_31 = myLanguage_msg[109]; // "Pagina <b>bilingue</b> interlineare" ; 
	var ms_32 = myLanguage_msg[110]; // Interattiva";  
	var ms_33 = myLanguage_msg[111]; // "(.108 Il testo è diviso in coppie di righe, una in lingua originale e l\'altra in traduzione.";
	var ms_34 = myLanguage_msg[112]; // "(.108 Due pulsanti permettono di nascondere o far apparire una riga o entrambe."; 
	var ms_35 = myLanguage_msg[113]; //  Questo file può essere usato per esercitarsi" ;
	var ms_36 = myLanguage_msg[114]; //  nella comprensione di testi in un lingua straniera,";
    var ms_37 = myLanguage_msg[115]; // nella ripetizione di frasi a memoria." ; 
	var ms_38 = myLanguage_msg[116]; //  Un possibile utilizzo potrebbe essere: ";
    var ms_39 = myLanguage_msg[117]; //  Leggere una frase e tentare di indovinarne il significato." ;
    var ms_40 = myLanguage_msg[118]; //  Premere il pulsante rosso per vedere la traduzione." ; 
    var ms_41 = myLanguage_msg[119]; //  Il pulsante verde serve a nascondere la versione in lingua originale," ; 
    var ms_42 = myLanguage_msg[120]; //  può essere usato per esercizi di ripetizione con o ";
    var ms_43 = myLanguage_msg[121]; //  senza il suggerimento della frase tradotta. "; 
	var ms_44 = myLanguage_msg[122]; //  Modifica il colore dello sfondo, la grandezza e il colore dei caratteri" ;
	
	var ms_126= myLanguage_msg[126]; //   'id_pref00' Cliccare sui pulsanti qui sotto per modificare secondo le proprie preferenze"   
	var ms_127= myLanguage_msg[127]; //  id_pref_bgco' colore dello sfondo"     
	var ms_128= myLanguage_msg[128]; //    'id_pref_fgco' colore dei caratteri" 
	var ms_129= myLanguage_msg[129]; //  'id_pref_fgsize' grandezza   
	
	var ms_133 = myLanguage_msg[133]; // Versione Interattiva" 
	var ms_134 = myLanguage_msg[134]; // Mostra o nasconde la traduzione della frase
	var ms_135 = myLanguage_msg[135]; // Nasconde o mostra la frase in lingua originale
	
	var ms2_134 = ms_134.split("$$");
	var ms2_135 = ms_135.split("$$");
	
	var ms_46 = myLanguage_msg[46] ; //   testo bilingue ottenuto dal file ... 
	var style2_content	= document.getElementsByTagName("STYLE")[0].innerHTML; 
	var winHead= "";
    winHead += '<!DOCTYPE html> \n';
    winHead += '<html> \n';
    winHead += '<head> \n';
    winHead += '<meta charset="UTF-8"/> \n';
	winHead += '<meta name="viewport" content="width=device-width, initial-scale=1"> \n' ; 
    winHead += '<title>' + titolo_testo + '</title> \n';	
    //winHead += '<link rel="stylesheet" href="'   +   prefisso_file_css_script + 'style.css">  \n';
	winHead += '<style>' + style2_content + '\n</style> \n' ; 
    winHead += '</head> \n';
    winHead += '<body> \n';
	
	winHead += '<div id="id_inter_beg"> \n'; // -- inizio pezzo che scompare se premuto tasto colori --
	winHead += '<div  style="font-size:2em;">  \n'; 
	winHead += "<h1>" + titolo_testo + "</h1>\n";
	
	if (urlweb !== "") {
        winHead += "" + "<i>" + urlweb + "</i>";
	}	
	winHead += '</div> \n' ; 
	//var ms_130= myLanguage_msg[130]; //  130 parole  
	//var ms_131= myLanguage_msg[130]; //  131 diverse  
	var ms_132= myLanguage_msg[132]; //  132 frasi  
    winHead += "<span style=\"font-size:1.2em;\">";
    winHead += "		<br><br>" + ms_46 + "<i>" + html_fileName.toString().replaceAll("%20", " ") + " by Antonio Cigna 2021 "; 
    winHead += "		</i>" + "<br>&nbsp;&nbsp;&nbsp;&nbsp;" + new Date();
    winHead += "<br>" + numero_frasi + " " + ms_132 + ", " + numeroParoleOrig + "<br>\n";
    winHead += "</span> \n\n";   
    //---------------
	var ms_154 = myLanguage_msg[154] ; // Premi questo pulsante  
	var ms_155 = myLanguage_msg[155] ; // se vuoi modifiare i colori dello sfondo o dei caratteri
	winHead += '<br><hr> \n'
	winHead += '</div> \n';     // -- fine pezzo che scompare se premuto tasto colori --
	
	winHead += '<table style="font-size:1.5em;">	 \n';
	winHead += '<tr><td style="width:14%;">' + ms2_134[0] + '</td><td  style="width:1%;font-size:0.8em;"> ' +
				'<span   class="cerchio_button c_red">&nbsp;&nbsp;&nbsp;&nbsp;</span></td><td>' + ms2_134[1] + '</td></tr>	 \n' ;
	winHead += '<tr><td style="width:14%;">' + ms2_135[0] + '</td><td  style="width:1%;font-size:0.8em;">' +
				'<span   class="cerchio_button c_green">&nbsp;&nbsp;&nbsp;&nbsp;</span></td><td>' + ms2_135[1] + '</td></tr>	\n' ; 	
	winHead += '<tr><td style="width:14%;">' + ms_154 + '</td><td  style="width:1%;font-size:0.8em;"> \n';
	winHead += '	<button class="cerchio_button c_grey" onclick=\'fun_colori_lev2()\' >&nbsp;&nbsp;&nbsp;</button> \n' ;			
	winHead += '	</td><td>' + ms_155 + '</td></tr>  \n' ;
	winHead += '</table> \n' ;


winHead += '<b><div id="id_colori" class="cl_nascosto" style="border: 2px solid red;  border-collapse:collapse; font-size:1.5em;" > '; 
                      
winHead += '<span id="id_pref00" >' + ms_126  + '</span>\n  <br>\n';  
winHead += '<table style="vertical-align:top;"> \n'
winHead += '<tr> \n' 
winHead += '<td style="width:4em;"></td> \n' 
winHead += '  <td id="id_bg_color"><span id="id_pref_bgco" >' + ms_127 + '</span></b> \n <br><br>&nbsp;</td><td> \n';  
 
			for(i=0; i < colori_background.length; i++) {	
				winHead += set_colore_background(i, colori_background[i] );  
			}
			
winHead += '			</td>  \n' ; 
winHead += '						</tr>    \n' ; 

winHead += '							<tr>    \n' ; 

winHead += '<td style="width:4em;"></td> \n' 
winHead += '	<td id="id_fg_color">  \n' ; 	
winHead += '		 <b><span id="id_pref_fgco" >' + ms_128 + '</span></b> <br><br>&nbsp; </td><td> 	 \n' ; 	

			for(i=0; i < colori_foreground.length; i++) {	
				winHead += set_colore_foreground(i, colori_foreground[i] );  
			}
	
winHead += '			</td>  \n' ; 
winHead += '						</tr>    \n' ; 

winHead += '						</table>\n   '	;		
winHead += '		</div>   </b>\n '	;	

	
	
    return winHead;
}

//==================================================================================================
function inizio() {
    //alert"<br><b>INIZIO</b><br>")
}


//========= fine .... script ===================