exports.authFetch = async (url, options = {}) => {

    let response = await fetch(url, {...options, credentials: 'include'});

    if (response.status === 401) {
        const refreshResponse = await fetch('http://localhost:3000/api/auth/refresh', {
            method: 'POST',
            credentials: 'include'
        });

        if (refreshResponse.ok) {
            response = await fetch(url, {...options, credentials: 'include'});

        } else {
            throw new Error('Session expirée, veuillez vous reconnecter');
        }
    }

    return response;
}