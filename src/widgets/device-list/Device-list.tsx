import { memo } from "react";
import classNames from "clsx";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "app/hooks/hooks";
import { routePath } from "app/routes/routePaths";
import DeviceItem from "entities/device-item";

import styles from "./Device-list.module.scss";

interface Props {
  className?: string;
}

const DeviceList: React.FunctionComponent<Props> = memo((props) => {
  const { className = "" } = props;
  const { devices } = useAppSelector((state) => state.device);
  return (
    <div className={styles["device-list"]}>
      {devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </div>
  );
});

DeviceList.displayName = "DeviceList";

export default DeviceList;
