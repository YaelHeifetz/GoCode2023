import { FilterBy } from "../FilterBy/FilterBy";
import { SortBy } from "../SortBy/SortBy";
import './Nav.css'
export const Nav = () => {
  return (
    <nav className="product-filter">
      <h1>Jackets</h1>
      <div className="sort">
        <SortBy />
        <FilterBy />
      </div>
    </nav>
  );
};
