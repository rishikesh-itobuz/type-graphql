import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { LoginInputArgs } from "./Args/InputArgs/LoginInputArgs";

@Resolver()

export class LoginResolver {
	@Query(() => String)
	async greet() {
		return "Hi there!"
	}

	@Mutation(() => String)
	userLogin(@Args() args: LoginInputArgs) {
		return "Hello world"
	}
}