'use strict';

/**
 * @param {string} userId
 * @return {promise}
 */
export const requestUserData = userId => {
  const request = new Promise((rulfilled, rejected) => {
    if (userId === 'broken') {
      setTimeout(() => {
        rejected(new Error('User not found'));
      }, 500);
    }
    setTimeout(() => {
      rulfilled({
        name: 'John',
        age: 17,
        userId,
        email: `${userId}@example.com`,
      });
    }, 1000);
  });
  return request;
};
requestUserData('userid777').then(data => console.log(data));
requestUserData('broken').catch(error => console.log(error));
