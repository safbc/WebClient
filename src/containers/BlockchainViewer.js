import { connect } from 'react-redux'
import BlockchainViewerComponent from '../components/BlockchainViewer'

const mapStateToProps = (state) => ({
	currentUser: state.currentUser
})

const BlockchainViewer = connect(
  mapStateToProps
)(BlockchainViewerComponent)

export default BlockchainViewer

