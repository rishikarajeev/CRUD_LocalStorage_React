import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Container,Row,Col,Card,Button } from "react-bootstrap";

function ProductsAxios() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const url1="https://fakestoreapi.com/products"// new project 15 products on button show click
  const url2="https://fakestoreapi.com/users" //state value changes user displayed button or form field

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => { 
       // console.log("response",response.data);
        
      const s= response.data.splice(0,5);
      console.log("sliced data",s);

      setData(s);
    });
  }, []);

  return (
    <div>
      <Container fluid="md">
        <Row>
          <Col>
         
            {data.map((key) => (
              <Card style={{ width: "18rem" }} className="m-3" bg="primary">
               
                <Card.Body>
                  <Card.Title>{key.address.city}</Card.Title>
                  <Card.Text>
                   {key.email}
                  </Card.Text>
            
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductsAxios;
