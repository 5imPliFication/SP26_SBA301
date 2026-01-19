import axiosClient from "@/shared/apis/axiosClient";

const courseService = {
    findAll: async () => {
        try {
            const response = await axiosClient.get("/courses");
            return response.data;
        } catch (error) {
            console.error("Error fetching courses:", error);
            throw error;
        }
    },
};

export default courseService;