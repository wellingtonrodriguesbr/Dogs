export const api = "https://dogsapi.origamid.dev/json";

export function tokenPost(body) {
  return {
    url: api + "/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        headers: {
          "Content-Type": "application/json",
        },
      },
      body: JSON.stringify(body),
    },
  };
}

export function userGet(token) {
  return {
    url: api + "/api/get",
    options: {
      method: "GET",
      headers: {
        headers: {
          Authorization: "Bearer " + token,
        },
      },
    },
  };
}
