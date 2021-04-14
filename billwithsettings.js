function BillWithSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;
    var theCallCostTotal = 0;
    var theSmsCostTotal = 0;
    var theTotalCost = 0;

    function setCallCost(callCost){
        theCallCost=callCost;
    }

    function getCallCost(){
        return theCallCost;
    }

    function setSmsCost(smsCost){
        theSmsCost=smsCost;
    }

    function getSmsCost(){
        return theSmsCost;
    }

    function setWarning(warning){
        theWarningLevel = warning;
    }

    function getWarning(){
        return theWarningLevel;
    }

    function setCritical(critical){
        theCriticalLevel = critical;
    }

    function getCritical(){
        return theCriticalLevel;
    }

    function makeCall(){
        theCallCostTotal += theCallCost;
    }

    function sendSms(){
        theSmsCostTotal += theSmsCost;
    }

    function getTotalCallCost(){
        return theCallCostTotal;
    }

    function getTotalSmsCost(){
        return theSmsCostTotal;
    }

    function getTotalCost(){
        return theCallCostTotal + theSmsCostTotal;
    }

    function className(){
        if(getTotalCost() >= getWarning() && getTotalCost() < getCritical()){
            return "warning";
        }

        if (getTotalCost() >= getCritical()){
            return "critical";
        }

    }

    function stopAdd(){
        if (getTotalCost()>= getCritical()){
            return theCriticalLevel;
        }
    }
    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarning,
        getWarning,
        setCritical,
        getCritical,
        makeCall,
        sendSms,
        getTotalCallCost,
        getTotalSmsCost,
        getTotalCost,
        className,
        stopAdd,

    }
}