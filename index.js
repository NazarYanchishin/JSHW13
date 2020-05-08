function* createIdGenerator() {
        let i = 0;
        while (true) {
            i++;
            yield i;
        }
    }

    const idGenerator = createIdGenerator();
    console.log(idGenerator.next());
    console.log(idGenerator.next());
    console.log(idGenerator.next());

