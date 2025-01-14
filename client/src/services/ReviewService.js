import Client from ".";

export const GetPostReviews = async (postId) => {
    try {
        const res = await Client.get(`post/reviews/${postId}`);
        return res.data;
    } catch (error) {
        throw error;
    };
};
export const AddReviewLike = async (reviewId, postId) => {
    try {
        const likedReview = await Client.put(`post/addreviewlike/${reviewId}`);
        const allReviews = await Client.get(`post/reviews/${postId}`)
        return {
            likedReview: likedReview.data,
            allReviews: allReviews.data
        };
    } catch (error) {
        throw error;
    };
};
export const PostReview = async (postId, newReview) => {
    try {
        const review = await Client.post(`reviewform/addreview/${postId}`, newReview);
        const allReviews = await Client.get(`post/reviews/${postId}`);
        return allReviews.data;
    } catch (error) {
        throw error;
    };
};