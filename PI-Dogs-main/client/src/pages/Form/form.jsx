import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fetchTemperaments, createDog } from "../../redux/action/actions"
import styles from "./form.module.css"

const validate = (input) => {
    let errors = {};
    let twoSpaceExpression = /\s{2,}/g
    let expression = /^[a-zA-Z ]+$/gm;
    let imgExpression = /(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/g;

    if (!input.name) {
        errors.name = "Name is required";
    } else if (input.name.length === 1) {
        errors.name = "Name can not have less than 2 characters"
    } else if (input.name.length > 200) {
        errors.name = "Name can not have more than 200 caracters"
    }
    if (twoSpaceExpression.test(input.name)) {
        errors.name = "Please, write a valid name"
    }
    if (!input.heightMax || !input.heightMin) {
        errors.height = "Height is required";
    }
    if (!input.weightMax || !input.weightMin) {
        errors.weight = "Weight is required";
    }

    if (!input.img) {
        errors.img = "Image is required";
    } else if (!imgExpression.test(input.img)) {
        errors.img = "Invalid URL :("
    }

    if (parseInt(input.name)) {
        errors.name = "Name is invalid, write a text";
    } else if (!expression.test(input.name)) {
        errors.name = "Special caracters aren't supported";
    }

    if (!input.age) {
        errors.age = "Life span is required";
    } else if (input.age > 20 || input.age < 1) {
        errors.age = " life span must be in a number from 1 - 20";
    }

    if (Number(input.weightMin) <= 0 || Number(input.weightMin >= 100)) {
        errors.weight = "Minimum heigh must be in a number from 0 - 100";
    }
    if (Number(input.weightMin) > Number(input.weightMax)) {
        errors.weight = "Minimun weight can not be greater than maximum"
    }
    if (Number(input.weightMax) <= 0 || Number(input.weightMax > 100)) {
        errors.weight = "Maximun weight must be in a number from 0 - 150";
    }
    if (Number(input.heightMin) <= 0 || Number(input.heightMin) >= 100) {
        errors.height = "Minimun height must be in a number from 0 - 100";
    }
    if (Number(input.heightMax) <= 0 || Number(input.heightMax) > 100) {
        errors.height = "Maximun height must be in a number from 0 - 100";
    }
    if (Number(input.heightMin) > Number(input.heightMax)) {
        errors.height = "Minimun height can not be greater than maximum"
    }
    if (input.temperament.length) {
        errors.temperament = "Select at least 1 temperament";
    }
    return errors;
};


export const DogsForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const temperaments = useSelector((state) => state.temperaments);
    const [errors, setErrors] = useState("");
    const [input, setInput] = useState({
        name: "",
        age: "",
        img: "",
        temperament: [],
        weightMin: "",
        weightMax: "",
        heightMin: "",
        heightMax: "",
    });

    useEffect(() => {
        dispatch(fetchTemperaments());
    }, [dispatch]);

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }

    function handleSelect(e) {
        if (input.temperament.find((t) => t.id === e.target.value.split(",")[0])) {
            console.log({ input });
            alert("Already in the list");
        } else {
            setInput({
                ...input,
                temperament: [
                    ...input.temperament,
                    {
                        id: e.target.value.split(",")[0],
                        name: e.target.value.split(",")[1],
                    },
                ],
            });
        }
    }

    const handleDelete = (e) => {
        setInput({
            ...input,
            temperament: input.temperament.filter((el) => el !== e),
        });
    };

    function handleSubmit(e) {
        if (
            input.name &&
            !parseInt(input.name) &&
            input.age &&
            input.weightMin &&
            input.weightMax &&
            input.heightMin &&
            input.heightMax &&
            input.img &&
            input.temperament &&
            input.temperament.length > 0
        ) {
            e.preventDefault();
            dispatch(
                createDog({
                    name: input.name,
                    age: input.age,
                    img: input.img,
                    heightMax: input.heightMax,
                    heightMin: input.heightMin,
                    weightMax: input.weightMax,
                    weightMin: input.weightMin,
                    temperament: input.temperament.map((t) => Number(t.id)),
                })
            );

            alert("Success! Your dog was created");
            setInput({
                name: "",
                age: "",
                weightMin: "",
                weightMax: "",
                heightMin: "",
                heightMax: "",
                img: "",
                temperament: [],
            });
            history.push("/home")
        } else {
            alert("incomplete or wrong information");
            e.preventDefault();
        }
    }

    return (
        <div className={styles.background}>
        <div className={styles.container}>


            <form className={styles.form}
                onSubmit={(e) => {
                    handleSubmit(e);
                }}
            >
                <Link className={styles.button7} to="/home">
                    Return
                </Link>
                <h3 className={styles.title}>Create your own breed</h3>
                {/* Inputs */}
                <div className={styles.inputContainer}>
                    {/* BreedName */}
                    <div >
                        <input
                        className={styles.input}
                            type="text"
                            placeholder="Breed name"
                            value={input.name}
                            name="name"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    {errors.name && <a className={styles.error}>{errors.name}</a>}
                    <br />
                    {/* life span */}
                    <div>
                        <input
                            className={styles.input}
                            type="number"
                            placeholder="Life span"
                            value={input.age}
                            name="age"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    {errors.age && <a className={styles.error}>{errors.age}</a>}
                    <br />
                    <div>
                        {/* heightMax */}
                        <div>
                            <input
                                className={styles.input}
                                type="number"
                                min="0"
                                placeholder="Maximun height"
                                value={input.heightMax}
                                name="heightMax"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <br />
                        {/* heightMin */}
                        <div>
                            <input
                            className={styles.input}
                                type="number"
                                min="0"
                                placeholder="Minimum height"
                                value={input.heightMin}
                                name="heightMin"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        {(errors.height && <a className={styles.error}>{errors.height}</a>)}
                    </div>
                    <br />
                    <div>
                        {/* weightMax */}
                        <div>
                            <input
                                className={styles.input}
                                type="number"
                                min="0"
                                placeholder="Maximun weight"
                                value={input.weightMax}
                                name="weightMax"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <br />
                        {/* weightMin */}
                        <div>
                            <input
                                className={styles.input}
                                type="number"
                                min="0"
                                placeholder="Minimum weight"
                                value={input.weightMin}
                                name="weightMin"
                                onChange={(e) => handleChange(e)}
                                
                            />
                        </div>
                        {(errors.weight && <a className={styles.error}>{errors.weight}</a>)}
                    </div>
                    <br />
                    {/* Image */}
                    <div>
                        <input
                            className={styles.input}
                            type="URL"
                            placeholder="Url of image"
                            value={input.img}
                            name="img"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    {errors.img && <a className={styles.error}>{errors.img}</a>}
                    <br />
                    {/* Temperament */}
                    <div>
                        <select className={input.temperament.length >= 6 ? styles.notInput : styles.input} onChange={(e) => handleSelect(e)}>
                            {temperaments?.map((el, i) => (
                                <option value={`${el.id},${el.name}`} key={i}>
                                    {el.name}
                                </option>
                            ))}
                        </select>
                        <div >
                            {input.temperament.map((el, i) => (
                                <button className={styles.button7}
                                    key={i}
                                    type="reset"
                                    onClick={() => handleDelete(el)}
                                > 
                                    
                                    {el.name}
                                </button> 
                                
                            ))}&nbsp;
                            <br />
                            <span style={{color: "white"}}>Select 1 to 6 temperaments</span>
                            <br/>

                            <button className={styles.submit}
                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Create breed
                        </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}