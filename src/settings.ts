// Global data
type Config = {
  title: string;
  description: string;
  lang: string;
  favicon: string;
  og: {
    image: string;
    imageAlt: string;
    imageType: string;
    imageWidth: string;
    imageHeight: string;
  };
};

export const siteConfig: Config = {
  title: "우엉의 블로그",
  description: "우엉이 알게 된 내용에 대해 적는 공간",
  lang: "en",
  favicon: "/favicon.svg",
  og: {
    image: "/ogImage.png",
    imageAlt: "Open Graph image for the smallworld Astro template",
    imageType: "image/png",
    imageWidth: "1200",
    imageHeight: "630",
  },
};
