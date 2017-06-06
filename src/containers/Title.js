import { connect } from 'react-redux'
import TitleComponent from '../components/Title'
import { openMenu } from '../actionCreators' 

const mapDispatchToProps = {
  openMenu : openMenu
}

const Title = connect(
  null,
  mapDispatchToProps
)(TitleComponent)

export default Title

