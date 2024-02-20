import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class LoginInputArgs {
	@Field(()=> String, {nullable: false})
	email!: string 

}