import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Kiểm tra vị trí scroll, nếu lớn hơn 300px thì hiện nút
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener khi component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Chỉ chạy một lần khi component được mount

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Thêm hiệu ứng cuộn mượt mà
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="backtop"
          title="Lên đầu trang"
          style={{
            backgroundColor: "black",
            position: "fixed", // Giữ nút cố định
            bottom: "20px", // Đặt ở dưới cùng
            right: "20px", // Đặt ở bên phải
            border: "none",
            color: "white",
            borderRadius: "15%", // Làm nút tròn
            width: "50px", // Chiều rộng nút
            height: "50px", // Chiều cao nút
            fontSize: "24px", // Kích thước mũi tên
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Đổ bóng cho nút
            zIndex: 999, 
          }}
        >
          ↑
        </button>
      )}
    </>
  );
};

export default BackToTop;
