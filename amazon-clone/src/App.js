import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './Payment'

function App() {

  const [{}, dispatch] = useStateValue();

  //create listener to keep track of who signed in
  useEffect(() => {
    //will only run once when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);
      if(authUser) {
        //the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else{
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })

  },[])

  return (
    //BLM
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>

        <Routes>
          <Route exact path="/payment" element={<Payment />}></Route>
        </Routes>

        <Routes>
          <Route exact path="/checkout" element={<Checkout />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
