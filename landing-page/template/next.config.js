const path = require('path')
const withImages = require('next-images')
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/scss')],
    eslint: {
      // Warning: Dangerously allow production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  },
  images: {
    loader: "imgix",
    path: "",
  }
}
// module.exports = withImages({
//   fileExtensions: ["jpg", "jpeg", "png", "gif"],
//   webpack(config, options) {
//     return config
//   }
// })