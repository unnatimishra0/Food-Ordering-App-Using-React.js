import {sum} from '../sum';

test("sum fincn shd cal the sum of two numbers",()=>{

   const result= sum(3,4)
//Assertion
   expect(result).toBe(7);
})