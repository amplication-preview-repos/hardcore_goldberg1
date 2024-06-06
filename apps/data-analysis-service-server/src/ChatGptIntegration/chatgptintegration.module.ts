import { Module } from "@nestjs/common";
import { ChatGptIntegrationService } from "./chatgptintegration.service";
import { ChatGptIntegrationController } from "./chatgptintegration.controller";
import { ChatGptIntegrationResolver } from "./chatgptintegration.resolver";

@Module({
  controllers: [ChatGptIntegrationController],
  providers: [ChatGptIntegrationService, ChatGptIntegrationResolver],
  exports: [ChatGptIntegrationService],
})
export class ChatGptIntegrationModule {}
