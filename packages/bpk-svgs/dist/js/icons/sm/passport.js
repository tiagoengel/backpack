import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M11.5 2H3.4c-.2 0-.4.2-.4.4v13.2c0 .2.2.4.4.4h8.1c.8 0 1.5-.7 1.5-1.5v-11c0-.8-.7-1.5-1.5-1.5zM8 13c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7 7V6h2v1H7zm3-2H6V4h4v1zm5-1.5v11c0 .8-.7 1.5-1.5 1.5H13v-.1c.6-.2 1-.8 1-1.4v-11c0-.7-.4-1.2-1-1.4V2h.5c.8 0 1.5.7 1.5 1.5z" /></svg>;
  }

}