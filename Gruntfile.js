module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            html: {
                files: [{
                    cwd: 'src/',
                    expand: true,
                    src: ['**/*.html'],
                    dest: 'dist/'
                }]
            },
            js: {
                files: [{
                    cwd: 'bower_components/',
                    expand: true,
                    src: ['angular/angular.js'],
                    dest: 'dist/plugins/'
                }]
            }
        },
        clean: {
            main: {
                src: ['dist']
            }
        },
        folderWiseConcat: {
            options: {
                // Task-specific options go here.
            },
            main: {
                files: {
                    'dist/app/app.js': ['src/app/**']
                }
            }
        },
        watch: {
            options : {
                atBegin : true
            },
            js: {
                files: [
                    'src/**/*.js'
                ],
                tasks: ['folderWiseConcat', 'copy:js']
            },
            html: {
                files: [
                    'src/**/*.html'
                ],
                tasks: ['copy:html']
            }
        }
    });

    // Load the plugins that provide the tasks.
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-folderWiseConcat');

    grunt.registerTask('develop', [
        'clean',
        'folderWiseConcat',
        'copy:js',
        'copy:html'
    ]);
    grunt.registerTask('default', ['develop']);

};
