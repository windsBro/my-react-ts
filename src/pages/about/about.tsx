import {useState} from 'react'

function About() {
  const [name, setName] = useState('wang')

  function hanleSetName(e:any) {
    setName (e.target.value)
  }
  return (
    <div>
      <div>{name}</div>
      <input type="text" defaultValue ={name} onBlur= {hanleSetName}/>
    </div>
  )
}

export default About