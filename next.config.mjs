const repo = 'p'; // ← Remplacé par le nom exact de ton dépôt GitHub
const isGithubPages = process.env.GITHUB_PAGES === 'true';

let userConfig = undefined;
try {
  // try to import ESM first
  userConfig = await import('./v0-user-next.config.mjs');
} catch (e) {
  try {
    // fallback to CJS import
    userConfig = await import('./v0-user-next.config');
  } catch (innerError) {
    // ignore error
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

if (userConfig) {
  const config = userConfig.default || userConfig;
  for (const key in config) {
    if (typeof nextConfig[key] === 'object' && !Array.isArray(nextConfig[key])) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...config[key],
      };
    } else {
      nextConfig[key] = config[key];
    }
  }
}

if (isGithubPages) {
  nextConfig.basePath = `/${repo}`;
  nextConfig.assetPrefix = `/${repo}/`;
  nextConfig.trailingSlash = true; 
  
}


export default nextConfig;
