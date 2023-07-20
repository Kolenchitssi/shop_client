import React, { useContext, useEffect, memo } from "react";
// import { observer } from "mobx-react-lite";
// import { Container, Row, Col } from "react-bootstrap";
// import BrandBar from "../components/BrandBar";
// import DeviseList from "../components/DeviceList";
// import TypeBar from "../components/TypeBar";
// import { Context } from "../index";
// import Pages from "../components/Pages";
// import { fetchBrands, fetchTypes, fetchDevices } from "../http/deviceApi";
import styles from "./shop.module.scss";

const Shop = memo(() => {
  // const { device } = useContext(Context);

  // useEffect(() => {
  //   fetchTypes().then((data) => device.setTypes(data));
  //   fetchBrands().then((data) => device.setBrands(data));
  //   fetchDevices(null, null, 1, 10).then((data) => {
  //     device.setDevices(data.rows);
  //     device.setTotalCount(data.count);
  //   });
  // }, []);

  // useEffect(() => {
  //   fetchDevices(
  //     device.selectedType.id,
  //     device.selectedBrand.id,
  //     device.page,
  //     2
  //   ).then((data) => {
  //     device.setDevices(data.rows);
  //     device.setTotalCount(data.count);
  //   });
  // }, [device.page, device.selectedType, device.selectedBrand]);

  return (
    <div className={styles.shop}> shop1 </div>
    // <Container>
    //   <Row className="mt-3">
    //     <Col md={3}>
    //       <TypeBar />
    //     </Col>
    //     <Col md={9}>
    //       <BrandBar />
    //       <DeviseList />
    //       <Pages />
    //     </Col>
    //   </Row>
    // </Container>
  );
});

export default Shop;
