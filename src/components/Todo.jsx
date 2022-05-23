import { connect } from "redux-bundler-react";

export default connect(
    'selectTodo',

    (({todo}) => (
        <div>
            {
                JSON.stringify(todo)
            }
            {
                todo.map(({task}) => <h1>{task}</h1>)
            }
        </div>
    ))
)