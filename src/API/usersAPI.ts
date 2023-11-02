import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_API_URL} from "../utils/const";
import {IUser} from "../types";

export const usersAPI = createApi({
    reducerPath: "usersAPI",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL,
    }),
    tagTypes: ["Users"],
    endpoints: build => ({
        getUsers: build.query<IUser[], string | null>({
            query: (params) => {
                const queryParams = new URLSearchParams()

                if (params) {
                    queryParams.set("term", params)
                }

                return `/?${queryParams.toString()}`
            },
            providesTags: result => ["Users"]
        })
    })
})