import {
    SAVE_END_SET_TIMER,
    PRESENT_END_SET_TIMER,
    DISMISS_END_SET_TIMER,
    LOGIN_SUCCESS,
    UPDATE_SET_DATA_FROM_SERVER,
    SAVE_DEFAULT_METRIC,
    PRESENT_DEFAULT_METRIC,
    DISMISS_DEFAULT_METRIC
} from 'app/ActionTypes';

const defaultState = {
    defaultMetric: 'kgs',
    isEditingDefaultMetric: false,
    endSetTimerDuration: 30,
    editingEndSetTimer: false,
    syncDate: '',
};

const SettingsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SAVE_DEFAULT_METRIC: 
            return Object.assign({}, state, {
                defaultMetric: action.defaultMetric,
            });
        case PRESENT_DEFAULT_METRIC:
            return Object.assign({}, state, {
                isEditingDefaultMetric: true,
            }); 
        case DISMISS_DEFAULT_METRIC:
            return Object.assign({}, state, {
                isEditingDefaultMetric: false,
            });                        
        case SAVE_END_SET_TIMER:
            return Object.assign({}, state, {
                endSetTimerDuration: action.endSetTimerDuration,
            });
        case PRESENT_END_SET_TIMER:
            return Object.assign({}, state, {
                editingEndSetTimer: true,
            });
        case DISMISS_END_SET_TIMER:
            return Object.assign({}, state, {
                editingEndSetTimer: false,
            });
        case UPDATE_SET_DATA_FROM_SERVER:
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                syncDate: action.syncDate
            });
        default:
            return state;
    }
};

export default SettingsReducer;
