export const youtubeTags = ["All", "Gaming", "Music", "Tamil Cinema", "Live", "News", "T-Series","Wickets", "Indian Cuisine", "Bollywood Music", "Gadgets", "Pops", "New to you", "Dev"]

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${import.meta.env.VITE_GOOGLE_API}`