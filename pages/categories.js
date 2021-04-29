import { useEffect, useState } from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
useEffect(() => {
    setIsMounted(true);
  }, []);
const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };
      const meta = {
      title: 'Lee Robinson – Developer, writer, creator.',
      description: `Front-end developer, JavaScript enthusiast, and course creator.`,
      keywords:'HTML, CSS, JavaScript',
      image: 'https://leerob.io/static/images/banner.png',
      type: 'website',
    };
return (
    <div className="text-center">
      <Head>
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
      </Head>
      <h1 className="text:2xl">
       Dark mode with Tailwind and Next- themes
      </h1>
      <button onClick={switchTheme}>Change theme</button>
    </div>
  );
}