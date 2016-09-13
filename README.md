# Installing Grunt 

In order to us Grunt for this project you will need to install Node.js, Ruby, SASS and Bower. You may need to use administrator permissions to do so.

Install the following:

1. [Node.js](https://nodejs.org/)
2. [Ruby](http://rubyinstaller.org/)
3. [SASS](http://sass-lang.com/install)
4. Restart machine
5. Open command prompt as administrator
6. Run "npm install -g grunt-cli" in CMD
7. Run "npm install phantomjs -g" in CMD
8. Run "gem install sass" in CMD

Once you have the above installed you are ready to work on this project.

## Start working on an existing project

This assumes that you have downloaded the project from the SVN or GIT repo.

1. Open command prompt or terminal in administrator mode run the following:
2. Type "cd file-path" and hit "enter" where 'file-path' is the path directory to the project folder. e.g.: 'c:/myfiles/myprojectfolder'
3. Type "npm install" or "npm install grunt grunt-contrib-clean grunt-contrib-jshint grunt-grunticon grunt-text-replace grunt-file-append grunt-contrib-copy grunt-contrib-concat grunt-contrib-uglify grunt-contrib-sass grunt-autoprefixer grunt-combine-media-queries grunt-contrib-cssmin grunt-bake grunt-contrib-connect grunt-contrib-watch --save-dev" 
4. Type "grunt"
5. Type "grunt development"
6. Type "http://localhost:9000" in your browser to see the website/web application.
