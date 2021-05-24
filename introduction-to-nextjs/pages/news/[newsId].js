import { useRouter } from "next/router";

// our-domian.com/news/something-important

function DetailPage() {
  const router = useRouter();

  const params = router.query.newsId;

  return <h1>The Detail {params} Page</h1>;
}

export default DetailPage;
