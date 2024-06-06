import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ChatGptIntegrationService } from "./chatgptintegration.service";

@swagger.ApiTags("chatGptIntegrations")
@common.Controller("chatGptIntegrations")
export class ChatGptIntegrationController {
  constructor(protected readonly service: ChatGptIntegrationService) {}

  @common.Post("/chat-with-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ChatWithData(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ChatWithData(body);
      }
}
