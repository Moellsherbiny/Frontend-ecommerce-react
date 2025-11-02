import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title = "Exclusive | Premium Online Store",
  description = "Discover the best deals on Exclusive – your trusted destination for premium products.",
  image = "/default-og-image.jpg",
  url = "https://exclusive-store.com",
}: SEOProps) => {
  return (
    <Helmet>
      
      <title>{title}</title>
      <meta name="description" content={description} />

      
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
