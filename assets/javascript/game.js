//PSEUDOCODE-STAR WARS RPG
//=======================================================================
$(document).ready(function(){
	var userCharacter;
	var userCharacterSelected = false;
	var enemyCharacter;	
	var heroArray = [
		{//heroArray[0]
			name : "Obi-Wan Kenobi",
			ATP : 5,
			Counter : 5,
			HP : 100,
		},
		{//heroArray[1]
			name : "Luke Skywalker",
			ATP : 5,
			Counter : 5,
			HP : 100,
		},
		{//heroArray[2]
			name : "Empire Palpatine",
			ATP : 5,
			Counter : 5,
			HP : 100,
		},
		{//heroArray[3]
			name : "Darth Vader",
			ATP : 5,
			Counter : 5,
			HP : 100,
		},
	]

	//When the user clicks on a character that character moves in the <div class="userChar">

	$(".characterImg").click(function() {
					
		if(userCharacterSelected === false) {
		 	if ($(this).attr("value") === "obi")
				{
				$("#obi.availableChar").appendTo(".userChar");
				$("#obi.availableChar").addClass("hero");
				userCharacter = heroArray[0];
				userCharacterAttack = heroArray[0].ATP;
				userCharacterHealth = heroArray[0].HP;
				}
			else if ($(this).attr("value") === "lukeSkywalker")
				{
				$("#luke.availableChar").appendTo(".userChar");
				$("#luke.availableChar").addClass("hero");
				userCharacter = heroArray[1];
				userCharacterAttack = heroArray[1].ATP;
				userCharacterHealth = heroArray[1].HP;			
				}
			else if ($(this).attr("value") === "emperorPalpatine")
				{
				$("#emperor.availableChar").appendTo(".userChar");
				$("#emperor.availableChar").addClass("hero");
				userCharacter = heroArray[2];
				userCharacterAttack = heroArray[2].ATP;
				userCharacterHealth = heroArray[2].HP;			
				}
			else if ($(this).attr("value") === "darthVader")
				{
				$("#vader.availableChar").appendTo(".userChar");
				$("#vader.availableChar").addClass("hero");
				userCharacter = heroArray[3];
				userCharacterAttack = heroArray[3].ATP;
				userCharacterHealth = heroArray[3].HP;			
				}
			else {
				console.log(userCharacter)
			}		

	};

	//Which ever chracter is in <div class="userChar">, have all other characters move to <div class="enemies">
		if($(".availableChar.hero")) {			
		 	if ($(this) != "obi")
				{
				$("#obi.availableChar").removeClass("hero")		
				$("#obi.availableChar").appendTo(".enemies");				
				$("#obi.availableChar").addClass("enemy");
				userCharacter = heroArray[0];
				userCharacterAttack = heroArray[0].ATP;
				userCharacterHealth = heroArray[0].HP;
				}
			else if ($(this) != "lukeSkywalker")
				{
				$("#luke.availableChar").removeClass("hero")
				$("#luke.availableChar").appendTo(".enemies");
				$("#luke.availableChar").addClass("enemy");
				userCharacter = heroArray[1];
				userCharacterAttack = heroArray[1].ATP;
				userCharacterHealth = heroArray[1].HP;			
				}
			else if ($(this) != "emperorPalpatine")
				{
				$("#emperor.availableChar").removeClass("hero")
				$("#emperor.availableChar").appendTo(".enemies")
				$("#emperor.availableChar").addClass("enemy");
				userCharacterAttack = heroArray[2].ATP;
				userCharacterHealth = heroArray[2].HP;			
				}
			else if ($(this) != "darthVader")
				{
				$("#vader.availableChar").removeClass("hero")
				$("#vader.availableChar").appendTo(".enemies")
				$("#vader.availableChar").addClass("enemy");
				userCharacter = heroArray[3];
				userCharacterAttack = heroArray[3].ATP;
				userCharacterHealth = heroArray[3].HP;			
				}
			else {
				console.log("YOU MUST CHOSE!!")
			}
		};

});
	//When the user picks a character in <div class="enemies">, that charcter moves into <div class="defender">
	// function enemyDefender() {

	// 		$(".availableChar").appendTo("#defender")
	// 		if ($(this).attr("value") === "obi")
	// 			{
	//			$("#obi.availableChar").removeClass("enemy");
	// 			$("#obi.availableChar").appendTo("#defender");
	// 			$("#obi.availableChar").addClass("defender");
	// 			enemyCharacter = obiWan;
	// 			enemyCharacterCounter = obiWan.Counter;
	// 			enemyCharacterHealth = obiWan.HP;
	// 			}
	// 		else if ($(this).attr("value") === "luke")
	// 			{
	//			$("#luke.availableChar").removeClass("enemy");
	// 			$("#luke.availableChar").appendTo("#defender")
	// 			$("#luke.availableChar").addClass("defender");
	// 			enemyCharacter = lukeSkywalker;
	// 			enemyCharacterCounter = lukeSkywalker.Counter;
	// 			enemyCharacterHealth = lukeSkywalker.HP;			
	// 			}
	// 		else if ($(this).attr("value") === "emperor")
	// 			{
	//			$("#emperor.availableChar").removeClass("enemy");
	// 			$("#emperor.availableChar").appendTo("#defender")
	// 			$("#emperor.availableChar").addClass("defender");
	// 			enemyCharacter = emperorPalpatine;
	// 			enemyCharacterCounter = emperorPalpatine.Counter;
	// 			enemyCharacterHealth = emperorPalpatine.HP;			
	// 			}
	// 		else if ($(this).attr("value") === "vader")
	// 			{
	//			$("#vader.availableChar").removeClass("enemy");
	// 			$("#vader.availableChar").appendTo("#defender")
	// 			$("#vadar.availableChar").addClass("defender");
	// 			enemyCharacter = darthVader;
	// 			enemyCharacterCounter = darthVader.Counter;
	// 			enemyCharacterHealth = darthVader.HP;			
	// 			}
	// 		};
	//Once there is a character in <div class="defender">, click <button id="attackButton">ATTACK!</button>
	// $("#attackButton").click( function() {
	// 	(("defender")enemyCharacterCounter - ("hero")userCharacterHealth)
	// 	(("hero")userCharacterAttack - ("defender")enemyCharacterHealth)
	// }
	//Damage from the user's character is dealt by their attack power, decreasing the opponent's health
	//Damage from the defender is then dealt by their counterattack power, decreasing the user's health	
});


///NOTES:
///Line 78-117 broken. Well So is most of it. But their especially. 
///Could have used something like var battle that occurs on click of available enemies. 
///The in-line JS that is commented out is broken code that was an attempt to move the characters from <div> to <div> 
///Button is just wrong
