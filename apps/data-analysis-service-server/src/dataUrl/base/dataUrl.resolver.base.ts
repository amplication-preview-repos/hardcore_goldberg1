/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DataUrl } from "./DataUrl";
import { DataUrlCountArgs } from "./DataUrlCountArgs";
import { DataUrlFindManyArgs } from "./DataUrlFindManyArgs";
import { DataUrlFindUniqueArgs } from "./DataUrlFindUniqueArgs";
import { CreateDataUrlArgs } from "./CreateDataUrlArgs";
import { UpdateDataUrlArgs } from "./UpdateDataUrlArgs";
import { DeleteDataUrlArgs } from "./DeleteDataUrlArgs";
import { DataUrlService } from "../dataUrl.service";
@graphql.Resolver(() => DataUrl)
export class DataUrlResolverBase {
  constructor(protected readonly service: DataUrlService) {}

  async _dataUrlsMeta(
    @graphql.Args() args: DataUrlCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [DataUrl])
  async dataUrls(
    @graphql.Args() args: DataUrlFindManyArgs
  ): Promise<DataUrl[]> {
    return this.service.dataUrls(args);
  }

  @graphql.Query(() => DataUrl, { nullable: true })
  async dataUrl(
    @graphql.Args() args: DataUrlFindUniqueArgs
  ): Promise<DataUrl | null> {
    const result = await this.service.dataUrl(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => DataUrl)
  async createDataUrl(
    @graphql.Args() args: CreateDataUrlArgs
  ): Promise<DataUrl> {
    return await this.service.createDataUrl({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => DataUrl)
  async updateDataUrl(
    @graphql.Args() args: UpdateDataUrlArgs
  ): Promise<DataUrl | null> {
    try {
      return await this.service.updateDataUrl({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => DataUrl)
  async deleteDataUrl(
    @graphql.Args() args: DeleteDataUrlArgs
  ): Promise<DataUrl | null> {
    try {
      return await this.service.deleteDataUrl(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}