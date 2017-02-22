import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M16 5v7h-1V3H3.5C2.1 3 1 4.1 1 5.5V14h14c1.1 0 2-.9 2-2V5h-1zm-8 7H3V8h5v4zm5-1H9v-1h4v1zm0-2H9V8h4v1zm0-2H3V5h10v2z" /></svg>;
  }

}