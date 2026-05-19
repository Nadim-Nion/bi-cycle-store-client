import { useParams } from "react-router";

const PaymentSuccess = () => {
  const { transactionId } = useParams();
  console.log(transactionId);
  return (
    <div>
      <h2>Payment Successful</h2>
      <p>Transaction ID: {transactionId}</p>
    </div>
  );
};

export default PaymentSuccess;
