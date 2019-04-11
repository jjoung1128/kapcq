import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { Grid, Typography } from '@material-ui/core'

export const InformationPageTemplate = ({ title }) => {

  return (
    <div>
        <Grid container style={{backgroundColor: "rgba(230, 202, 144, 0.5)"}}>
            <Grid item sm={1}></Grid>
            <Grid item sm={10}>
                <Typography variant="display3" style={{color: "#DFAC44", paddingTop: "10rem"}}>{title}</Typography>
            </Grid>
            <Grid item sm={1}></Grid>
        </Grid>
    </div>    
  )
}

InformationPageTemplate.propTypes = {
  title: PropTypes.string.isRequired
}

const InformationPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <InformationPageTemplate
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

InformationPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default InformationPage

export const informationPageQuery = graphql`
  query InformationPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
