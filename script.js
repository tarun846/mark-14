var initialPrice=document.querySelector("#initial-price");
var stocksQuantity=document.querySelector("#no-of-stocks");
var currentPrice=document.querySelector("#current-price");
var tellButton=document.querySelector("#tell-button");
var outputBox=document.querySelector("#output-box");



function calculateProfitAndLoss(initial,quantity,current){
    var message="";
    if(initial>current){
        var loss=(initial-current)*quantity;
        var lossPercentage=(loss/(initial*quantity))*100;
        console.log(loss,lossPercentage);
        message='Hey the loss is '+loss+' and the percent is '+lossPercentage+'%';
    }else if(current>initial){
        var profit=(current-initial)*quantity;
        var profitPercentage=(profit/(initial*quantity))*100;
        message='Hey the loss is '+profit+' and the percent is '+profitPercentage+'%';
    }else{
        message="No pain no gain and no gain no pain";
    }
    return message;
}

function showStockData(){
    var ip=Number(initialPrice.value);
    var qty=Number(stocksQuantity.value);
    var curr=Number(currentPrice.value);
    var message=calculateProfitAndLoss(ip,qty,curr);
    if(ip===0|| qty===0 || curr===0) message="Pls enter all the fields correctly.";
    if(ip<0|| qty<0||curr<0 ) message="Initial value or quantity or curr value can't be negative";
    outputBox.innerText=message;

}
tellButton.addEventListener("click",showStockData);