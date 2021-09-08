import mongoose from "mongoose";

const ArtSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    opinion: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    comments: {
        type: Array,
    }
})


const Art = mongoose.model("Art", ArtSchema);

async function readAll() {
    return await Art.find();
}

async function createArt(title, description, opinion, url, comments) {
    const art = new Art({
        title,
        description,
        opinion,
        url,
        comments: comments || []
    })

    return await art.save();
}

export default { readAll, createArt }