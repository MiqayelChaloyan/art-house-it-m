import { combineReducers, configureStore } from '@reduxjs/toolkit';

/** call reducers */
import stateModal from './modal_reducer';
import statePlayer from './player_reducer';

const rootReducer = combineReducers({
    modal: stateModal,
    player: statePlayer,
})

export default configureStore({ reducer : rootReducer});