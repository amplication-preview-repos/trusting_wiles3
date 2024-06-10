import { ClientStageWhereInput } from "./ClientStageWhereInput";
import { ClientStageOrderByInput } from "./ClientStageOrderByInput";

export type ClientStageFindManyArgs = {
  where?: ClientStageWhereInput;
  orderBy?: Array<ClientStageOrderByInput>;
  skip?: number;
  take?: number;
};
