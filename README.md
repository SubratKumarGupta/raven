# RAVEN Open Source Software (OSS) Community Project

RAVEN (Realtime Assistant Voice Enabled Network) OSS community edition.

RAVEN is meant to be a digital assistant and artificial cognitive entity. The goal is to create an autonomous artificial intelligence that is reliable, trustworthy, and useful. 

Please read the draft [Code of Conduct](https://github.com/daveshap/raven/wiki/Code-of-Conduct-(draft)).

There is also a [Contributors Guide draft](Contributing.md) that will eventually be merged with the Code of Conduct.


## Get Started with Development

The development branching strategy is located [here in the Wiki](https://github.com/daveshap/raven/wiki/Development---Branching-Strategy-and-Process-(draft)).


- Clone this repository using your favorite tool(s).

- Checkout the desired branch to work on. In this example 1.0.0-dev

```
git checkout 1.0.0-dev

```

- Create a Python virtual environment with tools of your choice using the environment.yml file in the root of the project.

- Activate the new environment according to instructions in the terminal window.

- The *microservices* are in the services/microservices directory.

### Documetation Development

Documentation is written in markdown files in the docs directory. 

You can learn more about the Markdown syntax [here](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/about-writing-and-formatting-on-github)

MkDocs is installed in the virtual environment, so you can run a live server for previewing the docs in your browser:

```
mkdocs serve

```
