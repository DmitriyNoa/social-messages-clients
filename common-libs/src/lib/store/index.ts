import { createStore, applyMiddleware} from 'redux';
import { rootReducers } from "../reducers";
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import { rootSaga } from '../sagas/index';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducers,
    applyMiddleware(
        sagaMiddleware,
        createLogger(),
    ),
);

sagaMiddleware.run(rootSaga);

export {
    store,
}

