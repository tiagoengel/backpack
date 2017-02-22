import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M2.5 11C1.7 11 1 10.3 1 9.5v-1C1 7.7 1.7 7 2.5 7h13c.8 0 1.5.7 1.5 1.5v1c0 .8-.7 1.5-1.5 1.5h-13z" /></svg>;
  }

}