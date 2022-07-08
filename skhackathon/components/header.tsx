import Head from 'next/head';
import { useEffect } from 'react';

const title: string = 'ไพ่เบิกเนตรเพื่อวัดศักยภาพของคุณกับ Skooldio';
const description: string = 'อย่ารอช้ารีบมาค้นพบตัวเองกัน!';
const imageUrl: string = 'https://i.ibb.co/gRYwgVk/earth-og.jpg';
const favicon: string = `/favicon.ico`;
let mainUrl: string = '';
let path: string = '';

const Header = () => {
  useEffect(() => {
    mainUrl = encodeURI(`${window.location.protocol}//${window.location.host}`);
    path = window.location.pathname;
  }, []);
  return (
    <Head>
      <link rel="shortcut icon" href={favicon} />
      <title>{title}</title>
      <meta property="og:url" content={mainUrl + path} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={imageUrl} />
    </Head>
  );
};

export default Header;
