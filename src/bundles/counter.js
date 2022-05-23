export default {
    name: 'counter',

    reducer: (state = {count: 8}, action) => {
        switch ( action.type ) {
            case 'INCREMENT':
                return {...state, count: state.count+1};
            case 'DECREMENT':
                return {...state, count: state.count-1};
            default:
                return state;
        }
    },

    selectCount: state => state.counter.count,

    doIncrement: () => ({
        type: 'INCREMENT'
    }),

    doDecrement: () => ({
        type: 'DECREMENT'
    }),

    init: store => {
        store.selectCount()
        store.doIncrement()
        store.doDecrement()
    }
}