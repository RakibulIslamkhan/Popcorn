import React from 'react'
import Heading from '../../components/Hosting/Heading'
import PlanCard from '../../components/WDReseller/PlanCard'
import Highlights from '../../components/Hosting/Highlights'
import Migrate from '../../components/Dedicate/Migrate'
import Question from '../../components/Shared/Question'
import Support from '../../components/Hosting/Support'
import Application from '../../components/WDReseller/Application'

export default function index() {
  return (
    <>
        <Heading/>
        <PlanCard/>
        <PlanCard/>
        <PlanCard/>
        <Highlights/>
        <Migrate/>
        <Application/>
        <Question/>
        <Support/>
    </>
  )
}
