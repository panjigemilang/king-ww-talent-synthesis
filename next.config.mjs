/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.hakush.in",
        port: "",
        pathname: "/ww/UI/UIResources/**",
      },
    ],
  },
}

export default nextConfig
