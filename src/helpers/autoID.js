let startingId = 0;
export const autoID = ()=> {
    startingId = ++startingId;
    return startingId;
}