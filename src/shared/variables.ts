import { Colors, Fonts, Breakpoints } from "./typedefs";

// Page colors to use inside styled components
export const colors: Record<Colors, string> = {
  [Colors.purple1]: "#3A3761",
  [Colors.purple2]: "#7A70FA",
  [Colors.purple3]: "#8680E0",
  [Colors.purple4]: "#292561",
  [Colors.purple5]: "#6762AD",
  [Colors.purple6]: "#3F3D56",
  [Colors.red]: "#FF6584",
  [Colors.yellow]: "#F2E205",
  [Colors.white]: "#fff",
  [Colors.black]: "#000",
  [Colors.gray]: "#EFEFEF",
};

export const fonts: Record<Fonts, string> = {
  [Fonts.fira]: `"Fira Code", mono`,
  [Fonts.ibm]: `"IBM Plex Sans", sans-serif`,
};

// Responsive breakpoints
export const bps: Record<Breakpoints, string> = {
  [Breakpoints.sm]: "576px",
  [Breakpoints.md]: "768px",
  [Breakpoints.lg]: "992px",
  [Breakpoints.xl]: "1200px",
};
