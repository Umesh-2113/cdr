const baseUrl = 'https://cdr-rouge.vercel.app'; // Update with your actual base URL

const fetchData = async (url, method, token, body = null) => {
  try {
    const requestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: body ? JSON.stringify(body) : null,
    };

    const response = await fetch(`${baseUrl}/api/${url}`, requestOptions);
    const data = await response.json();

    if (!response.ok) {
      // If the response status is not in the 2xx range, throw an error with the error message.
      throw new Error(data.message || 'Something went wrong.');
    }

    return data;
  } catch (error) {
    // Handle any errors that might occur during the fetch.
    console.error('Fetch Error:', error.message);
    throw error;
  }
};

export const getData = async (url, token) => fetchData(url, 'GET', token);

export const postData = async (url, data, token) => fetchData(url, 'POST', token, data);

export const putData = async (url, data, token) => fetchData(url, 'PUT', token, data);

export const patchData = async (url, data, token) => fetchData(url, 'PATCH', token, data);

export const deleteData = async (url, token) => fetchData(url, 'DELETE', token);
