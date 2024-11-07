import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import HomeApi from "../../api/homeApi";

// Tạo Context cho giỏ hàng
export const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Hàm để lấy dữ liệu giỏ hàng từ API
  const fetchCartItems = async () => {
    const homeApi = new HomeApi();
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const response = await homeApi.getListCart();

      setCartItems(response.data.data || []);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu giỏ hàng:", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = async (product) => {
    const homeApi = new HomeApi();
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await homeApi.postListCart(product);

      if (response.status === true) {
        setCartItems((prevItems) => [...prevItems, product]);
      }
      fetchCartItems(); // Cập nhật lại giỏ hàng sau khi thêm sản phẩm
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm vào giỏ hàng:", error);
    }
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = async (id) => {
    const homeApi = new HomeApi();
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      await homeApi.deleteListCart(id);

      fetchCartItems(); // Cập nhật lại giỏ hàng sau khi xóa sản phẩm
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm khỏi giỏ hàng:", error);
    }
  };


  // Hàm TĂNG số lượng sản phẩm trong giỏ hàng
  const increaseQuantity = async (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quality: item.quality + 1 } : item
    );
    setCartItems(updatedCartItems); // Cập nhật UI ngay lập tức
    const homeApi = new HomeApi();
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const product = updatedCartItems.find((item) => item.id === id);
      await homeApi.putListCart(id, product);

    } catch (error) {
      console.error("Lỗi khi tăng số lượng sản phẩm:", error);
      // Khôi phục số lượng nếu có lỗi
      setCartItems(cartItems);
    }
  };

  // Hàm GIẢM số lượng sản phẩm trong giỏ hàng
  const decreaseQuantity = async (id) => {
    const product = cartItems.find((item) => item.id === id);
    if (product.quality <= 1) return;

    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quality: item.quality - 1 } : item
    );
    setCartItems(updatedCartItems); // Cập nhật UI ngay lập tức
    const homeApi = new HomeApi();
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      await homeApi.putListCart(id, product);
    } catch (error) {
      console.error("Lỗi khi giảm số lượng sản phẩm:", error);
      // Khôi phục số lượng nếu có lỗi
      setCartItems(cartItems);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
