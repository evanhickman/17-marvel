import { combineReducers } from 'redux';
import characterData from './reducer/character-data';
import comicData from './reducer/comic-data';
// import modal from './reducer/modal';
import seriesInfo from './reducer/series-info';

export default combineReducers({
  characterData,
  comicData,
  modal,
  seriesInfo,
});
