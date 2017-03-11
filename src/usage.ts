import * as chalk from 'chalk'

export const usageRoot = `  Usage: graphql-up <schema>
  
    ${chalk.bold('Get a ready-to-use GraphQL endpoint based on your schema')}
    Read more at https://www.graph.cool/graphql-up
    
  Examples:
    graphql-up twitter.schema                       # local schema file
    graphql-up https://example.com/twitter.schema   # fetch schema from URL
    
    More examples: https://www.graph.cool/graphql-up/examples

  Options:
    --version, -v    Sign up or login
    --help, -h       Create a new project

`

