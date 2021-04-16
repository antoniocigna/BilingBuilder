
//-----------------------------------------------------------
// Italiano
var msg_it = "(.000)) " + 
    "(.001)) BilingBuilder_Tutorial_it/BilingBuilder_Tutorial_it.html" +
    "(.002)) GUIDA" +
    "(.003)) Esempio di Pagina Interattiva (Tedesco/Italiano)" +
    "(.004)) Esempio di Pagina Stampabile (Tedesco/Italiano)</a>" +
    "(.005)) Esempio di Pagina Interattiva (Latino/Italiano)" +
    "(.006)) Esempio di Pagina Stampabile (Latino/Italiano)" +
    "(.007)) Esempio di Pagina Interattiva per una poesia in italiano" +
    "(.008)) Esempio di Pagina Stampabile per una poesia in italiano</a>" +
    "(.009)) Incolla il testo in lingua <b>originale</b> qui sotto a sinistra e la <b>traduzione</b> a destra" +
    "(.010)) Incolla anche il <b>titolo</b> ed eventuale <b>indirizzo web</b> (non sono obbligatori, ma consigliati)<br>" +
    "(.011)) Premi il pulsante <b>ESEGUI</B>" +
    "(.012)) Controlla le eventuali segnalazioni, non &egrave; detto che siano davvero errori, correggi se necessario <br>" +
    "(.013)) Visualizza le <b>anteprime</b> prodotte ed eventualmente esegui il <b>download</b> dei relativi file" +
    "(.014)) <br>I problemi sono probabilmente dovuti ad una errata suddivisione automatica delle righe del testo. <br>Quando si preme per la prima volta il tasto ESEGUI, il testo viene diviso in frasi ed ogni frase viene riscritta in una sola riga che inizia con un numero progressivo di 3 cifre preceduto da una parentesi aperta e un punto e seguito da due parentesi chiuse. <br>Per esempio<br>&nbsp;&nbsp; &lpar;.023&rpar;&rpar; questa è una riga. <br>Nelle esecuzioni successive alla prima, la coppia parentesi aperta - punto è considerata l&apos;inizio di una nuova riga a cui viene assegnato un nuovo progressivo. <br>Per esempio la riga &lpar;.024&rpar;&rpar; frase uno &lpar;.frase due <br>diventa <br>&nbsp;&nbsp;&nbsp;&lpar;.024&rpar;&rpar; frase uno <br>&nbsp;&nbsp;&nbsp;&lpar;.025&rpar;&rpar; frase due <br>" +
    "(.015)) Le righe possono essere spezzate o unite insieme." +
    "(.016)) Una riga pu&ograve; essere spezzata inserendo una parentesi aperta seguita da un punto<B> &lpar;.</B>" +
    "(.017)) Due righe consecutive possono essere unite eliminando parentesi aperta, punto, numero e parentesi chiuse che precedono la seconda riga." +
    "(.018)) <br>Per esempio per far diventare una sola le due righe:<br>&nbsp;&nbsp;&nbsp;&lpar;.024&rpar;&rpar; frase uno <br>&nbsp;&nbsp;&nbsp;&lpar;.025&rpar;&rpar; frase due <br> è sufficiente eliminare &lpar;.025&rpar;&rpar; della seconda riga." +
    "(.019)) indirizzo della pagina o url(facoltativo)" +
    "(.020)) Se in una coppia è segnalato un errore (per esempio lunghezza delle due righe molto diverso), <br> probabilmente una frase è stata spezzata erroneamente (es. un punto considerato di fine frase mentre in realtà serviva ad altro), per correggere occorre riunire due righe successive eliminando parentesi aperta, punto, numero e parentesi chiuse che precedono la seconda riga. <br>oppure due frasi consecutive sono state considerate una sola, in tal caso bisogna separarle inserendo la coppia parentesi punto (non occorre aggiungere un numero) <br><br> Premere il pulsante <b>ESEGUI</b> per confermare le modifiche" +
    "(.021)) <br>e rinumerare automaticamente le righe." +
    "(.022)) <br>Premere il pulsante <b>Ripristina Testi</b> per eliminare tutte le modifiche e ripartire con i testi iniziali." +
    "(.023)) nato a Canicatt&igrave;(Agrigento) in Sicilia, <br>vivo a Linarolo (Pavia) in Lombardia, <br>sposato, con una figlia, <br>ho lavorato per 3 decenni in informatica soprattutto sui mainframe, <br>ora sono felicemente pensionato." +
    "(.024)) Per Creare un testo bilingue interlineare interattivo e stampabile in qualsiasi lingua" +
    "(.025)) titolo (facoltativo)" +
    "(.026)) Testo in lingua originale" +
    "(.027)) Testo Tradotto" +
    "(.028)) Il testo deve essere tradotto" +
    "(.029)) Il testo tradotto deve essere accoppiato all&#180;originale" +
    "(.030)) frase per frase" +
    "(.031)) riga per riga" +
    "(.032)) Separa i due testi in righe una per frase,\nnumera le righe,\nverifica le coppie di righe (originale e traduzione), costruisce i file di output" +
    "(.033))" +
    "(.034))" +
    "(.035)) Ripristina Testi" +
    "(.036)) Esegui" +
    "(.037)) annulla le eventuali modifiche eeguite e ricarica i testi originali" +
    "(.038)) annulla le eventuali modifiche eeguite e ricarica i testi originali" +
    "(.084)) File Prodotti" +
    "(.085)) Descrizione" +
    "(.086)) Anteprima" +
    "(.087)) Download" +
    "(.088)) Nome File" +
    "(.089))" +
    "(.090)) Esempi di output" +
    "(.091)) Lingua dei messaggi" +
    "(.092)) DEMO" +
    "(.093)) Cosa fare" +
    "(.094)) Errori di sincronizzazione" +
    "(.095)) <br>ATTENZIONE<br><small>forse ci sono errori di allineamento</small>" +
    "(.096)) Suggerimenti" +
    "(.097)) coppia righe" +
    "(.098)) lunghezze delle righe molto diverse tra loro" +
    "(.099)) origine" +
    "(.100)) traduzione" +
    "(.101)) esiste soltanto una versione" +
    "(.102)) una delle due versioni contiene numeri non presenti nell&apos;altra" +
    "(.103)) una delle due versioni contiene" +
    "(.104)) non presente nell&apos;altra" +
    "(.105)) (1) pagina bilingue interlineare interattiva" +
    "(.106)) (2) pagina bilingue interlineare stampabile" +
    "(.107)) (3) file testo bilingue interlineare" +
    "(.108)) (4) file csv lista parole usate nel testo" +
    "(.109)) Pagina <b>bilingue</b> interlineare" +
    "(.110)) Interattiva" +
    "(.111)) Il testo è diviso in coppie di righe, una in lingua originale e l\&apos;altra in traduzione." +
    "(.112)) Due pulsanti permettono di nascondere o far apparire una riga o entrambe." +
    "(.113)) Questo file può essere usato per esercitarsi" +
    "(.114)) nella comprensione di testi in un lingua straniera," +
    "(.115)) nella ripetizione di frasi a memoria." +
    "(.116)) Un possibile utilizzo potrebbe essere:" +
    "(.117)) Leggere una frase e tentare di indovinarne il significato." +
    "(.118)) Premere il pulsante rosso per vedere la traduzione." +
    "(.119)) Il pulsante verde serve a nascondere la versione in lingua originale," +
    "(.120)) può essere usato per esercizi di ripetizione con o" +
    "(.121)) senza il suggerimento della frase tradotta." +
    "(.122)) Modifica il colore dello sfondo, la grandezza e il colore dei caratteri" +
    "(.123)) Il testo originale e la sua traduzione sono stati ripristinati al valore iniziale (tutte le modifiche sono state annullate)" +
    "(.124)) Testo originale e tradotto sono composti da <b>numeri diversi di righe</b>" +
    "(.125)) ) diverso della Traduzione (" +
    "(.126)) Click per <br>modificare" +
    "(.127)) colore dello sfondo" +
    "(.128)) colore dei caratteri" +
    "(.129)) grandezza dei caratteri" +
    "(.130)) parole" +
    "(.131)) diverse" +
    "(.132)) frasi" +
    "(.133)) Versione Interattiva" +
    "(.134)) Premi il pulsante rosso $$ per leggere la traduzione della frase" +
    "(.135)) Premi il pulsante verde $$ per nascondere la frase in lingua originale" +
    "(.136)) Il finale <b>_size1.0</b>.html dei nomi file permette all&apos;utente di cambiare facilmente la grandezza dei caratteri dopo che il file è stato scritto. <br>Il numero dopo <b>size</b> è un moltiplicatore, rinominando il file e modificando questo numero, modifichiamo la grandezza originale dei caratteri (per es. <b>_size2.0.</b>html raddoppia la grandezza). <br>Sono accettati valori numerici da 0.5 a 3.0" +
    "(.137)) copia e incolla" +
    "(.138)) titolo, indirizzo, testo originale, traduzione" +
    "(.139)) e poi premi pulsante Esegui" +
    "(.140)) CORREGGI" +
    "(.141)) ANTEPRIMA" +
    "(.142)) Se necessario" +
    "(.143)) correggi" +
    "(.144)) spostando, eliminando o aggiungendo le doppie parentesi" +
    "(.145)) e poi premi il pulsante Esegui" +
    "(.146)) CORREGGI" +
    "(.147)) HOME" +
    "(.148)) Testo in lingua originale" +
    "(.149)) Testo Tradotto" +
    "(.150)) incolla qui il titolo (facoltativo)" +
    "(.151)) incolla qui l&apos;indirizzo della pagina (facoltativo)" +
    "(.152)) incolla qui il Testo in lingua originale" +
    "(.153)) incolla qui la Traduzione" +
    "(.154)) Premi questo pulsante" +
    "(.155)) se vuoi modifiare i colori dello sfondo o dei caratteri" +
    "(.156)) Nel caso la grandezza dei caratteri non fosse reputata soddisfacente per la stampa, &egrave; possibile modificarla cambiando nome al file. <br>Se il nome file termina con <b>_size</b>XX<b>.html</b> dove XX è un numero, questo numero moltiplica la grandezza dei caratteri. <br>per es. modificando la parte finale del nome in _size2.0.html la raddoppiamo" +
    "(.157)) testo bilingue ottenuto dall&apos;esecuzione del file" +
    ""; 

