import React, { useContext, useState } from 'react'
import { Context } from '../../main';
import toast from 'react-hot-toast';
import { FaPencilAlt, FaRegUser } from 'react-icons/fa';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaPhoneFlip } from 'react-icons/fa6';
import { RiLock2Fill } from 'react-icons/ri';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const {isAuthorized, setIsAuthorized, user, setUser} = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:8000/api/user/register", {name, phone, email, role, password}, {
        withCredentials: true,
        headers: {
          "Context-Type": "application/json"
        },
        withCredentials: true,
      });
      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if(isAuthorized){
    return <Navigate to={"/"} />
  }

  return <>
      <div className="authPage">
        <div className="container">
          <div className="header">
            <img src="/Job_mart_logo.jpeg" alt="logo" />
            <h3>Create a new account</h3>
          </div>
          <form>
            <div className="inputTag">
              <label>Register As</label>
              <div>
                <select value={role} onChange={(e)=> setRole(e.target.value)}>
                  <option value="">Select Role</option>
                  <option value="Employer">Employer</option>
                  <option value="Job Seeker">Job Seeker</option>
                </select>
                <FaRegUser />
                </div>    
              </div>
              <div className="inputTag">
              <label>Name</label>
              <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Yash" />
                <FaPencilAlt />
              </div>
              </div>
              <div className="inputTag">
              <label>Email Address</label>
              <div>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="YG@gmail.com" />
                <MdOutlineMailOutline />
              </div>
              </div>
              <div className="inputTag">
              <label>Phone Number</label>
              <div>
                <input type="number" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="9999999999" />
                <FaPhoneFlip />
              </div>
              </div>
              <div className="inputTag">
              <label>Password</label>
              <div>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                <RiLock2Fill />
              </div>
              </div>
              <button type="submit" onClick={handleRegister} >Register</button>
              <Link to={"/login"}>Login Now</Link>
          </form>
        </div>
        <div className="banner">
          <img src="/Register-Now.jpg" alt="register" />
        </div>
      </div>
    </>
}

export default Register