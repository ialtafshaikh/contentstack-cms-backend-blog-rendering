import { Col, Row } from "react-bootstrap";

// components
import Layout from "../components/Layout";
import Card from "../components/Card";

import getAllEnteries from "../contentstack/queries/getAllEnteries";

export default function Home(props) {
  return props.blogs.length === 0 ? (
    <p>Loding</p>
  ) : (
    <Layout
      NavigationContent={{ navbarContent: props.navbar }}
      FooterContent={{ footerContent: props.footer }}
    >
      <main>
        <div className="container">
          {props.blogs.map((blog, index) => {
            return index % 4 === 0 ? (
              <Row key={(index + 1).toString()}>
                {props.blogs.slice(index, index + 4).map((blog, index) => {
                  return (
                    <Col className="py-4" key={blog.uid}>
                      <Card blog={blog} />
                    </Col>
                  );
                })}
              </Row>
            ) : (
              ""
            );
          })}
        </div>
      </main>
    </Layout>
  );
}

export const getServerSideProps = async () => {
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
