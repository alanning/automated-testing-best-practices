//import {AccountSummary} from '/src/modules/client/components/bank-deposit';
//
//var testUtils = React.addons.TestUtils;
//
//describe('<BankDeposit>', function () {
//  describe('depositCheckIntoMyAccount', function () {
//    it('submitting the form calls the bank deposit check service using the values from the form', function () {
//      const instance = testUtils.renderIntoDocument(<BankDeposit/>);
//      const form = testUtils.findRenderedDOMComponentWithTag(instance, 'form');
//      instance.refs.fromAccountNumber.getDOMNode().value = 'ABCD12345';
//      instance.refs.branchNumber.getDOMNode().value = 123;
//      instance.refs.amount.getDOMNode().value = 10.23;
//      spyOn(Meteor, 'call');
//
//      testUtils.Simulate.submit(form);
//
//      expect(Meteor.call).toHaveBeenCalledWith('bank/deposit', 'ABCD12345', 123, 10.23);
//    });
//  });
//});