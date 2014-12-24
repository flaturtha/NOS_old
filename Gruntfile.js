/**
*
* Number One Son (v0.0.2), TalesofMurder.com
* http://talesofmurder.com
* @author  Rich Cook
*
**/


'use strict';

module.exports = function(grunt) {

	grunt.initConfig ({
		pkg: grunt.file.readJSON('package.json'),

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
				includePaths: ['_assets/scss/**/_*.scss']
			},
			dev: {
				files: {
					'assets/css/styles.css': '_assets/scss/styles.scss'
				}
			}
		},

		// CONCAT JS
		concat: {
			options: {
				separator: ';',
				stripBanners: true,
				// banner: '<%= tag.banner %>'
			},
			dev: {
				files: {'_assets/coffee/scripts.js': '_assets/coffee/lib/**/*.js'}
				}
		},

		// JSHINT
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			beforeconcat: ['Gruntfile.js', '_assets/coffee/lib/**/*.js'],
			afterconcat: ['_assets/coffee/scripts.js']
		}, 
		
		// UGLIFY JS
		uglify: {
			options: {
				preserveComments: false,
			},
			dev: {
				files: {'assets/js/scripts.min.js': ['_assets/coffee/scripts.js']}
			}
		},
		

		// CLEAN
		clean: {
			dev: ['assets', '_site']
		},

		// COPY
		copy: {
			img: {
				expand: true,
				cwd: '_assets/img/',
				src: '**',
				dest: 'assets/img',
				flatten: true,
				// filter: isFile,
				// onlyIf: newer,
			},
			fonts: {
				expand: true,
				cwd: '_assets/fonts/',
				src: '**',
				dest: 'assets/fonts',
				flatten: true,
				// filter: isFile,
				// onlyIf: newer,
			},
			vendorjs: {
				expand: true,
				cwd: '_assets/coffee/vendor/',
				src: '**',
				dest: 'assets/js/vendor',
				flatten: true,
				// filter: isFile,
				// onlyIf: newer,
			}
		},

		// WATCH
		watch: {
			sass: {
				files: '_assets/scss/**/_*.scss',
				tasks: ['sass']
			},
			javascript: {
				files: '_assets/coffee/**/*.js',
				tasks: ['jshint', 'concat', 'uglify']
			},
			jekyll: {
				files: ['_layouts/*.html', '_includes/*.html', '_posts/*.md', '_assets/scss/styles.css'],
				tasks: ['jekyll']
			}
		},

		// BROWSERSYNC
		browserSync: {
			files: {
				src: ['_site/css/*.css', '_site/*.html', '_site/**/*.js']
			},
			options: {
				watchTask: true,
				ghostMode: {
					scroll: true,
					links: true,
					forms: true
				},
				server: {
					baseDir: '_site'
				}
			}
		}

	}); // end of grunt.initConfig


	// LOAD PLUGINS
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// CUSTOM TASKS
	grunt.registerTask('build', ['sass', 'copy', 'javascript', 'jekyll']);
	grunt.registerTask('javascript', ['concat', 'uglify']); // removed jshint due to jQuery issues (12.23.14)
	grunt.registerTask('default', ['build', 'javascript', 'browserSync', 'watch']);


}; //end of module.exports