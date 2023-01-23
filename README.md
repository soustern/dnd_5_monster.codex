# dnd_5_monster.codex

Link: https://dnd-5-monster-codex-fsuu6cic3-soustern.vercel.app/

## Introduction

This is a small web app that lets you search and visualise information about all Dungeons and Dragons monster present at the following database: http://www.dnd5eapi.co/

The data brought back from the API is presented on the front-end in an orderly and aesthetically pleasing manner. While designing the app, a process that had mobile as the main focus, a lot of care has been taken to make sure a hierarchy of colors and sizes was well defined and in place.

Fluidity of content a clarity of information was achieved through the whole project.

## Technologies Used

### NPM

This package manager was the foundation of the project, being the responsibility for setting up everything used. Two custom scripts were made to quickly set up a flask server (debug mode on) and compile a main SASS file into a main CSS file.

### HTML

A good deal of focus was put into making the markup semantic, and the principles of BEM (Block, Element, Modifier) were applied to the class names. 
Either way, there is massive room for improvement and the app accessibility may be poor at best.

### SASS

Many of the tools that SASS brings to the table where leveraged, putting to good use concatenation, extends, mixins and, mainly, variables.
As for folder structure, the 7 to 1 model was used (seven folders worth of files being concentrated into one).

### JavaScript

This language was used extensively, being responsible for connecting to the API, manipulating the DOM, formatting user input and preventing the default behavior when necessary. Although handy and performant, the structure of the code could have been much more organised and fragmented in multiple components.

### Flask

Being a micro-framework, flask presented itself as an amazing tool for quickly setting up the routing structure. It also worked well as a personal development environment that was very simple to set up.
But, in hindsight, I can see how this project could have worked out without flask, making it not necessary.

## Resources

### Stack Overflow

Stack Overflow was very useful for finding solutions about very specific bugs. Odds where someone had already asked about that before.

### Youtube

The following channels were consulted:

- https://www.youtube.com/@naztronaut

- https://www.youtube.com/@CodingGarden

### Courses

The following courses were consulted: 

- https://www.udemy.com/course/advanced-css-and-sass/

- https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0

## Usage and reproduction 

- First off, the package. json has listed all the necessary tools for working with the project, so a simple "npm install" on the root folder sets up 50% of the development environment. All necessary scripts are listed in this file as well and have been need to be executed for everything to compile and work

- Python must be installed on the computer and flask has to be added via a "pip3" command.

- As for virtual environments, the default Ubuntu one was used, being added and activated to and from the root folder.

- Elint and Emmet for SASS, HTML, JavaScript, Python and Flask where all added via VSCode extensions.

- Almost every line of SASS and JS is commented, so all the processes and lines of thought should be clear.

## Deployment

Deployment of the app was made entirely via Vercel CLI

### Problems

During the proccess of deployment, some images returned a http error of 500 when trying to load.
What solved this was compacting the images to a smaller size.


