//Set Project Object
		project: {
			app: '/', //??
			assets: '<%- project.app %>/assets',
			src: '<%- project.app %>/src',
			css: [
				'<%- project.app %>/scss/styles.scss'
			],
			js: [
				'<%- project.app %>/js/*.js'
			],
		},

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