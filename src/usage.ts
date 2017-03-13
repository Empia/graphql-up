import * as chalk from 'chalk'

export const usageRoot = `  Usage: graphql-up <schema>
  
    ${chalk.bold('Get a ready-to-use GraphQL API for your schema')}
    Read more at https://www.graph.cool/graphql-up/
    
  Examples:
    graphql-up twitter.schema                       # local schema file
    graphql-up https://example.com/twitter.schema   # fetch schema from URL
    
    More examples: https://github.com/graphcool/graphql-up

  Options:
    --version, -v   Print version of graphql-up
    --help, -h      Show help message

`

