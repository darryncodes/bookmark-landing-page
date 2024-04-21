import { useState } from 'react';
import { tabsInfo } from './tabsInfo';
import Button from './../Button/Button';
import Grid from './../UI/Grid/Grid';
import Centralised from './../UI/Centralised/Centralised';
import styles from './Tabs.module.css';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section>
            <Centralised>
                <h2>Features</h2>
                <p>
                    Our aim is to make it quick and easy for you to access your
                    favourite websites. Your bookmarks sync between your devices
                    so you can access them on the go.
                </p>
            </Centralised>
            <div className={styles.headings}>
                {tabsInfo.map((tab, index) => (
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
                    <img src={tabsInfo[activeTab].img} alt='' />
                </div>
                <div className={styles.content}>
                    <h3>{tabsInfo[activeTab].heading}</h3>
                    <p>{tabsInfo[activeTab].content}</p>
                    <Button margin='2rem 0 0 0'>More info</Button>
                </div>
            </Grid>
        </section>
    );
};

export default Tabs;
