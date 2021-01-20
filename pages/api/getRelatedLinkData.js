import getEnteryById from "../../contentstack/queries/getEnteryById";
import getAllEnteries from "../../contentstack/queries/getAllEnteries";

export default async function getRelatedLinkData(req, res) {
  if (req.method === "POST") {
    let blog = await getAllEnteries("blogs", {
      prop: "uid",
      value: req.body.blogID,
    });

    res.statusCode = 200;
    res.json({ blog: blog[0] });
  }
}
