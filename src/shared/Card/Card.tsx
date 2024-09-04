import React, { ReactElement, ReactNode } from "react";
import { Typography } from "@mui/material";
import classNames from "clsx";

import styles from "./card.module.scss";

interface CardProps {
  title?: string | ReactElement;
  className?: string;
  toolbar?: ReactNode | null;
  children: ReactNode;
}

const Card: React.FunctionComponent<CardProps> = ({
  title = "",
  children,
  toolbar,
  className,
}) => (
  <div className={classNames("card", className)}>
    {title && (
      <div className={styles["card__header"]}>
        <Typography variant="h2" className={styles["card__header-title"]}>
          {title}
        </Typography>
        {!!toolbar && toolbar}
      </div>
    )}
    <div className={styles["card__content"]}>{children}</div>
  </div>
);

Card.displayName = "Card";

export default Card;
