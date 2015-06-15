# angular-test — An angular project to test interview candidates

This project is an application skeleton generated from angular-seed project https://github.com/angular/angular-seed

It also has a static json file that will start a json server using https://github.com/typicode/json-server


## Getting Started

Clone the project, install all the required dependencies and start the json-server 

````bash
npm install
json-server connector.json --routes routes.json
````

### Prerequisites

npm install

json-server

### Test 1
A sample connector.json file contains the data for connector and fields. Use this data to make the connector.html file functional

The html has 2 secions.

The table in the left shows a list of connectors.

The table in the right shows the configurations for the selected connector.

Selecting one connector from the list in the left will show the list of configurations for the selected connector and a select box with the list of fields. The user of this page will select a field and map it to a configuration for the selected connector. The goal is to make this page functional so when the save button is clicked the mappingfield attribute is populated in the connector.json file.

