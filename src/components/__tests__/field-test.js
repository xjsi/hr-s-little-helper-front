jest.dontMock('../field');
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var Field = require('../field');
describe('Field', function() {
  it('can get value changes', function() {
    var field = TestUtils.renderIntoDocument(
      <Field id="1" lname="hehe"/>
    );
    var inputnode = TestUtils.findRenderedDOMComponentWithTag(field, 'input');
    TestUtils.Simulate.change(inputnode.getDOMNode(), {target:{value:'hoho'}});
    jest.runAllTicks();
    expect(field.value).toBe('hoho');
  })
})
