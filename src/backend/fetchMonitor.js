export default async function fetchMonitor(backend_url, options) {
    const response = await fetch(backend_url, options);
    //console.log("response.status === " + response.status);
    if (response.status === 503) {
        return response.json();
    } else if (response.status === 200) {
        return response.json();
    } else {
        throw new Error('Response not ok: ' + response.status);
    }
}
