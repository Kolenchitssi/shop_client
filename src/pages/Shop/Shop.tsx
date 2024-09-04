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
import Spinner from "shared/ui/basic/Spinner";
import BrandBar from "widgets/brand-bar";
import DeviseList from "widgets/device-list";
import { useAppSelector } from "app/hooks/hooks";

const Shop = memo(() => {
  // const { device } = useContext(Context);
  const { devices, selectedType, selectedBrand, page, limitOnPage } =
    useAppSelector((state) => state.device);

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

  //!temp
  const isFetching = false;
  return (
    <Spinner isFetching={isFetching}>
      <div className={styles.shop}>
        shop1
        <div className={styles.leftColumn}>{/* <TypeBar /> */}</div>
        <div className={styles.rightColumn}>
          <BrandBar />
          <DeviseList />
          {/* <Pages />         */}
        </div>
      </div>
    </Spinner>
  );
});

export default Shop;
