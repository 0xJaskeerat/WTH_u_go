Install Vue Apollo Composable for reactivity
```
npm install @vue/apollo-composable
```
This package will let you easily use GraphQL queries and mutations inside Vue components.

* The gql template literal tag allows you to write GraphQL queries, mutations, and fragments as multiline strings within your JS/TS code, and it parses them into an AST that can be understood and processed by GraphQL clients like Apollo Client.

* check this about packages
    "@apollo/client": "^3.11.8",          // Apollo Client core → for queries and caching
    "@vue/apollo-composable": "^4.2.2",   // Vue composables → integrates Apollo with Vue
    "graphql": "^16.11.0",                // Required for parsing GraphQL queries
    "vue": "^3.5.18"                      // Vue 3 framework