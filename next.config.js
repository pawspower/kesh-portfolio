/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  test: /\.css$/, 
   use: [ 
     'style-loader', 
     'css-loader', 
   ], 
   webpack: (config, options) =>
    {
        config.module.rules.push({
            test: /\.pdf$/i,
            type: 'asset/source'
        })

        return config
    }
}

module.exports = nextConfig
