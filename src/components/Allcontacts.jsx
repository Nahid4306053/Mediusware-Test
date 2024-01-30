import { useEffect, useState } from "react";
import Modal from "./Modal";
import { merge } from "lodash";

export default function Allcontacts() {
  const [data, setdata] = useState([]);
  const [dispalydata,setDisplayData] = useState([])
  const [page,setpage] = useState(1);
  const [searchData, setSearchData] = useState("");
  const [count,setCount] = useState(0)
  const [even,seteven] = useState(false);
  useEffect(() => {
    fetch(
      `https://contact.mediusware.com/api/contacts/?format=json&page=${page}${
        searchData && "&search=" + searchData
      }`
     )
      .then((res) => res.json())
      .then((res) => (
      setCount(res.count),
      setdata(old=>searchData ? searchData && page > 1 ? [...old,...res.results] : res.results :  [...old,...res.results]),
      setDisplayData(old=>searchData ? searchData && page > 1 ? [...old,...res.results] : res.results :  [...old,...res.results])
      )
      );
  
    }, [searchData,page]);

  const handelSearch = (form) => {
    form.preventDefault();
    setSearchData(form.target.search.value.trim());
    setpage(1)
  };

  useEffect(()=>{
      if(even){
        setDisplayData(old=>old.filter((ele)=>ele.id % 2 === 0));
      }
      else{
        setDisplayData(data)
      }
  },[even,searchData,page])
  return (
    <>
    <Modal page={page} count={count} setpage={setpage} seteven={seteven} even={even} data={dispalydata}>
      <form method="post" onSubmit={handelSearch}>
        <div className="input-group mb-3">
          <input type="text" name="search" className="form-control inputGroup-sizing-lg" placeholder="Search by Number" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
      </form>
    </Modal>

    </>
  );
}
