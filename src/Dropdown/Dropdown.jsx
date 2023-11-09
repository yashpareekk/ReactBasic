import React, { useState } from 'react';
import data from './data.json';
import './Dropdown.css'

const Dropdown = () => {
  const [filterOption, setFilterOption] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const optionSelected = (e) => {
    setFilterOption(e.target.value);
  }

  const TableData = (data) => {
    return data.map((element, i) => (
      <tr key={i}>
        <td className="table-cell">{element.Name}</td>
        <td className="table-cell">{element.Age}</td>
        <td className="table-cell">{element.City}</td>
      </tr>
    ))
  }

  const FilterOptions = (filterOption) => {
    if (filterOption) {
      let options = Array.from(new Set(data.map(element => element[filterOption])))
      return options.map((option, i) => <option key={i} value={option}>{option}</option>)
    }
    return []
  }

  const filterOptionSelected = (e) => {
    let { value } = e.target;
    if (value) {
      let filteredData = data.filter(element => element[filterOption] == value);
    console.log()
      setFilteredData(filteredData);
    }
  }

  return (
    <div className="dropdown-container">
      <div className="filter-section">
        <h2>DropDown Using JSON</h2>
        <label className="filter-label">Filter By</label>
        <select className="filter-select" onChange={optionSelected}>
          <option value="">Select Filter</option>
          <option value="Age">Age</option>
          <option value="City">City</option>
        </select>

        <select className="filter-select" onChange={filterOptionSelected}>
          <option value="">Select Option</option>
          {FilterOptions(filterOption)}
        </select>
      </div>
      <table className="data-table" border="1">
        <thead>
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Age</th>
            <th className="table-header">City</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length ? TableData(filteredData) : TableData(data)}
        </tbody>
      </table>
    </div>
  );
}

export default Dropdown;
