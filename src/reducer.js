//where all the logic of the data layer goes

// import { red } from "@material-ui/core/colors";

export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    console.log(action);

    switch  (action.type) {
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return { 
                ...state,
                basket:  [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            //Logic for Removing item from basket

            // we cloned the basket
            let newBasket = [...state.basket];

            //  we check to see if product exists finding its index
            const index = state.basket.findIndex((basketItem) => a=basketItem.id === action.id);
            
            if(index >= 0 ) {
                // item exists in basket, remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    'Cant remove product (id: ${action.id}) as its not found'
                );
            }
             
            return { ...state, basket: newBasket };

        default:
            return state;
    }
};

export default reducer;
