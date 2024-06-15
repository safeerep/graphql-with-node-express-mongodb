import express, { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'
import typeDefs from './schema/graphql.schema';
import resolvers from './resolvers';

export const startServer = async () => {
    try {
        const app: Application | any = express();

        const server = new ApolloServer({
            typeDefs: typeDefs,
            resolvers: resolvers
        })

        await server.start();
        server.applyMiddleware({ app })
        
        const PORT: number = Number(process.env.PORT)
        app.listen( PORT, () => {
            console.log(`server started at the port ${PORT}`);
            console.log(`gql server is ready to listen on http://127.0.0.1:${PORT+server.graphqlPath}`);
        })
    } catch (error) {
        console.log(`something went wrong during starting server ${error}`);
        process.exit(1)
    }
}