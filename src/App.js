import React from 'react';
import Navbar from './components/Navbar';
// import QuoteList from './components/QuoteList';
// import QuoteForm from './components/QuoteForm';
import QuoteCard from "./components/QuoteCard";
import axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: null
    };
    this.getQuoteFromApi = this.getQuoteFromApi.bind(this);
  }

  // componentDidMount() {
  //   this.getQuoteFromApi();
  // }

  getQuoteFromApi() {
    const url = 'https://simpsons-quotes-api.herokuapp.com/quotes';
    //Calling the API
    axios
      .get(url)
      // DATA from the received RESPONSE
      .then(response => response.data)
      //DATA to update the STATE
      .then(simpsonsQuote => {
        this.setState({
          character: simpsonsQuote[0]
        });
        console.log("data", simpsonsQuote);
      });
  }

  
  render() {
  return (
    <div className="App">
      <Navbar />
      <div className="quote-card">
          <button
            className="new-quote"
            type="button"
            onClick={this.getQuoteFromApi}
          >
            Let's get another quote!
          </button>
          {this.state.character ? (
            <QuoteCard character={this.state.character} />
          ) : (
            <span>LOADING..</span>
          )}
        </div>
      </div>
    );
  }
}

export default App;


