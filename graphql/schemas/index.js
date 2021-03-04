const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Page{
        _id: String!
        images: [Image]
        page: Int!
        total: Int!
    }
    type Image{
        src: String!
        width: Int
        height: Int
    }
    
    input PageInput{
        gallery: String!
        galleryId: String!
        count: String!
        page: String!
    }
    type RootQuery {
      getPage(pageInput: PageInput): Page
    }
    type RootMutation {
    }
    schema {
      query: RootQuery
      mutation: RootMutation
    }
`);