import Eventcards from "@/components/PreviousEventCard/eventcard";
import EventRelatedPropertyCard from "@/components/PropertySliderCard/EventRelatedPropertyCard";
import { getmetadata } from "@/libraries/getMetaData";
import { notFound } from "next/navigation";


export async function generateMetadata({ params }) {
  let { slug } = params;
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}metas/?slug=/${slug.join("/")}`, {
      cache: "no-store",
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
    return getmetadata(data);
  } catch (e) {
    return {};
  }
}


async function getData(slug_prefix, slug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}events/slug?slug=${slug[0]}/${slug[1]}`, { cache: 'no-store' });

  if (!res.ok) {
    return null
  }
  return res.json()
}


const EventDetails = async ({ params }) => {

  let { slug_prefix, slug } = params;
  const data = await getData(slug_prefix, slug);
  if (data?.event === null) {
    notFound();
  }
  return (
    <>

      <Eventcards eventdata={data} />
      <EventRelatedPropertyCard slug={`/events/${slug[0]}/${slug[1]}`} />
    </>
  );
}

export default EventDetails;