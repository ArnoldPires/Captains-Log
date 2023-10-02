import React from "react";

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" type="text/css" href="/style.css" />
        </head>
        <body>
          <nav>
            <ul className="nav-links">
              <li><a href="/" className="nav-link">Captain's Profile</a></li>
              <li><a href="../logs/Index" className="nav-link">View Logs</a></li>
              <li><a href="../logs/NewLogs" className="nav-link">New Entry</a></li>
            </ul>
          </nav>      
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;