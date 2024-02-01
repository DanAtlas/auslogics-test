import React, { useEffect, useState } from 'react';
import { Checkbox, Table } from 'antd';
import type { TableColumnsType, TableProps, CheckboxOptionType } from 'antd';
import styles from './DataTable.module.scss';

interface DataType {
  key: React.Key;
  name: string;
  date: string;
  age: number;
  address: string;
  nameTwo: string;
  dateTwo: string;
  ageTwo: number;
  addressTwo: string;
}

const columns: TableColumnsType<DataType> = [
  {
    key: '1',
    title: 'Name',
    dataIndex: 'name',
    onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['ascend', 'descend'],
  },
  {
    key: '2',
    title: 'Date',
    dataIndex: 'date',
    sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  },
  {
    key: '3',
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    key: '4',
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value: string, record) => record.address.indexOf(value) === 0,
  },
  {
    key: '5',
    title: 'Name 2',
    dataIndex: 'nameTwo',
    onFilter: (value: string, record) => record.nameTwo.indexOf(value) === 0,
    sorter: (a, b) => a.nameTwo.length - b.nameTwo.length,
    sortDirections: ['ascend', 'descend'],
  },
  {
    key: '6',
    title: 'Date 2',
    dataIndex: 'dateTwo',
    sorter: (a, b) => new Date(a.dateTwo).getTime() - new Date(b.dateTwo).getTime()
  },
  {
    key: '7',
    title: 'Age 2',
    dataIndex: 'ageTwo',
    sorter: (a, b) => a.ageTwo - b.ageTwo,
  },
  {
    key: '8',
    title: 'Address 2',
    dataIndex: 'addressTwo',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value: string, record) => record.addressTwo.indexOf(value) === 0,
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Dias Abishev',
    date: '2017-12-24 23:12:00',
    age: 28,
    address: 'New York No. 1 Lake Park',
    nameTwo: 'Test Name 2',
    dateTwo: '2013-12-24 23:12:00',
    ageTwo: 29,
    addressTwo: 'New York No. 3 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    date: '2014-08-14 23:12:00',
    age: 42,
    address: 'London No. 1 Lake Park',
    nameTwo: 'Jim Green',
    dateTwo: '2014-08-14 23:12:00',
    ageTwo: 42,
    addressTwo: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Bruce Wayne',
    date: '2012-06-23 23:12:00',
    age: 35,
    address: 'Sidney No. 1 Lake Park',
    nameTwo: 'Bruce Wayne',
    dateTwo: '2012-06-23 23:12:00',
    ageTwo: 35,
    addressTwo: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'John Doe',
    date: '2022-11-24 23:12:00',
    age: 23,
    address: 'London No. 2 Lake Park',
    nameTwo: 'John Doe',
    dateTwo: '2022-11-24 23:12:00',
    ageTwo: 23,
    addressTwo: 'London No. 2 Lake Park',
  },
];

const defaultCheckedList = columns.map((item) => item.key as string);

const DataTable = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);

  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('pagination', pagination);
    console.log('filters', filters);
    console.log('sorter', sorter);
    console.log('extra', extra);

    sessionStorage.setItem(`sorter-${sorter.field}`, sorter.order); // TO DO: finish the render by storage data/filter
  };

  // const onSort = (sorter: { field: string; order: string; }) => {
  //   sessionStorage.setItem(`sorter-${sorter.field}`, sorter.order)
  // }

  const options = columns.map(({ key, title }) => ({
    label: title,
    value: key,
  }));

  const newColumns = columns.map((item) => ({
    ...item,
    hidden: !checkedList.includes(item.key as string),
  }));

  return (
    <div className={styles['data-table']}>
      <Checkbox.Group
        value={checkedList}
        options={options as CheckboxOptionType[]}
        onChange={(value) => {
          setCheckedList(value as string[]);
        }}
      />
      <Table 
        columns={newColumns} 
        dataSource={data} 
        onChange={onChange} 
      />
    </div>
  );
}

export default DataTable;