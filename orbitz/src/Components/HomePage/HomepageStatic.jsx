import React from 'react'
import Section1 from './Section1'
import TravelTips from './TravelTips'
import Options from './Options'
import Featured from './Featured'
import MoreDestination from './MoreDestination'

export default function HomepageStatic() {
    return (
        <div>
            <Section1 />
            <Options />
            <Featured/>
            <TravelTips />
            
            <MoreDestination/>
        </div>
    )
}
