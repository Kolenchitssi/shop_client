import { useContext, memo } from "react";
import { useAppSelector } from "app/hooks/hooks";

import classNames from "clsx";
import Card from "shared/Card";

import styles from "./BrandBar.module.scss";
// import { Context } from "../index";

type Props = {
  className?: string;
};

const BrandBar: React.FunctionComponent<Props> = memo(({ className }) => {
  // const { device } = useContext(Context);

  const { user, isUserAuth, isUserLoading } = useAppSelector(
    (state) => state.user //todo need device
  );

  //!temp
  const device = {
    brands: [
      { id: 1, name: "Name1" },
      { id: 2, name: "Name2" },
    ],
    selectedBrand: { id: 1 },
  };

  // const isSelected = brand.id === device.selectedBrand.id;
  return (
    <div className={styles.brand_bar}>
      {device.brands.map((brand) => (
        <div
          className={classNames(className, styles.card, {
            [`${styles.brand}--selected`]:
              brand.id === device.selectedBrand?.id,
          })}
          key={brand.id}
          onClick={() => {
            console.log(brand);
            // device.setSelectedBrand(brand)
          }}
        >
          {brand.name}
        </div>
      ))}
    </div>
  );
});

export default BrandBar;