//-----------------------------------------------------------
// English
var msg_en = "(.000)) " + 
    "(.001)) BilingBuilder_Tutorial_en/BilingBuilder_Tutorial_en.html" +
    "(.002)) TUTORIAL" +
    "(.003)) Example of Interactive Page (German /Italian)" +
    "(.004)) Example of Printable Page (German /Italian) </a>" +
    "(.005)) Example of Interactive Page (Latin /Italian)" +
    "(.006)) Printable Page Example (Latin /Italian)" +
    "(.007)) Example of Interactive Page for a poem in Italian" +
    "(.008)) Example of a Printable Page for a poem in Italian </a>" +
    "(.009)) Paste the <b> source </b> text below on the left and the <b> translation </b> on the right" +
    "(.010)) Also paste the <b> title </b> and any <b> web address </b> (they are not mandatory, but recommended) <br>" +
    "(.011)) Press the <b> RUN </B> button" +
    "(.012)) Check for any reports, it is not certain that there are really mistakes, correct if necessary <br>" +
    "(.013)) View the <b> previews </b> produced and possibly <b> download </b> the related files" +
    "(.014)) <br> The problems are probably due to an incorrect automatic subdivision of the text lines. <br> When you press the RUN key for the first time, the text is divided into sentences and each sentence is rewritten in a single line which begins with a 3-digit progressive number preceded by an opening parenthesis and a period and followed by two closing parentheses. <br> For example <br> &nbsp; &nbsp; &lpar;.023&rpar;&rpar; this is one line. <br> In the runs following the first one, the pair the pair brackets-period is considered the beginning of a new line to which a new progressive is assigned. <br> For example the line &lpar;.024&rpar;&rpar; sentence number one &lpar;.sentence number two <br> becomes <br> &nbsp; &nbsp; &nbsp; &lpar;.024&rpar;&rpar; sentence number one <br> &nbsp; &nbsp; &nbsp; &lpar;.025&rpar;&rpar; sentence number two <br>" +
    "(.015)) Lines can be broken or joined together." +
    "(.016)) A line can be broken by inserting an opening parenthesis followed by a period <B>&lpar;.</B>" +
    "(.017)) Two consecutive lines can be joined by eliminating the opening parenthesis, period, number and closing parentheses preceding the second line." +
    "(.018)) <br> For example, to make the two lines into one:<br>&nbsp;&nbsp;&nbsp;&lpar;.024&rpar;&rpar;sentence number one <br>&nbsp;&nbsp;&nbsp;&lpar;.025&rpar;&rpar;sentence number two<br>just remove &lpar;.025&rpar;&rpar; of the second line." +
    "(.019)) page address or url (optional)" +
    "(.020)) If an error is reported in a pair (for example very different length of the two lines), <br> probably a sentence has been erroneously broken (e.g. a period considered at the end of a sentence while in reality it was used for something else), to correct it is necessary to join two successive lines by eliminating the opening brackets, period, number and closing brackets that precede the second line. <br> or two consecutive phrases have been considered as one, in which case they must be separated by inserting the pair brackets-period (no need to add a number) <br> <br> Press the <b> EXECUTE </b> button to confirm the changes" +
    "(.021)) <br> and renumber the lines automatically." +
    "(.022)) <br> Press the <b> Reset Texts </b> button to discard all changes and start over with the initial texts." +
    "(.023)) I was born and raised in Canicatt&igrave; (province of Agrigento, Sicily), Italy, <br>I live in Linarolo (province of Pavia, Lombardy), Italy, <br>I&apos;m married and I have a daughter, <br> I have worked for 3 decades in computer science mainly on mainframes,<br>and now I&apos;m retired." +
    "(.024)) To Create an interactive and printable interlinear bilingual text in any language" +
    "(.025)) title (optional)" +
    "(.026)) Source Language Text" +
    "(.027)) Translated Text" +
    "(.028)) the text must be translated" +
    "(.029)) The translated text must be coupled to the source" +
    "(.030)) <b>sentence by sentence</b>" +
    "(.031)) <b>line by line" +
    "(.032)) Separate the two texts into lines one by sentence, \nnumber the lines, \ncheck the pairs of lines (source and translation), build the output files" +
    "(.033))" +
    "(.034))" +
    "(.035)) Reset Texts" +
    "(.036)) Run" +
    "(.037)) cancels any changes made and reloads the source texts" +
    "(.038)) cancels any changes made and reloads the source texts" +
    "(.084)) Output Files" +
    "(.085)) Description" +
    "(.086)) Preview" +
    "(.087)) Download" +
    "(.088)) File Name" +
    "(.089))" +
    "(.090)) Output Samples" +
    "(.091)) Message language" +
    "(.092)) DEMO" +
    "(.093)) What to do" +
    "(.094)) Synchronization errors" +
    "(.095)) <br> Warning<br> <small>maybe there are alignment errors</small>" +
    "(.096)) Fixing tips" +
    "(.097)) pair of lines" +
    "(.098)) very different line lengths" +
    "(.099)) source" +
    "(.100)) translation" +
    "(.101)) there is only one version" +
    "(.102)) one of the two versions contains numbers not present in the other" +
    "(.103)) one of the two versions contains" +
    "(.104)) not present in the other" +
    "(.105)) (1) interactive interlinear bilingual page" +
    "(.106)) (2) printable interlinear bilingual page" +
    "(.107)) (3) interlinear bilingual text file" +
    "(.108)) (4) csv file list of words used in the text" +
    "(.109)) <b> bilingual </b> interlinear page" +
    "(.110)) Interactive" +
    "(.111)) The text is divided into pairs of lines, one in the source language and the other in translation." +
    "(.112)) Two buttons allow you to hide or show a row or both." +
    "(.113)) This file can be used for practice" +
    "(.114)) in understanding texts in a foreign language," +
    "(.115)) in the repetition of sentences by heart." +
    "(.116)) A possible use could be:" +
    "(.117)) Read a sentence and try to guess its meaning." +
    "(.118)) Press the red button to see the translation." +
    "(.119)) The green button is used to hide the source language version," +
    "(.120)) can be used for repetition exercises with or" +
    "(.121)) without the hint of the translated sentence." +
    "(.122)) Changes the background color, font size and color" +
    "(.123)) The source text and its translation have been restored to their initial value (all changes have been undone)" +
    "(.124)) Source and translated text consist of <b> different numbers of lines </b>" +
    "(.125))) different from the Translation (" +
    "(.126)) Click to change" +
    "(.127)) background color" +
    "(.128)) font color" +
    "(.129)) font size" +
    "(.130)) words" +
    "(.131)) different" +
    "(.132)) sentences" +
    "(.133)) Interactive Version" +
    "(.134)) Show or hide the sentence translation" +
    "(.134)) Press the red button $$ to read the translation of the phrase" +
    "(.135)) Press the green button $$ to hide the original language phrase" +
    "(.136)) The file name ending <b> _size1.0 </b> .html allows the user to easily change the font size after the downloading. <br> The number after <b>size</b> is a multiplier, by renaming the file and changing this number, we change the original font size (e.g. <b> _size2.0</b>.html doubles the size). <br> Numeric values from 0.5 to 3.0 are accepted" +
    "(.137)) copy and paste" +
    "(.138)) title, address, original text, translation" +
    "(.139)) and then press the Run button" +
    "(.140)) CORRECT" +
    "(.141)) PREVIEW" +
    "(.142)) If necessary" +
    "(.143)) correct" +
    "(.144)) by moving, deleting or adding the double parentheses" +
    "(.145)) and then press the Run button" +
    "(.146)) CORRECT" +
    "(.147)) HOME" +
    "(.148)) Source Language Text" +
    "(.149)) Translated Text" +
    "(.150)) paste the title here (optional)" +
    "(.151)) paste the page address here (optional)" +
    "(.152)) paste here the text in the original language" +
    "(.153)) paste the Translation here" +
    "(.154)) Press this button" +
    "(.155)) if you want to change the color of the background or of the font." +
    "(.156)) If the size of the characters is not considered satisfactory for printing, you can change it by renaming the file name. <br> If the filename ends with <b> _size</b>XX<b>.html</b> where XX is a number, this number multiplies the size of the characters. <br> eg. if we change the final part of the name to _size2.0.html we double the size of the characters." +
    "(.157)) bilingual text obtained by running the file" +
    ""; 
// ==========================================================
var list_msg00 = [ 
    ["it" , "<b>Italiano</b><br>",msg_it], 
    ["en" , "<b>English</b><br>translated from Italian (google help)",msg_en]
    ];