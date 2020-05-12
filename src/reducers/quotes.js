import uuid from 'uuid'

export default (state = [], action) => {
  let quote
  let quotes
  //const id = uuid()
  // console.log(id)

  switch (action.type) {

    case 'ADD_QUOTE':
      //debugger
      return [...state, {...action.quote}]

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      console.log('BEGIN UPVOTE QUOTE')
      quote = state.find(q => q.id === action.quoteId)
      console.log('on quote: ')
      console.log(quote)
      quotes = state.filter(quote => quote.id !== action.quoteId)
      console.log('new array: ')
      console.log(quotes)
      console.log('result:')
      console.log([...quotes, {...quote, votes: parseInt(quote.votes) + 1}])
      return [...quotes, {...quote, votes: parseInt(quote.votes) + 1}]

    case 'DOWNVOTE_QUOTE':
      quote = state.find(q => q.id === action.quoteId)
      quotes = state.filter(quote => quote.id !== action.quoteId)
      if (quote.votes === 0 || quote.votes === '0') {
        return [...quotes, {...quote, votes: parseInt(quote.votes)}]
      } else {
        return [...quotes, {...quote, votes: parseInt(quote.votes) - 1}]
      }

    default:
      return state

  }
}
