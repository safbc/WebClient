import { connect } from 'react-redux'
import CreateComponent from '../components/Create'

const mapStateToProps = (state) => ({
	currentUser: state.currentUser
})

const Create = connect(
  mapStateToProps
)(CreateComponent)

export default Create

