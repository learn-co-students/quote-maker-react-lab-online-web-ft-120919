import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';

class QuoteForm extends Component {

  state = {content: '', author: ''  };

  handleOnChange = event => {
    this.setState( {
      [event.target.name] : event.target.value
    });
  }

  handleOnSubmit = event => {
    // Handle Form Submit event default
    event.preventDefault();
    // Create quote object from state
    /* let quote = {content: this.state.content, author:this.state.author, id:uuid()} */
    let quote = {...this.state, id:uuid()};
    // Pass quote object to action creator
    this.props.addQuote(quote);
    // Update component state to return to default state
    this.setState({
      content: "", author: ""
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={(event) => this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        onChange={(event) => this.handleOnChange(event)}
                        className="form-control"
                        value={this.state.content}
                        name="content"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        onChange={(event) => this.handleOnChange(event)}
                        className="form-control"
                        type="text"
                        value={this.state.author}
                        name="author"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
//     addQuote: q => dispatch(addQuote(q)) ; // alternate return
return {
    addQuote: q => dispatch({type: 'ADD_QUOTE', quote: q })
  }
}
// we now have this.props.addQuote

//add arguments to connect as needed
export default connect(null, mapDispatchToProps)(QuoteForm);
