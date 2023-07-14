import React from "react";
import Heading from "../../components/Hosting/Heading";
import Support from "../../components/Hosting/Support";
import Question from "../../components/Shared/Question";
import Categories from "../../components/Website/Categories";
import Expertise from "../../components/Website/Expertise";
import Optimize from "../../components/Website/Optimize";
import PriceCard from "../../components/Website/PriceCard";
import Technology from "../../components/Website/Technology";

export default function index() {
  return (
    <>
      <Heading />
      <Expertise/>
      <Categories/>
      <Optimize/>
      <Technology/>
      <PriceCard/>
      <Question />
      <Support />
    </>
  );
}
