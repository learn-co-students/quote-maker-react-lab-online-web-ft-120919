import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote} from '../actions/quotes'
import {upvoteQuote} from '../actions/quotes'
import {downvoteQuote} from '../actions/quotes'


class Quotes extends Component {

  render() {
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
              {this.props.quotes.map((quote, index) => <QuoteCard quote={quote} removeQuote={this.props.rmQuote} upvoteQuote={this.props.upQuote} downvoteQuote={this.props.downQuote} key={index} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return state
}

const mapDispatchToProps = dispatch => {
	return {
		upQuote: id => dispatch(upvoteQuote(id)),
		downQuote: id => dispatch(downvoteQuote(id)),
		rmQuote: id => dispatch(removeQuote(id))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
