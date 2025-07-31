import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: "/hyde-park",
    output: "export" // <=== enables static exports
};

export default nextConfig;
