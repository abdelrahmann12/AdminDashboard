
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
        }
      : {
          // palette values for dark mode
        }),
  },
});

// export const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           primary: { main: "#1976d2" },
//           // باقي الألوان هنا
//         }
//       : {
//           primary: { main: "#90caf9" },
//           // باقي الألوان هنا
//         }),
//   },
// });
