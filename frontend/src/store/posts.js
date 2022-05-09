import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import moment from "moment";

const slice = createSlice({
  name: "posts",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
    error: false,
  },
  reducers: {
    postsRequested: (posts, action) => {
      posts.loading = true;
    },
    postsReceived: (posts, action) => {
      posts.list = action.payload;
      posts.loading = false;
      posts.lastFetch = Date.now();
    },
    postsRequestFailed: (posts, action) => {
        posts.loading = false;
        posts.error = true;
    }
    },
});


export const { postsRequestFailed, postsReceived, postsRequested, getPostById } =
  slice.actions;
export default slice.reducer;

const url = "posts";
export const loadPosts = () => async (dispatch, getState) => {
  const { lastFetch } = getState().entities.posts;

  const diffInMinutes = moment().diff(moment(lastFetch), "minutes");
  if (diffInMinutes < 10) return;
  dispatch(
    apiCallBegan({
      url,
      onStart: postsRequested.type,
      onSuccess: postsReceived.type,
      onError: postsRequestFailed.type,
      method: "get",
    })
  );
};

