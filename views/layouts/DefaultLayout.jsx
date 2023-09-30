// import React from "react";
const React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" type='text/css' href="/style.css"></link>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;