/**
*
* Number One Son (v0.0.2), TalesofMurder.com
* http://talesofmurder.com
* @author  Rich Cook
*
**/


'use strict'

module.exports = function(grunt) {

	grunt.initConfig ({
		pkg: grunt.file.readJSON('package.json'),

		project: {
			app: '/',
			src: '<%= project.app %>/_assets',
			dest: '<%= project.app %>/assets',
			scss: ['<%= project.src %>/styles.scss'],
			css: ['<%= project.dest %>/styles.css'],
			coffee: ['<%= project.coffee %>/scripts.js'], //add actual .coffee file structure, too!
			js: ['<%= project.dest %>/js/**/*.js'],
			img: []

		},


		// JEKYLL BUILD
		jekyll: {
			build: {
				dest: '_site'
			}
		},

		// LIBSASS
		sass: {
			options: {
				sourceMap: true,
				includePaths: ['<%= project.scss %>/**/_*.scss']
			},
			dev: {
				files: {
					'<%= project.css %>/styles.css': '<%= project.scss %>/styles.scss'
				}
			}
		},

		// CONCAT JS
		concat: {
			options: {
				separator: ';',
				stripBanners: true,
				banner: '<%= tag.banner %>'
			},
			dist: {
				src: ['<%= project.coffee %>/lib/**/*.js'],
				dest: ['<%= project.coffee %>/scripts.js']
			}
		},

		// JSHINT
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			beforeconcat: [
				'Gruntfile.js',
				'<%= project.coffee %>/lib/**/*.js'
			]
			afterconcat: [
				'<%= project.coffee %>/scripts.js'
			]
		},

		// UGLIFY JS
		uglify: {
			options: {
				preserveComments: false,
			},
			dev: {
				src: ['<%= project.coffee %>/scripts.js'],
				dest: ['<%= project.js %>/js/scripts.min.js']
			}
		},

		// CLEAN
		clean: {
			dev: ['<%= project.dest %>']
		},

		// COPY
		copy: {
			options: {
				excludeEmpty: true,
				expand: true,
				onlyIf: newer,
			},
			dev: {
				files: {
					'<%= project.img %>': '<%= project.src %>/img/**/*.*',
					'<%= project.fonts %>': '<%= project.src %>/fonts/**/*.*',
				}
			}
		},

		// WATCH
		watch: {
			sass: {
				files: '<%= project.scss %>/**/_*.scss',
				tasks: ['sass']
			},
			javascript: {
				files: '<%= project.coffee %>/js/**/*.js',
				tasks: ['jshint', 'concat', 'uglify']
			},
			jekyll: {
				files: ['_layouts/*.html', '_includes/*.html', '_posts/*.md' '<%= project.css %>/styles.css']
			}
		},


		// BROWSERSYNC
		browserSync: {
			files: {
				src: ['<%= project.prod %>/css/*.css', '<%= project.prod %>/*.html', '<%= project.prod %>/**/*.js']
			},
			options: {
				watchTask: true,
				ghostMode: {
					scroll: true,
					links: true,
					forms: true
				},
				server: {
					baseDir: '<%= project.prod %>/'
				}
			}
	}); // end of grunt.initConfig


	// LOAD PLUGINS
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// CUSTOM TASKS
	grunt.registerTask('build', ['sass', 'jekyll']);
	grunt.registerTask('javascript', ['jshint', 'concat', 'uglify']);
	grunt.registerTask('default', ['build', 'javascript', 'browserSync', 'watch']);


}; //end of module.exports