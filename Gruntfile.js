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
                prefix: "icon",
                cssPrefix: '',
                sizes: {
                    large: 128
                },
                refSize: 128
            }
          }
      },
  });

  grunt.registerTask('default', ["svg-sprites"]);
};