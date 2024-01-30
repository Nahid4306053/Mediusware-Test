import React, {useState} from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');
    const [data,setdata] = useState([]);
    const [displayData,setDisplayData] = useState([]);
    const handleClick = (val) =>{
        if(val.toLowerCase() === "active"){
            const newdata = data.filter(data=> data.status.toLowerCase() === val.toLowerCase())
            setDisplayData(newdata);
            setShow(val);
        }
        else if(val.toLowerCase() === "completed"){
            const newdata = data.filter(data=> data.status.toLowerCase() === val.toLowerCase())
            setDisplayData(newdata);
            setShow(val);
            console.log(val.toLowerCase());
        }
        else{
            setShow(val);
            setDisplayData(data)
        }

    }
    const handelformSubmit = (form) =>{
      form.preventDefault()  
      const formData = {}
      formData.name = form.target.Name.value;
      formData.status = form.target.Status.value;
      setdata(old=>[...old,formData])
      setDisplayData(old=>[...old,formData])
      form.target.reset()
    }
  
    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handelformSubmit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" required name='Name' className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input type="text" required name='Status' className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                         {displayData.length > 0 && displayData.map((ele,ind)=>{
                            return ( 
                            <tr key={ind}>
                                <td scope="col">{ele.name}</td>
                                <td scope="col">{ele.status}</td>
                           </tr>)
                         })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;