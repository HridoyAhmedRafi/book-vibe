"use client";

import { BooksContext } from "@/context/BooksContext";
import { Ibook } from "@/types/books.type";
import { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x, y, width, height, index } = props;

  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={props.isActive ? 5 : 0}
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const fill = colors[(props.index ?? 0) % colors.length];
  return <Label {...props} fill={fill} />;
};

const ReadBooksPage = () => {
  const { readBooks } = useContext(BooksContext);
  const data = readBooks.map((book: Ibook, indx: number) => {
    return {
      name: book.bookName,
      uv: book.totalPages,
      pv: indx + 1,
      amt: indx + 1,
    };
  });

  return (
    <div className="container mx-auto px-4 py-10">
      <div className=" flex justify-center px-10">
        {readBooks.length > 0 ? (
          <BarChart
            style={{
              width: "100%",
              maxWidth: "900px",
              height: "500px",
            }}
            responsive
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 10,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 4" strokeWidth={1} />
            <Tooltip cursor={{ fillOpacity: 0.5 }} />
            <XAxis
              dataKey="name"
              interval={0}
              tick={{ fontSize: 11 }}
              height={60}
            />
            <YAxis width="auto" />
            <Bar dataKey="uv" shape={TriangleBar} activeBar>
              <LabelList content={CustomColorLabel} position="top" />
            </Bar>
            {/* <RechartsDevtools /> */}
          </BarChart>
        ) : (
          <h1 className="text-center py-10">No read books to display</h1>
        )}
      </div>
    </div>
  );
};

export default ReadBooksPage;
