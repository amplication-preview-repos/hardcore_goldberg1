import * as graphql from "@nestjs/graphql";
import { DataFileResolverBase } from "./base/dataFile.resolver.base";
import { DataFile } from "./base/DataFile";
import { DataFileService } from "./dataFile.service";

@graphql.Resolver(() => DataFile)
export class DataFileResolver extends DataFileResolverBase {
  constructor(protected readonly service: DataFileService) {
    super(service);
  }
}
