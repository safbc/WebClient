import React from 'react'
import AppBar from 'material-ui/AppBar'

const TitleComponent = ({openMenu}) => (
  <AppBar
    title="Springblock common user interface for Blockchain asset creation and trading"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    onLeftIconButtonTouchTap={openMenu}
  />
);

export default TitleComponent
