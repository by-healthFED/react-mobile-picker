/*
 * By-Health Front-end Team (https://www.by-health.com/)
 *
 * Copyright © 2016-present By-Health Co Ltd. All rights reserved.
 */

// PostCSS - A tool for transforming CSS with JavaScript
// https://github.com/postcss/postcss
module.exports = () => ({
  plugins: [
    // Add vendor prefixes to CSS rules using values from caniuse.com
    // https://github.com/postcss/autoprefixer
    require('autoprefixer')({
      // flexbox: 'no-2009', // Recommended for modern browsers
    }),
  ],
});
