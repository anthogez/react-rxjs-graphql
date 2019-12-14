import React, { useState, useEffect } from "react";
import { SearchPostsService } from "../../services";
import "./search-form.component.styles.css";

interface ISearchFormProps {}

const SearchForm: React.FC<ISearchFormProps> = () => {
  const [valueToSearch, setValueToSearch] = useState("");
  useEffect(() => SearchPostsService.emit(valueToSearch), [valueToSearch]);

  const handleSubmit = (event: any) => event.preventDefault();
  const handleInputChange = (event: any) =>
    setValueToSearch(event.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={valueToSearch} onChange={handleInputChange} />
      </form>
    </div>
  );
};

export default SearchForm;
