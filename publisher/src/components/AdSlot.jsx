/* eslint-disable react/style-prop-object */
import React from 'react'

export default function AdSlot() {
  return (
    <iframe id='parentIframe' title='3rd party ad content' allow='run-ad-auction' height="300" width="350" src='https://www.greensandbox.fr/ssp/' >
    {/* <fencedframe id='protected-audience-ad' mode='opaque-ads'></fencedframe> */}
    </iframe>
   
  )
}
