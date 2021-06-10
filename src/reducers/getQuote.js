export const getQuote = (state= null, action) => {
	switch(action.type){
			case 'GET_QUOTE':
				return action.payload;
				break;
			default:
			return state
			break;
	}
}