import React from 'react'
import PropTypes from 'prop-types'

const CreateComponent = ({currentUser}) => {

	return (
		<div>
      This is the asset creation page
		</div>
	)
}

CreateComponent.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default CreateComponent;


