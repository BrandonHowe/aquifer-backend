import {User} from "./interfaces";

const getHighestFromArr = (arr: Array<number>) => {
    if (arr.length === 0) {
        return 0;
    }
    return Math.max(...arr) + 1;
};

const checkUser = (checkedUser: User, users: Object) => Object.entries(users).some( l => l[1].id === checkedUser.id);

export {getHighestFromArr, checkUser}
