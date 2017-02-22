import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M6.4 3.5l-3.8 4c-.8.9-.8 2.2 0 3.1l3.8 4c.6.6 1.5.6 2.1.1.6-.6.6-1.5.1-2.1l-1.9-2h7.8c.8-.1 1.5-.8 1.5-1.6s-.7-1.5-1.5-1.5H6.7l1.9-2c.3-.3.4-.6.4-1s-.2-.8-.5-1.1c-.6-.6-1.5-.5-2.1.1z" /></svg>;
  }

}