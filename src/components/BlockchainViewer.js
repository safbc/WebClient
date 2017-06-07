import React from 'react'
import PropTypes from 'prop-types'

const BlockchainViewerComponent = ({currentUser}) => {

	return (
		<div>
      This is the Blockchain viewer (probably Cakewalk)
		</div>
	)
}

BlockchainViewerComponent.propTypes = {
  currentUser: PropTypes.object.isRequired
};

export default BlockchainViewerComponent
