//Source code generated by AppGPT (www.appgpt.tech)
import {
  Datagrid,
  List,
  EditButton,
  Edit,
  SimpleForm,
  Create,
  SelectColumnsButton,
  DatagridConfigurable,
  TopToolbar,
  CreateButton,
  ExportButton,
  FilterButton,
  //Field controls
  BooleanField,
  DateField,
  EmailField,
  ImageField,
  NumberField,
  ReferenceField,
  TextField,
  UrlField,
  //Input controls
  BooleanInput,
  DateInput,
  EmailInput,
  ImageInput,
  NumberInput,
  ReferenceInput,
  TextInput,
  UrlInput,
  PasswordInput,
} from 'react-admin';
import { useRecordContext } from 'react-admin';
import { Grid } from '@mui/material';
const ReadOnlyPasswordField = ({ record, source }) => {
  // You can customize the way you display the password here, e.g., mask it with asterisks
  const maskedPassword = '********';

  return <span>{maskedPassword}</span>;
};
const ListActions = () => (
  <TopToolbar>
    <FilterButton />
    <CreateButton />
    <ExportButton />
    <SelectColumnsButton />
  </TopToolbar>
);
const MessageTitle = () => {
  const record = useRecordContext();
  return <span>Message {record ? `"${record.messageContent}"` : ''}</span>;
};

export const MessageList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <ReferenceField source="sender" reference="User" />
      <ReferenceField source="receiver" reference="User" />
      <TextField source="messageContent" />
      <TextField source="subject" />
      <DateField source="timestamp" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const MessageEdit = () => (
  <Edit title={<MessageTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="sender" reference="User" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="receiver" reference="User" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="messageContent" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="subject" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="timestamp" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const MessageCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <ReferenceInput source="sender" reference="User" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="receiver" reference="User" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="messageContent" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="subject" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="timestamp" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="sender" label="sender" reference="User" alwaysOn />,
  <ReferenceInput
    source="receiver"
    label="receiver"
    reference="User"
    alwaysOn
  />,
  ,
  ,
  ,
];