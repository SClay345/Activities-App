const List = require('../models/List')

module.exports = {
    getlists: async (req,res)=>{
        console.log(req.user)
        try{
            const listItems = await list.find({userId:req.user.id})
            const itemsLeft = await list.countDocuments({userId:req.user.id,completed: false})
            res.render('lists.ejs', {lists: listItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createlist: async (req, res)=>{
        try{
            await list.create({list: req.body.listItem, completed: false, userId: req.user.id})
            console.log('list has been added!')
            res.redirect('/lists')
        }catch(err){
            console.log(err)
        }
    },
    editName: async (req, res)=>{
        try{
            await list.findOneAndUpdate({_id:req.body.listIdFromJSFile},{
                //Need to make list Name id?
            })
            console.log('List Re-named')
            res.json('List Re-named')
        }catch(err){
            console.log(err)
        }
    },
 
    deletelist: async (req, res)=>{
        console.log(req.body.listIdFromJSFile)
        try{
            await list.findOneAndDelete({_id:req.body.listIdFromJSFile})
            console.log('Deleted list')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    