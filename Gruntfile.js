module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jasmine-node');

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            main: {
                src: ['lib/**/*.js']
            },
            test: {
                options: {
                    jshintrc: 'test/.jshintrc'
                },
                src: ['test/spec/**/*.js']
            }
        },

        jasmine_node: {
            options: {
                forceExit: true
            },
            test: ['test/spec/']
        }
    });

    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('test', ['jasmine_node']);

};