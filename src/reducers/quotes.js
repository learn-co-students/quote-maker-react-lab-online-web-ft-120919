export default (state = [], action) => {
  const copyOfState = [...state]
  let quote = {}
  let copyOfQuote = {}
  let index = null

  switch(action.type) {
    case ("ADD_QUOTE"):
      return [...state, action.quote]
    case ("REMOVE_QUOTE"):
      return state.filter(quote => quote.id !== action.quoteId)
    case ("UPVOTE_QUOTE"):
      quote = copyOfState.find(quote => quote.id === action.quoteId)
      copyOfQuote = {
        ...quote,
        votes: quote.votes + 1
      }
      index = copyOfState.indexOf(quote)
      copyOfState.splice(index, 1, copyOfQuote)
      return copyOfState
    case ("DOWNVOTE_QUOTE"):
      quote = copyOfState.find(quote => quote.id === action.quoteId)
      if (quote.votes !== 0) {
        copyOfQuote = {
          ...quote,
          votes: quote.votes - 1
        }
        index = copyOfState.indexOf(quote)
        copyOfState.splice(index, 1, copyOfQuote)
      return copyOfState
      }
      return copyOfState
    default:
      return state 
  }
}