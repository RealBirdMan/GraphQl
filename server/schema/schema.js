const graphql = require("graphql");
const _ = require("lodash");

const {GraphQLObjectType, GraphQLString, GraphQLSchema} = graphql;

const DUMMY_DATA = [
    {name: "Peter Brown", genere: "Fantasy", id:"1"},
    {name: "Peter Yellow", genere: "Horror", id:"2"},
    {name: "Brown Peter", genere: "History", id:"3"}
]

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genere: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: {id:{type: GraphQLString}},
            resolve(parent, args){
                //code to get data from db
               return DUMMY_DATA.find(books, {id: args.id});
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})