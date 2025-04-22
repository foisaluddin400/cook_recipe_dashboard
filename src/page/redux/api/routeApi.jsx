import { baseApi } from "./baseApi";

const route = baseApi.injectEndpoints({
  endpoints: (builder) => ({


    getSubscription: builder.query({
      query: () => {
        return {
          url: `/dashboard/get_all_subscriptions`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),


    getDashboardCount: builder.query({
        query: () => {
          return {
            url: `/dashboard/get_total_count`,
            method: "GET",
          };
        },
        providesTags: ["updateProfile"],
      }),

      getUserGrowth: builder.query({
        query: (year) => {
          return {
            url: `/dashboard/get_subscription_growth?year=${year}`,
            method: "GET",
          };
        },
        providesTags: ["updateProfile"],
      }),

    getTransection: builder.query({
        query: ({searchTerm,page, limit}) => {
          return {
            url: `/payment/get-transaction?searchTerm=${searchTerm}&page=${page}&limit=${limit}`,
            method: "GET",
          };
        },
        providesTags: ["updateProfile"],
      }),

      getContact: builder.query({
        query: () => {
          return {
            url: `/dashboard/get-message-support`,
            method: "GET",
          };
        },
        providesTags: ["updateProfile"],
      }),

    addSubscription: builder.mutation({
        query: (data) => {
          return {
            url: "/dashboard/create_subscriptions",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["updateProfile"],
      }),

      
    updateSubscription: builder.mutation({
        query: ({data,id}) => {
          return {
            url: `/dashboard/update_subscriptions/${id}`,
            method: "PATCH",
            body: data,
          };
        },
        invalidatesTags: ["updateProfile"],
      }),


    
    
  }),
});

export const {
  
  useGetSubscriptionQuery,
  useAddSubscriptionMutation,
  useUpdateSubscriptionMutation,
  useGetTransectionQuery,
  useGetContactQuery,
  useGetDashboardCountQuery,
  useGetUserGrowthQuery,
 

 
} = route;
