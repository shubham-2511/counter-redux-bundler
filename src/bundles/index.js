import { composeBundles } from "redux-bundler";
import counterBundle from './counter';
import todoBundle from './todo';

export default composeBundles(
    counterBundle,
    todoBundle
)