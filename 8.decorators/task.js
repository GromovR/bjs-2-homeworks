function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = md5(args);


        let objectInCache = cache.find((item) => item.hash === hash);
        if (objectInCache) {
          return "Из кеша: " + objectInCache.result;
        }


        const result = func(...args);
        cache.push({hash, result});

        if (cache.length > 5) {
            cache.shift();
        }
        return "Вычисляем: " + result;
    }

    return wrapper;
}


function debounceDecoratorNew(func, delay) {
    let timeoutId = null;

    function wrapper(...args) {
        clearTimeout(timeoutId);

        if (timeoutId === null) {
            func(...args);
            wrapper.count++;
        }
        timeoutId = setTimeout(() => {
            func(...args);
            wrapper.count++;
        }, delay);

        wrapper.allCount++;

    }
    wrapper.count = 0;
    wrapper.allCount = 0;
    clearTimeout(timeoutId);

    return wrapper;
}
