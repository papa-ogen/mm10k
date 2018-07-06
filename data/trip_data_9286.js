exports.givenTripData = {
  StatusCode: 5323,
  Message: 'Could not retrive information for metros.',
  ExecutionTime: 37,
  ResponseData: {
    LatestUpdate: '2018-07-06T09:29:39',
    DataAge: 2,
    Metros: [
      {
        GroupOfLine: 'tunnelbanans röda linje',
        DisplayTime: '1 min',
        TransportMode: 'METRO',
        LineNumber: '13',
        Destination: 'Ropsten',
        JourneyDirection: 1,
        StopAreaName: 'Vårberg',
        StopAreaNumber: 2721,
        StopPointNumber: 2721,
        StopPointDesignation: '1',
        TimeTabledDateTime: '2018-07-06T09:30:30',
        ExpectedDateTime: '2018-07-06T09:31:18',
        JourneyNumber: 20597,
        Deviations: null,
      },
      {
        GroupOfLine: 'tunnelbanans röda linje',
        DisplayTime: '3 min',
        TransportMode: 'METRO',
        LineNumber: '13',
        Destination: 'Norsborg',
        JourneyDirection: 2,
        StopAreaName: 'Vårberg',
        StopAreaNumber: 2721,
        StopPointNumber: 2722,
        StopPointDesignation: '2',
        TimeTabledDateTime: '2018-07-06T09:32:00',
        ExpectedDateTime: '2018-07-06T09:33:05',
        JourneyNumber: 20741,
        Deviations: null,
      },
      {
        GroupOfLine: 'tunnelbanans röda linje',
        DisplayTime: '10 min',
        TransportMode: 'METRO',
        LineNumber: '13',
        Destination: 'Ropsten',
        JourneyDirection: 1,
        StopAreaName: 'Vårberg',
        StopAreaNumber: 2721,
        StopPointNumber: 2721,
        StopPointDesignation: '1',
        TimeTabledDateTime: '2018-07-06T09:40:30',
        ExpectedDateTime: '2018-07-06T09:40:30',
        JourneyNumber: 20598,
        Deviations: null,
      },
      {
        GroupOfLine: 'tunnelbanans röda linje',
        DisplayTime: '12 min',
        TransportMode: 'METRO',
        LineNumber: '13',
        Destination: 'Norsborg',
        JourneyDirection: 2,
        StopAreaName: 'Vårberg',
        StopAreaNumber: 2721,
        StopPointNumber: 2722,
        StopPointDesignation: '2',
        TimeTabledDateTime: '2018-07-06T09:40:00',
        ExpectedDateTime: '2018-07-06T09:42:36',
        JourneyNumber: 20742,
        Deviations: null,
      },
      {
        GroupOfLine: 'tunnelbanans röda linje',
        DisplayTime: '09:50',
        TransportMode: 'METRO',
        LineNumber: '13',
        Destination: 'Ropsten',
        JourneyDirection: 1,
        StopAreaName: 'Vårberg',
        StopAreaNumber: 2721,
        StopPointNumber: 2721,
        StopPointDesignation: '1',
        TimeTabledDateTime: '2018-07-06T09:50:30',
        ExpectedDateTime: '2018-07-06T09:50:30',
        JourneyNumber: 20599,
        Deviations: null,
      },
      {
        GroupOfLine: 'tunnelbanans röda linje',
        DisplayTime: '23 min',
        TransportMode: 'METRO',
        LineNumber: '13',
        Destination: 'Norsborg',
        JourneyDirection: 2,
        StopAreaName: 'Vårberg',
        StopAreaNumber: 2721,
        StopPointNumber: 2722,
        StopPointDesignation: '2',
        TimeTabledDateTime: '2018-07-06T09:50:00',
        ExpectedDateTime: '2018-07-06T09:53:02',
        JourneyNumber: 20743,
        Deviations: null,
      },
    ],
    Buses: [
      {
        GroupOfLine: null,
        TransportMode: 'BUS',
        LineNumber: '740',
        Destination: 'Huddinge station',
        JourneyDirection: 1,
        StopAreaName: 'Vårberg',
        StopAreaNumber: 70714,
        StopPointNumber: 70715,
        StopPointDesignation: null,
        TimeTabledDateTime: '2018-07-06T09:31:39',
        ExpectedDateTime: '2018-07-06T09:31:39',
        DisplayTime: '1 min',
        JourneyNumber: 69895,
        Deviations: null,
      },
      {
        GroupOfLine: null,
        TransportMode: 'BUS',
        LineNumber: '135',
        Destination: 'Hägersten (Klubbacken)',
        JourneyDirection: 2,
        StopAreaName: 'Vårbergs centrum',
        StopAreaNumber: 13474,
        StopPointNumber: 13474,
        StopPointDesignation: null,
        TimeTabledDateTime: '2018-07-06T09:42:00',
        ExpectedDateTime: '2018-07-06T09:42:00',
        DisplayTime: '12 min',
        JourneyNumber: 51015,
        Deviations: null,
      },
      {
        GroupOfLine: null,
        TransportMode: 'BUS',
        LineNumber: '135',
        Destination: 'Hägersten (Klubbacken)',
        JourneyDirection: 2,
        StopAreaName: 'Vårbergs centrum',
        StopAreaNumber: 13474,
        StopPointNumber: 13474,
        StopPointDesignation: null,
        TimeTabledDateTime: '2018-07-06T09:46:00',
        ExpectedDateTime: '2018-07-06T09:46:00',
        DisplayTime: '16 min',
        JourneyNumber: 51015,
        Deviations: null,
      },
      {
        GroupOfLine: null,
        TransportMode: 'BUS',
        LineNumber: '740',
        Destination: 'Kungens kurva',
        JourneyDirection: 2,
        StopAreaName: 'Vårberg',
        StopAreaNumber: 70714,
        StopPointNumber: 70714,
        StopPointDesignation: null,
        TimeTabledDateTime: '2018-07-06T09:51:24',
        ExpectedDateTime: '2018-07-06T09:51:24',
        DisplayTime: '21 min',
        JourneyNumber: 69930,
        Deviations: null,
      },
    ],
    Trains: [],
    Trams: [],
    Ships: [],
    StopPointDeviations: [],
  },
}

