import reducer from '../app/reducer';

module('reducer', () => {
  test('it exists', (assert) => {
    assert.ok(reducer, 'reducer exists');
  });

  test('it can load series info', (assert) => {
    const oldState = {
      characterData: [],
      issueData: [],
      modal: null,
      seriesInfo: null,
    };
    const actionOne = { type: 'SERIES_INFO@LOAD_COMPLETE', data: { name: 'Spidermans' } };
    const expectedState = { seriesInfo: { name: 'Spidermans' }, issueData: [], characterData: [], modal: null };
    assert.deepEqual(reducer(oldState, actionOne), expectedState);
  });

  test('it replaces old series info with new series info', (assert) => {
    const oldState = {
      characterData: [],
      issueData: [],
      modal: null,
      seriesInfo: { name: 'Thor' },
    };
    const actionOne = { type: 'SERIES_INFO@LOAD_COMPLETE', data: { name: 'Spidermans' } };
    const expectedState = { seriesInfo: { name: 'Spidermans' }, issueData: [], characterData: [], modal: null };
    assert.deepEqual(reducer(oldState, actionOne), expectedState);
  });

  test('it loads character data', (assert) => {
    const oldState = {
      characterData: [{}],
      issueData: [],
      modal: null,
      seriesInfo: null,
    };
    const actionOne = { type: 'CHARACTERS@FIND_ALL_COMPLETE', data: [{ name: 'Hulk' }] };
    const expectedState = { seriesInfo: null, issueData: [], characterData: [{ name: 'Hulk' }], modal: null };
    assert.deepEqual(reducer(oldState, actionOne), expectedState);
  });

  test('it loads comic data', (assert) => {
    const oldState = {
      characterData: [],
      issueData: [],
      modal: null,
      seriesInfo: null,
    };
    const actionOne = { type: 'COMICS@FIND_ALL_COMPLETE', data: [{ name: 'Captain America' }] };
    const expectedState = { seriesInfo: null, issueData: [{ name: 'Captain America' }], characterData: [], modal: null };
    assert.deepEqual(reducer(oldState, actionOne), expectedState);
  });

  test('it loads modal data', (assert) => {
    const oldState = {
      characterData: [],
      issueData: [],
      modal: null,
      seriesInfo: null,
    };
    const actionOne = { type: 'MODAL@SET', data: [{ description: 'Hello' }] };
    const expectedState = { seriesInfo: null, issueData: [], characterData: [], modal: [{ description: 'Hello' }] };
    assert.deepEqual(reducer(oldState, actionOne), expectedState);
  });

  test('it clears modal data', (assert) => {
    const oldState = {
      characterData: [],
      issueData: [],
      modal: { description: 'Hello' },
      seriesInfo: null,
    };
    const actionOne = { type: 'MODAL@CLEAR', data: null };
    const expectedState = { seriesInfo: null, issueData: [], characterData: [], modal: null };
    assert.deepEqual(reducer(oldState, actionOne), expectedState);
  });
});
