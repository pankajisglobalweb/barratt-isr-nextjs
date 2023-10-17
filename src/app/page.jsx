import { getmetadata } from "@/libraries/getMetaData";
import "./../styles/global.css"
import MainSection from '@/components/MainSection/MainSection';

export async function generateMetadata() {
  try{
    const data = await fetch(`${process.env.NEXT_PUBLIC_CMS_API_URL}metas/?slug=/`, {
      cache: "no-store",
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((res) => res.json());
    return getmetadata(data)
  }catch(e){
    return {};
  }
}


export default async function Home() {
  return (
    <>
      <MainSection />
    </>
  )
}
