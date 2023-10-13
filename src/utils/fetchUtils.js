export const checkStatus = (response) => {
    if (response.ok) {
        return response;
    }
    throw new Error('404 or 500 Request. Sry')
}

export const json = (response) => response.json()