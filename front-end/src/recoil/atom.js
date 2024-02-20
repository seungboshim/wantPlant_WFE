import { atom } from "recoil";

export const StudyGardenCountAtom = atom({
    key: 'StudyGardenCountAtom',
    default: 0,
})

export const ExerciseGardenCountAtom = atom({
    key: 'ExerciseGardenCountAtom',
    default: 0,
})

export const HobbyGardenCountAtom = atom({
    key: 'HobbyGardenCountAtom',
    default: 0,
})

export const InitGardenAtom = atom({
    key: 'InitGardenAtom',
    default: 1,
})

export const IsLoggedInAtom = atom({
    key: 'IsLoggedInAtom',
    default: false,
})

export const NicknameAtom = atom({
    key: 'NicknameAtom',
    default: "",
})