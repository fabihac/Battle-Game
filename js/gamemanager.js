 //gamemanage variable holds 2 function so that those functions can be called togather in onetime
 let GameManager = {
 	setGameStart: function(playerName){
 		this.resetPlayer(playerName); //stage 1 for calling players 
 		this.setPreFight();//stage 2 to set the button to call enemyies for fight 

 	},
 	//creating players objects
 	resetPlayer: function(playerName){
 		switch(playerName){
 			case "Luffy":
 			player = new Player (playerName,500,500,350,0,400);
 			break;
 			case "Zoro":
 			player = new Player (playerName,500,400,400,0,400);
 			break;
 			case "Sanji":
 			player = new Player (playerName,500,300,300,0,400);
 			break;
 			case "Franky":
 			player = new Player (playerName,500,200,300,0,300);
 			break;
 			case "Law":
 			player = new Player (playerName,500,400,400,0,400);
 			break;
 			

 		}//calling interface from index to change the interface
 		let getInterface = document.querySelector(".interface");

 		getInterface.innerHTML='<img src="img/player/' + playerName.toLowerCase() + '.png" class="img-fighters"><div><h3>' +playerName + '</h3><p class="health-player">Health:'+player.health+'</p><p>Haki:' + player.haki + '</p><p>Strength:'+player.strength+'</p><p>Mana:' + player.mana + '</p><p>Speed:'+player.speed + '</p></div>';

       },
 	setPreFight: function(){
 		let getHeader = document.querySelector(".header");
 		let getActions = document.querySelector(".actions");
 		let getArena = document.querySelector(".arena");

 		getHeader.innerHTML = '<h3>Task: Find A Enemy!</h3>';
 		getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for Enemy!!</a>';
 		getArena.style.visibility="visible";

 	},//function to call the enemies and create their objects 
 	setFight: function(){
 		let getHeader = document.querySelector(".header");
 		let getActions = document.querySelector(".actions");
 		let getEnemy = document.querySelector(".enemy");
 		//Create enemy
 		let enemy00 = new Enemy ("Doflamingo",500,400,400,0,400);
 		let enemy01 = new Enemy ("Katakuri",500,350,400,0,400);
 		let enemy02 = new Enemy ("Linlin",500,450,500,0,300);
 		let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));//to choose enemy randomly

 		switch(chooseRandomEnemy){
 			case 0:
 			 enemy = enemy00;
 			 break;
 			 case 1:
 			 enemy = enemy01;
 			 break;
 			 case 2:
 			 enemy = enemy02;
 			}
 			 getHeader.innerHTML = '<h3>Choose Your Move!</h3>';
 			 getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Start Attack!!</a>';//function to start players fight  

 			 getEnemy.innerHTML='<img src="img/enemy/'+ enemy.enemyName +'.png" class="img-fighters"><div><h3>'+enemy.enemyName+'</h3><p class="health-enemy">Health:'+enemy.health+'</p><p>Haki:'+enemy.haki+'</p><p>Strength:'+enemy.strength+'</p><p>Mana:'+enemy.mana+'</p><p>Speed:'+enemy.speed+'</p></div>'; //setting enemmy values
 		 

 	}

 }