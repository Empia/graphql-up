![graphql-up](http://static.graph.cool.s3.amazonaws.com/images/graphql-up-light.svg)

`graphql-up` is the fastest way to get a free & ready to use GraphQL API. It works out of the box with Apollo & Relay and supports GraphQL subscriptions.

![](./resources/preview.gif)

## Quickstart

```sh
# Install with npm
npm install -g graphql-up

# Create GraphQL API using a local schema file
graphql-up instagram.schema
```

## Usage

```sh
  Usage: graphql-up <schema>
  
    Get a ready-to-use GraphQL API for your schema
    Read more at https://www.graph.cool/graphql-up/
    
  Examples:
    graphql-up twitter.schema                       # local schema file
    graphql-up https://example.com/twitter.schema   # fetch schema from URL
    
    More examples: https://github.com/graphcool/graphql-up

  Options:
    --version, -v   Print version of graphql-up
    --help, -h      Show help message

```

## How it works

You only need to provide the schema, graphql-up will create a GraphQL API for you. The actual magic happens on the servers sponsored by Graphcool.

![](http://imgur.com/TOTGex5.png)

## Examples

### Twitter

```graphql
type Tweet {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  text: String!
  author: User!
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  tweets: [Tweet!]!
}
```

### Instagram

```graphql
type Post {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  author: User!
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  posts: [Tweet!]!
}
```