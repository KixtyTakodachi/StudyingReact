import Loader from "../../../assets/images/Loading.svg";
import classes from './Preloader.module.css'

let Preloader = (props) => {
    return <img alt="loader" src={Loader} className = {classes.loader}/>
}

export default Preloader;