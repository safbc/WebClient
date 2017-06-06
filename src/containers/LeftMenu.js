import { connect } from 'react-redux'
import LeftMenuComponent from '../components/LeftMenu'
import { closeMenu } from '../actionCreators' 

const mapStateToProps = (state) => {
  return ({
      menuIsOpen: state.menu.isOpen
    }
  )
}

const mapDispatchToProps = {
  closeMenu : closeMenu
}


const LeftMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(LeftMenuComponent)

export default LeftMenu

