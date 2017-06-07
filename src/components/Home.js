import React from 'react'
import PropTypes from 'prop-types'

const HomeComponent = ({currentUser}) => {
	return (
		<div>
      This is the home page
		</div>
	)
}

HomeComponent.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default HomeComponent;


