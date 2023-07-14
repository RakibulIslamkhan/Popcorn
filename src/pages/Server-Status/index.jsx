import React from 'react'
import Heading from '../../components/Hosting/Heading'
import Support from '../../components/Hosting/Support'
import Migrate from '../../components/Dedicate/Migrate'
import Question from '../../components/Shared/Question'
import VPSPlan from '../../components/WDServer/VPSPlan'
import Highlights from "../../components/Hosting/Highlights";
import Package from '../../components/WDServer/Package'

export default function index() {
  return (
    <div>
        <Heading/>
        <VPSPlan/>
        <Package/>
        <Highlights/>
        <Migrate/>
        <Question/>
        <Support/>
    </div>
  )
}