/** ******************
 *
 *
 * EXPECTED FILTERED TRIP DATA
 *
 ****************** */

exports.expectedFilteredTrip = [
  {
    GroupOfLine: 'tunnelbanans röda linje',
    DisplayTime: '1 min',
    TransportMode: 'METRO',
    LineNumber: '13',
    Destination: 'Ropsten',
    StopAreaName: 'Vårberg',
    TimeTabledDateTime: '2018-07-06T09:30:30',
    ExpectedDateTime: '2018-07-06T09:31:18',
    Deviations: null,
  },
  {
    GroupOfLine: 'tunnelbanans röda linje',
    DisplayTime: '3 min',
    TransportMode: 'METRO',
    LineNumber: '13',
    Destination: 'Norsborg',
    StopAreaName: 'Vårberg',
    TimeTabledDateTime: '2018-07-06T09:32:00',
    ExpectedDateTime: '2018-07-06T09:33:05',
    Deviations: null,
  },
  {
    GroupOfLine: 'tunnelbanans röda linje',
    DisplayTime: '10 min',
    TransportMode: 'METRO',
    LineNumber: '13',
    Destination: 'Ropsten',
    StopAreaName: 'Vårberg',
    TimeTabledDateTime: '2018-07-06T09:40:30',
    ExpectedDateTime: '2018-07-06T09:40:30',
    Deviations: null,
  },
  {
    GroupOfLine: 'tunnelbanans röda linje',
    DisplayTime: '12 min',
    TransportMode: 'METRO',
    LineNumber: '13',
    Destination: 'Norsborg',
    StopAreaName: 'Vårberg',
    TimeTabledDateTime: '2018-07-06T09:40:00',
    ExpectedDateTime: '2018-07-06T09:42:36',
    Deviations: null,
  },
  {
    GroupOfLine: 'tunnelbanans röda linje',
    DisplayTime: '09:50',
    TransportMode: 'METRO',
    LineNumber: '13',
    Destination: 'Ropsten',
    StopAreaName: 'Vårberg',
    TimeTabledDateTime: '2018-07-06T09:50:30',
    ExpectedDateTime: '2018-07-06T09:50:30',
    Deviations: null,
  },
  {
    GroupOfLine: 'tunnelbanans röda linje',
    DisplayTime: '23 min',
    TransportMode: 'METRO',
    LineNumber: '13',
    Destination: 'Norsborg',
    StopAreaName: 'Vårberg',
    TimeTabledDateTime: '2018-07-06T09:50:00',
    ExpectedDateTime: '2018-07-06T09:53:02',
    Deviations: null,
  },
]

