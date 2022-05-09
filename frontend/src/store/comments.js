import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "comments",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
    error: false,
  },
  reducers: {
    commentsRequested: (comments, action) => {
      comments.loading = true;
    },
    commentsReceived: (comments, action) => {
      comments.list = action.payload;
      comments.loading = false;
      comments.lastFetch = Date.now();
    },
    commentsFailed: (comments, action) => {
      comments.loading = false;
      comments.error = true;
    },
  },
});

export const { commentsFailed, commentsReceived, commentsRequested } =
  slice.actions;
export default slice.reducer;

const url = "comments";
export const loadComments = () => async (dispatch, getState) => {
  const { lastFetch } = getState().entities.comments;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url,
      onStart: commentsRequested.type,
      onSuccess: commentsReceived.type,
      onError: commentsFailed.type,
      method: "get",
    })
  );
};
