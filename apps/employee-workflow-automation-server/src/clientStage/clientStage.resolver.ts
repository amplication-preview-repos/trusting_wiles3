import * as graphql from "@nestjs/graphql";
import { ClientStageResolverBase } from "./base/clientStage.resolver.base";
import { ClientStage } from "./base/ClientStage";
import { ClientStageService } from "./clientStage.service";

@graphql.Resolver(() => ClientStage)
export class ClientStageResolver extends ClientStageResolverBase {
  constructor(protected readonly service: ClientStageService) {
    super(service);
  }
}
