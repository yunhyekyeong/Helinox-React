const breakpoints = {
  xsm: "320px",
  sm: "425px",
  md: "768px",
  lg: "1024px",
  xlg: "1280px",
  xxlg: "1440px",
};

export const mediaMin = {
  xsm: `@media (min-width: ${breakpoints.xsm})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xlg: `@media (min-width: ${breakpoints.xlg})`,
  xxlg: `@media (min-width: ${breakpoints.xxlg})`,
};

export const mediaMax = {
  xsm: `@media (max-width: ${breakpoints.xsm})`,
  sm: `@media (max-width: ${breakpoints.sm})`,
  md: `@media (max-width: ${breakpoints.md})`,
  lg: `@media (max-width: ${breakpoints.lg})`,
  xlg: `@media (max-width: ${breakpoints.xlg})`,
  xxlg: `@media (max-width: ${breakpoints.xxlg})`,
};
