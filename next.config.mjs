/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // async redirects () {
  //   return [
  //     // Basic redirect
  //     {
  //       source: "/",
  //       destination: "/dashboard/",
  //       permanent: true,
  //     }
  //   ]
  // },
}

export default nextConfig
