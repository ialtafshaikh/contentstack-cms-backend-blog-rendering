import { Col, Row } from "react-bootstrap";

import getAllEnteries from "../contentstack/queries/getAllEnteries";

// components
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function Home(props) {
  return (
    <>
      <Layout
        NavigationContent={{ navbarContent: props.navbar }}
        FooterContent={{ footerContent: props.footer }}
      >
        <main>
          <div className="container">
            {props.blogs.map((blog, index) => {
              return index % 4 === 0 ? (
                <Row key={index}>
                  {props.blogs.slice(index, index + 4).map((blog) => {
                    return (
                      <Col className="py-3" key={blog.blogID}>
                        <Card blog={blog} />
                      </Col>
                    );
                  })}
                </Row>
              ) : (
                <></>
              );
            })}
          </div>
        </main>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const result = await getAllEnteries("blogs");
  const navbarData = await getAllEnteries("navbar");
  const footerData = await getAllEnteries("footer");

  return {
    props: {
      blogs: [...result],
      navbar: { ...navbarData[0] },
      footer: { ...footerData[0] },
    },
  };
};
