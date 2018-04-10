export interface UniverInfo {
    course: string;
    group: string;
}

export interface UserInfo {
    name: string;
    surName: string;
    bsuir?: UniverInfo;
    phoneNumber: string;
    expectations: string;
    finishedRegistration: boolean;           //TODO
    acceptStatus: boolean;
}

export interface User {
    id: string;
    telegramID: string;
    discordID?: string;
    info: UserInfo;
}

