export type company = {
  companyId: string;
  companyName: string;
  companyContact: string;
  initalBalance: number;
  gstNumber?: string;
};

export const companyData: company[] = [
  {
    companyId: "1",
    companyName: "Company 1",
    companyContact: "1234567890",
    initalBalance: 100000,
    gstNumber: "GST123456789",
  },
  {
    companyId: "2",
    companyName: "Company 2",
    companyContact: "1234567890",
    initalBalance: 100000,
    gstNumber: "GST123456789",
  },
  {
    companyId: "3",
    companyName: "Company 3",
    companyContact: "1234567890",
    initalBalance: 100000,
    gstNumber: "GST123456789",
  },
  {
    companyId: "4",
    companyName: "Company 4",
    companyContact: "1234567890",
    initalBalance: 100000,
    gstNumber: "GST123456789",
  },
  {
    companyId: "5",
    companyName: "Company 5",
    companyContact: "1234567890",
    initalBalance: 100000,
    gstNumber: "GST123456789",
  },
  {
    companyId: "6",
    companyName: "Company 6",
    companyContact: "1234567890",
    initalBalance: 100000,
    gstNumber: "GST123456789",
  },
  {
    companyId: "7",
    companyName: "Company 7",
    companyContact: "1234567890",
    initalBalance: 100000,
    gstNumber: "GST123456789",
  },
  {
    companyId: "8",
    companyName: "Company 8",
    companyContact: "1234567890",
    initalBalance: 100000,
    gstNumber: "GST123456789",
  },
  {
    companyId: "9",
    companyName: "Company 9",
    companyContact: "1234567890",
    initalBalance: 100000,
    gstNumber: "GST123456789",
  },
  {
    companyId: "10",
    companyName: "Company 10",
    companyContact: "1234567890",
    initalBalance: 100000,
    gstNumber: "GST123456789",
  },
];

export type Payment = {
  paymentId: string;
  companyId: string;
  amount: number;
  date: string;
  paid: boolean;
  paymentMode?: string;
  transactionId?: string;
  remarks: string;
};

export const PaymentData: Payment[] = [
  {
    paymentId: "1",
    companyId: "1",
    amount: 10000,
    date: "2021-05-01",
    paid: true,
    paymentMode: "Cash",
    transactionId: "123456789",
    remarks: "Payment 1",
  },
  {
    paymentId: "2",
    companyId: "1",
    amount: 20000,
    date: "2021-05-02",
    paid: true,
    paymentMode: "Cash",
    transactionId: "123456789",
    remarks: "Payment 2",
  },
  {
    paymentId: "3",
    companyId: "1",
    amount: 30000,
    date: "2021-05-03",
    paid: true,
    paymentMode: "Cash",
    transactionId: "123456789",
    remarks: "Payment 3",
  },
  {
    paymentId: "4",
    companyId: "1",
    amount: 40000,
    date: "2021-05-04",
    paid: true,
    paymentMode: "Cash",
    transactionId: "123456789",
    remarks: "Payment 4",
  },
  {
    paymentId: "5",
    companyId: "1",
    amount: 50000,
    date: "2021-05-05",
    paid: true,
    paymentMode: "Cash",
    transactionId: "123456789",
    remarks: "Payment 5",
  },
  {
    paymentId: "6",
    companyId: "1",
    amount: 60000,
    date: "2021-05-06",
    paid: true,
    paymentMode: "Cash",
    transactionId: "123456789",
    remarks: "Payment 6",
  },
  {
    paymentId: "7",
    companyId: "1",
    amount: 70000,
    date: "2021-05-07",
    paid: true,
    paymentMode: "Cash",
    transactionId: "123456789",
    remarks: "Payment 7",
  },
  {
    paymentId: "8",
    companyId: "1",
    amount: 80000,
    date: "2021-05-08",
    paid: true,
    paymentMode: "Cash",
    transactionId: "123456789",
    remarks: "Payment 8",
  },
  {
    paymentId: "9",
    companyId: "1",
    amount: 90000,
    date: "2021-05-09",
    paid: false,
    remarks: "Payment 9",
  },
];

export type Purchase = {
  purchaseId: string;
  companyId: string;
  amount: number;
  date: string;
  remarks: string;
};

export const PurchaseData: Purchase[] = [
  {
    purchaseId: "1",
    companyId: "1",
    amount: 10000,
    date: "2021-05-01",
    remarks: "Purchase 1",
  },
  {
    purchaseId: "2",
    companyId: "1",
    amount: 20000,
    date: "2021-05-02",
    remarks: "Purchase 2",
  },
  {
    purchaseId: "3",
    companyId: "1",
    amount: 30000,
    date: "2021-05-03",
    remarks: "Purchase 3",
  },
  {
    purchaseId: "4",
    companyId: "1",
    amount: 40000,
    date: "2021-05-04",
    remarks: "Purchase 4",
  },
  {
    purchaseId: "5",
    companyId: "1",
    amount: 50000,
    date: "2021-05-05",
    remarks: "Purchase 5",
  },
  {
    purchaseId: "6",
    companyId: "1",
    amount: 60000,
    date: "2021-05-06",
    remarks: "Purchase 6",
  },
  {
    purchaseId: "7",
    companyId: "1",
    amount: 70000,
    date: "2021-05-07",
    remarks: "Purchase 7",
  },
  {
    purchaseId: "8",
    companyId: "1",
    amount: 80000,
    date: "2021-05-08",
    remarks: "Purchase 8",
  },
  {
    purchaseId: "9",
    companyId: "1",
    amount: 90000,
    date: "2021-05-09",
    remarks: "Purchase 9",
  },
];
