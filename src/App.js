
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Alert from 'react-bootstrap/Alert';

function App() {
  return (
    <>
    <Card className="text-center" style={{ width: '100%',
    height: '100vh',backgroundColor: "#242526"}}>
      <Card.Header style={{backgroundColor: "#242526", color: "#838587"}}>      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" style={{color:"#FF9F3D"}}>Profile</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>Settings</Nav.Link>
        </Nav.Item>

        </Nav></Card.Header>
      <Card.Body style={{backgroundColor: "#18191A", color: "#838587",}}>
        <Card.Title> </Card.Title>
        <Card.Text >
          <table align='center' style={{width:'30%'}}><tr><td rowspan="2"><ProfilePhoto></ProfilePhoto></td>
        <td ><FullName></FullName> </td></tr> 
        <tr><td><Address></Address></td></tr>
      <tr><td>0 Posts</td> <td>0 Followers </td> <td> 0 Following </td></tr>
       </table>
      
        </Card.Text>
        <div>
        <a href="#" class="square_btn">Follow</a></div>
        <p></p>
        <Alert variant="warning">
      <Alert.Heading> <p><img src="/prv.png" alt="myimage"></img></p>This account is Private</Alert.Heading>
      <p>
        Follow this account to see their photos and videos 
      </p>
    </Alert>

      </Card.Body>
      <Card.Footer className="text-muted" style={{color: "#838587", backgroundColor: "#242526"}}>online 2 days ago</Card.Footer>
    </Card>
    </>
  );
}

export default App;
