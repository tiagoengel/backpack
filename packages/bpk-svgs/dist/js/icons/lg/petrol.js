import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M18 11.1V8c0-1.6-1.3-3-3-3 0-1.7-1.3-3-3-3H7C5.3 2 4 3.3 4 5v17h11V12h1v4.1c0 1.1.9 1.9 1.9 1.9h.2c1 0 1.8-.8 1.8-1.8v-2.4c.1-1.3-.7-2.4-1.9-2.7zM12 10H7V5h5v5zm7 6.2c0 .5-.4.8-.8.8H18c-.5 0-.9-.4-.9-.9V12h.3c1 0 1.7.8 1.7 1.7v2.5z" /></svg>;
  }

}