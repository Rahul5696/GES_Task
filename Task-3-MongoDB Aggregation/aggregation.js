// db.sales.aggregate([
//     {
//         $unwind: "$items"
//     },
//     {
//         $addfields: {
//             month: {
//                 $dateToString: { format: "%y-%m", date: "$date" }
//             },
//             itemRevenue: {
//                 $multiply: ["$items.quantity", "$items.price"]
//             }
//         }
//     },
//     {
//         $group: {
//             _id: { store: "$store", month: "$month" },
//             totalRevenue: { $sum: "$itemRevenue" },
//             averagePrice: { $avg: "$itrm.price" }
//         }
//     },
//     {
//         $project: {
//             _id: 0,
//             store: "$_id.store",
//             month: "$_id.month",
//             totalRevenue: 1,
//             averagePrice: 1
//         }
//     },
//     {
//         $sort: {
//             store: 1,
//             month: 1
//         }
//     }
// ])

const { MongoClient } = require('mongodb');

async function runAggregation() {
    const uri = "mongodb+srv://Project:h4XFkW3oqhNsC2dI@cluster0.m54fxhu.mongodb.net/";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db("GES_Task");
        const sales = db.collection("sales");

        console.log("Connected successfully to server");

        const sampleDoc = await sales.findOne({});
        console.log("Sample document:", JSON.stringify(sampleDoc, null, 2));

        const count = await sales.countDocuments({});
        console.log(`Total documents in collection: ${count}`);

        const result = await sales.aggregate([
            {
                $unwind: "$items"
            },
            {
                $addFields: {
                    month: {
                        $dateToString: { format: "%Y-%m", date: "$date" }
                    },
                    itemRevenue: {
                        $multiply: ["$items.quantity", "$items.price"]
                    }
                }
            },
            {
                $group: {
                    _id: { store: "$store", month: "$month" },
                    totalRevenue: { $sum: "$itemRevenue" },
                    averagePrice: { $avg: "$items.price" }
                }
            },
            {
                $project: {
                    _id: 0,
                    store: "$_id.store",
                    month: "$_id.month",
                    totalRevenue: 1,
                    averagePrice: 1
                }
            },
            {
                $sort: {
                    store: 1,
                    month: 1
                }
            }
        ]).toArray();

        console.log("Aggregation Results:", result);
        return result;
    } catch (error) {
        console.error("Error during aggregation:", error);
        throw error;
    } finally {
        await client.close();
    }
}

runAggregation().catch(console.error);