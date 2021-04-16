//====================================

		// tutti i messaggi si trovano nel file script ... txtmsg.js 
		//           dove l'ultima riga simile a ==> 
		//                         ==> var list_msg00 = [ ["it", "Italiano", stringa di tutti i msg in italiano (righe separatate da "|") ],  
		//                                                ["en", "English",  mstringa di tutti i msg in inglese]]; 
		//
		//           scelta della lingua: automaticamente cerca la lingua del sistema, se è italiano usa "it", se la lingua xx non si trova nella lista list_msg00 viene sostituita da "en"     
		//-----------------------------------------
		
		function build_language_list() {		
			
			//  la lingua è espressa in 2 caratteri (es. it,  en )  
			var num_lang = list_msg00.length;
			var lang_xx = "";
			var list_msg_xx = [];
			var elem_xx;
			
			
			//------------------------------------
			// <div id="id_ch_lang"  style="display:none">
			var ixlang, n1, i;
			var linguaxx , nomelingua; 
			var lista_lang = [];
			//var righe_lang='<div id="id_onlylang"  >';
			var righe_lang=""
			
			righe_lang += '<div style="width: 100%; display: flex; align-items: center;">' ; 	
			righe_lang += '<div style="margin:auto; width: 100%; text-align:center; ">' ; 	
			
			var riga1, riga2; 
			for (n1 = 0; n1 < num_lang; n1++) {
				
				linguaxx = list_msg00[n1][0];
				
				nomelingua = list_msg00[n1][1];		
				var ik=nomelingua.indexOf("<br>")
				if (ik > 0) {
					my_discolpa= nomelingua.substring(ik+4)
					nomelingua = nomelingua.substring(0,ik) 
				}				
				
				riga1='<input type="radio"  id="r_lingua_' + linguaxx + '" name="radio_lingua"  '+ 
					' style="opacity: 0;"  ' + 
					' onclick=\'msgSetting( getAllMsgInLang_xx("' + linguaxx + '") );\' />'; 
					
				//riga2='<label for="r_lingua_' + linguaxx + '" class="c_button2"  title="' + my_discolpa + '" >' + nomelingua + '</label>'; 
				riga2='<label for="r_lingua_' + linguaxx + '" class="c_buttonL"  title="' + my_discolpa + '" >' + nomelingua + '</label>'; 
   						
				righe_lang += '<span  >' + riga1 + riga2 + '</span>' ;  
				
			}
			//righe_lang += '<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>'; 
			righe_lang += '</div>'
			
			var html_elemLingua = document.getElementById("id_ch_lang")
			html_elemLingua.innerHTML = righe_lang;   
			
			
			//html_elemLingua.innerHTML = "<xmp>" + righe_lang + "</xmp>";   //prova
				
			
			//alert("width div all lang=" + document.getElementById("id_onlylang").getBoundingClientRect().width) 
			
			
		} // fine fun  build_language_list() {
		
		//----------------------------------------
		
		//-----------------------------------------
		function getAllMsgInLang_xx(this_lang) {
			
			myLang = this_lang;  // forza la lingua xx nella variabile global (  il parametro this_lang potrebbe non essere quello originale, ma quello scelta dal pulsante apposito)
			
			//  la lingua è espressa in 2 caratteri (es. it,  en )  
			var num_lang = list_msg00.length;
			var lang_xx = "";
			var list_msg_xx = [];
			var elem_xx;
			//------------------------------------
			// trovo indice di questa lingua 
			
			var ixlang =-1,  n1=0; i=0;
			
			for (n1 = 0; n1 < num_lang; n1++) {
				lang_xx = list_msg00[n1][0];
				if (lang_xx == this_lang) {
					ixlang = n1;
				}
			}
			if (ixlang < 0) { // se manca si usa il default: en (inglese)
				this_lang = "en";
				for (n1 = 0; n1 < num_lang; n1++) {
					lang_xx = list_msg00[n1][0];
					if (lang_xx == this_lang) {
						ixlang = n1;
					}
				}
			}
			if (ixlang < 0) { //se neanche en (!? ) allora uso il primo  
				ixlang = 0;
				this_lang = list_msg00[0][0];
			}
					
			//-----------------------------------
			var only_lang_xx_msg = [];
			var only_lang_xx_msgid = [];
			var msgid, msgtxt, ixele, max_ixele=-1;


			n1 = ixlang;
			lang_xx = list_msg00[n1][0];
			
			// come separatore di riga è usata la coppia '((' che però deve rimanere e quindi la faccio precedere dal caratter | che uso nello split
			

			// es. (.122)) riga122 (.123)) riga123
			// es. caso particolare: "((122)) la riga 122 che finisce con (" + "((123))  riga123" 
			// es. caso particolare: "((122)) riga 122" + "((123)) ) riga123" che inizia con chiusa parentesi"  
			// ho sostituito come mark di inizio riga (( con (. 
			string_xx = list_msg00[n1][2]
			string_xx = string_xx.replaceAll("( (","((").replaceAll("( (","((");  // elimina spazi fra aperte parentesi ( due volte per eventuali triple parentesiù
			string_xx = string_xx.replaceAll("( .","(.").replaceAll("(. ","(.");
			string_xx = string_xx.replaceAll(") )","))").replaceAll(") )","))");  // elimina spazi fra aperte parentesi ( due volte per eventuali triple parentesi
			string_xx = string_xx.replaceAll("(((","( ((");   // se 3 parentesi la prima appartiene alla riga precedente, le altre 2 aprono una nuova riga
			string_xx = string_xx.replaceAll("((.","( (.");   // se 3 parentesi la prima appartiene alla riga precedente, le altre 2 aprono una nuova riga
			string_xx = string_xx.replaceAll(")))",")) )");   // se 3 parentesi la prime 2 chiudono il numero riga, la terza è parte della riga
			
			
			
			string_xx = string_xx.replaceAll("(.","|(.").trim().substring(1);  // davanti ad ogni doppia parentesi metto un barra verticale (serve per lo split)
			
			list_msg_xx = string_xx.split("|");
			
			num_elem_xx = list_msg_xx.length;
			//alert("num_elem_xx =" + num_elem_xx ); 
			
			only_lang_xx_msg   = ( " ".repeat( num_elem_xx) ).split(" ");  
			only_lang_xx_msgid = ( " ".repeat( num_elem_xx) ).split(" ");  
			//----------------------------------------
			// carica i messaggi nella lista only_lang_xx_lang
						
			for (var i2=0; i2< num_elem_xx; i2++) {
				elem_xx = list_msg_xx[i2].replaceAll("( .", "(.").replaceAll(") )", "))").trim();
				msgid  = elem_xx.substring(2, 5);
				msgtxt = elem_xx.substring(7).trim();
				
				if (isNaN( msgid )) msgid=0;
				ixele = msgid*1;  
				only_lang_xx_msg[ixele] = msgtxt;
				only_lang_xx_msgid[ixele] = msgid;
				if (ixele > max_ixele) max_ixele = ixele; 				
			}
			
			for(i = num_elem_xx; i < max_ixele; i++) {
				if (only_lang_xx_msg[i] == undefined) 
					only_lang_xx_msg[i] = "";
					only_lang_xx_msgid[i]=""; 
			} 		
			
			return only_lang_xx_msg;
			
		}  //   fine func.  getAllMsgInLang_xx
		//-------------------------

		function test( lang2) {
			var mia_lista = getAllMsgInLang_xx( lang2 );
			var	txtmsg2 = "";
			for (i = 0; i < mia_lista.length; i++) {
				txtmsg2 += i.toString()+ ": " +  mia_lista[i] + "<br>";
			}		
			document.getElementById("mytest1").innerHTML = txtmsg2;
	   }
	   //----------------------------------
	   
	//test("it");		
