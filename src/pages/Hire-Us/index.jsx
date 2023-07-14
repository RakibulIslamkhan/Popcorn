import React from 'react'
import Getting from '../../components/Contact/Getting'
import Developer from '../../components/Hire/Developer'
import Form from '../../components/Hire/Form'
import Hire from '../../components/Hire/Hire'
import ArtWork from '../../icons/artwork'

export default function index() {
  return (
    <>
        <Getting title={'Hire Experts! '} description={'Our Experts are freelancers who can help you build and maintain your website.'} icon={<ArtWork/>}/>
        <Developer/>
        <Form/>
        <Hire/>
    </>
  )
}
