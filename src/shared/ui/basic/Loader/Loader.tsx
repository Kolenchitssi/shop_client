import { useEffect, useState } from "react";
import classNames from "clsx";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import styles from "./Loader.module.scss";

interface Props {
  className?: string;
  progress?: number;
}

const Loader: React.FunctionComponent<Props> = (props) => {
  const { className = "", progress } = props;

  const [fakeProgress, setFakeProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFakeProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{ width: "100%", color: "grey.500" }}
      className={classNames(styles.spinner, className, "spinner")}
    >
      <LinearProgress
        variant="determinate"
        color="inherit"
        value={progress ? progress : fakeProgress}
      />
    </Box>
  );
};

export default Loader;
