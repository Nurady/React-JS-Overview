/* 
    Tahapan membuat redux
    1. create Store : adalah sebuah value atau state yang bisa di update hanya oleh reducer
    2. create Reducer : untuk merubah value atau state pada Store,function untuk merubah value atau state pada store
    3. create Dispatch: adalah Action proses pemanggilan Reducer, agar Reducer dapat bekerja, yang melakukan action
    4. Subcription: Pemanggilan Store yang diperlukan
*/

const initialState = {
    value: 0,
    age: 17
}

const redux = require('redux');
const createStore = redux.createStore;

// Reducer
const rootReducer = (state = initialState, action) => {
    // console.log(action)
    // if(action.type === 'ADD_AGE') {
    //     return {
    //         ...state, // agar state awal value tidak terhapus, harus tetap menggunakan ...state
    //         age : state.age + 1
    //     }
    // }
    // if(action.type === 'CHANGE_VALUE') {
    //     return {
    //         ...state, // agar state awal value tidak terhapus, harus tetap menggunakan ...state
    //         value : state.value + action.newValue
    //     }
    // }
    // return state;
    switch(action.type) {
        case 'ADD_AGE':
            return {
                ...state, 
                age : state.age + 1
            }
        case 'CHANGE_VALUE':
            return {
                ...state, 
                value : state.value + action.newValue
            }
        default:
            return state;   
    }
}

// Store
const store = createStore(rootReducer);
console.log(store.getState()); // nilai dari initialState

// Subscription
store.subscribe(() => {
    console.log('Store Change: ', store.getState())
})

// dispatch, adalah action untuk memanggil list task yang ada pada REDUCER
store.dispatch({ type: 'ADD_AGE' })
store.dispatch({ type: 'CHANGE_VALUE', newValue: 12 })
console.log(store.getState());