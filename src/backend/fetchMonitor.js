export default async function fetchMonitor(backend_url, options) {
    const response = await fetch(backend_url, options);
    if (!response.ok) {
        throw new Error('Response not ok: ' + response.status);
    }
    return response.json();
}
