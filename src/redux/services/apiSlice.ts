import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const appApi = createApi({
  reducerPath: "appApi",
  tagTypes: ["users", "teachers", "students", "courses", "resources", "user"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${localStorage.getItem("authToken")}`
      );
      headers.set("Content-Type", "Application/json");
    },
  }),
  endpoints: (builder) => ({
    // all query and mutation end points will be here.
    getUser: builder.query({
      query: () => "/users",
      providesTags: ["user"],
    }),
    login: builder.mutation({
      query: (data: { email: string; password: string }) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    register: builder.mutation({
      query: (data: { email: string; password: string }) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (data: { deletedUserId: string }) => ({
        url: "/users",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    getAllUsers: builder.query({
      query: () => "/users/get-all-users",
      providesTags: ["users"],
    }),
    updateUserRole: builder.mutation({
      query: (data: {
        userEmail: string;
        userRole: "student" | "teacher";
      }) => ({
        url: "/users/update-user-role",
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    beAnAdmin: builder.mutation({
      query: (data: { key: string }) => ({
        url: "/users/be-an-admin",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useGetUserQuery,
  useLoginMutation,
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
  useBeAnAdminMutation,
} = appApi;
