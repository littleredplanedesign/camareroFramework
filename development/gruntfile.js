module.exports = function(grunt){
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-compass");
	//grunt.loadNpmTasks('grunt-contrib-cssmin');
	//grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.initConfig({
		compass: {
			dev: {
				options: {
					config: "config.rb"
				} //options
			} //dev
		}, //compass
		watch: {
			options: { livereload: true },
			/*
			scripts: {
				files: [''],
				tasks: ['uglify']				
			}, //scripts
			*/
			sass: {
				files: ["sass/*.scss"],
				tasks: ["compass:dev"]
			}, //sass
			html: {
				files: ["*.html"]
			} //html
		} //watch
	}) //initConfig
	grunt.registerTask("default" , "watch");
} //exports