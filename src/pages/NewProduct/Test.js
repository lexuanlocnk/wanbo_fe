import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

const categoryMapping = {
    "wanbo-t": "Wanbo T Series",
    "wanbo-x": "Wanbo X Series",
    "davinci-series": "Davinci Series",
    "mozart": "Mozart Series",
    "phu-kien": "Phụ kiện",
};

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
            return [5000000, 11000000];
        default:
            return [0, 100000000];
    }
};

const NewProducts = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();

    const fetchProducts = async () => {
        const urlParams = new URLSearchParams(location.search);
        const catUrl = urlParams.get("catUrl") || "";
        const minPrice = urlParams.get("minPrice");
        const maxPrice = urlParams.get("maxPrice");

        try {
            const response = await axios.get(`http://192.168.245.190:8002/api/member/filter-category`, {
                params: {
                    catUrl,
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
        const urlParams = new URLSearchParams(location.search);
        const catUrl = urlParams.get("catUrl");
        const minPrice = urlParams.get("minPrice");
        const maxPrice = urlParams.get("maxPrice");

        const filtersFromURL = [];

        if (catUrl && categoryMapping[catUrl]) {
            filtersFromURL.push({ filter: "Loại sản phẩm", option: categoryMapping[catUrl] });
        }

        if (minPrice && maxPrice) {
            const priceOption = filters[1].options.find(option => {
                const [rangeMin, rangeMax] = parsePriceRange(option);
                return rangeMin.toString() === minPrice && rangeMax.toString() === maxPrice;
            });
            if (priceOption) {
                filtersFromURL.push({ filter: "Chọn mức giá", option: priceOption });
            }
        }

        setSelectedFilters(filtersFromURL);
    }, [location.search]);

    useEffect(() => {
        const selectedCategoryName = selectedFilters.find(filter => filter.filter === "Loại sản phẩm")?.option || '';
        const selectedCategory = Object.keys(categoryMapping).find(key => categoryMapping[key] === selectedCategoryName) || '';
        const selectedPriceRange = selectedFilters.find(filter => filter.filter === "Chọn mức giá")?.option || '';
        const [minPrice, maxPrice] = parsePriceRange(selectedPriceRange);

        const searchParams = new URLSearchParams();
        if (selectedCategory) searchParams.append("catUrl", selectedCategory);
        if (minPrice !== 0 || maxPrice !== 100000000) {
            searchParams.append("minPrice", minPrice);
            searchParams.append("maxPrice", maxPrice);
        }

        navigate({ search: searchParams.toString() });
    }, [selectedFilters, navigate]);

    useEffect(() => {
        fetchProducts();
    }, [location.search]);

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
