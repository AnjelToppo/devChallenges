export default async function fetchData(url, updateFn) {
    await fetch(url)
        .then((response) => response.json())
        .then((data) => {
            updateFn(data)
        })
        .catch((err) => {
            console.log(err)
        })
}