import { Grid } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

const imgData =
    [
        {url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_LastMinute_imgB_900x600_20211101.jpg?impolicy=fcrop&w=600&h=400&q=medium"},
        {url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_AllInclusive_imgB_900x600_20211101.jpg?impolicy=fcrop&w=600&h=400&q=medium"},
        { url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_MOD_imgB_900x600_20211101.jpg?impolicy=fcrop&w=600&h=400&q=medium"},
        { url: "https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_JetAndReset_imgB_900x600_20211101.jpg?impolicy=fcrop&w=600&h=400&q=medium"}
    ]
const Featured = () => {
  return (
    <div>
        <FeaturedCardCont>
        <h1>Featured offers</h1>
        <Grid lg={12} container style={{border:"1px solid red",width:""}} >
            
            {imgData.map((item)=>{
                return(
                            <Grid item lg={3} sm={12} md={6} >
                                <Card>
                                <img src={item.url} alt="" style={{border:"1px solid green", width:"20rem"}}/>

                                </Card>
                              
                               
                            </Grid>

            )})}
            


</Grid>
 


        
      

        
</FeaturedCardCont>
    </div>
  )
}

export default Featured

const FeaturedCardCont = styled.div`
    width: 100%;
    padding: 1.5rem 0rem;
    border:1px solid red;
`
const Card = styled.div`
    padding: 1.5rem;
    border:1px solid black
    img{
        width: 100%;
    }
`
