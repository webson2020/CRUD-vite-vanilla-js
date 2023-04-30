import { User } from '../models/user'


/**
 * 
 * @param {Like<User>} localhostUser 
 * @returns {User}
 */
export const localhostUserToModel = (localhostUser) => {

    const {
        id,
        avatar,
        balance,
        first_name,
        gender,
        isActive,
        last_name
    } = localhostUser

    return new User({
        id,
        avatar,
        balance,
        firstName: first_name,
        gender,
        isActive,
        lastName: last_name
    })
}