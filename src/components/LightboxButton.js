import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import { Thumbnails } from "yet-another-react-lightbox/plugins";
import { imageBaseUrl } from "../api/axiosConfig";

const LightboxButton = ({ productId }) => {
  const [open, setOpen] = useState(false);
  const { urlProduct } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(
          `http://192.168.245.190:8002/api/member/product-detail/${urlProduct}`
        );
        const data = await response.json();
        setProduct(data.productDetail || null);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProductDetail();
  }, [urlProduct]);

  // Tìm item theo id
  // const selectedItem = lendItem.find((item) => item.id === productId);

  // Chuyển đổi images thành slides cho Lightbox
  //const slides = product ? product.Image.map((src) => ({ src })) : [];   // mảng ảnh
  const slides =
    product && product.Image
      ? [{ src: `${imageBaseUrl}${product.Image}` }]
      : []; // ảnh đơn

  return (
    <div>
      <Button
        variant="outline-secondary w-100 h-100"
        onClick={() => setOpen(true)}
        style={{
          backgroundColor: "transparent",
          color: "black",
          fontSize: 14,
          position: "absolute",
          top: 0,
          left: 0,
          border: "none",
        }}
      ></Button>

      <Lightbox
        plugins={[Thumbnails]}
        open={open}
        slides={slides}
        close={() => setOpen(false)}
      />
    </div>
  );
};

export default LightboxButton;
