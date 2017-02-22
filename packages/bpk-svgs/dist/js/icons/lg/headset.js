import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24" style={{
      width: "1.5rem",
      height: "1.5rem"
    }} {...this.props}><g stroke="#DFDCE3" strokeWidth=".2" transform="translate(2 2)"><use mask="url(#e)" xlinkHref="#a" /><use mask="url(#f)" xlinkHref="#b" /><use mask="url(#g)" xlinkHref="#c" /><use mask="url(#h)" xlinkHref="#d" /></g><path d="M22 13.083c0-.977-.382-1.911-1.02-2.59 0-.043-.042-.043-.042-.085C20.684 5.737 16.778 2 12.021 2c-4.756 0-8.662 3.737-8.96 8.408 0 .042-.042.042-.042.085A3.734 3.734 0 0 0 2 13.083c0 1.953 1.7 3.58 3.61 3.835.212.042.425-.17.425-.382V9.699c0-.212-.213-.424-.425-.382-.127 0-.297.043-.425.085-.085.042-.382-.098-.382-.183.849-3.27 3.736-5.648 7.218-5.648a7.381 7.381 0 0 1 7.176 5.605c.043.085-.27.236-.355.236-.128-.042-.298-.042-.425-.085-.212-.042-.425.17-.425.382v6.837c0 .212.213.424.425.382l.239-.004c.17 0 .244.065.202.235-.128.467-.34 1.02-.765 1.486-.467.51-1.104.85-1.868 1.02-.085 0-.17 0-.255-.085-.255-.255-.637-.425-1.104-.425-.764 0-1.401.467-1.401 1.062 0 .594.637 1.061 1.401 1.061.552 0 1.062-.255 1.274-.637.043-.042.085-.127.17-.127 1.02-.213 1.826-.637 2.42-1.317.765-.849.977-1.91 1.062-2.547 0-.085.042-.17.127-.213C21.151 15.8 22 14.527 22 13.083z" /></svg>;
  }

}