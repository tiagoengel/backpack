import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" style={{
      width: "1.125rem",
      height: "1.125rem"
    }} {...this.props}><path d="M15.5 6H12V5c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v1H2.5C1.675 6 1 6.675 1 7.5v6c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-6c0-.825-.675-1.5-1.5-1.5zM8 5h2v1H8V5zm4.401 3.891l-3.832 4.494a.79.79 0 0 1-1.112.093l-.016-.014-1.803-1.586a.42.42 0 0 1-.039-.581l.525-.621a.393.393 0 0 1 .554-.05l.011.01 1.08.939c.067.06.168.053.226-.016l3.201-3.753a.394.394 0 0 1 .555-.048l.01.009.603.542a.421.421 0 0 1 .037.582z" /></svg>;
  }

}