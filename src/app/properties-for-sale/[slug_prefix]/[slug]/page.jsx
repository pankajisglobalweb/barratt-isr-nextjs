import PropertyDetail from "@/components/PropertyDetails";
import PropertyMainDetails from "@/components/PropertyMainDetails";
import { getmetadata } from "@/libraries/getMetaData";
import { notFound } from "next/navigation";



export async function generateMetadata({ params }) {
  let { slug_prefix, slug } = params;

  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}metas/?slug=/properties-for-sale/${slug_prefix}/${slug}`, {
      cache: "no-store",
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((res) => res.json())
    return getmetadata(data)
  } catch (e) {
    return {};
  }
}




async function getData(slug_prefix, slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}sell-properties/slug?slug=${slug}`, { cache: 'no-store' })

  if (!res.ok) {
    return null
  }
  return res.json()
}

export default async function DevelopmentDetail({ params }) {
  let { slug_prefix, slug } = params;
  const data = await getData(slug_prefix, slug);
  console.log("slug_prefix", slug);

  if (data?.properties === null) {
    notFound();
  }
  return (
    <>
      <PropertyDetail fetchPropertyDatafromserver={data} />
      <PropertyMainDetails fetchPropertyDatafromserver={data} />
    </>
  )
}
