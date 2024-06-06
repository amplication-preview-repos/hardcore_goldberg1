import * as graphql from "@nestjs/graphql";
import { ChatGptIntegrationService } from "./chatgptintegration.service";

export class ChatGptIntegrationResolver {
  constructor(protected readonly service: ChatGptIntegrationService) {}

  @graphql.Mutation(() => String)
  async ChatWithData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ChatWithData(args);
  }
}
