import axios from "axios";

export const imageUpload = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile); // assuming imageFile is a File or Blob

    try {
        const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
            params: {
                key: import.meta.env.VITE_IMAGEBB_API_KEY, // replace with actual key for testing
            },
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data.data.display_url;

    } catch (error) {
        console.error('Upload failed:', error.response?.data || error.message);
        throw new Error('Image upload failed');
    }
};