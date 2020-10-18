let player;
//made local variable to call from outside the function
function Player(playerName,health,haki,strength,mana,speed) {
	this.playerName = playerName;
	this.health = health;
	this.haki = haki;
	this.strength = strength;
	this.mana = mana;
	this.speed = speed;
}

let PlayerMoves = {
	 calcAttack: function(){
	 	//who attacks first
	 	let getPlayerSpeed = player.speed; /*taking players speed in a perticular variable to start the game based on their speed*/
	 	let getEnemySpeed = enemy.speed;

	 	let playerAttack = function(){
        //to caltucal how much player damage enemy

		let calcBaseDamage;
        /* to start from 0 thats why this statement sets the caclbasedamage to 0 then it goes to else statement to get the actual damage */
		if (player.mana > 0){
			calcBaseDamage = player.strength * player.mana / 1000;
		} else {
			calcBaseDamage = player.strength * player.haki / 1000;

		}

         //to make game inletesting adding more extra damage randomly
		let offsetDamage = Math.floor(Math.random() * Math.floor(10));
		let calcOutputDamage = calcBaseDamage + offsetDamage;//calculating both damages
		//Number fo hits
		/*making the hits random based on haki n to makes hits less deviding with extra number n lastly adding 1 just to make sure each player gets to hit once at leaset*/
		let numberOfHits = Math.floor(Math.random() * Math.floor(player.haki / 10) / 2) + 1;
		let attackValues = [calcOutputDamage, numberOfHits]; //hits n damages putting in a array
		return attackValues; // returning values to playAttack function

	    }
        //same comments as player
	    let enemyAttack = function(){
		let calcBaseDamage;
		if (enemy.mana > 0){
			calcBaseDamage = enemy.strength * enemy.mana / 1000;

		}
		else  {
			calcBaseDamage = enemy.strength * enemy.haki / 1000;

		}
		let offsetDamage = Math.floor(Math.random() * Math.floor(10));
		let calcOutputDamage = calcBaseDamage + offsetDamage;
		//Number fo hits
		let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.haki /10) / 2) + 1;
		let attackValues = [calcOutputDamage, numberOfHits];
		return attackValues;
	    }
	    //taking both players heath in a let
	    let getPlayerHealth = document.querySelector(".health-player");
	    let getEnemyHealth = document.querySelector(".health-enemy");
         
        //statements to find out if player is higher than enemy or not
        //if its true than player gets to hit first 
	    if (getPlayerSpeed >= getEnemySpeed ) {

		let playerAttackValues = playerAttack();// setting the function in a let of player hits 
		let totalDamage = playerAttackValues[0] * playerAttackValues[1];

		enemy.health = enemy.health - totalDamage; //reducing enemy health based on damage
		//taking the index num of the attackvalues in playerAttack function
		alert("You hit " +playerAttackValues[0] + " Damage " + playerAttackValues[1] + " times");
		//if the enemy health reduced to zero 
		if (enemy.health <= 0) {
			alert("You won!! Refresh browser to start again");
			getPlayerHealth.innerHTML = "Health:" + player.health;//printing player health
			getEnemyHealth.innerHTML = "Health: 0";// setting 0 just not to get some negating values
		} else {
			getEnemyHealth.innerHTML = "Health:" + enemy.health;//print if enemy still have some values 
		//enemy attacks
		//explanation same as before

			let enemyAttackValues = enemyAttack();
		let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
		player.health = player.health - totalDamage;
		alert("Enemy hit " + enemyAttackValues[0] + "Damage " + enemyAttackValues[1] +" times");
		if (player.health <= 0) {
			alert("You lost!! Refresh browser to start again");
			getEnemyHealth.innerHTML = "Health:" + enemy.health;
			getPlayerHealth.innerHTML = "Health: 0";

		} else {
			getPlayerHealth.innerHTML = "Health:" + player.health;
		 }

	    }
       
	   }
	   /*following method occurs if enemies speed is higher than player then enemy gets to hits firts and returns the player damage values same as before  */
	   else if (getEnemySpeed >= getPlayerSpeed ) {

		let enemyAttackValues = enemyAttack();
		let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
		player.health = player.health - totalDamage;
		alert("Enemy hit " +enemyAttackValues[0] + " Damage " + enemyAttackValues[1] + " times");
		if (player.health <= 0) {
			alert("You lost!! Refresh browser to start again");
			getEnemyHealth.innerHTML = "Health:" + enemy.health;
			getPlayerHealth.innerHTML = "Health: 0";
		} else {
			getPlayerHealth.innerHTML = "Health:" + player.health;
		//player attacks

			let playerAttackValues = playerAttack();
		let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
		enemy.health = enemy.health - totalDamage;
		alert("You hit " + playerAttackValues[0] + "Damage " + playerAttackValues[1] +" times");
		if (enemy.health <= 0) {
			alert("You Win!! Refresh browser to start again");
			getPlayerHealth.innerHTML = "Health:" + player.health;
			getEnemyHealth.innerHTML = "Health: 0";

		} else {
			getEnemyHealth.innerHTML = "Health:" + enemy.health;
		 }

	    }
       
	   }

	 }
}

	

		
	








