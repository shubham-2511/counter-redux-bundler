export default {
    name: 'todo',

    reducer: (state = [{task: "buy milk", status: false}, {task: "buy bread", status: true}], action) => {
        switch(action.type) {
            default:
                return state
        }
    },

    selectTodo: state => state.todo,

    selectActiveTodo: state => state.todo.filter(({status}) => status),

    selectCompletedTodo: state => state.todo.filter(({status}) => !status),

    // init: store => {
    //     store.selectTodo()
    //     store.selectActiveTodo()
    //     store.selectActiveTodo()
    // }
}