import { memo } from "react";
import classNames from "clsx";
import { NavLink } from "react-router-dom";
import { routePath } from "app/routes/routePaths";
import { useNavigate } from "react-router-dom";
import { IDevice } from "features/device/device.models";

import star from "assets/icons/star.png";
import styles from "./Device-item.module.scss";

interface Props {
  device: IDevice;
}

const DeviceItem: React.FunctionComponent<Props> = memo(({ device }) => {
  const navigate = useNavigate();

  const { id, img } = device;

  return (
    <div
      className={styles["device-item"]}
      style={{ display: "flex", cursor: "pointer" }}
      onClick={() => navigate(routePath.DEVICE_ROUTE + "/" + id)}
    >
      <img
        className={styles["item-img"]}
        src={img && process.env.REACT_APP_API_URL + img} //! check
        alt="device-item"
      />
      <div className={styles.brand}>
        <div> Brand:</div>
        <div className={styles.rating}>
          <div>{device.rating}</div>
          <img className={styles.star} src={star} alt="Star" />
        </div>
      </div>
      <div> {device.name}</div>
    </div>
  );
});

DeviceItem.displayName = "DeviceItem";

export default DeviceItem;
