import { combineReducers } from 'redux';
import characterData from './reducer/character-data';
import issueData from './reducer/issue-data';
import modal from './reducer/modal';
import seriesInfo from './reducer/series-info';

export default combineReducers({
  characterData,
  issueData,
  modal,
  seriesInfo,
});
