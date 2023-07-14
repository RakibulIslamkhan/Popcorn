import React from 'react'
import Heading from '../../components/Portfolio/Heading'
import ContactUs from '../../components/Terms/ContactUs'
import Service from '../../components/Terms/Service'

export default function index() {
  return (
    <>
        <Heading title={'Refund Policy'}/>
        <Service/>
        <ContactUs/>
    </>
  )
}
