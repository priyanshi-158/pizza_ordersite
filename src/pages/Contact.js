import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Contact = () => {
  const data = { name: "", email: "", concern: "" };
  const [issues, setIssues] = useState(data)
  const [check, setCheck] = useState(false)
  const [err,setErr]=useState("");
  const token=localStorage.getItem("token");
  const history = useNavigate()
  if (check === true && !err) {
    setTimeout(() => {
      history("/")
    }, 2000);
  }
  if(err)
  {
    setTimeout(()=>{
      setCheck(false);
      setErr("")
    },2000)
  }
  const submitContactForm = async (data) => {
    console.log("Form Data - ", data)
    try {
      const url = "https://pizzarita-backend-deploy.vercel.app/api/v1/contactus";
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          'Authorization':`${token}`,
          "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(data),
        
      };
     const res= await fetch(url, options)
       const json=await res.json();
       console.log(json)

        if(json.success)
       {
       setCheck(true)
       setIssues({ name: "", email: "", concern: "" })
       }
       else
       {
        setErr(json.message)
        setCheck(true);
       }
       
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
      setErr(error.message)
      setCheck(true);
    }
  }
  useEffect(() => {
    console.log("Done")
  }, [check])
  function handleData(e) {
    setIssues({ ...issues, [e.target.name]: e.target.value })
  }
  function handleSubmit(e) {
    e.preventDefault()
    if (!issues.name || !issues.email || !issues.concern) {
      alert("Please fill out all fields")

    }
    // else if(!token)
    // {
    //   alert("Login to continue")
    // }
    else {
      submitContactForm(issues)
    }
  }
  return (
    <>
      <pre>{(check) ? <h2
        className='bg-slate-200 ml-[25%] w-[60%] p-[25px] mt-[5%] text-xl font-mono capitalize hidden lg:flex'>
       {err?err:"Hello, We Are Glad to Hear From You.We Would be Responding shortly. Thank You!!" }
      </h2> : ""}</pre>
      <form className='bg-sky-50 my-10 mx-2 md:ml-[26%] mt-[5%] md:w-[50%] text-center justify-center' onSubmit={handleSubmit}>

        <div className='pt-4 pb-4 bg-blue-900 text-white my-4'>
          <h1 className='text-4xl font-bold font-serif '>Reach to Us. Tell us your experiences</h1>
        </div>
        <div className='flex justify-center pb-4'>
          <input type="text" placeholder='Enter Your Name' name='name' value={issues.name} onChange={handleData}
            className='text-xl h-[42px] m-[8px] p-3 w-[70%] inline-block border border-solid box-border border-[#ccc]' />
        </div>
        <div className='flex justify-center pb-4'>
          <input type="email" placeholder='Enter Your Email' name='email' value={issues.email} onChange={handleData}
            className='text-xl h-[42px] m-[8px] p-3 w-[70%] inline-block border border-solid box-border border-[#ccc]' />
        </div>
        <div className='flex justify-center pb-4'>
          <input type="text" placeholder='Write To Us...' name='concern' value={issues.concern} onChange={handleData}
            className='text-xl h-[72px] m-[8px] p-3 w-[70%] inline-block border border-solid box-border border-[#ccc]' />
        </div>
        <div>
          <button className='w-[30%] bg-green-600 text-white p-[15px] my-[8px] border-none cursor-pointer rounded hover:bg-green-700' type='submit'>Submit</button>
        </div>
      </form>
      <Footer />
    </>
  )
}

export default Contact