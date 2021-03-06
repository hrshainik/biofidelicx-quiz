import Head from "next/head";
import { Header } from "../../components";

const Category = () => {
  return (
    <>
      <Head>
        <title>Category</title>
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="dynamic text" />
        <meta name="keywords" content="biofidelicX quiz, biofidelicX academy" />
        <meta name="author" content="dynamic text" />
        <meta
          property="og:url"
          content={`https://biofidelicx-quiz.vercel.app/post/dynamic-text`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="dynamic text" />
        <meta property="og:description" content="dynamic text" />
        <meta property="og:image" content="dynamic text" />
      </Head>
      <Header />
      <div className="mx-auto mb-8 px-2">
        <div className="page-details">
          <div className="page-shadow"></div>
          <div className="z-50 grid grid-cols-1 gap-12 bg-white-500 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-8"></div>
            <div className="col-span-1 lg:col-span-4">
              <div className="relative lg:sticky lg:top-20"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
