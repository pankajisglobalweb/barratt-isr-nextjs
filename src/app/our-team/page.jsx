import OurAllTeam from '@/components/OurTeam/ourteam';
import { getmetadata } from '@/libraries/getMetaData';


export async function generateMetadata() {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}metas/?slug=/our-team`, {
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




const OurTeam = () => {
  return (
    <>
      <OurAllTeam />
    </>
  );
}

export default OurTeam;