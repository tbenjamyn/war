$(document).ready(function() {

	//what does this do?
	var convert_value_to_string = function(value) {
		if (value > 10) {
			switch (value) {
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
			}
		}
		return value.toString();
	}

	// converts numbers into jack, queen, and kings

	//what does this do?
	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) {
		var suit = suits[i];
		for (var j = 0; j<13; j++) {
			deck.push({number: j+1, suit: suit});
		}
	}

	// randomly generates a 52 cards with a suit and pushes the cards into a object that is
	// inside an array.
	
	//what does this do?
	var shuffle = function(array) { 
		var copy = [];
		var n = array.length; // 52 cards
		var i; 
		while (n) { i = Math.floor(Math.random() * array.length);  
			if (i in array) { 
		 		copy.push(array[i]); 
		 		delete array[i]; 
		 		n--; 
		 	} 
		} 
		return copy; 
	}

	// 

	
	
	//Now call the shuffle function and save the result of what shuffle returns into your deck variable
	deck = shuffle(deck);


	var cards_player_1 = [];
	var cards_player_2 = [];
	// write a function called deal that will evently divide the deck up between the two players
	
	var deal = function(deck) {
		for(i = 0; i < deck.length; i++) {
			if (i % 2 === 0) {
			cards_player_1.push(deck[i])
			} else {
			cards_player_2.push(deck[i])	
			}
		}	
	}

	deal(deck);
	
	//create a function (algorithm) called "war" that takes two cards as parameters, compares them and returns a winner. A tie should return false.
	var war = function(card1, card2) {
		if (card1.number > card2.number) {
			return "Player1";
		} else if (card2.number > card1.number) {
			return "Player2";
		} else {
			return false;
		}
	}
	
	var advance = function(){
		//take the top two cards and display them
		if (cards_player_1.length) {
			var card_1 = cards_player_1[0];
			var card_2 = cards_player_2[0];
			$("#opp-card").html(convert_value_to_string(card_1.number)+" "+card_1.suit);
			$("#opp-card-count").html(cards_player_1.length);
			$("#my-card").html(convert_value_to_string(card_2.number)+" "+card_2.suit);
			$("#my-card-count").html(cards_player_2.length);
			
		}
	}
	
	
	//create a play function
		//compare the cards
		//give the winner both cards (at end of deck)
	var play = function(){

		var isWinner = war(cards_player_1[0], cards_player_2[0]);

		if (isWinner === "Player1") {

// // player1 puts top card on the bottom of the deck
cards_player_1.push(cards_player_1[0]);

// // player1 remove card on top of the deck
cards_player_1.shift(cards_player_1[0]);

// // player 2 puts card on bottom of the deck player 1
cards_player_1.push(cards_player_2[0]);

// // player 2 removeds card on top of the deck
cards_player_2.shift(cards_player_2[0]);


		} else  if (isWinner === "Player2") {

// // player1 puts top card on the bottom of the deck
cards_player_2.push(cards_player_2[0]);

// // player1 remove card on top of the deck
cards_player_2.shift(cards_player_2[0]);

// // player 2 puts card on bottom of the deck player 1
cards_player_2.push(cards_player_1[0]);

// // player 2 removeds card on top of the deck
cards_player_1.shift(cards_player_1[0]);		

		} else {
// // player1 puts top card on the bottom of the deck
cards_player_1.push(cards_player_1[0]);

// // player1 remove card on top of the deck
cards_player_1.shift(cards_player_1[0]);

cards_player_2.push(cards_player_2[0]);

// // player1 remove card on top of the deck
cards_player_2.shift(cards_player_2[0]);			

		}
		
		


		//this function (defined below) will continue to the next turn
		advance();
	}
	

	advance();
	
	$(".btn").click(function() {
		play();
	});
});
