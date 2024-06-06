/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DataUrlService } from "../dataUrl.service";
import { DataUrlCreateInput } from "./DataUrlCreateInput";
import { DataUrl } from "./DataUrl";
import { DataUrlFindManyArgs } from "./DataUrlFindManyArgs";
import { DataUrlWhereUniqueInput } from "./DataUrlWhereUniqueInput";
import { DataUrlUpdateInput } from "./DataUrlUpdateInput";

export class DataUrlControllerBase {
  constructor(protected readonly service: DataUrlService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DataUrl })
  async createDataUrl(
    @common.Body() data: DataUrlCreateInput
  ): Promise<DataUrl> {
    return await this.service.createDataUrl({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DataUrl] })
  @ApiNestedQuery(DataUrlFindManyArgs)
  async dataUrls(@common.Req() request: Request): Promise<DataUrl[]> {
    const args = plainToClass(DataUrlFindManyArgs, request.query);
    return this.service.dataUrls({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        updatedAt: true,
        url: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DataUrl })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async dataUrl(
    @common.Param() params: DataUrlWhereUniqueInput
  ): Promise<DataUrl | null> {
    const result = await this.service.dataUrl({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        updatedAt: true,
        url: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: DataUrl })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDataUrl(
    @common.Param() params: DataUrlWhereUniqueInput,
    @common.Body() data: DataUrlUpdateInput
  ): Promise<DataUrl | null> {
    try {
      return await this.service.updateDataUrl({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: DataUrl })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDataUrl(
    @common.Param() params: DataUrlWhereUniqueInput
  ): Promise<DataUrl | null> {
    try {
      return await this.service.deleteDataUrl({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          updatedAt: true,
          url: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
