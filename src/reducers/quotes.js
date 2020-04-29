export default (state = [], action) => {
  // let idx
  // debugger
  switch (action.type) {
    
    case 'ADD_QUOTE':
      return state.concat(action.quote);
    case 'REMOVE_QUOTE':
      console.log('new', newState)

        // idx = state.findIndex(quoteObj => quoteObj.id === action.id);
        // const result = words.filter(word => word.length > 6);
        // console.log('idx', newState)
        const newState = state.filter( quoteObj => quoteObj.id!==action.quoteId)
        return newState
      case 'UPVOTE_QUOTE':
        console.log('upvote')
        const quoteObj =state.find(element => element.id===action.quoteId)
        console.log('quoteObj', quoteObj)
        console.log('action', action)
        quoteObj.votes += 1
        console.log('quoteObj', quoteObj)
        // {...dog, age: dog.age + 1}
        return [...state]
    case 'DOWNVOTE_QUOTE':
      console.log('action', action)
      const qObj =state.find(element => element.id===action.quoteId)
      console.log('quoteObj', qObj)
      if (qObj.votes===0) {
        qObj.votes = 0
      } else {
        qObj.votes -= 1
      }
      return [...state]
       
    default:
      return state
  }
}


// idx = state.books.findIndex(book => book.id === action.id);
//       return {
//         ...state,
//         authors: [...state.authors],
//         books: [...state.books.slice(0, idx), ...state.books.slice(idx + 1)]
//       };