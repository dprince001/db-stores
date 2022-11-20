import { Link } from "react-router-dom"
import TextInputField from "../../components/text-input-field/text-input-field"


const SignInRoute = () => {

  return (
    <div className='my-20'>
        <div className='w-[85%] max-w-[400px] m-auto'>
          <TextInputField type='email' name='email' placeholder='Email'/>
          <TextInputField type='password' name='password' placeholder='Password'/>
          <p className='cursor-pointer underline mt-2'>forgot your password?</p>
          <button className='block bg-blue border border-blue hover:bg-white hover:text-blue w-[250px] rounded-full text-white p-2 px-4 m-auto mt-8'>SIGN IN</button>
          <button className='block border w-[250px] hover:bg-blue hover:text-white rounded-full border-blue text-blue p-2 px-4 m-auto mt-3'>SIGN IN WITH GOOGLE</button>
          <button className='block w-[250px] p-2 px-4 m-auto mt-3 underline'>
            <Link to='/signup'>Create account</Link>
          </button>
        </div>
    </div>
  )
}

export default SignInRoute