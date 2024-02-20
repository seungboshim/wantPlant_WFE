/** 화분 색상이 스웨거에 누락되어있음 */
/** /pots?gardenId=1;page=1 로 해당 정원의 1페이지의 화분들 받아옴. */
export const potsFromGarden = {
    "pots": [
        {
            "potId": 1,
            "potName": "potName1",
            "proceed": 0,
            "potImageUrl": "https://via.placeholder.com/316x447/",
            "startAt": "2024-01-25",
            "potTagColor": "RED"
        },
        {
            "potId": 2,
            "potName": "potName2",
            "proceed": 0,
            "potImageUrl": "https://via.placeholder.com/316x447/",
            "startAt": "2024-01-25",
            "potTagColor": "BLUE"
        },
        {
            "potId": 3,
            "potName": "potName3",
            "proceed": 0,
            "potImageUrl": "https://via.placeholder.com/316x447/",
            "startAt": "2024-01-25",
            "potTagColor": "ORANGE"
        },
        {
            "potId": 4,
            "potName": "potName4",
            "proceed": 0,
            "potImageUrl": "https://via.placeholder.com/316x447/",
            "startAt": "2024-01-25",
            "potTagColor": "PINK"
        }
    ],
    "listSize": 4,
    "totalPage": 1,
    "totalElements": 4,
    "isFirst": true,
    "isLast": true
}

/** potId에 해당하는 화분 하나의 정보만 받아옴 */
/** /pots/{potId} 로 받아옴 */
export const potFromId = [
    {
        "gardenName": "garden1",
        "potId": 1,
        "potName": "potName",
        "proceed": 0,
        "potImageUrl": "https://via.placeholder.com/316x447/",
        "potTagColor": "RED"
    }
]

/** /pots/images?gardenId={} 로 해당 정원의 모든 화분 이미지 제공 */
export const potImages = [
    {
      "potId": 1,
      "potImageUrl": "https://via.placeholder.com/316x447/"
    },
    {
      "potId": 2,
      "potImageUrl": "https://via.placeholder.com/316x447/"
    },
    {
      "potId": 3,
      "potImageUrl": "https://via.placeholder.com/316x447/"
    },
    {
      "potId": 4,
      "potImageUrl": "https://via.placeholder.com/316x447/"
    }
  ]

/** /pots/completed?{gardenId} 호출 시 해당 gardenId 정원의 완료된 화분 모두 리턴 */
export const completedPots = [
    {
      "potName": "string",
      "potImageUrl": "string",
      "startAt": "2024-01-28",
      "completeAt": "2024-01-28"
    }
]