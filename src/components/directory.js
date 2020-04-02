import React, { useState, useEffect } from "react";
import peopleList from "../utils/people.json";
import Table from "./table";
const Directory = props => {
  const [masterlist, setMasterlist] = useState(peopleList);
  const [activeList, setActiveList] = useState(peopleList);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("des");
  
  const searchHandler = event => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  const sortItOut = async () => {
    console.log("sorting");
    const newList = await activeList.sort(function(a, b) {
      var x = a.name.first.toLowerCase();
      var y = b.name.first.toLowerCase();
      if (sortOrder === "des") {
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      } else {
        if (x > y) {
          return -1;
        }
        if (x < y) {
          return 1;
        }
        return 0;
      }
    });
    const order = sortOrder === "asc"? "des": "asc"
    setActiveList(newList);
    setSortOrder(order);

  };
  return (
    <>
      <form className="form-inline">
        <div className="form-group mb-2">User Search</div>
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="text"
            className="form-control"
            onChange={searchHandler}
            value={searchTerm}
            placeholder="User Name"
          />
        </div>
      </form>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">Image </th>
            <th scope="col" style={{ cursor: "pointer" }} onClick={sortItOut}>
              Full Name
            </th>

            <th scope="col">email</th>
            <th scope="col">city</th>
            <th scope="col">country</th>
          </tr>
        </thead>
        <tbody>
          <Table list={activeList} />
        </tbody>
      </table>
    </>
  );
};
export default Directory;