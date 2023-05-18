import { FunctionComponent } from "react";
import styles from "./Card.module.scss";

type CardProps = {
    title: string;
    score: number;
};

const Card: FunctionComponent<CardProps> = ({ title, score }) => {
    const getStyle = (text: string) => {
        switch (text) {
            case "Reaction":
                return {
                    background: "hsla(0, 100%, 67%, 0.1)",
                    color: "hsl(0, 100%, 67%)",
                };
            case "Memory":
                return {
                    background: "hsla(39, 100%, 56%, 0.1)",
                    color: "hsl(39, 100%, 56%)",
                };
            case "Verbal":
                return {
                    background: "hsla(166, 100%, 37%, 0.1)",
                    color: "hsl(166, 100%, 37%)",
                };
            case "Visual":
                return {
                    background: "hsla(234, 85%, 45%, 0.1)",
                    color: "hsl(234, 85%, 45%)",
                };
            default:
                return {
                    background: "hsla(0, 100%, 67%, 0.1)",
                    color: "hsl(0, 100%, 67%)",
                };
        }
    };

    return (
        <div className={styles.card} style={getStyle(title)}>
            <h4>{title}</h4>
            <p>
                {score}
                <span>/</span>
                <span className={styles.total}>100</span>
            </p>
        </div>
    );
};

export default Card;
