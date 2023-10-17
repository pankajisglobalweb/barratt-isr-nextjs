import './event.scss'
import EventCalender from "@/components/EventCalendar/EventCalendar";
import EventCard from "@/components/PropertyCard/EventCard";
import { getmetadata } from '@/libraries/getMetaData';


export async function generateMetadata() {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}metas/?slug=/events`, {
      cache: "no-store",
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json());
    return getmetadata(data);
  } catch (e) {
    return {};
  }
}

export default function Events() {
  return (
    <>
      <div className="bg-gray">
        {/* <EventCalender /> */}
        <EventCard />
      </div>
    </>
  )
}
