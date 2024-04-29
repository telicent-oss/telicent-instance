# telicent-instance
RDF Playground for visualising and creating Instance diagrams.

## Prerequisites
- TripleStore

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

- **TRIPLESTORE** (string) - IP Address or URI of triple store
<br />Defaults to `localhost:3030`
- **TOPIC** (string) - The topic to be used in the triple store
<br />Defaults to `ontology`

## How to use

The following video will show both ways of working.
> [!NOTE] This is using Telicents own triple store with IES ontology data
https://github.com/telicent-oss/telicent-instance/assets/88431810/a15d865a-a591-44ba-9f48-afe1d92b231e

