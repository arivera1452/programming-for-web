import './App.css';
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  function getFormData(data) {
    console.log("form data", data);
  }

  return (
    <div>
      <h1>Alpaca Fan Club</h1>
      <form onSubmit={handleSubmit(getFormData)}>
        <fieldset>
          <legend>Personal Data</legend>
          <div className='form-group'>
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' {...register("firstName")} />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input {...register("lastName")} />
          </div>
          <div className="form-group">
            <label htmlFor="state"></label>
            <select id='state' {...register("state")}>
              <option value="MN">Minnesota</option>
              <option value="MT">Montana</option>
              <option value="WI">Wisconsin</option>
            </select>
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
