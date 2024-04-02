import React from 'react';
import SliderComponent from './slider';
import '../Components/table.css'
class MyTable extends React.Component {
    render() {
        return ( <div className='third-div'>

        <div>

        
            <table>
                <thead>
                    <tr>
                        <th>Maximum offer amount</th>
                        <th>Maximum Loan tenure (month)</th>
                        <th>Account to be credited</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>430000</td>
                        <td>72</td>
                        <td>XXXXXX4968</td>
                        <td>jasonbourne003@gmail.com</td>
                    </tr>
                  
                </tbody>
            </table>
            </div>
            <div>

            <SliderComponent/> </div>
            </div>
        );
    }
}

export default MyTable;
