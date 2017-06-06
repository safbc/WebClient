import { connect } from 'react-redux'
import TradeComponent from '../components/Trade'

const mapStateToProps = (state) => ({
	currentUser: state.currentUser
})

const Trade = connect(
  mapStateToProps
)(TradeComponent)

export default Trade

