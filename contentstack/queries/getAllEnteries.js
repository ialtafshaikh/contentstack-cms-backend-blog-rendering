import Stack from "../Stack";

export default function getAllEnteries(contentType) {
  const Query = Stack.ContentType(contentType).Query();
  return Query.toJSON()
    .find()
    .then(
      function success(result) {
        // console.log(result[0]); // list of objects of employee details
        return result[0];
      },
      function error(err) {
        // err object
        console.log(err);
        return err;
      }
    );
}
