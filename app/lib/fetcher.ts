export const fetchJSON = async <T>(
    url: string,
    options?: RequestInit
): Promise<T> => {
    const res = await fetch(url, options)
    console.log(url)
    if (!res.ok) {
        console.log(res)
        throw new Error(`Fetch failed: ${res.status}`)
    }

    return res.json() as Promise<T>
}
