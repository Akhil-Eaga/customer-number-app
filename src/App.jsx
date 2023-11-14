import "./App.css";
import { useState } from "react";

function App() {
  const customers = [
    {
      id: 1,
      customerName: "Kavitha",
      serialNumber: 1,
    },
    {
      id: 2,
      customerName: "Saritha",
      serialNumber: 2,
    },
    {
      id: 3,
      customerName: "Sunitha",
      serialNumber: 3,
    },
    {
      id: 4,
      customerName: "Arpitha",
      serialNumber: 4,
    },
    {
      id: 5,
      customerName: "Sujatha",
      serialNumber: 5,
    },
  ];

  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1 mx-auto">Customer Number</span>
      </nav>
      <div className="App container mt-5">
        <form>
          <div className="form-group">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              className="form-control"
              id="customerName"
              placeholder="Search for customer"
            />
          </div>
        </form>
        <hr></hr>
        <ul className="list-group">
          <li
            className="list-group-item list-group-item-secondary d-flex justify-content-between"
            key={0}
          >
            <div>
              <strong>Customer</strong>
            </div>
            <div>
              <strong>S.No</strong>
            </div>
          </li>
          {!searchText &&
            customers.map(({ id, customerName, serialNumber }) => (
              <li
                className="list-group-item d-flex justify-content-between"
                key={id}
              >
                <div>{customerName}</div> <div>{serialNumber}</div>
              </li>
            ))}
          {searchText &&
            customers
              .filter(({ customerName }) =>
                customerName.toLowerCase().includes(searchText.toLowerCase())
              )
              .map(({ id, customerName, serialNumber }) => (
                <li
                  className="list-group-item list-grop-item-secondary d-flex justify-content-between"
                  key={id}
                >
                  <div>{customerName}</div> <div>{serialNumber}</div>
                </li>
              ))}
        </ul>
        <hr></hr>
      </div>
    </div>
  );
}

export default App;
