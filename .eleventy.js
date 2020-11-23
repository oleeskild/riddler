module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("src/site/favicon.ico");

    // make the seed target act like prod
    return {
      dir: {
        input: "src/site",
        output: "dist",
        data: `_data`
      },
      templateFormats : ["njk", "md", "11ty.js"],
      htmlTemplateEngine : "njk",
      markdownTemplateEngine : "njk"
    };
  
  };