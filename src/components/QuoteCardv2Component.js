import React, {Component} from 'react';

export default class QuoteCard extends Component{
  

  

  render(){
    return (
      <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            {props.quote.content}
             <footer>- author <cite title="Source Title">{this.props.quote.author}</cite></footer> 
          </blockquote>
        </div>
        <div className="float-right">
          <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-primary"
            >
              Upvote
            </button>
            <button
              type="button"
              className="btn btn-secondary"
            >
              Downvote
            </button>
            <button
              type="button"
              className="btn btn-danger"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
         <div>Votes: {props.quote.votes}</div>
        </div>
      </div>
    </div>
   );

  }
 

}



