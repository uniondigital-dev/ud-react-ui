import React from 'react';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import Button from './Button';

function LoanCard({ firstName, avatarUrl, amount, paymentDate, onPay }) {
  return (
    <div className="bg-danger px-4 py-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center w-full">
        <p className="text-primary text-base capitalize">
          {firstName} Personal loan
        </p>
        <Avatar avatarUrl={avatarUrl} />
      </div>
      <h2 className="mt-3 text-3xl text-black font-semibold">{amount}</h2>
      <div className="flex justify-between mt-5">
        <div>
          <p className="text-xs text-primary uppercase">
            NEXT SCHEDULED PAYMENT
          </p>
          <p className="text-base text-black font-bold">{paymentDate}</p>
        </div>
        <Button onClick={onPay}>Pay</Button>
      </div>
    </div>
  );
}

LoanCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  paymentDate: PropTypes.string.isRequired,
  onPay: PropTypes.func,
};

export default LoanCard;
