import { useState } from 'react';
import { info } from './info';
import Button from './../Button/Button';
import Grid from './../UI/Grid/Grid';
import styles from './Tabs.module.css';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section>
            <div className={styles.headings}>
                {info.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`${index === activeTab && styles.active} ${
                            styles.btn
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <Grid>
                <div>
                    <img src={info[activeTab].img} alt='' />
                </div>
                <div className={styles.content}>
                    <h3>{info[activeTab].heading}</h3>
                    <p>{info[activeTab].content}</p>
                    <Button margin='2rem 0 0 0'>More info</Button>
                </div>
            </Grid>
        </section>
    );
};

export default Tabs;
