import { useRouter } from "next/router";
import getEnteryById from "../contentstack/queries/getEnteryById";

function RelatedLinks(props) {
  const related_links = JSON.parse(JSON.stringify(props.blog.related_links));

  return (
    <aside className="side-bar">
      <h2>Related Links</h2>
      <div className="related-link-container">
        {related_links.map((link, index) => {
          return (
            <div
              className="related-link"
              onClick={props.renderNewBlog}
              id={link.uid}
              key={link.uid + index}
            >
              <img
                src="https://github.com/ialtafshaikh/static-files/raw/master/dummp-image.jpg"
                alt=""
              />
              <p className="link-title">{link.uid}</p>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default RelatedLinks;
