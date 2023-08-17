"use client"
import config from "@/app/config/config.json";
import { plainify } from "@/lib/utils/textConverter";
import Head from "next/head";
import { usePathname } from 'next/navigation';

interface SiteContainerProps {
  title: string
  meta_title: string | null
  description: string | null
  image: string | null
  noindex: string | null
  canonical: string | null
}
const Base: React.FC<SiteContainerProps> = ({
    title,
    meta_title,
    description,
    image,
    noindex,
    canonical,
  }) => {
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url } = config.site;
  const pathName = usePathname();
  return (
    <>
      <Head>
        {/* title */}
        <title>
          {plainify(meta_title ? meta_title : title ? title : config.site.title)}
        </title>
        {/* canonical url */}
        {canonical && <link rel="canonical" href={canonical} itemProp="url" />}
        {/* noindex robots */}
        {noindex && <meta name="robots" content="noindex,nofollow" />}
        {/* meta-description */}
        <meta
          name="description"
          content={plainify(description ? description : meta_description)}
        />
        {/* author from config.json */}
        <meta name="author" content={meta_author} />
        {/* og-title */}
        <meta
          property="og:title"
          content={plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        />
        {/* og-description */}
        <meta
          property="og:description"
          content={plainify(description ? description : meta_description)}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`${base_url}/${pathName}`}
        />
        {/* twitter-title */}
        <meta
          name="twitter:title"
          content={plainify(
            meta_title ? meta_title : title ? title : config.site.title
          )}
        />
        {/* twitter-description */}
        <meta
          name="twitter:description"
          content={plainify(description ? description : meta_description)}
        />
        {/* og-image */}
        <meta
          property="og:image"
          content={`${base_url}${image ? image : meta_image}`}
        />
        {/* twitter-image */}
        <meta
          name="twitter:image"
          content={`${base_url}${image ? image : meta_image}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    </>
  );
};

export default Base;
