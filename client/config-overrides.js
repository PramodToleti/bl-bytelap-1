const path = require("path")

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      antd: path.resolve(__dirname, "node_modules/antd"),
    }
    return config
  },
}
