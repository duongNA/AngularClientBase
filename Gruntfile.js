module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      options: {
        paths: {
          'appFiles': './app',
        },
        mainConfigFile: './app/requireConfig.js',
        removeCombined: true,
        out: './app/assets/js/app_combine.js',
        optimize: 'none',
        name: 'app',
      },
      dev:{
        options:{
          optimize:'none'
        }
      },
      prod:{
        options:{
          optimize:'uglify'
        }
      }
    }        
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task(s).
  grunt.registerTask('dev', ['requirejs:dev']);
  grunt.registerTask('prod', ['requirejs:prod']);

};