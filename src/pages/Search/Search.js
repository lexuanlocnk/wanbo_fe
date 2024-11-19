import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Để lấy URL param
import BannerCollection from "../../assets/images/banner-collection.png";
import "./../NewProduct/NewProduct.css";
import axios from "axios";
import BoxProduct from "../../components/componentProduct/BoxProduct";
import HomeApi from "../../api/homeApi";

const Search = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [products, setProducts] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const key = queryParams.get("key");
        if (key) {
            fetchProducts(key);
        }
    }, [location]);

    const fetchProducts = async (key) => {
        const homeApi = new HomeApi();
        try {
            const response = await homeApi.getSearch({ params: { key } });
            if (response.data.status) {
                setProducts(response.data.product);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };


    return (
        <div className="container">
            <div className="row mt-3">
                <div className="product_collection_container col-12">
                    <div className="products-view">
                        <div className="row">
                            {products.map((product) => (
                                <div className="product-item col-6 col-xl-3 col-lg-4 col-md-4" key={product.ProductId}>
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

export default Search;
