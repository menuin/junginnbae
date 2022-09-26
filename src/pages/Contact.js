import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Contact() {
  let location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return <>Contact</>;
}

export default Contact;
