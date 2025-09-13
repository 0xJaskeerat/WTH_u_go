import { ApolloServer, gql } from "apollo-server";

// schema --> collection of typedefs
const typeDefs = gql`
    type Expense{
        id: ID!
        title: String!
        amount: Float!
        date: String!
    }

    # for getting data
    type Query{
        expenses: [Expense!]!
    }

    # for posting data
    type Mutation{
        addExpense(title: String!, amount: Float!, date: String!): Expense!
        deleteExpense(idOfExpenseToBeDeleted: ID!): Boolean!
    }
`;

// demo expenses data 
let expenses = [
    {
        id: 1,
        title: 'Pg to office',
        amount: 50,
        date: '2025-09-08'
    },
    {
        id: 2,
        title: 'Lunch',
        amount: 50,
        date: '2025-09-08'
    },
    {
        id: 3,
        title: 'Office to Pg',
        amount: 30,
        date: '2025-09-08'
    }
]

// resolvers
const resolvers = {
    Query: {
        expenses: () => expenses
    },
    Mutation: {
        addExpense: (title, amount, date) => {
            const newExpense = {
                id: String(expenses.length + 1),
                title,
                amount,
                date
            }

            expenses.push(newExpense)

            return newExpense
        },
        deleteExpense: (idOfExpenseToBeDeleted) => {
            const targetID = expenses.findIndex(expense => expense.id === idOfExpenseToBeDeleted)
            if(targetID === -1) return null
            expenses.splice(targetID, 1)
            return true
        }
    },
}

// instance of the apollo server
const server = new ApolloServer({
    typeDefs, 
    resolvers
})

server.listen({ port: 4000 }).then(( { url }) => {
   console.log(`Access the server at ${url}` );
})
