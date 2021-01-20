import { useRouter } from "next/router";
import parse from "html-react-parser";

// components
import Layout from "../../components/Layout";
import getAllEnteries from "../../contentstack/queries/getAllEnteries";
import RelatedLinks from "../../components/RelatedLinks";
import getEnteryById from "../../contentstack/queries/getEnteryById";
import axios from "axios";

function BlogDetail(props) {
  const router = useRouter();
  const renderNewBlog = async (event) => {
    const blogID = event.target.parentNode.id;
    const { data } = await axios.post(
      "http://localhost:3000/api/getRelatedLinkData",
      {
        blogID: blogID,
      }
    );

    router.push("/blog" + data.blog.url);
  };

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
          <div className="blog-detail-container" id="blog">
            <div className="blog-detail">
              <div className="blog-container">
                <div className="blog-info">
                  <h2 className="blog-title">{props.blog.title}</h2>
                </div>
                <div className="blog-img">
                  <img src={props.blog.blog_banner_image.url} alt="img" />
                </div>
                <div className="blog-content">
                  <p className="content">{parse(props.blog.blog_content)}</p>
                </div>
              </div>
            </div>
            <RelatedLinks blog={props.blog} renderNewBlog={renderNewBlog} />
          </div>
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
