import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClientStageServiceBase } from "./base/clientStage.service.base";

@Injectable()
export class ClientStageService extends ClientStageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
