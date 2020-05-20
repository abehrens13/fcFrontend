export default async function fetchMonitor(backend_url, path, options) {
    const url = backend_url + path;
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error('Response not ok: ' + response.status);
    }
    return response.json();
}
