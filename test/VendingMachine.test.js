const VendingMachine = artifacts.require ("VendingMachine");
// aqui ponemos el parametro accounst para que nos de acceso a las cuentas de la network, en este caso ganesha
contract ("VendingMachine", (accounts) =>   {
    // primero tenemos que hacer el deploy del contracto

    before(async ()=>   {
        instance = await VendingMachine.deployed()        
    })

    it ("ensures that the starting balance of the vending machine is 100", async()=>   {
        let balance = await instance.getVendingMachineBalance()
        // assert means you ahve to pass 100 if not, it makes an error
        assert.equal(balance, 100, "the initial balance should be 100 donuts") 
    })

    it ("ensures that the starting balance of the vending machine can be update", async()=>   {
        await instance.restock(100)
        let balance = await instance.getVendingMachineBalance()        
        assert.equal(balance, 200, "the balance should be 200 donuts after restocking") 
    })
    it ("allows donuts to be purchase", async()=>   {
    await instance.purchase(1, {from: accounts [0], value: web3.utiñls.toWei("3", "ether") });
    let balance = await instance.getVendingMachineBalance()        
        assert.equal(balance, 199, "the balance should be 200 donuts after restocking")
    })

})