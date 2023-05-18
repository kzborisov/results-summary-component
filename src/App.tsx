import styles from "./App.module.scss";
import data from "../../data.json";
import Card from "./components/Card";
import React from "react";

function App() {
    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        alert("Button clicked");
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h5 className={styles.headerTitle}>Your Results</h5>

                    <div className={styles.score}>
                        <h6 className={styles.mainScore}>76</h6>
                        <p>of 100</p>
                    </div>

                    <h4 className={styles.result}>Great</h4>
                    <p className={styles.comment}>
                        You scored higher than 65% of the people who have taken
                        these tests.
                    </p>
                </div>
                <div className={styles.mainContent}>
                    <h3 className={styles.summary}>Summary</h3>

                    <div className={styles.resultsContainer}>
                        {data.map((elem, idx) => (
                            <React.Fragment key={idx}>
                                <Card
                                    title={elem.category}
                                    score={elem.score}
                                    icon={elem.icon}
                                />
                            </React.Fragment>
                        ))}
                        {/* <div className={`${styles.card} ${styles.reaction}`}>
                            <h4>Reaction</h4>
                            <p>
                                80
                                <span>/</span>
                                <span className={styles.total}>100</span>
                            </p>
                        </div>

                        <div className={`${styles.card} ${styles.memory}`}>
                            <h4>Memory</h4>
                            <p>
                                92
                                <span>/</span>
                                <span className={styles.total}>100</span>
                            </p>
                        </div>

                        <div className={`${styles.card} ${styles.verbal}`}>
                            <h4>Verbal</h4>
                            <p>
                                61
                                <span>/</span>
                                <span className={styles.total}>100</span>
                            </p>
                        </div>

                        <div className={`${styles.card} ${styles.visual}`}>
                            <h4>Visual</h4>
                            <p>
                                72
                                <span>/</span>
                                <span className={styles.total}>100</span>
                            </p>
                        </div> */}
                    </div>

                    <button className={styles.btn} onClick={handleClick}>
                        Continue
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
