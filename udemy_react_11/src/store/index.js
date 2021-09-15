import { createStore } from 'redux';


const counterReducer = (state = {counter: 0}, action) => {

    if (action.type === 'increase') {
        return {
            counter: state.counter++,
        };
    }
    
    if (action.type === 'decrease') {
        return {
            counter: state.counter--,
        };
    }

    return state;
    
};

const store = createStore(counterReducer);

export default store;


const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({type: 'increase',})
store.dispatch({type: 'decrease',})