import { useRouter } from "next/router";
import parse from "html-react-parser";
import axios from "axios";

// components
import Layout from "../../components/Layout";
import RelatedLinks from "../../components/RelatedLinks";

import getAllEnteries from "../../contentstack/queries/getAllEnteries";

function BlogDetail(props) {
  const router = useRouter();
  const renderNewBlog = async (event) => {
    const blogID = event.target.parentNode.id;
    const { data } = await axios.post(
      event.view.location.origin + "/api/getRelatedLinkData",
      {
        blogID: blogID,
      }
    );
    try {
      router.push("/blog" + data.blog.url);
      return;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  return router.isFallback ? (
    <p>Loading..</p>
  ) : (
    <>
      <Layout
        title={props.blog.title}
        NavigationContent={{ navbarContent: props.navbar }}
        FooterContent={{ footerContent: props.footer }}
        favicon="../../vercel.svg"
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
                  <div className="content">
                    {parse(props.blog.blog_content)}
                  </div>
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

export const getServerSideProps = async (context) => {
  try {
    const result = await getAllEnteries("blogs", {
      prop: "url",
      value: "/" + context.params.slug,
    });

    if (typeof result[0] === "undefined") {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    const navbarData = await getAllEnteries("navbar");
    const footerData = await getAllEnteries("footer");

    return {
      props: {
        blog: { ...result[0] },
        navbar: { ...navbarData[0] },
        footer: { ...footerData[0] },
      },
    };
  } catch (err) {
    return err;
  }
};

export default BlogDetail;
