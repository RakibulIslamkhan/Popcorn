import React from "react";
import Heading from "../../components/Hosting/Heading";
import Highlights from "../../components/Hosting/Highlights";
import Question from "../../components/Shared/Question";
import Support from "../../components/Hosting/Support";
import VpsSsd from "../../components/Server/VpsSsd";
import MoneyBack from "../../components/Server/MoneyBack";

export default function index() {
  return (
    <>
      <Heading />
      <VpsSsd/>
      <VpsSsd/>
      <VpsSsd/>
      <VpsSsd/>
      <MoneyBack/>
      <Highlights />
      <Question />
      <Support />
    </>
  );
}
