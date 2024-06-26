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
const GroupTitle = () => {
  const record = useRecordContext();
  return <span>Group {record ? `"${record.groupName}"` : ''}</span>;
};

export const GroupList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="groupID" />
      <TextField source="groupName" />
      <ReferenceField source="members" reference="User" />
      <TextField source="groupDescription" />
      <DateField source="creationDate" />
      <ReferenceField source="groupAdmin" reference="User" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const GroupEdit = () => (
  <Edit title={<GroupTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="groupID" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="groupName" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="members" reference="User" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="groupDescription" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="creationDate" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="groupAdmin" reference="User" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const GroupCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="groupID" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="groupName" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="members" reference="User" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="groupDescription" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="creationDate" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="groupAdmin" reference="User" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  <ReferenceInput source="members" label="members" reference="User" alwaysOn />,
  ,
  ,
  <ReferenceInput
    source="groupAdmin"
    label="groupAdmin"
    reference="User"
    alwaysOn
  />,
];
