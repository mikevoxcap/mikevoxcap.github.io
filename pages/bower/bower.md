---
title: Bower
permalink: bower.md
---
# Bower

## Overview

Bower is a package manager for websites. Bower keeps track of the artifacts retrieved from some repository, say a file system or GitHub. The configuration of bower occurs through a top level file named bower.json. 

## Installation

Bower can be installed via NPM on the command line:

	npm install -g bower

## Comparison to NPM

* Bower is optimized for front-end dependency management. 
* Bower enforces one version of an artifact. 
* NPM manages similar artifacts to Bower and can be made to manage web dependencies on the front end; however, its main purpose was for server-side dependencies. 
* It has similarities to Maven in that it brings in nested dependencies. 