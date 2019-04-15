export let scheduleData: Object[] = [
    {
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        Location: 'Space Centre USA',
        StartTime: new Date(2019, 0, 6, 9, 30),
        EndTime: new Date(2019, 0, 6, 11, 0),
        CategoryColor: '#1aaa55',
        Type:'Requested'
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        Location: 'Newyork City',
        StartTime: new Date(2019, 0, 7, 12, 0),
        EndTime: new Date(2019, 0, 7, 14, 0),
        CategoryColor: '#357cd2',
        Type:''
    },
];

export let timelineData: Object[] = [
    {
        patientType: 'Outpatients',
        patientStatus: [
            {StatusType: 'Scheduled Or Confirmed', statusCount:'5', background:'rgb(255, 255, 0)'},
            {StatusType: 'arrived', statusCount:'9', background:'rgb(255, 64, 129)'},
            {StatusType: 'inExam', statusCount:'2', background:'rgb(130, 177, 255)'},
            {StatusType: 'Waiting to Pay', statusCount:'0', background:'rgb(130, 177, 255)'},
            {StatusType: 'Finished', statusCount:'4', background:'rgb(189, 189, 189)'}
    ]
    }, {
        patientType: 'Clinic Whiteboard',
        patientStatus: [ 
            {StatusType: 'Scheduled', statusCount:'2', background:'blue'},
            {StatusType: 'Arrived', statusCount:'4', background:'rgb(255, 64, 129)'},
            {StatusType: 'Cancelled', statusCount:'0', background:'rgb(189, 189, 189)'},
            {StatusType: 'InProgress', statusCount:'1', background:'red'},
            {StatusType: 'CheckedIn', statusCount:'7', background:'red'},
    ]
    
    }, {
        patientType: 'Repeat Prescriptions',
        patientStatus: [ 
            {StatusType: 'New request', statusCount:'2', background:'rgb(167, 255, 235)'},
            {StatusType: 'Need approvals', statusCount:'8', background:'rgb(29, 233, 182)'},
            {StatusType: 'OK To Dispense', statusCount:'5', background:'rgb(0, 191, 165)'},
            {StatusType: 'Ready To Collect', statusCount:'1', background:'rgb(38, 166, 154)'},
            {StatusType: 'Complete', statusCount:'3', background:'rgb(0, 77, 64)'},
        ]
    
    }
];