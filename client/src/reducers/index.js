import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import meas from './measurement';
import settings from './settings';
import videos from './videos';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  measurement: meas,
  settings: settings,
  videos: videos
});
