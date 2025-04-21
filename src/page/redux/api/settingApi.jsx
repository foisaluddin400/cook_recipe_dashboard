import { baseApi } from "./baseApi";

const setting = baseApi.injectEndpoints({
  endpoints: (builder) => ({


    getFaq: builder.query({
      query: () => {
        return {
          url: `/dashboard/get-faqs`,
          method: "GET",
        };
      },
      providesTags: ["updateProfile"],
    }),

    addFaq: builder.mutation({
        query: (data) => {
          return {
            url: "/dashboard/add-faqs",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["updateProfile"],
      }),


      updateFaq: builder.mutation({
        query: ({data,id}) => {
          return {
            url: `/dashboard/update-faqs/${id}`,
            method: "PATCH",
            body: data,
          };
        },
        invalidatesTags: ["updateProfile"],
      }),


   
  }),
});

export const {
 useGetFaqQuery,
 useAddFaqMutation,
 useUpdateFaqMutation
} = setting;
