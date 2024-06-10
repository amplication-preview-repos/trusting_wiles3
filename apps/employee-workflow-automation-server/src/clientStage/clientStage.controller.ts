import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClientStageService } from "./clientStage.service";
import { ClientStageControllerBase } from "./base/clientStage.controller.base";

@swagger.ApiTags("clientStages")
@common.Controller("clientStages")
export class ClientStageController extends ClientStageControllerBase {
  constructor(protected readonly service: ClientStageService) {
    super(service);
  }
}
