export const validateText = (text) => typeof text === 'string' && text.length > 0;
export const validateTime = (start, end) => start < end;
