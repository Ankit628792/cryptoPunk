import connectDB from './db'
import User from '../../models/user'
import Collection from '../../models/collection'
export default async function (req, res) {
    await connectDB()
    if (req.method == 'GET') {
        const user = await User.find({walletAddress: req.query._id});
        if(user){
            const collection = await Collection.find({user: user._id},{name: 1, _id: 0});
            if(collection){
                res.json({
                    data: collection,
                    status: {
                        message: "user collection found",
                        code: 200,
                    }
                })
            } else {
                res.json({
                    status: {
                        message: "user collection with id doesn't exist",
                        code: 403,
                    }
                })
    
            }
        }else{
            res.json({
                status: {
                    message: "user id doesn't exist",
                    code: 403,
                }
            })
        }
    }
   
}