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
    let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

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
}

let deck = new Deck();
deck.createDeck();
deck.shuffle();

const playerOne = new Player("Sally");
const playerTwo = new Player("Steve");

// each person get's one half of the deck ∏
playerOne.deal(deck.cardDeck.slice(0, deck.cardDeck.length / 2));
playerTwo.deal(
  deck.cardDeck.slice(deck.cardDeck.length / 2, deck.cardDeck.length)
);

playGame(playerOne, playerTwo);

function playGame(playerOne, playerTwo) {
  for (let k = 0; k < 26; k++) {
    let playerOneCard = playerOne.hand.pop().rank;
    let playerTwoCard = playerTwo.hand.pop().rank;

    if (playerOneCard > playerTwoCard) {
      playerOne.score += 1;
      console.log(
        `${playerOne.name} gets a point! Their score is ${playerOne.score}`
      );
    } else if (playerTwoCard > playerOneCard) {
      playerTwo.score += 1;
      console.log(
        `${playerTwo.name} gets a point! Their score is ${playerTwo.score}`
      );
    } else if (playerOneCard === playerTwoCard) {
      console.log(`A tie results in both players losing the game! `);
      return;
    }
  }
}
