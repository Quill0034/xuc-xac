import React, { Component } from "react"; 
import './style/blackjack.css';
import './style/App.css';
import blackjack from "./assets/blackjack.jpg";
export default class Blackjack extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
        deck: [],
        dealer: null,
        player: null,
        wallet: 0,
        inputValue: '',
        currentBet: null,
        gameOver: false,
        message: null
      };
    }
  
    generateDeck() {
      const cards = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
      const suits = ['♦','♣','♥','♠'];
      const deck = [];
      for (let i = 0; i < cards.length; i++) {
        for (let j = 0; j < suits.length; j++) {
          deck.push({number: cards[i], suit: suits[j]});
        }
      }
      return deck;
    }
    
    dealCards(deck) {
      const playerCard1 = this.getRandomCard(deck);
      const dealerCard1 = this.getRandomCard(playerCard1.updatedDeck);
      const playerCard2 = this.getRandomCard(dealerCard1.updatedDeck);    
      const playerStartingHand = [playerCard1.randomCard, playerCard2.randomCard];
      const dealerStartingHand = [dealerCard1.randomCard, {}];
      
      const player = {
        cards: playerStartingHand,
        count: this.getCount(playerStartingHand)
      };
      const dealer = {
        cards: dealerStartingHand,
        count: this.getCount(dealerStartingHand)
      };
      
      return {updatedDeck: playerCard2.updatedDeck, player, dealer};
    }
  
    startNewGame(type) {
      if (type === 'continue') {
        if (this.state.wallet > 0) {
          const deck = (this.state.deck.length < 10) ? this.generateDeck() : this.state.deck;
          const { updatedDeck, player, dealer } = this.dealCards(deck);
  
          this.setState({
            deck: updatedDeck,
            dealer,
            player,
            currentBet: null,
            gameOver: false,
            message: null
          });
        } else {
          this.setState({ message: 'Hết tiền cmnr! nhấn Bắt đầu chơi để chơi lại' });
        }
      } else {
        const deck = this.generateDeck();
        const { updatedDeck, player, dealer } = this.dealCards(deck);
  
        this.setState({
          deck: updatedDeck,
          dealer,
          player,
          wallet: 100,
          inputValue: '',
          currentBet: null,
          gameOver: false,
          message: null
        });
      }
    }
         
    getRandomCard(deck) {
      const updatedDeck = deck;
      const randomIndex = Math.floor(Math.random() * updatedDeck.length);
      const randomCard = updatedDeck[randomIndex];
      updatedDeck.splice(randomIndex, 1);
      return { randomCard, updatedDeck };
    }
    
    placeBet() {
      const currentBet = this.state.inputValue;
  
      if (currentBet > this.state.wallet) {
        this.setState({ message: 'Không đủ tiền!' });
      } else if (currentBet % 1 !== 0) {
        this.setState({ message: 'Đặt số chẵn thôi!!!' });
      } else {
        // Deduct current bet from wallet
        const wallet = this.state.wallet - currentBet;
        this.setState({ wallet, inputValue: '', currentBet });
      }
    }
    
    hit() {
      if (!this.state.gameOver) {
        if (this.state.currentBet) {
          const { randomCard, updatedDeck } = this.getRandomCard(this.state.deck);
          const player = this.state.player;
          player.cards.push(randomCard);
          player.count = this.getCount(player.cards);
  
          if (player.count > 21) {
            this.setState({ player, gameOver: true, message: 'Ngoác cmnr!' });
          } else {
            this.setState({ deck: updatedDeck, player });
          }
        } else {
          this.setState({ message: 'Đặt cược đê.' });
        }
      } else {
        this.setState({ message: 'Hết tiền cmnr! nhấn bắt đầu chơi để chơi lại.' });
      }
    }
    
    dealerDraw(dealer, deck) {
      const { randomCard, updatedDeck } = this.getRandomCard(deck);
      dealer.cards.push(randomCard);
      dealer.count = this.getCount(dealer.cards);
      return { dealer, updatedDeck };
    }
    
    getCount(cards) {
      const rearranged = [];
      cards.forEach(card => {
        if (card.number === 'A') {
          rearranged.push(card);
        } else if (card.number) {
          rearranged.unshift(card);
        }
        
        
        // (card.number === 'A') ? rearranged.push(card) : rearranged.unshift(card);
      });
      
      return rearranged.reduce((total, card) => {
        if (card.number === 'J' || card.number === 'Q' || card.number === 'K') {
          return total + 10;
        } else if (card.number === 'A') {
          return (total + 11 <= 21) ? total + 11 : total + 1;
        } else {
          return total + card.number;
        }
      }, 0);
    }
    
    stand() {
      if (!this.state.gameOver) {
        // Show dealer's 2nd card
        const randomCard = this.getRandomCard(this.state.deck);
        let deck = randomCard.updatedDeck;
        let dealer = this.state.dealer;
        dealer.cards.pop();
        dealer.cards.push(randomCard.randomCard);
        dealer.count = this.getCount(dealer.cards);
  
        // Keep drawing cards until count is 17 or more
        while(dealer.count < 17) {
          const draw = this.dealerDraw(dealer, deck);
          dealer = draw.dealer;
          deck = draw.updatedDeck;
        }
  
        if (dealer.count > 21) {
          this.setState({
            deck,
            dealer,
            wallet: this.state.wallet + this.state.currentBet * 2,
            gameOver: true,
            message: 'Cái ngoác cmnr! Bạn thắng'
          });
        } else {
          const winner = this.getWinner(dealer, this.state.player);
          let wallet = this.state.wallet;
          let message;
          
          if (winner === 'dealer') {
            message = 'Máy thắnng...';
          } else if (winner === 'player') {
            wallet += this.state.currentBet * 2;
            message = 'Chúc mừng! Bạn đã thắng';
          } else {
            wallet += this.state.currentBet;
            message = 'Push.';
          }
          
          this.setState({
            deck, 
            dealer,
            wallet,
            gameOver: true,
            message
          });
        } 
      } else {
        this.setState({ message: 'Thua cmnr! .' });
      }
    }
    
    getWinner(dealer, player) {
      if (dealer.count > player.count) {
        return 'dealer';
      } else if (dealer.count < player.count) {
        return 'player';
      } else {
        return 'push';
      }
    }
    
    inputChange(e) {
      const inputValue = +e.target.value;
      this.setState({inputValue});
    }
    
    handleKeyDown(e) {
      const enter = 13;
      // console.log(e.keyCode);
      
      if (e.keyCode === enter) {
        this.placeBet();
      }
    }
    
    componentWillMount() {
      this.startNewGame();
      const body = document.querySelector('body');
      body.addEventListener('keydown', this.handleKeyDown.bind(this));
    }
    
    render() {
      let dealerCount;
      const card1 = this.state.dealer.cards[0].number;
      const card2 = this.state.dealer.cards[1].number;
      if (card2) {
        dealerCount = this.state.dealer.count;
      } else {
        if (card1 === 'J' || card1 === 'Q' || card1 === 'K') {
          dealerCount = 10;
        } else if (card1 === 'A') {
          dealerCount = 11;
        } else {
          dealerCount = card1;
        }
      }
  
      return (
        <>
        <div id="blackjack">
          <div className="row">
        <div className="col-md-6">
          <div className="buttons">
            <button className="btn btn-outline-success" onClick={() => {this.startNewGame()}}>Bắt đầu chơi</button>
            <button className="btn btn-outline-info" onClick={() => {this.hit()}}>Rút Bài</button>
            <button className="btn btn-outline-primary" onClick={() => {this.stand()}}>Dừng</button>
          </div>
          
          <p>Tiền trong ví: ${ this.state.wallet }</p>
          {
            !this.state.currentBet ? 
            <div className="input-bet">            
              <form>
                <input type="number" name="bet" placeholder="" value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
              </form>
              <button className="btn btn-outline-dark" onClick={() => {this.placeBet()}}>Đặt Cược</button>
            </div>
            : null
          }
          {
            this.state.gameOver ?
            <div className="buttons">
              <button className="btn btn-outline-info" onClick={() => {this.startNewGame('continue')}}>Chơi tiếp</button>
            </div>
            : null
          }
          <p className="highlight">{ this.state.message }</p>
          </div>
          <div className="col-md-6">
          <p>Bạn đang có { this.state.player.count } điểm</p>
          <table className="cards">
            <tbody>
            <tr>
              { this.state.player.cards.map((card, i) => {
                return <Card key={i} number={card.number} suit={card.suit}/>
              }) }
            </tr>
            </tbody>
          </table>
          
          <p style={{marginTop:'1.5rem'}}>Máy đang có { this.state.dealer.count } điểm</p>
          <table className="cards">
            <tbody>
            <tr>
              { this.state.dealer.cards.map((card, i) => {
                return <Card key={i} number={card.number} suit={card.suit}/>;
              }) }
            </tr>
            </tbody>
          </table>
          
          
          </div>
          <button className="portfolio-item mx-auto btn-info" data-toggle="modal" data-target="#rules">luật chơi</button>
          <div className="portfolio-modal modal fade" id="rules" tabIndex={-1} role="dialog" aria-labelledby="rules" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content"  >
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">
                    <i className="fas fa-times" style={{position: 'relative',float: 'right', color: 'springgreen', fontSize: '4rem'}}/>
                  </span>
                </button>
                <div className="modal-body text-center">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        {/* Portfolio Modal - Title */}
                        <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Luật Chơi</h2>
                        {/* Icon Divider */}
                        <div className="divider-custom">
                          <div className="divider-custom-line" />
                          <div className="divider-custom-icon">
                            <i className="fas fa-star" />
                          </div>
                          <div className="divider-custom-line" />
                        </div>
                        {/* Portfolio Modal - Image */}
                        <img className="img-fluid rounded mb-5" src={blackjack} alt="" />
                        {/* Portfolio Modal - Text */}
                        <p className="mb-5">Trò chơi blackjack được xử lý với sáu cỗ bài (để ngăn đếm thẻ) và sau mỗi ván bài (hoặc một số tay bài), các lá bài được xáo trộn lại.

                          Nhà cái phải tiếp tục rút thẻ nếu giá trị của hai thẻ của anh ta là 17 điểm trở xuống, trong khi người chơi có thể dừng lại bất cứ lúc nào.

                          Người chơi có thể chia các thẻ của mình khi xử lý các thẻ có cùng giá trị (ví dụ: 6-6 hoặc J-Q), nhân đôi cơ hội của mình để chơi ván bài cụ thể đó. Ách chia chỉ nhận được một thẻ bổ sung.
                          </p>
                        <button className="btn btn-primary mt-4" href="#" data-dismiss="modal">
                          <i className="fas fa-times fa-fw" />
                          Close Window
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>
          </div>
          </div>
        </>
      );
    }
  };
  
  const Card = ({ number, suit }) => {
    const combo = (number) ? `${number}${suit}` : null;
    const color = (suit === '♦' || suit === '♥') ? 'card-red' : 'card';
    
    return (
      <td>
        <div className={color}>
          { combo }
        </div>
      </td>
    );
  };
  
