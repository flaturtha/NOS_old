'use strict';

module.exports = function(grunt) {

	grunt.initConfig ({
		pkg: grunt.file.readJSON ('package.json'),

		//Set Project Object
		// project: {
		// 	app: '/', //??
		// 	assets: '<%- project.app %>/assets',
		// 	src: '<%- project.app %>/src',
		// 	css: [
		// 		'<%- project.app %>/scss/styles.scss'
		// 	],
		// 	js: [
		// 		'<%- project.app %>/js/*.js'
		// 	],
		// },

		//Project Banner
		tag: {
			banner: '/*!\n' +
							' * <%= pkg.name %>\n' +
							' * Run date: <%= grunt.template.today(now) %>\n' +
							' * <%= pkg.url %>\n' +
							' * @author <%= pkg.author %>\n' +
							' * @version <%= pkg.version %>\n' +
							' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
							' * /\n'
		},

		jekyll: {
			build: {
				dest: '_site'
			}
		},

		// libsass via grunt-sass package
		sass: {
			options: {
				sourceMap: true,
				// outputStyle: 'compressed', [NOTE: UNCOMMENT (AND DEL THIS!) TO COMPRESS]
			},
			dist: {
				files: {
					'css/main.css': '_assets/sass/main.scss'
				}
			},
			site: {
				files: {
					'_site/css/main.css': '_assets/sass/main.scss'
				}
			}
		},

		watch: {
			sass: {
				files: '_assets/sass/**/*.scss',
				tasks: ['sass']
			},
			// site: {
			// 	files: 'sass/**/*.scss',
			// 	tasks: ['sass']
			// },
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
	grunt.registerTask('build', ['jekyll', 'sass']);
	grunt.registerTask('default', ['build', 'browserSync', 'watch']);
  grunt.registerTask('site', ['sass', 'browserSync', 'watch']);

}; // end of module.exports