import React from 'react';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import Button from './Button';

function LoanCard({ name, avatarUrl, amount, paymentDate, onPay }) {
  return (
    <div className="ud-bg-warning ud-px-4 ud-py-6 ud-rounded-lg ud-shadow-sm">
      <div className="ud-flex ud-justify-between ud-items-center ud-w-full">
        <p className="ud-text-primary ud-text-base ud-capitalize">
          {name} Personal loan
        </p>
        <Avatar src={avatarUrl} />
      </div>
      <h2 className="ud-mt-3 ud-text-3xl ud-text-black ud-font-semibold">
        {amount}
      </h2>
      <div className="ud-flex ud-justify-between ud-mt-5">
        <div>
          <p className="ud-text-xs ud-text-primary ud-uppercase">
            NEXT SCHEDULED PAYMENT
          </p>
          <p className="ud-text-base ud-text-black ud-font-bold">
            {paymentDate}
          </p>
        </div>
        <Button onClick={onPay}>Pay</Button>
      </div>
    </div>
  );
}

LoanCard.propTypes = {
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  paymentDate: PropTypes.string.isRequired,
  onPay: PropTypes.func,
};

export default LoanCard;
