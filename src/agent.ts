import store from "#/engine/store";
import { StoreState } from "#/engine/types";

export const constructGenericRequestHeaders = () => ({
  "Content-Type": "application/json",
});

const getAuthToken = (a: any, b: any) => "";

export const constructRequestHeaders = (params = {}) => {
  const authToken = getAuthToken(store.getState() as StoreState, null);
  return {
    ...constructGenericRequestHeaders(),
    ...(authToken ? { Authorization: `Token ${authToken}` } : {}),
    ...params,
  };
};

const initialResponseHandler = (response: any) => {
  if (!response.ok) {
    throw new Error(`An error occured while sending a request with status ${response.status}`);
  }
  return response.json();
};

export const postRequest = (url: string, body = {}) =>
  fetch(url, {
    method: "POST",
    headers: constructRequestHeaders(),
    body: JSON.stringify(body),
  }).then(initialResponseHandler);

export const getRequest = (url: string) =>
  fetch(url, {
    headers: constructRequestHeaders(),
  }).then(initialResponseHandler);

export const putRequest = (url: string) =>
  fetch(url, {
    method: "PUT",
    headers: constructRequestHeaders(),
  }).then(initialResponseHandler);

export const deleteRequest = (url: string) =>
  fetch(url, {
    method: "DELETE",
    headers: constructRequestHeaders(),
  }).then(initialResponseHandler);
