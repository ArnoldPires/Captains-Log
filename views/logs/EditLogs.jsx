import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";

class EditLogs extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <DefaultLayout>
        <div className="edit-logs-container">
          <h2>Edit {log.title}</h2>
          <form action={`/logs/${log._id}?_method=PUT`} method="POST">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" name="title" value={log.title} />

            <label htmlFor="entry">Entry:</label>
            <textarea id="entry" name="entry" rows='10' value={log.entry}></textarea>

            <label htmlFor="shipIsBroken">Is the Ship Broken?</label>
            <input type="checkbox" id="shipIsBroken" name="shipIsBroken" checked={log.shipIsBroken} onChange={(e) => {
            const updatedLog = { ...log, shipIsBroken: e.target.checked };
            }} />

            <input type="submit" value="Submit Changes" className="btn-outline" />
          </form>
        </div>
      </DefaultLayout>
    );
  }
}

export default EditLogs;