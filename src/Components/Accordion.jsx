import React,{useState} from 'react'
import {questions} from './ACCQN';
import MyAccordion from './MyAccordion';

function Accordion() {
  const [data,setData] = useState(questions)
    return (
        <>
        <selection className="main-div">

        {
          data.map((currElem)=>{
            const {id,question,answer}=currElem;
            return <MyAccordion key={id} {...currElem}/>

          })
        }
        </selection>
        </>
    )
}

export default Accordion
