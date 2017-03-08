export default function (state = null, action) {
  switch (action.type) {
    case 'MODAL@SET':
      return action.data;
    case 'MODAL@CLEAR':
      return null;
    default:
      return state;
  }
}
