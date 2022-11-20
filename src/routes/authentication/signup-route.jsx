import { Link } from "react-router-dom"
import TextInputField from "../../components/text-input-field/text-input-field"


const SignUpRoute = () => {

  return (
    <div className='my-20'>
        <div className='w-[85%] max-w-[400px] m-auto'>
          <TextInputField type='text' name='firstname' placeholder='First name'/>
          <TextInputField type='text' name='lastname' placeholder='Last name'/>
          <TextInputField type='email' name='email' placeholder='Email'/>
          <TextInputField type='password' name='password' placeholder='Password'/>
          <button className='block bg-blue border border-blue hover:bg-white hover:text-blue w-[250px] rounded-full text-white p-2 px-4 m-auto mt-8'>Create</button>
        </div>
    </div>
  )
}

export default SignUpRoute