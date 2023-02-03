import Seo from "@/components/Seo";
import { useRouter } from "next/router";

export default function Detail({ params }: any) {
    const router = useRouter();
    const [title, id] = params.params || [];
    return (
      <div>
        <Seo title={title} />
        <h4>{title}</h4>
      </div>
    );
  }
  
  export function getServerSideProps({ params } : any) {
    console.log(params);
    return {
      props: {
        params,
      },
    };
  }