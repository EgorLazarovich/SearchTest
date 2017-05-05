import React, { Component } from 'react';

export default class App extends Component {
  render() {
      return (
          <div style={{ height: 'inherit' }}>
              {this.props.children}
          </div>
      )
  }
}
