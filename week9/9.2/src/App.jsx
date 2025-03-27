import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  function getFormData(data) {
    console.log("form data", data);
  }
  console.log("errors", errors)
  return (
    <div>
      <h1>Alpaca Fan Club</h1>
      <form onSubmit={handleSubmit(getFormData)}>
        <fieldset>
          <legend>Personal Data</legend>
          <div className='form-group'>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' className='required' {...register("firstName", {required: true})} />
            {errors.firstName ? (<p className='error'>You need a first name</p>): <></>}
          </div>
          <div className="form-group">
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' id='lastName' {...register("lastName", {required: true})} />
            {errors.lastName ? (<p className='error'>You need a last name</p>): <></>}
          </div>
          <div className='form-group'>
            <label htmlFor="streetAddress">Street Address</label>
            <input type="text" id='streetAddress' {...register("streetAddress")} />
          </div>
          <div className="form-group">
            <label htmlFor="state"></label>
            <select id='state' {...register("state")}>
              <option value="MN">Minnesota</option>
              <option value="MT">Montana</option>
              <option value="WI">Wisconsin</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" {...register("country")} />
          </div>
        </fieldset>
        <fieldset>
          <legend>Alpaca Preferences</legend>
          <div className="form-group">
            <p>Favorite Alpaca Color</p>
            <label>Red <input type="radio" value="red" {...register("favColor")} /></label>
            <label>Brown <input type="radio" value="brown" {...register("favColor")} /></label>
          </div>
          <div className="form-group">
            <label>What do you like about Alpacas?</label>
            <textarea {...register("alpacaEssay")}></textarea>
          </div>
        </fieldset>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App
