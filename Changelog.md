# User Stories Implementation Details

This README outlines the implementation details for the user stories related to the project.

## 1. Convert Wei To Eth

- Defined **convertWeiToEth** function to convert balance and values to Eth.
- **End of Line lint issue**: resolved by updating prettier config.

## 2. Refactoring Sagas

- Only the API function implementation was different so pulled the other common code out to **commonAddressSaga**.

## 3. Address Validation

- **Webpack configuration changed** to resolve the Buffer issue.
- Added **warn message** when the address is not valid

## 4. Pagination

- **Leveraged Ant Design's Table component's pagination** functionality for this, where I decided that I would show the next page number when the last page transaction list is full (example if the transaction list's length is 20 and I'm at page 2 then I will show page 3 but when the transaction list's length is 17 then I don't show page 3).
- **Caveat** to above approach. If the user selects a different address or change page then all the fetched transactions for the current address are gone as current implementation is resetting on each call.

## 5. Custom Address Deeplink Support

- **Webpack configuration changed** to resolve the public path issue.
- **Pulled address out of useParams** hook. If the address is valid then I fetch the balance and transactions.
