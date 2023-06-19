const parseArgs = () => {
    console.log(process.argv.reduce((acc, cur, index, arr) => {
        if (cur.startsWith('--')) {
            return [...acc, `${cur.slice(2)} is ${arr[index + 1]}`];
        }
        return acc;
    }, []).join(', '));
};

parseArgs();