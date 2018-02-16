/*auteur:jlr. Ce script est libre de droits pour toute utilisation non commerciale
à condition de ne pas enlever le sigle JLR avec le lien vers mon site www.progvbjlr.net*/

	function getElement(id)  
	{  
	   if (document.getElementById)  
	   {  
		  return document.getElementById(id);  
	   }  
	   else if (document.all)  
	   {  
		  return window.document.all[id];  
	   }  
	   else if (document.layers)  
	   {  
		  return window.document.layers[id];  
	   }  
	} 
	
	var ValQi = 0;
	var PointsJ = 0;
	var TempsEc = false;
	var secondes = 0;
	var timer;
	var text = "";
	
	function InitSec()
	{
	secondes = 35;
	}
				
	function init() 
	{

		Quest = new Array() 
		 for (var idx = 1; idx < 11; idx++)//indiquer ici le nombre de questions par cession + 1 
		 { 
		   Quest[idx] = Math.random() 
		   Quest[idx] = Quest[idx] * 40//indiquer ici le nombre total de questions
		   Quest[idx] = Math.ceil(Quest[idx]) 
		   for (var j = 1; j < idx; j++) 
		   { 
			 if (Quest[idx] == Quest[j]) 
			   { 
				 Quest[idx] = Math.random() 
				 Quest[idx] = Quest[idx] * 40//indiquer ici le nombre total de questions 
				 Quest[idx] = Math.ceil(Quest[idx]) 
				 j = -1 
			   } 
		   } 
		 }				 
	}	
		
		function initq(iRows,iCols) 
	{ 
		var i; 
		var j; 
		   var a = new Array(iRows); 
		   for (i=0; i < iRows; i++) 
		   { 
			   a[i] = new Array(iCols); 
			   for (j=0; j < iCols; j++) 
			   { 
				   a[i][j] = ""; 
			   } 
		   } 
		   return(a);
		   
						 
	}
	
	var questions = initq(41,6);//entrer dans cette liste les questions supplémentaires//
		
	questions[1][1] = "1 est à 2 ce que 3 est à …"
	questions[1][2] = "images/questqi1.gif"
	questions[1][3] = "images/imq1.gif"
	questions[1][4] = "D"
	questions[1][5] = "D - La 2eme figure est réduite de moitié, l'élément intérieur passe à l'extérieur et pivote d'un 1/4 de tour à droite, toutes les surfaces changent de couleur."

	questions[2][1] = "Trouvez le nombre manquant dans cette suite"
	questions[2][2] = "images/questqi2.gif"
	questions[2][3] = "images/imq2.gif"
	questions[2][4] = "B"
	questions[2][5] = "B - Chaque nombre se déduit du précédent en ajoutant la suite des nombres premiers à partir de 3 ( 27+13=40 )"

	questions[3][1] = "Dans quelle position se trouve ce solide après avoir pivoté de 45° vers la droite ?"
	questions[3][2] = "images/questqi3.gif"
	questions[3][3] = "images/imq3.gif"
	questions[3][4] = "C"
	questions[3][5] = "C -"

	questions[4][1] = "Quelle figure forme une suite logique ?"
	questions[4][2] = "images/questqi4.gif"
	questions[4][3] = "images/imq4.gif"
	questions[4][4] = "C"
	questions[4][5] = "C - Le cercle se déplace d'une case en diagonale vers le bas, le carré d'une case horizontale vers la gauche"
	
	questions[5][1] = "Quelle figure forme une suite logique ?"
	questions[5][2] = "images/questqi5.gif"
	questions[5][3] = "images/imq5.gif"
	questions[5][4] = "A"
	questions[5][5] = "A - Sur chaque ligne la 3eme figure est la superposition des 2 autres, mais quand 2 tirets sont superposés, ils disparaissent"
	
	questions[6][1] = "Quelle figure forme une suite logique ?"
	questions[6][2] = "images/questqi6.gif"
	questions[6][3] = "images/imq6.gif"
	questions[6][4] = "D"
	questions[6][5] = "D - En colonne et en ligne, les chiffres en haut à gauche se multiplient pour donner le 3eme, les chiffres en bas à droite se soustraient"
	
	questions[7][1] = "Quel est le nombre manquant ?"
	questions[7][2] = "images/questqi7.gif"
	questions[7][3] = "images/imq7.gif"
	questions[7][4] = "B"
	questions[7][5] = "B - Sur chaque ligne, le 3eme chiffre s'obtient en multipliant par 4 le 1er, puis en soustrayant 4 au résultat"
	
	questions[8][1] = "Quel est le nombre manquant ?"
	questions[8][2] = "images/questqi8.gif"
	questions[8][3] = "images/imq8.gif"
	questions[8][4] = "C"
	questions[8][5] = "C - Le nombre de la colonne centrale est la somme des carrés des 2 autres"
	
	
	questions[9][1] = "Quel est le nombre manquant ?"
	questions[9][2] = "images/questqi9.gif"
	questions[9][3] = "images/imq9.gif"
	questions[9][4] = "A"
	questions[9][5] = "A - Le total de chaque ligne et de chaque colonne est toujours 24"
	
	questions[10][1] = "Quel est le nombre manquant ?"
	questions[10][2] = "images/questqi10.gif"
	questions[10][3] = "images/imq10.gif"
	questions[10][4] = "B"
	questions[10][5] = "B - On additionne les 3 chiffres extérieurs moins les 2 du milieu (22+9+8)-(13+16)"
	
	questions[11][1] = "Quel est le chiffre manquant ?"
	questions[11][2] = "images/questqi11.gif"
	questions[11][3] = "images/imq11.gif"
	questions[11][4] = "A"
	questions[11][5] = "A - On multiplie les 3 chiffres extérieurs et on divise par 10"

	questions[12][1] = "Complétez la série."
	questions[12][2] = "images/questqi12.gif"
	questions[12][3] = "images/imq12.gif"
	questions[12][4] = "D"
	questions[12][5] = "D - A partir de C (3eme lettre de l'alphabet), la suite des lettres correspond à la suite des nombres premiers (3,5,7,11,13,17)"

	questions[13][1] = "Trouvez la figure qui forme une suite logique"
	questions[13][2] = "images/questqi13.gif"
	questions[13][3] = "images/imq13.gif"
	questions[13][4] = "D"
	questions[13][5] = "D - Le rectangle comme le cercle bascule d'un quart de tour et les motifs sont inversés"

	questions[14][1] = "Trouvez la figure qui forme une suite logique"
	questions[14][2] = "images/questqi14.gif"
	questions[14][3] = "images/imq14.gif"
	questions[14][4] = "C"
	questions[14][5] = "C - Les 2 éléments supérieurs s'inversent. L'élément inférieur reste à sa place mais change de couleur"
	
	questions[15][1] = "Trouvez la figure qui forme une suite logique"
	questions[15][2] = "images/questqi15.gif"
	questions[15][3] = "images/imq15.gif"
	questions[15][4] = "A"
	questions[15][5] = "A - Sur chaque ligne, la figure de droite additionne les triangles des figures précédentes en inversant intérieur/extérieur"
	
	questions[16][1] = "Trouvez la figure qui forme une suite logique"
	questions[16][2] = "images/questqi16.gif"
	questions[16][3] = "images/imq16.gif"
	questions[16][4] = "C"
	questions[16][5] = "C - La figure pivote chaque fois d'un quart de tour et le cercle occupe systématiquement une position différente: en haut, en bas ou au centre"
	
	questions[17][1] = "Trouvez la figure qui forme une suite logique"
	questions[17][2] = "images/questqi17.gif"
	questions[17][3] = "images/imq17.gif"
	questions[17][4] = "D"
	questions[17][5] = "D - Le cercle et le carré s'inversent en conservant leur couleur. La double barrette change de couleur, la simple de couleur et de place."
	
	questions[18][1] = "Quelle figure peut-on ajouter ?"
	questions[18][2] = "images/questqi18.gif"
	questions[18][3] = "images/imq18.gif"
	questions[18][4] = "C"
	questions[18][5] = "C - Chaque figure comprend: soit 3 lignes formant au moins 1 angle droit, soit 6 lignes qui n'en forment aucun"
	
	
	questions[19][1] = "Chiffres manquants ?"
	questions[19][2] = "images/questqi19.gif"
	questions[19][3] = "images/imq19.gif"
	questions[19][4] = "B"
	questions[19][5] = "B - Au dessus progression de type: +1, -2, +3, -4 en dessous -1, +2, -3, +4 * 17(+1=)18(-2=)16(+3=)19(-4=)15 * 14(-1=)13(+2=)15(-3=)12(+4=)16"
	
	questions[20][1] = "Nombre manquant ?"
	questions[20][2] = "images/questqi20.gif"
	questions[20][3] = "images/imq20.gif"
	questions[20][4] = "D"
	questions[20][5] = "D - Chaque chiffre s'obtient en multipliant le précédent par le suivant: 1x2=2, 2x2=4, 2x4=8, 4x8=32"
	
	questions[21][1] = "Trouvez les lettres manquantes"
	questions[21][2] = "images/questqi21.gif"
	questions[21][3] = "images/imq21.gif"
	questions[21][4] = "C"
	questions[21][5] = "C - 2 suites qui se lisent de haut en bas et vice-versa.Chaque lettre est séparée de la suivante par une autre.A(b)C(d)E(f)G(h)I et E(f)G(h)I(j)K(l)M"

	questions[22][1] = "Quel est le nombre suivant ?"
	questions[22][2] = "images/questqi22.gif"
	questions[22][3] = "images/imq22.gif"
	questions[22][4] = "C"
	questions[22][5] = "C - C'est toujours une puissance de 2 moins la suite des nombres entiers.1(=2 puiss1-1)2(=2²-2)...58(=2 puissance6-6)."

	questions[23][1] = "Trouvez le chiffre manquant"
	questions[23][2] = "images/questqi23.gif"
	questions[23][3] = "images/imq23.gif"
	questions[23][4] = "D"
	questions[23][5] = "D - 2 séries alternées:4, 6, 10, 18 et 5, 8, 14, 26 ou chaque nombre est = au double du précédent -2. 10=(6x2)-2."

	questions[24][1] = "Trouvez la figure manquante"
	questions[24][2] = "images/questqi24.gif"
	questions[24][3] = "images/imq24.gif"
	questions[24][4] = "B"
	questions[24][5] = "B - D'une figure à l'autre, les figures changent de couleur et le rectangle intérieur pivote d'un quart de tour."
	
	questions[25][1] = "Quelle lettre manque ?"
	questions[25][2] = "images/questqi25.gif"
	questions[25][3] = "images/imq25.gif"
	questions[25][4] = "A"
	questions[25][5] = "A - C'est une suite ou C est la 2eme lettre après A, F la 3eme après C, J la 4eme après F, O la 5eme après J."
	
	questions[26][1] = "Quel nombre complète la série ?"
	questions[26][2] = "images/questqi26.gif"
	questions[26][3] = "images/imq26.gif"
	questions[26][4] = "B"
	questions[26][5] = "B - Suite où le 3eme = le 1er au carré moins le 2eme * 5² -7=18, 7² -18=31, 18² -31=293, 31² -293=668"
	
	questions[27][1] = "Quel nombre complète la série ?"
	questions[27][2] = "images/questqi27.gif"
	questions[27][3] = "images/imq27.gif"
	questions[27][4] = "D"
	questions[27][5] = "D - C'est une progression où chaque terme s'obtient en ajoutant 6 au précédent"
	
	questions[28][1] = "Nombre manquant ?"
	questions[28][2] = "images/questqi28.gif"
	questions[28][3] = "images/imq28.gif"
	questions[28][4] = "A"
	questions[28][5] = "A - Chaque chiffre hormis le 1er s'obtient en multipliant le précédent par 2 et en soustrayant 1, 2, 3, 4, 5 * 5=(3x2)-1, ... , 22=(13x2)-4, 39=(22x2)-5"
		
	questions[29][1] = "Nombre manquant ?"
	questions[29][2] = "images/questqi29.gif"
	questions[29][3] = "images/imq29.gif"
	questions[29][4] = "C"
	questions[29][5] = "C - Le chiffre en bas à gauche est égal au chiffre du haut divisé par celui du bas à droite puis multiplié par 2"
	
	questions[30][1] = "Trouvez le nombre manquant"
	questions[30][2] = "images/questqi30.gif"
	questions[30][3] = "images/imq30.gif"
	questions[30][4] = "B"
	questions[30][5] = "B - Le code est RAVIOLI et les lettres qui suivent. Les chiffres de code augmentent de 1,2,3 * L de Loi=6+1, L de Rival=6+2, L de Vol=6+3..."
	
	questions[31][1] = "Trouvez la figure qui forme une suite logique"
	questions[31][2] = "images/questqi31.gif"
	questions[31][3] = "images/imq31.gif"
	questions[31][4] = "C"
	questions[31][5] = "C - La seule qui ne forme pas d'angle droit."
	
	questions[32][1] = "Trouvez la lettre manquante"
	questions[32][2] = "images/questqi32.gif"
	questions[32][3] = "images/imq32.gif"
	questions[32][4] = "B"
	questions[32][5] = "B - Dans chaque groupe de lettres la dernière précède la 1ere dans l'ordre alphabétique."
	
	questions[33][1] = "Trouvez la lettre manquante"
	questions[33][2] = "images/questqi33.gif"
	questions[33][3] = "images/imq33.gif"
	questions[33][4] = "A"
	questions[33][5] = "A - La lettre est l'initiale du chiffre lorsqu'il est écrit en toutes lettres: S pour Six cent soixante six, ... S pour Sept cent sept."
	
	
	questions[34][1] = "Chiffre manquant ?"
	questions[34][2] = "images/questqi34.gif"
	questions[34][3] = "images/imq34.gif"
	questions[34][4] = "D"
	questions[34][5] = "D - C'est une progression du type x2, -1 * 3(x2)=6 (-1)=5 (x2)=10 (-1)=9 (x2)=18."
	
	questions[35][1] = "Remplacez les points"
	questions[35][2] = "images/questqi35.gif"
	questions[35][3] = "images/imq35.gif"
	questions[35][4] = "A"
	questions[35][5] = "A - Ce sont 2 suites, 1 en sens direct : A, BC, DEF l'autre en sens inverse:Z, YX, WVU où chaque groupe augmente d'une lettre à chaque fois"
	
	questions[36][1] = "Remplacez les points"
	questions[36][2] = "images/questqi36.gif"
	questions[36][3] = "images/imq36.gif"
	questions[36][4] = "C"
	questions[36][5] = "C - Chaque lettre en sens inverse de l'alphabet est séparée de la précédente par 2 autres. Chaque chiffre s'obtient en ajoutant 3 au précédent."

	questions[37][1] = "Remplacez le point"
	questions[37][2] = "images/questqi37.gif"
	questions[37][3] = "images/imq37.gif"
	questions[37][4] = "B"
	questions[37][5] = "B - La position de la lettre dans l'alphabet s'obtient en multipliant les 2 chiffres qui la précède * 4 x 5 = T la 20eme lettre."

	questions[38][1] = "Quelle figure complète la série ?"
	questions[38][2] = "images/questqi38.gif"
	questions[38][3] = "images/imq38.gif"
	questions[38][4] = "C"
	questions[38][5] = "C - La ligne pivote systématiquement de 45°"

	questions[39][1] = "Quelle figure complète la série ?"
	questions[39][2] = "images/questqi39.gif"
	questions[39][3] = "images/imq39.gif"
	questions[39][4] = "C"
	questions[39][5] = "C - Le rond et le carré tournent dans le sens horaire, le rond change chaque fois de couleur. Le triangle tourne dans le sens anti-horaire."
	
	questions[40][1] = "Quelle figure complète la série ?"
	questions[40][2] = "images/questqi40.gif"
	questions[40][3] = "images/imq40.gif"
	questions[40][4] = "C"
	questions[40][5] = "C - Les rayures de la moitié de gauche pivotent de 45° dans le sens anti-horaire. Celles de droite sont alternativement horizontales ou verticales."
	
	function Chrono()
	{ 
		if (secondes > 0)
		{
			var minutes = Math.floor(secondes/60);
			var heures = Math.floor(minutes/60);
			secondes -= minutes * 60;
			if (heures > 0)
			{
				minutes -= heures * 60;
				if (minutes > 0)
				{
					text = "Il reste " + heures + ' h ' + minutes + ' min ' + secondes + ' sec';
				}
				else
				{	
					text = "Il reste " + heures + ' h ' + secondes + ' sec';
				}
				minutes = minutes + (heures * 60);
				secondes = secondes + (minutes * 60) - 1;
				
			}
			else if (minutes > 0)
			{
				text = "Il reste " + minutes + ' min ' + secondes + ' sec';
				secondes = secondes + (minutes * 60) - 1;
			}
			else
			{
				text = "Il reste " + secondes + ' sec';
				secondes = secondes + (minutes * 60) - 1;
			}
		}
		else
		{
			clearInterval(timer);
			text = "Le temps est écoulé";
			TempsEc = true
			testrep(formqi);
		}
		
		getElement('chrono').value = text;
	}
	
	function nextQuestion(form)

	//mettez ici le nombre de questions posées par jeu
	{ 	var quizEnd = eval(10 * 1);
			
		if(form.questNo.value == quizEnd) {
		ClFin(form);
		form.results.value = "Fin du Quiz.  Votre résultat final est indiqué ci-dessous.";
		ArreterChrono();
		AffQi();
		
		   }

		   else {

		if(form.questNo.value == "") {form.questNo.value = 1} else {
		
		   form.questNo.value = eval(form.questNo.value) + 1; }
		}
		var NumAleat = Quest[form.questNo.value];
		
		form.question.value = questions[NumAleat][1];
		
		var NouvIm = getElement('imchoix');
		var NouvAdr = questions[NumAleat][3];
		NouvIm.src = NouvAdr;
		
		var NouvImq = getElement('imquest');
		var NouvAdrq = questions[NumAleat][2];
		NouvImq.src = NouvAdrq;
		
		form.votrep.value = "";

		form.results.value = "";
		
		if(form.myScore.value == "") {form.myScore.value = 0; } else {
			form.myScore.value = form.myScore.value; }

	}
		
	
	function AffQi() {
		if(PointsJ >=700)  {
		ValQi = "Votre QI: + de 150 ! ou alors vous avez triché ?";}
		else if(PointsJ >=600) {
		ValQi = "Votre QI: + de 130 ! Félicitation";}
		else if(PointsJ >=400) {
		ValQi = "Votre QI: entre 120 et 130 ! Bravo";}
		else if(PointsJ >=300) {
		ValQi = "Votre QI: environ 120 ! Bonne moyenne";}
		else if(PointsJ >=200) {
		ValQi = "Votre QI: 115  Peut être amélioré";}
		else if(PointsJ >=100) {
		ValQi = "Votre QI: 110  Il faut travailler";}
		else if(PointsJ >=50) {
		ValQi = "Votre QI: + de 100 ! C'est pas fameux !";}
		else {
		ValQi = "Votre QI: - de 100 ! Vous dormez ou vous êtes un chimpanzé ?";}
		getElement('quot').value = ValQi;
		form.question.value = "";
		form.votrep.value = "";
		form.results.value = "Fin du Quiz.  Votre résultat final est indiqué ci-dessous.";
	}
		
	function EvalSound(soundobj) {
		var thissound= eval("document."+soundobj);
		thissound.Play();
	}

	function testrep(form) {
		
		var myScore = 0;
		var curve = 0;
		var pourc = 0
		var NumAleat = Quest[form.questNo.value];

	if(form.results.value != "") {form.results.value = "Désolé, vous ne pouvez donner qu'une seule réponse.  Un click sur ''Question suivante'' pour continuer.";
		ArreterChrono();
	}

	else if(form.votrep.value == questions[NumAleat][4]) {
		form.myScore.value = eval(form.myScore.value) + eval(1);
		form.results.value = "C'est juste. " + questions[NumAleat][5];
		EvalSound('sound1'); 
		PointsJ+=50;
		PointsJ+=secondes;
		ArreterChrono();
		}
	else {
	  
	if(TempsEc == true) {
		form.results.value = "Désolé, le termps est écoulé. La bonne réponse était " + questions[NumAleat][5];
		EvalSound('sound2');
		PointsJ-=20;
		ArreterChrono();
		}

	else if(TempsEc == false) {
		form.results.value = "Désolé, votre réponse est fausse. La bonne réponse était " + questions[NumAleat][5];
		EvalSound('sound2');
		PointsJ-=20;
		ArreterChrono();
		}
		}

   
	curve = form.myScore.value / form.questNo.value;

	form.percent.value = parseInt(curve * 100,10);
	pourc = parseInt(curve * 100,10);

	if(pourc > 97)  {document.images['cote'].src = "sc1.gif";
		form.cmt.value = "Champion !"; }
	else if(pourc > 89)  {document.images['cote'].src = "sc1.gif";
		form.cmt.value = "Tres bien !"; }
	else if(pourc > 69)  {document.images['cote'].src = "sc2.gif";
		form.cmt.value = "Bien !"; }
	else if(pourc > 49)  {document.images['cote'].src = "sc3.gif";
		form.cmt.value = "Peut mieux faire !"; }
	else {document.images['cote'].src = "sc4.gif";
		form.cmt.value = "Bof !"; }
	}

   
	function repa(form) {
		if(form.results.value == "")
	{
		form.votrep.value = "A";
		form.tda.value = "Votre réponse";}
	}
	function repb(form) {
		if(form.results.value == "")
	{
		form.votrep.value = "B";
		form.tda.value = "Votre réponse";}
	}	
	function repc(form) {
		if(form.results.value == "")
	{
		form.votrep.value = "C";
		form.tda.value = "Votre réponse";}
	}
	function repd(form) {
		if(form.results.value == "")
	{
		form.votrep.value = "D";
		form.tda.value = "Votre réponse";}
	}
	
	function ClFin(form)
	
	{
	form.tda.value = "";
    form.votrep.value = "";
	form.results.value = "";
	form.question.value = "";
	document.images['imchoix'].src = "images/votqi.gif";
	document.images['imquest'].src = "images/questqi0.gif";
	getElement('chrono').value = "";
	}

	function clearRep(form)
	
	{
	TempsEc = false;
    form.tda.value = "";
    form.votrep.value = "";
	form.results.value = "";
	form.question.value = "";
	getElement('chrono').value = "";
	}

	function clearForm(form)

	{	
	form.question.value = "";
    form.votrep.value = "";
	form.results.value = "";
    form.myScore.value = "";
	form.questNo.value = "";
    form.percent.value = "";
    form.tda.value = "";
	form.tdb.value = "";
    form.cmt.value = "";
	ValQi = 0;
	PointsJ = 0;
	TempsEc = false;
	document.images['cote'].src = "sc5.gif";
	document.images['imchoix'].src = "images/imq0.gif";
	document.images['imquest'].src = "images/questqi0.gif";
	getElement('chrono').value = "";
	}

	function DemarrerChrono()
	{
		timer = setInterval('Chrono()', 1000);
	}
	
	function ArreterChrono()
	{
		clearInterval(timer);
	}
	
	
	
