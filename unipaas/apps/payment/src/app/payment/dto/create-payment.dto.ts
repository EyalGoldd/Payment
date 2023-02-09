interface CreatePayment {
  amount: 100,
  currency: string,
  orderId: string,
  description: string,
  email: string,
  phone: string,
  country: string,
  reference: string,
  invoiceUrl?: string
  dueDate?: string
  vatAmount?: number
  successfulPaymentRedirect?: string
  items: [
    {
      "name": "Iphone case",
      "amount": 100,
      "vendorId": "5ee8e655a65f08fcd71fe4d9",
      "platformFee": 0,
      "quantity": 1
    }
  ],
  "billingAddress": {
    "firstName": "string",
    "lastName": "string",
    "city": "London",
    "country": "GB",
    "line1": "64 New Cavendish Street",
    "line2": "",
    "postalCode": "W1G 8TB",
    "state": ""
  },
  "shippingSameAsBilling": true,
  "shippingAddress": {
    "firstName": "string",
    "lastName": "string",
    "city": "London",
    "country": "GB",
    "line1": "64 New Cavendish Street",
    "line2": "",
    "postalCode": "W1G 8TB",
    "state": ""
  },
  "metadata": {
    "CustomerID": "457349"
  }
}
