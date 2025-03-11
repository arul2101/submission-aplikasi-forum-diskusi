const BASE_URL = 'https://forum-api.dicoding.dev/v1';

export async function register({ name, email, password }) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password })
  });

  const responseJSON = await response.json();
  const { status, message, data: { user } } = responseJSON;

  if (status !== 'success') {
    throw new Error(message);
  }

  return user;
}

export async function login({ email, password }) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  });

  const responseJSON = await response.json();
  const { status, message, data: { token } } = responseJSON;

  if (status !== 'success') {
    throw new Error(message);
  }

  return token;
}

export function putAccessToken(token) {
  localStorage.setItem('accessToken', token);
}

export function getAccessToken() {
  return localStorage.getItem('accessToken');
}

// export async function getOwnProfile() {
//   const response = await 
// }