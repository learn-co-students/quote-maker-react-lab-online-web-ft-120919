export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return state.concat(action.quote)

    case 'REMOVE_QUOTE':
      return state.filter((quote) => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':  
      return state.map((quote) => {
        if (quote.id !== action.quoteId) {
          return quote
        } else {
          return {...quote, votes: quote.votes += 1 }
        }
      }) 

    case 'DOWNVOTE_QUOTE':
      return state.map((quote) => {
        if (quote.id !== action.quoteId) {
          return quote
        } else {
          return quote.votes !== 0 ? {...quote, votes: quote.votes -= 1 } : quote
        }
      }) 

    default:
      return state
  }
}
