import { Author } from "./author.model";
import { Resolver, Query, Args, Int } from "@nestjs/graphql";

@Resolver(of => Author)
export class AuthorResolver {
  constructor() {}

  @Query(returns => Author)
  async author(@Args('id', { type: () => Int }) id: number) {
    return null;
  }
}
