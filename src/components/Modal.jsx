import { flatMap, uniqBy } from "lodash";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Modal({data,children,setpage,page,count,even,seteven}) {
  const [loading,setloading] = useState(false);
  const [info,setinfo] = useState('')
  const handelData = async (e) => {
    if (e.target.scrollTop >= (e.target.scrollHeight - e.target.offsetHeight) && even === false) {
      if (data.length < count) {
        setpage(page + 1);
      }
    }
  };
  const handeldata = () =>{
    
  }
  return (
    <>
    <div
      class="modal fade show modal-lg"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.7)" }}
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        {!info && <div  style={{height:"500px",overflow:"auto"}} onScroll={handelData} class="modal-content">
          <div class="modal-header">
            <div className="flex  justify-content-center ">
    
              <div className="d-flex justify-content-center gap-3"> 
                <Link to="/all-contact">
                
                  <button
                    className="btn btn-lg btn-outline-primary"
                    type="button"
                  >
                    All Contacts
                  </button>
                </Link>
                <Link to={"/us-contact"}>
                  <button
                    className="btn btn-lg btn-outline-warning "
                    type="button"
                  >
                    US Contacts
                  </button>
                </Link>               
                <Link to={"/problem-2"}>
                  <button
                    className="btn btn-lg btn-outline-danger"
                    type="button"
                     data-bs-dismiss="modal" aria-label="Close"
                  >
                    Close Modal
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="modal-body">
            {children}
          <ul class="list-group">
             {data.length > 0 && data.map(ele=>{
              return  <li key={ele.id} class="list-group-item  d-flex  justify-content-between gap-5"><p><strong>Phone:</strong> {ele.phone + "  "}</p> <div><span className="bg-dark  p-2 text-light rounded">{ele.country?.name}</span><button onClick={()=>setinfo(ele)}  className="mx-2 btn btn-primary">Info</button></div> 
              </li>
             })}
         
           </ul>
          </div>

        </div>  
        }      
       {info &&   <div  style={{height:"500px",overflow:"auto"}} onScroll={handelData} class="modal-content">
     
        <div className="bg-light">
          <div class="modal-header">
           <h5 class="modal-title">Phone Info</h5>
           <button type="button" onClick={()=>setinfo('')} className="btn btn-close"></button>
         </div>
         <div class="modal-body">
           <h3 className="p-4 text-center mt-5 lh-base">This is a {info.country?.name} <br /> number and the number is {info.phone} which Veryfied {info.country?.name} number</h3>
         </div>

        </div>
        </div>}
       
      </div> 
    </div>

    </>
  );
}
