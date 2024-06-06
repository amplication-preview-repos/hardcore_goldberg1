import { Injectable } from "@nestjs/common";

@Injectable()
export class ChatGptIntegrationService {
  constructor() {}
  async ChatWithData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
