import React, { useState } from "react";
import BannerCollection from "../../assets/images/banner-collection.png";
import "./NewProduct.css";
import ProductItem from "../../components/productItem/productItem";
import ProductImg from "../../assets/images/product-img-test.png";
import BoxProduct from "../../components/componentProduct/BoxProduct";

const filters = [
  {
    title: "Loại sản phẩm",
    options: ["Camera hành động", "Máy ảnh", "Máy quay phim", "Ống kính"],
  },
  {
    title: "Thương hiệu",
    options: ["Canon", "Blackmagic", "DJI", "GoPro"],
  },
  {
    title: "Chọn mức giá",
    options: ["Giá dưới 5tr", "5tr - 10tr", "10tr - 15tr", "15tr - 20tr"],
  },
];

const sortOptions = [
  {
    label: "Giá tăng dần",
    value: "asc", // Có thể thay đổi giá trị nếu cần
  },
  {
    label: "Giá giảm dần",
    value: "desc",
  },
  {
    label: "Hàng mới nhất",
    value: "newest",
  },
  {
    label: "Hàng cũ nhất",
    value: "oldest",
  },
];

const productsData = [
  {
    id: 21,
    name: "Máy ảnh Nikon D850 (Body Only)",
    price: 50990000,
    originalPrice: 57990000,
    discountPercentage: Math.round(((57990000 - 50990000) / 57990000) * 100),
    images: [
      "https://bizweb.dktcdn.net/100/482/909/products/nikon-d8502-500x500.jpg?v=1683468092477",
      "https://bizweb.dktcdn.net/100/482/909/products/nikon-d8502-500x500.jpg?v=1683468092477",
      "https://bizweb.dktcdn.net/100/482/909/products/nikon-d8502-500x500.jpg?v=1683468092477",
    ],
    description:
      "Nikon D850 là một máy ảnh DSLR cao cấp với cảm biến FullFrame 45.7MP và bộ xử lý hình ảnh EXPEED 5. Được thiết kế cho các nhiếp ảnh gia chuyên nghiệp và yêu cầu cao về chất lượng hình ảnh.",
  },
  {
    id: 22,
    name: "Máy ảnh Nikon D780 + Lens 24-120mm F/4G ED Nano",
    price: 50990000,
    originalPrice: 57990000,
    discountPercentage: Math.round(((57990000 - 50990000) / 57990000) * 100),
    images: [
      "https://bizweb.dktcdn.net/100/482/909/products/nikon-d780-with-24-120-lens-7-500x500.jpg?v=1683467618777",
      "https://example.com/nikon-d780-second-images.jpg",
      "https://example.com/nikon-d780-third-images.jpg",
    ],
    description:
      "Nikon D780 là sự kết hợp giữa một máy ảnh DSLR truyền thống và công nghệ mirrorless tiên tiến, kèm theo ống kính 24-120mm cho khả năng chụp linh hoạt trong mọi tình huống.",
  },
  {
    id: 23,
    name: "Máy ảnh Nikon D6 Body Only",
    price: 138990000,
    originalPrice: 159990000,
    discountPercentage: Math.round(((159990000 - 138990000) / 159990000) * 100),
    images: [
      "https://bizweb.dktcdn.net/100/482/909/products/nikon-d6-01-500x500.jpg?v=1683467136367",
      "https://example.com/nikon-d6-second-images.jpg",
      "https://example.com/nikon-d6-third-images.jpg",
    ],
    description:
      "Nikon D6 là dòng máy ảnh DSLR hàng đầu của Nikon, nổi bật với khả năng chụp ảnh tốc độ cao và hiệu suất cao cấp cho các nhiếp ảnh gia chuyên nghiệp.",
  },
];

