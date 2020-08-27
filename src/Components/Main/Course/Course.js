import React, { useState } from "react";
import fakeData from "../../../fakeData";
import "./Course.css";
import Cart from "../../Main/Cart/Cart";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Course = () => {
  const firstFifteen = fakeData.slice(0, 15);
  const [course, setCourse] = useState(firstFifteen);

  const [cart, setCart] = useState([]);

  const handleAddCourse = (buy) => {
    const newCart = [...cart, buy];
    setCart(newCart);
  };

  return (
    <div className="container bg-light mt-4">
      <div className="d-flex row">
        <div className="styleCourse col-8 col-sm-8">
          {course.map((lang) => (
            <CourseName courseList={lang} enroll={handleAddCourse}></CourseName>
          ))}
        </div>
        <div
          className="col-4 col-sm-4">
          <Cart AddCart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

function CourseName(props) {
  const { name, img, price,trainer } = props.courseList;
  const style = {
    backgroundColor: "#333",
    margin: "10px",
  };

  const imgStyle={
    width:'50%',
    height:'40%',
    padding:'20px',
    borderRadius:'5px'
  }


  return (
    <div style={style}>
      <div className="card d-flex">
        <div>
        <img src={img} style={imgStyle}/>
        </div>    

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h6>{trainer}</h6>
          <h5 className="card-title">$ {price}</h5>
          <button onClick={() => props.enroll(props.courseList)}
            className="btn btn-primary pl-3">
          <FontAwesomeIcon icon={faShoppingCart}/>  Enroll Now
          </button>

        </div>
      </div>
    </div>
  );
}

export default Course;
