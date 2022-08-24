import { Grid } from '@material-ui/core'
import React from 'react'

const MoreDestination = () => {
  return (
    <div>
        <Grid container spacing={{ xs: 2, md: 3 }} lg={12}>
  {Array.from(Array(6)).map((_, index) => (
    <Grid item lg={3} sm={12} md={6} key={index}>
      <div>xs=2</div>
    </Grid>
  ))}
</Grid>
      
    </div>
  )
}

export default MoreDestination
