import { connect } from "redux-bundler-react";

export default connect(
    'selectCount',
    'doIncrement',
    'doDecrement',
    ({count, doIncrement, doDecrement}) => (
        <div>
            <h1>{count}</h1>
            <button onClick={() => doIncrement()}>Increment</button>
            <button onClick={() => doDecrement()}>Decrement</button>
        </div>
    )
)