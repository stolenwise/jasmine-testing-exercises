describe("Servers test (with setup and tear-down)", function() {
    beforeEach(function () {
        // Initialize values
        billAmtInput.value = '100';
        tipAmtInput.value = '20';
      });
      it('should add a new paymet to allPayments on submitPaymentInfo()', function() {
        //Arrange
        
    
        //Act
        submitPaymentInfo();
        //Assert
        expect(Object.key(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual('20');
    
    });
    
    it('should not add a new payment on submitPaymentInfo() with empty input', function() {
        //Arrange
        billAmtInput.value = '';

        //Act
        submitPaymentInfo();
    
        //Assert
        expect(Object.key(allPayments).length).toEqual(0);
    });


    it('should payment update #paymentTable on appendPaymentTable()', function (){
        //Arrange
        let curPayment = createCurPayment();
        allPayments['payments1'] = curPayment;
        //Act 
        appendPaymentTable(curPayment);
        let curTdList = document.querySelectorAll('paymentTable tbody tr td');
        

        //Assert
        expect(Object.key(curTdList.length).toEqual(4));
        expect(curTdList[0].innerText).toEqual('$100');
        expect(curTdList[1].innerText).toEqual('$20');
        expect(curTdList[2].innerText).toEqual('$%20');
        expect(curTdList[3].innerText).toEqual('X');

    });

   
    
    it('should crfeate a new payment on create CurPayment()', function() {
        //Arrange
        let expectedPayment = {
            billAmt: '100',
            tipAmt: '20'
            tipPercent: 20,
        }

        //Act
        //Assert
        expect(createCurPayment()).toEqual(expectedPayment);
    
    });
    
    it('should not create payment with empty input on createCurpayment()', function() {
        //Arrange
            billAmtInput.value = '';
            tipAmt.value = '';
            let curPayment = createcurPayment();

            expect(curPayment).toEqual(undefined);
    });

    
    afterEach("", function (){
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });

});