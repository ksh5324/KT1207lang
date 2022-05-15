/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
};

// module.exports = nextConfig;

// module.exports = withTM({
//   reactStrictMode: true,
//   webpack: (config) => {
//     // 아래를 추가합니다.
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ["@svgr/webpack"],
//     });
//     return config;
//   },
// });

// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       // 웹팩설정에 로더 추가함
//       test: /\.svg$/,
//       issuer: {
//         test: /\.(js|ts)x?$/,
//       },
//       use: ["@svgr/webpack"],
//     });

//     return config;
//   },
// };
