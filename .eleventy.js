// const yaml = require("js-yaml");

// const filters = require('./utils/filters.js');

module.exports = function (eleventyConfig) {

  // Filters & Shortcodes
  // filters(eleventyConfig);
  // shortcodes(eleventyConfig);

  eleventyConfig.addPassthroughCopy("src/assets/img");
  // eleventyConfig.addPassthroughCopy('src/favicon.ico');
  // eleventyConfig.addPassthroughCopy('src/site.webmanifest');
  // eleventyConfig.addPassthroughCopy('src/_redirects');

  // Add support for YAML data files
  // eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    
    dir: {
      input: 'src',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
      output: '_site',
    }
  }
}