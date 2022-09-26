import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function Videos() {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return <>Videos</>;
}

export default Videos;
