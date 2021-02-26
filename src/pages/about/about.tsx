import {useState} from 'react'
import Highlight from 'react-highlight'

function About() {
  const [name, setName] = useState('wang')
  function hanleSetName(e:any) {
    setName (e.target.value)
  }
  return (
    <div>
      <div>{name}</div>
      <textarea style={{width:"100%"}} defaultValue ={name} onChange= {hanleSetName}/>
      <Highlight className='javascript'>
        {
          name
        }
 </Highlight>
    </div>
  )
}

export default About