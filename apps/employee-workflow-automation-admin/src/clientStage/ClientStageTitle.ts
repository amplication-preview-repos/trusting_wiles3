import { ClientStage as TClientStage } from "../api/clientStage/ClientStage";

export const CLIENTSTAGE_TITLE_FIELD = "stageName";

export const ClientStageTitle = (record: TClientStage): string => {
  return record.stageName?.toString() || String(record.id);
};
