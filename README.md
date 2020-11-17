# GraphQL-Node
 An NPM module to send GraphQL API requests
# Use
 Run `npm install graphql-node`
# Syntax
 `const { apiReq } = require('graphql-node');`
 `apiReq(url, query[, variables][, authToken])`
## Parameters
 The parameters of the `apiReq` function are:
 <br> `url`: The full url of the API endpoint (String)<br>
 `query`: The query you would like to send to the API (String)<br>
 `variables`: OPTIONAL The variables passed to the query (JSON Object in the format `{"name1": "value", "name2": "value"}`)<br>
 `authToken`: OPTIONAL The authorization token for the API
 