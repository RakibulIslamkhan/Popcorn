import React from 'react'
import Getting from '../../components/Contact/Getting'
import Bank from '../../components/Payment/Bank'
import Card from '../../components/Payment/Card'
import Mobile from '../../components/Payment/Mobile'
import Money from '../../icons/money'

export default function index() {
  return (
    <div>
        <Getting title={'Payment Methods!'} description={'You can purchase our services using a wide range of payment methods.'} icon={<Money/>}/>
        <Bank/>
        <Mobile/>
        <Card/>
    </div>
  )
}
