import Container from '@material-ui/core/Container';
// import {Switch, Route} from 'react-router-dom';

import Header from './header';


function Guidelines() {
  return (
    <>
      <Header/> 
      <Container style ={{margin : "100px 0px 0px 0px"}}>
        <h1> Guidelines </h1>
        <h2> Plan and prepare for wildfire! </h2>
        <ul style = {{ fontSize : 18}}>
          <li> Create and maintain defensible space and prepare & strengthen home against flying embers </li>
          <li> Minimize combustible storage </li>
          <li> Learn your community response plan for  each disaster</li>
          <li> Be Ready to go!</li>
        </ul>
        <br/>
        <h2> Preparing For Wildfire</h2>
        <h2> Create an evacuation plan that includes:</h2>
        <ul style = {{ fontSize : 18}}>
          <li> A designated emergency meeting location outside the fire or hazard area. This is critical to determine who has safely evacuated from the affected area.</li>
          <li> Several different escape routes from your home and community. Practice these often so everyone in your family is familiar in case of emergency. </li>
          <li> Have an evacuation plan for pets and large animals such as horses and other livestock.</li>
          <li> A  Family Communication Plan that designates an out-of-area friend or relative as a point of contact to act as a single source of communication among family members in case of separation. (It is easier to call or message one person and let them contact others than to try and call everyone when phone, cell, and internet systems can be overloaded or limited during a disaster.)</li>
        </ul>
        <br/>
        <h2> Be Prepared:</h2>
        <ul style = {{ fontSize : 18}}>
          <li> Have fire extinguishers on hand and train your family how to use them (check expiration dates regularly).</li>
          <li> Ensure that your family knows where your gas, electric, and water main shut-off controls are located and how to safely shut them down in an emergency.</li>
          <li> Assemble an Emergency Supply Kitor each person, as recommended by the American Red Cross. (See next section for details.)</li>
          <li> Maintain a list of emergency contact numbers posted near your phone and in your emergency supply kit.</li>
          <li> Keep an extra Emergency Supply Kit in your car in case you cannot get to your home because of fire or other emergency.</li>
          <li> Have a portable radio or scanner so you can stay updated on the fire.</li>
          <li> Inform others about your Wildfire Action Plan! </li>
        </ul>
      </Container>
    </>
  );
}

export default Guidelines;
