import React, { Component } from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

const AuthRoute = ({ component: Component, ...rest }) => {
  console.log(rest);
  return (
    <Route
      {...rest}
      render={props => {
        return true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          );
        }
      }
    />
  );
};

// class AuthRoute extends Component {
//   constructor() {
//
//   }
//   render() {
//     return (
//       <Route />
//     );
//   }
// };

export default AuthRoute;
