import React from 'react'
import Heading from '../../components/Email/Heading'
import PricePlan from '../../components/Email/PricePlan'
import Google from '../../components/Email/Google'
import Workspace from '../../components/Email/Workspace'
import Support from '../../components/Hosting/Support'
import Question from '../../components/Shared/Question'

export default function index() {
  return (
    <div>
      <Heading/>
      <PricePlan/>
      <Google/>
      <Workspace/>
      <Question/>
      <Support/>
    </div>
  )
}
