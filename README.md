# BilingBuilder
BilingBuilder creates bilingual interlinear, interactive and printable text  from any source got by copying and pasting.

It splits texts in sentences and write  them in rows (one sentence, one row).

Each sentence in the original language is folllowed by its translation.  

## Objective: 
  BilingBuilder is meant to be used as a learning tool:
  1. to improve the reading understanding in a foreign language 
  2. to help memorize pieces of poetry or text by hiding and showing lines.   

## Output files
It creates two html output files:
1. interactive bilingual text:   
    each sentence of the source text is preceded by two buttons:
      * the first button (the red one) shows the translation of the sentence if pressed 
      * the second button (the green one) hide the source sentence if pressed
2. printable bilingual text:  
   each sentence is followed by its translation 
 
## Input
Input is provided by the user by copy and paste.
The translation text can be got from an automatic translator like Google's or  Microsoft's Bing 
or from an existing one. 

BilingBuilder tries to syncronize the source and translation texts automatically, 
but let the user to correct it if needed  (warnings are issued in case of doubts). 

## How to use it
It's better to have a look at the presentation and the user guides it's take only a few minutes.
In a few words you have to  
* download the **BilingBuilder** folder
* run  **BilingBuilder.html** file 
* follow the istructions 

## Privacy 
* No files are sent to the web, 
* No links to any sites, internet isn't used at all 
* all the code is in your computer and  all the files are written in the download folder of your computer.  

## Environment
The code has been tested using:
* Chrome, Edge, Firefox in Window 10 desktop 
* Safari on Apple Notebook  

## Documentation
You can find a presentation and 7 user guides in the  **BilingBuilder_Tutorial_en** folder.

There is also an Italian version in the  **BilingBuilder_Guida_in_Italiano** folder

## Language of BilingBuilder
As it is delivered all messages and written are in Italian and English languages, but you can add any languages  
as it's explained in **DEV/toBuildUpdate_messages** folder.

The language used is the local one if available otherwise English is used.  But the user can change it pressing a button.

## DEV folder
here is something useful to anybody wants to update this application. 
The most important is the **toBuildUpdate_messages**  folder.

My mother tongue is Italian, my English is not so good, so if you want to change the English messages please:
* change the file **BilingBuilder_msg_en.txt**  in the folder **DEV/toBuildUpdate_messages** 
* run **BilingBuilder_message_script_making.html**,  it writes a script file in the user download folder
* copy it in the **BilingBuilder** folder and rename it to **BilingBuilder_txtmsg.js**
 



