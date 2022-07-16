

## Installing / Getting started

After cloning the project cd into it and run

```shell
yarn install
truffle migrate
```

The first command installs the necessary node packages while the second command deloys the contract to the local development server so you must make sure to have a ganache instance running at port 7545.

Celo DAO consist of 
Smart contracts deployed on the celo blockchain 
A react native app to interact with the smart contract
Fully mobile compatible 
iOS/android 

##tech stack

Solidity
React native
Truffle
Expo
Nodejs
Redux

##Functionalities


Users connect their Celo Wallet to join the Celo community DAO.

Users send Celo tokens to the DAO to become Contributors.

Contributors that have made 200 or more total contributions are automatically made Stakeholders.

Only a Stakeholder of the DAO can vote on proposals.

Contributors and/or Stakeholders can create a new proposal.

A newly created proposal has a voting period, when voting is conducted.

Stakeholders can upvote or downvote a proposal.

Once a Proposal's expiry date passes, a Stakeholder then pays out the requested amount to the specified Charity.

