// // import React, {useEffect} from './StateProvider'
// import './App.css';
// import Header from './Header';
// import Home from './Home';
// import {BrowserRouter as Router,Routes, Route,} from 'react-router-dom';
// import Checkout from './Checkout';
// import Login from './Login';
// import { useStateValue } from './StateProvider';
// import React,{ useEffect } from 'react';
// import { auth } from './Firebase';
// function App() {
//   const [{}, dispatch] = useStateValue();
//   useEffect(() => {
//     auth.onAuthStateChanged((authUser) => {
//         if (authUser) {
//           const dispatch: any
//           dispatch({
//               type:'SET_USER',
//               user: authUser,
//             });
//         } else {
//           dispatch({
//               type: 'SET_USER'
//               user: null,
//             });
//         }
//       });
//   }, []);
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/Checkout" element={<Checkout />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