/** ******************
 *
 *
 * EXPECTED TRIP DATA
 *
 ****************** */

exports.expectedTripData = [
  {
    GroupOfLine: 'tunnelbanans röda linje',
    DisplayTime: '1 min',
    TransportMode: 'METRO',
    LineNumber: '13',
    Destination: 'Ropsten',
    StopAreaName: 'Vårberg',
    TimeTabledDateTime: '2018-07-06T09:30:30',
    ExpectedDateTime: '2018-07-06T09:31:18',
    Deviations: null,
  },
  {
    GroupOfLine: 'tunnelbanans röda linje',
    DisplayTime: '3 min',
    TransportMode: 'METRO',
    LineNumber: '13',
    Destination: 'Norsborg',
    StopAreaName: 'Vårberg',
    TimeTabledDateTime: '2018-07-06T09:32:00',
    ExpectedDateTime: '2018-07-06T09:33:05',
    Deviations: null,
  },
  {
    GroupOfLine: 'tunnelbanans röda linje',
    DisplayTime: '10 min',
    TransportMode: 'METRO',
    LineNumber: '13',
    Destination: 'Ropsten',
    StopAreaName: 'Vårberg',
    TimeTabledDateTime: '2018-07-06T09:40:30',
    ExpectedDateTime: '2018-07-06T09:40:30',
    Deviations: null,
  },
  {
    GroupOfLine: 'tunnelbanans röda linje',
    DisplayTime: '12 min',
    TransportMode: 'METRO',
    LineNumber: '13',
    Destination: 'Norsborg',
    StopAreaName: 'Vårberg',
    TimeTabledDateTime: '2018-07-06T09:40:00',
    ExpectedDateTime: '2018-07-06T09:42:36',
    Deviations: null,
  },
  {
    GroupOfLine: 'tunnelbanans röda linje',
    DisplayTime: '09:50',
    TransportMode: 'METRO',
    LineNumber: '13',
    Destination: 'Ropsten',
    StopAreaName: 'Vårberg',
    TimeTabledDateTime: '2018-07-06T09:50:30',
    ExpectedDateTime: '2018-07-06T09:50:30',
    Deviations: null,
  },
  {
    GroupOfLine: 'tunnelbanans röda linje',
    DisplayTime: '23 min',
    TransportMode: 'METRO',
    LineNumber: '13',
    Destination: 'Norsborg',
    StopAreaName: 'Vårberg',
    TimeTabledDateTime: '2018-07-06T09:50:00',
    ExpectedDateTime: '2018-07-06T09:53:02',
    Deviations: null,
  },
  {
    GroupOfLine: null,
    TransportMode: 'BUS',
    LineNumber: '740',
    Destination: 'Huddinge station',
    StopAreaName: 'Vårberg',
    TimeTabledDateTime: '2018-07-06T09:31:39',
    ExpectedDateTime: '2018-07-06T09:31:39',
    DisplayTime: '1 min',
    Deviations: null,
  },
  {
    GroupOfLine: null,
    TransportMode: 'BUS',
    LineNumber: '135',
    Destination: 'Hägersten (Klubbacken)',
    StopAreaName: 'Vårbergs centrum',
    TimeTabledDateTime: '2018-07-06T09:42:00',
    ExpectedDateTime: '2018-07-06T09:42:00',
    DisplayTime: '12 min',
    Deviations: null,
  },
  {
    GroupOfLine: null,
    TransportMode: 'BUS',
    LineNumber: '135',
    Destination: 'Hägersten (Klubbacken)',
    StopAreaName: 'Vårbergs centrum',
    TimeTabledDateTime: '2018-07-06T09:46:00',
    ExpectedDateTime: '2018-07-06T09:46:00',
    DisplayTime: '16 min',
    Deviations: null,
  },
  {
    GroupOfLine: null,
    TransportMode: 'BUS',
    LineNumber: '740',
    Destination: 'Kungens kurva',
    StopAreaName: 'Vårberg',
    TimeTabledDateTime: '2018-07-06T09:51:24',
    ExpectedDateTime: '2018-07-06T09:51:24',
    DisplayTime: '21 min',
    Deviations: null,
  },
]
