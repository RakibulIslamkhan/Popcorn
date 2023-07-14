import React from "react";
import GameGallery from "../../components/Portfolio/GameGallery";
import Heading from "../../components/Portfolio/Heading";
import Sales from "../../components/Portfolio/Sales";

export default function index() {
  return (
    <>
      <Heading title={'Portfolio'}/>
      <GameGallery />
      <Sales/>
    </>
  );
}
