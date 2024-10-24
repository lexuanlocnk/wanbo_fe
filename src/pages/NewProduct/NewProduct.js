import React, { useState } from "react";
import BannerCollection from "../../assets/images/banner-collection.png";
import "./NewProduct.css";
import ProductItem from "../../components/productItem/productItem";
import ProductImg from "../../assets/images/product-img-test.png";

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
    id: 1,
    name: "Insta360 X3 (One X3)",
    price: "11.560.000đ",
    discount: "-14%",
  },
  {
    id: 2,
    name: "DJI Action 2 Dual-Screen",
    price: "9.999.000đ",
    discount: "-10%",
  },
  { id: 3, name: "Sony Alpha A7 III", price: "50.000.000đ", discount: "-5%" },
  { id: 4, name: "GoPro HERO10", price: "12.000.000đ", discount: "-20%" },
  { id: 5, name: "Canon EOS R5", price: "90.000.000đ", discount: "-8%" },
  { id: 6, name: "Panasonic Lumix S1", price: "35.000.000đ", discount: "-12%" },
  { id: 7, name: "Fujifilm X-T4", price: "28.000.000đ", discount: "-18%" },
  { id: 8, name: "Nikon Z6 II", price: "40.000.000đ", discount: "-15%" },
  { id: 9, name: "Blackmagic 6K Pro", price: "60.000.000đ", discount: "-22%" },
  { id: 10, name: "Leica Q2", price: "120.000.000đ", discount: "-3%" },
  { id: 11, name: "Sigma fp L", price: "22.000.000đ", discount: "-7%" },
];

const NewProduct = (props) => {
  const [selectedOption, setSelectedOption] = useState("Mặc định");
  const [activeSortOption, setActiveSortOption] = useState();

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
          <div className="sort-by">
            <span className="sort-by-title">Sắp xếp theo</span>
            <ul className="sort-by-dropdown">
              <li>
                <span>{selectedOption}</span>
                <span className="dropdown-chevron"></span>
                <ul className="content_ul">
                  <li onClick={() => setSelectedOption("Mặc định")}>
                    Mặc định
                  </li>
                  <li onClick={() => setSelectedOption("A → Z")}>A → Z</li>
                  <li onClick={() => setSelectedOption("Z → A")}>Z → A</li>
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
                  onClick={() => setActiveSortOption(option.label)}
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
                <div
                  key={product.id}
                  className="product-item col-6 col-xl-4 col-lg-4 col-md-4"
                >
                  <div className="item_product_main">
                    <div className="product-thumbnail">
                      <a className="image_thumb">
                        <img
                          width={480}
                          height={480}
                          src={ProductImg}
                          loading="lazy"
                          alt={product.name}
                        />
                      </a>
                      <span className="smart">{product.discount}</span>
                    </div>
                    <div className="product-info">
                      <div className="product-name">
                        <a>{product.name}</a>
                      </div>
                      <div className="price-box">{product.price}</div>
                    </div>
                  </div>
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
