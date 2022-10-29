const deviceSizes = {
  mobile: "375px",
  tablet: "554px",
  laptop: "1024px",
};
const device = {
  mobile: "screen and (max-width:557px)",
  tablet: "screen and (min-width:558px) and (max-width:1199px)",
  laptop: "screen and (min-width:1200px)",
  mobileAndTablet: "screen and (max-width:1199px)",
};
const theme = {
  device,
};
export default theme;
