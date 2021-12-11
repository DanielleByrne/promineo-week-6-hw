// game of war
// deal 26 cards to two players
// iterate through the turns where each player plays a card
// the player who played a higher card gets a point
//display the scores at the end
// write a unit test

class Card {
  // suit and value
  constructor(suit, value, rank) {
    this.suit = suit;
    this.value = value;
    this.rank = rank;
  }
}

class Deck {
  // deckOfCards - array of the instances of Card class
  // method to take a turn and method to shuffle
  constructor(cardDeck) {
    this.cardDeck = [];
  }

  createDeck() {
    let suits = ["diamond", "club", "heart", "spade"];
    let value = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "K",
      "Q",
      "A",
    ];
    let rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    // console.log(suits)
    // console.log(value)
    // console.log(rank)

    // calling on deck constructor to make a new card deck with the cards made in the loops
    let deck = new Deck();

    // nested for loop, will go in order and make a card for each one, will make all spade + value combinations then all club + value combinations ect..
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        //calling on Card constructor and making new cards
        // passing in the suit and value for that iteration
        let newCard = new Card(suits[i], rank[j],value[j]);
        //pushing them to the new array
        deck.cardDeck.push(newCard);
      }
    }
    // console.log(deck);
  }
}

let playerOneDeck = new Deck();
playerOneDeck.createDeck();

class Player {
  // hand property and a method for a turn
}

// need playerOne and playerTwo
