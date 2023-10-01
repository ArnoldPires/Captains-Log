import React from "react";
import moment from "moment";
import DefaultLayout from "../layouts/DefaultLayout.jsx";

class ShowLogs extends React.Component {
  render() {
    const { log } = this.props; // Access log from props
    return (
      <DefaultLayout>
        <article className="log-entry">
          <div className="article-header">
            <div>
              <h2>{log.title}</h2>
            </div>
            <div className="time-stamps">
              <p>{moment(log.createdAt, "MM/DD/YY").format("MM/DD/YY")}</p>
              <p>{moment(log.createdAt, "h:mm a").format("h:mm a")}</p>
            </div>
          </div>
          <div>{log.entry}</div>
          <footer className="article-footer">
            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
              <input type="submit" value="delete" className="btn-outline" style={{ width: "auto" }} />
            </form>
            <a href={`/logs/${log._id}/edit`} role="button" className="btn-outline">
              edit
            </a>
          </footer>
        </article>
      </DefaultLayout>
    );
  }
}

export default ShowLogs;