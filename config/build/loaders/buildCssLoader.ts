import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildCssLoader = (isDev: boolean) => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      !isDev ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) => resourcePath.includes('.module.'),
            localIdentName: isDev
              ? // ? '[path][name]__[local]--[hash:base64:5]'
                '[local]-[hash:base64:4]'
              : '[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  };
};
