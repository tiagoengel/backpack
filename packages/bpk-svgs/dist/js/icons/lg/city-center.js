import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M12.025 6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6a2 2 0 1 1-.001-3.999A2 2 0 0 1 12.025 12zm6.089-7.231a8.061 8.061 0 0 0-6.089-2.768 8.06 8.06 0 0 0-6.088 2.768c-2.804 3.207-2.458 7.836.61 11.232l4.774 5.707c.195.193.449.289.704.291.256-.002.51-.098.705-.291l4.773-5.707c3.069-3.396 3.415-8.025.611-11.232zM12.025 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" /></svg>;
  }

}