import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";
import { cameraItem, lendItem, slides } from "../pages/Data";
import { Thumbnails } from "yet-another-react-lightbox/plugins";

const LightboxButton = ({ productId }) => {
  const [open, setOpen] = useState(false);


  // Tìm item theo id
  const selectedItem = lendItem.find((item) => item.id === productId);

  // Chuyển đổi images thành slides cho Lightbox
  const slides = selectedItem ? selectedItem.images.map((src) => ({ src })) : [];

  return (
    <div>
      <Button variant="outline-secondary" onClick={() => setOpen(true)} style={{backgroundColor: "white", color: "black", fontSize: 14}}>
      <i class="bi bi-eye"></i>
      </Button>

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
