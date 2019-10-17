import rewire from 'rewire';
const defaults = rewire('react-scripts/scripts/build.js');
const config = defaults.__get__('config');

// New name for our CSS and JS files
const newName = "app";

// Random number for cache busting
const cacheBust = '?cb='+(Math.floor(Math.random() * 1000000) + 1);

// Consolidate chunk files instead
config.optimization.splitChunks = {
  cacheGroups: {
    default: false,
  },
};

// Move runtime into bundle instead of separate file
config.optimization.runtimeChunk = false;

// JS
config.output.filename = 'static/js/'+newName+'.js'+cacheBust;

// CSS. "5" is MiniCssPlugin
config.plugins[5].options.filename = 'static/css/'+newName+'.css'+cacheBust;
