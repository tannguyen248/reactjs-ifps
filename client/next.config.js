module.exports = {
  images: {
    domains: ["pixabay.com"],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3001/:path*", // Proxy to Backend
      },
    ];
  },
};
