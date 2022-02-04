import styles from "../styles/Page.module.css";
import { getAllPageIds, getPageData } from "../lib/page";

interface PageData {
  content: {
    rendered: string;
  }
}

const Page: React.FC<{pageData: PageData}> = ({ pageData }) => {
  return <div dangerouslySetInnerHTML={{ __html: pageData.content.rendered }}></div>;
}

export default Page;

export async function getStaticPaths() {
  const paths = await getAllPageIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({params}) {
  console.log('parms', params)
  const pageData = await getPageData( params.slug);
  return {
    props: {
      pageData,
    },
  };
}
