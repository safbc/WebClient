import * as actions from '../actions'

export function openMenu() {
  return function(dispatch) {
    dispatch(actions.openMenu());
  }
}

export function closeMenu(history, url) {
  history.push(url)
  return function(dispatch) {
    dispatch(actions.closeMenu());
  }
}

