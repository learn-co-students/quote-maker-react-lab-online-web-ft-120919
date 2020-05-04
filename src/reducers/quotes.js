export default (state = [], action) => {
  let idx;
  let matchQuote;
  console.log("inside reducer")

  switch(action.type) {
    case 'ADD_QUOTE':
      //console.log("new state: ", [...state, action.quote])
      return [...state, action.quote]
    
    case 'REMOVE_QUOTE':
      idx = state.findIndex( quote => quote.id === action.quoteId )
      return [...state.slice(0, idx), ...state.slice(idx + 1)]
    
    case 'UPVOTE_QUOTE':
      console.log("inside upvoteQuote")
      matchQuote = state.find( quote => quote.id === action.quoteId )
      matchQuote.votes = matchQuote.votes + 1
      return state 
    
    case 'DOWNVOTE_QUOTE':
      matchQuote = state.find( quote => quote.id === action.quoteId )
      if (matchQuote.votes > 0) {
        matchQuote.votes = matchQuote.votes - 1
      }
      return state

    default:
      return state
  }
}

// export default (state = [], action) => {
//   let index;
//   let quote;
//  console.log('a')
//   switch (action.type) {

//     case 'ADD_QUOTE':
//       return state.concat(action.quote);

//     case 'REMOVE_QUOTE':
//       return state.filter(quote => quote.id !== action.quoteId);

//     case 'UPVOTE_QUOTE':
//       index = state.findIndex(quote => quote.id === action.quoteId);
//       quote = state[index];

//       return [
//         ...state.slice(0, index),
//         Object.assign({}, quote, { votes: quote.votes += 1 }),
//         ...state.slice(index + 1)
//       ];

//     case 'DOWNVOTE_QUOTE':
//       index = state.findIndex(quote => quote.id === action.quoteId);
//       quote = state[index];
//       if (quote.votes > 0) {
//         return [
//           ...state.slice(0, index),
//           Object.assign({}, quote, { votes: quote.votes -= 1 }),
//           ...state.slice(index + 1)
//         ];
//       }
//       return state;

//     default: 
//       return state;
//   }
// } 