const NewProduct = (props) => {
  const [selectedOption, setSelectedOption] = useState("Mặc định");
  const [activeSortOption, setActiveSortOption] = useState();
  const [selectedFilters, setSelectedFilters] = useState([]);

  const [selectedSortOptions, setSelectedSortOptions] = useState([]);

  // Hàm xử lý khi chọn checkbox filter
  const handleFilterChange = (filterTitle, option) => {
    const isSelected = selectedFilters.some(
      (selected) =>
        selected.option === option && selected.filter === filterTitle
    );

    if (isSelected) {
      setSelectedFilters(
        selectedFilters.filter(
          (selected) =>
            !(selected.option === option && selected.filter === filterTitle)
        )
      );
    } else {
      setSelectedFilters([...selectedFilters, { filter: filterTitle, option }]);
    }
  };

  // Hàm xử lý xoá tag
  const handleRemoveFilterTag = (filter) => {
    setSelectedFilters(
      selectedFilters.filter(
        (selected) =>
          !(
            selected.option === filter.option &&
            selected.filter === filter.filter
          )
      )
    );
  };

  const handleSelectSortOption = (option) => {
    if (!selectedSortOptions.includes(option)) {
      setSelectedSortOptions([...selectedSortOptions, option]);
    }
    setActiveSortOption(option.label);
  };

  const handleRemoveSortTag = (option) => {
    setSelectedSortOptions(
      selectedSortOptions.filter((item) => item.value !== option.value)
    );
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Hiển thị 9 sản phẩm mỗi trang

  // Tính toán sản phẩm sẽ hiển thị dựa trên trang hiện tại
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(productsData.length / itemsPerPage);

  // Hàm xử lý khi người dùng nhấn vào số trang
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="product_category_container col-lg-3 col-12">
          {filters.map((filter, index) => (
            <div key={index} className="item-filter-type">
              <div className="filter-type-title">
                <span>{filter.title}</span>
              </div>
              {filter.options.map((option, idx) => (
                <div key={idx} className="checkbox-container">
                  <input
                    type="checkbox"
                    value={option}
                    id={`${filter.title}-${idx}`}
                    checked={selectedFilters.some(
                      (selected) =>
                        selected.option === option &&
                        selected.filter === filter.title
                    )}
                    onChange={() => handleFilterChange(filter.title, option)}
                  />
                  <label htmlFor={`${filter.title}-${idx}`}>{option}</label>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="product_collection_container col-lg-9 col-12">
          <div className="banner-collection">
            <img src={BannerCollection} alt="Banner Collection" />
          </div>
          {/* hiển thị danh sách tag được chọn */}
          <div className="selected-tags">
            {selectedFilters.map((filter, index) => (
              <div key={index} className="tag">
                {filter.option}
                <span
                  className="remove-tag"
                  onClick={() => handleRemoveFilterTag(filter)}
                >
                  &times;
                </span>
              </div>
            ))}
            {selectedSortOptions.map((option) => (
              <div key={option.value} className="tag">
                {option.label}
                <span
                  className="remove-tag"
                  onClick={() => handleRemoveSortTag(option)}
                >
                  &times;
                </span>
              </div>
            ))}
          </div>
          <div className="sort-by">
            <span className="sort-by-title">Sắp xếp theo</span>
            <ul className="sort-by-dropdown">
              <li>
                <span className="selected">{selectedOption}</span>
                <span className="dropdown-chevron"></span>
                <ul className="content_ul">
                  <li
                    className="dropdown-option"
                    onClick={() => setSelectedOption("Mặc định")}
                  >
                    Mặc định
                  </li>
                  <li
                    className="dropdown-option"
                    onClick={() => setSelectedOption("A → Z")}
                  >
                    A → Z
                  </li>
                  <li
                    className="dropdown-option"
                    onClick={() => setSelectedOption("Z → A")}
                  >
                    Z → A
                  </li>
                </ul>
              </li>
            </ul>
            <div className="box-sort-by-item">
              {sortOptions.map((option) => (
                <div
                  key={option.value}
                  className={`sort-by-item ${
                    activeSortOption === option.label ? "active2" : ""
                  }`}
                  onClick={() => handleSelectSortOption(option)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
          <div className="products-view">
            <div className="row">
              {/* Hiển thị 9 sản phẩm trên trang hiện tại */}
              {currentProducts.map((product) => (
                <div className="product-item col-6 col-xl-4 col-lg-4 col-md-4">
                  <BoxProduct key={product.id} item={product} />
                </div>
              ))}
              {/* Pagination của Bootstrap */}
              <nav aria-label="" className="product-pagination">
                <ul className="pagination pagination-sm">
                  <li className="page-item">
                    <span
                      className="page-link previous-but"
                      onClick={() => handlePageClick(currentPage - 1)}
                      style={{
                        cursor: currentPage === 1 ? "not-allowed" : "pointer",
                      }}
                    >
                      &lt; {/* Ký hiệu cho nút lùi */}
                    </span>
                  </li>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <li
                      key={i}
                      className={`page-item ${
                        currentPage === i + 1 ? "active2" : ""
                      }`}
                    >
                      <span
                        className="page-link"
                        onClick={() => handlePageClick(i + 1)}
                      >
                        {i + 1}
                      </span>
                    </li>
                  ))}
                  <li className="page-item">
                    <span
                      className="page-link next-but"
                      onClick={() => handlePageClick(currentPage + 1)}
                      style={{
                        cursor:
                          currentPage === totalPages
                            ? "not-allowed"
                            : "pointer",
                      }}
                    >
                      &gt; {/* Ký hiệu cho nút tiến */}
                    </span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
