const mongoose=require("mongoose")
const privateForumSchema=require('./Schemas/Private_Forum')
const publicForumSchema=require('./Schemas/Public_Forum')
const forumSchema= new mongoose.Schema(
    {
        forumName:{
            type: String,
            required: true
        },
        forumDescription:{
            type: String,
            required: true
        },
        isPublic:{
            type: Boolean,
            required: true
        }
    }, {timestamps: true}
)
const Forum=mongoose.model('Forum', forumSchema)
const privateForum=Forum.discriminator('Private', privateForumSchema)
const publicForum=Forum.discriminator('Public', publicForumSchema)
module.exports={Forum, privateForum, publicForum}