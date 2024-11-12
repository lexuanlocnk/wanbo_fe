import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Để lấy URL param
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

const NewProducts = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [products, setProducts] = useState([]);
    const location = useLocation();

    const categoryMapping = {
        "Wanbo T Series": "wanbo-t",
        "Wanbo X Series": "wanbo-x",
        "Davinci Series": "davinci-series",
        "Mozart Series": "mozart",
        "Phụ kiện": "phu-kien",
    };

    const fetchProducts = async () => {
        const selectedCategoryName = selectedFilters.find(filter => filter.filter === "Loại sản phẩm")?.option || '';
        const selectedCategory = categoryMapping[selectedCategoryName] || '';
        const selectedPriceRange = selectedFilters.find(filter => filter.filter === "Chọn mức giá")?.option || '';
        const [minPrice, maxPrice] = parsePriceRange(selectedPriceRange);

        try {
            const response = await axios.get(`http://192.168.245.190:8002/api/member/filter-category`, {
                params: {
                    catUrl: selectedCategory,
                    minPrice: minPrice || 0,
                    maxPrice: maxPrice || 100000000,
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
        handleInitialFilters();
    }, [location]);

    useEffect(() => {
        fetchProducts();
    }, [selectedFilters]);

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

    const handleInitialFilters = () => {
        const urlParams = new URLSearchParams(location.search);
        const urlCategory = urlParams.get("category");

        if (urlCategory && Object.values(categoryMapping).includes(urlCategory)) {
            const initialCategory = Object.keys(categoryMapping).find(key => categoryMapping[key] === urlCategory);
            setSelectedFilters([{ filter: "Loại sản phẩm", option: initialCategory }]);
        } else {
            // Nếu không có `param`, chọn `checkbox` đầu tiên
            setSelectedFilters([{ filter: "Loại sản phẩm", option: filters[0].options[0] }]);
        }
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
                    <div className="products-view">
                        <div className="row">
                            {products.map((product) => (
                                <div className="product-item col-6 col-xl-4 col-lg-4 col-md-4" key={product.id}>
                                    <BoxProduct item={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewProducts;
