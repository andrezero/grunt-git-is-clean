'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    var config = {

        jshint: {

            options: {
                jshintrc: '.jshintrc'
            },

            all: [
                'Gruntfile.js',
                'lib/*.js'
            ]
        },

        jsbeautifier: {

            options: {
                config: '.jsbeautifyrc'
            },

            modify: {
                src: [
                    'Gruntfile.js',
                    'lib/*.js'
                ]
            },

            verify: {
                src: [
                    'Gruntfile.js',
                    'lib/*.js'
                ],
                options: {
                    mode: 'VERIFY_ONLY'
                }
            }
        }
    };

    grunt.registerTask('build', ['jshint', 'jsbeautifier']);

    grunt.initConfig(config);

};

