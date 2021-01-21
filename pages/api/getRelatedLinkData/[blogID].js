import getAllEnteries from "../../../contentstack/queries/getAllEnteries";

export default async function getRelatedLinkData(req, res) {
  if (req.method === "GET") {
    let blog = await getAllEnteries("blogs", {
      prop: "uid",
      value: req.query.blogID,
    });

    res.statusCode = 200;
    res.json({ blog: blog[0] });
  }
}
