import SearchBox from "@/components/SearchBox";
import { getmetadata } from "@/libraries/getMetaData";



export async function generateMetadata() {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}metas/?slug=/properties-for-sale`, {
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


async function Developments() {
  return (
    <>
      <SearchBox />
    </>
  )
}

export default Developments;