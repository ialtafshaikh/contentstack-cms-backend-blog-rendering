import { useRouter } from "next/router";

// components
import Layout from "../../components/Layout";
import getAllEnteries from "../../contentstack/queries/getAllEnteries";

function BlogDetail(props) {
  const router = useRouter();

  return router.isFallback ? (
    <p>Loading..</p>
  ) : (
    <>
      <Layout
        title={props.blog.title}
        NavigationContent={{ navbarContent: props.navbar }}
        FooterContent={{ footerContent: props.footer }}
      >
        <main>
          <h1>Blog detail</h1>
        </main>
      </Layout>
    </>
  );
}

export const getStaticProps = async (context) => {
  const result = await getAllEnteries("blogs", {
    prop: "url",
    value: "/" + context.params.slug,
  });
  const navbarData = await getAllEnteries("navbar");
  const footerData = await getAllEnteries("footer");

  return {
    props: {
      blog: { ...result[0] },
      navbar: { ...navbarData[0] },
      footer: { ...footerData[0] },
    },
  };
};

export const getStaticPaths = async () => {
  const result = await getAllEnteries("blogs");
  let paths = result.map((blog) => ({
    params: {
      slug: blog.url.slice(1),
    },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default BlogDetail;
