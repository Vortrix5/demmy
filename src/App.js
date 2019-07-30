import React from "react";
import ReactP from "./Components/React"
import {Provider} from "react-redux"
import {createStore} from "redux"
import genReducer from "./Components/reducers/genReducer"
import NavbarModal from "./Components/modals/NavbarModal";
import Steper from "./Components/Steper";
import FooterModal from "./Components/modals/FooterModal"
import LandModal from "./Components/modals/LandModal";
import Home from "./Components/Home";
import PrivateRoute from "./Components/PrivateRoute";
import {Route} from "react-router"
import { BrowserRouter as Router } from 'react-router-dom'
import Logins from "./Components/Login";
import config from "./fireBase"
import SignUpView from "./Components/SignUpView";
import HomeSign from "./Components/HomeSign";
import Tracks from "./Components/Tracks";
import Welcome from "./Components/Welcome";
import Done from "./Components/Done";

const store = createStore(genReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default class App extends React.Component {
  state = { loading: true, authenticated: false, user: null };
  componentWillMount() {
    config.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }
  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }

    return (
      <Provider store={store}>
             <NavbarModal/>
      <LandModal  />
      <FooterModal/>
      <Router>
        <div>
          <PrivateRoute
            exact
            path="/tracks"
            component={Tracks}
            authenticated={authenticated}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={HomeSign} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/react" component={Steper} />
          <Route exact path="/done" component={Done} />


        </div>
      </Router>
      </Provider>
    );
  }
}

