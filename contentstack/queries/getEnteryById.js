import Stack from "../Stack";

export default function getEnteryById(entry_id) {
  const Query = Stack.ContentType("employee_details").Entry(entry_id);
  Query.fetch().then(
    function success(entry) {
      // console.log(entry.get("title")); // Retrieve field value by providing a field's uid
      // console.log(entry.toJSON()); // Convert the entry result object to JSON
      return entry;
    },
    function error(err) {
      // err object
      console.log(err);
      return err;
    }
  );
}
