import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { buildSchema, } from "type-graphql"
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { LoginResolver } from "./resolver/LoginResolver";
import path from "node:path";


dotenv.config();

async function startApolloServer () {
	const schema = await buildSchema({
		resolvers: [LoginResolver],
		emitSchemaFile: path.resolve(__dirname, "schema.graphql"),
		validate: true
	})

	const server = new ApolloServer({
		schema,
	});

	const app = express();
	app.use(cors());
	app.use(express.json())

	const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
  console.log(`GraphQL server ready at ${url}`);



}

startApolloServer()
