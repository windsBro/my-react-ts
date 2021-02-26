
import React from 'react'

// interface LogPropsType {
//   forwardedRef: any
// }

// function logProps (Component:React.FC) {

//   class LogProps extends React.Component {
//     componentDidUpdate(prevProps) {
//       console.log('old props:', prevProps);
//       console.log('new props:', this.props);
//     }
//     render () {
//       const {forwardedRef, ...rest} = this.props
//       return <Component ref= {forwardedRef} {...rest}></Component>
//     }
//   }

//   return React.forwardRef<unknown, LogPropsType>((props, ref) => {
//     return <LogProps {...props} forwardedRef={ref} />;
//   });

// }

interface ButtonProps {
  btnName:string
}

const FancyButton = React.forwardRef< any,ButtonProps>((props,ref) =>{
  console.info(ref,'------------------')
  return (
    <button ref ={ref} className="FancyButton"> {props.btnName}</button>
  )
})

const Log:React.FC = ()=>{
  const ref = React.createRef()
  return (
    <FancyButton ref= {ref} btnName='test'></FancyButton>
  )
} 

export default Log