import React from "react";
import Getting from "../../components/Contact/Getting";
import DomainCard from "../../components/Domain/DomainCard";
import Need from "../../components/Domain/Need";
import Popular from "../../components/Domain/Popular";
import SmallCard from "../../components/Domain/SmallCard";
import Question from "../../components/Shared/Question";
import Domain from "../../icons/domain";

export default function index() {
  return (
    <div>
      <Getting
        title={"Search & Register Domain For Your Website"}
        description={
          "We are here when you need us. Start a chat or send us a mail and we will get back to you."
        }
        icon={<Domain />}
      />
      <Popular />
      <Need />
      <DomainCard />
      <SmallCard />
      <Question />
    </div>
  );
}
