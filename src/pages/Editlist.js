import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

const Editlist = () => {
 const{register,handleSubmit,setValue}= useForm()
 const{bookId} = useParams() 
 const navigate = useNavigate()

    async function fetchData(){
         const result = await axios.get(`http://localhost:7001/bookList/get/${bookId}`)
         setValue("btitle",result.data.btitle)
         setValue("bauther",result.data.bauther)
         setValue("bpublication",result.data.bpublication)
         setValue("bprice",result.data.bprice)
         
    }
    useEffect(()=>{
      fetchData()
    },[])


    function saveData(data){
      axios.put(`http://localhost:7001/bookList/update/${bookId}`,data)
      alert("Data updated")
      navigate('/list')
    }
  return (
    <div>
      <form onSubmit={handleSubmit(saveData)}>
      <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-12">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Liberary registration</h3>

                <div className="row">
                  <div className="col-md-6 mb-1">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m" className="form-control form-control-lg" {...register('btitle')}/>
                      <label className="form-label" htmlFor="form3Example1m">BOOK TITLE</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-1">
                    <div className="form-outline">
                      <input type="text" id="form3Example1n" className="form-control form-control-lg"  {...register('bauther')}/>
                      <label className="form-label" htmlFor="form3Example1n">BOOK AUTHER</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-1">
                    <div className="form-outline">
                      <input type="tel" id="form3Example1m" className="form-control form-control-lg" {...register('bpublication')}/>
                      <label className="form-label" htmlFor="form3Example1m">BOOK PUBLICATION</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-1">
                    <div className="form-outline">
                      <input type="tel" id="form3Example1n" className="form-control form-control-lg" {...register('bprice')}/>
                      <label className="form-label" htmlFor="form3Example1n">BOOK PRICE</label>
                    </div>
                  </div>
                </div>


                <div className="d-flex justify-content-end pt-3">
                  <button type="reset"  className="btn btn-light btn-lg">Reset</button>
                  <button type="submit" className="btn btn-warning btn-lg ms-2">Update Book</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>
    </div>
  )
}

export default Editlist