//--------------------------		
function placeholder_msg() {
	/*
	  <input id="id_titolo" type="text"  style="text-align:center; font-size:1.5em; font-weight: bold; width: 70%;"
                                    placeholder="incolla qui il titolo (facoltativo)">      <!-- id_m150     -->
                                <BR>  			   
	*/
	document.getElementById("id_titolo"       ).placeholder= myLanguage_msg[150].replace("&apos;","'") ;
	document.getElementById("id_urlpagina"    ).placeholder= myLanguage_msg[151].replace("&apos;","'");
	document.getElementById("id1_txt_pagOrigP").placeholder= myLanguage_msg[152].replace("&apos;","'");
	document.getElementById("id1_txt_pagTradP").placeholder= myLanguage_msg[153].replace("&apos;","'");
}
//===========================================
function msgSetting( lmsg ) {
	
	myLanguage_msg = lmsg; 
	document.getElementById("id_m001").href = lmsg[1];   
	document.getElementById("id_m002").innerHTML = lmsg[2];
	
	/*
	//document.getElementById("id_m001").innerHTML = lmsg[1];
	//document.getElementById("id_m002").innerHTML = lmsg[2];
	document.getElementById("id_m003").innerHTML = lmsg[3];
	document.getElementById("id_m004").innerHTML = lmsg[4];
	document.getElementById("id_m005").innerHTML = lmsg[5];
	document.getElementById("id_m006").innerHTML = lmsg[6];
	document.getElementById("id_m007").innerHTML = lmsg[7];
	document.getElementById("id_m008").innerHTML = lmsg[8];
	*/
	/*
	document.getElementById("id_m009").innerHTML = lmsg[9];
	document.getElementById("id_m010").innerHTML = lmsg[10];
	document.getElementById("id_m011").innerHTML = lmsg[11];
	document.getElementById("id_m012").innerHTML = lmsg[12];
	document.getElementById("id_m013").innerHTML = lmsg[13];
	*/
	/*
	document.getElementById("id_m014").innerHTML = lmsg[14];
	document.getElementById("id_m015").innerHTML = lmsg[15];
	document.getElementById("id_m016").innerHTML = lmsg[16];
	document.getElementById("id_m017").innerHTML = lmsg[17];
	document.getElementById("id_m018").innerHTML = lmsg[18];
	*/
	//document.getElementById("id_m019").innerHTML = lmsg[19];
	/*
	document.getElementById("id_m020").innerHTML = lmsg[20];
	document.getElementById("id_m021").innerHTML = lmsg[21];
	document.getElementById("id_m022").innerHTML = lmsg[22];
	*/
	document.getElementById("id_m023").innerHTML = lmsg[23];
	document.getElementById("id_m024").innerHTML = lmsg[24];
	//document.getElementById("id_m025").innerHTML = lmsg[25];
	document.getElementById("id_m026").innerHTML = lmsg[26];
	document.getElementById("id_m027").innerHTML = lmsg[27];
	document.getElementById("id_m028").innerHTML = lmsg[28];
	//document.getElementById("id_m029").innerHTML = lmsg[29];
	document.getElementById("id_m030").innerHTML = lmsg[30];
	document.getElementById("id_m031").innerHTML = lmsg[31];
	/*
	document.getElementById("id_butt1").setAttribute("title", "<span id='id_m032'>Separa i due testi in righe una per frase, </span>" +
	                  "<span id='id_m033'>numera le righe,</span>" +
	                  "<span id='id_m034'>verifica le coppie di righe (originale e traduzione),</span>" +
	                  "<span id='id_m035'>costruisce i file di output</span>	"); 
	*/
	//document.getElementById("id_butt1").setAttribute("title", "METTI QUI IL contenuto id_m032 - id_m035)"); 
	document.getElementById("id_butt1_1").setAttribute("title",  lmsg[32]  );   
	document.getElementById("id_butt1_2").setAttribute("title",  lmsg[32]  );   
	
	/*
	m32-35  title in button  da sistemare 
	document.getElementById("id_m032").innerHTML = lmsg[32];
	document.getElementById("id_m033").innerHTML = lmsg[33];
	document.getElementById("id_m034").innerHTML = lmsg[34];
	document.getElementById("id_m035").innerHTML = lmsg[35];
	*/
	document.getElementById("id_m036_1").innerHTML = lmsg[36];
	document.getElementById("id_m036_2").innerHTML = lmsg[36];
	//document.getElementById("id_butt_3").setAttribute("title",  lmsg[37] );   
	document.getElementById("id_m035").innerHTML = lmsg[35];
	/*	
	document.getElementById("id_m038").innerHTML = lmsg[38];
	//document.getElementById("id_m039").innerHTML = lmsg[39];
	//document.getElementById("id_m040").innerHTML = lmsg[40];
	document.getElementById("id_m041").innerHTML = lmsg[41];
	document.getElementById("id_m042").innerHTML = lmsg[42];
	document.getElementById("id_m043").innerHTML = lmsg[43];
	document.getElementById("id_m044").innerHTML = lmsg[44];
	document.getElementById("id_m045").innerHTML = lmsg[45];
	document.getElementById("id_m046").innerHTML = lmsg[46];
	document.getElementById("id_m047").innerHTML = lmsg[47];
	document.getElementById("id_m048").innerHTML = lmsg[48];
	document.getElementById("id_m049").innerHTML = lmsg[49];
	document.getElementById("id_m050").innerHTML = lmsg[50];
	document.getElementById("id_m051").innerHTML = lmsg[51];
	document.getElementById("id_m052").innerHTML = lmsg[52];
	document.getElementById("id_m053").innerHTML = lmsg[53];
	document.getElementById("id_m054").innerHTML = lmsg[54];
	document.getElementById("id_m055").innerHTML = lmsg[55];
	document.getElementById("id_m056").innerHTML = lmsg[56];
	document.getElementById("id_m057").innerHTML = lmsg[57];
	document.getElementById("id_m058").innerHTML = lmsg[58];
	document.getElementById("id_m059").innerHTML = lmsg[59];
	document.getElementById("id_m060").innerHTML = lmsg[60];
	document.getElementById("id_m061").innerHTML = lmsg[61];
	document.getElementById("id_m062").innerHTML = lmsg[62];
	document.getElementById("id_m063").innerHTML = lmsg[63];
	document.getElementById("id_m064").innerHTML = lmsg[64];
	document.getElementById("id_m065").innerHTML = lmsg[65];
	document.getElementById("id_m066").innerHTML = lmsg[66];
	document.getElementById("id_m067").innerHTML = lmsg[67];
	document.getElementById("id_m068").innerHTML = lmsg[68];
	document.getElementById("id_m069").innerHTML = lmsg[69];
	document.getElementById("id_m070").innerHTML = lmsg[70];
	document.getElementById("id_m071").innerHTML = lmsg[71];
	document.getElementById("id_m072").innerHTML = lmsg[72];
	document.getElementById("id_m073").innerHTML = lmsg[73];
	document.getElementById("id_m074").innerHTML = lmsg[74];
	document.getElementById("id_m075").innerHTML = lmsg[75];
	document.getElementById("id_m076").innerHTML = lmsg[76];
	document.getElementById("id_m077").innerHTML = lmsg[77];
	document.getElementById("id_m078").innerHTML = lmsg[78];
	document.getElementById("id_m079").innerHTML = lmsg[79];
	document.getElementById("id_m080").innerHTML = lmsg[80];
	document.getElementById("id_m081").innerHTML = lmsg[81];
	document.getElementById("id_m082").innerHTML = lmsg[82];
	document.getElementById("id_m083").innerHTML = lmsg[83];	
  */
	document.getElementById("id_m084").innerHTML = lmsg[84];
	document.getElementById("id_m085").innerHTML = lmsg[85];
	document.getElementById("id_m086").innerHTML = lmsg[86];
	document.getElementById("id_m087").innerHTML = lmsg[87];
	document.getElementById("id_m088").innerHTML = lmsg[88];
	
	//document.getElementById("id_m090").innerHTML = lmsg[90];
	//document.getElementById("id_m091").innerHTML = lmsg[91];
	document.getElementById("id_m092").innerHTML = lmsg[92];
	//document.getElementById("id_m093").innerHTML = lmsg[93];
	document.getElementById("id_m136").innerHTML = lmsg[136];
	document.getElementById("id_m137").innerHTML = lmsg[137];
	document.getElementById("id_m138").innerHTML = lmsg[138];
	document.getElementById("id_m139").innerHTML = lmsg[139];
	document.getElementById("id_m140").innerHTML = lmsg[140];
	document.getElementById("id_m141").innerHTML = lmsg[141];
	document.getElementById("id_m142").innerHTML = lmsg[142];
	document.getElementById("id_m143").innerHTML = lmsg[143];
	document.getElementById("id_m144").innerHTML = lmsg[144];
	document.getElementById("id_m145").innerHTML = lmsg[145];
	document.getElementById("id_m146").innerHTML = lmsg[146];
	document.getElementById("id_m147").innerHTML = lmsg[147];
	document.getElementById("id_m148").innerHTML = lmsg[148];
	document.getElementById("id_m149").innerHTML = lmsg[149];
	placeholder_msg(); 

}
//===============================================
