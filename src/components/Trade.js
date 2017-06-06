import React from 'react'
import PropTypes from 'prop-types'

const TradeComponent = ({currentUser}) => {

	return (
		<div>
      This is the trading page
		</div>
	)
}

TradeComponent.propTypes = {
  currentUser: PropTypes.object.isRequired,
};

export default TradeComponent;


