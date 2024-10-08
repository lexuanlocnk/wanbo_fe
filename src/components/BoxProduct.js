import React from "react";
import Card from "react-bootstrap/Card";

const BoxProduct = ({ item }) => {
  return (
    <div
      className="me-3 ms-1 my-4 border rounded shadow4"
      key={item.id}
      style={{ display: "inline-block" }}
    >
      <Card className="prdItem">
        <Card.Img variant="top" src={item.images} className="p-4 img" />

        {item.discountPercentage > 0 && (
          <Card.Text className="sale">-{item.discountPercentage}%</Card.Text>
        )}

        <Card.Body>
          <a href={`/product/${item.id}`} className="card-title">
            <Card.Title className="prdName">{item.name}</Card.Title>
          </a>

          <Card.Text className="price">
            {item.price.toLocaleString("vi-VN")} VND
          </Card.Text>
          <Card.Text className="original-price">
            {item.discountPercentage > 0 ? (
              <>
                {item.originalPrice.toLocaleString("vi-VN")} VND <br />
              </>
            ) : (
              <br />
            )}
          </Card.Text>

          <Card.Text>
            {item.quantitysale > 0 ? <>{item.quantitysale} sản phẩm đã bán</> : <></>}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BoxProduct;
