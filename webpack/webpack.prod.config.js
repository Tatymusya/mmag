import { merge } from 'webpack-merge';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import commonConfig from '../webpack/webpack.common.config.js';

const prodConfig = merge(commonConfig, {
  plugins: [],
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
});


export default prodConfig;