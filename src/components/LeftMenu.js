import React from 'react'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'
import Drawer from 'material-ui/Drawer'
import {List, ListItem} from 'material-ui/List'
import ActionHome from 'material-ui/svg-icons/action/home'
import ActionDashboard from 'material-ui/svg-icons/action/dashboard'
import ActionAssessment from 'material-ui/svg-icons/action/assessment'

const LeftMenuComponent = withRouter(({menuIsOpen, closeMenu, history}) => {
	return (
    <div>
      <Drawer open={menuIsOpen}>
        <List>
          <ListItem primaryText="Home" leftIcon={<ActionHome />} onClick={() => closeMenu(history, '/home')}/>
          <ListItem primaryText="RTGS demo" leftIcon={<ActionDashboard />} onClick={() => closeMenu(history, '/create')}/>
          <ListItem primaryText="Trading demo" leftIcon={<ActionAssessment />} onClick={() => closeMenu(history, '/trade')}/>
        </List>

      </Drawer>
    </div>
	)
})

LeftMenuComponent.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired
};

export default LeftMenuComponent


