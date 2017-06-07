import React from 'react'
import PropTypes from 'prop-types'
import AutoComplete from 'material-ui/AutoComplete'

const HomeComponent = ({currentUser, selectedBlockchain, updateBlockchainSelection}) => {

  const blockchains = ['Ethereum (Quorum)', 'Hyperledger (Fabric)', 'Corda']

	return (
		<div>
      <div>Welcome to the SA Financial Blockchain viewer.  Please select the type of blockchain you wish to connect to</div>
      <div>
        <AutoComplete
          floatingLabelText="Blockchain selection"
          filter={AutoComplete.noFilter}
          openOnFocus={true}
          dataSource={blockchains}
          onNewRequest={(selectedBlockchain, index) => updateBlockchainSelection(selectedBlockchain)}
          searchText={selectedBlockchain}
        />
      </div>
		</div>
	)
}

export default HomeComponent


