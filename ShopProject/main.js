const ProductFilter = ({ title, filters, sorts }) => {
    return (
      <nav className="product-filter">
        <h1>{title}</h1>
  
        <div className="sort">
          {filters.map((filter) => (
            <div key={filter.label} className="collection-sort">
              <label>{filter.label}:</label>
              <select>
                {filter.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
  
          {sorts.map((sort) => (
            <div key={sort.label} className="collection-sort">
              <label>{sort.label}:</label>
              <select>
                {sort.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </nav>
    );
  };
  
  const filters = [
    {
      label: "Filter by",
      options: [
        { label: "All Jackets", value: "/" },
        { label: "2016", value: "/" },
        { label: "jacket", value: "/" },
        { label: "Jackets", value: "/" },
        { label: "layers", value: "/" },
        { label: "Obermeyer", value: "/" },
        { label: "Roxy", value: "/" },
        { label: "womens", value: "/" },
      ],
    },
  ];
  
  const sorts = [
    {
      label: "Sort by",
      options: [
        { label: "Featured", value: "/" },
        { label: "Best Selling", value: "/" },
        { label: "Alphabetically, A-Z", value: "/" },
        { label: "Alphabetically, Z-A", value: "/" },
        { label: "Price, low to high", value: "/" },
        { label: "Price, high to low", value: "/" },
        { label: "Date, new to old", value: "/" },
        { label: "Date, old to new", value: "/" },
      ],
    },
  ];
  
  ReactDOM.render(
    <ProductFilter title="Jackets" filters={filters} sorts={sorts} />,
    document.getElementById("root")
  );
  
  