import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import moment from "moment";

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <DefaultLayout>
        <div className="index-container">
          <h1>Captain Log Entries</h1>
          <div className='image-container'>
            <img src="/captainslog.jpg" alt="Captain's Log" />
          </div>
          {logs.map((log, index) => {
            return (
              <div className="log-entry" key={index}>
                <div className="cap">
                  <div>
                    <a className="log-link" href={`/logs/${log._id}`}>
                      <h3>{log.title}</h3>
                    </a>
                    <p>Is the ship broken? {log.shipIsBroken ? "Yes" : "No"}</p>
                  </div>
                  <div className="time-stamps">
                    <p>{moment(log.createdAt, "MM/DD/YY").format("MM/DD/YY")}</p>
                    <p>{moment(log.createdAt, "h:mm a").format("h:mm a")}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </DefaultLayout>
    );
  }
}

export default Index;