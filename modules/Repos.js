// modules/Repos.js

import React from 'react'
import NavLink from './NavLink'
import {routeActions} from 'react-router-redux'

export default React.createClass({

  contextTypes: {
    router: React.PropTypes.object,
    store: React.PropTypes.object
  },

  handleSubmit(event) {
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const repo = event.target.elements[1].value;
    const path = `/repos/${userName}/${repo}`;
    // this.context.router.push(path); // react-router approach
    this.context.store.dispatch(routeActions.push(path)); // react-router-redux approach
  },

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/rackt/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="userName"/> / {' '}
              <input type="text" placeholder="repo"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

