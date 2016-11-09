module.exports = function(grunt) {
	grunt.initConfig({
		localDir: '/path/to/local/files',
		sharepointDir: 'path/to/mapped/drive',
		pkg: grunt.file.readJSON('package.json'),
	    sass: {
			dist: {
				files: {
					'<%= localDir %>/styles.css' : '<%= localDir %>/sass/main.scss'
				}
			}
		},
		cssmin: {
		  target: {
		    src: '<%= localDir %>/styles.css',
		    dest: '<%= localDir %>/styles.min.css' // Destination of minified version
		  }
		},
		copy: {
		  main: {
		  	files: [
		  		{src: '<%= localDir %>/styles.min.css', dest: '<%= sharepointDir %>/styles.min.css'},
		  		{src: '<%= localDir %>/styles.css', dest: '<%= sharepointDir %>/styles.css'},
		  		{src: '<%= localDir %>/styles.css.map', dest: '<%= sharepointDir %>/styles.css.map'}		  		
		  }
		},
		kss: {
			options: {
				//verbose: true, //Extra details while compiling -- not required
				builder: '<% localDir %>/styleguide/template',
				css: '../styles.css',
				title: 'Styleguide',
				custom: [		//Custom options for use in the styleguide template
					//'showMarkup',
					//'showSource'
				]
			}
		},
		watch: {
			css: {
				files: [
					'<%= localDir %>/**/**/*.scss'
				],
				tasks: ['sass', 'cssmin', 'copy']
			},
			styleguide: {
				files: [
					'<%= localDir %>/sass/*.html', //For changes to any markup files in the sass directory
					'<%= localDir %>/sass/*.md',   //For changes to any markdown files
					'<%= localDir %>/**/**/*.hbs' //For changes to the main template
				],
				tasks: ['kss']
			},
			configFiles: {
				files: ['Gruntfile.js'],
				option: {
					reload: true
				}
			}
		}
	});

	require('load-grunt-tasks')(grunt);
	grunt.registerTask('default',['watch', 'sass', 'copy', 'cssmin', 'kss']);
}