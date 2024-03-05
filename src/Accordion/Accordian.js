"use client"

import Accordion from 'react-bootstrap/Accordion';

function MyAccordion({data, title}) {
  return (
    
    <Accordion defaultActiveKey="0">
        {
            data.map(({heading, content},ind)=>{
                return (
                    <>
                    <h2>{title}</h2>
                    <Accordion.Item key={ind} eventKey={ind}>
                        <Accordion.Header>{heading}</Accordion.Header>
                        <Accordion.Body>{content}</Accordion.Body>
                    </Accordion.Item>
                    </>
                )
            })
        }
    </Accordion>
  );
}

export default MyAccordion;