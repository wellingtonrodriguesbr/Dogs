import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { photo } from "../../services/api";
import Error from "../Helper/Error";
import Head from "../Helper/Head";
import Loading from "../Helper/Loading";
import PhotoContent from "./PhotoContent";

export default function Photo() {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    const { url, options } = photo(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error />;
  if (loading) return <Loading />;
  if (data) {
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} />
        <p style={{ marginBottom: "1rem" }}>
          <Link to="/">← Voltar</Link>
        </p>
        <PhotoContent single={true} data={data} />
      </section>
    );
  } else return null;
}
