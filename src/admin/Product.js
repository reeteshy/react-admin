import React, {Fragment, useEffect, useState} from 'react'
import DataTable from 'react-data-table-component';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Product() {

  const [product, setProduct] = useState([]) 

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  } 

   useEffect(() => {
    if (product.length === 0) {
      fetch('https://dummyjson.com/products')
        .then((res) => res.json())
        .then((data) => {
          setProduct(data.products);
          })
      }
    }, [product]);

    const columns = [
      {
          name: 'Name',
          selector: row => row.title,
      },
      {
          name: 'Brand',
          selector: row => row.brand,
      },
      {
          name: 'Price',
          selector: row => row.price,
      },{
        name: 'Action',
        key: "action",
        text: "Action",
        className: "action",
        width: 100,
        align: "left",
        sortable: false,
        cell: (record) => {
          return (
            <Fragment>
              <button
                className="btn btn-primary btn-sm mar"
              >
                <i class="pi pi-pencil"></i>Edit
              </button>
              <button
                className="btn btn-primary btn-sm mar"
              >
               <i class="pi pi-eye"></i> View
              </button>
              <button
                className="btn btn-primary btn-sm mar"
              >
               <i class="pi pi-trash"></i> Delete
              </button>
            </Fragment>
          );
         },
        },
  ];
  
  
      // console.log("first ", product )

  return (
    <>
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">DataTable with minimal features & hover style</h3>
              </div>
              {/* /.card-header */}
              <div className="card-body">
              <DataTable
                columns={columns}
                data={product}
                pagination
            />
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container-fluid */}
    </section>
    {/* /.content */}
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Product