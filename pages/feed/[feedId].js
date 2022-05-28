import React from "react";
import Head from "next/head";
import styles from "../../styles/feed.module.css";
import { useRouter } from "next/router";
function Feed({ pageNumber, articles }) {
  const router = useRouter();
  return (
    <div className="container py-5">
      <Head>
        <meta property="og:image" content={articles[0]?.urlToImage} />
        <meta property="og:description" content={articles[0]?.description} />
        <meta property="og:title" content={articles[0]?.title + " and more!"} />
      </Head>
      {/* Liste Of Articles */}
      <div className="row">
        {articles.map((article, idx) => (
          <div className="col-md-4 col-sm-2 col-xs-12" key={idx}>
            <div className="card mb-5">
              {!!article.urlToImage && (
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt={article.title}
                  width="300"
                  height="200"
                />
              )}
              <div className="card-body">
                <h5
                  onClick={() => (window.location.href = article.url)}
                  className="card-title text-primary"
                  style={{
                    fontSize: "15px",
                    lineHeight: "1.4",
                    letterSpacing: ".6px",
                    marginBottom: "10px",
                    cursor: "pointer",
                  }}
                >
                  {article.title}
                </h5>
                <p className="card-text">
                  {article?.description?.length > 30
                    ? article?.description.substring(1, 50) + "..."
                    : article?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}

      <div className="d-flex justify-content-center align-items-center">
        <button
          className={`${pageNumber === 1 ? styles.disabled : styles.active} btn
          btn-primary
          btn-sm text-white`}
          onClick={() => {
            if (pageNumber > 1) {
              router
                .push(`/feed/${pageNumber - 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
        >
          Previous
        </button>
        <h4 className="mx-2 text-danger">#{pageNumber}</h4>
        <button
          className={`${
            pageNumber < 5 ? styles.disabled : styles.active
          } btn btn-primary btn-sm text-white`}
          onClick={() => {
            if (pageNumber < 5) {
              router
                .push(`/feed/${pageNumber + 1}`)
                .then(() => window.scrollTo(0, 0));
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Feed;

export const getServerSideProps = async (context) => {
  const pageNumber = context.query.feedId;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.KEY_NEWS}&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.KEY_NEWS}`,
      },
    }
  ).then((res) => res.json());

  const { articles } = apiResponse;

  return {
    props: {
      articles: articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};
