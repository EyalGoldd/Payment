export interface CreatePayment {
    amount: number;
    currency: string;
    orderId: string;
    description: string;
    email: string;
    phone: string;
    country: string;
    reference: string;
    invoiceUrl?: string;
    dueDate?: string;
    vatAmount?: number;
    successfulPaymentRedirect?: string;
    items: PaymentProduct[];
    billingAddress: PaymentBillingAddress;
    shippingSameAsBilling: boolean;
    shippingAddress?: PaymentShippingAddress;
    metadata: object;
}

export interface PaymentProduct {
    name: string;
    amount: number;
    vendorId: string;
    platformFee: number;
    quantity: number;
}

export interface PaymentBillingAddress {
    firstName: string;
    lastName: string;
    city: string;
    country: string;
    line1: string;
    line2: string;
    postalCode: string;
    state: string;
}

export interface PaymentShippingAddress {
    firstName: string;
    lastName: string;
    city: string;
    country: string;
    line1: string;
    line2: string;
    postalCode: string;
    state: string;
}
