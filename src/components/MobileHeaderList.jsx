import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ArrowIcon from '@material-ui/icons/KeyboardArrowRight'

const styles = theme => ({
  list: {
    width: 200,
  },
  text: {
    textTransform: 'uppercase',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 30,
    paddingRight: 30,
    color: theme.status.greyDk,
  },
  icon: {
    color: theme.status.grey,
  },
})

const MobileHeaderList = props => {
  const { links, linkLabels, classes } = props

  return (
    <div className={classes.list}>
      <List component="nav">
        {links.map((link, idx) => (
          <Link to={`/${link}/`} key={`mobileLink_${link}`}>
            <ListItem button divider dense>
              <ListItemText
                disableTypography
                className={classes.text}
                primary={linkLabels[idx]}
              />
              <ArrowIcon className={classes.icon} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  )
}

MobileHeaderList.propTypes = {
  classes: PropTypes.object.isRequired,
  linkLabels: PropTypes.array.isRequired,
  links: PropTypes.array.isRequired,
}

export default withStyles(styles)(MobileHeaderList)
