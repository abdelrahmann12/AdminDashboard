import { Box, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import Header from "../../components/Header/Header";
import React from "react";


export default function Pie({isDashboard=false}) {
const theme = useTheme();
  const data = [
    {
      id: "lisp",
      label: "lisp",
      value: 330,
      color: "hsl(214, 70%, 50%)",
    },
    {
      id: "ruby",
      label: "ruby",
      value: 544,
      color: "hsl(218, 70%, 50%)",
    },
    {
      id: "c",
      label: "c",
      value: 384,
      color: "hsl(360, 70%, 50%)",
    },
    {
      id: "stylus",
      label: "stylus",
      value: 434,
      color: "hsl(250, 70%, 50%)",
    },
    {
      id: "javascript",
      label: "javascript",
      value: 333,
      color: "hsl(326, 70%, 50%)",
    },
  ];

  const MyPie = ({ data }) => (
    <ResponsivePie
      theme={{
        // @ts-ignore
        textColor: theme.palette.text.primary,
        fontSize: 11,
        axis: {
          domain: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legend: {
            text: {
              fontSize: 12,
              fill: theme.palette.text.primary,
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.secondary,
            },
          },
        },
        grid: {
          line: {
            stroke: theme.palette.divider,
            strokeWidth: 1,
          },
        },
        legends: {
          title: {
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
            },
          },
          text: {
            fontSize: 11,
            fill: theme.palette.text.primary,
          },
          ticks: {
            line: {},
            text: {
              fontSize: 10,
              fill: theme.palette.text.primary,
            },
          },
        },
        annotations: {
          text: {
            fontSize: 13,
            fill: theme.palette.text.primary,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          link: {
            stroke: "#000000",
            strokeWidth: 1,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          outline: {
            stroke: "#000000",
            strokeWidth: 2,
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
          symbol: {
            fill: "#000000",
            outlineWidth: 2,
            outlineColor: "#ffffff",
            outlineOpacity: 1,
          },
        },
        tooltip: {
          container: {
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            fontSize: 12,
          },
          basic: {},
          chip: {},
          table: {},
          tableCell: {},
          tableCellValue: {},
        },
      }}
      data={data}
      margin={isDashboard? { top: 10, right: 0, bottom: 10, left: 0 }  :{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={isDashboard? 0.8 : 0.5}
      padAngle={0.6}
      cornerRadius={2}
      activeOuterRadiusOffset={8}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={theme.palette.text.primary}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      enableArcLabels={isDashboard? false : true}
      enableArcLinkLabels={isDashboard? false : true}
      legends={
        isDashboard?[] :
        
        [{
          anchor: "bottom",
          direction: "row",
          translateY: 56,
          itemWidth: 100,
          itemHeight: 18,
          symbolShape: "circle",
        },
      ]}
    />
  );

  return (
    <Box style={{ height: isDashboard ? "220px" : "75vh" }}>
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <MyPie data={data} />
    </Box>
  );
  
}
