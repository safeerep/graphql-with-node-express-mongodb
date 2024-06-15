import UserCollection from "../schema/user.schema";

const resolvers = {
    Query: {
        getAllUsers: async () => {
            return await UserCollection.find()
        },

        getASpecificUser: async ( parent: any, args: {id: string}) => {
            console.log(args);
            const { id } = args;
            return await UserCollection.findById(id)
        },

    },

    Mutation: {
        createUser: async ( _: any, {name, age}: {name: string, age: number}) => {
            const newUser = await UserCollection.create({ name, age })
            return newUser;
        },

        updateASpecificUserAge: async ( _: any, { id, age }: {id: string, age: number}) => {
            return await UserCollection.findByIdAndUpdate(id,
                {
                    $set: {
                        age: age
                    }
                }, {
                    new: true
                }
            )
        }
    }
}

export default resolvers;