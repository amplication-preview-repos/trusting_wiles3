import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TaskStatusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="statusName" source="statusName" />
      </SimpleForm>
    </Edit>
  );
};
