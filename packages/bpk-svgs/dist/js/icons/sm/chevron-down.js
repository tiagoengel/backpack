import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M9 13.1L3.6 8.3c-.5-.4-.5-1.1-.1-1.5.4-.5 1.1-.5 1.6-.1L9 10.1l3.9-3.5c.5-.4 1.2-.4 1.6.1s.4 1.2-.1 1.6L9 13.1z" /></svg>;
  }

}