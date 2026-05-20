import { useParams } from "react-router";

const PaymentFail = () => {
    const {transactionId} = useParams();
  return (
    <div>
      <h2>Payment Failed: {transactionId}</h2>
      <p>
        We're sorry, but your payment was not successful. Please try again or
        contact support for assistance.
      </p>
    </div>
  );
};

export default PaymentFail;
