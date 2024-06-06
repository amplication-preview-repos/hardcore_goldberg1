import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataUrlServiceBase } from "./base/dataUrl.service.base";

@Injectable()
export class DataUrlService extends DataUrlServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
