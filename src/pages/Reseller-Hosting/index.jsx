import React from 'react'
import ControlPanel from '../../components/Hosting/ControlPanel'
import Heading from '../../components/Hosting/Heading'
import Highlights from '../../components/Hosting/Highlights'
import Plans from '../../components/Hosting/Plans'
import PlansCard from '../../components/Hosting/PlansCard'
import Speed from '../../components/Hosting/Speed'
import Support from '../../components/Hosting/Support'
import Wordpress from '../../components/Hosting/Wordpress'
import Question from '../../components/Shared/Question'

export default function index() {
  return (
    <div>
        <Heading/>
        <PlansCard/>
        <Highlights/>
        <ControlPanel/>
        <Plans/>
        <Speed/>
        <Wordpress/>
        <Question/>
        <Support/>
    </div>
  )
}
