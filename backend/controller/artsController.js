import Art from "../models/Art.js";

export default {
    readAll: async function (req, res, next) {
        try {
            const result = await Art.readAll();
            res.json(result);
        } catch (error){
            next(error);
        }
    },
    createArt: async function (req, res, next) {
        try {
            const arts = await Art.createArt(
                req.body.title, 
                req.body.description,
                req.body.opinion,
                req.body.url,
                req.body.comments
                );
            res.json(arts);
        } catch (error){
            next(error);
        }
    },

}