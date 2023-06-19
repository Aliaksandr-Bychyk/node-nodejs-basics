const parseEnv = () => {
    console.log(
        Object.entries(process.env)
            .filter(value => value[0].startsWith('RSS_'))
            .map(value => `${value[0]}=${value[1]}`).join('; ')
    )
};

parseEnv();