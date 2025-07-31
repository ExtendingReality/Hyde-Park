import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath: "/hyde-park",
    output: "export", 
    images:{
        unoptimized:true
    }
};

export default nextConfig;
