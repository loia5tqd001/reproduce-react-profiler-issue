import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { LoadablePages } from './LoadablePages';

class App extends React.Component {
  componentDidMount() {}

  render() {
    const routes = LoadablePages.map((i, index) => (
      <Route exact key={index} path={i.path} component={i.component} />
    ));
    return (
      <div key='app' id='app'>
        <Switch>{routes}</Switch>
      </div>
    );
  }
}

export default withRouter(App);
