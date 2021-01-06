module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      express: {
        files:  [ '**/*.js' ],
        tasks:  [ 'express:prod' ],
        options: {
          spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
        }
    }},
    express: {
      options: {
        background: true,
        fallback: function () {
          console.log('server failed');
        },
        port: 3001,
        delay: 0,

        // Override defaults here
      },
      prod: {
        options: {
          script: './server/server.js',
          node_env: 'production'
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', [ 'express:prod','watch'])
}