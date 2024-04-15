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
const NoticeBoardTitle = () => {
  const record = useRecordContext();
  return <span>NoticeBoard {record ? `"${record.title}"` : ''}</span>;
};

export const NoticeBoardList = () => (
  <List actions={<ListActions />} filters={ResourceFilters}>
    <DatagridConfigurable>
      <TextField source="noticeID" />
      <TextField source="title" />
      <TextField source="content" />
      <ReferenceField source="author" reference="User" />
      <ReferenceField source="targetAudience" reference="User" />
      <DateField source="publicationDate" />
      <EditButton />
    </DatagridConfigurable>
  </List>
);

export const NoticeBoardEdit = () => (
  <Edit title={<NoticeBoardTitle />}>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="noticeID" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="title" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="content" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="author" reference="User" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="targetAudience" reference="User" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="publicationDate" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Edit>
);

export const NoticeBoardCreate = () => (
  <Create>
    <SimpleForm>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <TextInput source="noticeID" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="title" />
        </Grid>
        <Grid item xs={4}>
          <TextInput source="content" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="author" reference="User" />
        </Grid>
        <Grid item xs={4}>
          <ReferenceInput source="targetAudience" reference="User" />
        </Grid>
        <Grid item xs={4}>
          <DateInput source="publicationDate" />
        </Grid>
      </Grid>
    </SimpleForm>
  </Create>
);

const ResourceFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  ,
  ,
  ,
  <ReferenceInput source="author" label="author" reference="User" alwaysOn />,
  <ReferenceInput
    source="targetAudience"
    label="targetAudience"
    reference="User"
    alwaysOn
  />,
  ,
];