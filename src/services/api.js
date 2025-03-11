const BASE_URL = 'https://forum-api.dicoding.dev/v1';

async function _fetchWithAuth(url, options = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}

// === User Service ===
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

export async function getOwnProfile() {
  const response = await _fetchWithAuth(`${BASE_URL}/users/me`);

  const responseJSON = await response.json();

  const { status, message, data: { user } } = responseJSON;

  if (status !== 'success') {
    throw new Error(message);
  }

  return user;
}

export async function getAllUsers() {
  const response = await fetch(`${BASE_URL}/users`);

  const responseJSON = await response.json();

  const { status, message, data: { users } } = responseJSON;

  if (status !== 'success') {
    throw new Error(message);
  }

  return users;
}

// === Threads Service ===
export async function getAllThreads() {
  const response = await fetch(`${BASE_URL}/threads`);

  const responseJSON = await response.json();

  const { status, message, data: { threads } } = responseJSON;

  if (status !== 'success') {
    throw new Error(message);
  }

  return threads;
}

export async function getThreadDetail(id) {
  const response = await fetch(`${BASE_URL}/threads/${id}`);

  const responseJSON = await response.json();

  const { status, message, data: { detailThread } } = responseJSON;

  if (status !== 'success') {
    throw new Error(message);
  }

  return detailThread;
}

export async function createThread({ title, body }) {
  const response = await _fetchWithAuth(`${BASE_URL}/threads`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, body })
  });

  const responseJSON = await response.json();

  const { status, message, data: { thread } } = responseJSON;

  if (status !== 'success') {
    throw new Error(message);
  }

  return thread;
}

export async function createThreadComment({ threadId, content }) {
  const response = await _fetchWithAuth(`${BASE_URL}/threads/${threadId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ content })
  });

  const responseJSON = await response.json();

  const { status, message, data: { comment } } = responseJSON;

  if (status !== 'success') {
    throw new Error(message);
  }

  return comment;
}