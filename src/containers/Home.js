import { connect } from 'react-redux'
import HomeComponent from '../components/Home'

const mapStateToProps = (state) => ({
	currentUser: state.currentUser
})

const Home = connect(
  mapStateToProps
)(HomeComponent)

export default Home

