import { connect } from 'react-redux'
import RtgsComponent from '../components/Rtgs'

const mapStateToProps = (state) => ({
	currentUser: state.currentUser
})

const Rtgs = connect(
  mapStateToProps
)(RtgsComponent)

export default Rtgs

