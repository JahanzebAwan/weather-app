import React, { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { toast } from "react-toastify";

function SearchFilter({ getCurrentWeatherInfo }) {
  const [selectedSearchOption, setselectedSearchOption] = useState("");
  const [searchText, setsearchText] = useState("");
  let searchOptions = [
    { name: "Name", code: "n" },
    { name: "Zip", code: "z" },
  ];
  const handleSearchFilter = () => {
    if (selectedSearchOption === "" || searchText === "")
      toast.warn("Please Enter Required Fields !!");
    else
      getCurrentWeatherInfo({
        selectedSearchOption: selectedSearchOption?.code,
        searchText,
      });
  };
  const footer = (
    <div align="center">
      <Button
        iconPos="right"
        label="Search"
        icon="pi pi-search"
        className="p-button-rounded p-button-info"
        onClick={handleSearchFilter}
      />
    </div>
  );
  return (
    <div className="p-pl-4 p-pr-4 p-pb-4">
      <Card footer={footer} title="Find Weather in your City">
        <div className="p-fluid p-formgrid p-grid">
          <div className="p-field p-col-6">
            <label htmlFor="searchoption">Search By *</label>
            <Dropdown
              inputId="searchoption"
              value={selectedSearchOption}
              options={searchOptions}
              placeholder="Select"
              optionLabel="name"
              onChange={(e) => {
                setselectedSearchOption(e.target.value);
              }}
            />
          </div>
          <div className="p-field p-col-6">
            <label htmlFor="nameOrZip">
              {selectedSearchOption?.code === "n"
                ? "Name *"
                : selectedSearchOption?.code === "z"
                ? "Zip Code *"
                : "Name/Zip Code *"}
            </label>
            <InputText
              id="nameOrZip"
              value={searchText}
              onChange={(e) => {
                setsearchText(e.target.value);
              }}
              type="text"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SearchFilter;
