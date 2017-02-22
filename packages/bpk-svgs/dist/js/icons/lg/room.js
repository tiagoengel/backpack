import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><path d="M11.608 2.018c-2.358.205-4.087 2.337-4.087 4.704v.145l.006.018c.002.331.272.6.603.6h1.201c.357 0 .65-.292.65-.65v-.069c0-.868.626-1.662 1.49-1.739l.029-.002c.887-.07 1.707.44 1.913 1.306a1.745 1.745 0 0 1-1.691 2.17H8.505A1.004 1.004 0 0 0 7.5 9.505v11.491C7.5 21.55 7.95 22 8.505 22h6.991c.555 0 1.005-.45 1.005-1.005V6.49a4.491 4.491 0 0 0-4.893-4.472z" /></svg>;
  }

}