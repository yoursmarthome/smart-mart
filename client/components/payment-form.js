import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

export default class PaymentForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.onToken = this.onToken.bind(this);
  }

  onToken(token) {
    token = JSON.stringify(token);
    this.props.callback(token);
  }

  // ...

  render() {
    return (
      // ...
      <StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_BuN9Y2sdSBcUOWqrV20QeMXE"
      />
    )
  }
}
