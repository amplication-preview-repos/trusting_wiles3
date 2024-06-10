import { Module } from "@nestjs/common";
import { ClientStageModuleBase } from "./base/clientStage.module.base";
import { ClientStageService } from "./clientStage.service";
import { ClientStageController } from "./clientStage.controller";
import { ClientStageResolver } from "./clientStage.resolver";

@Module({
  imports: [ClientStageModuleBase],
  controllers: [ClientStageController],
  providers: [ClientStageService, ClientStageResolver],
  exports: [ClientStageService],
})
export class ClientStageModule {}
