module.exports = function(grunt) {
  grunt.loadNpmTasks('dr-grunt-svg-sprites');

   grunt.initConfig({
      "svg-sprites": {
          options: {
              spriteElementPath: "img",
              spritePath: "img/sprites",
              cssPath: "css",
          },
          shapes: {
            options: {
                sizes: {
                    large: 32
                },
                refSize: 32
            }
          }
      },
  });

  grunt.registerTask('default', ["svg-sprites"]);
};