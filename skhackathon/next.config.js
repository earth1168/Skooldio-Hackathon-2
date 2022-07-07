/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/api/graphql",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://studio.apollographql.com",
          },
          { key: "Access-Control-Allow-headers", value: "Content-type" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
