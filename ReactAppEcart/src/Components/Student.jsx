
import PropTypes from "prop-types";

export const Student = (props) => {
  return (
    <div className="student">

    <table>
<tbody>
     <tr>
        <th>Name:</th>
        <td>{props.name}</td>
    </tr>

    <tr>
        <th>Age:</th>
        <td>{props.age}</td>
    </tr>

    <tr>
        <th>City:</th>
        <td>{props.city}</td>
    </tr>

    <tr>
        <th>Placement:</th>
        <td>{props.placed?"Yes":"No"}</td>
    </tr>
</tbody>
    </table>

    </div>
  );
};

Student.propTypes = {

  name: PropTypes.string,
  age: PropTypes.number,
  city:PropTypes.string,
  Placement:PropTypes.bool,
};

Student.defaultProps={

    name: "TamilThara",
    age: 19,
    city: "pollachi",
    Placement: false,
};