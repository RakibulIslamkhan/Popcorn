import React from 'react'
import Server from '../../components/Dedicate/Server'
import Vps from '../../components/Dedicate/Vps'
import Migrate from '../../components/Dedicate/Migrate'
import Heading from '../../components/Hosting/Heading'
import Support from '../../components/Hosting/Support'
import Question from '../../components/Shared/Question'

export default function index() {
  return (
    <>
        <Heading/>
        <Server />
        <Vps/>
        <Migrate/>
        <Question />
        <Support/>
    </>
  )
}
