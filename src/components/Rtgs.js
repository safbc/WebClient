import React from 'react'
import PropTypes from 'prop-types'

const RtgsComponent = ({currentUser}) => {

	return (
		<div>
      This is the RTGS demo page
		</div>
	)
}

RtgsComponent.propTypes = {
  currentUser: PropTypes.object.isRequired
};

export default RtgsComponent


