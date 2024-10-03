import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";

function ModelDetail(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Thông tin chi tiết
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Focal Length</td>
              <td>Mark</td>
            </tr>
            <tr>
              <td>Maximum Aperture</td>
              <td> f/1.8</td>
            </tr>
            <tr>
              <td>Lens Mount</td>
              <td>Canon RF</td>
            </tr>
            <tr>
              <td>Lens Format Coverage</td>
              <td>Full-Frame</td>
            </tr>
            <tr>
              <td>Angle of View</td>
              <td>84°</td>
            </tr>
            <tr>
              <td>Minimum Focus Distance</td>
              <td>5.5" / 14 cm</td>
            </tr>

            <tr>
              <td>Maximum Magnification</td>
              <td>0.5x</td>
            </tr>

            <tr>
              <td>Macro Reproduction Ratio</td>
              <td>1:2</td>
            </tr>

            <tr>
              <td>Optical Design</td>
              <td>11 Elements in 9 Groups</td>
            </tr>

            <tr>
              <td>Diaphragm Blades</td>
              <td>9, Rounded</td>
            </tr>

            <tr>
              <td>Focus Type</td>
              <td>Autofocus</td>
            </tr>

            <tr>
              <td>Image Stabilization</td>
              <td>Yes</td>
            </tr>

            <tr>
              <td>Filter Size</td>
              <td>52 mm (Front)</td>
            </tr>
            <tr>
              <td>Dimensions (ø x L)</td>
              <td>2.9 x 2.5" / 74.4 x 63.1 mm</td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModelDetail;
