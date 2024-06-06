/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DataFileWhereUniqueInput } from "./DataFileWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DataFileUpdateInput } from "./DataFileUpdateInput";

@ArgsType()
class UpdateDataFileArgs {
  @ApiProperty({
    required: true,
    type: () => DataFileWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DataFileWhereUniqueInput)
  @Field(() => DataFileWhereUniqueInput, { nullable: false })
  where!: DataFileWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DataFileUpdateInput,
  })
  @ValidateNested()
  @Type(() => DataFileUpdateInput)
  @Field(() => DataFileUpdateInput, { nullable: false })
  data!: DataFileUpdateInput;
}

export { UpdateDataFileArgs as UpdateDataFileArgs };