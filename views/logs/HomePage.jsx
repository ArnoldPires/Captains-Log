const React = require('react');
const DefaultLayout = require("../layouts/DefaultLayout");

class HomePage extends React.Component {
  render() {
    return (
      <DefaultLayout>
        <section className="homePage">
          <div className="log-entry">
            <div className="cap">
              <div className="captainInfoContainer">
                <div className='img-wrap'>
                  <img src="https://trekmovie.com/wp-content/uploads/2017/11/picard.jpg" alt="Captain Picard" />
                </div>
                <div className="captain-info">
                  <h1>Captain's Personal File</h1>
                  <h4>Name: <span>Jean-Luc Picard</span></h4>
                  <h4>Rank: <span>Captain</span></h4>
                  <h4>Serial Number: <span>SP-937-215</span></h4>
                  <h4>Assignment: <span>USS Enterprise</span></h4>
                  <h4>Date of Birth: <span>July 13, 2305</span></h4>
                  <h4>Species: <span>Human</span></h4>
                </div>
              </div>
            </div>
            <div className="time-stamps logs">
              <a href="/logs/Index">Personal Logs</a>
              <a href='/logs/NewLogs'>Personal Food Logs</a>
            </div>
          </div>
        </section>
      </DefaultLayout>
    );
  }
}

module.exports = HomePage;