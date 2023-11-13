import React from 'react'
import { Box } from 'grommet'

import { AvatarInfo } from '../../avatar-info/AvatarInfo'

export const columns = [
  {
    property: 'name',
    header: 'Name',
    render: (datum) => (
      <AvatarInfo
        avatarSrc={datum.profilePic}
        avatarSize="small"
        primaryInfo={datum.name}
        secondaryInfo=""
        testId="user-info-photo"
      />
    )
  },
  {
    property: 'email',
    header: 'Email'
  },
  {
    property: 'status',
    header: 'Status',
    render: (datum) => (
      <Box pad={{ vertical: 'none' }}>
        {datum.status ? 'active' : 'deactive'}
      </Box>
    )
  }
]

export const data = [
  {
    id: '1',
    createdAt: '2020-11-17T08:44:19.140Z',
    name: 'Sasha Glover',
    profilePic: `https://i.pravatar.cc/150?u=10`,
    email: 'Maye_Keebler88@hotmail.com',
    status: false,
    selected: false,
    UUID: '21a7cb12-2411-4461-af95-170fdfee5fa1'
  },
  {
    id: '2',
    createdAt: '2020-11-17T09:12:51.896Z',
    name: 'Juanita Wiza',
    profilePic: `https://i.pravatar.cc/150?u=11`,
    email: 'Marianne56@gmail.com',
    status: false,
    selected: false,
    UUID: '7323d916-cf51-4d1d-b5d2-9f0200c3694f'
  },
  {
    id: '3',
    createdAt: '2020-11-17T16:48:26.427Z',
    name: 'Oliver Corkery',
    profilePic: `https://i.pravatar.cc/150?u=12`,
    email: 'Kaden.Runolfsdottir6@gmail.com',
    status: false,
    selected: false,
    UUID: '6aa2766e-71e3-41ad-8885-dd5d03822c07'
  },
  {
    id: '4',
    createdAt: '2020-11-17T17:27:33.097Z',
    name: 'Everett Terry',
    profilePic: `https://i.pravatar.cc/150?u=13`,
    email: 'Telly.Hills72@hotmail.com',
    status: true,
    selected: false,
    UUID: '71904371-cd51-4990-8701-17e429561bfa'
  },
  {
    id: '5',
    createdAt: '2020-11-17T16:51:16.513Z',
    name: 'Dr. Nedra Gerlach',
    profilePic: `https://i.pravatar.cc/150?u=14`,
    email: 'Enos60@yahoo.com',
    status: false,
    selected: false,
    UUID: '4199e14b-eb91-443e-9b04-667c43a1db27'
  },
  {
    id: '6',
    createdAt: '2020-11-17T08:28:09.831Z',
    name: 'Austin Crooks',
    profilePic: `https://i.pravatar.cc/150?u=15`,
    email: 'Michelle_Auer64@hotmail.com',
    status: false,
    selected: true,
    UUID: '1b675b16-4ab4-448b-b8df-53be12282ce2'
  },
  {
    id: '7',
    createdAt: '2020-11-17T17:38:10.070Z',
    name: 'Friedrich Wiegand',
    profilePic: `https://i.pravatar.cc/150?u=16`,
    email: 'Tevin_DAmore23@yahoo.com',
    status: true,
    selected: false,
    UUID: 'fa71a267-d9fc-4cf1-a979-e2338fef2b31'
  },
  {
    id: '8',
    createdAt: '2020-11-17T15:38:29.846Z',
    name: 'Armando Wunsch',
    profilePic: `https://i.pravatar.cc/150?u=17`,
    email: 'Alessandra49@yahoo.com',
    status: false,
    selected: true,
    UUID: '3ab0ad05-21bf-4545-8b08-513b3d33b384'
  },
  {
    id: '9',
    createdAt: '2020-11-17T06:38:47.765Z',
    name: 'Dominique Rolfson',
    profilePic: `https://i.pravatar.cc/150?u=18`,
    email: 'Nella18@gmail.com',
    status: true,
    selected: true,
    UUID: 'acec3f64-2566-437b-bfb5-bd8381b02527'
  },
  {
    id: '10',
    createdAt: '2020-11-17T09:33:52.771Z',
    name: 'Shana Doyle',
    profilePic: `https://i.pravatar.cc/150?u=19`,
    email: 'Shyanne33@yahoo.com',
    status: false,
    selected: true,
    UUID: '061fb196-35dd-4260-98db-182e68de6e16'
  },
  {
    id: '11',
    createdAt: '2020-11-17T20:09:09.717Z',
    name: 'Brain Parker',
    profilePic: `https://i.pravatar.cc/150?u=20`,
    email: 'Nayeli.Hackett@yahoo.com',
    status: false,
    selected: true,
    UUID: 'b3acd880-790f-4399-87ce-015e2bebb504'
  },
  {
    id: '12',
    createdAt: '2020-11-17T05:44:00.345Z',
    name: 'Franz Predovic III',
    profilePic: `https://i.pravatar.cc/150?u=21`,
    email: 'Ressie_Reichert@gmail.com',
    status: true,
    selected: true,
    UUID: '0d187db2-8ac6-45b0-8c7c-b719aae489e7'
  },
  {
    id: '13',
    createdAt: '2020-11-16T21:24:32.043Z',
    name: 'Maximillian White',
    profilePic: `https://i.pravatar.cc/150?u=22`,
    email: 'Clint.Harber19@gmail.com',
    status: false,
    selected: false,
    UUID: '33842473-7189-4985-a805-7583ee1e1dd1'
  },
  {
    id: '14',
    createdAt: '2020-11-17T08:26:25.755Z',
    name: 'Alexandre Friesen',
    profilePic: `https://i.pravatar.cc/150?u=23`,
    email: 'Dimitri.Carroll28@gmail.com',
    status: true,
    selected: false,
    UUID: 'f9b01850-610d-4cb4-b553-4981beae5eb9'
  },
  {
    id: '15',
    createdAt: '2020-11-17T01:21:03.707Z',
    name: 'Hubert Parker',
    profilePic: `https://i.pravatar.cc/150?u=24`,
    email: 'Anjali_Pouros@hotmail.com',
    status: true,
    selected: true,
    UUID: 'd1b2e071-4f6f-4b30-b9aa-633372286d88'
  },
  {
    id: '16',
    createdAt: '2020-11-16T23:22:22.187Z',
    name: 'Lucas Durgan',
    profilePic: `https://i.pravatar.cc/150?u=25`,
    email: 'Lavina.Lueilwitz49@gmail.com',
    status: true,
    selected: false,
    UUID: 'fc243bce-e90d-4e46-93f5-b085ed6e8f0c'
  },
  {
    id: '17',
    createdAt: '2020-11-17T19:30:02.586Z',
    name: 'Stevie Friesen',
    profilePic: `https://i.pravatar.cc/150?u=26`,
    email: 'Alden_Haley@hotmail.com',
    status: true,
    selected: true,
    UUID: '9f2e6e5c-0168-4c01-8973-daa1fffadda9'
  },
  {
    id: '18',
    createdAt: '2020-11-17T15:22:40.819Z',
    name: 'Newell Welch',
    profilePic: `https://i.pravatar.cc/150?u=27`,
    email: 'Erwin.Bechtelar50@gmail.com',
    status: false,
    selected: true,
    UUID: '077f67a8-38ba-4aa3-b6db-51c07a57b77a'
  },
  {
    id: '19',
    createdAt: '2020-11-17T17:23:37.660Z',
    name: 'Bert Schmidt',
    profilePic: `https://i.pravatar.cc/150?u=28`,
    email: 'Savanna.Howe@hotmail.com',
    status: false,
    selected: true,
    UUID: 'be21437b-62b4-470e-bc3c-6103f7609a93'
  },
  {
    id: '20',
    createdAt: '2020-11-17T06:05:41.146Z',
    name: 'Norene Dibbert',
    profilePic: `https://i.pravatar.cc/150?u=29`,
    email: 'Cameron.Larkin@gmail.com',
    status: false,
    selected: false,
    UUID: '0d3c3293-f445-4efd-9111-9d6479446001'
  },
  {
    id: '21',
    createdAt: '2020-11-17T10:10:16.010Z',
    name: 'Augustus Torp',
    profilePic: `https://i.pravatar.cc/150?u=30`,
    email: 'Horacio_Bayer14@hotmail.com',
    status: false,
    selected: false,
    UUID: 'd27f2a16-4e23-460a-b502-b0f8c8e4992f'
  }
]
export default { data, columns }
