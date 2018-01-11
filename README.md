# Andy Boilerplate

- Automatically prefixes CSS to be compatible with browsers back to IE11 and Firefox 30.
- Abstracting commonly reused assets, like fonts and colours, into modules which you can simply @import
- Running a local server with LiveReload. This server is accessible over LAN for cross-browser testing. 
- Automatically detecting, bundling, and minifying dependencies for super-fast load times. 
- Letting you use the NPM ecosystem to install modules. No more copy/paste nonsense. 

By default, this includes several packages. 

- jQuery 3.2.1. 
- Normalize.css. 
- Modernizr. (Customizable—load just the tests you need.)

It also includes:

- Lato Webfont (Complete character set.) Load just the weights you need.
- Brand colours as CSS variables. 
- Sensible styling defaults, courtesy of HTML5-Boilerplate.

The development setup for this includes 

- Yarn - package manager
- webpack - compiles and bundles your assets 
- postcss - with cssNext. Write 100% modern CSS and let the machine do your fallbacks! And yes, this includes CSS variables. 
- Babel - compiles your modern Javascript to work on older browsers. Use `let`, `const`, and `import` as you please!

## Setup
### Global Setup
You should only need to do this stuff once. 

1. If on Mac, you will need [Homebrew](https://brew.sh/) if you do not already have it. `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` 
   1. Homebrew may fail to install if your Ruby is an old version. Get Ruby Version Manager (RVM) by running `rvm get stable` or `curl -L https://get.rvm.io | bash -s stable` 
   2. You should then be able to go `rvm install ruby-2.4.2` (check ruby-lang.org for latest version) 
   3. Use latest version of Ruby by default `rvm use --default ruby-2.4.2`
   4. Now proceed to install Homebrew as per step 1! 
2. Now let's install Yarn. This is a package manager, it makes it super easy to install and update dependencies. (Yarn is compatible with NPM, the other big package manager) 
   1. Check if you have NVM (Node Version Manager) installed `nvm --version`
   2. If you have NVM, get the latest node `nvm install node` then install yarn without node. `brew install yarn --without-node`
   3. If you don't have NVM, just install yarn `brew install yarn` and you will get node automatically.

### Project Setup
1. Import or fork this repository on Github.
2. `git clone` the new repo onto your computer.
3. Edit package.json first—set a project name (don't use spaces) and author. (spaces are fine.) 
4. `yarn install` to install dependencies. 
5. `yarn start` will compile your assets, start a server on [your-ip]:8080, open the web browser and live-reload any changes.  Pass argument `--port [NUM]` to run on port of your choice. e.g. `yarn start --port 3200`. This should be accessible over LAN, so test on your phone and old computers at will! 
6. `yarn build:dev` will create a compiled version of your website in ./dist/. Test this as you will. It will  automatically delete your old dist folder so you don't have to worry about outdated files causing issues. 
7. `yarn build:prod` will compile, auto-prefix and minify your build into ./prod/. You will also get a bundled zip file, ready for iQualify, in the same folder. 

To add packages `yarn add [name]` or `yarn add --dev [name]` for dev tools like Webpack. 


### Gotchas
- Some old browsers can't handle the livereload server. If you get console errors that make noise about "let is a reserved identifier", message me on Slack and I'll talk you through solutions. 
- If you don't have a dist/ or prod/ folder you will need to make them, or `yarn build` will fail.  
- CSS: url() resolution for anything imported in main.css is relative to main.css. This is because postcss-import inlines all your CSS. 


### Changelog
#### New in 0.3
- OPT brand colors accessible as CSS4 variables. `color: var(--light-green);` Definitions are in colors.css.
- Import the weights of Lato that you need. Have them accessible in your CSS with zero configuration, and zero bloat in production. Just go to app.js and `"import lato-[weight] from 'Fonts/lato-[weight]'`
- `yarn start` server is now accessible over LAN for easier testing on mobile devices.
- Separate development and production configurations. 
- `yarn build:prod` generates a named, minified, polyfilled, zipped bundle ready for iQualify.
- Adds babel, which will make your modern javascript backwards compatible. 
- Sourcemaps are enabled in production server for easy debugging of your stuff.
- Fixes bug where static assets wouldn't load correctly on production server

#### New in 0.2
- Modernizr + Modernizr-loader implemented, pick your modules in .modernizrrc.json and they will be made available to all your jQuery plugins
- jQuery accessible on a global variable to support legacy plugins. (Normally you would have to `import $ from 'jquery'` to use jQuery.) 

## What is this sorcery? (how it works)
Webpack is a bundler that works by detecting dependencies between parts of your codebase and merging them into single files. It is configured using `webpack.common.js`, `webpack.dev.js` and `webpack.prod.js`. 

Webpack will start at your entry point—src/app.js—and trace dependencies outwards from there. It treats @imports, import, require(), url() and src="" as a link to a dependency, will seek out that file, and add it to the finished bundle. This means you never have any unused code on the production server, and you can write tiny, reusable, easily maintainable modules for EVERYTHING!

### Package Management
We are using yarn for package management, which is almost identical to NPM. Therefore, if something is on the npm repository, you should use that rather than downloading zip files. You can install packages with `yarn add [package]` or `yarn add --dev [package]` for dev tools, like Webpack or PostCSS plugins. 

### Javascript
./src/js/main.js is our first port of call. 

You can use require() to include packages in your scripts. For example, if you need to use the jQuery package in a component you can go `var $ = require('jquery')` at the top. If you want to import a file that isn't a package, such as a page flipper you have built—you can just use a relative path like this: `var PageFlipper = require(./page-flipper)`. 

You can also use ES6 imports `import $ from 'jquery'`. 

There are some gotchas to using modules which I'll explain over Slack or in person if you are interested. 

Old jQuery modules were not written with imports in mind, but don't worry. I've installed a shim which should mean jQuery will "just work."

Modernizr will work just fine as well. You will need to configure `modernizrrc.json` to include the tests that your chosen jQuery library depends on. You can find this out super easily by looking at the errors thrown at runtime ("Modernizr.csstransforms3d is not defined"). Hit me up for an example of this if you get stuck—it's really easy once you get the knack. 


### CSS 
./src/css/main.css is our main source of truth. Your CSS can be modular too now!

You can use @import to import any modules you have written, or to access third-party packages. If you want to use normalize.css, you just `yarn add normalize.css` to install the package and then `@import "normalize.css";` in main.css. Easy, huh? 

The CSS build chain looks like this:

1. Webpack encounters a CSS file as a dependency. In this case, it finds main.css because it is defined in src/app.js. 
2. Webpack has been configured to parse the contents of main.css using PostCSS. PostCSS, using a plugin called postcss-import, will grab any dependencies and merge them into the file. 
3. Then, postCSS runs other transforms—such as auto-prefixing and adding source maps. (for easy debugging) 
4. postCSS passes your CSS over to Webpack's built in css-loader, which will trace any url() declarations and pass those files, fonts, etc over to other loaders to process. 
5. Finally, css-loader minifies your assets if you're doing a production build, before passing it on to 
6. "ExtractTextPlugin", which writes your CSS back out to a file in /dist/ or /prod/. 

Inline source maps are enabled on CSS, so even though Webpack merges all of your files, you can track back which file is responsible for setting each rule. (e.g. tracking h1 back to normalize.css)


### HTML
./src/index.html is our main source of truth here. 

We are using html-webpack-plugin to automatically generate the HTML for the site. 

It reads in a template—by default src/index.html—and modifies it, injecting your bundled styles and scripts. 

It keeps mostly everything else identical, so feel free to put whatever you want in index.html. DON'T link scripts or CSS in index.html though. Use @import rules in your CSS and require() in your JS. 

We will probably swap this out with Handlebars or another templating language in the future to enable the use of partials. 

The main limitation, for now, is that we are limited to single-page websites, which should be sufficient for most of our needs. If you need multiple html files in a project, let me know on Slack and I'll sit with you to configure it. 

### Static Assets (Fonts, Images, Etc)
When you request a static asset in a CSS file `url()` or your HTML template `src=`, Webpack (via css-loader or html-loader, respectively) will resolve the url e.g. `url(../fonts/Lato-Bold.woff)` and use file-loader to Do Stuff with it, based on rules set in webpack.config.js. 

It is configured to drop images into ./dist/public/images and fonts into ./dist/public/fonts by default. 

Some part of Webpack (I think file-loader, extract-text-plugin or html-webpack-plugin) will update the asset URLs in the bundled CSS/HTML file by magic. I'm a little unclear on how this works right now. Ask me again in a week. 

## Open Questions / Future Features

### Musings
- Is there a better folder structure we can use for non-npm stuff? (Especially w/r/t vendor modules) 
- Is there a better way to handle url() calls in the CSS? Currently PostCSS inlines everything into main.css, which sets css-loader's context to src/ and causes assets to not resolve. Best solution at present is defining aliases.
- How could this package be updateable downstream? 

### Wishlist
- Deployment scripts to staging and dev. 
- Initialization script for spinning up new project.
- Some kind of templating language. 
- Better asset pipeline
