const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Page{
        id: String!
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
      getPage(pageInput: PageInput): Page!
    }
    schema {
      query: RootQuery
    }
`);