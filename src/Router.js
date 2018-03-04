import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './components/Home';
import Main from './components/Main';
import Map from './components/Map';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="home-flux">
        <Scene key="Home" component={Home} initial hideNavBar />
      </Scene>
      <Scene key="main-flux">
        <Scene
          key="Main"
          component={Main}
          title="Weather"
          renderBackButton={() => (null)}
          rightTitle="Map"
          onRight={() => Actions.Map()}
          initial
        />

        <Scene
          key="Map"
          component={Map}
          title="Map"
          initial
        />
      </Scene>
    </Scene>
  </Router>
);

export default RouterComponent;
