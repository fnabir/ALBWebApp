import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { useRouter } from 'next/router';

type metaProps = {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  images?: string;
};

const Meta = (props: metaProps) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport"/>
        <meta name="keywords" content={props.keywords}/>
        <link rel="icon" href={`${router.basePath}/favicon.ico`}/>
        <link rel="apple-touch-icon" href={`${router.basePath}/apple-touch-icon.png`} key="apple"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta property="og:image" content={`${router.basePath}/img/social/${props.images}`}/>
        <meta property="fb:app_id" content="790098105151837"/>
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical}
        openGraph={{
          title: props.title,
          description: props.description,
          url: props.canonical,
          type: 'website',
          locale: 'en',
          site_name: 'Asian Lift Bangladesh',
        }}
      />
    </>
  );
};

export default Meta;