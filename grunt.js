/*global module:false*/
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'app/public/css/main.css': 'app/public/css/sass/main.sass'
        }
      },
      options: {
        'compass': true
      }
    },


    coffee: {
      compile: {
        files: {
          'app/public/scripts/*.js': 'app/public/scripts/coffee/*.coffee'
        }
      }
    },


    watch: {
      files: ['app/public/css/**/*', 'app/public/scripts/**/*'],
      tasks: 'sass coffee'
    }
  });

  // Load necessary plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('default', 'sass coffee');

};
