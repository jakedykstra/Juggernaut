overview = [
    {
        week: 1,
        day: 'peak',
        description: 'Workout in 10 rep range',
        bench() { return benchCalc },
    }


]

benchCalc(userMax, set, weekType) => {
    let benchWeight = userMax * weekType[set];
    return benchWeight;
}