![graphql-up](http://static.graph.cool.s3.amazonaws.com/images/graphql-up-light.svg)

`graphql-up` is the fastest way to get a free & ready to use GraphQL API. It works out of the box with Apollo & Relay and supports GraphQL subscriptions.

Here is a quick demo ([see this video tutorial for more details](https://www.youtube.com/watch?v=kWS7SGcp7cY)):

<!-- ![](./resources/preview.gif) -->

## Features

* 🚀 Get a instant **GraphQL API for your schema**
* ⚛️ Optimized endpoints for Apollo & Relay
* 👨‍🏫 Easy to add to your own tutorials, docs & examples


## Quickstart

```graphql
type Tweet {
  id: ID!
  text: String!
  author: User! @relation(name: "Tweets")
}

type User {
  id: ID!
  name: String!
  tweets: [Tweet!]! @relation(name: "Tweets")
}
```

Copy the schema above and save it as `twitter.schema`.

```sh
# Install the CLI via npm (or yarn)
npm install -g graphql-up

# Create GraphQL API using your local schema file
graphql-up twitter.schema
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

### Local schema file

```sh
graphql-up twitter.schema
```

### Hosted schema file


```sh
graphql-up https://raw.githubusercontent.com/graphcool/graphql-up/master/examples/twitter.schema
```

## How it works

You only need to provide the schema, graphql-up will create a GraphQL API for you. The actual magic happens on the servers sponsored by Graphcool.

![](http://imgur.com/TOTGex5.png)

You'll receive two endpoints:



## Examples

* [Twitter](examples/twitter.schema) [![graphql-up](http://static.graph.cool/images/graphql-up.svg)](https://www.graph.cool/graphql-up/new?source=https://raw.githubusercontent.com/graphcool/graphql-up/master/examples/twitter.schema)



## Help & Community [![Slack Status](https://slack.graph.cool/badge.svg)](https://slack.graph.cool)

Join our [Slack community](http://slack.graph.cool/) if you run into issues or have questions. We love talking to you!

![](http://i.imgur.com/5RHR6Ku.png)