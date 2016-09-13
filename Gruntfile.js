module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		/*-- clean folders following folders on running grunt --*/
		clean: {
			before: {
				src: ['build', 'cms-export', 'source/icons/svgbuild/',  'source/css/external/icons.data.png.css', 'source/css/external/icons.data.svg.css', 'source/css/external/icons.fallback.css', 'source/js/partials/icons/grunticon.loader.js', 'source/images/icons' ]
			}
		},

		/*-- validate js --*/
		jshint: {
			options: {
				force: true
			},
			all: [
				'Gruntfile.js',
				'source/js/global.js'
			]
		},

		/* -- create SVGs -- */
		grunticon: {
   			myIcons: {
	            files: [{
	                expand: true,
	                cwd: 'source/icons',
	                src: ['*.svg'],
	                dest: 'source/icons/svgbuild'
	            }],
		        options: {
		            loadersnippet: "grunticon.loader.js"
		        }
	   		}
        }, 

        /*-- replace text in builds --*/
	    replace: {
	    	/* -- create SVGs - replace png with images/icons in fallback.css -- */
		  	iconcss: {
				src: ['source/icons/svgbuild/*.css'],
				dest: ['source/css/external/'],        
				replacements: [{
				  from: 'png/',
				  to: '../images/icons/'
				}]
		    },
		    /* -- cms-export replace - set image location to that of cms in all css files in cms-export folder -- */
		    css_cms_export: {
				 src: 'cms-export/css/**/*.css',
				 overwrite: true,				 
				 replacements: [ {					  
					from: '../images/',
					to: '/cms-location/'
					},
					{					  
					from: 'images/',
					to: '/cms-location/'
					}
				]			
			},
			/* -- cms-export replace - set image location to that of cms in all js files in cms-export folder -- */
			js_cms_export: {
				 src: 'cms-export/js/**/*.js',	
				 overwrite: true,			 
				 replacements: [ {					  
					from: '../images/',
					to: '/cms-location/'
					},
					{					  
					from: 'images/',
					to: '/cms-location/'
					}
				]			
			},
			/* -- cms-export replace - set css location for grunticon to that of cms in global.min.js -- */
			grunticon_cms_export: {
				 src: 'cms-export/js/global.min.js',	
				 overwrite: true,			 
				 replacements: [ {					  
					from: 'css/external/',
					to: 'cms-location/css/external/'
					}
				]			
			}
		 },

		 /*-- create SVGs - append css files to js and place in external source --*/
		file_append: {
		    iconjs: {
		      files: [
		        {
		          append: "\ngrunticon(['css/external/icons.data.svg.css', 'css/external/icons.data.png.css', 'css/external/icons.fallback.css'], grunticon.svgLoadedCallback);",
		          input: 'source/icons/svgbuild/grunticon.loader.js',
		          output: 'source/js/partials/icons/grunticon.loader.js'
		        }
		     ]
		   }
		 },

		copy: {				
		    /*-- copy backup SVG png images created to source image folder --*/	
			iconpng: {
				files: [{ 
					expand: true, 
					cwd: 'source/icons/svgbuild/png', 
					src: ['*.png'],
					dest: 'source/images/icons'}
				]
			},	
			/*-- copy seo files to local build --*/
			seofiles: {
				files: [{
					expand: true,
					dot: true,
					cwd: 'source/seo',
					src: '**',
					dest: 'build'
				}]
			},
			/*-- copy lightbox modules to local build --*/
			lightboxes: {
				files: [{
					expand: true,
					dot: true,
					cwd: 'source/html/lightboxes',
					src: '**',
					dest: 'build/lightboxes'
				}]
			},		
			/*--  copy css files to local build --*/		
			css: {
				files: [{
					expand: true,
					cwd: 'source/css',
					src: ['external/**/*.css', '!(partials)**/*.css'],
					dest: 'build/css'
				}]
			},
			/*-- copy js files to local build --*/
			scripts: {
				files: [{
					expand: true,
					cwd: 'source/js',
					src: ['external/**/*.js', '!(partials)**/*.js', '!global.js'],
					dest: 'build/js'
				}]
			},
			/*-- copy webfonts to local build --*/
			webfonts: {
				files: [{
					expand: true,
					cwd: 'source/webfonts',
					src: '**',
					dest: 'build/webfonts',
					filter: 'isFile'
				}]
			},
			/*-- copy images to local build --*/
			images: {
				files: [{
					expand: true,
					cwd: 'source/images',
					src: '**',
					dest: 'build/images'
				}]
			},
			/*-- copy local build to CMS-export --*/
			cmsExport: {
				files: [{
					expand: true,
					cwd: 'build',
					src: ['css/**', 'js/**', 'webfonts/**'],
					dest: 'cms-export'
				}]
			},				
		},

		/*-- build global.min.js --*/
		concat: {
			options: {
				separator: ';'
			},
			build: {
				src: [
					'source/js/global.js',
					'source/js/partials/icons/grunticon.loader.js'
				],
				dest: 'build/js/global.min.js'
			}
		},

		/*-- minify global js --*/
		uglify: {
			global:{
				files: [{
					expand: true,
					cwd: 'build/js',
					src: '**/*.js',
					dest: 'build/js'
				}]
			}
		},

		/*-- sass in local build --*/
		sass: {
			build: {
				files: { 'build/css/global.min.css': 'source/css/global.scss' }
			}
		},

		/*-- parses CSS and adds vendor-prefixed CSS properties --*/
		autoprefixer: {
			options: {
				browsers: ['last 2 version', 'ie 9']
			},
			files: {
				src: 'build/css/**/*.css'
			}
		},
		
		/*-- combine matching media queries into one media query definition --*/
		cmq: {
			options: {
				log: true
			},
			your_target: {
				files: {
					'build/css': ['build/css/global.min.css']
				}
			}
		},			
		
		/*-- minify css in both local build --*/
		cssmin: {
			other: {
				expand: true,
				cwd: 'build/css',
				src: '**/*.css',
				dest: 'build/css'
			}
		},

		/*-- modularize html files --*/
		bake: {
        	build: {
        		expand: true,
        		cwd: 'source/html',
        		src: ['*.{htm,html}'],
        		dest: 'build'
        	}			
		},		
		
		/*-- connect local server on grunt developement --*/
		connect: {
			server: {
				options: {
					base: 'build',
					port: 9000,
					hostname: '*'
				}
			}
		},

		/*-- tasks run on grunt development --*/
		watch: {
			options: {
				livereload: true
			},
			html: {
				files: ['source/html/**/*.{htm,html}'],
				tasks: ['bake'],
				options: {
					spawn: false
				}
			},			
			css: {
				files: ['source/css/**/*.css'],
				tasks: ['copy:css', 'autoprefixer', 'cmq', 'cssmin'],
				options: {
					spawn: false
				}
			},
			lightboxes: {
				files: ['source/html/lightboxes/**/*'],
				tasks: ['copy:lightboxes'],
				options: {
					spawn: false
				}
			},				
			images: {
				files: ['source/images/**/*'],
				tasks: ['copy:images'],
				options: {
					spawn: false
				}
			},
			sass: {
				files: ['source/css/**/*.scss'],
				tasks: ['copy:css', 'sass', 'autoprefixer', 'cmq', 'cssmin'],
				options: {
					spawn: false
				}
			},
			scripts: {
				files: [
					'Gruntfile.js',
					'source/js/**/*.js'
				],
				tasks: ['jshint', 'copy:scripts', 'concat', 'uglify'],
				options: {
					spawn: false
				}
			}	
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-grunticon');
	grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-file-append');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-combine-media-queries');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-bake');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['clean', 'jshint', 'grunticon:myIcons', 'replace:iconcss', 'file_append', 'copy:iconpng', 'copy:scripts', 'concat', 'uglify', 'copy:webfonts', 'copy:images', 'copy:seofiles', 'copy:lightboxes', 'copy:css', 'sass', 'autoprefixer', 'cmq', 'cssmin', 'copy:cmsExport', 'replace:css_cms_export', 'replace:js_cms_export', 'replace:grunticon_cms_export',  'bake']);
	grunt.registerTask('development', ['connect', 'watch']);

};