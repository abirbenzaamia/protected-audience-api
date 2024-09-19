import React from 'react'

export default function AdSlot() {
  return (
    <iframe title='3rd party ad content' allow='run-ad-auction' src='https://protected-audience-api-tsc2.onrender.com/ssp/'>
    {/* <fencedframe id='protected-audience-ad' mode='opaque-ads'></fencedframe> */}
    </iframe>
  )
}
