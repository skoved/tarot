# Tarot
The goal is to make a web app that lets you connect with a friend and do a tarot reading for them

this project has two sub-projects: [tarot-server](https://github.com/skoved/tarot-server), [tarot-client](https://github.com/skoved/tarot-client)

## Requirements
* the project is setup to run with docker and docker-compose (check wiki for installation instructions
* node.js version 10 (I'm running version 10.15.3) is what I am developing with
* to get the two sub-projects cloned into this directory, run clone.sh

```bash
$ ./clone.sh
```

if it fails to run try

```bash
$ chmod u+x clone.sh
```

and then repeat the first command

## To run
* after cloning this repository cd into the project folder
* run 'docker-compose up --build'
* the frontend will be available at localhost:3000
* the backend will be available at localhost:5000/[an-api-endpoint]
