export default function sortCountry(arr, sortBy) {
    let sortedArr = [...arr];
    if (sortBy === "name") {
        return sortedArr.sort((a, b) =>
            a[sortBy].common.toUpperCase() < b[sortBy].common.toUpperCase() ? -1 : 0
        );
    }
    return sortedArr.sort((a, b) => b[sortBy] - a[sortBy]);
}