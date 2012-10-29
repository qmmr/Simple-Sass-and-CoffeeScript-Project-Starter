This is a super easy starter project, for the times when you simply need an easy way to automate the compiling of Sass/Compass and CoffeeScript files, without having to worry about the configuration and setup.

## To Get Started...

You of course need to have Grunt installed. Additionally, because we'll be using custom tasks/plugins for the Sass and CoffeeScript compiling, we also need two extra plugins.

If you're new to Grunt, you can copy and paste the following code into the Terminal, though please note that you first need to install Node.js.

	npm install -g grunt
	npm install grunt-contrib-sass
	npm install grunt-contrib-coffee

And you're ready to go!

	grunt watch

As soon as you save a Sass or CoffeeScript file, it will automatically compile, and be placed within the parent directory. Have fun.