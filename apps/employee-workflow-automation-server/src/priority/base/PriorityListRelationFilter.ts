/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PriorityWhereInput } from "./PriorityWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PriorityListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PriorityWhereInput,
  })
  @ValidateNested()
  @Type(() => PriorityWhereInput)
  @IsOptional()
  @Field(() => PriorityWhereInput, {
    nullable: true,
  })
  every?: PriorityWhereInput;

  @ApiProperty({
    required: false,
    type: () => PriorityWhereInput,
  })
  @ValidateNested()
  @Type(() => PriorityWhereInput)
  @IsOptional()
  @Field(() => PriorityWhereInput, {
    nullable: true,
  })
  some?: PriorityWhereInput;

  @ApiProperty({
    required: false,
    type: () => PriorityWhereInput,
  })
  @ValidateNested()
  @Type(() => PriorityWhereInput)
  @IsOptional()
  @Field(() => PriorityWhereInput, {
    nullable: true,
  })
  none?: PriorityWhereInput;
}
export { PriorityListRelationFilter as PriorityListRelationFilter };
