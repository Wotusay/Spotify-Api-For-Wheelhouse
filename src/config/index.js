const config = {
    API_URL: 'https://api.spotify.com/v1',
    SPOTIFY_AUTHORIZE_URL: 'https://accounts.spotify.com/authorize',
    SPOTIFY_AUTH_SCOPES: 'user-read-recently-played user-top-read playlist-modify-public',
    SPOTIFY_CLIENT_ID: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    CALLBACK_URL: `${window.location.origin}/redirect`,
    DEFAULT_COUNTRY_CODE: 'FI',
}

export default config;