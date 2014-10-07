module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: 'build/<%= pkg.name %>.min.js'
			}
		},
		compass: {
			frontend: {
				options: {
			        sassDir: 'src/ElleOL/FrontEndBundle/Resources/scss/',
			        cssDir: 'src/ElleOL/FrontEndBundle/Resources/public/css/'
				}
			}
		},
		watch: {
			options: {
				livereload: true,
				spawn: false
			},
			css: {
				files: ['src/ElleOL/FrontEndBundle/Resources/scss/*.scss'],
				tasks: ['compass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', 'Default task', [
		'watch'
	]);
};