'use strict';

module.exports = function(grunt) {

	grunt.initConfig ({
		pkg: grunt.file.readJSON ('package.json'),

    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [
            'assets/js/bourbon/*.js',
            'assets/js/vendor/*.js'
          ]
        }
      }
    },
		jekyll: {
			build: {
				dest: '_site'
			}
		},

		sass: {
			options: {
				sourceMap: true,
			},
			dist: {
				files: {
					'css/main.css': 'assets/_sass/main.scss'
				}
			},
			site: {
				files: {
					'_site/css/main.css': 'assets/_sass/main.scss'
				}
			}
		},

		watch: {
			sass: {
				files: 'assets/_sass/**/*.scss',
				tasks: ['sass']
			},
			jekyll: {
				files: ['_layouts/*.html', '_includes/*.html', 'css/main.css'],
				tasks: ['jekyll']
			}
		},

		browserSync: {
			files: {
				src: ['_site/css/*.css', '_site/**/*.html']
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
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.loadNpmTasks('grunt-browser-sync');



	//custom tasks
	grunt.registerTask('build', ['jekyll', 'sass', 'uglify']);
	grunt.registerTask('default', ['build', 'browserSync', 'watch']);
  grunt.registerTask('site', ['sass', 'browserSync', 'watch']);

}; // end of module.exports