import React from 'react'
import { Box, Meter } from 'grommet'

export const amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

export const columns = [
  {
    property: 'name',
    header: 'Name with Extra Text'
  },
  {
    property: 'location',
    header: 'Location'
  },
  {
    property: 'date',
    header: 'Date',
    render: () => '01-01-2020',
    align: 'end'
  },
  {
    property: 'percent',
    header: 'Percent Complete',
    render: (datum) => (
      <Box pad={{ vertical: 'xsmall' }}>
        <Meter
          values={[{ value: datum.percent }]}
          thickness="small"
          size="small"
        />
      </Box>
    )
  },
  {
    property: 'paid',
    header: 'Paid',
    render: (datum) => amountFormatter.format(datum.paid / 100),
    align: 'end'
  }
]

export const data = [
  {
    id: 1,
    name: 'Alan',
    location: '',
    date: '',
    percent: 0,
    paid: 0
  },
  {
    id: 2,
    name: 'Bryan',
    location: 'Fort Collins',
    date: '2018-06-10',
    percent: 30,
    paid: 1234
  },
  {
    id: 3,
    name: 'Chris',
    location: 'Palo Alto',
    date: '2018-06-09',
    percent: 40,
    paid: 2345
  },
  {
    id: 4,
    name: 'Eric',
    location: 'Palo Alto',
    date: '2018-06-11',
    percent: 80,
    paid: 3456
  },
  {
    id: 5,
    name: 'Doug',
    location: 'Fort Collins',
    date: '2018-06-10',
    percent: 60,
    paid: 1234
  },
  {
    id: 6,
    name: 'Jet',
    location: 'Palo Alto',
    date: '2018-06-09',
    percent: 40,
    paid: 3456
  },
  {
    id: 7,
    name: 'Michael',
    location: 'Boise',
    date: '2018-06-11',
    percent: 50,
    paid: 1234
  },
  {
    id: 8,
    name: 'Tracy',
    location: 'San Francisco',
    date: '2018-06-10',
    percent: 10,
    paid: 2345
  },
  {
    id: 9,
    name: 'Joe',
    location: '',
    date: '',
    percent: 0,
    paid: 0
  },
  {
    id: 10,
    name: 'Mary',
    location: 'Fort Collins',
    date: '2018-06-10',
    percent: 30,
    paid: 1234
  },
  {
    id: 11,
    name: 'John',
    location: 'Palo Alto',
    date: '2018-06-09',
    percent: 40,
    paid: 2345
  },
  {
    id: 12,
    name: 'Ben',
    location: 'Palo Alto',
    date: '2018-06-11',
    percent: 80,
    paid: 3456
  },
  {
    id: 13,
    name: 'Jack',
    location: 'Fort Collins',
    date: '2018-06-10',
    percent: 60,
    paid: 1234
  }
]

export const data1 = [
  {
    name: 'Alan1',
    location: '',
    date: '',
    percent: 0,
    paid: 0
  },
  {
    name: 'Bryan1',
    location: 'Fort Collins',
    date: '2018-06-10',
    percent: 30,
    paid: 1234
  },
  {
    name: 'Chris1',
    location: 'Palo Alto',
    date: '2018-06-09',
    percent: 40,
    paid: 2345
  },
  {
    name: 'Eric1',
    location: 'Palo Alto',
    date: '2018-06-11',
    percent: 80,
    paid: 3456
  },
  {
    name: 'Doug1',
    location: 'Fort Collins',
    date: '2018-06-10',
    percent: 60,
    paid: 1234
  },
  {
    name: 'Jet1',
    location: 'Palo Alto',
    date: '2018-06-09',
    percent: 40,
    paid: 3456
  },
  {
    name: 'Michael1',
    location: 'Boise',
    date: '2018-06-11',
    percent: 50,
    paid: 1234
  },
  {
    name: 'Tracy1',
    location: 'San Francisco',
    date: '2018-06-10',
    percent: 10,
    paid: 2345
  },
  {
    name: 'Joe1',
    location: '',
    date: '',
    percent: 0,
    paid: 0
  },
  {
    name: 'Mary1',
    location: 'Fort Collins',
    date: '2018-06-10',
    percent: 30,
    paid: 1234
  },
  {
    name: 'John1',
    location: 'Palo Alto',
    date: '2018-06-09',
    percent: 40,
    paid: 2345
  },
  {
    name: 'Ben1',
    location: 'Palo Alto',
    date: '2018-06-11',
    percent: 80,
    paid: 3456
  },
  {
    name: 'Jack1',
    location: 'Fort Collins',
    date: '2018-06-10',
    percent: 60,
    paid: 1234
  },
  {
    name: 'Jill1',
    location: 'Palo Alto',
    date: '2018-06-09',
    percent: 40,
    paid: 3456
  }
]
