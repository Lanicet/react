import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
    error: false,
  },
  reducers: {
    usersRequested: (users, action) => {
      users.loading = true;
    },
    usersReceived: (users, action) => {
      users.list = action.payload;
      users.loading = false;
      users.lastFetch = Date.now();
    },
    usersFailed: (users, action) => {
      users.loading = false;
      users.error = true;
    },
  },
});

export const { usersFailed, usersReceived, usersRequested } = slice.actions;
export default slice.reducer;

const url = "users";
export const loadUsers = () => async (dispatch, getState) => {
  const { lastFetch } = getState().entities.users;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url,
      onStart: usersRequested.type,
      onSuccess: usersReceived.type,
      onError: usersFailed.type,
      method: "get",
    })
  );
};
