const SquareConnect = require('square-connect');
const defaultClient = SquareConnect.ApiClient.instance;
const crypto = require('crypto');

let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = process.env.ACCESS_TOKEN;

const transactionsApi = new SquareConnect.TransactionsApi();
const ordersApi = new SquareConnect.OrdersApi();
const locationId = process.env.LOC_ID;

exports.handler = async (event) => {
  const eventBody = JSON.parse(event.body);
  const order = await ordersApi.createOrder(locationId, {
    idempotency_key: crypto.randomBytes(12).toString('hex'),
    line_items: [
      {
        name: "Cookie",
        quantity: "1",
        base_price_money: {
          amount: 100,
          currency: "USD"
        }
      }
    ]
  });
  const body = {
    idempotency_key: crypto.randomBytes(12).toString('hex'),
    amount_money: {
      amount: order.order.line_items[0].total_money.amount,
      currency: 'USD'
    },
    order_id: order.order.id,
    card_nonce: eventBody.nonce
  };
  try {
    const transaction = await transactionsApi.charge(locationId, body);
    console.log(transaction.transaction);
    return {
      "statusCode": 200,
      "body": JSON.stringify(transaction.transaction)
    }
  } catch (e) {
    delete e.response.req.headers;
    delete e.response.req._header;
    console.log(e);
    return {
      "statusCode": 400,
      "body": e.response.text
    }
  }
};