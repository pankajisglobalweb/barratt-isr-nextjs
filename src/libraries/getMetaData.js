export function getmetadata(data) {

  return {
    title: data?.metas?.title || '',
    keyword: data?.metas?.key || '',
    description: data?.metas?.description || '',
    /* icons: {
      icon: 'https://www.barrattlondonmena.com/img/favicon-32x32.png',
    }, */
    openGraph: {
      title: data?.metas?.og_title || data?.metas?.title || '',
      description: data?.metas?.og_description || data?.metas?.description || '',
      // images: [data?.metas?.listing_image]
    },
    twitter: {
      title: data?.metas?.twitter_title || data?.metas?.title || '',
      description: data?.metas?.twitter_description || data?.metas?.description || '',
      // images: [data?.metas?.listing_image]
    }
  }
}