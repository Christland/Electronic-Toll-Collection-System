import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./reducers";

const middlewares = [ReduxThunk];

export default createStore(
	reducers,
	{ payment: { payments: [] } },
	applyMiddleware(...middlewares)
);
