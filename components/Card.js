import React from "react";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";
import parse from "html-react-parser";

function CardComponent(props) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={props.blog.blog_banner_image.url} />
        <Card.Body>
          <Card.Title>{props.blog.title}</Card.Title>
          {parse(props.blog.blog_content.slice(0, 125) + "...")}
          <Link href={`/blog` + props.blog.url}>
            <a>
              <Button variant="secondary">Read More</Button>
            </a>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardComponent;
