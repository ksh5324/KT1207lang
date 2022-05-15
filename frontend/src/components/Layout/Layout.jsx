import Image from "next/image";
import React, { useCallback } from "react";
import { ImageContainer, LayoutContainer } from "./layoutStyle";
import carrot from "../../assets/image/carrot.png";

const loop = [
  { x: 47.66, y: 77.68, size: 98 },
  { x: 34.97, y: 77.19, size: 98 },
  { x: 15.85, y: 49.92, size: 144 },
  { x: 20.22, y: 32.55, size: 156 },
  { x: 10.02, y: 64.04, size: 228 },
  { x: 9, y: 21.23, size: 228 },
  { x: 83.73, y: 47.08, size: 268 },
  { x: 83.73, y: 11.2, size: 172 },
  { x: 71.52, y: 21.59, size: 287 },
  { x: 58.83, y: 13.39, size: 223 },
  { x: 61.63, y: 40.42, size: 223 },
  { x: 50.94, y: 29.46, size: 160 },
  { x: 44.02, y: 44.4, size: 109 },
  { x: 74.26, y: 57.14, size: 184 },
  { x: 64.36, y: 69.72, size: 118 },
  { x: 49.73, y: 49.03, size: 252 },
  { x: 26.59, y: 32.55, size: 276 },
  { x: 40.44, y: 61.28, size: 149 },
  { x: 26.59, y: 61.28, size: 117 },
  { x: 23.86, y: 8.28, size: 198 },
  { x: 39.53, y: 22, size: 188 },
  { x: 44.99, y: 0, size: 228 },
  { x: 84.27, y: 75.24, size: 98 },
  { x: 16.87, y: 8.04, size: 98 },
  { x: 34.97, y: 17.94, size: 98 },
  { x: 67.95, y: 5.75, size: 128 },
];

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <LayoutContainer>
        <div className="background">
          {loop.map((v, i) => {
            return (
              <ImageContainer x={v.x} y={v.y} size={v.size} key={i}>
                <Image src={carrot} />
              </ImageContainer>
            );
          })}
          <div className="back"></div>
        </div>
      </LayoutContainer>
    </>
  );
};

export default Layout;
