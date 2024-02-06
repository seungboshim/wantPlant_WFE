//http://ec2-3-34-198-148.ap-northeast-2.compute.amazonaws.com:8080/api/gardens
// axios.get(`${process.env.REACT_APP_SERVER_URL}/gardens`)
export const garden_res = {
    isSuccess: true,
    code: "COMMON200",
    message: "성공입니다.",
    result: {
        totalElements: 4,
        gardens: [
            {
                gardenId: 1,
                name: "데이지",
                description: "데이지운동",
                gardenCategory: "HOBBY",
                potList: [],
            },
            {
                gardenId: 5,
                name: "헬스",
                description: "할래",
                gardenCategory: "EXERCISE",
                potList: [],
            },
            {
                gardenId: 6,
                name: "temp1",
                description: "temp1",
                gardenCategory: "STUDY",
                potList: [
                    {
                        potId: 1,
                        potName: "temp11",
                        potType: "ROSEMARY",
                        proceed: 0,
                        potTagColor: "PURPLE",
                        potImageUrl: "https://anak-s3.s3.ap-northeast-2.amazonaws.com/pot/rosemary-0",
                        startAt: "2024-02-04",
                        garden: {
                            id: 6,
                            name: "temp1",
                            description: "temp1",
                            category: "STUDY",
                        },
                    },
                ],
            },
            {
                gardenId: 7,
                name: "aaa",
                description: "aaa",
                gardenCategory: "STUDY",
                potList: [
                    {
                        potId: 2,
                        potName: "aaa_pot",
                        potType: "PEPPERMINT",
                        proceed: 0,
                        potTagColor: "PURPLE",
                        potImageUrl: "https://anak-s3.s3.ap-northeast-2.amazonaws.com/pot/peppermint-0",
                        startAt: "2024-02-04",
                        garden: {
                            id: 7,
                            name: "aaa",
                            description: "aaa",
                            category: "STUDY",
                        },
                    },
                    {
                        potId: 3,
                        potName: "aaa_pot2",
                        potType: "LAVENDER",
                        proceed: 0,
                        potTagColor: "PURPLE",
                        potImageUrl: "https://anak-s3.s3.ap-northeast-2.amazonaws.com/pot/lavender-0",
                        startAt: "2024-02-04",
                        garden: {
                            id: 7,
                            name: "aaa",
                            description: "aaa",
                            category: "STUDY",
                        },
                    },
                ],
            },
        ],
    },
};

//http://ec2-3-34-198-148.ap-northeast-2.compute.amazonaws.com:8080/api/goals/todos?potId=1
// axios.get(`${process.env.REACT_APP_SERVER_URL}/goals/todos?potId=1`)
// potId=1로 갖고온 goal
export const goal_res_1 = {
    isSuccess: true,
    code: "COMMON200",
    message: "성공입니다.",
    result: {
        goalList: [
            {
                goalId: 1,
                goalTitle: "temp111",
                todoList: [
                    {
                        todoId: 1,
                        todoTitle: "temp1111",
                        date: "2024-02-04",
                        time: "12:30",
                        isComplete: false,
                    },
                    {
                        todoId: 3,
                        todoTitle: "temp1112",
                        date: "2024-02-04",
                        time: "12:30",
                        isComplete: false,
                    },
                ],
            },
            {
                goalId: 2,
                goalTitle: "temp112",
                todoList: [
                    {
                        todoId: 2,
                        todoTitle: "temp1122",
                        date: "2024-02-04",
                        time: "12:30",
                        isComplete: false,
                    },
                ],
            },
            {
                goalId: 3,
                goalTitle: "temp113",
                todoList: [],
            },
        ],
    },
};

export const goal_res_2 = {
    isSuccess: true,
    code: "COMMON200",
    message: "성공입니다.",
    result: {
        goalList: [
            {
                goalId: 4,
                goalTitle: "aaa_goal",
                todoList: [
                    {
                        todoId: 4,
                        todoTitle: "aaa_todo",
                        date: "2024-02-04",
                        time: "12:30",
                        isComplete: false,
                    },
                    {
                        todoId: 5,
                        todoTitle: "aaa_todo2",
                        date: "2024-02-04",
                        time: "12:30",
                        isComplete: false,
                    },
                    {
                        todoId: 6,
                        todoTitle: "aaa_todo3",
                        date: "2024-02-04",
                        time: "12:30",
                        isComplete: false,
                    },
                ],
            },
            {
                goalId: 5,
                goalTitle: "aaa_goal2",
                todoList: [
                    {
                        todoId: 7,
                        todoTitle: "aaa_todo55",
                        date: "2024-02-04",
                        time: "12:30",
                        isComplete: false,
                    },
                    {
                        todoId: 8,
                        todoTitle: "aaa_todo66",
                        date: "2024-02-04",
                        time: "12:30",
                        isComplete: false,
                    },
                ],
            },
        ],
    },
};
