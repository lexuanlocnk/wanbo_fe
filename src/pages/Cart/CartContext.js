import React, { createContext, useEffect, useState } from "react";

// Tạo Context cho giỏ hàng
export const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("dataCart")) || [] // Đảm bảo giá trị mặc định là mảng rỗng
  );

  // Hàm để thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Tìm sản phẩm đã có trong giỏ hàng
      const existingProductIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );

      // Nếu sản phẩm đã có, tăng số lượng
      if (existingProductIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex].quantity += product.quantity; // Tăng số lượng
        return updatedItems;
      }

      // Nếu sản phẩm chưa có, thêm vào giỏ
      return [...prevItems, { ...product, quantity: product.quantity }];
    });
  };


  // Hàm cập nhật số lượng sản phẩm
  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + amount } : item
      )
    );
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
