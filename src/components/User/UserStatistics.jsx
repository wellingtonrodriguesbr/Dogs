import { lazy, Suspense, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { getStatistics } from "../../services/api";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import Loading from "../Helper/Loading";

const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));

export default function UserStatistics() {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = getStatistics();
      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  if (data)
    return (
      <Suspense fallback={<Loading />}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  else return null;
}
