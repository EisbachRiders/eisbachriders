import React from 'react'
import { useTranslation } from 'react-i18next'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import Container from '../ui/Container'
import Link from '../ui/Link'
import faq from '../../data/faq.json'

const useStyles = makeStyles(theme => ({
  header: {
    textTransform: 'capitalize',
    marginBottom: 30,
  },
  title: {
    textTransform: 'capitalize',
  },
  link: {
    paddingBottom: 5,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}))

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel)

const ExpansionPanelSummary = withStyles(theme => ({
  root: {
    backgroundColor: theme.status.greyBlue,
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
}))(MuiExpansionPanelSummary)

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: 30,
    paddingLeft: 60,
    display: 'flex',
    flexDirection: 'column',
  },
}))(MuiExpansionPanelDetails)

export default function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('panel1')
  const classes = useStyles()
  const { t } = useTranslation()

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <Container>
      <Typography
        variant="h5"
        component="h1"
        align="center"
        className={classes.header}
      >
        {t('faq.faq')}
      </Typography>
      {Object.keys(faq).map((elem, idx) => (
        <ExpansionPanel
          key={`faq_${elem}`}
          square
          expanded={expanded === `panel${idx}`}
          onChange={handleChange(`panel${idx}`)}
        >
          <ExpansionPanelSummary
            aria-controls={`panel${idx}d-content`}
            id={`panel${idx}d-header`}
          >
            <Typography className={classes.title}>{faq[elem].title}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {Object.keys(faq[elem].subnav).map(item => (
              <Link
                to={`/faq/${elem}/${item}/`}
                className={classes.link}
                key={`link${item}`}
              >
                {faq[elem].subnav[item].title}
              </Link>
            ))}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </Container>
  )
}
