"use strict";
function get_dati_prova() {


var file_3_4 = true;     // display file 3 e 4  che in genere non servono 


var txt_originale = `
CDU stürzt bei Landtagswahlen im Südwesten ab

Bei den Landtagswahlen in Baden-Württemberg und Rheinland-Pfalz hat die Partei von Bundeskanzlerin Angela Merkel deutlich Federn lassen müssen. Die CDU verbuchte ihr jeweils schlechtestes Ergebnis bislang. Dazu beigetragen hat auch die sogenannte Maskenaffäre: Unionspolitiker hatten für die Vermittlung von Schutzmasken-Lieferungen hohe Provisionen kassiert. Triumphieren konnten bei den Wahlen die jeweiligen Regierungsparteien: In Baden-Württemberg trugen die Grünen von Ministerpräsident Winfried Kretschmann den Wahlsieg davon, in Rheinland-Pfalz die SPD von Regierungschefin Malu Dreyer.

 

Keine Trendwende im globalen Waffenhandel

Nach Jahren des starken Wachstums haben sich die weltweiten Rüstungsexporte auf einem nahezu unverändert hohen Niveau eingependelt. Wie das Stockholmer Friedensforschungsinstitut SIPRI in seinem neuen Bericht feststellt, liegt das Volumen der Waffenlieferungen großer Rüstungsgüter wie Panzer und U-Boote weiterhin nah an dem Rekord nach Ende des Kalten Kriegs. Der weltgrößte Waffenhändler sind nach wie vor die USA, aber auch Deutschland und Frankreich haben ihre Rüstungsausfuhren gesteigert. Russland und China mussten leichte Einbußen hinnehmen. 

 

Militär in Myanmar verhängt Kriegsrecht in zwei Stadtbezirken

Die Junta in Myanmar hat nach neuen Protesten das Kriegsrecht in zwei Stadtteilen von Yangon verhängt. Der Kommandeur in der Region, die früher Rangun hieß, erhalte entsprechende Vollmachten, um "effizienter die Sicherheit aufrechtzuerhalten sowie Rechtsstaatlichkeit und Ruhe zu gewährleisten", sagte ein Nachrichtensprecher im Staatsfernsehen. Das Kriegsrecht ist eine neue Stufe im Vorgehen der Armee gegen die anhaltenden pro-demokratischen Massenproteste. Am Wochenende sind laut der Nachrichtenagentur Reuters mindestens 29 Menschen durch die Gewalt der Sicherheitskräfte getötet worden.

 

US-Demokraten: Nancy Pelosi rückt von Andrew Cuomo ab

Die Vorsitzende des US-Repräsentantenhauses, Nancy Pelosi, erhöht den Druck auf New Yorks Gouverneur Andrew Cuomo. Gegen den Politiker der US-Demokraten haben sechs Frauen Belästigungsvorwürfe erhoben. Cuomo müsse in sich gehen und schauen, ob er noch effektiv regieren könne, sagte Pelosi im TV-Sender ABC. Die Anschuldigungen der Frauen gegen Cuomo müssten ernstgenommen werden. Pelosi zählt zu den mächtigsten Politikern der Demokratischen Partei. US-Präsident Joe Biden verwies im Weißen Haus auf laufende Ermittlungen gegen den New Yorker Gouverneur. Danach werde man weitersehen, sagte er.

 

Niederländische Polizei löst kurz vor Wahlen Kundgebung auf

Am Vorabend der Parlamentswahl in den Niederlanden hat die Polizei eine große Kundgebung am Regierungssitz in Den Haag aufgelöst. Die Einsatzkräfte gingen mit Wasserwerfern und Schlagstöcken gegen Demonstrierende vor. Auf Videos in sozialen Netzwerken waren zudem Polizeihunde und -Pferde zu sehen. Der Zugverkehr in die drittgrößte Stadt der Niederlande wurde zeitweise ausgesetzt, um weiteren Zulauf einzudämmen. Medienberichten zufolge waren Tausende Menschen gekommen, teilweise mit Transparenten gegen die zurückgetretene Regierung von Premier Mark Rutte, aber auch gegen ihre Corona-Politik.

 

US-Sängerin Beyoncé knackt Grammy-Rekord

In Los Angeles sind die begehrtesten Musikpreise der Welt, die Grammys, verliehen worden. Die US-Sängerinnen Beyoncé und Taylor Swift schrieben bei der 63. Verleihung Musikgeschichte. Beyoncé sicherte sich mit ihrem Hit "Black Parade" den Preis für den besten R&B-Song - es ist ihr 28. Grammy. Das macht sie zur meistdekorierten Künstlerin in der Geschichte des renommierten Wettbewerbs. Ihre US-Kollegin Swift gewann mit ihrem in der Corona-Quarantäne entstandenen Album "Folklore" den Grammy für das Album des Jahres. Sie ist die einzige Sängerin, die diese begehrte Trophäe drei Mal gewonnen hat.

                `   // fine txt originale 
var txt_italiano = `
La CDU si blocca alle elezioni statali nel sud-ovest

Nelle elezioni statali nel Baden-Württemberg e nella Renania-Palatinato, il partito della cancelliera Angela Merkel ha chiaramente dovuto arrendersi. La CDU ha registrato il peggior risultato finora. Anche il cosiddetto affare delle maschere ha contribuito a questo: i politici dell'Unione avevano raccolto commissioni elevate per la mediazione delle consegne di maschere protettive. I rispettivi partiti di governo hanno potuto trionfare alle elezioni: nel Baden-Württemberg, i Verdi del primo ministro Winfried Kretschmann hanno vinto le elezioni, in Renania-Palatinato l'SPD del primo ministro Malu Dreyer.

 

Nessuna inversione di tendenza nel commercio mondiale di armi

Dopo anni di forte crescita, le esportazioni globali di armi si sono stabilizzate a un livello elevato quasi invariato. Come afferma l'istituto di ricerca sulla pace di Stoccolma SIPRI nel suo nuovo rapporto, il volume delle consegne di armi di grandi armamenti come carri armati e sottomarini è ancora vicino al record dopo la fine della Guerra Fredda. Il più grande commerciante di armi del mondo sono ancora gli Stati Uniti, ma anche Germania e Francia hanno aumentato le loro esportazioni di armi. Russia e Cina hanno subito lievi perdite. 

 

L'esercito del Myanmar impone la legge marziale in due distretti

La giunta birmana ha dichiarato la legge marziale in due distretti di Yangon dopo nuove proteste. Il comandante della regione, che in precedenza si chiamava Rangoon, avrà i poteri appropriati per "mantenere la sicurezza in modo più efficiente e garantire lo stato di diritto e la pace", ha detto un conduttore di notizie alla televisione di stato. La legge marziale è un nuovo passo nella repressione dell'esercito contro le proteste di massa a favore della democrazia. Secondo l'agenzia di stampa Reuters, almeno 29 persone sono state uccise dalla violenza delle forze di sicurezza nel fine settimana.

 

Democratici statunitensi: Nancy Pelosi si allontana da Andrew Cuomo

La presidente della Camera dei rappresentanti degli Stati Uniti, Nancy Pelosi, sta aumentando la pressione sul governatore di New York Andrew Cuomo. Sei donne hanno mosso accuse di molestie contro il politico democratico statunitense. Cuomo deve entrare in se stesso e vedere se può ancora governare in modo efficace, ha detto Pelosi alla stazione televisiva ABC. Le accuse delle donne contro Cuomo dovrebbero essere prese sul serio. Pelosi è uno dei politici più potenti del Partito Democratico. Il presidente degli Stati Uniti Joe Biden ha fatto riferimento a un'indagine in corso contro il governatore di New York alla Casa Bianca. Allora vedremo, ha detto.

 

La polizia olandese scioglie la manifestazione poco prima delle elezioni

Alla vigilia delle elezioni parlamentari nei Paesi Bassi, la polizia ha interrotto una grande manifestazione presso la sede del governo dell'Aia. I servizi di emergenza hanno utilizzato cannoni ad acqua e manganelli contro i manifestanti. Cani e cavalli poliziotto sono stati visti anche nei video sui social network. Il traffico ferroviario verso la terza città più grande dei Paesi Bassi è stato temporaneamente sospeso per frenare un ulteriore afflusso. Secondo i media, migliaia di persone erano arrivate, alcune con striscioni contro il governo dimissionario del premier Mark Rutte, ma anche contro la sua politica Corona.

 

La cantante statunitense Beyoncé batte il record di Grammy

I premi musicali più ambiti al mondo, i Grammy, sono stati presentati a Los Angeles. I cantanti statunitensi Beyoncé e Taylor Swift hanno fatto la storia della musica alla 63a cerimonia di premiazione. Beyoncé si è assicurata il premio per la migliore canzone R&B con la sua hit "Black Parade" - è il suo 28 ° Grammy. Questo la rende l'artista più decorata nella storia del prestigioso concorso. La sua collega americana Swift ha vinto il Grammy per l'album dell'anno con il suo album "Folklore", realizzato nella quarantena della corona. È l'unica cantante ad aver vinto tre volte questo ambito trofeo.


		`  ; // fine  


var titolo= "Nachrichten von Montag, 15.03.2021"; 
var url1 = "https://www.dw.com/de/15032021-langsam-gesprochene-nachrichten/a-56874723" ; 

return [ titolo.trim(), url1.trim(), txt_originale.trim(), txt_italiano.trim() ]  ;
//  <script src="input_prova.js"></script>




} // fine 


function onclick_0forza_input_prova(id_titolo, id_urlpagina, id_txt_pagOrigP, id_txt_pagTradP) {
	var titolo, url, originale1, italiano;
	[titolo, url, originale1, italiano ] = get_dati_prova(); 

	sw_primo_input = true;	// coe se si ripartisse da capo	

// forza dat input per prove
[titolo, url, originale1, italiano ] = get_dati_prova(); 
document.getElementById( id_titolo      ).value = titolo ;
document.getElementById( id_urlpagina   ).value = url; 
document.getElementById( id_txt_pagOrigP).value = originale1; 
document.getElementById( id_txt_pagTradP).value = italiano; 

	
}

//fine forza dati input 


