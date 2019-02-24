function postRequest(url, data) {
  return fetch(url, {
    credentials: 'same-origin', // 'include', default: 'omit'
    method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
    body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
  }).then(response => response.json())
}

export function postDataFire(data) {
  let res_data = null
  let res_error = null
  postRequest('https://eisbach-riders.prod.with-datafire.io/contact', data)
    .then(data => (res_data = data)) // Result from the `response.json()` call
    .catch(error => (res_error = error))
  return { res_data, res_error }
}
