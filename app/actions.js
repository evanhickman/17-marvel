export function seriesInfoLoadComplete(data) {
  return {
    type: 'SERIES_INFO@LOAD_COMPLETE',
    data,
  };
}

export function charactersFindAllComplete(data) {
  return {
    type: 'CHARACTERS@FIND_ALL_COMPLETE',
    data,
  };
}

export function seriesInfoSearch(name) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${name}`)
    .then(res => res.json())
    .then((data) => {
      const characters = data.data.results;
    });
    dispatch(charactersFindForId(characters));
  };
}

export function charactersFindForId(id) {
  return (dispatch) => {
    fetch(`http://marvel-is-broke.herokuapp.com/series?limit=1&titleStartsWith=${id}`)
    .then(res => res.json())
    .then((data) => {
      const characters = data.data.results;
    });
    dispatch(charactersFindForId(characters));
  };
}
