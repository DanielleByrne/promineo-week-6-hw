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
  //shuffle then make new arrays for each player
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

    // nested for loop, will go in order and make a card for each one, will make all spade + value combinations then all club + value combinations ect..
    for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        //calling on Card constructor and making new cards
        // passing in the suit and value for that iteration
        let newCard = new Card(suits[i], rank[j], value[j]);
        //pushing them to the new array
        this.cardDeck.push(newCard);
      }
    }
  }
  shuffle() {
    // splice
    const copy = this.cardDeck.slice();
    const temp = [];
    while (copy.length > 0) {
      const newIndex = Math.floor(Math.random() * copy.length);
      const card = copy.splice(newIndex, 1)[0];
      temp.push(card);
    }
    this.cardDeck = temp;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
    this.score = 0;
  }
  deal(cards) {
    this.hand = cards;
  }
  // one half of the deck
  // hand property and a method for a turn
}

let deck = new Deck();
deck.createDeck();
deck.shuffle();
console.log(deck.cardDeck);

const sally = new Player("Sally");
const steve = new Player("Steve");

sally.deal(deck.cardDeck.slice(0, deck.cardDeck.length / 2));
steve.deal(deck.cardDeck.slice(deck.cardDeck.length / 2, deck.cardDeck.length));

console.log(sally.hand);

// player.score +=1
// player.hand.pop() -- removes the last element and returns , pops out card to compare and then update score loop, alert final score
// playGame(playerOne, playerTwo){
//loop- pops cards
//compare cards
//update score
//compare scores between two and show the higher one if/else
//}
