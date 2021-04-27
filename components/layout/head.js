import React from "react";

class HeadMeta extends React.Component {
  render() {
    return (
      <div>
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Merinda - HTML Bootstrap Template Like Medium Blog Platform</title>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="assets/images/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css?family=B612+Mono&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i&display=swap" rel="stylesheet" /> 
      </div>
    )
  }
}
export default HeadMeta;