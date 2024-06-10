import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TaskStatusCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="statusName" source="statusName" />
      </SimpleForm>
    </Create>
  );
};
