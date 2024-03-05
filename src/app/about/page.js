import React from 'react';
import MyAccordion from '@/Accordion/Accordian';
import data from "@/Accordion/data";

const About = () => {
  return (
    <div>
      <h1>This form Abount Component</h1>
      <MyAccordion data={data} title="Abount Jagadeesh"/>
    </div>
  );
}

export default About;
