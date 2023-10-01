import React from "react";
import moment from "moment";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Index({ logs }) {
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
              <header className="article-header">
                <div>
                  <a className="log-link" href={`/logs/${log._id}`}>
                    <h3>{log.title}</h3>
                  </a>
                </div>
                <div className="time-stamps">
                  <p>{moment(log.createdAt, "MM/DD/YY").format("MM/DD/YY")}</p>
                  <p>{moment(log.createdAt, "h:mm a").format("h:mm a")}</p>
                </div>
              </header>
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
}