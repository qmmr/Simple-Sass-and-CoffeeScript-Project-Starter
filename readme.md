This is a super easy starter project, for the times when you simply need an easy way to automate the compiling of Sass/Compass and CoffeeScript files, without having to worry about the configuration and setup.

## To Get Started...

You of course need to have Grunt installed. Additionally, because we'll be using custom tasks/plugins for the Sass and CoffeeScript compiling, we also need two extra plugins.

If you're new to Grunt, you can copy and paste the following code into the Terminal, though please note that you first need to install Node.js, CoffeeScript, and Sass, through npm.

	npm install -g grunt
	npm install grunt-contrib-sass
	npm install grunt-contrib-coffee

And you're ready to go!

	grunt watch

As soon as you save a Sass or CoffeeScript file, it will automatically compile, and be placed within the parent directory. Have fun.

## Prefer TDD?

There's also testing support. If you don't follow TDD, feel free to delete the `app/tests` directory. Otherwise, it's setup to work with [Testem](https://github.com/airportyh/testem) and Chai (and Should.js). If you've never used Testem before, it's a test runner that works with most popular JavaScript test frameworks, such as Jasmine and Mocha.

To install Testem, run:

	npm install testem -g

And then run `testem` to execute your tests. You can edit the configuration by opening `testem.json`. Bu default, it automatically looks for CoffeeScript files that follow the `app/tests/*Test.coffee' pattern.