'use strict';

module.exports = function(grunt) {

	grunt.initConfig ({
		pkg: grunt.file.readJSON ('package.json'),

		

		jekyll: {
			build: {
				dest: '_site'
			}
		},

		// libsass via grunt-sass package
		sass: {
			options: {
				sourceMap: true,
			},
			dist: {
				files: {
					'main.css': 'main.scss'
				}
			}
		},

		watch: {
			sass: {
				files: 'scss/**/*.scss',
				tasks: ['sass']
			},
			jekyll: {
				files: ['_layouts/*.html', '_includes/*.md', 'css/main.css'],
				tasks: ['jekyll']
			}
		},

		browserSync: {
			files: {
				src: ['_site/css/*.css']
			},
			options: {
				watchTask: true,
				ghostMode: {
					clicks: true,
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


	//load plugins
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-browser-sync');



	//custom tasks
	grunt.registerTask('build', ['jekyll']);
	grunt.registerTask('default', ['browserSync', 'watch']);


}; // end of module.exports