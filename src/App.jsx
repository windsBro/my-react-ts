import './App.css';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom'
import {Layout} from 'antd'
import routes from './router/index.ts'

const {Header , Sider ,Content, Footer}  = Layout

// import About from "./pages/about/about"
// import Login from "./pages/login/login"
console.info(routes)

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes (route) {
  console.info(route)
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
function App () {

  return (
    <div>
<Router>
  <>
    <Layout>
      <Header></Header>
      <Layout>
        <Sider>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        </Sider>
        <Content>
        <Switch>
            {/* <Route path= "/about">
              <About/>
            </Route>
            <Route path= "/login">
              <Login/>
            </Route> */}
            { routes.map((route,id) => (
              // <Route key={ id } path={ route.path }
              // render ={ () => (<route.component></route.component>)}
              // >
              // </Route>
           <RouteWithSubRoutes key={id} {...route}/>
        ))}
        </Switch>
        </Content>
      </Layout>
      <Footer>footer</Footer>
    </Layout>
  </>
    </Router>
    </div>
    )
}

export default App;
