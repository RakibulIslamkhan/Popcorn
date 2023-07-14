import React from "react";
import CardBox from "../../components/Contact/CardBox";
import Getting from "../../components/Contact/Getting";
import Office from "../../components/Contact/Office";
import Join from "../../components/Contact/Join";
import ContactForm from "../../components/Contact/ContactForm";
import ArtWork from "../../icons/artwork";
export default function index() {
  return (
    <>
      <Getting title={'Getting in touch is easy!'} description={'We are here when you need us. Start a chat or send us a mail and we will get back to you.'} icon={<ArtWork/>}/>
      <CardBox />
      <ContactForm/>
      <Office />
      <Join />
    </>
  );
}
