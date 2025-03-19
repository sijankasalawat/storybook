import Table from './Table';

export default {
  title: 'Components/Table',
  component: Table,
};

const data = [
  { Name: 'sijan', Age: 20, Job: 'Engineer' },
  { Name: 'susan', Age: 21, Job: 'Designer' },
];

export const Default = () => <Table data={data} />;
