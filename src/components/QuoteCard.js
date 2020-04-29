import React from 'react';
import { removeQuote } from '../actions/quotes';

const QuoteCard = ({quote, upvoteQuote, downvoteQuote}) =>
  <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          {/* {console.log(props)}
          {
  quote: { content: 'test quote', author: 'test author', votes: 0, id: 5 }
} */}
          <p>{quote.content} </p>
          
          <footer>- author <cite title="Source Title">{quote.author}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            // onClick={'onclick'}
            onClick={() => upvoteQuote(quote.id)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => downvoteQuote(quote.id)}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => removeQuote(quote.id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        Votes: {quote.votes}
      </div>
    </div>
  </div>;

export default QuoteCard;
