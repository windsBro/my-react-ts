import './App.css';
// import {Suspense} from 'react'
import {BrowserRouter as Router, Switch,Route,Link, RouteProps} from 'react-router-dom'
import {Layout , Menu} from 'antd'
import routes from './router/index'

const {Header , Sider ,Content, Footer}  = Layout
const { SubMenu } = Menu

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
// interface SubRouterPorps extends RouteProps{

// }
function RouteWithSubRoutes (route:any) {
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
        <Menu>
        <Menu.Item key="1" >
        <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" >
        <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="11" >
        <Link to="/login">Login</Link>
        </Menu.Item>
        <SubMenu key="sub1"  title="Navigation Two">
          <Menu.Item key="3">
          <Link to="/log">Log</Link>
          </Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item>
          <SubMenu key="sub1-2" title="Submenu">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub2"  title="Navigation Three">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
        </SubMenu>
      </Menu>
        </Sider>
        <Content>
          {/* <Suspense fallback = {<div>loading...</div>}> */}
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
        {/* </Suspense> */}
        </Content>
      </Layout>
      <Footer style={{ textAlign: 'center' }}>footer</Footer>
    </Layout>
  </>
    </Router>
    </div>
    )
}

export default App;
