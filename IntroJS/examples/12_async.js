console.log('12');

//callbacks
// promises
// async/await

const loadDataWebCb = (cb) => {
    setTimeout(() => {
        const data = [1, 2, 3, 4];
        cb(data);
    }, 1000);
};

const loadDataDetailsCb = (cb) => {
    setTimeout(() => {
        const data = [1, 2, 3, 4];
        cb(data);
    }, 1000);
};

const loadDataUsersCb = (cb) => {
    setTimeout(() => {
        const data = [1, 2, 3, 4];
        cb(data);
    }, 1000);
};

const loadDataWeb = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = [1, 2, 3, 4];
            resolve(data);
        }, 1000);
    });
};

const loadDataDetails = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            setTimeout(() => {
                const data = [1, 2, 3, 4];
                resolve(data);
            }, 1000);
        });
    });
};

const loadDataUsers = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            setTimeout(() => {
                const data = [1, 2, 3, 4];
                resolve(data);
            }, 1000);
        });
    });
};
console.log('Hola');

let loading = true;

loadDataWebCb((datos) => {
    console.log(datos);
    loadDataDetailsCb(() => {
        loadDataUsersCb(() => {
            loading = false;
        });
    });
});

// promises
loadDataWeb()
    .then(() => loadDataDetails())
    .then(() => loadDataUsers())
    .then(() => {
        loading = false;
        console.log(loading);
    })
    .catch(() => {
        console.log('Error');
    })

// async/await
const main = async () => {
    try {
        await loadDataWeb();
        await loadDataDetails();
        await loadDataUsers();
        loading = false;
        console.log(loading);
    } catch (error) {
        console.log(error);
    }
};

main();
