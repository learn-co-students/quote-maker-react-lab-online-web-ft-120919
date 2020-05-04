import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'
import { bindActionCreators } from 'redux'

class Quotes extends Component {
 
  renderQuotes = () => this.props.quotes.map((quote) => <QuoteCard 
    key={quote.id}
    upvoteQuote={upvoteQuote} 
    downvoteQuote={downvoteQuote} 
    removeQuote={removeQuote} 
    quote={{content: quote.content, author: quote.author, votes: quote.votes, id: quote.id}} 
  />)

  render() {
    //debugger 
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.renderQuotes()}
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes 
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     removeQuote,
//     upvoteQuote,
//     downvoteQuote
//   }, dispatch) 
// }

const mapDispatchToProps = dispatch => {
  return {
    upvoteQuote: (id) => dispatch(upvoteQuote(id)),
    downvoteQuote: (id) => dispatch(downvoteQuote(id)),
    removeQuote: (id) => dispatch(removeQuote(id))
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
