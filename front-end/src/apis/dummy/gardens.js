/** 정원 정보는 /gardens/{gardenId} 로도 조회가 가능했으면 좋겠는데 */
export const gardensFromId = [
    {
        "name": "정원이름",
        "description": "정원설명설명설명섦ㅇ셔섬ㄹ설명",
        "gardenCategory": "STUDY", // 카테고리는 대문자
    },
]


/** /gardens?page={};pageSize={} 로 정원 하단 컴포넌트에 정원들 넣기는 좋음 */
export const gardensFromQuery = [
    {
        "gardenId": 1,
        "name": "정원이름",
        "description": "정원설명설명설명섦ㅇ셔섬ㄹ설명",
        "gardenCategory": "STUDY", // 카테고리는 대문자
    },
]

/** 이건 카테고리별 정원 (페이지네이션 용인데 안써도 무방) */
/** /gardens?category=STUDY;page={};pageSize={} */
export const gardensFromCategory = [
    {
        "gardenList": [
            {
              "gardenId": 1,
              "name": "garden1",
              "description": "garden test",
              "gardenCategory": "STUDY"
            },
            {
              "gardenId": 4,
              "name": "garden4",
              "description": "garden test",
              "gardenCategory": "STUDY"
            }
        ],
        "listSize": 2,
        "totalPage": 1,
        "totalElements": 2,
        "isFirst": true,
        "isLast": true
    }
]
