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
      {
        protocol: "https",
        hostname: "imgur.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "images8.alphacoders.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "picfiles.alphacoders.com",
        port: "",
      },
    ],
  },
}

export default nextConfig
