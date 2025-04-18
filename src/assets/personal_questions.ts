export default [
    {
        name: "email",
        type: "input",
        mandatory: true,
        answer: ""
    },
    {
        name: "name",
        type: "input",
        mandatory: true,
        answer: ""
    },
    {
        name: "last_name",
        type: "input",
        mandatory: true,
        answer: ""
    },
    {
        name: "street",
        type: "input",
        mandatory: true,
        answer: ""
    },
    {
        name: "postal",
        type: "input",
        mandatory: true,
        answer: ""
    },
    {
        name: "country",
        type: "input",
        mandatory: true,
        answer: ""
    },
    {
        name: "city",
        type: "input",
        mandatory: true,
        answer: ""
    },
    {
        name: "phone",
        type: "input",
        mandatory: true,
        answer: ""
    },
    {
        name: "gender",
        type: "option",
        mandatory: false,
        options: [
            {
                name: "male",
                answer: ""
            },
            {
                name: "female",
                answer: ""
            },
            {
                name: "not_say",
                answer: ""
            },
        ]
    },
    {
        name: "certificationLevel",
        type: "option",
        mandatory: false,
        options: [
            {
                name: "certificationOptions.scubaDiver",
                answer: ""
            },
            {
                name: "certificationOptions.openWaterDiver",
                answer: ""
            },
            {
                name: "certificationOptions.advancedOpenWaterDiver",
                answer: ""
            },
            {
                name: "certificationOptions.rescueDiver",
                answer: ""
            },
            {
                name: "certificationOptions.masterDiver",
                answer: ""
            },
            {
                name: "certificationOptions.diverMasterInstructor",
                answer: ""
            },
            {
                name: "certificationOptions.notCertified",
                answer: ""
            },
        ]
    },
    {
        name: "numberOfDives",
        type: "input",
        mandatory: true,
        answer: ""
    },
    {
        name: "dateOfLastDive",
        type: "input",
        mandatory: true,
        answer: ""
    },
    {
        name: "needRefresher",
        type: "yes-no",
        mandatory: true,
        answer: undefined
    },
    {
        name: "haveInsurance",
        type: "yes-no",
        mandatory: true,
        answer: undefined,
        subquestions: [
            {
                name: "insuranceNumber",
                answer: ""
            },
            {
                name: "insuranceCompany",
                answer: ""
            }
        ]
    },
    {
        name: "needEquipment",
        type: "yes-no",
        mandatory: true,
        answer: undefined,
        subquestions: [
            {
                name: "bootsSize",
                answer: ""
            },
            {
                name: "bcdSize",
                answer: ""
            },
            {
                name: "wetsuitSize",
                answer: ""
            }
        ]
    },
    {
        name: "wantPhotosVideos",
        type: "yes-no",
        mandatory: false,
        answer: undefined
    },
    {
        name: "preferredDiveDate",
        type: "input",
        mandatory: false,
        answer: ""
    },
    {
        name: "stayDuration",
        type: "input",
        mandatory: false,
        answer: ""
    },
    {
        name: "departureDate",
        type: "input",
        mandatory: false,
        answer: ""
    },
    {
        name: "promotionsEmail",
        type: "yes-no",
        mandatory: false,
        answer: undefined
    },
    {
        name: "consentSocialMedia",
        type: "yes-no",
        mandatory: true,
        answer: undefined
    },
    {
        name: "howDidYouKnow",
        type: "option",
        mandatory: false,
        options: [
            {
                name: "referralOptions.website",
                answer: ""
            },
            {
                name: "referralOptions.socialMedia",
                answer: ""
            },
            {
                name: "referralOptions.bookingAgent",
                answer: ""
            },
            {
                name: "referralOptions.friend",
                answer: ""
            },
            {
                name: "referralOptions.other",
                answer: ""
            }
        ]
    }
]