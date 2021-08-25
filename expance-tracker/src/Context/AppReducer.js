export default (state, action) => {
    switch (action.type) {

        case 'Delete_Transction':
            return {
                ...state,
                transction: state.transction.filter(transction => transction.id !== action.payload)
            }
            case 'Add_Transction':
                return{
                    ...state, 
                    transction:[action.payload, ...state.transction]
                }

        default:
            return state;

    }
}