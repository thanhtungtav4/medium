import React from "react";

class HeadMeta extends React.Component {
  render() {
    const meta = {
      title: 'Lee Robinson – Developer, writer, creator.',
      description: `Front-end developer, JavaScript enthusiast, and course creator.`,
      keywords:'HTML, CSS, JavaScript',
      image: 'https://leerob.io/static/images/banner.png',
      type: 'website',
    };
    return (
      <div>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description}/>
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content={meta.image} />
        <meta name="keywords" content={meta.keywords}></meta>
        <link href="https://fonts.googleapis.com/css?family=Cabin:400,700&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css?family=B612+Mono&display=swap" rel="stylesheet" /> 
        <link href="https://fonts.googleapis.com/css?family=Lora:400,400i,700,700i&display=swap" rel="stylesheet" /> 
      </div>
    )
  }
}
export default HeadMeta;