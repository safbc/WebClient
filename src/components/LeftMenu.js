import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import {List, ListItem} from 'material-ui/List'
import ActionHome from 'material-ui/svg-icons/action/home'
import ActionDashboard from 'material-ui/svg-icons/action/dashboard'
import ActionAssessment from 'material-ui/svg-icons/action/assessment'
import ActionViewWeek from 'material-ui/svg-icons/action/label'
import ActionSettings from 'material-ui/svg-icons/action/settings'

const LeftMenuComponent = withRouter(({history}) => {
	return (
    <List>
      <ListItem primaryText="Home" leftIcon={<ActionHome />} onClick={() => history.push('/home')}/>
      <ListItem primaryText="RTGS demo" leftIcon={<ActionDashboard />} onClick={() => history.push('/rtgs')}/>
      <ListItem primaryText="Trading demo" leftIcon={<ActionAssessment />} onClick={() => history.push('/trade')}/>
      <ListItem primaryText="Blockchain viewer" leftIcon={<ActionViewWeek />} onClick={() => history.push('/blockchainViewer')}/>
      <ListItem primaryText="Settings" leftIcon={<ActionSettings />} onClick={() => history.push('/settings')}/>
    </List>
	)
})

LeftMenuComponent.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired
};

export default LeftMenuComponent
