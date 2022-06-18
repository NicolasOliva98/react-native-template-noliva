import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IResponseError } from "../api/api_interface";
import { RootState } from "../store";
import { server } from "../api";

interface IState {
  loading: boolean;
  data: [];
  error: IResponseError | null;
}

const initialState: IState = {
  loading: true,
  data: [],
  error: null,
};

export const getdata = createAsyncThunk(
  "example/getData",
  async (_, { rejectWithValue }) => {
    const response: any = await server.get("getdata");
    if (response.error) rejectWithValue(response.error);
    return response.data;
  }
);

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    clearSlice: () => ({ ...initialState }),
    setLoading: (state, action: { payload: { load: boolean } }) => {
      const { load } = action.payload ?? {};
      state.loading = load;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getdata.pending, (state) => ({
      ...state,
      loading: true,
      error: null,
    }));
    builder.addCase(getdata.rejected, (state, action) => {
      state = {
        ...state,
      };
      state.loading = false;
      state.error = action.payload as IResponseError;
    });
    builder.addCase(getdata.fulfilled, (state, action) => {
      const { data } = action.payload;
      state.data = data;
      state.loading = false;
    });
  },
});

export const { clearSlice, setLoading } = exampleSlice.actions;

export const exampleGetData = (state: RootState) => ({
  loading: state.example.loading,
  data: state.example.data,
});

export default exampleSlice;
