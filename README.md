# truffle_test_
in this secction i going to show how deploy and test a solidity smart contract
STEPS:
1.	Truffle init
2.	Créate a Smart contract 
3.	Créate a migrations mart contract .js
4.	Create a VendingMachine.test.js
5.	Be aware that truffle config version is the same than own contract version
6.	In the test file create a function test for each function that we have in our SC
7.	Then, is necessary to uncomment the network lines we goin to use, in this case local/networks/ development
8.	Run our local network : ganashe-cl
9.	Run in other terminal : truffle migrate 
10.	If we eant to interact with our smartcontrac in the terminal we ned to use truffle console and use the java script
11.	IF YOU WANT WORK WIT INFURA  you need to create a .gitignore: #local env files .env
12.	 we create a .env  with private key  of the 0 and 1 wallets (install if is necessary)
18.	Then we need to configurate  poopsten or rinkeby
