const { ApolloError } = require("apollo-server-errors");
const { Listing } = require("../models");

const getSingleListing = async (_, { _id }, context) => {
  try {
    const singleListing = await Listing.findById(_id)
      .populate("bids.user")
      .populate("createdBy");

    // console.log(singleListing);
    return singleListing;
  } catch (error) {
    console.log(`[ERROR]: Failed to get single listing | ${error.message}`);
  }
};

module.exports = getSingleListing;
