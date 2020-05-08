export default (state = [], action) => {
	let idx
	let newQuote
	switch (action.type){
		case 'ADD_QUOTE':
			return [...state, action.quote]
		case 'REMOVE_QUOTE':
			idx = state.findIndex(quote => quote.id === action.quoteId)
			return [...state.slice(0, idx), ...state.slice(idx + 1)]
		case 'UPVOTE_QUOTE':
			idx = state.findIndex(quote => quote.id === action.quoteId)
			newQuote = state[idx]
			newQuote.votes = state[idx].votes + 1
			return [...state.slice(0, idx), newQuote ,...state.slice(idx + 1)]
		case 'DOWNVOTE_QUOTE':
			idx = state.findIndex(quote => quote.id === action.quoteId)
			newQuote = state[idx]
			newQuote.votes = state[idx].votes >= 1 ? state[idx].votes - 1 : 0
			return [...state.slice(0, idx), newQuote ,...state.slice(idx + 1)]
		default:
			return state
	}
}
