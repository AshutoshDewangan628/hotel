import React,{useState} from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
function MyAccordion({question,answer}) {
    const [show,setShow]= useState(false);
    return (
        <>
        <div>
           {/* <p>{question}</p> */}
           <p onClick={()=>setShow(!show)}>{question} <AddCircleIcon/> </p>
           
        </div>
        {
            show && <p className="answers">{answer}</p>
        }
        
        </>
    )
}

export default MyAccordion
