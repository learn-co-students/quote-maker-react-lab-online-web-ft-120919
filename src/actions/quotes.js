export const addQuote = quote => {
    // console.log('quote', quote)
    return {
      type: 'ADD_QUOTE',
      quote: Object.assign({}, quote, { votes: 0 })
    };
  };

  export const removeQuote = quoteId => {
    console.log('quote', quoteId)
    return {
      type: 'REMOVE_QUOTE',
      quoteId
    };
  };

  export const upvoteQuote = quoteId => {
    return {
      type: 'UPVOTE_QUOTE',
      quoteId
    };
  };

  export const downvoteQuote = quoteId => {
    return {
      type: 'DOWNVOTE_QUOTE',
      quoteId
    };
  };