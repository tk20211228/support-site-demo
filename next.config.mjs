/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // basePath: "/",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "supprot-site-demo.assets.newt.so",
      },
    ],
  },
  // images: {
  //   // unoptimized: true,
  // },
};

export default nextConfig;
