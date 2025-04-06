import { useForm } from "react-hook-form";
import "./NewCommanderForm.css";
export function NewCommanderForm(props) {
    const { addCommanderFn } = props;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    function handleSubmitJob(data) {
        addCommanderFn(data);
        reset();
    }
    return (
        <div className="form-wrapper">
            <h2>You built ANOTHER deck?</h2>
            <h4>please fill this out...</h4>
            <form onSubmit={handleSubmit(handleSubmitJob)}>
                <div className="form-group">
                    <label htmlFor='commanderName'>Commander's Name</label>
                    <input id='commanderName' {...register("commander", { required: true })} />
                    {errors.commander && (<p className="error">A commander is required</p>)}
                </div>
                <div className="form-group">
                    <label htmlFor="commanderImage">Image</label>
                    <input {...register("image", { required: true })} />
                    {errors.image && (<p className='error'>An image is required</p>)}
                </div>
                <div className="form-group">
                    <p>Commander Colors</p>
                    <label><input value="white" type="checkbox" {...register("colors")} /> White</label>
                    <label><input value="blue" type="checkbox" {...register("colors")} /> Blue</label>
                    <label><input value="black" type="checkbox" {...register("colors")} /> Black</label>
                    <label><input value="red" type="checkbox" {...register("colors")} /> Red</label>
                    <label><input value="green" type="checkbox" {...register("colors")} /> Green</label>
                </div>
                <div className="form-group">
                    <label htmlFor="deckNickname">Nickname</label>
                    <input id="deckNickname" {...register("nickname")} />
                </div>
                <div className="form-group">
                    <label htmlFor="colorIdentity">Color Identity</label>
                    <input id="colorIdentity" {...register("identity")} />
                </div>
                <div className="form-group">
                    <label htmlFor="commanderTheme">Theme</label>
                    <textarea id='commanderTheme' {...register("theme")} />
                </div>
                <button type='submit'>Add Commander</button>
            </form>
        </div>
    )
}