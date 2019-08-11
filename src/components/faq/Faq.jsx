import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { useTranslation } from 'react-i18next'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/styles'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import Container from '../ui/Container'
import faq from '../../data/faq.json'

const useStyles = makeStyles(theme => ({
  header: {
    textTransform: 'capitalize',
    marginBottom: 30,
  },
  title: {
    textTransform: 'capitalize',
  },
  sectionTitle: {
    textTransform: 'capitalize',
    marginBottom: 15,
  },
  expansionPanelContainer: {
    marginBottom: 30,
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
  const [expanded, setExpanded] = React.useState(null)
  const classes = useStyles()
  const { t } = useTranslation()

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          allMdx {
            edges {
              node {
                id
                frontmatter {
                  label
                }
                body
              }
            }
          }
        }
      `}
      render={data => {
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
            {Object.keys(faq).map(elem => (
              <div key={`section${elem}`}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.sectionTitle}
                >
                  {elem}
                </Typography>
                <div className={classes.expansionPanelContainer}>
                  {Object.keys(faq[elem].subnav).map((item, idx) => (
                    <ExpansionPanel
                      key={`faq_${elem}${idx}`}
                      square
                      expanded={expanded === `panel${elem}${idx}`}
                      onChange={handleChange(`panel${elem}${idx}`)}
                      href={`#${elem}/${item}`}
                    >
                      <ExpansionPanelSummary
                        aria-controls={`panel${elem}${idx}d-content`}
                        id={`panel${elem}${idx}d-header`}
                      >
                        <Typography className={classes.title}>
                          {faq[elem].subnav[item].title}
                        </Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <MDXRenderer>
                          {
                            data.allMdx.edges.find(
                              x => x.node.frontmatter.label === item
                            ).node.body
                          }
                        </MDXRenderer>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  ))}
                </div>
              </div>
            ))}
          </Container>
        )
      }}
    />
  )
}

// "products": {
//   "title": "products",
//   "subnav": {
//     "singleFin": {
//       "title": "I broke/lost one of my fins. Do you sell center/side fins separately?"
//     },
//     "finTypes": {
//       "title": "What is the difference between honeycomb and plastic fins?"
//     },
//     "finSystem": {
//       "title": "Which system do I have on my surfboard? FCS, Future, FCS2?"
//     },
//     "thruster": {
//       "title": "What is a thruster set?"
//     },
//     "quad": {
//       "title": "What is a quad set?"
//     },
//     "g": {
//       "title": "What is the difference between G3, G5, G7?"
//     },
//     "glgx": {
//       "title": "What is the difference between GL and GX?"
//     },
//     "leash": {
//       "title": "What is the difference between a curled and straight leash?"
//     },
//     "leashLength": {
//       "title": "What length leash do I need?"
//     },
//     "wax": {
//       "title": "How often should I use surf wax?"
//     },
//     "waxExpire": {
//       "title": "Does surf wax expire?"
//     }
//   }
// },
