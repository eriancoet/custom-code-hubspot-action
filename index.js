require('dotenv').config();
const hubspot = require('@hubspot/api-client');

exports.main = async (event, callback) => {
  const hubspotClient = new hubspot.Client({
    accessToken: process.env.SECRET_NAME
  });

  let phone;
  try {
    const ApiResponse = await hubspotClient.crm.contacts.basicApi.getById(event.object.objectId, ["phone"]);
    phone = ApiResponse.properties.phone;
  } catch (err) {
    console.error(err);
    throw err;
  }

  const email = event.inputFields['email'];

  callback({
    outputFields: {
      email: email,
      phone: phone
    }
  });
}
