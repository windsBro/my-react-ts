import react ,{useState}from 'react'
interface ThemeContextProps {
  color:string,
  toogleTheme: (color: string)=>void
}

const ThemeContext = react.createContext<ThemeContextProps>(
    {color:'dark',toogleTheme:()=>{}}
)
ThemeContext.displayName ='ThemeContext'
// const loginNumberContext = react.createContext<number>(0)

const Login: React.FC = ()=> {
  const [theme,setTheme] = useState<ThemeContextProps>({color:'dark',toogleTheme:toogleTheme})
  function toogleTheme (color : string):void {
    let theme:ThemeContextProps= {
      color: color + Math.random(),
      toogleTheme: toogleTheme
    }
    setTheme(theme)
  }
  return (
    <ThemeContext.Provider value={theme}>
      <LoginForm></LoginForm>
    </ThemeContext.Provider>
  )
}

const LoginForm: React.FC = ()=> {
  return (
    <ThemeContext.Consumer>{
      ({color,toogleTheme}) => (
        <> 
        <div>{color}</div>
        <button onClick={()=>{toogleTheme('red')}}>toogleTheme</button>
        {/* <input type="text" placeholder="输入用户名"/>
          <input type="password" placeholder="输入密码"/>
          <button> 登录 </button> */}
        </>
      )
      }</ThemeContext.Consumer>
  )
}


export default Login