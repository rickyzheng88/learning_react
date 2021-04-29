function order(items) {
    const total = items.reduce((price, item) => {
        return price + item.precio;
    }, 0);

    return {
        orden: [...items],
        total,
    }
};

function timesTwo(a) {
    return a * 2;
}

export { timesTwo, order };