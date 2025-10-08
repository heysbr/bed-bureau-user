import { createAsyncThunk } from "@reduxjs/toolkit";
import DataService, { ApiResponse } from "../service";
import { constant } from "../constant";

const { path } = constant;

interface LoginPayload {
  email: string;
  password: string;
}

interface Profile {
  id: string;
  name: string;
  email: string;
}

// ✅ Admin Login
export const adminLogin = createAsyncThunk<
  ApiResponse<{ token: string }>,
  LoginPayload,
  { rejectValue: string }
>("admin/adminLogin", async (arg, { rejectWithValue }) => {
  try {
    return await DataService.post<{ token: string }>(
      arg,
      path + "admin/auth/v1/login"
    );
  } catch (error: unknown) {
    return rejectWithValue((error as Error).message || "Login failed");
  }
});

// ✅ Admin Logout
export const adminLogout = createAsyncThunk<
  ApiResponse<null>,
  void,
  { rejectValue: string }
>("admin/adminLogout", async (_, { rejectWithValue }) => {
  try {
    return await DataService.get<null>({}, path + "admin/account/v1/logout");
  } catch (error: unknown) {
    return rejectWithValue((error as Error).message || "Logout failed");
  }
});

// ✅ Forgot Password
export const forgotPassword = createAsyncThunk<
  ApiResponse<null>,
  { email: string },
  { rejectValue: string }
>("admin/forgotPassword", async (arg, { rejectWithValue }) => {
  try {
    return await DataService.post<null>(
      arg,
      path + "admin/auth/v1/forgot-password"
    );
  } catch (error: unknown) {
    return rejectWithValue((error as Error).message || "Forgot password failed");
  }
});

// ✅ Change Password
export const changePassword = createAsyncThunk<
  ApiResponse<null>,
  { oldPassword: string; newPassword: string },
  { rejectValue: string }
>("admin/changePassword", async (arg, { rejectWithValue }) => {
  try {
    return await DataService.post<null>(
      arg,
      path + "admin/account/v1/change-password"
    );
  } catch (error: unknown) {
    return rejectWithValue((error as Error).message || "Change password failed");
  }
});

// ✅ Reset Password
export const resetPassword = createAsyncThunk<
  ApiResponse<null>,
  { token: string; newPassword: string },
  { rejectValue: string }
>("admin/resetPassword", async (arg, { rejectWithValue }) => {
  try {
    return await DataService.post<null>(
      arg,
      path + "admin/auth/v1/reset-password"
    );
  } catch (error: unknown) {
    return rejectWithValue((error as Error).message || "Reset password failed");
  }
});

// ✅ Update Profile
export const updateProfile = createAsyncThunk<
  ApiResponse<Profile>,
  Partial<Profile>,
  { rejectValue: string }
>("admin/updateProfile", async (arg, { rejectWithValue }) => {
  try {
    return await DataService.post<Profile>(
      arg,
      path + "admin/account/v1/profile"
    );
  } catch (error: unknown) {
    return rejectWithValue((error as Error).message || "Update profile failed");
  }
});

// ✅ Get Profile
export const getProfile = createAsyncThunk<
  ApiResponse<Profile>,
  void,
  { rejectValue: string }
>("admin/getProfile", async (_, { rejectWithValue }) => {
  try {
    return await DataService.get<Profile>({}, path + "admin/account/v1/profile");
  } catch (error: unknown) {
    return rejectWithValue((error as Error).message || "Get profile failed");
  }
});
