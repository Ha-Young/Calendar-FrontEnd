export const loggerMiddleware = store => next => action => {
    console.log("이전 상태", store.getState());
    next(action);
    console.log("다음 상태", store.getState());
};
