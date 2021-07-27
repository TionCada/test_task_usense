import {useEffect} from "react";
import {interval} from 'rxjs';
import s from './App.module.css'

function App() {

    const create_random_string = () => {
        let random_string = '';
        const string_length = 5;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < string_length; i++) {
            random_string += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        return random_string
    }

    const checkPalindrom = (str) => {
        return str === str.split('').reverse().join('');
    }

    const checkOnlyNumbers = (str) => {
        return /^\d+$/.test(str);
    }

    const checkIfContainZero = (str) => {
        return str.includes('0');
    }

    useEffect(() => {

        const element = document.getElementById('result');
        const source = interval(3000);
        source.subscribe(val => {
            let generated_string = create_random_string()
            if (checkPalindrom(generated_string)) {
                element.style.color = 'red'
            }
            if (checkOnlyNumbers(generated_string)) {
                element.style.color = 'blue'
            }
            if (checkIfContainZero(generated_string)) {
                element.style.display = 'none'
            }
            element.innerHTML = generated_string
        });
    })

    return (
        <div className={s.container}>
            <div className={s.result}>
                <p id="result"></p>
            </div>
        </div>
    );
}

export default App;
