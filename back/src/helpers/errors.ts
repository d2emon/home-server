export const onError = (error: Error) => {
    // // tslint:disable-next-line
    // console.error(error);
    // res.json({ error });
    throw error;
}
