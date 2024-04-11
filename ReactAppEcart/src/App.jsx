import { Student } from "./Components/Student";
import './App.css';


function App(){

    return (
  <>

        
        <Student name="Saravanan" age = {22} city="Coimbatore" placed="Yes"/>
        <Student name="Nandagopal" age= {27} city="Erode" Placed="No"/>
        <Student name="Tamilarasu"  age = {22} city="Pollachi" placed="Yes"/>
       
        <Student/>
        </>  );
}
export default App;