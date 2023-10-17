import InsightsSearch from "@/components/EventCalendar/insightsSearch";
import PropertCard from "@/components/PropertyCard/page";
import './event.scss'
import { getmetadata } from "@/libraries/getMetaData";


export async function generateMetadata() {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}metas/?slug=/insights`, {
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

export default function PopertySell() {
  return (
    <>
      <div className="bg-gray pb-2">
        <InsightsSearch />
      </div>


    </>
  )
}
