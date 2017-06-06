import * as constants from '../actionConstants'

const menu = (state, action) => {
  switch (action.type) {
    case constants.OPEN_MENU:
      return {
        isOpen: true
      }
    case constants.CLOSE_MENU:
      return {
        isOpen: false
      }
    default:
			{
				if(!state){
					return {
            isOpen: false
          }
				} else {
					return state
				}
		}
	}
}

export default menu
