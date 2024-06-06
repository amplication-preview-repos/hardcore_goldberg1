import * as graphql from "@nestjs/graphql";
import { DataUrlResolverBase } from "./base/dataUrl.resolver.base";
import { DataUrl } from "./base/DataUrl";
import { DataUrlService } from "./dataUrl.service";

@graphql.Resolver(() => DataUrl)
export class DataUrlResolver extends DataUrlResolverBase {
  constructor(protected readonly service: DataUrlService) {
    super(service);
  }
}
