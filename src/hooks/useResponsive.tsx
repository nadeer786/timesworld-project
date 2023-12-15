// useResponsive.js
import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const isDeskTop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return {
    isDeskTop,
    isTabletOrMobile,
  };
};

export default useResponsive;
