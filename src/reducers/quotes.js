export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return[...state, action.quote];

    case "REMOVE_QUOTE":
      return state.filter(function (obj) {
        console.log(obj, action);
        return obj.id !== action.quoteId;
      });

      
    case "UPVOTE_QUOTE":
      const copyState =[...state]
      const quote = copyState.find(q=>q.id===action.quoteId)
      const updatedQuote ={ ...quote, votes: quote.votes+1}
      const quoteIndex = copyState.indexOf(quote)
      copyState.splice(quoteIndex,1,updatedQuote)
      return copyState
    case "DOWNVOTE_QUOTE":
      const copy2 =[...state]
      const quote2 = copy2.find(q=>q.id===action.quoteId)
      let newVotes= null
      quote2.votes > 0 ? newVotes=quote2.votes-1 : newVotes=quote2.votes
      const updatedQuote2 ={ ...quote2, votes: newVotes}
      const quoteIndex2 = copy2.indexOf(quote2)
      copy2.splice(quoteIndex2,1,updatedQuote2)
      return copy2

    default:
      return state;
      
  }
};
