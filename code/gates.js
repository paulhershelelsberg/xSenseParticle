outlets = 5;
var gates = [0,0,0,0,0,0];
function changeGate(gate, state){
	gates[gate] = state;
	outlet(0,gate);
	outlet(1,state);
}
function passData(gate,value,avg){
	if((gates[gate]==1)&&(value!=0)){
		outlet(2,gate);
		outlet(3,value);
		outlet(4,avg);
		}
		else{
			}
}	
	
	