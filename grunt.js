/*global module:false*/
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'app/css/main.css': 'app/css/sass/main.sass'
        }
      },
      options: {
        'compass': true
      }
    },


    coffee: {
      compile: {
        files: {
          'app/scripts/*.js': 'app/scripts/coffee/*.coffee'
        }
      }
    },


    watch: {
      files: ['app/css/**/*', 'app/scripts/**/*'],
      tasks: 'sass coffee'
    }
  });

  // Load necessary plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');

};
