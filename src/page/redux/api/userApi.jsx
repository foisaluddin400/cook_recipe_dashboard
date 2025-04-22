import { baseApi } from "./baseApi";


const useApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginAdmin: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
    }),
    
    getProfile: builder.query({
      query: () => {
        return {
          url: "/auth/admin-profile",
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),
    forgotPassword: builder.mutation({
      query: (email) => {
        return {
          url: "/auth/forgot-password",
          method: "POST",
          body: email,
        };
      },
    }),
    verifyOtp: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/verify-otp",
          method: "POST",
          body: data,
        };
      },
    }),

    resentVerifyOtp: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/forgot-resend",
          method: "POST",
          body: data,
        };
      },
    }),

    resetPassword: builder.mutation({
      query: ({data,email}) => {
        return {
          url: `/auth/reset-password?email=${email}`,
          method: "POST",
          body: data,
        };
      },
    }),
    updateProfile: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/edit-admin-profile",
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["updateProfile"],
    }),
    changePassword: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/change-password",
          method: "PATCH",
          body: data,
        };
      },
    }),
    getAdminAllUser: builder.query({
      query: ({searchTerm,page, limit}) => {
        return {
          url: `/dashboard/get_all_user?searchTerm=${searchTerm}&page=${page}&limit=${limit}`,
          method: "GET",
        };

      },
      providesTags: ["host"],
    }),

    blockUser: builder.mutation({
      query: (data) => ({
        url: `/auth/block`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["host"], 
    }),
  }),
});

export const {
  useLoginAdminMutation,
  useGetProfileQuery,
  useForgotPasswordMutation,
  useVerifyOtpMutation,
  useResetPasswordMutation,
  useUpdateProfileMutation,
  useChangePasswordMutation,
  useGetAdminAllUserQuery,
  useBlockUserMutation,
  useResentVerifyOtpMutation
} = useApi;
