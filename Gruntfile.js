'use strict';

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    var config = {

        pkg: require('./package.json'),

        files: {

            js_src: ['tasks/*.js'],
            js_grunt: ['Gruntfile.js'],
            js_all: [
                'package.json',
                '<%= files.js_src %>',
                '<%= files.js_grunt %>'
            ]
        },

        jshint: {

            options: {
                jshintrc: '.jshintrc'
            },

            all: '<%= files.js_all %>'
        },

        jsbeautifier: {

            options: {
                config: '.jsbeautifyrc'
            },

            modify: {
                src: ['<%= files.js_src %>', '<%= files.js_grunt %>']
            },

            verify: {
                src: ['<%= files.js_src %>', '<%= files.js_grunt %>'],
                options: {
                    mode: 'VERIFY_ONLY'
                }
            }
        },

        bump: {

            options: {

                files: [
                    'package.json'
                ],
                updateConfigs: ['pkg'],
                commit: true,
                commitMessage: 'chore(release): v%VERSION%',
                commitFiles: [
                    'package.json',
                    'CHANGELOG.md'
                ],
                createTag: true,
                tagName: 'v%VERSION%',
                tagMessage: 'Version %VERSION%',
                push: true,
                pushTo: 'origin'
            }
        },

        changelog: {

            options: {
                dest: 'CHANGELOG.md',
                template: 'changelog.tpl'
            }
        }
    };

    grunt.initConfig(config);

    grunt.registerTask('test', [

    ]);

    grunt.registerTask('build', [
        'jshint',
        'jsbeautifier',
        'test'
    ]);

    grunt.registerTask('pre-release', [
        'git-is-clean',
        'build',
        'bump-only:prerelease',
        'changelog',
        'bump-commit'
    ]);

    grunt.registerTask('ci-build', ['build']);

    grunt.registerTask('release', [
        'git-is-clean',
        'build',
        'bump-only:patch',
        'changelog',
        'bump-commit'
    ]);

};

