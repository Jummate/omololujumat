import "./FilterField.css";

export const FilterField = ({ setFilterParam }) => {
  return (
    <div className="FilterField__container">
      <label htmlFor="filter">Show:</label>
      <select
        id="filter"
        defaultValue=""
        onChange={(e) => setFilterParam(e.target.value)}
      >
        <option value="">---</option>
        <option value="frontend">Frontend only</option>
        <option value="fullstack">Full-stack</option>
      </select>
    </div>
  );
};
