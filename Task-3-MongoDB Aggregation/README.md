## Aggregation pipeline

This project demonstrates a MongoDB aggregation pipeline that calculates monthly revenue statistics for retail stores. The pipeline processes sales data to generate:

- Total revenue per store per month

- Average item price per store per month

## Features
- Connects to MongoDB Atlas cluster

- Uses aggregation pipeline stages:

 -- $unwind to expand items arrays

 -- $addFields to calculate month and item revenue

 -- $group to aggregate by store and month

 -- $project to reshape output

 -- $sort to order results

- Includes comprehensive debugging:

 -- Database connection verification

 -- Document structure inspection

 -- Field enumeration

 -- Sample document output

## Installation
-Clone the repository

## Install dependencies:
-npm install mongodb

-Set up your MongoDB connection URI in the code

## Usage
- Update the connection URI in aggregation.js:

### javascript
- const uri = "mongodb+srv://Project:h4XFkW3oqhNsC2dI@cluster0.m54fxhu.mongodb.net/";

## Run the script:

- node aggregation.js