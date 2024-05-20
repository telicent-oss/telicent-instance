# telicent-instance
A tool to create and visualize diagrams for specific ontologies using [Resource Description Framework (RDF)](https://www.w3.org/RDF/).

Key Features:

- **Interactive Diagramming**: Build and edit models and diagrams using ontologies.
- **Dynamic RDF Visualization**: Directly input RDF code and observe how it transforms into comprehensible diagrams.

_Telicent Instance_ is aimed at those using [Semantic Web standards](https://en.wikipedia.org/wiki/Semantic_Web).

## Prerequisites
- TripleStore database: This is a type of database for storing and retrieving RDF data. You'll need access to one to use _Telicent Instance_, e.g. [Apache Jena](https://jena.apache.org/tutorials/rdf_api.html)

## Installation
### Get up and running


#### With Docker
```yaml
version "3.8"

services:
  instance-app:
    build:
      context: .
    environment:
      - TRIPLESTORE: <add uri here> # defaults to localhost:3030
      - TOPIC: <add topic name here> # defaults to ontology
```

#### For development

1. Ensure your triple store is running with an 'ontology' topic created.

2. Create .env file and copy contents from .env.local (This step can be skipped
   if you already have a .env file)

```bash
touch .env && cp .env.local .env
```

3. Install dependencies

```bash
yarn install
```

4. Start application

```bash
yarn start
```
### Environment variables

At the root of the project you will find two .env.\* files. Both files contain
the required environment variables needed for the application to run.

- `.env.default` file is often used while packaging the application for
  deployment. Therefore, the variables in this file should be left empty.

- `.env.local` file is often used for local development and can be used to
  create your `.env` file.

`.env` is your local copy of the `.env.local` file and should not be committed.
When running the application for the first time, you will need to create this
file (Step 2 in [Getting Started](#get-up-and-running) section above).

In the package.json you will find a prestart script which runs `env.sh` script. This
script requires the `.env` file. The script will generate `env-config.js` files
in the root of the project and in the public directory for the `index.html` to
use. These files should also not be committed.

### Variables list (as of 25 April 2024)

- **TRIPLE_STORE** (string) - IP Address or URI of triple store
<br />Defaults to `localhost:3030`
- **TOPIC** (string) - The topic to be used in the triple store
<br />Defaults to `ontology`

## How to use

The following video will show both ways of working.
> [!NOTE] This is using Telicent's own triple store with IES ontology data
https://github.com/telicent-oss/telicent-instance/assets/88431810/a15d865a-a591-44ba-9f48-afe1d92b231e

### Adding and removing nodes

To create a node using RDF write the following syntax:
`data:6cd17931-5c29-4cb9-8c26-745939aa9335 a ies:BoundingState .`

To create a node from using the diagram, choose a node from the hierarchy menu on the left and drag it on the diagram.
A prompt will pop up. Fill that in and submit your details.


### Adding objectProperties
To add an objectProperty in RDF use the following syntax:
```
data:6cd17931-5c29-4cb9-8c26-745939aa9335 a ies:BoundingState .
data:0b791546-4f5c-4d58-9b62-7b7608af6468 a ies:Person .

data:0b791546-4f5c-4d58-9b62-7b7608af6468 ies:aCopyOf data:6cd17931-5c29-4cb9-8c26-745939aa9335 .
```

To add an objectProperty in the diagram select the handle of the source node and drag it to the handle of the target node.
A prompt will pop up asking you to select the objectProperty type.

### Adding dataTypeProperties
To add a dataTypeProperty in RDF use the following syntax:
```
data:c10355b8-6601-4dd3-8aaa-af157d75a6ab a ies:Name ;
    ies:representationValue "California" .
```

To add a dataTypeProperty using the diagram right click on a node and fill the details in the prompt that appears.


### Deleting
Click on the node or edge and press delete
