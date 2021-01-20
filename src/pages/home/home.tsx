// import {useState} from 'react'
import {useLocation,Switch,Route} from "react-router-dom";
const Home:React.FunctionComponent = ()=> {
  let location = useLocation()
  console.info(location)
  // let background = location.state && location.state.background
  return (
    <div>
      <div>hello world</div>
      <Switch>
        <Route>

        </Route>
      </Switch>
      {/* Show the modal when a background page is set */}
    </div>
  )
}

// function Gallery() {
//   let location = useLocation();

//   return (
//     <div>
//       {IMAGES.map(i => (
//         <Link
//           key={i.id}
//           to={{
//             pathname: `/img/${i.id}`,
//             // This is the trick! This link sets
//             // the `background` in location state.
//             state: { background: location }
//           }}
//         >
//           <Thumbnail color={i.color} />
//           <p>{i.title}</p>
//         </Link>
//       ))}
//     </div>
//   );
// }

// function Image({ color }) {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: 400,
//         background: color
//       }}
//     />
//   );
// }

export default Home