import React from 'react'
import CountBox from '../../components/About/CountBox'
import Meet from '../../components/About/Meet'
import Partners from '../../components/About/Partners'
import Story from '../../components/About/Story'
import Values from '../../components/About/Values'

export default function index() {
  return (
    <>
      <Meet/>
      <CountBox/>
      <Story/>
      <Values/>
      <Partners/>
    </>
  )
}
