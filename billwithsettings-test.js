describe('The bill with settings factory function', function(){
    it('should be able to set the call cost', function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();
        settingsBill2.setCallCost(2.75);
        assert.equal(2.75, settingsBill2.getCallCost())
    });

    it('should be able to set the sms cost', function(){
        let settingsBill = BillWithSettings();
        settingsBill.setSmsCost(0.65);
        assert.equal(0.65, settingsBill.getSmsCost());
    
        let settingsBill2 = BillWithSettings();
        settingsBill2.setSmsCost(1.20);
        assert.equal(1.20, settingsBill2.getSmsCost());
    });

    it('should be able to set the call and sms cost', function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());

        let settingsBill2 = BillWithSettings();
        settingsBill2.setCallCost(2.75);
        assert.equal(2.75, settingsBill2.getCallCost());

        settingsBill.setSmsCost(0.45);
        assert.equal(0.45, settingsBill.getSmsCost());
    
        settingsBill2.setSmsCost(3.00);
        assert.equal(3.00, settingsBill2.getSmsCost());
    });

    it("should set warning colour", function(){
        let settingBill = BillWithSettings(); 
        settingBill.setWarning(30.00);
        assert.equal(30.00, settingBill.getWarning());
    });

    it("should set critical colour", function(){
        let settingBill = BillWithSettings(); 
        settingBill.setWarning(50.00);
        assert.equal(50.00, settingBill.getWarning());
    });

    it("should set warning and critical colour", function(){
        let settingBill = BillWithSettings(); 
        settingBill.setWarning(30.00);
        assert.equal(30.00, settingBill.getWarning());

        let settingBill2 = BillWithSettings(); 
        settingBill2.setWarning(60.00);
        assert.equal(60.00, settingBill2.getWarning());
    
        settingBill.setCritical(50.00);
        assert.equal(50.00, settingBill.getCritical());

        settingBill2.setCritical(80.00);
        assert.equal(80.00, settingBill2.getCritical());
    });

    it("should use the values set for call and sms", function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(2.00);
        settingsBill.setSmsCost(0.50);

        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.sendSms();

        assert.equal(6.50, settingsBill.getTotalCost());
        assert.equal(6.00, settingsBill.getTotalCallCost());
        assert.equal(0.50, settingsBill.getTotalSmsCost());
    });

    it("should return the warning classname if warning level is reached", function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(3.00);
        settingsBill.setSmsCost(1.50);
        settingsBill.setWarning(10.00);
        settingsBill.setCritical(30.00);
    
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.sendSms();
    
        assert.equal("warning", settingsBill.className());
    });

    it("should return the critical classname if critical level is reached", function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(5.00);
        settingsBill.setSmsCost(1.50);
        settingsBill.setWarning(10.00);
        settingsBill.setCritical(30.00);
    
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.sendSms();
    
        assert.equal("critical", settingsBill.className());
    });

    it("should stop adding once critical level is reached", function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCallCost(5.00);
        settingsBill.setSmsCost(1.50);
        settingsBill.setWarning(10.00);
        settingsBill.setCritical(30.00);
    
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.sendSms();
    
        assert.equal(30, settingsBill.stopAdd());
    });

});
