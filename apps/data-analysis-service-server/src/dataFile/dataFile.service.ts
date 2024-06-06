import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DataFileServiceBase } from "./base/dataFile.service.base";

@Injectable()
export class DataFileService extends DataFileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
