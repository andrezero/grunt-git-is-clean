# grunt-git-is-clean

[![Build Status: Linux](http://img.shields.io/travis/andrezero/grunt-git-is-clean/master.svg?style=flat-square)](https://travis-ci.org/andrezero/grunt-git-is-clean)
[![NPM version](http://img.shields.io/npm/v/grunt-git-is-clean.svg?style=flat-square)](https://npmjs.org/grunt-git-is-clean)

> Grunt task: checks if repository checkout is clean.


## WARNING: This code is not maintained

Very obvious - but due - WARNING. Time flies, the world revolves, grunt became gulp became webpack, yada yada. Good memories!

## Getting Started

This plugin requires Grunt `~0.4.0`.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a
[Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

Install the plugin with this command:

```shell
npm install grunt-git-is-clean --save-dev
```

Add this line to your project's `Gruntfile.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-git-is-clean');
```

## The "git-is-clean" task

_Run this task with the `grunt git-is-clean` command._

_Note: there are no task targets, files or options for this task._


### Overview

This purpose of this task is to abort a build if the current checkout is unclean. Useful to make sure everything is
predictable while doing sensitive operations like automated releases.


### Example

Assuming you are using the [bump](https://github.com/vojtajina/grunt-bump) and
[conventional-changelog](https://github.com/btford/grunt-conventional-changelog) tasks to tag a pre-release:

```javascript
grunt.registerTask('release', [
    'build',
    'test',
    'git-is-clean',
    'bump-only:minor',
    'changelog',
    'bump-commit'
]);
```

If the repository is dirty the task is aborted before running any tasks that have side-effects.

```
Running "git-is-clean" task
Fatal error: Repository is dirty.
```

## [MIT License](LICENSE-MIT)

[Copyright (c) 2014 Andre Torgal](http://andrezero.mit-license.org/2014)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
