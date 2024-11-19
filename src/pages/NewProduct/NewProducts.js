import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Thêm useNavigate
import BannerCollection from "../../assets/images/banner-collection.png";
import "./NewProduct.css";
import axios from "axios";
import BoxProduct from "../../components/componentProduct/BoxProduct";

const filters = [
    {
        title: "Loại sản phẩm",
        options: ["Wanbo T Series", "Wanbo X Series", "Davinci Series", "Mozart Series", "Phụ kiện"],
    },
    {
        title: "Chọn mức giá",
        options: ["Giá dưới 5 trăm", "5trăm - 1tr", "1tr - 2tr", "2tr - 5tr", "5tr - 11tr"],
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

const NewProducts = () => {
    const [selectedOption, setSelectedOption] = useState("Mặc định");
    const [activeSortOption, setActiveSortOption] = useState();
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const categoryMapping = {
        "Wanbo T Series": "wanbo-t",
        "Wanbo X Series": "wanbo-x",
        "Davinci Series": "davinci-series",
        "Mozart Series": "mozart",
        "Phụ kiện": "phu-kien",
    };
    // Lấy sản phẩm từ API theo query string
    const fetchProducts = async () => {
        const urlParams = new URLSearchParams(location.search);
        const catUrl = urlParams.get("catUrl") || "";
        const minPrice = urlParams.get("minPrice");
        const maxPrice = urlParams.get("maxPrice");
        // if (catUrl) {
        //     setSelectedFilters(catUrl)
        // }

        try {
            const response = await axios.get(`http://192.168.245.190:8002/api/member/filter-category`, {
                params: {
                    catUrl,
                    minPrice: minPrice || 0,         // nếu minPrice không có thì đặt là 0
                    maxPrice: maxPrice || 100000000, // nếu maxPrice không có thì đặt là 100000000
                },
            });
            if (response.data.status) {
                setProducts(response.data.listProduct);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        const selectedCategoryName = selectedFilters.find(filter => filter.filter === "Loại sản phẩm")?.option || '';
        const selectedCategory = categoryMapping[selectedCategoryName] || '';
        const selectedPriceRange = selectedFilters.find(filter => filter.filter === "Chọn mức giá")?.option || '';
        const [minPrice, maxPrice] = parsePriceRange(selectedPriceRange);

        const searchParams = new URLSearchParams();
        if (selectedCategory) searchParams.append("catUrl", selectedCategory);
        if (minPrice !== 0 || maxPrice !== 100000000) {  // Chỉ thêm khi khác giá trị mặc định
            searchParams.append("minPrice", minPrice);
            searchParams.append("maxPrice", maxPrice);
        }

        navigate({ search: searchParams.toString() });
    }, [selectedFilters, navigate]);


    // Gọi API khi URL thay đổi
    useEffect(() => {
        fetchProducts();
    }, [location.search]);

    const parsePriceRange = (range) => {
        switch (range) {
            case "Giá dưới 5 trăm":
                return [1, 500000];
            case "5trăm - 1tr":
                return [500000, 1000000];
            case "1tr - 2tr":
                return [1000000, 2000000];
            case "2tr - 5tr":
                return [2000000, 5000000];
            case "5tr - 11tr":
                return [5000000, 20000000];
            default:
                return [0, 100000000]; // No filter
        }
    };

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
            setSelectedFilters([
                ...selectedFilters.filter((selected) => selected.filter !== filterTitle),
                { filter: filterTitle, option }
            ]);
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

    const [selectedSortOptions, setSelectedSortOptions] = useState([]);

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

    const currentProducts = products.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    const totalPages = Math.ceil(products.length / itemsPerPage);

    // Hàm xử lý khi người dùng nhấn vào số trang
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    console.log(">>>>cehck :", selectedFilters);


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
                                    className={`sort-by-item ${activeSortOption === option.label ? "active2" : ""
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
                            {products.map((product) => (
                                <div className="product-item col-6 col-xl-4 col-lg-4 col-md-4" key={product.id}>
                                    <BoxProduct item={product} />
                                </div>
                            ))}
                        </div>

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
                                        className={`page-item ${currentPage === i + 1 ? "active2" : ""
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
    );
};

export default NewProducts;
